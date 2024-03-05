import { useReducer, useContext, createContext } from "react";
import {
  LOADING,
  TOGGLE_THEME,
  TOGGLE_NAV_MENU,
  BTNS_HOVERING,
  BTNS_EXIT_HOVERING,
  AVAILABLE_HOVERING,
  EXIT_AVAILABLE_HOVERING,
  ACTIVATE_PAGE,
  SCOROLL_BAR_HOVER,
  EXIT_SCOROLL_BAR_HOVER,
} from "./actions";
import reducer from "./reducer";

// ************** Context API *******************
const AppContext = createContext();

const initialState = {
  loading: false,
  dark_mode: true,
  nav_menu: false,
  btns_hover: false,
  available_hover: false,
  active_page: 0,
  scroll_bar_hvr: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loading = () => {
    dispatch({ type: LOADING });
  };

  const toggle_theme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggle_nav_menu = () => {
    dispatch({ type: TOGGLE_NAV_MENU });
  };

  // ****** Hovering on btns ********
  const hover_btns = () => {
    dispatch({ type: BTNS_HOVERING });
  };

  const hover_btns_exit = () => {
    dispatch({ type: BTNS_EXIT_HOVERING });
  };

  // ****** Hovering on Available Tag ********
  const hover_on_available = () => {
    dispatch({ type: AVAILABLE_HOVERING });
  };

  const exit_available_hover = () => {
    dispatch({ type: EXIT_AVAILABLE_HOVERING });
  };

  // ****** Acitivating Page ********
  const activate_page = (page_id) => {
    dispatch({ type: ACTIVATE_PAGE, payload: { page_id } });
  };

  // ****** Hover on ScrollBar  ********
  const hover_on_scroll_bar = () => {
    dispatch({ type: SCOROLL_BAR_HOVER });
  };

  const exit_scroll_bar_hover = () => {
    dispatch({ type: EXIT_SCOROLL_BAR_HOVER });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        toggle_theme,
        toggle_nav_menu,
        hover_btns,
        hover_btns_exit,
        hover_on_available,
        exit_available_hover,
        activate_page,
        hover_on_scroll_bar,
        exit_scroll_bar_hover,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ************** Custom Hook *******************
export const useGlobalContext = () => {
  return useContext(AppContext);
};
