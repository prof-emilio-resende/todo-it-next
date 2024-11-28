# 1. Criando projeto Next
```bash
npx create-next-app@latest todo-it-next --typescript --eslint
```
> vamos escolher as opções padrões (tailwind, etc)

Agora vamos configurar o postcss
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
``` 

Após a configuração, vamos testar se está tudo funcional:
```bash
npm start
```

Caso qualquer problema de compilação e/ou entrega do conteúdo apareça, utilizar os scritps abaixo:

> ```bash
> npx tsc tailwind.config.ts
> rm tailwind.config.js
> rm -rf .next
> npm run dev
> ```

Agora vamos alterar o arquivo app/page.tsx 

```typescript jsx
    export default function Home() {
    return (
        <h1 className="text-red-500 text-3xl"> 
            Olá mundo next!
        </h1>
    )
    ;
}
```

# 2. Criando o primeiro componente (login)
```bash
cd src/app
mkdir login
cd login
touch page.tsx
```

Removendo a configuração do DarkMode como padrão:
```typescript
// tailwind.config.ts
darkMode: "class"
```
```css
/*globals.css*/
@media (prefers-color-scheme: light) {/*...*/}
```


Configurações padrões do webapp (título e meta dados)
```typescript
// layout.tsx
export const metadata: Metadata = {
    title: "IT Bank",
    description: "Banco impacta",
};
```

Conteúdo do nosso componente "Wrapper"
```typescript jsx
// app.container.tsx
import React from "react";

interface AppContainerProps {
    children?: React.ReactNode;
    title: string;
    subtitle: string;
    headline: string;
}

export default function AppContainer({
                                         children,
                                         title,
                                         subtitle,
                                         headline
                                     }: AppContainerProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-center leading-10 pt-10 pb-10">{title}</h1>
            <div className="flex flex-col justify-center m-5 space-y-5">
                <h2 className="text-2xl font-bold text-center leading-5 pb-2">{subtitle}</h2>
                <h3 className="text-xl text-center leading-5 pb-5">
                    {headline}
                </h3>
                {children}
            </div>
            <div
                className="fixed bottom-0 left-0 z-50 h-16 border-t-solid border-t-slate-400 border-t group inline-flex w-full items-center justify-center text-center px-4 py-2"
            >
                <span className="text-sm mt-10">
                  Conhe&ccedil;a nossa Pol&iacute;tica de Privacidade
                </span>
            </div>
        </div>
    );
}

```

Conteúdo do componente de login (login/page.tsx)
```typescript jsx
// login/page.tsx
"use client"

import React, { FormEvent } from "react";
import AppContainer from "../ui/components/app.container";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.push("/todo")
    }

    function goToCreateAccount(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        router.push("/signup")
    }

    return (
        <AppContainer title="TODO IT" subtitle="Login" headline="Digite seu e-mail para fazer login">
    <form className="flex flex-col justify-center space-y-5" onSubmit={onSubmit}>
    <input
        name="email"
    type="text"
    placeholder="email@domain.com"
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
    <input
        name="password"
    type="password"
    placeholder="senha"
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
    />
    <button
        type="submit"
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-slate-700 text-slate-100 hover:bg-slate-700/90 h-10 px-4 py-2"
        >
        Entrar
        </button>
        <button
    type="button"
    onClick={goToCreateAccount}
    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-blue-700 text-slate-100 hover:bg-blue-700/90 h-10 px-4 py-2"
        >
        Criar minha conta
    </button>
    </form>
    </AppContainer>
);
}

```

# 3. Criando componente SignUp

A criação do componente de signup segue a estrutura anterior, criamos o diretório novo (nova rota) e criamos o arquivo page.tsx que vai armazenar o conteúdo desta página

```bash
mkdir src/app/signup
cd src/app/signup
touch page.tsx
```

```typescript jsx
"use client"

import React, {FormEvent} from "react";
import AppContainer from "../ui/components/app.container";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        router.push("/todo")
    }

    function goToLogin(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        router.push("/login")
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

```

# 4. Criando um hook customizado para navegação
Vamos criar um hook customizado para simplificar a navegação entre telas e reduzir a repetição de código
```bash
mkdir src/app/lib
cd src/app/lib
touch helpers.ts
```
```typescript
// helpers.ts
"use client"
import React from "react";
import {useRouter} from "next/navigation";

export default function useNavigation() {
    const router = useRouter();

    return (event: React.SyntheticEvent, path: string) => {
        event.preventDefault();
        router.push(path)
    }
}
```

Agora com o hook criado, basta utilizá-lo em nossos components
```typescript jsx
// login/page.tsx
// ...
import useNavigation from "@/app/lib/helpers";
// ...
const navigation = useNavigation();
// ...
navigation(event, '/todo');
// ...
navigation(event, '/signup');
// ...
```
```typescript jsx
// signup/page.tsx
// ...
import useNavigation from "@/app/lib/helpers";
// ...
const navigation = useNavigation();
// ...
navigation(event, '/todo');
// ...
navigation(event, '/login');
// ...
```
# 5. Criando o componente TODO

Já conhecemos bem o caminho, vamos criar o novo componente e definir seu conteúdo de forma estática
```bash
mkdir src/app/todo
cd src/app/todo
touch page.tsx
```
```typescript jsx
// todo/page.tsx
"use client"

import React from "react";
import AppContainer from "../ui/components/app.container";
import useNavigation from "@/app/lib/helpers";

export default function Login() {
    const navigation = useNavigation();

    function goToCreateTask(event: React.MouseEvent<HTMLButtonElement>) {
        navigation(event, '/todo/create');
    }

    return (
        <AppContainer title="TODO IT" subtitle="" headline="">
            <div className="flex flex-col justify-center align-middle items-center space-y-5">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-11/12">
                    <div className="flex flex-col space-y-1.5 p-5">
                        <div className="flex flex-row justify-between align-middle">
                            <h1>Atividade 1</h1>
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-slate-500 font-medium">Descri&ccedil;&atilde;o simples</p>
                        </div>
                        <div className="flex flex-row justify-end">
                            <div
                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-black text-white">
                                Pendente
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-11/12">
                    <div className="flex flex-col space-y-1.5 p-5">
                        <div className="flex flex-row justify-between align-middle">
                            <h1>Atividade 2</h1>
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-slate-500 font-medium">Descri&ccedil;&atilde;o simples</p>
                        </div>
                        <div className="flex flex-row justify-end">
                            <div
                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-yellow-500 text-black">
                                Em andamento
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-11/12">
                    <div className="flex flex-col space-y-1.5 p-5">
                        <div className="flex flex-row justify-between align-middle">
                            <h1>Atividade 3</h1>
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div>
                            <p className="text-slate-500 font-medium">Descri&ccedil;&atilde;o simples</p>
                        </div>
                        <div className="flex flex-row justify-end">
                            <div
                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-light transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500 text-white">
                                Finalizado
                            </div>
                        </div>
                    </div>
                </div>
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

```
