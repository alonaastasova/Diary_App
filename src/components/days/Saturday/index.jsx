import React from 'react';
import s from './style.module.css';

export default function Saturday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Saturday')}>&#10006;</button>
        <div className={s.first}>
            <p>SAT</p>
        </div>
        <div className={s.second}>
          {
            findDay('Saturday')
          }
        </div>
    </div>
  )
}