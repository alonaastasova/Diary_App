import React from 'react';
import s from './style.module.css'

export default function Form({addTask}) {

  const submit = event => {
    event.preventDefault();
    const {day} = event.target;
    const {importance} = event.target;
    const {description} = event.target;

    const new_task = {
      id: Date.now(),
      day: day.value,
      importance: importance.value,
      description: description.value
    }

    addTask(new_task)

    day.value = '';
    importance.value = '';
    description.value = '';
  }

  return (
    <div className={s.block}>
        <form className={s.form} onSubmit={submit}>
          <div className={s.first_block}>
            <input list='weekdays' name='day' placeholder='Pick a day'/>
              <datalist id='weekdays'>
                  <option value="Monday"></option>
                  <option value="Tuesday"></option>
                  <option value="Wednesday"></option>
                  <option value="Thursday"></option>
                  <option value="Friday"></option>
                  <option value="Saturday"></option>
                  <option value="Sunday"></option>
              </datalist>
              <input list='importance' name='importance' placeholder='Set importance'/>
              <datalist id='importance'>
                  <option value="important"></option>
                  <option value="unimportant"></option>
              </datalist>
            </div>
            <div className={s.second_block}>
              <input type="text" name='description' placeholder='Description'/>
              <button>Submit</button>
            </div>
        </form>
    </div>
  )
}
