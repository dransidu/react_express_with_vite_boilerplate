import React from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";

const App = () => {
    return (
        <>
            <div className="flex w-screen h-screen justify-center items-center">
                <div className="flex flex-col text-center">
                    <h1 className="font-bold">Hello Devevlopers,</h1>
                    <p>This boilerplate make for you!</p>
                    <span>
                        Typescript + Express + React.js + Tailwind + vite
                    </span>
                </div>
            </div>
        </>
    );
};

// Render your React component instead
const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
