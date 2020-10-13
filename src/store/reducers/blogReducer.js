const blogReducer = (state = {}, action) => {
    switch (action.type) {
      case "CREATE_BLOG":
        console.log("created blog", action.event);
        return state;
      case "CREATE_BLOG_ERROR":
        console.log("create blog error", action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default blogReducer;
  