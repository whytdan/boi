import React from "react";
import Collapse from '@material-ui/core/Collapse';
import TeamMember from "../TeamMember/TeamMember";


export default function OurTeamSection() {

  return (
    <section className="our-team-section">
      <div className="mission-icon">
        <svg
          className="dark-shadow"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 50 50"
        >
          <g
            id="Group_107"
            data-name="Group 107"
            transform="translate(-552 -60)"
          >
            <g
              id="Component_1_4"
              data-name="Component 1 – 4"
              transform="translate(552 60)"
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
            <g id="users" transform="translate(531.552 -24.004)">
              <path
                id="Path_13"
                data-name="Path 13"
                d="M51.352,501.253v-2.3a4.6,4.6,0,0,0-4.6-4.6h-9.2a4.6,4.6,0,0,0-4.6,4.6v2.3"
                transform="translate(0 -381.688)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <circle
                id="Ellipse_23"
                data-name="Ellipse 23"
                cx="4.599"
                cy="4.599"
                r="4.599"
                transform="translate(37.556 98.871)"
                strokeWidth={2}
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                id="Path_14"
                data-name="Path 14"
                d="M662.589,505.388v-2.3a4.6,4.6,0,0,0-3.449-4.449"
                transform="translate(-604.339 -385.823)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <path
                id="Path_15"
                data-name="Path 15"
                d="M527.312,103.155a4.6,4.6,0,0,1,0,8.91"
                transform="translate(-477.11 -4.135)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </g>
          </g>
        </svg>
        <h1>Наша команда</h1>
      </div>
      <TeamMember/>

      <div className="workers">
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>

      </div>
    </section>
  );
}
