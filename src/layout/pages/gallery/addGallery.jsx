import { useContext } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";

export default function AddGallery() {
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    const handleClickButton = () => {
        navigate("/gallery/add-photo");
        setTimeout(() => {
            setModal(true);
        }, 500);
    }
    return (
        <button type="button" className="p-3 bg-blue-400 text-white cursor-pointer rounded-lg
        transition-all duration-300 hover:bg-blue-500 text-lg flex gap-x-2" onClick={handleClickButton}>
            <i className="fi fi-rr-gallery"></i>
            افزودن گالری
        </button>
    )
}