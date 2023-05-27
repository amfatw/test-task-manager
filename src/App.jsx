import { useState } from 'react';

import { TasksTable } from './components/TasksTable';
import { AppHeader } from './components/AppHeader';
import { SideBlock } from './components/SideBlock';
import { getNewTasks } from './utils/getNewTasks';

import { initialTasks } from './initialTasks';


const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const changeTaskStatus = (taskId, newStatus) => {
    const newTasks = getNewTasks(tasks, taskId, newStatus);

    setTasks(newTasks);
  }


  return (
    <div className='app-container'>
      <AppHeader/>

      <main className='app-main'>
        <SideBlock/>
        <div className='table-block'>
          <TasksTable 
            tasks={tasks}

            changeTaskStatus={changeTaskStatus}
          />
        </div>
      </main>
    </div>
  )
}


export { App };