import { Contacts } from "./Contacts/Contacts";
import { Feedback } from "./Feedback/Feedback";
import s from "./Footer.module.css";
import { Services } from "./Services/Services";

export const Footer = () => {
  return (
    <section className={s.footer}>
      <div className={s.mobGetInTouch}>
        <p className={s.questions}>Any questions?</p>
        <button className={s.btnGet}>
          <span className={s.btnLabel}>Get in touch</span>
        </button>
      </div>
      <div className={s.info}>
        <div className={s.servCont}>
          <Services />
          <Contacts />
        </div>
        <div className={s.bottomBar}>
          <p className={s.copyright}>
            Copyright © 2024 Homewell. All rights reserved
          </p>
        </div>
      </div>
      <div className={s.feedbackBox}>
        <Feedback />
      </div>
    </section>
  );
};
