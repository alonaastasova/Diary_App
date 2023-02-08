import { useEffect, useState } from "react";
import Monday from "../days/Monday";
import Tuesday from "../days/Tuesday";
import Wednesday from "../days/Wednesday";
import Thursday from "../days/Thursday";
import Friday from "../days/Friday";
import Saturday from "../days/Saturday";
import Sunday from "../days/Sunday";
import Form from "../Form";
import s from './style.module.css'
import Card from "../Card";


function App() {

  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) ?? []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task])
  };

  const findDay = (day) => {
    const new_tasks = tasks.filter(task => task.day === day)
    return new_tasks.map(task => <Card key={task.id} {...task} deleteTask={deleteTask} checkImportance={checkImportance} />)
  }

  const checkImportance = (level) => {
    const target = tasks.find(({importance}) => importance === level)
    if(target.importance === 'important'){
      return {backgroundColor: '#e63946'}
    }else{
      return {backgroundColor: '#52b788'}
    }
  }

  const deleteDay = delDay => setTasks(pre => pre.filter(({day}) => day !== delDay));

  const deleteTask = delId => setTasks(pre => pre.filter(({id}) => id !== delId));

  const addBlock = (day) => {
    if(day === 'Monday'){
      return tasks.filter(({day}) => day === 'Monday').length === 0 ? '' : <Monday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Tuesday'){
      return tasks.filter(({day}) => day === 'Tuesday').length === 0 ? '' : <Tuesday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Wednesday'){
      return tasks.filter(({day}) => day === 'Wednesday').length === 0 ? '' : <Wednesday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Thursday'){
      return tasks.filter(({day}) => day === 'Thursday').length === 0 ? '' : <Thursday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Friday'){
      return tasks.filter(({day}) => day === 'Friday').length === 0 ? '' : <Friday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Saturday'){
      return tasks.filter(({day}) => day === 'Saturday').length === 0 ? '' : <Saturday findDay={findDay} deleteDay={deleteDay}/>
    }else if(day === 'Sunday'){
      return tasks.filter(({day}) => day === 'Sunday').length === 0 ? '' : <Sunday findDay={findDay} deleteDay={deleteDay}/>
    }
  }


  return (
    <div className={s.main}>
      <Form addTask={addTask}/>

      <div className={s.taskContainer}>
        {
          addBlock('Monday')
        }
        {
          addBlock('Tuesday')
        }
        {
          addBlock('Wednesday')
        }
        {
          addBlock('Thursday')
        }
        {
          addBlock('Friday')
        }
        {
          addBlock('Saturday')
        }
        {
          addBlock('Sunday')
        }
      </div>
    </div>
  );
}

export default App;
