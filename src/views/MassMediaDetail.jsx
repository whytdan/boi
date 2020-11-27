import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import newsImg from "../images/mass-media.jpeg";
import Slider from "react-slick";
import styles from "../components/UI/Slider.module.css";

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

export default function MassMediaDetail() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className="news-section active">
          <div className="single-new">
            <p className="single-new-date standart_p">11 май 2020</p>
            <p className="standart_p single-new-title" style={{marginBottom: "20px"}}>
            Бизнес-омбудсмен принял участие во встрече бизнес сообщества с Президентом страны
            </p>
            <Slider {...settings} className={{cursor: "pointer"}}>
                <img className={styles.heroImg} src={newsImg} />
                <img className={styles.heroImg} src={newsImg} />
                <img className={styles.heroImg} src={newsImg} />
              {/* <div
                style={{ backgroundImage: `url("${newsImg}")` }}
                className="single-new-image"></div> */}
            </Slider>

            <br />
            <p className="standart_p single-new-text" style={{marginTop: "20px"}}>
            Сегодня, 11 мая 2020 года, Бизнес-омбудсмен Робин Орд-Смит принял участие во встрече представителей бизнеса с Президентом Кыргызской Республики С.Жээнбековым. Бизнес-омбудсмен подчеркнул важность принятия своевременных мер, необходимых для поддержки бизнеса, восстановления деловой и экономической активности после пандемии. Отдельно он отметил необходимость оперативного информирования субъектов предпринимательства о требованиях и условиях возобновляемой экономической активности, и мерах поддержки, доступных со стороны государства
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
