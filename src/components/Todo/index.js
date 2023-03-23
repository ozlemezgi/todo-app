
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

  return (
    <div>
        <Header addToDo={setToDos} toDos={toDos}/>
        <List toDos={toDos} />
        <Footer/>
    </div>
  )
}

export default Todo





 // const [tasks, setTasks] = useState([
    //     { id: 1, text: 'Öğle yemeği hazırla', completed: false },
    //     { id: 2, text: 'Spor yap', completed: false },
    //     { id: 3, text: 'Müzik dinle', completed: false },
    //   ]);
    
    //   // görev ekleme fonksiyonu
    //   const addTask = (text) => {
    //     const newTask = { id: Math.floor(Math.random() * 10000) + 1, text, completed: false };
    //     setTasks([...tasks, newTask]);
    //   };
    
    //   // görev silme fonksiyonu
    //   const deleteTask = (id) => {
    //     setTasks(tasks.filter((task) => task.id !== id));
    //   };
    
    //   // görev tamamlama fonksiyonu
    //   const toggleComplete = (id) => {
    //     setTasks(
    //       tasks.map((task) =>
    //         task.id === id ? { ...task, completed: !task.completed } : task
    //       )
    //     );
    //   };