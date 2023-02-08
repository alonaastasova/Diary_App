import React from 'react';
import s from './style.module.css';

export default function Thursday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Thursday')}>&#10006;</button>
        <div className={s.first}>
            <p>THU</p>
        </div>
        <div className={s.second}>
          {
            findDay('Thursday')
          }
        </div>
    </div>
  )
}