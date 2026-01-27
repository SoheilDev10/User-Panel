import { useNavigate } from "react-router"

function AddUser() {
    const navigate = useNavigate();
    return (
        <button type="button" className="rounded-md bg-blue-400 text-white text-lg p-3
        cursor-pointer transition-all duration-300 hover:bg-blue-500 flex gap-x-2 items-center"
            onClick={() => navigate("/users/add-user")}>
            <i className="fi fi-rc-user-add text-white text-lg"></i>
            افزودن کاربر
        </button>
    )
}
export default AddUser