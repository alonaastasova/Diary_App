import React from 'react';
import s from './style.module.css';

export default function Sunday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Sunday')}>&#10006;</button>
        <div className={s.first}>
            <p>SUN</p>
        </div>
        <div className={s.second}>
          {
            findDay('Sunday')
          }
        </div>
    </div>
  )
}