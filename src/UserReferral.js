import React, { useState, useEffect } from "react";
import UserReferralFormWeb from "./UserReferrallFormWeb";
import UserReferralFormMobile from "./UserReferralFormMobile";
import "./UserReferral.css";
import gif from "./gifs/airplane-mail-paper-plane.gif";

export default function UserReferralForm() {
  // Holds state of screen width for handling resize
  const [width, setWidth] = useState(window.innerWidth);

  // Breakpoint for switching between Web and Mobile layout
  const mobileBreakpoint = 600;

  // Function for updating screen width
  const updateWidth = () => {
    setWidth(window.innerWidth);
    console.log("Width: ", window.innerWidth);
  };

  // Calls updateWidth on every rerender
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

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
      {width > mobileBreakpoint ? (
        <UserReferralFormWeb />
      ) : (
        <UserReferralFormMobile />
      )}
    </div>
  );
}
