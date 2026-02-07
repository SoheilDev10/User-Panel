import { useContext, useEffect, useState } from "react"
import { getPosts } from "../../../services/posts";
import { data, Outlet, useNavigate } from "react-router";
import LoadData from "../../../load";
import AddPost from "./addPost";
import { MyContext } from "../../../context";

function Posts() {
    const [datas, setDatas] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { setModal } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        const handleGetPosts = async () => {
            const res = await getPosts();
            const newRes = res.slice(0, 20);
            setDatas(newRes);
            if (datas)
                setLoading(false);
        }
        handleGetPosts();
        document.title = "مدیریت پست ها";
        return () => document.title = "";
    }, [datas])
    if (isLoading)
        return <LoadData />
    return (
        <div className="w-full h-full p-5">
            <Outlet />
            <div className="flex justify-between">
                <p className="text-2xl font-bold">مدیریت پست ها</p>
                <AddPost />
            </div>
            <div className="grid grid-cols-4 gap-x-5 gap-y-5 mt-10">
                {datas.map(item => {
                    return (
                        <div className="flex flex-col rounded-lg shadow-lg dark:bg-gray-700
                        cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            key={item.id} onClick={() => {
                                navigate(`show-information/${item.id}`);
                                setTimeout(() => {
                                    setModal(true);
                                }, 500);
                            }}>
                            <div className="flex w-full p-3 bg-gradient-to-r from-blue-400 to-blue-600">
                                <p className="text-white text-2xl font-bold">{item.title}</p>
                            </div>
                            <div className="flex p-5 mt-3">
                                <p className="text-lg dark:text-white">{item.body}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Posts