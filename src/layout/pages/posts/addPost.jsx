import { useNavigate } from "react-router";

export default function AddPost() {
    const navigate = useNavigate();
    return (
        <button type="button" className="p-3 rounded-lg bg-blue-400 transition-all
        duration-300 hover:bg-blue-500 text-white text-lg cursor-pointer flex gap-x-2"
            onClick={() => navigate("/posts/add-post")}>
            <i className="fi fi-rr-blog-text"></i>
            افزودن پست
        </button>
    )
}