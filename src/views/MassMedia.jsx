import Pagination from '@material-ui/lab/Pagination'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BaseLayout from '../layouts/BaseLayout'
import styles from '../views/ReportsPage/ReportsPage.module.css';
import axios from "axios";
import { formatDate } from '../_helpers/date';
import ReactHtmlParser from 'react-html-parser';
import Truncate from 'react-truncate';
import Loader from '../components/UI/Loader/Loader';
import { LanguageContext } from '../App';


export default function MassMedia() {

  const [massMediaList, setMassMediaList] = useState(null);
  const [loading, setLoading] = useState(false);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchMassMedia = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results;
    console.log(data);
    setMassMediaList(data);
  }

  useEffect(() => {
    setLoading(true);
    const url = `${REACT_APP_API_URL}/${langState.lang}/smi/`;
    fetchMassMedia(url).then(() => setLoading(false));
  }, [langState.lang]);


  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className={['news-section', 'active', styles.root].join(' ')} style={{ display: 'flex' }}>
          <h1>
            {
              langState.lang === 'ru' ? 'Сми о нас' :
              langState.lang === 'kg' ? 'Сми биз жѳнүндѳ' : 
              'Mass media about us'
            }
        </h1>

          {
            massMediaList ? massMediaList.map((massMedia, index) => (
              <div className="single-new" key={index}>
                <p className="single-new-date standart_p">
                {formatDate(massMedia.date.split('-'))}
                </p>
                <p className="standart_p single-new-title">
                  <Link to={{ pathname: `/mass-media/${massMedia.id}`, state: {title: massMedia.title, description: massMedia.description, date: formatDate(massMedia.date.split('-')), image: massMedia.image} }}>
                    {massMedia.title}
                  </Link>
                </p>
                <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
                  
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  {ReactHtmlParser(massMedia.description)}
                  </Truncate>
            </p>
              </div>
            )) : <Loader/>
          }

          {/* <Pagination count={5} color="primary" style={{marginTop: 30}}/> */}
        </div>


      </section>
    </BaseLayout>
  )
}
