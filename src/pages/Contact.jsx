import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!form.name.trim())
      validationErrors.name = "Name is required";

    if (!form.email.trim())
      validationErrors.email = "Email is required";

    if (!form.message.trim())
      validationErrors.message =
        "Message is required";

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0
    ) {
      alert("Message Sent Successfully");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      nameRef.current.focus();
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />

        {errors.message && (
          <p className="error">
            {errors.message}
          </p>
        )}

        <button className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;