function BoxAd() {
    return ( 
        <div className="flex justify-between items-center bg-[#2A2634] px-8 py-6 self-stretch rounded-lg relative overflow-hidden before:w-full before:content-[''] before:bg-nlw-gradient before:absolute before:left-0 before:top-0 before:pt-1">
            <div>
                <strong className="text-2xl text-white font-black">Não encontrou seu dou?</strong>
                <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
            </div>
            <button type="button" className="py-3 px-4 text-white rounded-md bg-violet-500 hover:bg-violet-600">Publicar anúncio</button>
        </div>
     );
}

export default BoxAd;