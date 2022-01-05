//Action inturn calls reducer and modifies the data accordingly, basically it says "how to do?", all the logic is written here
export default (posts = [], action) => {
    switch (action.type) {
        case "FetchAll": return action.payload;
        case "CreatePost": return [...posts, action.payload];
        case "updatePost": return posts.map((post) => (post._id === action.payload_id) ? action.payload : post);
        case "deletePost": return posts.filter((p) => p._id !== action.payload)
        default: return posts;
    }

}