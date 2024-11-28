"use client"

import React, {FormEvent, useState} from "react";
import AppContainer from "../../ui/components/app.container";
import useNavigation from "@/app/lib/helpers";

export default function CreateTodo() {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (title && description) {
            fetch("http://localhost:3000/api/todo", {
                method: "POST",
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify({title, description, status: "Pendente"}),
            })
            .then(() => navigation(event, '/todo'));
        } else {
            alert('Preencha todos os campos');
        }
    }

    function goToTodo(event: React.MouseEvent<HTMLButtonElement>) {
        navigation(event, '/todo');
    }

    return (
        <AppContainer title="TODO IT" subtitle="Novo item" headline="Digite um título e uma descrição">
            <form className="flex flex-col justify-center space-y-5" onSubmit={onSubmit}>
                <input type="text" placeholder="t&iacute;tulo da atividade"
                       onChange={(event) => setTitle(event.target.value)}
                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
                <textarea placeholder="Descri&ccedil;&atilde;o detalhada da atividade"
                          onChange={(event) => setDescription(event.target.value)}
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"></textarea>

                <button type="submit"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-slate-700 text-slate-100 hover:bg-slate-700/90 h-10 px-4 py-2">
                    Criar
                </button>
                <button onClick={goToTodo} type="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-700 text-slate-100 hover:bg-red-700/90 h-10 px-4 py-2">
                    Cancelar
                </button>
            </form>
        </AppContainer>
    );
}
