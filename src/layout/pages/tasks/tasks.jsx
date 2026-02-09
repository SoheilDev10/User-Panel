import { useNavigate } from "react-router"
import AddTask from "./addTask"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context";
import { getTasks } from "../../../services/tasks";

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
            setTasks(datas);
        }
        getDatas();
        return () => document.title = "";
    }, [])
    
    return (
        <div className="flex flex-col w-full h-full p-5">
            <div className="flex justify-between">
                <h3 className="text-2xl font-bold dark:text-white">مدیریت وظایف</h3>
                <AddTask />
            </div>
        </div>
    )
}
export default Tasks