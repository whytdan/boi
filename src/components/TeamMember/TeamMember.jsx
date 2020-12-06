import React from "react";
import itachi from "../../images/staff/worker.jpeg";
import { Collapse } from "@material-ui/core";

export default function TeamMember(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { fullName, position, description, image } = props;

  return (
    <div className="worker">
      <div>
        <div className="worker-wrapper">
          <div
            className="worker-image"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
          <div className="worker-title">
          <h1>{fullName}</h1>
          <p>{position}</p>
          </div>

          {!expanded ? (
            <button
              className="worker-dropdown"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_108"
                  data-name="Group 108"
                  transform="translate(-953 -231)"
                >
                  <g
                    id="Component_1_15"
                    data-name="Component 1 – 15"
                    transform="translate(953 231)"
                  >
                    <circle
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      cx={32}
                      cy={32}
                      r={32}
                      fill="#2653ad"
                    />
                  </g>
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M72.55,2191.061l-13-13,13-13"
                    transform="translate(-1193.183 330.672) rotate(-90)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                  />
                </g>
              </svg>
            </button>
          ) : (
            <button 
              className="worker-dropdown"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="hide info"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 64 64"
              >
                <g
                  id="Group_122"
                  data-name="Group 122"
                  transform="translate(-953 -492)"
                >
                  <g
                    id="Component_1_16"
                    data-name="Component 1 – 16"
                    transform="translate(953 492)"
                  >
                    <g
                      id="Ellipse_21"
                      data-name="Ellipse 21"
                      fill="none"
                      stroke="#2653ad"
                      strokeWidth={2}
                    >
                      <circle cx={32} cy={32} r={32} stroke="none" />
                      <circle cx={32} cy={32} r={31} fill="none" />
                    </g>
                  </g>
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M13,0,0,13,13,26"
                    transform="translate(997.878 517.122) rotate(90)"
                    fill="none"
                    stroke="#2653ad"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={5}
                  />
                </g>
              </svg>
            </button>
          )}
        </div>
      </div>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="about-worker">
          <div className="about-worker-wrapper">
            <div>
              <svg
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
            <p>
            {description}
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
