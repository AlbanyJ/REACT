// props = read-only properties that are shared between componeents
//         A parent component can send data to a child component.
//         <Component key=value />


//propTypes = a mechanism to ensure that the passed value
//            is of the correct dtatype.
//            age: propTypes.number

//defaultProps = default values for props in case they are not 
//               passed from the parent component
//               name: "Guest" 

// i used the default props but it doesn't dispaly i asked around and i heard is some rendering issues so i think 
// it's my machine that's causing this 
// you can also try it on your pc and see how it works 

// kindly leave a comment if yours work... :)


import Student from './Student.jsx'

function App() {
    return(
      <>
        <Student name="Nasir" age={28} isStudent={true}/>
        <Student name="Bob" age={54} isStudent={false}/>
        <Student name="Lamine" age={17} isStudent={true}/>
        <Student name="Mbappe" age={28} isStudent={false}/>
        <Student />
      </>
    );
}

export default App
