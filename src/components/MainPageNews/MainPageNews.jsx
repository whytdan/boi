import React, { useContext, useEffect, useState } from "react";
import goalImg from "../../images/goals/discussion.jpg";
import goalImg2 from "../../images/goals/work-space.jpg";
import goalImg3 from "../../images/goals/corruptioin.jpg";
import classes from "./MainPageNews.module.css";
import { Link, NavLink } from "react-router-dom";
import newsImg from "../../images/meeting.jpeg";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Loader from "../UI/Loader/Loader";
import axios from "axios";
import { formatDate } from '../../_helpers/date';
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';
import { LanguageContext } from "../../App";

export default function MainPageNews() {
  const [mainNews, setMainNews] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchMainNews = async () => {
    const response = await axios(`${REACT_APP_API_URL}/${langState.lang}/news/?is_main=true`);
    const data = response.data.results;
    setMainNews(data);
  }

  useEffect(() => {
    fetchMainNews();
  }, [langState.lang]);


  return (
    <>
      <div className="mission-icon" style={{ display: 'flex', justifyContent: 'center' }}>
        {
          langState.lang === 'ru' ? <h1 id="goals">Новости</h1> :
          langState.lang === 'kg' ? <h1 id="goals">Жаңылыктар</h1> :
          <h1 id="goals">News</h1>
        }
        
      </div>

      <section className="news_cases_content" style={{ marginTop: 0, marginBottom: 0 }}>
        <div className="news-section active" style={{ display: "flex" }}>

          {mainNews ? mainNews.map((singleNew, index) => (
            <div className="single-new" key={index}>
              <p className="single-new-date standart_p">{formatDate(singleNew.date.split('-'))}</p>
              <p className="standart_p single-new-title">
                <NavLink to={`/news/${singleNew.id}`}>
                  {singleNew.title}
                </NavLink>
              </p>
              <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {ReactHtmlParser(singleNew.description)}
                </Truncate>
              </p>
            </div>
          )) :  null}


        </div>
      </section>

      <Link to="/news">
        <button
          className={classes.btn}>
          {
            langState.lang === 'ru' ? 'Посмотреть еще' :
            langState.lang === 'kg' ? 'Көбүрөөк көрүү' :
            'See more'
          }
          
          
          </button>
      </Link>
    </>
  );
}
