export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, username: action.payload };
    case "ADD_PUBLICREPOS":
      return { ...state, publicrepos: action.payload };
    case "ADD_LINK":
      return { ...state, link: action.payload };
    case "ADD_IMAGE":
      return { ...state, image: action.payload };
    case "ADD_LOCATION":
      return { ...state, location: action.payload };
    case "ADD_NAME":
      return { ...state, name: action.payload };
    case "ADD_FOLLOWERS":
      return { ...state, followers: action.payload };
    case "ADD_FOLLOWING":
      return { ...state, following: action.payload };
    case "SWITCH_LOADING":
      return { ...state, loading: action.payload };
    case "CHANGE_USER":
      return action.payload;

    default:
      return state;
  }
};
