import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { MyContext } from "../../../context";
import axios from "axios";

export default function ShowPhoto() {
    const { photoId } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const handleCloseModal = () => {
        navigate("/gallery");
        setModal(false);
    }
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
            if (res)
                setData(res.data);
        }
        getData();
    }, [])
    return (
        <div className="flex fixed w-full h-screen bg-black/50 backdrop-blur-sm inset-0
        justify-center z-20 items-center" onClick={handleCloseModal}>
            <div className="flex flex-col rounded-lg bg-white p-5
            dark:bg-gray-800 w-6/12" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="text-2xl text-red-500 cursor-pointer self-end"
                    onClick={handleCloseModal}>
                    <i className="fi fi-rs-circle-xmark"></i>
                </button>
                <h3 className="text-3xl text-center font-bold dark:text-white mb-6">اطلاعات عکس</h3>
                <div className="flex gap-x-2">
                    <p className="text-xl text-blue-500">عنوان عکس:</p>
                    <p className="text-xl dark:text-white">{data.title}</p>
                </div>
                <img src={`https://picsum.photos/id/${photoId}/300/200`} alt="image"
                    className="w-64 rounded-lg mt-10 self-center" />
            </div>
        </div>
    )
}