import React from "react";
import Sidebar from "@/app/components/Sidebar";

export default function Layout({children} : Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    );
}
