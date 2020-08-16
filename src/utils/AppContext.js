import React, { useReducer, useContext } from "react";

// Enum of Action keys supported by this context  
const AppContextAction = {
    LOAD_TREE_DATA: "LOAD_TREE_DATA",   // Load tree view data
}

const AppContext = React.createContext();
const { Provider } = AppContext;
const defaultState = {
    treeData: {},
};

// Reducer to make changes to the application context state
const reducer = (state, action) => {
    switch (action.type) {
        case AppContextAction.LOAD_TREE_DATA: {
            return {
                ...state,
                treeData: action.value,
            };
        }
        default:
            return state;
    }
};

// Returns the Provider to be used when using the application context 
const AppProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return <Provider value={[state, dispatch]} {...props} />;
};

// Returns the application context 
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext, AppContextAction };
