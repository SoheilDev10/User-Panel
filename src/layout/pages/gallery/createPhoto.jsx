import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";
import { postPhoto } from "../../../services/gallery";
import EmptyInputs from "../../../emtyError";

export default function CreatePhoto() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const [isError, setError] = useState(false);
    const titleInput = useRef(null);
    const fileInput = useRef(null);
    const handleCloseModal = () => {
        navigate("/gallery");
        setModal(false);
    }
    const handleClickButton = (e) => {
        e.preventDefault();
        const title = titleInput.current.value.trim();
        const file = fileInput.current.value;
        if (!title || !file) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        else {
            const objDatas = { title: title, file: file };
            setData(objDatas);
            postPhoto(data);
            titleInput.current.value = "";
            fileInput.current.value = "";
        }
    }
    useEffect(() => {
        titleInput.current.focus();
    }, [])
    return (
        <div className={`flex fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm
        justify-center z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <form action="#" method="get" className="w-6/12">
                <div className={`flex flex-col p-5 rounded-lg bg-white dark:bg-gray-800
                gap-y-5 transition-all duration-500 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}
                    onClick={(e) => e.stopPropagation()}>
                    <button type="button" className="text-2xl cursor-pointer text-red-500 self-end"
                        onClick={handleCloseModal}>
                        <i className="fi fi-rs-circle-xmark"></i>
                    </button>
                    <h3 className="text-center text-3xl dark:text-white mb-6">افزودن عکس جدید</h3>
                    {isError && <EmptyInputs />}
                    <input type="text" className="w-full p-3 rounded-lg border focus:outline-none
                    dark:border-2 dark:border-white" placeholder="عنوان عکس..." ref={titleInput} />
                    <input type="file" ref={fileInput} />
                    <input type="submit" value="افزودن عکس +" className="p-3 rounded-lg text-white
                    text-lg cursor-pointer bg-blue-400 transition-all duration-300
                    hover:bg-blue-500 w-36" onClick={handleClickButton} />
                </div>
            </form>
        </div>
    )
}