import Link from "next/link";
import {Briefcase, CheckSquare, LayoutDashboard, Users} from "lucide-react";

export default function Sidebar() {

    return <nav className="flex h-screen w-1/6 flex-col items-center border-r-2 border-r-white-100">
        <Link href="/dashboard" className="sidelink">
            <LayoutDashboard />
            <span>Dashboard</span>
        </Link>
        <Link href={`/dashboard/tasks`} className="sidelink">
            <CheckSquare />
            <span>My Tasks</span>
        </Link>
        <Link href={`/dashboard/teams`} className="sidelink">
            <Users />
            <span>My Teams</span>
        </Link>
        <Link href={`/dashboard/projects`} className="sidelink">
            <Briefcase />
            <span>My Projects</span>
        </Link>
    </nav>
}
