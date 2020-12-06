import { FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from './ReportsPage.module.css';
import Divider from '@material-ui/core/Divider';
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


export default function QuarterReports() {
  const classes = useStyles();
  const [year, setYear] = useState('');
  const [quarter, setQuarter] = useState('');

  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchReports = async (url) => {
    const response = await axios(url);
    const data = response.data.results;
    setReports(data);
  }

  useEffect(() => {
    
    setLoading(true);
    const url = `${REACT_APP_API_URL}/${langState.lang}/quarter-reports/?year=${year}&quarter_type=${quarter}`;
    fetchReports(url).then(() => setLoading(false));

  }, [year, quarter, langState.lang]);

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>

      <h1 style={{marginBottom: 25}}>
        {
          langState.lang === 'ru' ? 'Квартальные отчеты' : 
          langState.lang === 'kg' ? 'Кварталдык отчёттор' : 
          'Quarter reports'
        }
      </h1>

      <Grid container spacing={3} className={styles.container}>

        {loading && <Loader/>}

        <Grid item xs={12} md={8}>
          {reports ? reports.map((report, index) => (
          <Paper className={classes.paper} style={{marginBottom: 25}} key={index}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            {formatDate(report.date.split('-'))}
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href={report.file} target="blank">
                {report.title}
            </a>
            </p>
          </Paper>
          )) : null}
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

        <FormControl className={classes.formControl} style={{marginTop: 20}}>
          <InputLabel>
          {
            langState.lang === 'ru' ? 'Выберите квартал' :
            langState.lang === 'kg' ? 'Кварталды тандагыла' :
            'Choose a quarter'
          }
            </InputLabel>
          <Select
            value={quarter}
            onChange={(e) => setQuarter(e.target.value)}
          >
          <MenuItem value={''}>{`${
            langState.lang === 'ru' ? 'Все' :
            langState.lang === 'kg' ? 'Баары' :
            'All'
          }`}</MenuItem>
          <MenuItem value={'I'}>{`${
            langState.lang === 'ru' ? '1ый квартал' :
            langState.lang === 'kg' ? '1чи квартал' :
            '1st quarter'
          }`}</MenuItem>
          <MenuItem value={'II'}>{`${
            langState.lang === 'ru' ? '2ой квартал' :
            langState.lang === 'kg' ? '2чи квартал' :
            '2nd quarter'
          }`}</MenuItem>
          <MenuItem value={'III'}>{`${
            langState.lang === 'ru' ? '3ий квартал' :
            langState.lang === 'kg' ? '3чү квартал' :
            '3rd quarter'
          }`}</MenuItem>
          <MenuItem value={'IV'}>{`${
            langState.lang === 'ru' ? '4ый квартал' :
            langState.lang === 'kg' ? '4чү квартал' :
            '4th quarter'
          }`}</MenuItem>
          </Select>
        </FormControl>
          
      </Grid>
      
      </Grid>

      

      

      {/* <Pagination count={5} color="primary" style={{marginTop: 30}}/> */}
      
      </div>
    </BaseLayout>
  )
}
