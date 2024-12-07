import Song from "./song";

export default function MusicList() {
    // index, image, title, artist, year, description
    return (
        <div className="music-list">
            <ul className="music-list-header">
                <Song index={1} image="https://e.snmc.io/i/600/w/4d7fde928681113f61e2a7779f7cb224/12424339/nas-illmatic-Cover-Art.jpg" title="Illmatic" artist={"Nas"} year={"1994"} description={"This album is the epitome of hiphop, my favourite Hip Hop album ever created, it encapsulates almost every style, feeling and genre of Hip Hop to date and is a Masterpiece of its time. 10/10"} />
                <Song index={2} image="https://e.snmc.io/i/600/w/d900de15762312c3996b7746ac7af871/12728579/fishmans-98_12_28-%E7%94%B7%E9%81%94%E3%81%AE%E5%88%A5%E3%82%8C-98_12_28-otokotachi-no-wakare-Cover-Art.png" title={"98.12.28 Otokotachi no wakare Fishmans"} artist={"Fishmans"} year="1998" description={"This album is undoubtedly the best live album ever conceived. The finale, Long Season is an all time classic and perhaps the single greatest piece of music composed and performed. Listening to this album is a lifechanging experience and I absolutely love it. 10/10"}/>
                <Song index={3} image="https://e.snmc.io/i/600/w/c8d86127494d6829f770e2837a60b7e6/12426249/mos-def-black-on-both-sides-Cover-Art.jpg" title="Black on Both Sides" artist="Mos Def" year="1999" description="Some of the most impressive rhyming and flowing from one of the most underrated rappers ever. His wordplay and cadence is unbeatable and this album perfectly encapsulates his incredible potential (and his political views). Has some perfect songs. 10/10"/>
                <Song index={4} image="https://e.snmc.io/i/600/w/3b72e6eac4eb6f1522b36648ef915e49/11395810/a-tribe-called-quest-we-got-it-from-here%E2%80%A6-thank-you-4-your-service-Cover-Art.jpg" title="We Got It From Here..." artist="A Tribe Called Quest" year="2016" description="The final album from a Tribe Called Quest and perhaps the best show of jazz rap ever made, this album combined with their other albums in their discography proves they are one of if not the best rap group to ever be. This album is near perfect and has a lot of good features. 10/10"/>
                <Song index={5} image="https://e.snmc.io/i/600/w/afc27ca36ab3e9cf9f6703c386a7d953/10532981/madvillain-madvillainy-Cover-Art.jpg" title="Madvillainy" artist="Madvillain" year="2004" description="One of the best classic albums ever made, the production is perfect, the variety and length of the album is amazing. MF DOOM is a master emcee and it really shows. His flows and complicated rhyme schemes are almost unmatched in hiphop and this album has some of the most perfect songs ever. 10/10"/>
            </ul>
        </div>
    )
}