import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import classes from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>
      <div className={classes.container}>
        <p>У вас есть жалоба на государственный или муниципальный орган, государственную / контролируемую компанию КР?</p>
        <p>Тел: (0312) 911 330, 911 331, <a href="tel:+996 222 911330">0222 911330</a></p>
        <p>Email: <a href="mailto:aryz@boi.kg">aryz@boi.kg</a></p>
        <p>Адрес: г. Бишкек, ул.Ибраимова 103, бизнес-центр “Victory”, 2 этаж</p>
      </div>
    </BaseLayout>
  )
}
