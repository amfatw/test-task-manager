import { useState } from 'react';

import { TableHeader } from './TableHeader';
import { getFilteredTasks } from '../utils/getFilteredTasks';
import { TableBody } from './TableBody';


const TasksTable = ({ tasks, changeTaskStatus }) => {
  const {completedTasks, forTodayTasks, forLaterTasks} = getFilteredTasks(tasks);
  const [currentTab, setCurentTab] = useState('forTodayTasks');

  const changeCurrentTab = (tabId) => {
    if (currentTab === tabId) {
      setCurentTab('');

      return;
    }
    
    setCurentTab(tabId);
  }


  return (
    <table className='tasks-table'>
      <caption 
        className='tasks-table__caption'
      >
        Задачи
      </caption>
      
      <TableHeader/>

      <TableBody
        id='completedTasks'
        name='Выполненные задачи'
        tasks={completedTasks}
        isActive={currentTab === 'completedTasks'}
        
        changeCurrentTab={changeCurrentTab}
        changeTaskStatus={changeTaskStatus}
      />

      <TableBody
        id='forTodayTasks'
        name='Задачи на сегодня'
        tasks={forTodayTasks}
        isActive={currentTab === 'forTodayTasks'}

        changeCurrentTab={changeCurrentTab}
        changeTaskStatus={changeTaskStatus}
      />

      <TableBody
        id='forLaterTasks'
        name='Предстоящие задачи'
        tasks={forLaterTasks}
        isActive={currentTab === 'forLaterTasks'}

        changeCurrentTab={changeCurrentTab}
        changeTaskStatus={changeTaskStatus}
      />
    </table>
  )
}


export { TasksTable }