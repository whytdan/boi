import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./ComplaintSection.module.css";

import image1 from "../../images/hero/image1.jpg";
import image2 from "../../images/hero/image2.jpg";
import image3 from "../../images/hero/image3.jpg";

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "ease-out",
  pauseOnHover: false,
};

export default function ComplaintSection() {
  return (
    <section className="complaint-section">
      <div className="complaint-image-section">
        <div className="complaint-image-section-wrapper">
          <div className="complaint-text">
            <div style={{ display: "flex" }}>
              <svg
                id="Component_2_3"
                data-name="Component 2 – 3"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <rect
                  id="Rectangle_97"
                  data-name="Rectangle 97"
                  width={20}
                  height={20}
                  fill="#fff"
                />
              </svg>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1>У вас есть жалоба?</h1>
                <p>
                  Институт Бизнес-омбудсмена рассматривает жалобы
                  предпринимателей на действия (в том числе решения) или
                  бездействие государственных органов, органов местного
                  самоуправления, предприятий государственного сектора и
                  проводит собственную независимую и профессиональную оценку
                  жалоб и обращений предпринимателей
                </p>
                <a href="{% url 'complaint' %}">Подать жалобу</a>
              </div>
            </div>
          </div>

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
      </div>
    </section>
  );
}
