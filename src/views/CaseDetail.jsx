import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import ReactHtmlParser from 'react-html-parser';

export default function CaseDetalPage(props) {

  const { title, description, date } = props.location.state;

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className="news-section" style={{ display: 'flex' }}>
          <div className="single-new">
            <p className="single-new-date standart_p">{date}</p>
            <p className="standart_p single-new-title">
              {title}
            </p>
            <p className="standart_p single-new-text" style={{ marginTop: "20px", fontWeight: 'normal' }}>
              {ReactHtmlParser(description)}
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
