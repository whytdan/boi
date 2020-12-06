import React, { useState, useEffect, useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./ComplaintSection.module.css";
import axios from "axios";

import image1 from "../../images/hero/image1.jpg";
import image2 from "../../images/hero/image2.jpg";
import image3 from "../../images/hero/image3.jpg";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";

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
  const [sliders, setSliders] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchSliders = async () => {
    const response = await axios(`${REACT_APP_API_URL}/common/second-sliders/`);
    const data = response.data.results;
    setSliders(data);
  }

  useEffect(() => {
    fetchSliders();
  }, []);

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
                {
                  langState.lang === 'ru' ? (
                    <>
                    <h1>У вас есть жалоба?</h1>
                    <p>
                      Институт Бизнес-омбудсмена рассматривает жалобы
                      предпринимателей на действия (в том числе решения) или
                      бездействие государственных органов, органов местного
                      самоуправления, предприятий государственного сектора и
                      проводит собственную независимую и профессиональную оценку
                      жалоб и обращений предпринимателей
                    </p>
                    <Link
                    style={{ color: "white" }}
                    className="nav-button"
                    to="/complaint" >
                      Подать жалобу
                    </Link>
                    </>
                  ) : langState.lang === 'kg' ? (
                    <>
                    <h1>Нааразычылыгыңыз барбы?</h1>
                    <p>
                      Бизнес-акыйкатчы институту укуктуу мамлекеттик органдары, жергиликтүү өз алдынча башкаруу органдары, мамлекеттик үлүшү менен уюмдары тарабынан укуктары тебеленген ишканалардын даттанууларын караштырат
                    </p>
                    <Link
                    style={{ color: "white" }}
                    className="nav-button"
                    to="/complaint" >
                      Арыз берүү
                    </Link>
                    </>
                  ) : (
                    <>
                    <h1>Do you have a complaint?</h1>
                    <p>
                    If the legal rights of your business or entrepreneurship were infringed by the actions (or inaction) of the state bodies, local self-government as well as officials - you have the right to file a complaint to the Business Ombudsman
                    </p>
                    <Link
                    style={{ color: "white" }}
                    className="nav-button"
                    to="/complaint" >
                      Make a complaint
                    </Link>
                    </>
                  )
                }
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <Slider {...settings}>
            {
              sliders ? sliders.map((slider, index) => (
              <div className={styles.imgWrapper} key={index}>
                <img className={styles.heroImg} src={slider.image} />
              </div>
            )) : null
          }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
