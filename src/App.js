import React from 'react';

import axios from 'axios'
function App() {
  function second(){
    axios.get("http://localhost:5000/second/hello")
      .then(res=>{
        console.log(res.data);
      })
      .catch(error=>console.log("second error"))
  }
  function toback(){
   axios.get('/first')
          .then(res=>{
              console.log(res.data)
              
                })
          .catch(error=>console.log("an error has occured-first"));
  }
  function fuck(){
   axios.get('/fuck')
          .then(res=>{
              console.log(res.data)
              
                })
          .catch(error=>console.log("an error in fuck"));
  }
 
  return (
    <div>
      Fetch data from backend
        <button onClick={toback}>first axios</button>
        <button onClick={fuck}>fuck</button>

        <button onClick={second}>second via route axios</button>


    </div>
  );
}

export default App;
