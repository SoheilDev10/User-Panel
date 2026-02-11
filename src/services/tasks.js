import axios from "axios";

export async function getTasks() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
}
export function postTask(data) {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}