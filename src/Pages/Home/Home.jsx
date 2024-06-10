import Footer from "../../components/footer/footer";
import "./home-styles.css";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";

export default function Home() {

  return (
    <>
      <Helmet>
        <title>TravelTrove</title>
        <body className="Home"></body>
      </Helmet>
      <div className="main-img">
        <img src="/img/313564245.jpeg" alt="" />
      </div>
      <div className="places">
        <h2 className="txt-places">Популярные направления</h2>
        <p>Куда чаще всего отправляются путешественники из России.</p>
        <div className="popular-places">
          <div>
            <NavLink to="/Stambyl">
              <img src="/img/977227.jpg" alt="" />
            </NavLink>
            <p>Стамбул</p>
          </div>
          <div>
            <NavLink to="/dubai">
              <img src="/img/977220.jpg" alt="" />
            </NavLink>
            <p>Дубай</p>
          </div>
          <div>
            <NavLink to="/erevan">
              <img src="/img/685453.jpg" alt="" />
            </NavLink>
            <p>Ереван</p>
          </div>
          <div>
            <NavLink to="/Tbilisi">
              <img src="/img/691464.jpg" alt="" />
            </NavLink>
            <p>Тбилиси</p>
          </div>
          <div>
            <NavLink to="/Rim">
              <img src="/img/977192.jpg" alt="" />
            </NavLink>
            <p>Рим</p>
          </div>
        </div>
        <h2>Поиск по типу размещения</h2>
        <div className="type-home">
          <div>
            <img src="/img/57584488.jpeg" alt="" />
            <p>Отели</p>
          </div>
          <div>
            <img src="/img/52979454.jpeg" alt="" />
            <p>Шале</p>
          </div>
          <div>
            <img src="/img/45450084.jpeg" alt="" />
            <p>Курортные отели</p>
          </div>
          <div>
            <img src="/img/100235855.jpeg" alt="" />
            <p>Виллы</p>
          </div>
        </div>
        <h2 className="txt-places">Дома, которые нравятся гостям</h2>
        <div className="cards-fav">
          <div className="card">
            <img src="/img/87375132.jpg" alt="" />
            <h4>Aparthotel Stare Miasto</h4>
            <p>Старый город, Польша, Kraków</p>
            <div className="reviews">
              <div>8.7</div>
              <p>Потрясающе · 2 721 отзыв</p>
            </div>
            <h5>
              От <strong>8 068 руб.</strong>
            </h5>
          </div>
          <div className="card">
            <img src="/img/95058973.jpg" alt="" />
            <h4>Epoques Apartments by Adrez</h4>
            <p>Прага 01, Чехия, Praha</p>
            <div className="reviews">
              <div>8.7</div>
              <p>Потрясающе · 568 отзывов</p>
            </div>
            <h5>
              От <strong>6 363 руб.</strong>
            </h5>
          </div>
          <div className="card">
            <img src="/img/303933962.jpg" alt="" />
            <h4>Apartments Budapest</h4>
            <p>Венгрия, Budapest</p>
            <div className="reviews">
              <div>8.8</div>
              <p>Потрясающе · 10 427 отзывов</p>
            </div>
            <h5>
              От <strong>7 548 руб.</strong>
            </h5>
          </div>
          <div className="card">
            <img src="/img/44146554.jpg" alt="" />
            <h4>Villa Domina</h4>
            <p>Split City Centre, Хорватия, Split</p>
            <div className="reviews">
              <div>8.7</div>
              <p>Превосходно · 1 282 отзыва</p>
            </div>
            <h5>
              От <strong>4 492 руб.</strong>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
