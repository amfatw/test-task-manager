const TaskStatusSelect = ({ id, status, changeTaskStatus }) => {
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;

    changeTaskStatus(id, newStatus);
  }

  const classes = `task-row__status-select task-row__status-select--${status}`;


  return (
    <select
      className={classes}
      name="taskStatusSelect" 
      id={id}
      value={status}
      onChange={handleStatusChange}
    >
      <option 
        value="completed"
      >
        Выполнена
      </option>
      <option 
        value="inProgress"
      >
        В работе
      </option>
      <option 
        value="onPause"
      >
        На паузе
      </option>
    </select>
    
  )
}


export { TaskStatusSelect }