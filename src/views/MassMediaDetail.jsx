import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import newsImg from "../images/mass-media.jpeg";
import Slider from "react-slick";
import styles from "../components/UI/Slider.module.css";
import ReactHtmlParser from 'react-html-parser';

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "ease-out",
  pauseOnHover: false,
};

export default function MassMediaDetail(props) {

  const { title, description, date, image } = props.location.state;

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className="news-section active">
          <div className="single-new">
            <p className="single-new-date standart_p">{date}</p>
            <p className="standart_p single-new-title" style={{ marginBottom: "20px" }}>
              {title}
            </p>
            <Slider {...settings} className={{ cursor: "pointer" }}>
              <img className={styles.heroImg} src={image} />
            </Slider>

            <br />
            <p className="standart_p single-new-text" style={{ marginTop: "20px" }}>
            {ReactHtmlParser(description)}
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
