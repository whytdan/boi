import React from "react";
import { Collapse } from "@material-ui/core";


export default function FAQ() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="question">
      <div>
        <div className="question-wrapper">
          <p>
          Какие жалобы не рассматриваются Бизнес-омбудсменом?
          </p>
          {!expanded ? (
          <button 
            id="#faq1-dropdown" 
            className="faq-dropdown"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.318"
              height="18.659"
              viewBox="0 0 32.318 18.659"
              // style={{transform: "scaleY(-1)"}}
            >
              <g
                id="chevron-left"
                transform="translate(28.782 3.536) rotate(90)"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M59.55,2190.308l12.623-12.623L59.55,2165.061"
                  transform="translate(-59.55 -2165.061)"
                  fill="none"
                  stroke="#2653ad"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={5}
                />
              </g>
            </svg>
          </button>
          ) : (
            <button 
              id="#faq1-dropdown" 
              className="faq-dropdown"
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="hide info"
              >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32.318"
              height="18.659"
              viewBox="0 0 32.318 18.659"
              style={{transform: "scaleY(-1)"}}
            >
              <g
                id="chevron-left"
                transform="translate(28.782 3.536) rotate(90)"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M59.55,2190.308l12.623-12.623L59.55,2165.061"
                  transform="translate(-59.55 -2165.061)"
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

        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="question-answer active">
          <div className="question-answer-wrapper">
            <p>
              Жалобы, находящиеся на стадии судебного или арбитражного разбирательства, или в отношении которых были приняты судебные или арбитражные решения;
              жалобы на законность и/или обоснованность любых судебных решений, постановлений и определений;
              жалобы, возникшие в рамках хозяйственных отношений между субъектами предпринимательской деятельности;
              жалобы, в рамках которых субъект предпринимательской деятельности, не исчерпал хотя бы один случай доступного административного обжалования в соответствии с законодательством и внутренними правилами стороны, против которой подается жалоба;
              жалоба на нарушение прав субъекта предпринимательской деятельности, должна быть подана не позднее 1 года со дня вступления в силу обжалуемого документа, совершения действия или бездействия (решения) государственным органом;
              анонимные жалобы.
            </p>
          </div>
        </div>
        </Collapse>
      </div>
    </div>
  )
}
