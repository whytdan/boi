import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import classes from "../UI/FormInput.module.css";
import { CustomTextField } from "../UI/FormStyling";
import { Form, Formik } from "formik";
import FileDropZone from "../UI/FileDropZone.jsx";

export default function ComplaintForm() {
  const [docType, setDocType] = useState("Патент");

  return (
    <Formik
    // initialValues={initialValues}
    // validationSchema={validationSchema}
    // onSubmit={onSubmit}
    >
      {({ isSubmitting, handleChange }) => (
        <Form id="complaint-form" className="complaint-form">
          <label className="standart_p" htmlFor="#">
            На какой орган Вы подаете жалобу? (на государственный орган, орган
            местного самоуправления, предприятие госсектора, должностное лицо)
          </label>
          <div id="complaint_target">
            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>На какой орган Вы подаете жалобу?</MenuItem>

                <MenuItem value={"Государственный орган"}>
                  Государственный орган
                </MenuItem>
                <MenuItem value={"Орган местного самоуправления"}>
                  Орган местного самоуправления
                </MenuItem>
                <MenuItem value={"Предприятие государственного сектора"}>
                  Предприятие государственного сектора
                </MenuItem>
                <MenuItem value={"Должностное лицо"}>Должностное лицо</MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p organization" for="#">
              Укажите название организации или Ф.И.О., место работы и должность
              лица, на которое подается жалоба
            </label>

            <CustomTextField
              required
              placeholder="Название организации или Ф.И.О"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              Находится ли Ваша жалоба на стадии судебного или арбитражного
              разбирательства или было ли по ней вынесено судебное или
              арбитражное решение?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Находится ли Ваша жалоба на стадии...?
                </MenuItem>
                <MenuItem value={"Да"}>Да</MenuItem>
                <MenuItem value={"Нет"}>Нет</MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p organization" for="#">
              Была ли использована возможность административного обжалования
              Вашей жалобы хотя бы в одной инстанции?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Была ли использована возможность...?
                </MenuItem>
                <MenuItem value={"Да"}>Да</MenuItem>
                <MenuItem value={"Нет"}>Нет</MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p organization" for="#">
              Прошёл ли один год с момента нарушения Ваших прав, свобод и
              законных интересов?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Прошёл ли один год с момента нарушения...?
                </MenuItem>
                <MenuItem value={"Да"}>Да</MenuItem>
                <MenuItem value={"Нет"}>Нет</MenuItem>
              </Select>
            </FormControl>

            <p class="form-header">Информация о заявителе жалобы</p>

            <label class="standart_p" for="#">
              Вы подаете жалобу в качестве ?
            </label>
            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>Вы подаете жалобу в качестве?</MenuItem>
                <MenuItem value={"Юридического лица"}>
                  Юридического лица
                </MenuItem>
                <MenuItem value={"Физического лица"}>Физического лица</MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p organization" for="#">
              2. Если Вы являетесь физическим лицом, укажите Ф.И.О.:
            </label>
            <CustomTextField
              required
              placeholder="Укажите Ф.И.О"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              ИНН:{" "}
            </label>

            <CustomTextField
              required
              placeholder="ИНН: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p" for="#">
              На основании какого документа Вы осуществляете свою деятельность?
            </label>
            <FormControl variant="outlined" fullWidth>
              <Select
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>На основании какого документа...?</MenuItem>
                <MenuItem value={"Патент"}>Патент</MenuItem>
                <MenuItem
                  value={
                    "Свидетельство о государственной регистрации индивидуального предпринимателя"
                  }
                >
                  Свидетельство о государственной регистрации индивидуального
                  предпринимателя
                </MenuItem>
              </Select>
            </FormControl>

            {docType === "Патент" ? (
              <>
                <label class="standart_p organization" for="#">
                  Серия/номер патента:{" "}
                </label>
                <CustomTextField
                  required
                  placeholder="Серия/номер патента: "
                  variant="outlined"
                  fullWidth
                  className={classes.input}
                />
              </>
            ) : (
              <>
                <label class="standart_p organization" for="#">
                  Номер свидетельства о государственной регистрации
                  индивидуального предпринимателя:{" "}
                </label>

                <CustomTextField
                  required
                  placeholder="Номер свидетельства о государственной регистрации индивидуального предпринимателя: "
                  variant="outlined"
                  fullWidth
                  className={classes.input}
                />
              </>
            )}

            <label class="standart_p organization" for="#">
              3. Если Вы подаете жалобу от юридического лица, укажите Полное
              официальное наименование юридического лица:
            </label>

            <CustomTextField
              required
              placeholder="Официальное наименование: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              Ф.И.О. руководителя:
            </label>

            <CustomTextField
              required
              placeholder="Ф.И.О. руководителя: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              Ф.И.О. заявителя и занимаемая должность (если жалоба подается не
              руководителем)
            </label>

            <CustomTextField
              required
              placeholder="Ф.И.О. заявителя и занимаемая должность: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              *Если жалоба подается не руководителем юридического лица,
              заявитель должен предоставить доверенность от имени юридического
              лица для представительства перед Бизнес-омбудсменом.
            </label>

            <CustomTextField
              required
              placeholder="ИНН: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p organization" for="#">
              Регистрационный номер Министерства юстиции КР:
            </label>

            <CustomTextField
              required
              placeholder="Регистрационный номер Министерства юстиции КР: "
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label class="standart_p" for="#">
              Регион осуществления деятельности заявителя, где произошло
              нарушение прав, свобод и законных интересов заявителя:
            </label>
            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Регион осуществления деятельности заявителя...
                </MenuItem>
                <MenuItem value={"г. Бишкек"}>г. Бишкек</MenuItem>
                <MenuItem value={"Чуйская область"}>Чуйская область</MenuItem>

                <MenuItem value={"Нарынская область"}>
                  Нарынская область
                </MenuItem>
                <MenuItem value={"Ошская область"}>Ошская область</MenuItem>
                <MenuItem value={"Баткенская область"}>
                  Баткенская область
                </MenuItem>
                <MenuItem value={"г. Ош"}>г. Ош</MenuItem>
                <MenuItem value={"Иссык-Кульская область"}>
                  Иссык-Кульская область
                </MenuItem>
                <MenuItem value={"Джалал-Абадская область"}>
                  г. Джалал-Абадская область
                </MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p" for="#">
              Сфера Вашей деятельности:
            </label>
            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>Сфера Вашей деятельности...</MenuItem>
                <MenuItem value={"легкая промышленность"}>
                  легкая промышленность
                </MenuItem>
                <MenuItem value={"горнодобывающая отрасль"}>
                  горнодобывающая отрасль
                </MenuItem>
                <MenuItem value={"ИТ-сектор	"}>ИТ-сектор </MenuItem>
                <MenuItem value={"сфера услуг"}>сфера услуг</MenuItem>
                <MenuItem value={"транспорт	"}>транспорт</MenuItem>
                <MenuItem value={"образование"}>образование</MenuItem>
                <MenuItem value={"пищевая промышленность"}>
                  пищевая промышленность
                </MenuItem>
                <MenuItem value={"финансовые услуги"}>
                  финансовые услуги
                </MenuItem>
                <MenuItem value={"торговля"}>торговля</MenuItem>
                <MenuItem value={"строительство"}>строительство</MenuItem>
                <MenuItem value={"медицина"}>медицина</MenuItem>
                <MenuItem value={"производство"}>производство</MenuItem>
              </Select>
            </FormControl>

            <label className="standart_p" htmlFor="#">
              Опишите суть жалобы
            </label>

            <CustomTextField
              required
              placeholder="Опишите суть жалобы"
              variant="outlined"
              fullWidth
              className={classes.input}
              multiline
              rows={8}
            />

            <label className="standart_p" htmlFor="#">
              Какие попытки были предприняты Вами самостоятельно для разрешения
              жалобы?
            </label>

            <CustomTextField
              required
              placeholder="Какие попытки были предприняты...?"
              variant="outlined"
              fullWidth
              className={classes.input}
              multiline
              rows={8}
            />

            <label className="standart_p" htmlFor="#">
              Что, по Вашему мнению, необходимо сделать Бизнес-омбудсмену, чтобы
              исправить ситуацию/решить проблему?
            </label>

            <CustomTextField
              required
              placeholder="Ваше мнение..."
              variant="outlined"
              fullWidth
              className={classes.input}
              multiline
              rows={8}
            />

            <label className="standart_p" htmlFor="#">
              Ф.И.О
            </label>

            <CustomTextField
              required
              placeholder="Ф.И.О"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label className="standart_p" htmlFor="#">
              Адрес
            </label>

            <CustomTextField
              required
              placeholder="Адрес"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label className="standart_p" htmlFor="#">
              Контактный телефон
            </label>

            <CustomTextField
              required
              placeholder="Контактный телефон"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <label className="standart_p" htmlFor="#">
              Электронная почта
            </label>

            <CustomTextField
              required
              placeholder="Электронная почта"
              variant="outlined"
              fullWidth
              className={classes.input}
            />

            <FileDropZone />

            <label class="standart_p organization" for="#">
              Каким способом Вы хотите получить ответ на Вашу жалобу:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Каким способом Вы хотите получить ответ...?
                </MenuItem>
                <MenuItem value={"Электронная почта"}>
                  электронная почта
                </MenuItem>
                <MenuItem value={"Почта"}>почта</MenuItem>
              </Select>
            </FormControl>

            <label class="standart_p organization" for="#">
              Желаете ли Вы, чтобы Ваша личность осталась анонимной для
              государственных органов, органов местного самоуправления, а также
              предприятий государственного сектора, против которых подана
              жалоба?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Select
                displayEmpty
                select
                onChange={() => console.log("example")}
                className={classes.input}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled>
                  Каким способом Вы хотите получить ответ...?
                </MenuItem>
                <MenuItem value={"Да"}>да</MenuItem>
                <MenuItem value={"Нет"}>Нет</MenuItem>
              </Select>
            </FormControl>

            <label className="standart_p" htmlFor="#">
              Если да, то укажите причину:
            </label>

            <CustomTextField
              required
              placeholder="Укажите причину:"
              variant="outlined"
              fullWidth
              className={classes.input}
              multiline
              rows={8}
            />

            <div style={{ display: "flex", justifyContent: 'space-between', marginBottom: 50, marginTop: 50 }}>
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                Я, как заявитель, несу полную ответственность за достоверность и
                полноту предоставленных сведений и уведомлен о том, что в случае
                предоставления недостоверной или неполной информации
                Бизнес-омбудсмен может принять решение о прекращении
                рассмотрения жалобы
              </p>
              <input id="check" className="checkbox-input" type="checkbox" />
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }}
            >
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                Я, как заявитель, даю согласие на сбор и обработку моих
                персональных данных и подтверждаю, что уведомлен о том, что мои
                персональные данные будут включены в базу персональных данных
                Института Бизнес-омбудсмена КР. Я также ознакомлен с правами
                держателя (обладателя) персональных данных в соответствии
                с&nbsp;Законом КР "Об информации персонального характера"
              </p>
              <input
                id="check2"
                style={{ marginBottom: 10 }}
                className="checkbox-input"
                type="checkbox"
              />
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }}
            >
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                Я ознакомлен с правами держателя (обладателя) персональных
                данных в соответствии с{" "}
                <a
                  className="standart_p"
                  href="http://cbd.minjust.gov.kg/act/view/ru-ru/202269"
                  style={{ color: "var(--primary)" }}
                >
                  {" "}
                  Законом КР "Об информации персонального характера"
                </a>
              </p>
              <input
                id="check3"
                style={{ marginBottom: 10 }}
                className="checkbox-input"
                type="checkbox"
              />
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: "flex-end",
              }}
            >
              <p
                className="standart_p"
                style={{ color: "#707070", width: "80%" }}
              >
                Я, как заявитель, согласен с тем, что в случае, если дальнейшее
                рассмотрение моей жалобы окажется невозможным без раскрытия моей
                личности, Бизнес-омбудсмен может принять решение о прекращении
                рассмотрения жалобы
              </p>
              <input
                id="check4"
                style={{ marginBottom: 10 }}
                className="checkbox-input"
                type="checkbox"
              />
            </div>
          </div>
          <button id="submit-btn" type="submit" className="form-button"> 
            Подать жалобу
          </button>

          {/* ---------------------------------------------- */}
        </Form>
      )}
    </Formik>
  );
}
