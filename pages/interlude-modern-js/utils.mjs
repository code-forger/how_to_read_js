export const calculateIncompletePoints = (data) => data.reduce((acc, item) => item.status === 'todo' ? acc + item.points : acc, 0)

export const readUser = () => fetch('/api/readUser')
export const readTodos = (userHash) => fetch('/api/readTodos/' + userHash)