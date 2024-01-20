import { NavLink } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={s.notFoundBox}>
      <div className={s.topTextWrap}>
        <h2 className={s.title}>Uh-oh!</h2>
        <p className={s.text}>
          You&#039;ve stumbled upon the furniture version of a secret garden
        </p>
      </div>
      <div className={s.imgWrap}>
        <p className={s._404}>404</p>
      </div>
      <div className={s.bottomWrap}>
        <p className={s.text}>
          If you&#039;re eager to return to the familiar, our homepage is your
          guide back to the comfort
        </p>
        <NavLink to="/" className={s.button}>
          <span className={s.label}>Go back home</span>
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
