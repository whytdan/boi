import React from "react";
import goalImg from "../../images/goals/discussion.jpg";
import goalImg2 from "../../images/goals/work-space.jpg";
import goalImg3 from "../../images/goals/corruptioin.jpg";
import classes from "./MainPageNews.module.css";
import { Link, NavLink } from "react-router-dom";
import newsImg from "../../images/meeting.jpeg";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

export default function MainPageNews() {
  return (
    <>
      <div className="mission-icon" style={{ display: 'flex', justifyContent: 'center' }}>
        <h1 id="goals">Новости</h1>
      </div>

      <section className="news_cases_content" style={{marginTop: 0, marginBottom: 0}}>
        <div className="news-section active" style={{ display: "flex" }}>
          <div className="single-new">
            <p className="single-new-date standart_p">26 октябрь 2020</p>
            <p className="standart_p single-new-title">
              <NavLink to="/news/1">
                Бизнес-омбудсмен: верховенство закона, создание условий для
                развития бизнеса и полная …
              </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
              Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит
              подчеркнул важность верховенства закона, создания условий для
              развития бизнеса и полной защиты бизнеса и …
            </p>
          </div>

          <div className="single-new">
            <p className="single-new-date standart_p">26 октябрь 2020</p>
            <p className="standart_p single-new-title">
              <NavLink to="/news/1">
                Бизнес-омбудсмен: верховенство закона, создание условий для
                развития бизнеса и полная …
              </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
              Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит
              подчеркнул важность верховенства закона, создания условий для
              развития бизнеса и полной защиты бизнеса и …
            </p>
          </div>

          <div className="single-new">
            <p className="single-new-date standart_p">26 октябрь 2020</p>
            <p className="standart_p single-new-title">
              <NavLink to="/news/1">
                Бизнес-омбудсмен: верховенство закона, создание условий для
                развития бизнеса и полная …
              </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
              Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит
              подчеркнул важность верховенства закона, создания условий для
              развития бизнеса и полной защиты бизнеса и …
            </p>
          </div>

          <div className="single-new">
            <p className="single-new-date standart_p">26 октябрь 2020</p>
            <p className="standart_p single-new-title">
              <NavLink to="/news/1">
                Бизнес-омбудсмен: верховенство закона, создание условий для
                развития бизнеса и полная …
              </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{ marginTop: 10 }}>
              Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит
              подчеркнул важность верховенства закона, создания условий для
              развития бизнеса и полной защиты бизнеса и …
            </p>
          </div>
        </div>
      </section>

      <Link to="/news">
      <button 
        className={classes.btn}
        >Посмотреть еще</button>
      </Link>
    </>
  );
}
