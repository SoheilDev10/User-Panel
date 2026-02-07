import { useContext } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";

export default function AddComment() {
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    return (
        <button type="button" className="p-3 rounded-lg text-white bg-blue-400 cursor-pointer
        text-lg transition-all duration-300 hover:bg-blue-500 gap-x-2 flex">
            <i className="fi fi-rr-comment-alt"></i>
            افزودن نظر
        </button>
    )
}