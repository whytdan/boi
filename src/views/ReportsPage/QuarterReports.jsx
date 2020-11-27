import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from './ReportsPage.module.css';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '16px 20px 16px 10px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%"
  },
}));


export default function QuarterReports() {
  const classes = useStyles();
  const [year, setYear] = useState(2020);
  const [quarter, setQuarter] = useState('1-ый квартал');

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>

      <h1>
        Квартальные отчеты
      </h1>

      <Grid container spacing={3} className={styles.container}>

        <Grid item xs={12} md={8}>
          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 Сентябрь 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Отчет за 1 квартал
            </a>
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 Сентябрь 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Отчет за 1 квартал
            </a>
            </p>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 Сентябрь 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Отчет за 1 квартал
            </a>
            </p>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 Сентябрь 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Отчет за 1 квартал
            </a>
            </p>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 Сентябрь 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Отчет за 1 квартал
            </a>
            </p>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
        {/* <Paper className={classes.paper}> */}
        {/* <Typography variant="body1" color="textSecondary" style={{textAlign: 'left'}}>
          Месячные отчеты
        </Typography> */}

        <FormControl className={classes.formControl}>
          <InputLabel>Выберите год</InputLabel>
          <Select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
          <MenuItem value={2020}>{2020}</MenuItem>
          <MenuItem value={2019}>{2019}</MenuItem>
          <MenuItem value={2018}>{2018}</MenuItem>
          <MenuItem value={2017}>{2017}</MenuItem>
          <MenuItem value={2016}>{2016}</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} style={{marginTop: 20}}>
          <InputLabel>Выберите квартал</InputLabel>
          <Select
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
          >
          <MenuItem value={'1-ый квартал'}>{'1-ый квартал'}</MenuItem>
          <MenuItem value={'2-ой квартал'}>{'2-ой квартал'}</MenuItem>
          <MenuItem value={'3-ий квартал'}>{'3-ий квартал'}</MenuItem>
          <MenuItem value={'4-ый квартал'}>{'4-ый квартал'}</MenuItem>
          </Select>
        </FormControl>
          
      </Grid>
      
      </Grid>

      

      

      <Pagination count={5} color="primary" style={{marginTop: 30}}/>
      
      </div>
    </BaseLayout>
  )
}
