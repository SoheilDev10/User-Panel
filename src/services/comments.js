import axios from "axios";

export async function getComments() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return res.data;
}