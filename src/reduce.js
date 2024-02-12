import { LOADING, TOGGLE_NAV_MENU } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case TOGGLE_NAV_MENU:
      return { ...state, nav_menu: !state.nav_menu };

    default:
      throw new Error(`Requested action type: ${action.type} not found!`);
  }
};

export default reducer;
