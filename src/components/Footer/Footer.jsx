import { Contacts } from "./Contacts/Contacts";
import { Feedback } from "./Feedback/Feedback";
import s from "./Footer.module.css";
import { Services } from "./Services/Services";

export const Footer = () => {
  return (
    <section className={s.footer}>
      <div>
        <div className={s.info}>
          <Services />
          <Contacts />
        </div>
        <p>Copyright © 2024 Homewell. All rights reserved</p>
      </div>
      <Feedback />
    </section>
  );
};
