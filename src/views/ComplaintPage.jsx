import React, { useContext } from "react";
import { LanguageContext } from "../App";
import ComplaintForm from "../components/ComplaintForm/ComplaintForm";
import ComplaintFormKg from "../components/ComplaintForm/ComplaintFormKg";
import ComplaintFormEn from "../components/ComplaintForm/ComplaintFormEn";
import BaseLayout from "../layouts/BaseLayout";

export default function ComplaintPage() {
  const langState = useContext(LanguageContext);
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="complaint-form-section">
        <div className="mission-icon complaint-form-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            viewBox="0 0 50 50"
          >
            <g
              id="Group_114"
              data-name="Group 114"
              transform="translate(-406 -154)"
            >
              <g
                id="Component_1_14"
                data-name="Component 1 – 14"
                transform="translate(406 154)"
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
              <g id="send" transform="translate(416 167)">
                <line
                  id="Line_18"
                  data-name="Line 18"
                  x1={13}
                  y2={13}
                  transform="translate(13 2)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M25.979,2,17.586,25.979l-4.8-10.791L2,10.393Z"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </g>
            </g>
          </svg>
          <h1>
            {
              langState.lang === 'ru' ? `Форма подачи жалобы` :
              langState.lang === 'kg' ? `Арыз берүүнүн формасы` :
              `Complaint form`
            }
            
            </h1>
        </div>
        <div className="complaint-form-wrapper">
          <p className="standart_p" style={{ color: "#707070" }}>
            {
              langState.lang === 'ru' ? `Для подачи жалобы Вам необходимо заполнить ниже приведенную форму и
              приложить документы, которые, по Вашему мнению, необходимы для
              качественного рассмотрения Вашей жалобы.` : langState.lang === 'kg' ?

              `Арыз берүү үчүн тѳмѳнкү форманы толтуруп, Сиздин оюӊузча арызыӊыздын сапаттуу каралып чыгуусу үчүн зарыл болгон документтерди тиркеп коюӊуз` : 

              `Please submit your complaint using the form below and attach supporting documents. If you have several complaints please submit each one separately. All complaints submitted to the Business Ombudsman Institute are strictly confidential`
            }
            
          </p>
          {
            langState.lang === 'ru' ? <ComplaintForm/> :
            langState.lang === 'kg' ? <ComplaintFormKg/> :
            <ComplaintFormEn/>
          }
          
        </div>
      </section>
    </BaseLayout>
  );
}
