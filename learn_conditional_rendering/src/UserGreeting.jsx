import PropTypes from 'prop-types'

function UserGreeting(props){
    
    // if(props.isLoggedIn){
    //     return<h2>Welcome {props.userName}</h2>
    // }
    // return<h2>Please log in to continue</h2>
   
const welcomeMessage = <h2 className="welcome-massage">
                        Welcome  {props.userName}
                        </h2>

const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                    </h2>  
                    
return props.isLoggedIn ? welcomeMessage : loginPrompt

    // return props.isLoggedIn ?   <h2 className="welcome-massage">Welcome {props.userName}</h2> : 
    //                             <h2 className="login-prompt">Please log in to continue</h2>      
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}

export default UserGreeting