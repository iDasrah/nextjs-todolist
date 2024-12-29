import Link from 'next/link';
import {auth, signIn, signOut} from "@/auth";

export default async function Navbar ({ className } : { className?: string }) {
    const session = await auth();

    return (
        <nav className={`flex items-center justify-between p-5 ${className}`}>
            <div className="flex items-center space-x-4">
                <Link href="/" className="hover-blue-500 text-2xl">
                    ToDoLIST
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                {session && session?.user ? (
                    <>
                        <Link href="/dashboard" className="hover-blue-500">
                            Dashboard
                        </Link>
                        <form action={async () => {
                            "use server";

                            await signOut();
                        }}>
                            <button className="hover-blue-500">
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <form action={async () => {
                        "use server";

                        await signIn("github");
                    }}>
                        <button className="hover:text-blue-800">
                            Login with GitHub
                        </button>
                    </form>
                )}

            </div>
        </nav>
    );
}
