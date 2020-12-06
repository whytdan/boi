import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from '../ReportsPage/ReportsPage.module.css';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import axios from "axios";
import { formatDate } from '../../_helpers/date'
import Loader from '../../components/UI/Loader/Loader';
import { LanguageContext } from '../../App';

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
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [cases, setCases] = useState(null);
  const [loading, setLoading] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchCases = async (url) => {
    const response = await axios.get(url);
    const data = response.data.results;
    setCases(data);
  }

  useEffect(() => {
    setLoading(true);
    const url = `${REACT_APP_API_URL}/${langState.lang}/cases/?year=${year}&month=${month}`
    fetchCases(url).then(() => setLoading(false));
  }, [year, month, langState.lang])

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>

        <h1 style={{ marginBottom: 25 }}>
          {
            langState.lang === 'ru' ? 'Решенные кейсы' :
            langState.lang === 'kg' ? 'Чечилген кейстер' : 
            'Solved cases'
          }
      </h1>

        <Grid container spacing={3} className={styles.container}>

          <Grid item xs={12} md={8}>
            {loading && <Loader/>}
            {
              cases ? cases.map((_case, index) => {
                return (<Paper className={classes.paper} style={{ marginBottom: 25 }} key={index}>
                  <p className="standart_p single-new-title" style={{ marginBottom: 10 }}>
                    <Link to={{ pathname: `/cases/${_case.id}`, state: {description: _case.description, title: _case.title, date: formatDate(_case.date.split('-'))} }}>
                      {_case.title}
                    </Link>
                  </p>
                  <p className="single-new-date standart_p" style={{ marginBottom: 10 }}>
                    {formatDate(_case.date.split('-'))}
                  </p>
                </Paper>)
              }) : null
            }
          </Grid>

          <Grid item xs={12} md={4}>
            {/* <Paper className={classes.paper}> */}
            {/* <Typography variant="body1" color="textSecondary" style={{textAlign: 'left'}}>
          Месячные отчеты
        </Typography> */}

            <FormControl className={classes.formControl}>
              <InputLabel>
              {
                langState.lang === 'ru' ? 'Выберите год' :
                langState.lang === 'kg' ? 'Жылды тандагыла' :
                'Choose a year'
              }
                </InputLabel>
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <MenuItem value={''}>{`${
                  langState.lang === 'ru' ? 'Все' :
                  langState.lang === 'kg' ? 'Баары' :
                  'All'
                }`}</MenuItem>
                <MenuItem value={2020}>{2020}</MenuItem>
                <MenuItem value={2019}>{2019}</MenuItem>
                <MenuItem value={2018}>{2018}</MenuItem>
                <MenuItem value={2017}>{2017}</MenuItem>
                <MenuItem value={2016}>{2016}</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ marginTop: 20 }}>
              <InputLabel>
                {
                  langState.lang === 'ru' ? 'Выберите месяц' :
                  langState.lang === 'kg' ? 'Айды тандагыла' :
                  'Choose a month'
                }
                </InputLabel>
              <Select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <MenuItem value={''}>{`${
                  langState.lang === 'ru' ? 'Все' :
                  langState.lang === 'kg' ? 'Баары' :
                  'All'
                }`}</MenuItem>
                <MenuItem value={1}>{`${
                  langState.lang === 'en' ? 'January' : 'Январь' 
                }`}</MenuItem>
                <MenuItem value={2}>{`${
                  langState.lang === 'en' ? 'February' : 'Февраль' 
                }`}</MenuItem>
                <MenuItem value={3}>{`${
                  langState.lang === 'en' ? 'March' : 'Март' 
                }`}</MenuItem>
                <MenuItem value={4}>{`${
                  langState.lang === 'en' ? 'April' : 'Апрель'
                }`}</MenuItem>
                <MenuItem value={5}>{`${
                  langState.lang === 'en' ? 'May' : 'Май'
                }`}</MenuItem>
                <MenuItem value={6}>{`${
                  langState.lang === 'en' ? 'June' : 'Июнь'
                }`}</MenuItem>
                <MenuItem value={7}>{`${
                  langState.lang === 'en' ? 'July' : 'Июль'
                }`}</MenuItem>
                <MenuItem value={8}>{`${
                  langState.lang === 'en' ? 'August' : 'Август'
                }`}</MenuItem>
                <MenuItem value={9}>{`${
                  langState.lang === 'en' ? 'September' : 'Сентябрь'
                }`}</MenuItem>
                <MenuItem value={10}>{`${
                  langState.lang === 'en' ? 'October' : 'Октябрь'
                }`}</MenuItem>
                <MenuItem value={11}>{`${
                  langState.lang === 'en' ? 'November' : 'Ноябрь'
                }`}</MenuItem>
                <MenuItem value={12}>{`${
                  langState.lang === 'en' ? 'December' : 'Декабрь'
                }`}</MenuItem>
              </Select>
            </FormControl>

          </Grid>

        </Grid>





        {/* <Pagination count={5} color="primary" style={{ marginTop: 30 }} /> */}

      </div>
    </BaseLayout>
  )
}
