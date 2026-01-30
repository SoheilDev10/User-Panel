import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getUsers } from "../../../services/users";
import AddUser from "./addUser";
import LoadData from "../../../load";

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        const handleUsers = async () => {
            try {
                const data = await getUsers();
                if (data) {
                    setLoading(false);
                    setUsers(data);
                }

            }
            catch (err) {
                console.error(err);
            }
        }
        handleUsers();
        document.title = "مدیریت کاربران";
        return () => document.title = "";
    }, [])

    if (isLoading)
        return <LoadData />
    return (
        <div className="flex flex-col">
            <Outlet />
            <div className="flex justify-between mt-5">
                <h3 className="text-2xl font-bold">مدیریت کاربران</h3>
                <AddUser />
            </div>
            <div className="flex justify-center mt-10">
                <table className="w-10/12">
                    <thead className="bg-blue-500 dark:bg-gray-800">
                        <tr>
                            <td className="text-xl p-3 rounded-lg text-white font-bold">#</td>
                            <td className="text-xl text-white font-bold">نام</td>
                            <td className="text-xl text-white font-bold">ایمیل</td>
                            <td className="text-xl text-white font-bold">تلفن</td>
                            <td className="text-xl text-white font-bold">وبسایت</td>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200 dark:bg-gray-700">
                        {users.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className="text-md p-3 rounded-lg dark:text-white
                                     border-b-2">{item.id}</td>
                                    <td className="text-md dark:text-white
                                     border-b-2">{item.name}</td>
                                    <td className="text-md dark:text-white
                                     border-b-2">{item.email}</td>
                                    <td className="text-md dark:text-white
                                     border-b-2">{item.phone}</td>
                                    <td className="text-md dark:text-white
                                     border-b-2">{item.website}</td>
                                    <td className="text-md dark:text-white
                                     border-b-2"></td >
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Users