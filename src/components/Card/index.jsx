import React from 'react';
import s from './style.module.css'

export default function Card({id, description, importance, deleteTask, checkImportance}) {
  return (
    <div className={s.task} style={checkImportance(importance)}>
        <button onClick={() => deleteTask(id)}>&#10006;</button>
        <p style={checkImportance(importance)}>{description}</p>
    </div>
  )
}
