import "./tours-style.css";
import Product from "../../components/product/Product";
import Footer from "../../components/footer/footer";
import Helmet from "react-helmet";
import React from "react";
import { fetchTours, setSortFilter } from "../../redux/action/tours";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import bd from "./db.json";

function Tours() {
  const items = useSelector(({ tours }) => tours.items);
  const { sortBy } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTours(sortBy));
  }, [dispatch, sortBy]);

  const handleSortChange = (sortBy) => {
    dispatch(setSortFilter(sortBy));
  };
  return (
    <>
      <Helmet>
        <title>Все туры</title>
        <body className="login"></body>
      </Helmet>
      <div className="slideBar">
        <li value="" onClick={() => handleSortChange("")}>
          --Выбрать фильтр--
        </li>
        <li value="Цена" onClick={() => handleSortChange("price")}>
          Цена
        </li>
        <li value="По названию" onClick={() => handleSortChange("title")}>
          По названию
        </li>
      </div>
      <div className="products">
        <div className="product">
          {bd.tours.map((tour, index) => (
            <NavLink to={`/tour/${index}`} key={index}>
              <div className="cart">
                <img src={tour.img} alt="" />
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <h2>${tour.price}</h2>
                <button className="Buy"> Купить</button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Tours;
