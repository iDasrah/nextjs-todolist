import Link from "next/link";

export default function Sidebar() {
    return <nav className="flex h-screen flex-col items-center bg-white-100">
        <Link href="/" className="text-3xl font-bold p-6">ToDoLIST</Link>
        <Link href="/dashboard" className="sidelink w-full text-center">Dashboard</Link>
    </nav>
}
