import { useNavigate, useParams } from "react-router"
import commentsImg from "../../../assets/images/comments.png"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context";
import axios from "axios";
export default function ShowComment() {
    const { commentId } = useParams();
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const [data, setData] = useState({});
    const handleCloseModal = () => {
        navigate("/comments");
        setModal(false);
    }
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
            setData(res.data);
        }
        getData();
    }, [])
    return (
        <div className={`flex fixed w-full h-screen inset-0 bg-black/50 backdrop-blur-sm
            justify-center z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <div className={`flex flex-col bg-white p-5 rounded-lg dark:bg-gray-800 w-6/12
           transition-all duration-500 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}
                onClick={(e) => e.stopPropagation()}>
                <button type="button" className="cursor-pointer text-red-500 text-2xl self-end"
                    onClick={handleCloseModal}>
                    <i className="fi fi-rs-circle-xmark"></i>
                </button>
                <img src={commentsImg} alt="comments" className="w-32 self-center" />
                <h3 className="text-3xl font-bold text-center dark:text-white mt-7">اطلاعات نظر</h3>
                <div className="flex flex-col mt-10 gap-y-3">
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">نام:</p>
                        <p className="text-xl dark:text-white">{data.name}</p>
                    </div>
                    <div className="flex gap-x-2">
                        <p className="text-xl text-blue-500">متن نظر:</p>
                        <p className="text-xl dark:text-white">{data.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}