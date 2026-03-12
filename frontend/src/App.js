import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  // const API = process.env.REACT_APP_API_URL;
  // const API="http://localhost:5000"
  // console.log(API,"apiisddss=================s===================")
  useEffect(() => {
    axios.get(`/api/message`)
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));

    axios.get(`/api/mysq`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <h2>{message}</h2>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      ))}

    
    </div>
  );
}

export default App; 