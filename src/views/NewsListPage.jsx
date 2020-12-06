import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Pagination from '@material-ui/lab/Pagination';
import styles from '../views/ReportsPage/ReportsPage.module.css';
import axios from "axios";
import { formatDate } from '../_helpers/date'
import Loader from "../components/UI/Loader/Loader";
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';
import { LanguageContext } from "../App";

export default function NewsListPage() {

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchNews = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results;
    console.log(data);
    setNews(data);
  }

  useEffect(() => {
    setLoading(true);
    const url = `${REACT_APP_API_URL}/${langState.lang}/news/`;
    fetchNews(url).then(() => setLoading(false));

  }, [langState.lang])

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <section className="news_cases_content">
        <div className={['news-section', 'active', styles.root].join(' ')} style={{ display: 'flex' }}>
          <h1>
            {
              langState.lang === 'ru' ? 'Новости' : 
              langState.lang === 'kg' ? 'Жаңылыктар' :
              'News'
            }
          </h1>

          {
            news ? news.map((singleNew, index) => (
              <div className="single-new" key={index}>
                <p className="single-new-date standart_p">
                  {formatDate(singleNew.date.split('-'))}
                </p>
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
            )) : <Loader />
          }



          {/* <Pagination count={5} color="primary" style={{ marginTop: 30 }} /> */}
        </div>


      </section>
    </BaseLayout>
  );
}
