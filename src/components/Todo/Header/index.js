import React from 'react'
import { useState ,useEffect } from 'react';

function Header({addToDo ,toDos}) {

    const initialFormValues = {task:"" ,toDoActive: true}
    const [form , setForm] = useState(initialFormValues);

//kayıt olduktan sonra input barın sıfırlanması
    useEffect(() =>{
        setForm(initialFormValues)
    },[toDos])

    
    useEffect(() => {
        setForm(initialFormValues)
    }, [])

 //Inputa değer girme
    const onChangeInput = (e) => {
        setForm({...form ,[e.target.name]:e.target.value, toDoActive: true})
    }

 //Butonun çalışması
    const onSubmit = (e) =>{
        e.preventDefault(); //sayfa yenilenmesini durduran metod

        //inputun boş gönderilmemesi
        if(form.task === ""){
            return false;
        }

        addToDo([...toDos ,form]);
    }

    return (
        <header className='header'>
            <h1>todos</h1>
                <form onSubmit={onSubmit}>
                     <div>
{/* Input */}
                        <input 
                        name="task" 
                        className="new-todo"
                        onChange={onChangeInput}
                        value={form.task}
                        placeholder='What needs to be done?'
                        autoFocus
                        ></input>

                    </div>
                </form>
            </header>
    );
}

export default Header
