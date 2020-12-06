import React, { useState, useEffect, useContext } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import styles from './Hero.module.css'
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";

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

  const [heroSliders, setHeroSliders] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchSliders = async () => {
    const response = await axios(`${REACT_APP_API_URL}/common/first-sliders/`);
    const data = response.data.results;
    setHeroSliders(data);
  }

  useEffect(() => {
    fetchSliders();
  }, []);

  return (
    <section className="hero-section">
      <div className="image-section">
        <div className="image-section-wrapper">
        <div className={styles.container}>
        <Slider {...settings}>
          {
            heroSliders ? heroSliders.map((heroSlider, index) => (
              <div className={styles.imgWrapper} key={index}>
                <img className={styles.heroImg} src={heroSlider.image} />
              </div>
            )) : null
          }
        </Slider>
        </div>
        </div>
        <div className="hero-text" style={{ maxWidth: 600 }}>
        {langState.lang === 'ru' ? (
          <>
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
          <Link
            style={{ color: "white" }}
            className="nav-button"
            to="/complaint"
          >
            Подать жалобу
          </Link>
          </>
        ) : langState.lang === 'kg' ? (
          <>
          <h1>
            Бизнес-акыйкатчы - ишкердик иштин субъектилеринин укуктарын, эркиндиктерин жана мыйзамдуу кызыкчылыктарын коргоо боюнча ыйгарым укуктуу адамы.
          </h1>
          
          <h2>
          Бизнес-акыйкатчы бизнестин кызыкчылыгын мамлекеттик органдардын, жергиликтүү ѳзүн-ѳзү башкаруу органдарынын жана мамлекеттик сектордун ишканаларынын мыйзамсыз иш-аракеттеринен коргоо боюнча ыйгарым укукка ээ кѳз карандысыз адамы
          </h2>
          <Link
            style={{ color: "white" }}
            className="nav-button"
            to="/complaint"
          >
            Арыз берүү
          </Link>
          </>
        ) : (
          <>
          <h1>
            The Business Ombudsman - an authorized person to protect the rights, freedoms, and legitimate interests of entrepreneurs and business entities.
          </h1>
          <h2>
          The Business Ombudsman considers complaints of business entities against the actions, decisions, or inaction of state bodies, local self-government bodies, state-owned enterprises and conducts his own independent, expert, and fair investigation of entrepreneurs’ complaints. Through independent reports and recommendations, the Business Ombudsman strengthens the efforts of business, government, and state in shaping Kyrgyzstan as a unique place for doing business and investments.
          </h2>
          <Link
            style={{ color: "white" }}
            className="nav-button"
            to="/complaint"
          >
            Make a complaint
          </Link>
          </>
          
        )}
        </div>
      </div>
    </section>
  );
}
