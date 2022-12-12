import React, { useState, useRef } from "react";

//include images into your bundle
import TodoList from "./todoList.jsx";

//create your first component
const Home = () => {
	const [task, setTasks]= useState([])
	const ref = useRef(null);

	const HandleTasks = (ev)=>{
		const newTask = [ev.target.value]
		if (ev.key === "Enter"){
			setTasks(task.concat(newTask))
			ref.current.value = '';
			console.log(task)
		}
	}

	return (
		<div className="d-flex justify-content-center flex-column aling-items-center">
		<h1>TODO LIST</h1>
		<input ref={ref} type="text" onKeyUp={HandleTasks} name="" id="" className="w-25" />
		<TodoList list={task} setter={setTasks}/>
		</div>

	);
};

export default Home;
