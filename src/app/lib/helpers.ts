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