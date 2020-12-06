import React, { useContext, useEffect, useState } from "react";
import goalImg from '../../images/goals/discussion.jpg';
import goalImg2 from '../../images/goals/work-space.jpg';
import goalImg3 from '../../images/goals/corruptioin.jpg';
import axios from "axios";
import { LanguageContext } from "../../App";


export default function GoalSection() {
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const [goals, setGoals] = useState(null);

  const fetchGoals = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results.slice(0, 3);
    console.log(data);
    setGoals(data);
  }

  useEffect(() => {
    const url = `${REACT_APP_API_URL}/${langState.lang}/purposes/`;
    fetchGoals(url);
  }, [langState.lang]);


  return (
    <section className="goals-section" id="goals">
      <div className="mission-icon">
        <svg
          className="dark-shadow"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 50 50"
        >
          <g
            id="Group_105"
            data-name="Group 105"
            transform="translate(-579 -59.936)"
          >
            <g
              id="Component_1_2"
              data-name="Component 1 – 2"
              transform="translate(579 59.936)"
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
            <g id="award" transform="translate(590.955 71.936)">
              <ellipse
                id="Ellipse_22"
                data-name="Ellipse 22"
                cx="7.953"
                cy={8}
                rx="7.953"
                ry={8}
                transform="translate(5 1)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M8.372,13.891,7,24.3l5.669-3.429L18.337,24.3,16.965,13.88"
                transform="translate(0.286 1.696)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </g>
          </g>
        </svg>
        <h1 id="goals">
          {
            langState.lang === 'ru' ? 'Наши цели' :
            langState.lang === 'kg' ? 'Институттун максаттары':
            'Our goals'
          }
          
        </h1>
      </div>
      <div className="goals">
        {
          goals ? goals.map((goal, index) => (
            <div className="single-goal">
              <div
                id="first-goal"
                className="single-goal-image"
                style={{ backgroundImage: `url("${goal.image}")` }}
              ></div>
              <div className="single-goal-text">
                <p>
                  {goal.title}
                </p>
              </div>
            </div>
          )) : null
        }

      </div>
    </section>
  );
}
