

function Button(){

    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }
    return(
        <button style={styles}>Click me</button>
    );
}

export default Button