import { Link } from "react-router"
function SideBar() {
    return (
        <div className="h-screen flex flex-col w-72 bg-blue-400 fixed z-10 shadow-xl">
            <div className="flex w-full justify-between p-5 bg-blue-300">
                <p className="text-white text-lg">پنل مدیریت</p>
                <div className="rounded-full bg-white w-16 flex flex-row-reverse">
                    <button type="button" className="rounded-full w-8 h-8 shadow-lg flex justify-center cursor-pointer
                    items-center translate-x-0">
                        <i className="fi fi-sc-moon text-lg text-black self-end"></i></button>
                </div>
            </div>
            <ul className="flex flex-col p-3 mt-5 gap-y-3">
                <li className="flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2">
                    <i className="fi fi-rr-circle-user text-white text-lg"></i>
                    <Link to="#">کاربران</Link>
                </li>
                <li className="flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2">
                    <i className="fi fi-rr-blog-text text-white text-lg"></i>
                    <Link to="#">پست ها</Link>
                </li>
                <li className="flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2">
                    <i className="fi fi-rr-comment-dots text-white text-lg"></i>
                    <Link to="#">کامنت ها</Link>
                </li>
                <li className="flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2">
                    <i className="fi fi-rr-list-check text-white text-lg"></i>
                    <Link to="#">تسک ها</Link>
                </li>
                <li className="flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2">
                    <i className="fi fi-rr-gallery text-white text-lg"></i>
                    <Link to="#">گالری</Link>
                </li>
            </ul>
        </div>
    )
}
export default SideBar