import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const HelloWorld: React.FC = () => (
    <>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </>
);

function Home() {
    return (
        <>
            <h2>Home</h2>
            <h1>Hello World</h1>
            <hr />
            <h3>Environmental variables:</h3>
            <p>
                process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
            </p>
            <p>
                process.env.NAME: <b>{process.env.NAME}</b>
            </p>
            <p>
                process.env.VERSION: <b>{process.env.VERSION}</b>
            </p>
        </>
    );
}

function About() {
    return (
        <>
            <h2>About</h2>
        </>
    );
}

function Users() {
    return (
        <>
            <h2>Users</h2>
        </>
    );
}

export default HelloWorld;
