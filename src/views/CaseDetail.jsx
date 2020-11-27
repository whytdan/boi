import React from "react";
import BaseLayout from "../layouts/BaseLayout";

export default function CaseDetalPage() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <section className="news_cases_content">
        <div className="news-section" style={{display: 'flex'}}>
          <div className="single-new">
            <p className="single-new-date standart_p">26 Октябрь 2020</p>
            <p className="standart_p single-new-title" style={{marginBottom: "20px"}}>
            UAH 185 mn of additional tax accruals for the Ukrainian bank were cancelled
            </p>
              <br />
            <p className="standart_p single-new-text" style={{marginTop: "20px"}}>
             <strong>Complainee:</strong> The State Tax Service of Ukraine (STS), Large Taxpayers Office (LTO)
              <br />
              <br />
              <strong>Complaint in brief:</strong> A Ukrainian bank turned to the Business Ombudsman Council for help. The complainant disagreed with the tax audit findings, according to which he had to additionally pay UAH 185 mn. It turned out that during the audit LTO concluded, inter alia, that the complainant had not withheld income tax from non-residents originating in Ukraine when paying interests to a non-resident on a loan obtained by placing foreign securities on a foreign stock exchange. 
              At the same time, the complainant applied to the interest paid to the non-resident a tax rate of 0% on the basis of the tax exemption provided for in paragraph 46 of sub-section 4 of Section XX “Transitional Provisions” of the Tax Code of Ukraine.
              The Bank tried to challenge audit findings on its own and submitted substantive objections to LTO with explanations on each point. However, the tax authority did not change its conclusions. After receiving tax notifications-decisions, the bank appealed them in the STS. The bank's complaint was taken up by the Council’s team.
              <br />
              <br />
              Пошатнувшееся доверие бизнеса и инвесторов можно будет вернуть,
              когда будет уверенность в верховенстве закона, а не в ее
              избирательности, когда права бизнеса будут защищены, а не
              нарушены, когда все будут нести одинаковую ответственность перед
              законами, когда все действия будут прозрачны, в том числе
              действия, направленные на искоренение коррупции».
              <br />
              <br />
              <strong>Actions taken:</strong> After examining the case materials, the investigator found the complaint was substantiated and upheld the complainant's position. The Council drew attention to erroneous conclusions of LTO, lack of proof of tax legislation violation by the сomplainant and recommended the STS to ensure a full, comprehensive and impartial consideration of the bank's complaint. The Council’s investigator asked the tax authority to consider the possibility of canceling the challenged TNDs. Consideration of the STS complaint was delayed due to temporary suspension of deadlines for consideration of complaints received during a strict quarantine restrictions period.
              <br />
              <br />
              <strong>Result achieved:</strong> The STS accepted the сomplainant’s and the Council’s arguments and cancelled additional payments for the bank amounting to over UAH 185 mn. The case was successfully closed.
              <br />
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
  