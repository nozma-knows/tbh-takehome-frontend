import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./UserReferralFormWeb.css";

export default function UserReferralFormWeb() {
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

  // Calls updateIsValid on every render
  useEffect(() => {
    updateIsValid();
  });

  // Submits form data in JSON format for API when Submit button is clicked
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form className="UserReferralFormWeb" onSubmit={handleSubmit(onSubmit)}>
      <div className="UserReferralFormWeb-Name">
        <input
          className="UserReferralFormWeb-Name-Input"
          style={{ marginRight: 8 }}
          placeholder="First name"
          {...register("firstName", { required: true })}
        />
        <input
          className="UserReferralFormWeb-Name-Input"
          style={{ marginLeft: 8 }}
          placeholder="Last name"
          {...register("lastName", { required: true })}
        />
      </div>
      <div className="UserReferralFormWeb-Email">
        <input
          className="UserReferralFormWeb-Email-Input"
          placeholder="Email"
          {...register("emailAddress", {
            required: true,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
          })}
        />
        <div className="UserReferralFormWeb-Invalid-Email">
          {errors.emailAddress?.type === "pattern" && "invalid email"}
        </div>
      </div>
      <input
        className="UserReferralFormWeb-Button"
        style={
          isValid ? { opacity: "100%", cursor: "pointer" } : { opacity: "25%" }
        }
        type="submit"
        disabled={!isValid}
      />
    </form>
  );
}
