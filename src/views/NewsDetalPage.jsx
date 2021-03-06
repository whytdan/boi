import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import newsImg from "../images/meeting.jpeg";
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

export default function NewsDetalPage() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className="news-section active">
          <div className="single-new">
            <p className="single-new-date standart_p">26 октябрь 2020</p>
            <p className="standart_p single-new-title" style={{marginBottom: "20px"}}>
              Бизнес-омбудсмен: верховенство закона, создание условий для
              развития бизнеса и полная защита бизнеса и предпринимателей -
              ключевые направления стабилизации экономики
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
              Бизнес-омбудсмен Кыргызской Республики г-н Робин Орд-Смит
              подчеркнул важность верховенства закона, создания условий для
              развития бизнеса и полной защиты бизнеса и предпринимателей в
              качестве ключевых мер для стабилизации экономики в рамках
              заседания Совета по развитию бизнеса и инвестициям, прошедшем 23
              октября 2020 года.
              <br />
              <br />
              «Мы переживаем критическое для страны время, это чрезвычайно
              трудный год для бизнеса, экономики, граждан и страны. Пандемия и
              политическая нестабильность нанесли серьезный удар экономике
              страны. В этой связи с целью стабилизации и роста экономики
              необходим фокус на четырех ключевых областях: • верховенство
              закона; • проведение реформ, в том числе ускоренное введение
              цифровизации для предоставления государственных услуг, упрощение
              налогового администрирования; • создание условий для развития
              бизнеса для сохранения и увеличения количества рабочих мест; •
              полноценная защита бизнеса и предпринимателей.
              <br />
              <br />
              Пошатнувшееся доверие бизнеса и инвесторов можно будет вернуть,
              когда будет уверенность в верховенстве закона, а не в ее
              избирательности, когда права бизнеса будут защищены, а не
              нарушены, когда все будут нести одинаковую ответственность перед
              законами, когда все действия будут прозрачны, в том числе
              действия, направленные на искоренение коррупции».
              <br />
              <br />
              Бизнес-омбудсмен поприветствовал заявления исполняющего
              обязанности президента/премьер-министра и нового правительства,
              направленные на стабилизацию экономики, восстановление доверия
              бизнеса и инвесторов, защиту частной собственности, борьбу с
              коррупцией и установление справедливости, проведение реформ в
              экономической, судебной и правоохранительной сферах.
              Бизнес-омбудсмен подчеркнул, что любые заявления должны быть
              подкреплены реальными шагами и действиями. К сожалению, ранее
              часто обязательства правительства не сопровождались
              последовательными и надлежащими действиями.
              <br />
              <br />
              «В ходе рассмотрений жалоб предпринимателей мною была обнаружена
              тревожная тенденция незаконных действий и практик отдельных
              государственных органов, в частности:
              <br />
              <br />
              • государственные органы сами интерпретируют законодательство, не
              имея на это полномочий; • системная тенденция государственных
              органов интерпретировать нормы законодательства в пользу
              государства, а не в пользу предпринимателей (в нарушение законов
              "О защите прав предпринимателей" от 1 февраля 2001 года, "О
              нормативных правовых актах Кыргызской Республики" от 20 июля 2009
              года, Налогового кодекса); • несогласованность в принятии решений
              с тенденцией к отмене ранее принятых своих же решений».
              <br />
              <br />
              Бизнес-омбудсмен предостерег руководство страны и государственные
              органы от чрезмерных попыток пополнения государственного бюджета
              путем дальнейшего давления на бизнес и инвесторов. Более
              эффективными видятся усилия по улучшению деловой среды и
              инвестиционного климата через проведение реформ, направленных на
              облегчение ведение бизнеса, что позволит увеличить налоговые
              поступления за счет выхода бизнеса из тени.
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
