import "./erevan-styles.css";
import Helmet from "react-helmet";

export default function Erevan() {
  return (
    <>
      <Helmet>
        <title>Ереван</title>
        <body className="erevan"></body>
      </Helmet>
      <div className="main">
        <h2>Ереван, Армянский Драгоценный Камень</h2>
        <h5>
          Добро пожаловать в Ереван, древний и в то же время современный город,
          который расположен в самом сердце Армении. <br /> Ереван - это место,
          где история встречается с современностью, создавая уникальную
          атмосферу тепла, гостеприимства и вечной молодости. <br />
          <br />
          Культурное Наследие: <br /> Прогуляйтесь по улицам старого города и
          почувствуйте его душу, окутанную ароматом свежеиспеченного хлеба и
          звуками национальных мелодий. <br /> Посетите армянские церкви, музеи
          и галереи и окунитесь в богатую культуру и историю этого удивительного
          места.
          <br />
          <br />
          Армянская Кухня: <br /> Отведайте разнообразные блюда армянской кухни,
          включая ароматные грузинские хачапури, традиционные шашлыки и
          знаменитые десерты, такие как лаваш и баклава.
          <br /> <br />
          Шоппинг и развлечения: <br />
          От уютных местных магазинчиков до современных торговых центров, Ереван
          предлагает множество возможностей для шопинга и отдыха. <br />
          Посетите центральный рынок - Вернисаж, где вы найдете разнообразные
          сувениры, ковры, украшения и многое другое. <br />
          <br />
          Природные красоты: <br /> Насладитесь живописными видами на горы
          Армении, посетив окрестности Еревана. Посетите озеро Севан, второе по
          величине горное озеро в мире, или отправьтесь на экскурсию в горы
          Арарат. <br />
          <br />
          Современные Знаковые Места: <br />
          Посетите площадь Республики с ее фонтанами и памятниками, а также парк
          Каскад с его современными скульптурами и видами на город. <br />
          <br />
          <h3>
            Ереван - это город, который запоминается навсегда, своей атмосферой
            радушия, красотой и богатством культурного наследия. Приезжайте и
            погрузитесь в атмосферу вечной весны в Ереване!
          </h3>
        </h5>
      </div>

      <div className="place">
        <div>
          <img src="/img/erevan/1.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/2.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/3.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/4.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/5.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/6.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/7.jpg" alt="" />
        </div>
        <div>
          <img src="/img/erevan/8.jpg" alt="" />
        </div>
      </div>
    </>
  );
}