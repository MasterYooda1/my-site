import Game from "./game";

export default function GamesList() {
    // index, image, title, artist, year, description
    return (
        <div className="music-list">
            <ul className="music-list-header">
                <Game index={1} image="https://e.snmc.io/lk/l/x/54fb78895fe07b43074f8c7eebae4dbf/9217773" title="Elden Ring" artist={"Fromsoft"} year={"2022"} description={"Hands down my favourite game I've ever played, the fighting, exploring, upgrading systems are all nearly perfect. The game is as difficult as you make it and there are many perfect bosses which I love like Godfrey. 10/10"} />
                <Game index={2} image="https://e.snmc.io/lk/l/x/6f40fec52062336cb4dbb50c41269af6/7238621" title={"Red Dead Redemption 2"} artist={"Rockstar"} year="2018" description={"The Story in this games is one of the most detailed and engaging of any game I've ever played. The amount of gameplay types and activities which you do in this game is unmatched. The characters are interesting, relatable and you feel sympathetic towards them. Hands down my favourite story game I have tried as of yet and got snubbed of game of the year definitely. 10/10"}/>
                <Game index={3} image="https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg" title="Sekiro, Shadows Die Twice" artist="Fromsoft" year="2019" description="The combat system in this game is a work of art and the art direction is near perfection. Despite the graphics not being perfect the art style really makes a difference and helps it still look like one of the most beautiful games I've ever played. The bosses are perfect, not a single dud and Sword Saint Isshin is my favourite bossfight in gaming. 10/10"/>
                <Game index={4} image="https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg" title="Dark Souls III" artist="Fromsoft" year="2016" description="Another Fromsoft game on this list. The game despite looking dated still manages to be absolutely gorgeous. Some of the areas are my favourite areas in fromsoft games like Irythill. The DLC the Ringed City manages to have some of the best bosses out of all the fromsoft games and the game feels really refreshing to explore knowing you won't wind up finding many useless items on your way. The only complaint is that its very straight forward and exploring can be limited. 10/10"/>
                <Game index={5} image="https://e.snmc.io/lk/l/x/b0dba0647048d92b5bcbd8d816f22817/9389047" title="Titanfall 2" artist="Respawn" year="2016" description="My favourite FPS ruined and replaced by Apex Legends. The gameplay is perfect and running around shooting things has never felt smoother. The wallrunning and parkour isn't overused but is a very good system. The variety of titans and usage in the story is excellent and the story manages to be engaging and even non-human objects you will grow attached to emotionally. 10/10"/>
            </ul>
        </div>
    )
}