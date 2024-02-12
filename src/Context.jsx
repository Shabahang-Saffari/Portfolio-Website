import { useReducer, useContext, createContext } from "react";
import { LOADING, TOGGLE_NAV_MENU } from "./actions";
import reducer from "./reducer";

// ************** Context API *******************
const AppContext = createContext();

const initialState = {
  loading: false,
  nav_menu: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle_nav_menu = () => {
    dispatch({ type: TOGGLE_NAV_MENU });
  };

  const loading = () => {
    dispatch({ type: LOADING });
  };
  return (
    <AppContext.Provider value={{ ...state, loading, toggle_nav_menu }}>
      {children};
    </AppContext.Provider>
  );
};

// ************** Custom Hook *******************
export const useGlobalContext = () => {
  return useContext(AppContext);
};
