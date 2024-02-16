import { useReducer, useContext, createContext } from "react";
import {
  LOADING,
  TOGGLE_NAV_MENU,
  BTNS_HOVERING,
  BTNS_EXIT_HOVERING,
} from "./actions";
import reducer from "./reducer";

// ************** Context API *******************
const AppContext = createContext();

const initialState = {
  loading: false,
  nav_menu: false,
  btns_hover: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loading = () => {
    dispatch({ type: LOADING });
  };

  const toggle_nav_menu = () => {
    dispatch({ type: TOGGLE_NAV_MENU });
  };

  const hover_btns = () => {
    dispatch({ type: BTNS_HOVERING });
  };

  const hover_btns_exit = () => {
    dispatch({ type: BTNS_EXIT_HOVERING });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        loading,
        toggle_nav_menu,
        hover_btns,
        hover_btns_exit,
      }}
    >
      {children};
    </AppContext.Provider>
  );
};

// ************** Custom Hook *******************
export const useGlobalContext = () => {
  return useContext(AppContext);
};
