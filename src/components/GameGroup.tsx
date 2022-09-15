function GameGroup() {
    return ( 
        <div className="grid grid-cols-6 gap-6 mt-20">
            <a href="#" className="relative">
                <img src="/game-1.png" alt="Game 1" />
                <div className="absolute bottom-0 left-0 right-0 max-w-full max-h-32 p-4 bg-game-gradient text-white">
                    <h2 className="text-base font-bold">League of Legends</h2>
                    <p className="font-thin text-sm text-white opacity-70">4 anúncios</p>
                </div>
            </a>
            <a href="#">
                <img src="/game-1.png" alt="Game 1" />
            </a>
            <a href="#">
                <img src="/game-1.png" alt="Game 1" />
            </a>
            <a href="#">
                <img src="/game-1.png" alt="Game 1" />
            </a>
            <a href="#">
                <img src="/game-1.png" alt="Game 1" />
            </a>
            <a href="#">
                <img src="/game-1.png" alt="Game 1" />
            </a>
        </div>
     );
}

export default GameGroup;