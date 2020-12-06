import React, { useContext, useEffect, useState } from "react";
import BaseLayout from "../layouts/BaseLayout";
import newsImg from "../images/meeting.jpeg";
import Slider from "react-slick";
import styles from "../components/UI/Slider.module.css";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import Loader from "../components/UI/Loader/Loader";
import { formatDate } from '../_helpers/date';
import reportsStyles from '../views/ReportsPage/ReportsPage.module.css';
import { LanguageContext } from "../App";


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

export default function NewsDetalPage(props) {

  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const newsId = props.match.params.id;

  const langState = useContext(LanguageContext);

  const fetchNewsDetail  = async (url) => {
    const response = await axios.get(url);
    const data = response.data;
    setNewsDetail(data);
  }

  useEffect(() => {
    setLoading(true);
    const url = `${REACT_APP_API_URL}/${langState.lang}/news/${newsId}/` 
    fetchNewsDetail(url).then(() => setLoading(false));
  }, [langState.lang]);

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
        <section className="news_cases_content">
        <div className={['news-section', 'active', reportsStyles.root].join(' ')}>
          {loading ? (<h1>
            Загрузка...
          </h1>) : null}
        {newsDetail ? (
          <div className="single-new" style={{paddingTop: 0}}>
        <p className="single-new-date standart_p">{formatDate(newsDetail.date.split('-'))}</p>
            <p className="standart_p single-new-title" style={{marginBottom: "20px"}}>
              {newsDetail.title}
            </p>
            <Slider {...settings} className={{cursor: "pointer"}}>
                <img className={styles.heroImg} src={newsDetail.image} />
            </Slider>

            <br />
            <p className="standart_p single-new-text" style={{marginTop: "20px"}}>
            {ReactHtmlParser(newsDetail.description)}
            </p>
          </div>
          ) : <Loader/>}
        </div>
      </section>

      
      
    </BaseLayout>
  );
}
