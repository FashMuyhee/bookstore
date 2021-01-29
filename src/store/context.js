import React, {useState, createContext} from 'react';
export const Context = createContext();

export const ContextProvider = (props) => {
  const [state, setState] = useState({
    isLogin: false,
    user: 'David Chris',
  });

  return (
    <Context.Provider value={[state, setState]}>
      {props.children}
    </Context.Provider>
  );
};
