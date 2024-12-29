import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function Layout({children} : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-screen overflow-hidden">
            <nav className="h-full">
                <Navbar className="border-b-2 border-b-white-100" />
                <Sidebar />
            </nav>
            {children}
        </div>
    );
}
