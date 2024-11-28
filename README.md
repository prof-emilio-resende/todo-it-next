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
            Ola mund next! !
        </h1>
    )
    ;
}
```