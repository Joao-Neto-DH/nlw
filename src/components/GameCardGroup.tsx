import GameCard from "./GameCard";
import { GameProps } from "./GameCard";

const gameProps: GameProps[] = [
    {
        title: "League of Legend",
        cover: "/game-1.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Dota 2",
        cover: "/game-2.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Counter Strike",
        cover: "/game-3.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Apex Legends",
        cover: "/game-4.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Fortnite",
        cover: "/game-5.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Word of Warcraft",
        cover: "/game-6.png",
        ads: parseInt((Math.random() * 10).toString()),
    }
];

function GameGroup() {


    const games = gameProps.map((game, index)=>{
        return <GameCard {...game} key={index}/>
    });

    return ( 
        <div className="grid grid-cols-6 gap-6 my-16">
            { games }
        </div>
     );
}

export default GameGroup;