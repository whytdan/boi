import React, { useContext } from "react";
import BaseLayout from "../layouts/BaseLayout";
import elImg from '../images/eligibility/el-100.png';
import elImgPattern from '../images/eligibility/el-pattern.png';
import elKgBig from '../images/eligibility/el-kg-big.png';
import elEnBig from '../images/eligibility/el-en-map.png';
import { LanguageContext } from "../App";

export default function EligibilityPage() {

  const langState = useContext(LanguageContext);

  return (
    <BaseLayout>
      <div style={{ height: 100 }} />
      <div className="eligibility-phone-section">
        <div
          className="eligibility-phone-wrapper"
          style={{ backgroundImage: `url("${elImg}")` }}
        ></div>
      </div>
      <div style={{ height: "auto" }} className="eligibility-section">
        <div className={['eligibility-wrapper', `${langState.lang === 'en' ? 'eligibility-wrapper-en' : ''}`].join(' ')}>
          <h1 id="eligibility-header">
            {
              langState.lang === 'ru' ? 'КРИТЕРИИ ЖАЛОБ, РАССМАТРИВАЕМЫХ ИНСТИТУТОМ БИЗНЕС-ОМБУДСМЕНА' :
              langState.lang === 'kg' ? 'КАНДАЙ АРЫЗ-ДАТТАНУУЛАР БИЗНЕС-АКЫЙКАТЧЫ МЕНЕН КАРАЛАТ' :
              'COMPLAINT ELIGIBILITY CRITERIA'
            }
            
          </h1>
          <p>
            {
              langState.lang === 'ru' ? 'Вы подаете жалобу на государственный орган, орган местного самоуправления, предприятие госсектора или должностное лицо?' : 
              langState.lang === 'kg' ? 'Сиздин арызыңыз мамлекеттик органдардын аракеттерине же аракетсиздиктерине тийешелүүбү?' : 'Is your complaint from private business for actions (including decisions) or inactions of state authorities and local self-goverment bodies, as well as state-owned enterprises and their officials?'
            }
            
          </p>
          <p>
            {
              langState.lang === 'ru' ? 'Предмет вашей жалобы находится в процессе судебного/арбитражного рассмотрения или было ли уже принято судебное/ арбитражное решение?' : 
              langState.lang === 'kg' ? 'Сиздин арызыңыз соттун же арбитраждын териштирүү мезгилинде каралдыбы же соттун чечими (токтому, аныктамасы) барбы?' : 'Is your complaint a subject to any court or arbitral proceedings or does it have court decision, arbital award or similar type of decision?'
            }
          </p>

          <p>
            {
              langState.lang === 'ru' ? 'Прошел ли один год с момента нарушения Ваших прав, свобод или законных интересов?' : langState.lang === 'kg' ? 
              'Арыз-даттануунун маселеси акыркы бир жылдын ичинде орун алдыбы?' : 'Has it been 1 year since the violation of your business rights?'
            }
          </p>
          <p>
            {
              langState.lang === 'ru' ? 'Была ли Вами использована возможность административного обжалования хотя бы в одной инстанции?' : langState.lang === 'kg' ?
              'Арыздын маселесин чечүүгѳ жок дегенде бир административдик түрдѳѳ аракет кылдыңызбы?' : 'Have you used at least one instance of administrative appeal process available?'
            }
            
          </p>
          <h1 id="eligibility-footer">
            {
              langState.lang === 'ru' ? 'ВАША ЗАЯВКА СООТВЕТСТВУЕТ КРИТЕРИЯМ ИНСТИТУТА БИЗНЕС-ОМБУДСМЕНА' :
              langState.lang === 'kg' ? 'СИЗДИН АРЫЗ БИЗНЕС-АКЫЙКАТЧЫ ИНСТИТУТУН ТАЛАПТАРГА ЖООП БЕРЕТ' : 'YOUR APPLICATION MEETS THE CRITERIA OF BUSINESS OMBUDSMAN INSTITUTE'
            }
          </h1>
        </div>
        {
          langState.lang === 'ru' ? (
            <div
              className="eligibility-img-wrapper"
              style={{
                backgroundImage: `url("${elImgPattern}")`,
              }}
            ></div>
          ) : langState.lang === 'kg' ? (
            <div
              className="eligibility-img-wrapper"
              style={{
                backgroundImage: `url("${elKgBig}")`,
              }}
            ></div>
          ) : (
            <div
              className="eligibility-img-wrapper-en"
              style={{
                backgroundImage: `url("${elEnBig}")`,
              }}
            ></div>
          )
        }
      </div>
    </BaseLayout>
  );
}
