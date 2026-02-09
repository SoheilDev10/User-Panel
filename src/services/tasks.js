import axios from "axios";

export async function getTasks() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
}