import React from "react";
import s from "../../view/styles.module.scss";

const EmailSection = () => {
    const email = "tamiaindah66000@gmail.com";
    return (
      <div className={s.marqueeEmail}>
        <div className={s.container}>
          <marquee className={s.email}>
            <ul>
              <li>{email}</li>
              <li>{email}</li>
              <li>{email}</li>
            </ul>
          </marquee>
        </div>
      </div>
    );
  };
  
  export default EmailSection;
  