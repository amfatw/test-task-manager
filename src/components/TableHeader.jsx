const TableHeader = () => {
  return (
    <thead className='tasks-table__head'>
      <tr className='tasks-table__head-row'>
        <th className='tasks-table__head-cell'>Дата</th>
        <th className='tasks-table__head-cell'>Шифр задачи</th>
        <th className='tasks-table__head-cell'>Шифр проекта</th>
        <th className='tasks-table__head-cell'>Задача</th>
        <th className='tasks-table__head-cell'>Статус</th>
        <th className='tasks-table__head-cell'>Ответственный</th>
        <th className='tasks-table__head-cell'>Переназначить</th>
        <th className='tasks-table__head-cell'>Приоритет</th>
        <th className='tasks-table__head-cell'>Комментарий</th>
        <th className='tasks-table__head-cell'>План время</th>
        <th className='tasks-table__head-cell'>Факт время</th>
        <th className='tasks-table__head-cell'>Начал</th>
        <th className='tasks-table__head-cell'>Завершил</th>
      </tr>
    </thead>
  )
}


export { TableHeader };