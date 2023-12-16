const initialState = {
  allPosts: [],
};

export default (initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log("FETCH_ALL in reducer :", action);

      return Object.assign({}, initialState, {
        allPosts: action.payload,
      });
    // return action.payload;

    case "CREATE":
      console.log("CREATE in reducer :", action);

      const prevPost = initialState.allPosts;

      const addedPost = [...prevPost, action.payload];
      return Object.assign({}, initialState, {
        allPosts: addedPost,
      });

    // return [...posts, action.payload];

    default:
      return initialState;
  }
};
