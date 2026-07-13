import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { Snackbar, Alert } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
`;

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 40px;
`;

const Desc = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${({ theme }) => theme.card};
  padding: 30px;
  border-radius: 15px;
`;

const ContactTitle = styled.h3`
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const now = new Date();

    const currentTime = now.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    // Add time value to the form
    const formData = new FormData(form.current);

    formData.append("time", currentTime);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )

    .then(() => {
      setLoading(false);
      setOpen(true);
      form.current.reset();
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      setError(true);
    });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>

        <Desc>
          Feel free to contact me for internships, jobs, freelance work, or
          collaboration.
        </Desc>

        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <input
            type="hidden"
            name="time"
            // value={new Date().toLocaleString()}
            value={new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          />

          <ContactInput
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <ContactInput
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <ContactInput
            type="text"
            name="title"
            placeholder="Subject"
            required
          />

          <ContactInputMessage
            rows="6"
            name="message"
            placeholder="Message"
            required
          />

          <ContactButton disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </ContactButton>
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" variant="filled">
            Email sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setError(false)}
        >
          <Alert severity="error" variant="filled">
            Failed to send email.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
