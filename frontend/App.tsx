
import { useState } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState("");
    const onClick = async () => {
        const response = await fetch("/api/hello-world");
        const {message} = await response.json();
        setMessage(message);
    }
    return (
        <div>
            <h1>Hello, World!</h1>
            <button onClick={onClick}>Get Hello From Backend</button>
            <textarea value={message}></textarea>
        </div>
    )
}

export default App