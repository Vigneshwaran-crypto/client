export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log("FETCH_ALL in reducer :", action);
      return action.payload;

    case "CREATE":
      console.log("CREATE in reducer :", action);
      return [...posts, action.payload];

    default:
      return posts;
  }
};
