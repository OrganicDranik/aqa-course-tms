import fetch from "node-fetch";
// Task 1

declare interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function requestPosts(url: string, postNumbers: number[]): Promise<Post[]> {
  const posts = postNumbers.map(async (postNumber: number): Promise<any> => {
    const post = await fetch(`${url}/${postNumber}`);
    return post.json();
  });

  return Promise.all<Post>(posts);
}

requestPosts(POSTS_URL, [15, 23, 7, 3])
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => console.log(err));

// Task 2

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

declare interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

declare interface SimplifiedTodo {
  id: number;
  title: string;
}

async function getTodos(): Promise<Todo[]> {
  const todos = await fetch(TODOS_URL);
  return todos.json() as Promise<Todo[]>;
}

async function printTodos(): Promise<SimplifiedTodo[]> {
  const todos = await getTodos();
  return todos.map((todo: Todo) => {
    return {
      id: todo.id,
      title: todo.title,
    };
  });
}

printTodos().then((result) => console.log(result));
