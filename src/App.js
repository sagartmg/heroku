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
   axios.get('http://localhost:5000/first')
          .then(res=>{
              console.log(res.data)
                // const {user} = res.data;
                // console.log("first to backend.console ");
                // res.end("first to backend res.end")
                // console.log("all_excercies_before",all_excercies)
                // alert(user);

                // console.log("user",user)
                // console.log("all_excercies_afger",all_excercies)
                })
          .catch(error=>console.log("an error has occured-first"));
  }
  function getFuck(){
    axios.get("http://localhost:5000/fuck")
      .then(res=>console.log(res.data))
  }
  return (
    <div>
      Fetch data from backend
        <button onClick={toback}>first axios</button>
       {/* 
        <button onClick={second}>second via route axios</button>
        <button onClick={getFuck}>fuck</button>

      */}

    </div>
  );
}

export default App;
