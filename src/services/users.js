import axios from "axios";

export async function getUsers() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
}
export function setUsers(data) {
    return axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "POST",
        data:data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}