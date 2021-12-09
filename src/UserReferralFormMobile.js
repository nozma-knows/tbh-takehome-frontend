import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./UserReferralFormMobile.css";

export default function UserReferralFormMobile() {
  // Boolean of whether or not form can be submitted
  const [isValid, setIsValid] = useState(false);

  // Variables for managing state of Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onChange" });

  // Updates isValid variable
  // If no fields are empty and email is valid, form can be submitted
  const updateIsValid = () => {
    if (
      watch("firstName") &&
      watch("lastName") &&
      watch("emailAddress") &&
      Object.keys(errors).length === 0
    ) {
      setIsValid(true);
      console.log("valid");
    } else {
      setIsValid(false);
      console.log("not valid");
    }
  };

  // Calls updateIsValid on every rerender
  useEffect(() => {
    updateIsValid();
  });

  // Submits form data in JSON format for API when Submit button is clicked
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="UserReferralFormMobile" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="UserReferralFormMobile-Name-Input"
        placeholder="First name"
        {...register("firstName", { required: true })}
      />
      <input
        className="UserReferralFormMobile-Name-Input"
        placeholder="Last name"
        {...register("lastName", { required: true })}
      />
      <div className="UserReferralFormMobile-Email">
        <input
          className="UserReferralFormMobile-Email-Input"
          placeholder="Email"
          {...register("emailAddress", {
            required: true,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
        />
        <div className="UserReferralFormMobile-Invalid-Email">
          {errors.emailAddress?.type === "pattern" && "invalid email"}
        </div>
      </div>
      <input
        className="UserReferralFormMobile-Button"
        style={
          isValid ? { opacity: "100%", cursor: "pointer" } : { opacity: "25%" }
        }
        type="submit"
        disabled={!isValid}
      />
    </form>
  );
}
