import React, { useContext } from "react";
import { LanguageContext } from "../../App";
import { ReactComponent as infoSvg } from './info.svg'

export default function AboutCompanySection() {
  const langState = useContext(LanguageContext);

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
      {
        langState.lang === 'ru' ? (
          <div className="about-company-text">
            <p>
            Институт Бизнес омбудсмена рассматривает жалобы субъектов бизнеса на действия (в том числе решения) или бездействие государственных органов, органов местного самоуправления, предприятий государственного сектора и проводит собственную независимую, экспертную и справедливую оценку жалоб и обращений предпринимателей. <br/> <br/>
              Институт Бизнес омбудсмена был создан
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
        ) : langState.lang === 'kg' ? (
          <div className="about-company-text">
            <p>
            Бизнес-акыйкатчы институту мамлекеттик органдардын, жергиликтүү ѳзүн-ѳзү башкаруу органдарынын жана мамлекеттик сектордун ишканаларынын иш-аракеттерине (чечимдери кошулуп) же болбосо аракетсиздигине карата бизнес субъектилеринин даттанууларын карап чыгат жана ишкерлерден түшкѳн арыздар менен кайрылууларга жеке кѳз карандысыз, эксперттик жана адилеттүү баасын берет.

            <br/><br/>

            Кѳз карандысыз отчётторубуз менен сунуштарыбыз аркылуу биз Кыргызстандын бизнес жүргүзүү жана инвестицияларды салуу үчүн уникалдуу жер катары калыптануусу үчүн бизнес, ѳкмѳт жана мамлекет тарабынан жумшалган күч-аракеттерди чыӊдайбыз. <br/> <br/> Бизнес-акыйкатчы институту

              <a
                style={{ color: "var(--primary)" }}
                href="/media/files/Постановление_647_Об_уполномоченном_lUmQUra.pdf"
              >
              {" "}
              «Ишкердик иштин субъектилеринин укуктарын, эркиндиктерин жана мыйзамдуу кызыкчылыктарын коргоо боюнча ыйгарым укуктуу жак жѳнүндѳ» Кыргыз Республикасынын Ѳкмѳтүнүн 2018-жылдын 31-декабрындагы №647-Токтомунун негизинде түзүлгѳн.
            </a>
            </p>
          </div>
        ) : (
          <div className="about-company-text">
            <p>
            Business Ombudsman - an authorized person to protect the rights, freedoms, and legitimate interests of business entities. The Business Ombudsman protects the rights of private businesses and entrepreneurs, defending them with legitimate claims against the state or sub-state entities and local self-government bodies that infringe on their rights. <br/> <br/> Business Ombudsman of the Kyrgyz Republic was established by

              <a
                style={{ color: "var(--primary)" }}
                href="/media/files/Постановление_647_Об_уполномоченном_lUmQUra.pdf"
              >
              {" "}
              Resolution No. 647 of the Government of the Kyrgyz Republic from December 31, 2018
            </a>
            </p>
          </div>
        )
      }

    </div>
  );
}
