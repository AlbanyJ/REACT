// React hook = special function that allows functional components
//              to use react features without writing class components
//              (useState, useEffect, useContext, useReducer, etc)

// useState() = A react hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM.
//              [name, setName]

import Counter from './Counter.jsx'

function App() {

  return(
    <>
        <Counter />
    </>
  );

}

export default App
