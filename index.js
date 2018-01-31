import { v4 } from 'node-uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
};

const delay = (ms) => {
  const promise = new Promise();
  promise(resolve => setTimeout(resolve, ms));
};

export const fetchTodos = (filter) => {
  // 여기 감쌀 때 {} 쓰라고 맨날 잔소리.. 코드 끝까지 감싸요!
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'completed':
        return fakeDatabase.todos.filter(todo => todo.completed);
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
};

export const addTodos = (text) => {
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.push(todo);
    return todo;
  });
};

export const toggleTodos = (id) => {
  delay(500).then(() => {
    const todo = fakeDatabase.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
};
ß
