import React from 'react';
import s from './style.module.css';

export default function Tuesday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Tuesday')}>&#10006;</button>
        <div className={s.first}>
            <p>TUE</p>
        </div>
        <div className={s.second}>
          {
            findDay('Tuesday')
          }
        </div>
    </div>
  )
}