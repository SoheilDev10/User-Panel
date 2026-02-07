import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { MyContext } from "../../../context";
import blogImg from "../../../assets/images/blog.png"
import axios from "axios";

export default function ShowPost() {
    const { postId } = useParams();
    const { isOpenModal, setModal } = useContext(MyContext);
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const handleCloseModal = () => {
        navigate("/posts");
        setModal(false);
    }
    useEffect(() => {
        const showPost = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setPost(res.data);
        }
        showPost();
    }, [])
    return (
        <div className={`flex fixed inset-0 w-full h-screen bg-black/50
        backdrop-blur-sm justify-center z-20 ${isOpenModal ? "items-center" : null}`} onClick={handleCloseModal}>
            <div className={`flex flex-col p-5 rounded-lg bg-white dark:bg-gray-900 w-6/12
           transition-all duration-500 ${isOpenModal ? "translate-y-0" : "-translate-y-full"}`}
                onClick={(e) => e.stopPropagation()}>
                <button type="button" className="text-2xl cursor-pointer text-red-500 self-end"
                    onClick={handleCloseModal}>
                    <i className="fi fi-rs-circle-xmark"></i>
                </button>
                <div className="flex justify-center w-full">
                    <img src={blogImg} alt="blog" className="w-32" />
                </div>
                <h3 className="text-3xl font-bold text-center dark:text-white mt-7">اطلاعات پست</h3>
                <div className="flex gap-x-2 mt-10">
                    <p className="text-xl text-blue-500 font-bold">عنوان:</p>
                    <p className="text-xl dark:text-white">{post.title}</p>
                </div>
                <div className="flex gap-x-2 mt-5">
                    <p className="text-xl text-blue-500 font-bold">محتوا:</p>
                    <p className="text-xl dark:text-white">{post.body}</p>
                </div>
            </div>
        </div>
    )
}