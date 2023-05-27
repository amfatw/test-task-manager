const initialTasks = [
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '1',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '2',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '3',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '4',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '5',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '6',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'completed',
    date: '27.05.2023',
    taskNumber: '7',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '8',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '9',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'inProgress',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '10',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '11',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '12',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'inProgress',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forToday',
    date: '27.05.2023',
    taskNumber: '13',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'completed',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '14',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '15',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '16',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '17',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '18',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
  {
    type: 'forLater',
    date: '27.05.2023',
    taskNumber: '19',
    projectNumber: '48/21',
    text: 'Прозвонить Копьева',
    status: 'onPause',
    responsible: 'Иванов В.А.',
    reassighn: 'Свердлова А.И.',
    priority: '2',
    comment: 'Комментарий',
    planedTime: '00:00:15',
    factTime: '00:00:14',
    start: {day: '27.05.2023', time: '00:00:00'},
    end: {day: '27.05.2023', time: '00:00:00'}
  },
]

export { initialTasks };