import Article from "./article";

export default function Projects() {
    return (
            <div className="stardle-container">
                <div className="stardle-title-box">
                    <h1 className="stardle-title">Stardle</h1>
                </div>
                
                <div className="stardle-description">
                    <img src={require("../assets/stardle.png")} height={500} width={450}/>
                    <p className="stardle-text">This app is similar to an implementation of wordle but instead of using a simple guessing game it takes star wars characters and provides clues as to who they are. To win you need to find the character which matches all of the green boxes, orange boxes mean that a portion of what is in the box is correct whilst red means the box is wrong. This project was done using vanilla HTML, CSS and JavaScript.</p>
                </div>
            </div>
    )
}