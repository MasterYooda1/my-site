import React, { useState, useEffect } from "react";

export default function Typewriter() {
    const [text, setText] = useState("");
    const fullText = "Yooda!";
    const typingSpeed = 150; 

    useEffect(() => {
        let i = 0; 

        const typeWriter = () => {
            if (i < fullText.length) { // While i is less than the length of the name
                setText(fullText.substring(0, i + 1)); // Set the text to the previous text + the next character
                i++; // Increment i
                setTimeout(typeWriter, typingSpeed); // Wait 150ms before going through the next loop
            }
        };
        typeWriter(); // Call the function
    }, []);
    return (
        <>{text}</> // Return the
    );
}
