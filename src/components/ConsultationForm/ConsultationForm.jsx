import React from "react";
import classes from '../UI/FormInput.module.css';
import { CustomTextField } from "../UI/FormStyling";


export default function ConsultationForm() {
  return (
    <form
      id="complaint-form"
      method="POST"
      className="complaint-form"
      encType="multipart/form-data"
    >
      <label className="standart_p" htmlFor="#">
        Введите ваше полное имя
      </label>


      <CustomTextField
        required
        placeholder="Введите ваше полное имя"
        variant="outlined"
        fullWidth
        className={classes.input}
      />

      <label className="standart_p" htmlFor="#">
        Мобильный
      </label>

      <CustomTextField
        required
        placeholder="Мобильный"
        variant="outlined"
        fullWidth
        className={classes.input}
      />

      <label className="standart_p" htmlFor="#">
        Опишите свой вопрос
      </label>
    

      <CustomTextField
        required
        placeholder="Опишите свой вопрос"
        variant="outlined"
        fullWidth
        className={classes.input}
        multiline
        rows={8}
        styles={{marginBottom: '200px'}}
      />

      <button id="submit-btn" type="submit" className="form-button">
        Подать заявку
      </button>
    </form>
  );
}
