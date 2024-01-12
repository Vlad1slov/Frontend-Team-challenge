import s from "./Services.module.css";

export const Services = () => {
  return (
    <div>
      <h3>Services and help</h3>
      <ul className={s.servisList}>
        <li>
          <button>About us</button>
        </li>
        <li>
          <button>Shop by categories</button>
        </li>
        <li>
          <button>Delivery</button>
        </li>
        <li>
          <button>Return policy</button>
        </li>
      </ul>
    </div>
  );
};
