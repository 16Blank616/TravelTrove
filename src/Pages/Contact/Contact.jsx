import "./Contact-styles.css";
import Helmet from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
        <body className="Contact"></body>
      </Helmet>
      <div className="footCon">
        <h5>Контакты</h5>
      </div>
      <div className="main">
        <img src="/img/карта.png" alt="" />
        <h2>
          Адрес: Улица Путешественников, 123, Город Приключений, Страна
          Возможностей <br /> Телефон: +123 456 7890 <br /> Электронная почта:
          info@traveltrove.com <br />
          График работы: Пн-Пт: 9:00-18:00, Сб-Вс: Выходной
        </h2>
      </div>
      <div className="more">
        <h3>Социальные сети:</h3>
        <li>Facebook: facebook.com/traveltrove</li>
        <li>Instagram: instagram.com/traveltrove</li>
        <li>Twitter: twitter.com/traveltrove</li>
      </div>
    </>
  );
}
