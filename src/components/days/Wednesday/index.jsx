import React from 'react';
import s from './style.module.css';

export default function Wednesday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Wednesday')}>&#10006;</button>
        <div className={s.first}>
            <p>WED</p>
        </div>
        <div className={s.second}>
          {
            findDay('Wednesday')
          }
        </div>
    </div>
  )
}