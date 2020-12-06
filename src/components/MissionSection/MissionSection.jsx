import React, { useContext, useEffect, useState } from "react";
import skladImg from '../../images/sklad.jpg';
import axios from "axios";
import { LanguageContext } from "../../App";

export default function MissionSection() {
  const { REACT_APP_API_URL } = process.env;

  const [mission, setMission] = useState(null);
  const langState = useContext(LanguageContext);

  const fetchMission = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results[0];
    console.log(data);
    setMission(data);
  }

  useEffect(() => {
    const url = `${REACT_APP_API_URL}/${langState.lang}/missions/`;
    fetchMission(url);
  }, [langState.lang]);

  return (
    <section className="mission-section">
      <div className="mission-icon">
        <svg
          className="dark-shadow"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 50 50"
        >
          <g
            id="Group_100"
            data-name="Group 100"
            transform="translate(-615 -53)"
          >
            <g
              id="Component_1_1"
              data-name="Component 1 – 1"
              transform="translate(615 53)"
            >
              <circle
                id="Ellipse_21"
                data-name="Ellipse 21"
                cx={25}
                cy={25}
                r={25}
                fill="#2653ad"
              />
            </g>
            <g id="target" transform="translate(624.985 62.985)">
              <circle
                id="Ellipse_18"
                data-name="Ellipse 18"
                cx={13}
                cy={13}
                r={13}
                transform="translate(2.015 2.015)"
                strokeWidth={2}
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                id="Ellipse_19"
                data-name="Ellipse 19"
                cx={8}
                cy={8}
                r={8}
                transform="translate(7.015 7.015)"
                strokeWidth={2}
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle
                id="Ellipse_20"
                data-name="Ellipse 20"
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="translate(12.515 12.515)"
                strokeWidth={2}
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          </g>
        </svg>
        <h1>
          {
            langState.lang === 'ru' ? 'Миссия' :
            langState.lang === 'kg' ? 'Биздин миссиябыз' :
            'Our mission'
          }
          
        </h1>
      </div>
      <div className="mission-info">
        <div className="mission-info-text">
          <div>
            <svg
              className="blue-square"
              id="Component_2_1"
              data-name="Component 2 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <rect
                id="Rectangle_97"
                data-name="Rectangle 97"
                width={20}
                height={20}
                fill="#2653ad"
              />
            </svg>
          </div>
          <p style={{ maxWidth: 460 }}>
          {mission ? mission.mission : null}
          </p>
        </div>
        <div
          className="mission-info-image"
          style={{ backgroundImage: `url("${mission ? mission.image : null}")` }}
        ></div>
      </div>
    </section>
  );
}
