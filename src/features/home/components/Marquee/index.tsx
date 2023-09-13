import { socialMediaLinks } from "@utils/socialMediaLinks";
import Link from "next/link";
import React from "react";
import s from "../../view/styles.module.scss";

const EmailSection = () => {
    const email = "tamiaindah66000@gmail.com";
    return (
      <div className={s.marqueeEmail}>
        <div className={s.container}>
          <marquee className={s.email}>
            <ul>
              <li>
                <Link href={socialMediaLinks.email} target="_blank" title="Email">{email}</Link>
              </li>
              <li>
                <Link href={socialMediaLinks.email} target="_blank" title="Email">{email}</Link>
              </li>
              <li>
                <Link href={socialMediaLinks.email} target="_blank" title="Email">{email}</Link>
              </li>
              
            </ul>
          </marquee>
        </div>
      </div>
    );
  };
  
  export default EmailSection;
  