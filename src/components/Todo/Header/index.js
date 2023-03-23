import React from 'react'
import { useState ,useEffect } from 'react';

function Header({addToDo ,toDos}) {

    const [form , setForm] = useState({task:""});

     //kayıt olduktan sonra input barın sıfırlanması
    useEffect(() =>{
        setForm({task:""})
    },[toDos])

    //Inputa değer girme
    const onChangeInput = (e) => {
        setForm({...form ,[e.target.name]:e.target.value})
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
    <form onSubmit={onSubmit}>
         <div>
        
        {/* Check Box */}
        <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all 
                </label>

        {/* Input */}
        <input 
        name="task" 
        onChange={onChangeInput}
        value={form.task}
        placeholder='What needs to be done?'></input>

        {/* daha sonra bunu inputta enter'a basıldığında çalışacak hale getir! */}
        <button >Add</button>

          
        </div>
    </form>
    );
}

export default Header
