import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required(),
  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters long")
    .required(),
  email: yup
    .string()
    .email()
    .required("Email must be in correct format: example@mail.com"),
  body: yup.string().min(3, "Message must be at least 3 characters").required(),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  function onSubmit(formData) {
    console.log(formData);
    alert("Message is sent!");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="display-flex-column m-b-10">
        <label htmlFor="fullName">Full name</label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
          })}
          placeholder="Full name"
        />
        <p className="error">{errors.fullName?.message}</p>
      </div>
      <div className="display-flex-column m-b-10">
        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject", {
            required: true,
            minLength: 3,
          })}
          placeholder="Subject"
        />
        <p className="error">{errors.subject?.message}</p>
      </div>
      <div className="display-flex-column m-b-10">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          })}
          placeholder="Email"
        />
        <p className="error">{errors.email?.message}</p>
      </div>
      <div className="display-flex-column">
        <label htmlFor="body">Message</label>
        <input
          {...register("body", {
            required: true,
            minLength: 3,
          })}
          placeholder="Message"
        />
        <p className="error">{errors.body?.message}</p>
      </div>
      <button className="primary-button m-t-20" type="submit">
        Send message
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="TrendTrove - Contact page" />
      </Helmet>
      <div className="p-l-20 p-r-20 max-width">
        <h1>Contact</h1>
        <p className="p-l-5 p-r-5">
          Feel free to contact us if you have any questions, problems or
          recommendations! We would love to hear from you.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
