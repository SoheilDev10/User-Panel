import { useEffect, useState } from "react"
import AddComment from "./addComment"
import { getComments } from "../../../services/comments";
import userImg from "../../../assets/images/user.png"

function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        document.title = "مدیریت نظرات";
        const getDatas = async () => {
            const res = await getComments();
            const datas = res.slice(0, 21);
            setComments(datas);
        }
        getDatas();
        return () => document.title = "";
    }, [])
    return (
        <div className="flex flex-col p-5 w-full h-full">
            <div className="flex w-full justify-between">
                <h3 className="text-2xl font-bold dark:text-white">مدیریت نظرات</h3>
                <AddComment />
            </div>
            <div className="grid w-full mt-5 grid-cols-3 gap-x-5 gap-y-5">
                {
                    comments.map(item => {
                        return (
                            <div key={item.id} className="flex rounded-lg shadow-lg cursor-pointer
                            flex-col transition-all duration-300 hover:-translate-y-2
                            bg-white dark:bg-gray-700">
                                <div className="flex items-center gap-x-2 border-b-2 p-5 dark:border-white">
                                    <img src={userImg} alt="profile" className="w-16" />
                                    <p className="text-xl dark:text-white">{item.name}</p>
                                </div>
                                <div className="flex w-full mt-5 p-5 dark:text-white">
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Comments