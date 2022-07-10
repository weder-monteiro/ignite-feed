import { Post } from "./Post";

export function App() {
  return (
  <div>
    <Post 
      author="Weder Monteiro" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At veritatis corporis quod sapiente, blanditiis voluptatibus nesciunt, quae molestias fugit nulla consectetur nemo, soluta sed culpa nisi ea beatae deserunt illo."
    />
    <Post 
      author="Diana Silva" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At veritatis corporis quod sapiente, blanditiis voluptatibus nesciunt, quae molestias fugit nulla consectetur nemo, soluta sed culpa nisi ea beatae deserunt illo."
    />
  </div>
  )
}