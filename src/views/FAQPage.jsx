import React from "react";
import FAQ from "../components/FAQ/FAQ";
import BaseLayout from "../layouts/BaseLayout";

export default function FAQPage() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="faq-section">
        <div className="mission-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 50 50"
          >
            <g
              id="Group_113"
              data-name="Group 113"
              transform="translate(-422 -147)"
            >
              <g
                id="Component_1_13"
                data-name="Component 1 – 13"
                transform="translate(422 147)"
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
              <g id="help-circle" transform="translate(432.829 157.829)">
                <circle
                  id="Ellipse_26"
                  data-name="Ellipse 26"
                  cx={12}
                  cy={12}
                  r={12}
                  transform="translate(2.171 2.171)"
                  strokeWidth={2}
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M9.09,9.435a3.651,3.651,0,0,1,7.1,1.217c0,2.434-3.651,3.651-3.651,3.651"
                  transform="translate(1.539 1.084)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <line
                  id="Line_17"
                  data-name="Line 17"
                  transform="translate(14.171 20.171)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </g>
            </g>
          </svg>
          <h1>Часто Задаваемые Вопросы</h1>
        </div>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
        <FAQ/>
      </section>
    </BaseLayout>
  );
}
