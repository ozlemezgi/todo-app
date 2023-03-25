
import Header from './Header';
import List from './List';
import Footer from './Footer';

import React, { useState ,useEffect } from 'react';


function Todo() {

//todo'ların tutulacağı state
const [toDos , setToDos] = useState([]);

//ToDo ya bir ekleme yapıldığında görmek
useEffect(()=>{
    console.log(toDos)
},[toDos])

const [state, setState] = useState(toDos);

  return (
    <div>
        <Header addToDo={setToDos} toDos={toDos}/>
        <List toDos={toDos} addToDos={setToDos} state={state} setState={setState}/>
        <Footer/>
    </div>
  )
}

export default Todo





 