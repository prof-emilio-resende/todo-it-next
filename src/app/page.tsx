"use client"
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navegar = function() {
    router.push("/login");
  }
  return (
    <>
      <h1 className="text-red-500 text-3xl">Ola mundo next!!!</h1>
      <a onClick={navegar}>Iniciar App</a>
    </>
  );
}
