import React from 'react';
import s from './style.module.css';

export default function Friday({findDay, deleteDay}) {
  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Friday')}>&#10006;</button>
        <div className={s.first}>
            <p>FRI</p>
        </div>
        <div className={s.second}>
          {
            findDay('Friday')
          }
        </div>
    </div>
  )
}
