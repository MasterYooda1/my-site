import MusicList from "../components/music-list";
import GamesList from "../components/game-list";
import { useState } from "react";

export default function ListPage() {
    const [list, setList] = useState('albums');
    //function to set which is active
    return (
        <div className="list-page">
            <ul className="list-header">
                <li className={`list-item ${list === 'albums' ? 'active' : ''}`} onClick={() => setList("albums")}>Albums</li>
                <li className={`list-item ${list === 'games' ? 'active' : ''}`} onClick={() => setList("games")}>Games</li>
            </ul>
            <div className="list-content">
                {list === 'albums' ? <MusicList /> : <GamesList />}
            </div>
        </div>
    )
}