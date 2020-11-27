import React from "react";
import skladImg from '../../images/sklad.jpg';

export default function MissionSection() {
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
        <h1>Миссия</h1>
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
          Наша миссия - независимо защищать интересы бизнеса от неправомерных действий государственных органов, органов местного самоуправления и государственных предприятий, снижая коррупцию и улучшая деловой климат в Кыргызской Республике
          </p>
        </div>
        <div
          className="mission-info-image"
          style={{ backgroundImage: `url("${skladImg}")` }}
        ></div>
      </div>
    </section>
  );
}
