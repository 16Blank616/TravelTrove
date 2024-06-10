import "./stambyl-styles.css";
import Helmet from "react-helmet";

export default function Stambyl() {
  return (
    <>
      <Helmet>
        <title>Стамбул</title>
        <body className="stambyl"></body>
      </Helmet>
      <div className="main">
        <h2>Стамбул, Турция</h2>
        <h5>
          Добро пожаловать в захватывающий мир Стамбула, города, где Восток
          встречает Запад, создавая уникальное сочетание культур, архитектуры и
          вкусов. <br />
          Стамбул - это место, где история, современность и традиции сливаются
          воедино, чтобы создать неповторимый опыт для каждого путешественника.
          <br /> <br />
          Исторические достопримечательности: <br /> От величественной
          Стамбульской крепости и могучей базилики Святой Софии до потрясающей
          Голубой мечети и древнего дворца Топкапы - каждый уголок Стамбула
          пропитан историей и красотой. <br />
          <br />
          Культурное наследие: <br />
          Погрузитесь в богатую культуру Стамбула, прогуливаясь по его узким
          улочкам, исследуя местные базары и наслаждаясь аутентичной турецкой
          кухней. <br /> Почувствуйте атмосферу традиционного хамама или
          посетите живописный район Бейоглу.
          <br /> <br />
          Шоппинг и развлечения: <br />
          От современных торговых центров до старинных базаров, таких как
          Гранд-Базар, Стамбул предлагает бесконечные возможности для шопинга и
          отдыха. <br /> Не упустите шанс попробовать национальные деликатесы и
          насладиться неповторимой атмосферой уличных кафе. <br />
          <br />
          Природные красоты: <br /> Стамбул также славится своими природными
          достопримечательностями. Посетите прекрасный парк Эмирган и
          насладитесь живописными видами на Босфор и Золотой рог. <br /> Стамбул
          предлагает удивительное сочетание истории, культуры, гастрономии и
          природы, что делает его одним из самых уникальных и захватывающих
          городов в мире. Приезжайте и окунитесь в магию этого удивительного
          места!
        </h5>
      </div>

      <div className="place">
        <div>
          <img src="/img/stambyl/1.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/2.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/3.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/4.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/5.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/6.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/7.jpg" alt="" />
        </div>
        <div>
          <img src="/img/stambyl/8.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
