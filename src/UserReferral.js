import React, { useState, useEffect } from "react";
import "./UserReferral.css";
import gif from "./gifs/airplane-mail-paper-plane.gif";
import UserReferralFormWeb from "./UserReferrallFormWeb";
import UserReferralFormMobile from "./UserReferralFormMobile";

export default function UserReferralForm() {
  // Track screen width for handling resize
  const [width, setWidth] = useState(window.innerWidth);

  const mobileBreakpoint = 600;

  const updateWidth = () => {
    setWidth(window.innerWidth);
    console.log("Width: ", window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div className="UserReferral">
      <img src={gif} alt="loading..." className="UserReferral-GIF" />
      <div className="UserReferral-Title">Refer a friend!</div>
      <div
        className="UserReferral-Message"
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
