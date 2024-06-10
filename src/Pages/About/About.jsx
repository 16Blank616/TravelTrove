import "./About-styles.css";
import Helmet from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>О нас</title>
        <body className="About"></body>
      </Helmet>

      <div className="foot">
        <h5>О нас</h5>
      </div>

      <div className="infoAbout">
        <h2>
          TravelTrove - ваш проводник в мир приключений и удивительных открытий!
          Мы создаем уникальные путешествия, которые оставляют незабываемые
          впечатления и вдохновляют на новые открытия.
        </h2>
        <h3>Наша Миссия</h3>
        <h4>
          <br />
          Мы - команда профессиональных турагентов, страстно увлеченных
          исследованием самых удивительных уголков планеты и созданием
          незабываемых путешествий для наших клиентов. Наша цель - сделать ваше
          путешествие легким, приятным и незабываемым. Мы предлагаем широкий
          выбор туров по всему миру, от увлекательных экскурсий и роскошных
          круизов до активного отдыха на природе и культурных путешествий. Мы
          понимаем, что каждый клиент уникален, поэтому мы готовы предложить
          индивидуальные туры, отвечающие вашим потребностям и желаниям. Наша
          команда профессионалов всегда готова помочь вам с выбором маршрута,
          бронированием и организацией путешествия, чтобы вы могли насладиться
          каждым моментом вашего отпуска. Присоединяйтесь к нам и откройте новые
          горизонты вместе с TravelTrove!
        </h4>
        <h3>Что Мы Предлагаем</h3>
        <li>
          Индивидуальный Подход: Мы учитываем все ваши пожелания и предпочтения,
          создавая уникальные маршруты, которые подходят именно вам.
        </li>
        <li>
          Надежность и Безопасность: Мы работаем только с проверенными
          партнерами и обеспечиваем полную безопасность наших клиентов во время
          путешествия.
        </li>
        <li>
          Качество и Комфорт: Мы стремимся к высокому уровню сервиса и
          предлагаем только лучшие условия проживания и транспортировки.
        </li>
        <li>
          Опытные Гиды: Наши гиды - профессионалы своего дела, которые помогут
          вам раскрыть все тайны и красоты мест, которые вы посетите.
        </li>
        <li>
          Экологическая Осознанность: Мы ценим нашу планету и стремимся к
          экологически чистым и устойчивым путешествиям.
        </li>
        <h3>Наши Значения</h3>
        <li>
          Стремление к Совершенству: Мы постоянно совершенствуем наши услуги и
          ищем новые способы удивить наших клиентов.
        </li>
        <li>
          Индивидуальный Подход: Мы ценим уникальность каждого клиента и
          стремимся создать для него идеальное путешествие.
        </li>
        <li>
          Профессионализм: Мы работаем только с лучшими специалистами своего
          дела, чтобы обеспечить нашим клиентам самый высокий уровень сервиса.
        </li>
        <li>
          Ответственность: Мы относимся к своей работе с большой
          ответственностью и всегда следуем принципам этики и честности.
        </li>
        <div className="theAnd">
          <h3>
            Присоединяйтесь к нам и откройте для себя новые горизонты вместе с
            TravelTrove!
          </h3>
        </div>
      </div>
    </>
  );
}