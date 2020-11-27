import React from "react";
import {ReactComponent as infoSvg} from './info.svg'

export default function AboutCompanySection() {
  return (
    <div className="about-company" id="about">
      <div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
        >
          <g
            id="Group_106"
            data-name="Group 106"
            transform="translate(-276.667 -1415.621)"
          >
            <g
              id="Component_1_3"
              data-name="Component 1 – 3"
              transform="translate(276.667 1415.621)"
            >
              <circle
                id="Ellipse_21"
                data-name="Ellipse 21"
                cx={18}
                cy={18}
                r={18}
                fill="#2653ad"
              />
            </g>
            <g id="info" transform="translate(285.543 1424.488)">
              <ellipse
                id="Ellipse_17"
                data-name="Ellipse 17"
                cx={9}
                cy="8.969"
                rx={9}
                ry="8.969"
                transform="translate(0.002)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <line
                id="Line_13"
                data-name="Line 13"
                y1="3.588"
                transform="translate(9.306 8.662)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <line
                id="Line_14"
                data-name="Line 14"
                transform="translate(9.306 5.074)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="about-company-text">
        <p>
          Институт Бизнес омбудсмена рассматривает жалобы субъектов бизнеса на
          действия (в том числе решения) или бездействие государственных
          органов, органов местного самоуправления, предприятий государственного
          сектора и проводит собственную независимую, экспертную и справедливую
          оценку жалоб и обращений предпринимателей. <br/> <br/> Институт Бизнес омбудсмена
          был создан{" "}
          <a
            style={{ color: "var(--primary)" }}
            href="/media/files/Постановление_647_Об_уполномоченном_lUmQUra.pdf"
          >
            {" "}
            Постановлением №647 Правительства Кыргызской Республики “Об
            уполномоченном лице по защите прав, свобод и законных интересов
            субъектов предпринимательской деятельности” от 31 декабря 2018 года
          </a>
        </p>
      </div>
    </div>
  );
}
