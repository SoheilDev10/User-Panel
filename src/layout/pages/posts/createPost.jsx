import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";
import { createPosts } from "../../../services/posts";
import EmptyInputs from "../../../emtyError";

export default function CreatePost() {
    const [datas, setDatas] = useState({});
    const navigate = useNavigate();
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    const { isOpenModal, setModal } = useContext(MyContext);
    const [isError, setError] = useState(false);
    const handleCloseModal = () => {
        navigate("/posts");
        setModal(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleInput.current.value.trim();
        const body = bodyInput.current.value.trim();
        if (!title || !body) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        else {
            const objData = { title: title, body: body };
            setDatas(objData);
            createPosts(datas);
        }

    }
    const sendByEnter = (e) => {
        if (e.key === "Enter")
            handleSubmit();
    }
    useEffect(() => {
        titleInput.current.focus();
    }, [])
    return (
        <div className={`flex w-full h-screen fixed bg-black/50 backdrop-blur-sm
        justify-center z-20 inset-0 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}
            onKeyDown={sendByEnter}>
            <form action="#" method="get" className="w-6/12" onClick={(e) => e.stopPropagation()}>
                <div className={`flex flex-col p-7 rounded-lg bg-white dark:bg-gray-800 gap-y-5
                transition-all duration-500 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}>
                    <button type="button" className="self-end text-2xl cursor-pointer text-red-500"
                        onClick={handleCloseModal}>
                        <i className="fi fi-rs-circle-xmark"></i>
                    </button>
                    <h3 className="text-center text-3xl dark:text-white mb-6">افزودن پست جدید</h3>
                    {isError && <EmptyInputs />}
                    <input type="text" className="w-full p-3 border rounded-lg border-black
                    dark:border-white focus:outline-none" placeholder="عنوان پست..." ref={titleInput} />
                    <input type="text" className="w-full p-3 border rounded-lg border-black
                    dark:border-white focus:outline-none" placeholder="متن پست..." ref={bodyInput} />
                    <input type="submit" className="w-36 p-3 rounded-lg text-white
                    bg-blue-400 transition-all duration-300 hover:bg-blue-500 text-lg cursor-pointer"
                        value="افزودن پست +" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}