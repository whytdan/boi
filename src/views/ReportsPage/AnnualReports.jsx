import { FormControl, Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from './ReportsPage.module.css';
import axios from "axios";
import Loader from '../../components/UI/Loader/Loader';
import { formatDate } from '../../_helpers/date'
import { LanguageContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));  

export default function AnnualReports() {

  const [reports, setReports] = useState(null);
  const { REACT_APP_API_URL } = process.env;
  const langState = useContext(LanguageContext);

  const fetchReports = async () => {
    const response = await axios(`${REACT_APP_API_URL}/${langState.lang}/annual-reports/`);
    const data = response.data.results;
    setReports(data);
  }

  const classes = useStyles();

  useEffect(() => {
    fetchReports();
  }, [langState.lang])

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>
      
      <h1 style={{marginBottom: 25}}>
        {
          langState.lang === 'ru' ? 'Годовые отчеты' :
          langState.lang === 'kg' ? 'Жылдык отчёттор' :
          'Annual reports'
        }
      </h1>

      <Grid container spacing={3} className={styles.container}>
        <Grid item xs={12}>
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
        )) :  <Loader/>}
          
        </Grid>
      </Grid>
      </div>
    </BaseLayout>
  )
}
