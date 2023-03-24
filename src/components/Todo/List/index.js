import React from 'react'

function List({toDos}) {

  return (
  <div>
      <section>
        <input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all" >Mark all as complete</label>

        <ul className='todo-list'>
          {toDos.map((toDo, i) => (
            <li key={i}>
            <div className="view" >

{/* Checkbox */}
              <input property="done" className="toggle" type="checkbox" />
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
			<strong mv-value="todoLeft">0 items left</strong>
		</span>

		<ul class="filters">
			<li>
				<a class="[if(activeFilter = 'all', 'selected')]"
					mv-action="set(activeFilter, 'all')">All</a>
			</li>
			<li>
				<a class="[if(activeFilter = 'active', 'selected')]"
					mv-action="set(activeFilter, 'active')">Active</a>
			</li>
			<li>
				<a class="[if(activeFilter = 'completed', 'selected')]"
					mv-action="set(activeFilter, 'completed')">Completed</a>
			</li>
		</ul>
		{/* <!-- Hidden if no completed items are left ↓ --> */}
		<button hidden="[todoDone = 0]"
				  class="clear-completed"
				  mv-action="delete(todo where done)">
			Clear completed
		</button>
</footer>
</div>

  )
}

export default List