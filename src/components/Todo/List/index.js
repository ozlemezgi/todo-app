import React from 'react'

function List({toDos ,addToDos, state,setState}) {

// Checkbox'ı kontrol etmek
const onClickList = () => {
	addToDos(
		toDos.map((i)=>{
			const isToDoActive = toDos.some((e)=>{
				return e.toDoActive === false
			})
			return isToDoActive === true ? {...i,toDoActive:true} : {...i,toDoActive:false}
		})
	)
}

//Todoların hepsinin gözükmesi
const clickAll = (e) => {
	addToDos(toDos);
}

//Aktif todoların gözükmesi
const clickActive = (e) => {
	// e.PreventDefault();
	addToDos(toDos.filter((toDo)=>toDo.toDoActive === false))
}

//Tamamlanmış todoların gözükmesi
const clickComplated = (e) =>{
	// e.PreventDefault();
	addToDos(toDos.filter((toDo)=>toDo.toDoActive === true))
}

const clickClear = (e)=> {
	addToDos(toDos.filter((toDo)=>toDo.toDoActive === false))
}

const unCompleted = toDos.filter((item) => item.toDoActive === false);
return (

  <div>
      <section>
{/* Mark All Butonu */}
        <input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all" onClick={onClickList} >Mark all as complete</label>

        <ul className='todo-list'>
          {toDos.map((toDo, i) => (
            <li key={i} className={toDo.toDoActive ? "completed":""}>
            <div className="view" >

{/* Checkbox */}
              <input property="done" className="toggle" type="checkbox" checked={toDo.toDoActive} onChange={()=>{
				addToDos(toDos.map((i)=>{
					return i === toDo ? {...i, toDoActive :!i.toDoActive} : i}))
			  }}/>
{/* toDos */}
              <label>{toDo.task}</label>
{/* x */}
            <button className="destroy" mv-action="delete(todo)">x</button>

            </div>
          </li>
          ))}
        </ul>
      </section>

<footer className="footer">

 {/* <!-- This should be `0 items left` by default --> */}
		<span class="todo-count">
			<strong mv-value="todoLeft">{unCompleted.length} items left</strong>
		</span>

		<ul class="filters">
{/* All butonu			 */}
			<li>
				<a href="#/" className={toDos.toDoActive === true || toDos.toDoActive === false ? "selected":""} onClick={clickAll}>All</a>
			</li>
{/* Active Butonu */}
			<li>
				<a href="#/" className={toDos.toDoActive === false ? "selected":""} onClick={clickActive}>Active</a>
			</li>
{/* Complated Butonu */}
			<li>
				<a href="#/" className={toDos.toDoActive === true ? "selected":""} onClick={clickComplated}>Completed</a>
			</li>
		</ul>
{/* Tamamlanmış olanları silme buttonu */}
		<button  onClick={clickClear}
				  className="clear-completed"
				 >
			Clear completed
		</button>
</footer>
</div>

  )
}

export default List