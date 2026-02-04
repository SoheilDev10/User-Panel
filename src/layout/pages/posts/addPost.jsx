import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../../../context";

export default function AddPost() {
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    return (
        <button type="button" className="p-3 rounded-lg bg-blue-400 transition-all
        duration-300 hover:bg-blue-500 text-white text-lg cursor-pointer flex gap-x-2"
            onClick={() => {
                navigate("/posts/add-post");
                setTimeout(() => {
                    setModal(true);
                }, 500);
            }}>
            <i className="fi fi-rr-blog-text"></i>
            افزودن پست
        </button>
    )
}