import { NavLink } from "react-router"
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
                <li>
                    <NavLink to="/users" className={({ isActive }) => `flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2
               ${isActive ? "bg-blue-300" : null}`}><i className="fi fi-rr-circle-user text-white text-lg"></i>کاربران</NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={({ isActive }) => `flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2
               ${isActive ? "bg-blue-300" : null}`}><i className="fi fi-rr-blog-text text-white text-lg"></i>پست ها</NavLink>
                </li>
                <li>
                    <NavLink to="/comments" className={({ isActive }) => `flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2
               ${isActive ? "bg-blue-300" : null}`}><i className="fi fi-rr-comment-dots text-white text-lg"></i>کامنت ها</NavLink>
                </li>
                <li>
                    <NavLink to="tasks" className={({ isActive }) => `flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2
               ${isActive ? "bg-blue-300" : null}`}><i className="fi fi-rr-list-check text-white text-lg"></i>تسک ها</NavLink>
                </li>
                <li>
                    <NavLink to="/gallery" className={({ isActive }) => `flex p-2 rounded-lg text-white text-lg
                cursor-pointer transition-all duration-300 hover:bg-blue-300 gap-x-2
               ${isActive ? "bg-blue-300" : null}`}><i className="fi fi-rr-gallery text-white text-lg"></i>گالری</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default SideBar