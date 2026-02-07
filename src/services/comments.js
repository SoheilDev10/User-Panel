import axios from "axios";

export async function getComments() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    return res.data;
}
export function postComment(data) {
    return axios({
        url: "https://jsonplaceholder.typicode.com/comments",
        method: "POST",
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}