import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useContext, useState } from "react";
import classes from '../UI/FormInput.module.css';
import { CustomTextField } from "../UI/FormStyling";
import TextError from "../UI/TextError";
import * as Yup from "yup";
import FormikErrorFocus from 'formik-error-focus';
import axios from "axios";
import Loader from '../UI/Loader/Loader';
import swal from 'sweetalert';
import { LanguageContext } from "../../App";


export default function ConsultationForm() {

  const initialValues = {
    full_name: '',
    mobile: '',
    question: ''
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("Обязательное поле!"),
    mobile: Yup.string().required("Обязательное поле!"),
    question: Yup.string().required("Обязательное поле!"),
  });

  const [isLoading, setLoading] = useState(false);

  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      const response = await axios.post(`${REACT_APP_API_URL}/common/consultations/`, values);

      setLoading(false);
      swal("Спасибо!", "Ваш вопрос был успешно отправлен!", "success");

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
      <>
      {isLoading && <Loader/>}

      <Form
        id="complaint-form"
        method="POST"
        className="complaint-form"
      >
        <label className="standart_p" htmlFor="#">
        {
          langState.lang === 'ru' ? 'Введите ваше полное имя' :
          langState.lang === 'kg' ? 'Толук аты-жөнүңүздү жазыңыз' :
          'Your full name'
        }
        </label>


      <Field
        as={CustomTextField}
        placeholder={`${langState.lang === 'ru' ? 'Введите ваше полное имя' :
          langState.lang === 'kg' ? 'Толук аты-жөнүңүздү жазыңыз' :
          'Your full name'}
        `}
        className={classes.input}
        fullWidth
        variant="outlined"
        name="full_name"
        style={{ marginBottom: 15 }}
      />
      <ErrorMessage component={TextError} name="full_name" />


      <label className="standart_p" htmlFor="#">
        {
          langState.lang === 'ru' ? 'Номер телефона' :
          langState.lang === 'kg' ? 'Телефон номуру' :
          'Phone number'
        }
      </label>

      <Field
        as={CustomTextField}
        placeholder={`${langState.lang === 'ru' ? 'Номер телефона' :
        langState.lang === 'kg' ? 'Телефон номуру' :
        'Phone number'}`}
        className={classes.input}
        fullWidth
        variant="outlined"
        name="mobile"
        style={{ marginBottom: 15 }}
      />
      <ErrorMessage component={TextError} name="mobile" />


      <label className="standart_p" htmlFor="#">
        {
          langState.lang === 'ru' ? 'Опишите свой вопрос' :
          langState.lang === 'kg' ? 'Сурооңузду сүрөттөп бериңиз' :
          'Describe your question'
        }
      </label>

      <Field
        as={CustomTextField}
        placeholder={`${langState.lang === 'ru' ? 'Опишите свой вопрос' :
        langState.lang === 'kg' ? 'Сурооңузду сүрөттөп бериңиз' :
        'Describe your question'}`}
        className={classes.input}
        fullWidth
        variant="outlined"
        name="question"
        style={{ marginBottom: 15 }}
        multiline
        rows={8}
      />
      <ErrorMessage component={TextError} name="question" />

      <button id="submit-btn" type="submit" className="form-button" style={{display: 'block'}}>
        {
          langState.lang === 'ru' ? 'Подать заявку' :
          langState.lang === 'kg' ? 'Арыз берүү' :
          'Apply'
        }
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
    </Formik>
  );
}
