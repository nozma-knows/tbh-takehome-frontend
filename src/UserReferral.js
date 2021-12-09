import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./UserReferral.css";
import gif from "./gifs/airplane-mail-paper-plane.gif";

export default function UserReferral() {
  // Holds state of screen width for handling resize
  const [width, setWidth] = useState(window.innerWidth);

  // Breakpoint for switching between Web and Mobile layout
  const mobileBreakpoint = 600;

  // Function for updating screen width
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // Boolean of whether or not form can be submitted
  const [isValid, setIsValid] = useState(false);

  // Variables for managing state of Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
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
    } else {
      setIsValid(false);
    }
  };

  // Calls updateIsValid and updateWidth on every rerender
  useEffect(() => {
    updateIsValid();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  // Submits form data in JSON format for API when Submit button is clicked
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="UserReferral">
      <div className="UserReferral-Logo">/tbh.</div>
      <img src={gif} alt="loading..." className="UserReferral-Image" />
      <div className="UserReferral-Header">Refer a friend!</div>
      <div
        className="UserReferral-Subheader"
        style={
          width > mobileBreakpoint
            ? { width: 600, height: 32 }
            : { width: 320, heigth: 64 }
        }
      >
        If they attend their first session, you'll both get points!
      </div>
      <form className="UserReferral-Form" onSubmit={handleSubmit(onSubmit)}>
        {width > mobileBreakpoint ? (
          // Web Layout
          <>
            <div className="UserReferral-Form-Name-Container">
              <input
                className="UserReferral-Form-Web-Name-Input"
                style={{ marginRight: 8 }}
                placeholder="First name"
                {...register("firstName", { required: true })}
              />
              <input
                className="UserReferral-Form-Web-Name-Input"
                style={{ marginLeft: 8 }}
                placeholder="Last name"
                {...register("lastName", { required: true })}
              />
            </div>
            <div className="UserReferral-Form-Email-Container">
              <input
                className="UserReferral-Form-Web-Email-Input"
                placeholder="Email"
                {...register("emailAddress", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                })}
              />
              <div className="UserReferral-Form-Invalid-Email">
                {errors.emailAddress?.type === "pattern" && "invalid email"}
              </div>
            </div>
            <input
              className="UserReferral-Form-Button"
              style={
                isValid
                  ? { opacity: "100%", cursor: "pointer" }
                  : { opacity: "25%" }
              }
              type="submit"
              disabled={!isValid}
            />
          </>
        ) : (
          // Mobile Layout
          <>
            <input
              className="UserReferral-Form-Mobile-Name-Input"
              placeholder="First name"
              {...register("firstName", { required: true })}
            />
            <input
              className="UserReferral-Form-Mobile-Name-Input"
              placeholder="Last name"
              {...register("lastName", { required: true })}
            />
            <div className="UserReferral-Form-Email-Container">
              <input
                className="UserReferral-Form-Mobile-Email-Input"
                placeholder="Email"
                {...register("emailAddress", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  },
                })}
              />
              <div className="UserReferral-Form-Invalid-Email">
                {errors.emailAddress?.type === "pattern" && "invalid email"}
              </div>
            </div>
            <input
              className="UserReferral-Form-Button"
              style={
                isValid
                  ? { opacity: "100%", cursor: "pointer" }
                  : { opacity: "25%" }
              }
              type="submit"
              disabled={!isValid}
            />
          </>
        )}
      </form>
    </div>
  );
}
