import React from 'react';
import Link from "next/link";
import ListNavbar from "@/components/ListNavbar";

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main>
            <ListNavbar />
            {children}
        </main>
    );
};

export default Layout;