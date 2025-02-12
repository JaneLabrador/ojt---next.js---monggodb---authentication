export default function UserInfo() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6 text-center rounded-lg">
                <div>
                    Name: <span className="font-bold">Jane</span>
                </div>
                <div>
                    Email: <span className="font-bold">Jane@gmail.com</span>
                </div>
                <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded">
                    Log Out
                </button>
            </div>
        </div>
    );
}
