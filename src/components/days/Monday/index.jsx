import React from 'react';
import s from './style.module.css';

export default function Monday({findDay, deleteDay}) {

  return (
    <div className={s.block}>
      <button onClick={() => deleteDay('Monday')}>&#10006;</button>
        <div className={s.first}>
            <p>MON</p>
        </div>
        <div className={s.second}>
          {
            findDay('Monday')
          }
        </div>
    </div>
  )
}
