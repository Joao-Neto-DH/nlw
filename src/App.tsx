import BannerText from "./components/BannerText";
import BoxAd from "./components/BoxAd";
import GameGroup from "./components/GameGroup";
import Logo from "./components/Logo";
import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col items-center py-20">
      <Logo/>
      <BannerText/>
      <GameGroup/>
      <BoxAd/>
    </div>
  )
}

export default App
