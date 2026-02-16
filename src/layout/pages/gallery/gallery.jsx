import { Outlet, useNavigate } from "react-router"
import AddGallery from "./addGallery"
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context";
import { getPhotos } from "../../../services/gallery";
import LoadData from "../../../load";

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const navigate = useNavigate();
    const { setModal } = useContext(MyContext);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "مدیریت گالری";
        const getDatas = async () => {
            const res = await getPhotos();
            const data = res.slice(0, 20);
            if (data) {
                setPhotos(data);
                setLoading(false);
            }
        }
        getDatas();
        return () => document.title = "";
    }, [])

    if (isLoading)
        return <LoadData />

    return (
        <div className="flex flex-col p-5 w-full h-full">
            <Outlet />
            <div className="flex justify-between w-full">
                <h3 className="text-2xl font-bold dark:text-white">مدیریت گالری</h3>
                <AddGallery />
            </div>
            <div className="grid grid-cols-4 gap-x-5 gap-y-5 mt-5">
                {photos.map(item => {
                    return (
                        <div key={item.id} className="flex flex-col rounded-lg bg-white cursor-pointer shadow-lg
                        transition-all duration-300 dark:bg-gray-700 hover:-translate-y-2 overflow-hidden"
                            onClick={() => {
                                navigate(`/gallery/show-photo/${item.id}`);
                                setTimeout(() => {
                                    setModal(true);
                                }, 500);
                            }}>
                            <div className="flex p-5">
                                <p className="text-2xl dark:text-white">{item.title}</p>
                            </div>
                            <img src={`https://picsum.photos/id/${item.id}/300/200`} alt="image" className="w-full h-full self-center mt-2" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Gallery