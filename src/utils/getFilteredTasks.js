const getFilteredTasks = (tasks) => {
  const completedTasks = [];
  const forTodayTasks = [];
  const forLaterTasks = [];

  tasks.forEach((task) => {
    const type = task.type;

    switch(type) {
      case 'completed':
        completedTasks.push(task)
        break;

      case 'forToday': 
        forTodayTasks.push(task)
        break;
    
      case 'forLater': 
        forLaterTasks.push(task)
        break;
    
      default:
        return;
    }
  });

  return {completedTasks, forTodayTasks, forLaterTasks}
}

export { getFilteredTasks };