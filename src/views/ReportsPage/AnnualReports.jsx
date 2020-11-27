import { FormControl, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BaseLayout from '../../layouts/BaseLayout';
import Pagination from '@material-ui/lab/Pagination';
import styles from './ReportsPage.module.css';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function AnnualReports() {
  const classes = useStyles();

  return (
    <BaseLayout>
      <div style={{ height: 100 }}></div>

      <div className={styles.root}>
      
      <h1>
        Годовые отчеты
      </h1>

      <Grid container spacing={3} className={styles.container}>


        <Grid item xs={12}>
          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            4 марта 2020
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Годовой отчет за 2020
            </a>
            </p>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            11 марта 2019
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Годовой отчет за 2018
            </a>
            </p>
          </Paper>

          <Paper className={classes.paper} style={{marginBottom: 25}}>
            <p className="single-new-date standart_p" style={{marginBottom: 10}}>
            05 марта 2018
            </p>
            <p className="standart_p single-new-title" style={{marginBottom: 10}}>
            <a href="https://boi.org.ua/files/db/xd/3q-20-en.pdf" target="blank">
                Годовой отчет за 2019
            </a>
            </p>
          </Paper>
        </Grid>

        {/* <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
        <Typography variant="body1" color="textSecondary" style={{textAlign: 'left'}}>
          Выберите год
        </Typography>
        </Paper>
        </Grid> */}
      
      </Grid>
      </div>
    </BaseLayout>
  )
}
