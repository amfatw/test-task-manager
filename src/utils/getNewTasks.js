const getNewTasks = (tasks, taskId, newStatus) => {
  const result = tasks.map((task) => {
    if (task.taskNumber != taskId) return task;

    const newTask = {...task, status: newStatus};

    return newTask;
  })

  return result;
}

export { getNewTasks };