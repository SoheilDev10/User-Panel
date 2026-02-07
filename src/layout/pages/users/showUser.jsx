import { useNavigate, useParams } from "react-router"
import userImg from "../../../assets/images/social-media.png"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context";
import axios from "axios";
export default function ShowUser() {
    const { userId } = useParams();
    const { isOpenModal, setModal } = useContext(MyContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const handleCloseModal = () => {
        navigate("/users");
        setModal(false);
    }
    useEffect(() => {
        const showUser = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUser(res.data);
        }
        showUser();
    }, [])
    return (
        <div className={`flex fixed w-full h-screen inset-0 bg-black/50 backdrop-blur-sm
        justify-center z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <div className={`flex flex-col p-5 rounded-lg bg-white w-6/12 dark:bg-gray-800
            transition-all duration-500 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}
                onClick={(e) => e.stopPropagation()}>
                <button type="button" className="cursor-pointer text-2xl text-red-500 self-end"
                    onClick={handleCloseModal}>
                    <i className="fi fi-rs-circle-xmark"></i>
                </button>
                <img src={userImg} alt="user" className="w-32 self-center" />
                <h3 className="text-3xl font-bold mt-7 dark:text-white text-center">اطلاعات کاربر</h3>
                <div className="flex flex-col gap-y-3 mt-10">
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">نام:</p>
                        <p className="text-xl dark:text-white">{user.name}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">ایمیل:</p>
                        <p className="text-xl dark:text-white">{user.email}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">تلفن:</p>
                        <p className="text-xl dark:text-white">{user.phone}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">وبسایت:</p>
                        <p className="text-xl dark:text-white">{user.website}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}