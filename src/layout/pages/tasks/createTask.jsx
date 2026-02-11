import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";
import EmptyInputs from "../../../emtyError";
import { postTask } from "../../../services/tasks";

export default function CreateTask() {
    const [datas, setDatas] = useState({});
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const titleInput = useRef(null);
    const comRadio = useRef(null);
    const notRadio = useRef(null);
    const [isError, setError] = useState(false);
    const handleCloseModal = () => {
        navigate("/tasks");
        setModal(false);
    }
    const handleClickButton = (e) => {
        e.preventDefault();
        const title = titleInput.current.value.trim();
        const completedRa = comRadio.current.value;
        let completed;
        if (completedRa === "true")
            completed = true;
        else
            completed = false;
        if (!title) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 5000);
        }
        else {
            const objDatas = {
                title: title,
                completed: completed
            }
            setDatas(objDatas);
            postTask(datas);
        }
    }
    useEffect(() => {
        titleInput.current.focus();
        notRadio.current.checked = "true";
    }, [])

    return (
        <div className={`flex fixed inset-0 w-full h-screen bg-black/50
        backdrop-blur-sm justify-center z-20 ${isOpenModal ? "items-center" : null}`}
            onClick={handleCloseModal}>
            <form action="#" method="get" className="w-6/12">
                <div className={`flex flex-col p-5 rounded-lg bg-white
                dark:bg-gray-800 gap-y-5 transition-all duration-500 ${isOpenModal ? "translate-y-0" :
                        "-translate-y-full"}`}
                    onClick={(e) => e.stopPropagation()}>
                    <button type="button" className="text-2xl cursor-pointer text-red-500
                    self-end" onClick={handleCloseModal}>
                        <i className="fi fi-rs-circle-xmark"></i>
                    </button>
                    <h3 className="text-3xl text-center dark:text-white mb-6">افزودن وظیفه جدید</h3>
                    {isError && <EmptyInputs />}
                    <input type="text" className="w-full p-3 rounded-lg border focus:outline-none
                    dark:border-2 dark:border-white" placeholder="عنوان وظیفه..." ref={titleInput} />
                    <div className="flex w-full gap-x-3">
                        <p className="text-lg dark:text-white">وضعیت وظیفه:</p>
                        <label about="completed" className="text-md">کامل شده</label>
                        <input type="radio" name="status" id="completed" ref={comRadio} />
                        <label about="NotCompleted" className="text-md">کامل نشده</label>
                        <input type="radio" name="status" id="NotCompleted" ref={notRadio} />
                    </div>
                    <input type="submit" value="افزودن وظیفه +" className="p-3 rounded-lg
                    cursor-pointer text-white bg-blue-400 transition-all duration-300
                    hover:bg-blue-500 w-36 text-lg" onClick={handleClickButton} />
                </div>
            </form>
        </div>
    )
}