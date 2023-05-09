export const calculateIncompletePoints = (data) => data.reduce((acc, item) => (item.status === 'todo' ? acc + item.points() : acc), 0);
