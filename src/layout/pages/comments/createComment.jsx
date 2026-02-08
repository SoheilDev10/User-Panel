import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";
import EmptyInputs from "../../../emtyError";
import { postComment } from "../../../services/comments";

export default function CreateComment() {
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const nameInput = useRef(null);
    const bodyInput = useRef(null);
    const [datas, setDatas] = useState({});
    const [isError, setError] = useState(false);
    const handleClickButton = (e) => {
        e.preventDefault();
        const name = nameInput.current.value.trim();
        const body = bodyInput.current.value.trim();
        if (!name || !body) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        else {
            const objDatas = { name: name, body: body };
            setDatas(objDatas);
            postComment(datas);
        }

    }
    const sendByEnter = (e) => {
        if (e.key === "Enter")
            handleClickButton();
    }
    const handleCloseModal = () => {
        navigate("/comments");
        setModal(false);
    }
    useEffect(() => {
        nameInput.current.focus();
    }, [])
    return (
        <div className={`flex w-full h-screen fixed inset-0 bg-black/50 backdrop-blur-sm
        justify-center z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <form action="#" method="get" className="w-6/12" onClick={(e) => e.stopPropagation()}>
                <div className={`flex flex-col rounded-lg p-5 bg-white dark:bg-gray-800
                     gap-y-5 transition-all duration-500
                      ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}>
                    <button type="button" className="text-red-500 text-2xl cursor-pointer self-end"
                        onClick={handleCloseModal}>
                        <i className="fi fi-rs-circle-xmark"></i>
                    </button>
                    <h3 className="text-3xl font-bold text-center dark:text-white mb-6">افزودن نظر جدید</h3>
                    {isError && <EmptyInputs />}
                    <input type="text" className="w-full p-3 rounded-lg border focus:outline-none "
                        placeholder="نام..." ref={nameInput} />
                    <input type="text" className="w-full p-3 rounded-lg border focus:outline-none "
                        placeholder="متن نظر..." ref={bodyInput} />
                    <input type="submit" className="w-36 rounded-lg p-3 cursor-pointer
                        transition-all duration-300 text-white bg-blue-400 hover:bg-blue-500 text-lg"
                        value="افزودن نظر +" onClick={handleClickButton} />
                </div>
            </form>
        </div>
    )
}