// conditional rendering  = allows you to control whats gets rendered 
//                          in your application based on certain conditions
//                          (show, hide, or change components)

import UserGreeting from './UserGreeting.jsx'


function App() {
    return(
      <>
          <UserGreeting isLoggedIn={true} userName="Nasir"/>
          <UserGreeting isLoggedIn={true}/>
      </>
    );
}


export default App
