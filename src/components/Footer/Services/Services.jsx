import s from "./Services.module.css";

export const Services = () => {
  return (
    <div className={s.servicesAndHelpWrap}>
      <div className={s.servicesAndHelpBox}>
        <h3 className={s.title}>Services and help</h3>
        <ul className={s.servisList}>
          <li className={s.servisItem}>
            <div className={s.servisBtn}>About us</div>
          </li>
          <li className={s.servisItem}>
            <div className={s.servisBtn}>Shop by categories</div>
          </li>
          <li className={s.servisItem}>
            <div className={s.servisBtn}>Delivery</div>
          </li>
          <li className={s.servisItem}>
            <div className={s.servisBtn}>Return policy</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
