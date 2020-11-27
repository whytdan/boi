import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import elImg from '../images/eligibility/el-100.png';
import elImgPattern from '../images/eligibility/el-pattern.png';

export default function EligibilityPage() {
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
        <div className="eligibility-wrapper">
          <h1 id="eligibility-header">
            КРИТЕРИИ ЖАЛОБ, РАССМАТРИВАЕМЫХ ИНСТИТУТОМ БИЗНЕС-ОМБУДСМЕНА
          </h1>
          <p>
            Вы подаете жалобу на государственный орган, орган местного
            самоуправления, предприятие госсектора или должностное лицо?
          </p>
          <p>
            Предмет вашей жалобы находится в процессе судебного/арбитражного
            рассмотрения или было ли уже принято судебное/ арбитражное решение?
          </p>
          <p>
            Прошел ли один год с момента нарушения Ваших прав, свобод или
            законных интересов?
          </p>
          <p>
            Была ли Вами использована возможность административного обжалования
            хотя бы в одной инстанции?
          </p>
          <h1 id="eligibility-footer">
            ВАША ЗАЯВКА СООТВЕТСТВУЕТ КРИТЕРИЯМ ИНСТИТУТА БИЗНЕС-ОМБУДСМЕНА
          </h1>
        </div>
        <div
          className="eligibility-img-wrapper"
          style={{
            backgroundImage: `url("${elImgPattern}")`,
          }}
        ></div>
      </div>
    </BaseLayout>
  );
}
