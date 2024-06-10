import "./footer-styles.css";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="help">
        <img src="/img/help_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        <NavLink to="/Help">
          <h3>Поддержка</h3>
        </NavLink>
      </div>
      <hr />
      <div>
        <NavLink to="/about">
          <h3> О нас</h3>
        </NavLink>
      </div>
      <hr />
      <div className="contacs">
        <img src="/img/group_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
        <NavLink to="/Contact">
          <h3> Контакты</h3>
        </NavLink>
      </div>
    </footer>
  );
}
