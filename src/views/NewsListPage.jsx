import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Pagination from '@material-ui/lab/Pagination';
import styles from '../views/ReportsPage/ReportsPage.module.css';

export default function NewsListPage() {
  
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <section className="news_cases_content">
        <div className={['news-section', 'active', styles.root].join(' ')} style={{display: 'flex'}}>
          <h1>
            Новости
          </h1>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

        <div className="single-new">
            <p className="single-new-date standart_p">
            26 октябрь 2020
            </p>
            <p className="standart_p single-new-title">
            <NavLink to="/news/1">
            Бизнес-омбудсмен: верховенство закона, создание условий для развития бизнеса и полная …
            </NavLink>
            </p>
            <p className="standart_p single-new-text" style={{marginTop: 10}}>
            Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит подчеркнул важность верховенства закона, создания условий для развития бизнеса и полной защиты бизнеса и …
            </p>
        </div>

      <Pagination count={5} color="primary" style={{marginTop: 30}}/>
        </div>


      </section>
    </BaseLayout>
  );
}
