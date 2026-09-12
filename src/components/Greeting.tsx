function Greeting() {
    function handleClick() {
        console.log("Button clicked!");
    }

    return <button onClick={handleClick}>Click me</button>;
}

export default Greeting;
