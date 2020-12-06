import React from 'react'
import classes from './Loader.module.css';

export default function Loader() {
    return (
        <div class={classes.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
