import React from "react";
import { useForm } from "react-hook-form";
import "./UserReferralFormWeb.css";

export default function UserReferralFormWeb() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

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
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "invalid email",
            },
          })}
        />
        <div className="UserReferralFormWeb-Invalid-Email">
          {errors.email?.type === "pattern" && "invalid email"}
        </div>
      </div>
      <input
        className="UserReferralFormWeb-Button"
        // style={formState.isValue ? { opacity: "100%" } : { opacity: "25%" }}
        type="submit"
        // disabled={!formState.isValid}
      />
    </form>
  );
}

// const {
//   register,
//   formState: { errors },
//   handleSubmit,
// } = useForm();

// const onSubmit = (data) => console.log(data);
// form className="UserReferral-Form" onSubmit={handleSubmit(onSubmit)}>
//   <div
//     className="UserReferral-Form-Name"
//     // style={display === "web" ? {} : { flexDirection: "colum" }}
//   >
//     <input
//       className="UserReferral-Form-Input"
// {...register("firstName", { required: true })}
//     />
//     <input
//       className="UserReferral-Form-Input"
//       {...register("lastName", { required: true })}
//     />
//   </div>
//   <input
//     className="UserReferral-Form-Input"
//     {...register("email", { required: true })}
//   />
//   <input type="submit" />
// </form>
