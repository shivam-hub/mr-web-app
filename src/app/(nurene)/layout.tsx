"use client";

import NavigationMenu from "@/components/navigation-menu";
import { useEffect } from "react";

export default function DefaultLayout({ children }: {
    children: React.ReactNode
}) {
    useEffect(() => {
    }, []);
    return (
        <main>
            <header>
                <NavigationMenu></NavigationMenu>
            </header>

           
            {children}
        </main>
    )
}