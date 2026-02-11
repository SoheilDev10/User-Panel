import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { MyContext } from "../../../context";
import taskImg from "../../../assets/images/done.png"
import axios from "axios";

export default function ShowTask() {
    const [data, setData] = useState({});
    const { taskId } = useParams();
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const handleCloseModal = () => {
        navigate("/tasks");
        setModal(false);
    }
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
            setData(res.data);
        }
        getData();
    }, [])
    return (
        <div className={`flex w-full h-screen bg-black/50 backdrop-blur-sm
        justify-center z-20 fixed inset-0 ${isOpenModal ? "items-center" : null}`}
            onClick={handleCloseModal}>
            <div className={`flex flex-col p-5 bg-white rounded-lg w-6/12 dark:bg-gray-800
          transition-all duration-500  ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}
                onClick={(e) => e.stopPropagation()}>
                <button type="button" className="text-2xl text-red-500 cursor-pointer self-end"
                    onClick={handleCloseModal}>
                    <i className="fi fi-rs-circle-xmark"></i>
                </button>
                <img src={taskImg} alt="tasks" className="w-32 self-center" />
                <h3 className="text-3xl text-center dark:text-white mt-7">اطلاعات وظیفه</h3>
                <div className="flex flex-col gap-y-3 mt-10">
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">عنوان وظیفه:</p>
                        <p className="text-xl dark:text-white">{data.title}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">وضعیت:</p>
                        {data.completed && (<p className="text-xl text-green-600">کامل شده</p>)}
                        {!data.completed && (<p className="text-xl text-red-600">کامل نشده</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}