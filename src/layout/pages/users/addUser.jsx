import { useContext } from "react";
import { useNavigate } from "react-router"
import { MyContext } from "../../../context";

function AddUser() {
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    return (
        <button type="button" className="rounded-md bg-blue-400 text-white text-lg p-3
        cursor-pointer transition-all duration-300 hover:bg-blue-500 flex gap-x-2 items-center"
            onClick={() => {
                navigate("/users/add-user");
                setTimeout(() => {
                    setModal(true);
                }, 500);
            }}>
            <i className="fi fi-rc-user-add text-white text-lg"></i>
            افزودن کاربر
        </button>
    )
}
export default AddUser