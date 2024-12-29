import React from 'react';
import Navbar from "@/app/components/Navbar";

function Layout({ children } : Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Navbar className="shadow" />
            {children}
        </main>
    );
}

export default Layout;