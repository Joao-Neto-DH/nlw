export interface GameProps {
    link?: string,
    title: string,
    cover: string,
    ads: number
}

function GameCard({link = "#", ...rest}: GameProps) {
    return ( 
        <a href={link} className="relative rounded-lg overflow-hidden">
            <img src={rest.cover} alt={rest.title} />
            <div className="absolute bottom-0 left-0 right-0 max-w-full max-h-32 p-4 bg-game-gradient text-white">
                <strong className="text-base font-bold block"> {rest.title} </strong>
                <span className="font-thin text-sm text-zinc-300 block">{rest.ads} anúncios</span>
            </div>
        </a> 
    );
}

export default GameCard;