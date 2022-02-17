import axios from "axios";

async function getData(userID) {

    if (userID < 0 || !Number.isInteger(userID)) {
        return
    }

    const { data:users } = await axios(`https://jsonplaceholder.typicode.com/users/${userID}`)
    const { data:posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)

    return { users, posts }
}

export default getData;