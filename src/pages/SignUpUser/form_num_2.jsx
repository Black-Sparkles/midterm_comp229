import React from "react";
import { useForm } from "react-hook-form";
import "./form_num_2.css";
function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="form">
      <span className="form__name">
        <b>Sign Up Form</b>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form__name">First Name</label>
        <input
          {...register("firstName", { required: "First name is required" })}
          className="form__inputs"
        />
        {errors.firstName && (
          <p className="form__password">{errors.firstName.message}</p>
        )}

        <label className="form__name">Last Name</label>
        <input
          {...register("lastName", { required: "Last name is required" })}
          className="form__inputs"
        />
        {errors.lastName && (
          <p className="form__password">{errors.lastName.message}</p>
        )}

        <label className="form__name">Username</label>
        <input
          {...register("userName", { required: "A Username is required" })}
          className="form__inputs"
        />
        {errors.userName && (
          <p className="form__password">{errors.userName.message}</p>
        )}

        <label className="form__name">Email</label>
        <input
          type="email"
          className="form__inputs"
          {...register("email", {
            required: "A Email address is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid Email",
            },
          })}
        />
        {errors.email && (
          <p className="form__password">{errors.email.message}</p>
        )}

        <label className="form__name">Password</label>
        <input
          type="password"
          className="form__inputs"
          {...register("password", { required: "A Password is required" })}
        />
        {errors.password && (
          <p className="form__password">{errors.password.message}</p>
        )}

        <label className="form__name">Confirm Password</label>
        <input
          type="password"
          className="form__inputs"
          {...register("confirmedPassword", {
            required: "Please Confirm your password",
            validate: (value) =>
              value === getValues().password || "Passwords do not  match",
          })}
        />
        {errors.confirmedPassword && (
          <p className="form__password">{errors.confirmedPassword.message}</p>
        )}

        <button className="form__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpUser;
