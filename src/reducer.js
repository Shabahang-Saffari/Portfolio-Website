import {
  LOADING,
  TOGGLE_THEME,
  TOGGLE_NAV_MENU,
  BTNS_HOVERING,
  BTNS_EXIT_HOVERING,
  AVAILABLE_HOVERING,
  EXIT_AVAILABLE_HOVERING,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case TOGGLE_NAV_MENU:
      return { ...state, nav_menu: !state.nav_menu };

    case TOGGLE_THEME:
      return { ...state, dark_mode: !state.dark_mode };

    case BTNS_HOVERING:
      return { ...state, btns_hover: true };

    case BTNS_EXIT_HOVERING:
      return { ...state, btns_hover: false };

    case AVAILABLE_HOVERING:
      return { ...state, available_hover: true };

    case EXIT_AVAILABLE_HOVERING:
      return { ...state, available_hover: false };

    default:
      throw new Error(`Requested action type: ${action.type} not found!`);
  }
};

export default reducer;
