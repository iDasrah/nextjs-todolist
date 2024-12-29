import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full min-h-60 flex justify-center items-center flex-col space-y-3">
          <div className="flex justify-center items-center flex-col">
              <h1 className="text-4xl font-bold">Never forget anything.</h1>
              <p className="text-lg">Manage your tasks with ease.</p>
          </div>
          <Link href="/register">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Get Started
                </button>
            </Link>
      </div>
  );
}