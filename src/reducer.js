import {
  LOADING,
  TOGGLE_NAV_MENU,
  BTNS_HOVERING,
  BTNS_EXIT_HOVERING,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case TOGGLE_NAV_MENU:
      return { ...state, nav_menu: !state.nav_menu };

    case BTNS_HOVERING:
      return { ...state, btns_hover: true };

    case BTNS_EXIT_HOVERING:
      return { ...state, btns_hover: false };

    default:
      throw new Error(`Requested action type: ${action.type} not found!`);
  }
};

export default reducer;
