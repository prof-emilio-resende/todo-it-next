"use client"

import React, {FormEvent} from "react";
import AppContainer from "../ui/components/app.container";
import useNavigation from "@/app/lib/helpers";

export default function Login() {
    const navigation = useNavigation();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        navigation(event, '/todo');
    }

    function goToLogin(event: React.MouseEvent<HTMLButtonElement>) {
        navigation(event, '/login');
    }

    return (
        <AppContainer title="TODO IT" subtitle="Sign up" headline="Preencha seu e-mail e defina sua senha">
            <form className="flex flex-col justify-center space-y-5" onSubmit={onSubmit}>
                <input type="text" placeholder="email@domain.com"
                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
                <input type="password" placeholder="senha"
                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"/>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-slate-700 text-slate-100 hover:bg-slate-700/90 h-10 px-4 py-2">
                    Criar minha conta
                </button>
                <button
                    onClick={goToLogin}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-700 text-slate-100 hover:bg-red-700/90 h-10 px-4 py-2">
                    Cancelar
                </button>
            </form>
        </AppContainer>
    );
}
