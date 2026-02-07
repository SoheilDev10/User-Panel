import { useContext } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";

export default function AddComment() {
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    const handleClick = () => {
        navigate("/comments/add-comment");
        setTimeout(() => {
            setModal(true);
        }, 500);
    }
    return (
        <button type="button" className="p-3 rounded-lg text-white bg-blue-400 cursor-pointer
        text-lg transition-all duration-300 hover:bg-blue-500 gap-x-2 flex" onClick={handleClick}>
            <i className="fi fi-rr-comment-alt"></i>
            افزودن نظر
        </button>
    )
}