import { Outlet, useNavigate } from "react-router"
import AddTask from "./addTask"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context";
import { getTasks } from "../../../services/tasks";
import Completed from "./completed";
import NotCompleted from "./notCompleted";
import LoadData from "../../../load";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const { isOpenModal, setModal } = useContext(MyContext);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "مدیریت وظایف";
        const getDatas = async () => {
            const res = await getTasks();
            const datas = res.slice(0, 20);
            if (datas) {
                setTasks(datas);
                setLoading(false);
            }
        }
        getDatas();
        return () => document.title = "";
    }, [])

    if (isLoading)
        return <LoadData />

    return (
        <div className="flex flex-col w-full h-full p-5">
            <Outlet />
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold dark:text-white">مدیریت وظایف</h3>
                <AddTask />
            </div>
            <div className="grid grid-cols-4 w-full mt-5 gap-x-5 gap-y-5">
                {tasks.map(item => {
                    return (<div key={item.id} className="flex flex-col p-5 rounded-lg bg-white shadow-lg
                    transition-all duration-300 cursor-pointer hover:-translate-y-2
                    dark:bg-gray-700" onClick={() => {
                            navigate(`/tasks/show-task/${item.id}`);
                            setTimeout(() => {
                                setModal(true);
                            }, 500);
                        }}>
                        <p className="text-2xl dark:text-white">{item.title}</p>
                        {item.completed && <Completed />}
                        {!item.completed && <NotCompleted />}
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Tasks