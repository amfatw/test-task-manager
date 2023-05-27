import { TaskStatusSelect } from './TaskStatusSelect';


const TableBody = ({ id, name, tasks, isActive, changeCurrentTab, changeTaskStatus }) => {
  let classes = 'tasks-table__body';
  if (isActive) classes += ' tasks-table__body--active';


  return (
    <tbody className={classes}>
      <tr>
        <th
          className='tasks-table__tab-head'
          colSpan='13'
          onClick={() => changeCurrentTab(id)}
        >
          {name}
        </th>
      </tr>

      {tasks.map((task) => {
        const {
          date, 
          taskNumber, 
          projectNumber, 
          text, 
          status, 
          responsible, 
          reassighn, 
          priority, 
          comment, 
          planedTime, 
          factTime, 
          start, 
          end
        } = task;

        const classes = `task-row ${status === 'inProgress' ? 'task-row--inProgress' : ''}`

        return (
          <tr 
            key={taskNumber} 
            className={classes}
          >
            <td className='task-row__cell'>{date}</td>
            <td className='task-row__cell'>{taskNumber}</td>
            <td className='task-row__cell'>{projectNumber}</td>
            <td className='task-row__cell'>{text}</td>
            <td className='task-row__cell'>
              <TaskStatusSelect 
                id={taskNumber} 
                status={status}

                changeTaskStatus={changeTaskStatus}
              />
            </td>
            <td className='task-row__cell'>{responsible}</td>
            <td className='task-row__cell'>{reassighn}</td>
            <td className='task-row__cell'>{priority}</td>
            <td className='task-row__cell'>{comment}</td>
            <td className='task-row__cell'>{planedTime}</td>
            <td className='task-row__cell'>{factTime}</td>
            <td className='task-row__cell'>
              <span>{start.day}</span>
              <span>{start.time}</span>
            </td>
            <td className='task-row__cell'>
              <span>{end.day}</span>
              <span>{end.time}</span>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}


export { TableBody };