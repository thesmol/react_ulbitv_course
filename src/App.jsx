// import Button from '@mui/material/Button';
import Post from "./components/Post";
import "./styles/App.css";

function App() {

  return (
    <div className='App'>
      <Post 
        post = {{
          id: 1,
          title: "JavaScript",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus quaerat officiis voluptate praesentium sit consequuntur illum nemo qui, deleniti, id earum dolorem nostrum laboriosam ad porro cum vero placeat?"
        }}
      />
      <Post 
        post = {{
          id: 2,
          title: "JavaScript",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus quaerat officiis voluptate praesentium sit consequuntur illum nemo qui, deleniti, id earum dolorem nostrum laboriosam ad porro cum vero placeat?"
        }}
      />
      <Post 
        post = {{
          id: 3,
          title: "JavaScript",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus quaerat officiis voluptate praesentium sit consequuntur illum nemo qui, deleniti, id earum dolorem nostrum laboriosam ad porro cum vero placeat?"
        }}
      />
      <Post 
        post = {{
          id: 4,
          title: "JavaScript",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus quaerat officiis voluptate praesentium sit consequuntur illum nemo qui, deleniti, id earum dolorem nostrum laboriosam ad porro cum vero placeat?"
        }}
      />
    </div>
  )
}

export default App
