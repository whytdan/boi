import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './Hero.module.css'

import image1 from '../../images/hero/image1.jpg';
import image2 from '../../images/hero/image2.jpg';
import image3 from '../../images/hero/image3.jpg';

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

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="image-section">
        <div className="image-section-wrapper">
        <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.imgWrapper}>
            <img className={styles.heroImg} src={image1} />
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.heroImg} src={image2} />
          </div>
          <div className={styles.imgWrapper}>
            <img className={styles.heroImg} src={image3} />
          </div>
        </Slider>
        </div>
        </div>
        <div className="hero-text" style={{ maxWidth: 600 }}>
          <h1>
            Бизнес-омбудсмен - уполномоченное лицо по защите прав, свобод и
            законных интересов субъектов предпринимательской деятельности.
          </h1>
          <h2>
            Бизнес-омбудсмен рассматривает жалобы субъектов бизнеса на действия
            (в том числе решения) или бездействие государственных органов,
            органов местного самоуправления, предприятий государственного
            сектора и их должностных лиц, и проводит собственную, независимую,
            экспертную и справедливую оценку жалоб и обращений предпринимателей
          </h2>
          <a
            style={{ color: "white" }}
            className="nav-button"
            href="{% url 'complaint' %}"
          >
            Подать жалобу
          </a>
        </div>
      </div>
    </section>
  );
}
