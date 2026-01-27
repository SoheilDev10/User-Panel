import { useNavigate } from "react-router"

export default function CreateUser() {
    const navigate = useNavigate();
    return (
        <div className="flex fixed w-full h-screen bg-black/50 backdrop-blur-sm
        justify-center items-center inset-0 z-20" onClick={() => navigate("/users")}>
            <form action="#" method="get" className="w-6/12" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col w-full bg-white dark:bg-gray-800 rounded-lg p-7 gap-y-5">
                    <h3 className="text-3xl text-black font-bold dark:text-white text-center mb-6">افزودن کاربر جدید</h3>
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="نام..." />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="email"
                        placeholder="ایمیل..." />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="تلفن..." />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="وبسایت..." />
                    <input type="submit" className="w-36 rounded-lg p-3 bg-blue-400
                transition-all duration-300 hover:bg-blue-500 cursor-pointer text-lg text-white"
                        value="افزودن کاربر +" />
                </div>
            </form>
        </div>
    )
}