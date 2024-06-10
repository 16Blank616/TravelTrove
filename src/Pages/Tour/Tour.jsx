import { Helmet } from "react-helmet";
import { NavLink, useParams } from "react-router-dom";
import { arr } from "../../Data/Data";
import { useDispatch, useSelector } from "react-redux";
import "./tour-style.css";

function Tour() {
  const { id } = useParams();
  const product = arr[id];

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const addTour = () => {
    if (isAuthenticated) {
      alert("Ваша заявка в обработке...");
    } else {
      alert(
        "Пожалуйста, авторизуйтесь или зарегестрируйтесь, чтобы продолжить!"
      );
    }
  };

  return (
    <>
      <Helmet>
        <body></body>
        <title>{product.title}</title>
      </Helmet>
      <div className="tour">
        <img src={product.img} alt="" />
        <div className="info-tour">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <input placeholder="Имя" type="text" />
          <input placeholder="Фимилия" type="text" />
          <input placeholder="Номер телефона" type="text" />
          <button onClick={addTour} className="add-tour">
            Оформить
          </button>
        </div>
      </div>
      <div className="more">
        <h4 className="more">
          {product.more} <br />
          {product.more1} <br />
          {product.more2} <br /> <br />
          {product.more3} <br />
          {product.more4}
        </h4>
      </div>
    </>
  );
}

export default Tour;
