"use client"

import React, {useEffect, useState} from "react";
import AppContainer from "../ui/components/app.container";
import useNavigation from "@/app/lib/helpers";
import TodoEntity from "@/app/lib/todo.entity";

export default function Todo() {
    const navigation = useNavigation();
    const [todoList, setTodoList] = useState<Array<TodoEntity>>([]);

    useEffect(() => {
        loadItems();
    }, []);

    function loadItems() {
        fetch("http://localhost:3000/api/todo")
            .then(res => res.json())
            .then(todos => setTodoList(todos as Array<TodoEntity>));
    }

    function removeItem(id: number) {
        fetch(`http://localhost:3000/api/todo/${id}`, {method: "DELETE"})
            .then(() => loadItems());
    }

    function goToCreateTask(event: React.MouseEvent<HTMLButtonElement>) {
        navigation(event, '/todo/create');
    }

    function createTag(status: string) {
        const styleClasses = {
            "Pendente": "bg-gray-800 text-white",
            "Em andamento": "bg-yellow-500 text-black",
            "Finalizado": "bg-green-500 text-white"
        } as Record<string, string>;
        const classNames = `inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${styleClasses[status]}`;

        return (
            <div className="flex flex-row justify-end">
                <div
                    className={classNames}>
                    {status}
                </div>
            </div>
        );
    }

    function createCard(todo: TodoEntity) {
        return (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-11/12" key={todo.id}>
                <div className="flex flex-col space-y-1.5 p-5">
                    <div className="flex flex-row justify-between align-middle">
                        <h1>{todo.title}</h1>
                        <svg onClick={() => removeItem(todo.id)} width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                            <path
                                d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-slate-500 font-medium">{todo.description}</p>
                    </div>
                    {createTag(todo.status)}
                </div>
            </div>
        );
    }

    function createCards() {
        return todoList?.map(t => createCard(t));
    }

    return (
        <AppContainer title="TODO IT" subtitle="" headline="">
            <div className="flex flex-col justify-center align-middle items-center space-y-5">
                { createCards() }
                <div className="w-full content-end text-right p-5">
                    <button type="button" onClick={goToCreateTask}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-slate-700 text-slate-100 hover:bg-slate-700/90 h-10 px-4 py-2">
                        Novo Item
                    </button>
                </div>
            </div>
        </AppContainer>
    );
}
