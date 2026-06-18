import { useState } from "react";

function Contact() {
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [errors, setErrors] =
    useState({});

  const [success, setSuccess] =
    useState("");

  const validate = () => {
    const newErrors = {};

    if (form.name.length < 3) {
      newErrors.name =
        "Name must be at least 3 characters";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(form.email)
    ) {
      newErrors.email =
        "Please enter a valid email";
    }

    if (
      form.message.length < 10
    ) {
      newErrors.message =
        "Message must contain at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      validate();

    if (
      Object.keys(
        validationErrors
      ).length > 0
    ) {
      setErrors(
        validationErrors
      );
      return;
    }

    setErrors({});

    setSuccess(
      "Message sent successfully!"
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>

        {success && (
          <div className="success-box">
            {success}
          </div>
        )}

        <form
          onSubmit={
            handleSubmit
          }
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={
              handleChange
            }
          />

          {errors.name && (
            <small className="error">
              {errors.name}
            </small>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={
              handleChange
            }
          />

          {errors.email && (
            <small className="error">
              {errors.email}
            </small>
          )}

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={
              handleChange
            }
          />

          {errors.message && (
            <small className="error">
              {errors.message}
            </small>
          )}

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;