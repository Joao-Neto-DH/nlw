import BannerText from "./components/BannerText";
import BoxAd from "./components/BoxAd";
import GameCardGroup from "./components/GameCardGroup";
import Logo from "./components/Logo";
import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col items-center py-20">
      <Logo/>
      <BannerText/>
      <GameCardGroup/>
      <BoxAd/>
    </div>
  )
}

export default App
