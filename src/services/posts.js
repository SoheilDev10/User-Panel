import axios from "axios";

export async function getPosts() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
}
export function createPosts(data){
    axios.post("https://jsonplaceholder.typicode.com/posts",{
        data:data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}