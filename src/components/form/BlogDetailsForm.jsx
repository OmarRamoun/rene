import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const BlogDetailsForm = () => {
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(" Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    sendMessage: Yup.string().required("Please,leave us a message."),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    // display form data on success
    console.log("Message submited: " + JSON.stringify(data));
    e.target.reset();
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-35">
            <label>Name</label>
            <input
              placeholder="Michel"
              name="name"
              type="text"
              {...register("name")}
              className={`${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name?.message}</div>
            )}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-35">
            <label>Your Email</label>
            <input
              placeholder="Email Address"
              name="email"
              type="text"
              {...register("email")}
              className={` ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta lg mb-35">
            <label>Your Message</label>
            <textarea
              placeholder="Your message"
              name="sendMessage"
              type="text"
              {...register("message")}
              className={`${errors.sendMessage ? "is-invalid" : ""}`}
            ></textarea>
            {errors.sendMessage && (
              <div className="invalid-feedback">
                {errors.sendMessage?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col-12">
          <button className="theme-btn-one btn-lg">Post Comment</button>
        </div>
      </div>
    </form>
  );
};

export default BlogDetailsForm;
