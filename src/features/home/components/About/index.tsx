import Image from "next/image";
import React from "react";
import s from "../../view/styles.module.scss";


const About = () => {
    return ( 
        <div className={s.AboutSection}>
            <div className={s.AboutWrapper}>
                <div className={s.ImageWrapper}>
                    <Image
                        width={1200}
                        height={1200}
                        src="/images/mines/HeroBanner.jpg"
                        alt="Hero banner"
                        priority
                        loading="eager"
                        
                    />
                </div>
                <div className={s.summaryWrapper}></div>
            </div>
        </div>
     );
};
 
export default About;