import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from '../ReportsPage/ReportsPage.module.css';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

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


export default function CasesPage() {
  const classes = useStyles();
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState('Все');

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>

      <h1 style={{marginBottom: 25}}>
        Решенные кейсы
      </h1>

      <Grid container spacing={3} className={styles.container}>

        <Grid item xs={12} md={8}>
          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
              <Link to="/cases/1">
              Решенный кейс 5
              </Link>
            </p>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 сентябрь 2020
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
              <Link to="/cases/1">
              Решенный кейс 5
              </Link>
            </p>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 сентябрь 2020
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
              <Link to="/cases/1">
              Решенный кейс 5
              </Link>
            </p>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 сентябрь 2020
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
              <Link to="/cases/1">
              Решенный кейс 5
              </Link>
            </p>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 сентябрь 2020
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
              <Link to="/cases/1">
              Решенный кейс 5
              </Link>
            </p>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            13 сентябрь 2020
            </p>
            {/* <p className="standart_p single-new-text">
            Наблюдательный совет принял и одобрил отчёт Бизнес-омбудсмена о проделанной работе за 1-ый квартал 2020 года. Отчет доступен в разделе "Правовые …
            </p> */}
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
          <InputLabel>Выберите месяц</InputLabel>
          <Select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
          <MenuItem value={'Все'}>{'Все'}</MenuItem>
          <MenuItem value={'Январь'}>{'Январь'}</MenuItem>
          <MenuItem value={'Февраль'}>{'Февраль'}</MenuItem>
          <MenuItem value={'Март'}>{'Март'}</MenuItem>
          <MenuItem value={'Апрель'}>{'Апрель'}</MenuItem>
          <MenuItem value={'Май'}>{'Май'}</MenuItem>
          <MenuItem value={'Июнь'}>{'Июнь'}</MenuItem>
          <MenuItem value={'Июль'}>{'Июль'}</MenuItem>
          <MenuItem value={'Август'}>{'Август'}</MenuItem>
          <MenuItem value={'Сентябрь'}>{'Сентябрь'}</MenuItem>
          <MenuItem value={'Октябрь'}>{'Октябрь'}</MenuItem>
          <MenuItem value={'Ноябрь'}>{'Ноябрь'}</MenuItem>
          <MenuItem value={'Декабрь'}>{'Декабрь'}</MenuItem>
          </Select>
        </FormControl>
          
      </Grid>
      
      </Grid>

      

      

      <Pagination count={5} color="primary" style={{marginTop: 30}}/>
      
      </div>
    </BaseLayout>
  )
}
