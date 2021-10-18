export const excitementTitles = {
  0: 'Not Excited',
  1: 'Excited',
  2: 'Very Excited',
};

export const initialTasks = [
  {
    id: '1',
    title: 'Go for a walk',
    dueDate: '2021-10-15',
    estimation: { hr: 1, min: 20 },
    excitement: 0,
    completed: true
  },
  {
    id: '2',
    title: 'Watch TV',
    dueDate: '2021-10-10',
    estimation: { hr: 2, min: 30 },
    excitement: 2,
    completed: true
  },
  {
    id: '3',
    title: 'Evening run',
    dueDate: '2021-12-10',
    estimation: { hr: 0, min: 40 },
    excitement: 2,
    completed: false,
    dependencies: 'shoes'
  },
  {
    id: '4',
    title: 'Cook',
    dueDate: '2021-12-30',
    estimation: { hr: 2, min: 30 },
    excitement: 2,
    completed: false,
    dependencies: 'good recipe'
  },
  {
    id: '5',
    title: 'Yoga',
    dueDate: '2021-11-23',
    estimation: { hr: 1, min: 30 },
    excitement: 1,
    completed: false,
    dependencies: 'yoga mat'
  },
  {
    id: '6',
    title: 'Meet Jack',
    dueDate: '2021-12-15',
    estimation: { hr: 3, min: 30 },
    excitement: 2,
    completed: false
  },
  {
    id: '7',
    title: 'Pack items',
    dueDate: '2021-12-10',
    estimation: { hr: 1, min: 0 },
    excitement: 1,
    completed: true,
    dependencies: 'tickets'
  },
  {
    id: '8',
    title: 'Sell old phone',
    dueDate: '2021-12-25',
    estimation: { hr: 0, min: 0 },
    excitement: 0,
    completed: false,
  },
  {
    id: '9',
    title: 'Buy new phone',
    dueDate: '2022-01-5',
    estimation: { hr: 0, min: 0 },
    excitement: 2,
    completed: false,
    dependencies: 'resources'
  },
  {
    id: '10',
    title: 'Visit hometown',
    dueDate: '2021-12-10',
    estimation: { hr: 15, min: 30 },
    excitement: 2,
    completed: false,
    dependencies: 'Free time'
  }
]
