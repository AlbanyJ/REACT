
function Button(){

    // const handleClick = () => console.log("OUCH!!");

    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count <3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }

    // return(<button onClick={() =>handleClick("Nasir")}>Click me 😉</button>);

    // using event object to know which element was clicked and what was the event
    // const handleClick = (e) => console.log(e);

    // // this line below will dispaly what we initiated after clicking the button
    const handleClick = (e) => e.target.textContent = "OUCH! 😒";
    
    // the ondouble click event
    return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😉</button>);

}

export default Button
