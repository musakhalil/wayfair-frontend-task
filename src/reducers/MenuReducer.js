const menuStateReducer = function (state = 'expanded', action) {
    switch (action.type) {
      case "minimize":
        return 'minimized';
      case "expand":
        return 'expanded';
      default:
        return state;
    }
};

export default menuStateReducer;