import { useNavigate } from "react-router"
import img404 from "../../../src/assets/images/404.png"

export default function Error404() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col w-full h-screen p-5 justify-center items-center">
            <img src={img404} alt="error404" className="w-6/12" />
            <h5 className="text-3xl text-center">متاسفانه صفحه مورد نظر پیدا نشد!</h5>
            <button type="button" className="p-3 rounded-lg text-white
            bg-blue-400 text-xl transition-all duration-300
            cursor-pointer hover:bg-blue-500 mt-5 w-32" onClick={() => navigate("/users")}>بازگشت</button>
        </div>
    )
}