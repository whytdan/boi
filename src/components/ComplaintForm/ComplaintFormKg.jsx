import { FormControl, MenuItem, Select, TextField } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from "react";
import classes from "../UI/FormInput.module.css";
import { CustomTextField } from "../UI/FormStyling";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FileDropZone from "../UI/FileDropZone.jsx";
import * as Yup from "yup";
import { 
  complaint_targets_kg,
  confirm_options_kg, 
  complaint_types_kg, 
  document_types_kg, 
  regions_kg, 
  activities_kg, 
  response_types_kg,
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
    complaint_target: Yup.string().required("Бул маалыматты толтуруңуз!"),
    target_org_name: Yup.string().required("Бул маалыматты толтуруңуз!"),
    court_process: Yup.string().required("Бул маалыматты толтуруңуз!"),
    appeal: Yup.string().required("Бул маалыматты толтуруңуз!"),
    one_year: Yup.string().required("Бул маалыматты толтуруңуз!"),
    complaint_type: Yup.string().required("Бул маалыматты толтуруңуз!"),
    region: Yup.string().required("Бул маалыматты толтуруңуз!"),
    activity: Yup.string().required("Бул маалыматты толтуруңуз!"),
    complaint_description: Yup.string().required("Бул маалыматты толтуруңуз!"),
    problem_solve: Yup.string().required("Бул маалыматты толтуруңуз!"),
    our_act: Yup.string().required("Бул маалыматты толтуруңуз!"),
    is_anonymous: Yup.string().required("Бул маалыматты толтуруңуз!"),
    applicant_name: Yup.string().required("Бул маалыматты толтуруңуз!"),
    address: Yup.string().required("Бул маалыматты толтуруңуз!"),
    email: Yup.string().email("Туура электрондук даректи жазыӊыз!").required("Бул маалыматты толтуруңуз!"),
    response_type: Yup.string().required("Бул маалыматты толтуруңуз!"),

    complaint_files: Yup.array().min(1, 'Кеминде бир файл талап кылынат!'),
    term1: Yup.boolean().oneOf([true], 'Бул маалыматты толтуруңуз!'),
    term2: Yup.boolean().oneOf([true], 'Бул маалыматты толтуруңуз!'),
    term3: Yup.boolean().oneOf([true], 'Бул маалыматты толтуруңуз!'),
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
      swal("Рахмат!", "Даттанууңуз ийгиликтүү тапшырылды!", "success");

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
          Сиз арызды кимге карата берип жатасыз?
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
                  complaint_targets_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="complaint_target" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Мекеменин аталышы, кызмат адамынын аты-жѳнү, иштеген жери жана кызматы:
            </label>

            <Field
              as={CustomTextField}
              placeholder="Мекеменин аталышы же кызмат адамынын аты-жѳнү"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="target_org_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="target_org_name" />


            <label className="standart_p organization" htmlFor="#">
            Сиздин арызыӊыз соттук/арбитраждык териштирүү баскычындабы же арыз боюнча соттук/арбитраждык чечим кабыл алынды беле?
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
                  confirm_options_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="court_process" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Арыз боюнча жок дегенде бир инстанцияда административдик даттануу мүмкүнчүлүгүн пайдаландыӊыз беле? 
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
                  confirm_options_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="appeal" />
            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Сиздин укуктарыӊыз, эркиндиктериӊиз же мыйзамдуу кызыкчылыктарыӊыз бузулган күндѳн тартып бир жыл ѳттүбү?
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
                  confirm_options_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="one_year" />
            </FormControl>

            <p className="form-header">Арыз берүүчү жѳнүндѳ маалымат</p>

            <label className="standart_p" htmlFor="#">
            Сиз арызыңызды ким сыпатында берип жатасыз?
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
                  complaint_types_kg.map(option =>
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
                  Аты-жөнүңүз:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Аты-жөнүңүз"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="full_name_fiz"
                  />

                  <label className="standart_p organization" htmlFor="#">
                  Идентификациялык жеке номериңиз:{" "}
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Идентификациялык жеке номериңиз"
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="iin"
                  />

                  <label className="standart_p" htmlFor="#">
                  Ишмердигиӊизди эмненин негизинде жүргүзүп жатасыз?
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
                        document_types_kg.map(option =>
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
                      Патенттин сериясы жана номери:{" "}
                      </label>

                      <Field
                        as={CustomTextField}
                        placeholder="Патенттин сериясы жана номери"
                        className={classes.input}
                        fullWidth
                        variant="outlined"
                        name="document_number"
                      />
                    </>
                  ) : (
                      <>
                        <label className="standart_p organization" htmlFor="#">
                        Жеке ишкердин мамлекеттик каттоосу жөнүндө күбөлүгүнүн номери:{" "}
                        </label>

                        <Field
                          as={CustomTextField}
                          placeholder="Жеке ишкердин мамлекеттик каттоосу жөнүндө күбөлүгүнүн номери"
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
                    Юридикалык жактын толук расмий аталышы:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Расмий аталышы"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="full_name_yur"
                    />

                    <label className="standart_p organization" htmlFor="#">
                        Жетекчинин аты-жөнү:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Жетекчинин аты-жөнү"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="head_of_organ"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    Арыз берип жаткан адамдын аты-жөнү жана ээлеген кызматы (эгерде арыз жетекчи тарабынан берилбесе):
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Арыз берип жаткан адамдын аты-жөнү жана ээлеген кызматы (эгерде арыз жетекчи тарабынан берилбесе)"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="staff_name"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    * Эгерде арыз юридикалык жактын жетекчиси тарабынан берилбесе, арыз ээси Бизнес-омбудсмен алдында өкүлчүлүк кылуу үчүн юридикалык жактын атынан ишеним кат берүүгө тийиш.
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Идентификациялык жеке номери"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="iin_staff	"
                    />

                    <label className="standart_p organization" htmlFor="#">
                    Кыргыз Республикасынын Юстиция министрлигиндеги каттоо номери:
                    </label>

                    <Field
                      as={CustomTextField}
                      placeholder="Кыргыз Республикасынын Юстиция министрлигиндеги каттоо номери"
                      className={classes.input}
                      fullWidth
                      variant="outlined"
                      name="reg_number_min_us	"
                    />
                  </>
                )
            }


            <label className="standart_p" htmlFor="#">
            Арыз ээси ишмердүүлүгүн жүргүзүп, анын укуктары, эркиндиктери же мыйзамдуу кызыкчылыктары бузулган аймак:
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
                  regions_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="region" />
            </FormControl>

            <label className="standart_p" htmlFor="#">
            Ишмердүүлүгүӊүздүн чѳйрѳсү:
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
                  activities_kg.map(option =>
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
                  Башка чѳйрѳ:
                  </label>

                  <Field
                    as={CustomTextField}
                    placeholder="Башка чѳйрѳ..."
                    className={classes.input}
                    fullWidth
                    variant="outlined"
                    name="other_activity"
                  />
                </>
              ) : null
            }

            <label className="standart_p" htmlFor="#">
            Даттануунун мазмунун сыпаттаӊыз
            </label>

            <Field
              as={CustomTextField}
              placeholder="Даттануунун мазмунун сыпаттаӊыз..."
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
            Бул кѳйгѳйдү чечүү үчүн ѳз алдыӊызча кандай чараларды кѳрдүӊүз?
            </label>

            <Field
              as={CustomTextField}
              placeholder="Кандай чараларды кѳрдүӊүз?...?"
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
            Сиздин пикириӊиз боюнча, Бизнес-акыйкатчы кырдаалды жакшыртуу үчүн / маселени чечүү үчүн эмне кылышы керек?
            </label>

            <Field
              as={CustomTextField}
              placeholder="Сиздин пикириӊиз..."
              className={classes.input}
              fullWidth
              variant="outlined"
              name="our_act"
              multiline
              rows={8}
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="our_act" />

            <p className="form-header">Байланыш маалымат</p>


            <label className="standart_p" htmlFor="#">
            Аты-жѳнүӊүз
            </label>

            <Field
              as={CustomTextField}
              placeholder="Аты-жѳнүӊүз"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="applicant_name"
              style={{ marginBottom: 15 }}
            />
            <ErrorMessage component={TextError} name="applicant_name" />


            <label className="standart_p" htmlFor="#">
            Дарегиӊиз
            </label>

            <Field
              as={CustomTextField}
              placeholder="Дарегиӊиз"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="address"
              style={{ marginBottom: 15 }}
            />

            <ErrorMessage component={TextError} name="address" />

            <label className="standart_p" htmlFor="#">
            Байланыш телефонуңуз
            </label>

            <Field
              as={CustomTextField}
              placeholder="Байланыш телефонуңузн"
              className={classes.input}
              fullWidth
              variant="outlined"
              name="telephone_number"
            />

            <label className="standart_p" htmlFor="#">
            Электрондук почтаңыз 
            </label>

            <Field
              as={CustomTextField}
              placeholder="Электрондук почтаңыз"
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
            Арызыӊызга жоопту эмне жол аркылуу алууну каалайсыз?
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
                  response_types_kg.map(option =>
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  )
                }
              </Field>
              <ErrorMessage component={TextError} name="response_type" />

            </FormControl>

            <label className="standart_p organization" htmlFor="#">
            Сиз мамлекеттик органдар, жергиликтүү ѳз алдынча башкаруу органдары, ошондой эле мамлекеттик сектордогу ишканалар үчүн ѳздүгүӊүздүн жашыруун калуусун каалайсызбы?
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
                  confirm_options_kg.map(option =>
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
                  Эгерде ооба деп жооп берсеңиз, себебин белгилеп коюңуз:
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
                Мен, арыз берүүчү катары, арызда камтылган маалыматтардын чындыкка дал келүүсү жана толук берилүүсү үчүн жооп берем, ошондой эле берилген маалыматтар чындыкка дал келбесе же толук эмес берилсе, Бизнес-омбудсмен ары кароону токтотуу чечим кабыл алышы мүмкүндүгү жөнүндө кабардар экендигимди ырастайм.
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
                Мен, арыз берүүчү катары, менин жеке маалыматтарымдын топтолушуна жана иштелип чыгуусуна макулдугумду берем жана жеке маалыматтарымдын КР Бизнес-акыйкатчы институтунун маалымат базасына киргизиле тургандыгы жѳнүндѳ кабардар экендигимди ырастайм. Ошондой эле мен
                <a
                  className="standart_p"
                  href="http://cbd.minjust.gov.kg/act/view/ru-ru/202269"
                  style={{ color: "var(--primary)" }}
                > «Жеке мүнѳздѳгү маалыматтар жѳнүндѳ»</a> Кыргыз Республикасынын Мыйзамына ылайык, жеке маалыматтардын кармоочусунун (ээсинин) укуктары менен тааныштым.
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
                Мен, арыз берүүчү катары, менин ѳздүгүм белгилүү болбогон учурда арызымды андан ары карап чыгуу мүмкүн болбосо, Бизнес-акыйкатчы арызымды карап чыгууну токтотуп коё ала тургандыгына макулдугумду билдирем.
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
            Арыз берүү
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
