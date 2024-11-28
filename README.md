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

```typescript
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
@media (prefers-color-scheme: light) {
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
```typescript
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