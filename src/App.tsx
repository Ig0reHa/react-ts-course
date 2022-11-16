import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {I_Todo, I_User} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {
	const [users, setUsers] = useState<I_User[]>([])
	const [todos, setTodos] = useState<I_Todo[]>([])

	useEffect(() => {
		fetchUsers()
		fetchTodos()
	}, [])

	const fetchUsers = async () => {
		try {
			const response = await axios.get<I_User[]>('https://jsonplaceholder.typicode.com/users')
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	const fetchTodos = async () => {
		try {
			const response = await axios.get<I_Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
			setTodos(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
      {/*<Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>*/}
	    {/*  Card!*/}
      {/*</Card>*/}
			<List
				items={users}
				renderItem={(user: I_User) => <UserItem user={user} key={user.id} />}
			/>
			<EventsExample />
			<List
				items={todos}
				renderItem={(todo: I_Todo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
};

export default App;