import { useEffect, useRef } from "react";
import { useNavigate } from "react-router"

export default function CreatePost() {
    const navigate = useNavigate();
    const titleInput = useRef(null);
    const bodyInput = useRef(null);
    useEffect(() => {
        titleInput.current.focus();
    }, [])
    return (
        <div className="flex w-full h-screen fixed bg-black/50 backdrop-blur-sm
        justify-center items-center z-20 inset-0">
            <form action="#" method="get" className="w-6/12">
                <div className="flex flex-col p-7 rounded-lg bg-white dark:bg-gray-800 gap-y-5">
                    <button type="button" className="self-end text-2xl cursor-pointer text-red-500">
                        <i className="fi fi-rs-circle-xmark"></i>
                    </button>
                    <h3 className="text-center text-3xl dark:text-white mb-6">افزودن پست جدید</h3>
                    <input type="text" className="w-full p-3 border rounded-lg border-black
                    dark:border-white focus:outline-none" placeholder="عنوان پست..." ref={titleInput} />
                    <input type="text" className="w-full p-3 border rounded-lg border-black
                    dark:border-white focus:outline-none" placeholder="متن پست..." ref={bodyInput} />
                    <input type="submit" className="w-36 p-3 rounded-lg text-white
                    bg-blue-400 transition-all duration-300 hover:bg-blue-500 text-lg cursor-pointer"
                        value="افزودن پست +" />
                </div>
            </form>
        </div>
    )
}