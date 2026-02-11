import { useContext } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";

export default function AddTask() {
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    const handleClickButton = () => {
        navigate("/tasks/add-task");
        setTimeout(() => {
            setModal(true);
        }, 500);
    }
    return (
        <button type="button" className="rounded-lg bg-blue-400 text-white text-lg p-3
        cursor-pointer transition-all duration-300 hover:bg-blue-500 flex gap-x-2 items-center"
            onClick={handleClickButton}>
            <i class="fi fi-rr-note"></i>
            افزودن وظیفه
        </button>
    )
}