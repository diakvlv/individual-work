import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

const ToDo = ({ todo }) => {
  return (
    <div className="border-inherit rounded-sm bg-gradient-to-r from-violet-300 to-blue-400 hover:from-blue-400 hover:to-violet-300 text-center transition ease-in-out hover:-translate-y-1 hover:scale-60">
    <h>{todo.title}</h>
    <p>User ID: {todo.usid}</p>
    <p>ID: {todo.id}</p>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const responseJson = await response.json();
    setData(responseJson);
    console.log(responseJson);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-lime-200 flex justify-center">
      <div className="nax-w-3xl">
        <div className="text-center text-5xl antialiased hover:subpixel-antialiased"><h1>React App</h1></div><br></br>
        {loading ? (
          <p>Loading...</p>
        ) : ( 
          <div className="capitalize grid gap-10 grid-cols-2">
            {data ? (
              data.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
              ))
            ) : (
              <p>No data</p>
            )}
         </div>
      )}
  </div>
</div>
);
            }

export default App;
