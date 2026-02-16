import axios from "axios";

export async function getPhotos() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albumId/1/photos");
    return res.data;
}

export function postPhoto(data) {
    axios.post("https://jsonplaceholder.typicode.com/albumId/1/photos", {
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}