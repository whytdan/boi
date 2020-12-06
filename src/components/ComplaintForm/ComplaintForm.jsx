import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from "react";
import classes from "../UI/FormInput.module.css";
import { CustomTextField } from "../UI/FormStyling";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FileDropZone from "../UI/FileDropZone.jsx";
import * as Yup from "yup";
import { 
  complaint_targets,
  confirm_options, 
  complaint_types, 
  document_types, 
  regions, 
  activities, 
  response_types,
  initialValuesSchema
} from './constants';
import TextError from "../UI/TextError";
import FormikErrorFocus from 'formik-error-focus';
import axios from "axios";
import Loader from '../UI/Loader/Loader';
import swal from 'sweetalert';

export default function ComplaintForm() {
  const [initialValues, setInitialValues] = useState(initialValuesSchema);
  const [isSubmitted, setSubmitted] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    complaint_target: Yup.string().required("Обязательное поле!"),
    target_org_name: Yup.string().required("Обязательное поле!"),
    court_process: Yup.string().required("Обязательное поле!"),
    appeal: Yup.string().required("Обязательное поле!"),
    one_year: Yup.string().required("Обязательное поле!"),
    complaint_type: Yup.string().required("Обязательное поле!"),
    region: Yup.string().required("Обязательное поле!"),
    activity: Yup.string().required("Обязательное поле!"),
    complaint_description: Yup.string().required("Обязательное поле!"),
    problem_solve: Yup.string().required("Обязательное поле!"),
    our_act: Yup.string().required("Обязательное поле!"),
    is_anonymous: Yup.string().required("Обязательное поле!"),
    applicant_name: Yup.string().required("Обязательное поле!"),
    address: Yup.string().required("Обязательное поле!"),
    email: Yup.string().email("Неверный формат, введите валидный email").required("Обязательное поле!"),
    response_type: Yup.string().required("Обязательное поле!"),

    complaint_files: Yup.array().min(1, 'Требуется как минимум один файл!'),
    term1: Yup.boolean().oneOf([true], 'Обязательное поле!'),
    term2: Yup.boolean().oneOf([true], 'Обязательное поле!'),
    term3: Yup.boolean().oneOf([true], 'Обязательное поле!'),
  });

  const { REACT_APP_API_URL } = process.env;

  const sendFiles = async (complaintId, complaint_files) => {
    complaint_files.forEach(file => {
      let formData = new FormData();
      formData.append('complaint', complaintId)
      formData.append('document', file, file.name);
      axios.post(`${REACT_APP_API_URL}/common/complaint-documents/`, formData)
    });
  }

  const onSubmit = async (values, { resetForm }) => {
    try {
      const { complaint_files, term1, term2, ...sendData } = values;
      setLoading(true);
      const response = await axios.post(`${REACT_APP_API_URL}/common/complaints/`, sendData);
      const complaintId = response.data.id;

      sendFiles(complaintId, values.complaint_files);
      setSubmitted(true);
      setLoading(false);
      swal("Спасибо!", "Ваша жалоба была успешно отправлена!", "success");

    } catch (error) {
      console.log(error.response);
    }
    resetForm();
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ handleChange, values, setFieldValue }) => (

        <>

        {isLoading && <Loader/>}

        <Form id="complaint-form" className="complaint-form">
          <label className="standart_p" htmlFor="#">
            На какой орган Вы подаете жалобу? (на государственный орган, орган
            местного самоуправления, предприятие госсектора, должностное лицо)
          </label>
          <div id="complaint_target">
            <FormControl fullWidth>
              <Field
                name="complaint_target"
                onChange={handleChange('complaint_target')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.complaint_target}
                style={{ marginBottom: 15 }}
              >
                {
                  complaint_targets.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="complaint_target" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
              Укажите название организации или Ф.И.О., место работы и должность
              лица, на которое подается жалоба
            </label>

            <Field
              as={CustomTextField}
              placeholder="Название организации или Ф.И.О"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="target_org_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="target_org_name" />


            <label className="standart_p organization" htmlFor="#">
              Находится ли Ваша жалоба на стадии судебного или арбитражного
              разбирательства или было ли по ней вынесено судебное или
              арбитражное решение?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="court_process"
                onChange={handleChange('court_process')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.court_process}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="court_process" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
              Была ли использована возможность административного обжалования
              Вашей жалобы хотя бы в одной инстанции?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="appeal"
                onChange={handleChange('appeal')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.appeal}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="appeal" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
              Прошёл ли один год с момента нарушения Ваших прав, свобод и
              законных интересов?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="one_year"
                onChange={handleChange('one_year')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.one_year}
                style={{ marginBottom: 15 }}
              >
                {
                  confirm_options.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="one_year" />
            </FormControl>

            <p className="form-header">Информация о заявителе жалобы</p>

            <label className="standart_p" htmlFor="#">
              Вы подаете жалобу в качестве ?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="complaint_type"
                onChange={handleChange('complaint_type')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.complaint_type}
                style={{ marginBottom: 15 }}
              >
                {
                  complaint_types.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="complaint_type" />
            </FormControl>

            {
              values.complaint_type === 'NP' ? (
                <>
                  <label className="standart_p organization" htmlFor="#">
                    Укажите Ф.И.О.:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Укажите Ф.И.О."
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="full_name_fiz"
                  />

                  <label className="standart_p organization" htmlFor="#">
                    ИНН:{" "}
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="ИНН"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="iin"
                  />

                  <label className="standart_p" htmlFor="#">
                    На основании какого документа Вы осуществляете свою деятельность?
                  </label>

                  <FormControl variant="outlined" fullWidth>
                    <Field
                      name="document_type"
                      onChange={handleChange('document_type')}
                      select
                      className={classes.input}
                      component={TextField}
                      inputProps={{ "aria-label": "Without label" }}
                      variant="outlined"
                      value={values.document_type}
                    >
                      {
                        document_types.map(option =>
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        )
                      }
                    </Field>
                  </FormControl>

                  {values.document_type === "PATENT" ? (
                    <>
                      <label className="standart_p organization" htmlFor="#">
                        Серия/номер патента:{" "}
                      </label>

                      <Field
                        as={CustomTextField}
                        placeholder="Серия/номер патента"
                        className={classes.input}
                        fullWidth
                        variant="outlined"
                        name="document_number"
                      />
                    </>
                  ) : (
                      <>
                        <label className="standart_p organization" htmlFor="#">
                          Номер свидетельства о государственной регистрации
                  индивидуального предпринимателя:{" "}
                        </label>

                        <Field
                          as={CustomTextField}
                          placeholder="Номер свидетельства о государственной регистрации индивидуального предпринимателя"
                          className={classes.input}
                          fullWidth
                          variant="outlined"
                          name="document_number"
                        />
                      </>
                    )}
                </>
              ) : (
                  <>
                    <label className="standart_p organization" htmlFor="#">
                      Укажите Полное официальное наименование юридического лица:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Официальное наименование"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="full_name_yur"
                    />

                    <label className="standart_p organization" htmlFor="#">
                      Ф.И.О. руководителя:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Ф.И.О. руководителя"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="head_of_organ"
                    />

                    <label className="standart_p organization" htmlFor="#">
                      Ф.И.О. заявителя и занимаемая должность (если жалоба подается не
                      руководителем)
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Ф.И.О. заявителя и занимаемая должность (если жалоба подается не
                      руководителем)"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="staff_name"
                    />

                    <label className="standart_p organization" htmlFor="#">
                      *Если жалоба подается не руководителем юридического лица,
                      заявитель должен предоставить доверенность от имени юридического
                      лица для представительства перед Бизнес-омбудсменом.
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="ИНН"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="iin_staff	"
                    />

                    <label className="standart_p organization" htmlFor="#">
                      Регистрационный номер Министерства юстиции КР:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Регистрационный номер Министерства юстиции КР"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="reg_number_min_us	"
                    />
                  </>
                )
            }


            <label className="standart_p" htmlFor="#">
              Регион осуществления деятельности заявителя, где произошло
              нарушение прав, свобод и законных интересов заявителя:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="region"
                onChange={handleChange('region')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.region}
                style={{ marginBottom: 15 }}
              >
                {
                  regions.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="region" />
            </FormControl>

            <label className="standart_p" htmlFor="#">
              Сфера Вашей деятельности:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="activity"
                onChange={handleChange('activity')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.activity}
                style={{ marginBottom: 15 }}
              >
                {
                  activities.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="activity" />
            </FormControl>

            {
              values.activity === 'OTHER' ? (
                <>
                  <label className="standart_p organization" htmlFor="#">
                    Другая сфера деятельности:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Другая сфера деятельности..."
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="other_activity"
                  />
                </>
              ) : null
            }

            <label className="standart_p" htmlFor="#">
              Опишите суть жалобы
            </label>

            <Field
              as={CustomTextField}
              placeholder="Опишите суть жалобы..."
              className={classes.input}
              fullWidth
              variant="outlined"
              name="complaint_description"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="complaint_description" />

            <label className="standart_p" htmlFor="#">
              Какие попытки были предприняты Вами самостоятельно для разрешения
              жалобы?
            </label>

            <Field
              as={CustomTextField}
              placeholder="Какие попытки были предприняты...?"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="problem_solve"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="problem_solve" />

            <label className="standart_p" htmlFor="#">
              Что, по Вашему мнению, необходимо сделать Бизнес-омбудсмену, чтобы
              исправить ситуацию/решить проблему?
            </label>

            <Field
              as={CustomTextField}
              placeholder="Ваше мнение..."
              className={classes.input}
              fullWidth
              variant="outlined"
              name="our_act"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="our_act" />

            <p className="form-header">Контактные данные</p>


            <label className="standart_p" htmlFor="#">
              Ф.И.О
            </label>

            <Field
              as={CustomTextField}
              placeholder="Ф.И.О"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="applicant_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="applicant_name" />


            <label className="standart_p" htmlFor="#">
              Адрес
            </label>

            <Field
              as={CustomTextField}
              placeholder="Адрес"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="address"
              style={{ marginBottom: 15 }}
            />

            <ErrorMessage component={TextError} name="address" />

            <label className="standart_p" htmlFor="#">
              Контактный телефон
            </label>

            <Field
              as={CustomTextField}
              placeholder="Контактный телефон"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="telephone_number"
            />

            <label className="standart_p" htmlFor="#">
              Электронная почта
            </label>

            <Field
              as={CustomTextField}
              placeholder="Электронная почта"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="email"
              style={{ marginBottom: 15 }}
            />

            <ErrorMessage component={TextError} name="email" />

            <FileDropZone 
              setFieldValue={setFieldValue} 
              name="complaint_files"
              value={values.complaint_files}
              isSubmitted={isSubmitted}
              />

            <ErrorMessage component={TextError} name="complaint_files" />

            <label className="standart_p organization" htmlFor="#">
              Каким способом Вы хотите получить ответ на Вашу жалобу:
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="response_type"
                onChange={handleChange('response_type')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.response_type}
                style={{ marginBottom: 15 }}
              >
                {
                  response_types.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="response_type" />

            </FormControl>

            <label className="standart_p organization" htmlFor="#">
              Желаете ли Вы, чтобы Ваша личность осталась анонимной для
              государственных органов, органов местного самоуправления, а также
              предприятий государственного сектора, против которых подана
              жалоба?
            </label>

            <FormControl variant="outlined" fullWidth>
              <Field
                name="is_anonymous"
                onChange={handleChange('is_anonymous')}
                select
                className={classes.input}
                component={TextField}
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
                value={values.is_anonymous}
              >
                {
                  confirm_options.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
            </FormControl>

            {
              values.is_anonymous === 'YES' ? (
                <>
                  <label className="standart_p" htmlFor="#">
                    Если да, то укажите причину:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Укажите причину"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="reason_of_anonymity"
                    multiline
                    rows={8}
                  />
                </>
              ) : null
            }


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
                <br />
                <br />
                <ErrorMessage component={TextError} name="term1" />
              </p>
            
              <Field name="term1">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term1}
                    onChange={() => setFieldValue('term1', !values.term1)}
                  />
                  )
                }}
              </Field>
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
                с&nbsp; <a
                  className="standart_p"
                  href="http://cbd.minjust.gov.kg/act/view/ru-ru/202269"
                  style={{ color: "var(--primary)" }}
                >Законом КР "Об информации персонального характера"</a>
                <br />
                <br />
                <ErrorMessage component={TextError} name="term2" />
              </p>
              <Field name="term2">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term2}
                    onChange={() => setFieldValue('term2', !values.term2)}
                  />
                  )
                }}
              </Field>
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
                <br />
                <br />
                <ErrorMessage component={TextError} name="term3" />
              </p>
              <Field name="term3">
                {({form}) => {
                  const { setFieldValue } = form;
                  return (
                    <Checkbox
                    color="primary"
                    checked={values.term3}
                    onChange={() => setFieldValue('term3', !values.term3)}
                  />
                  )
                }}
              </Field>
            </div>
          </div>

          <button
            id="submit-btn"
            type="submit"
            className="form-button"
          >
            Подать жалобу
          </button>

          <FormikErrorFocus
            offset={0}
            align={'top'}
            focusDelay={100}
            ease={'linear'}
            duration={700}
          />

        </Form>
        </>
      )}
    </Formik>
  );
}
