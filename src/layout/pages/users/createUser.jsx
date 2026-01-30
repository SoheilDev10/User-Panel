import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";
import EmptyInputs from "../../../emtyError";
import { setUsers } from "../../../services/users";

export default function CreateUser() {
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const webInput = useRef(null);
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const [datas, setDatas] = useState();
    const [isError, setError] = useState(false);
    const handleCloseModal = () => {
        navigate("/users");
        setModal(false);
    }
    const sendByEnter = (e) => {
        if (e.key === "Enter")
            handleSubmit();
    }
    useEffect(() => {
        nameInput.current.focus();
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameInput.current.value.trim();
        const email = emailInput.current.value.trim();
        const phone = phoneInput.current.value.trim();
        const website = webInput.current.value.trim();
        const allInputs = [name, email, phone, website];
        allInputs.forEach(item => {
            if (!item) {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 5000);
            }
            else {
                const objDatas = {
                    name: name,
                    email: email,
                    phone: phone,
                    website: website
                };
                setDatas(objDatas);
                console.log(datas);
                setUsers(datas);
                nameInput.current.value = "";
                emailInput.current.value = "";
                phoneInput.current.value = "";
                webInput.current.value = "";

            }
        })

    }
    return (
        <div className={`flex fixed w-full h-screen bg-black/50 backdrop-blur-sm
        justify-center inset-0 z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <form action="#" method="get" className="w-6/12" onClick={(e) => e.stopPropagation()}
                onKeyDown={sendByEnter}>
                <div className={`flex flex-col w-full bg-white dark:bg-gray-800 rounded-lg p-7
                 gap-y-5 transition-all duration-700 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}>
                    <button type="button" className="text-2xl self-end cursor-pointer
                     text-red-500" onClick={handleCloseModal}>
                        <i className="fi fi-rs-circle-xmark"></i></button>
                    <h3 className="text-3xl text-black font-bold dark:text-white text-center mb-6">افزودن کاربر جدید</h3>
                    {isError && <EmptyInputs />}
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="نام..." ref={nameInput} />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="email"
                        placeholder="ایمیل..." ref={emailInput} />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="تلفن..." ref={phoneInput} />
                    <input className="w-full rounded-lg border
                p-3 border-black dark:border-white focus:outline-none" type="text"
                        placeholder="وبسایت..." ref={webInput} />
                    <input type="submit" className="w-36 rounded-lg p-3 bg-blue-400
                transition-all duration-300 hover:bg-blue-500 cursor-pointer text-lg text-white"
                        value="افزودن کاربر +" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}