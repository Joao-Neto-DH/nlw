import GameCard from "./GameCard";
import { GameProps } from "./GameCard";

const gameProps: GameProps[] = [
    {
        title: "League of Legend",
        img: "/game-1.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Dota 2",
        img: "/game-2.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Counter Strike",
        img: "/game-3.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Apex Legends",
        img: "/game-4.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Fortnite",
        img: "/game-5.png",
        ads: parseInt((Math.random() * 10).toString()),
    },
    {
        title: "Word of Warcraft",
        img: "/game-6.png",
        ads: parseInt((Math.random() * 10).toString()),
    }
];

function GameGroup() {


    const games = gameProps.map((game)=>{
        return <GameCard {...game}/>
    });

    return ( 
        <div className="grid grid-cols-6 gap-6 my-16">
            { games }
        </div>
     );
}

export default GameGroup;