import BannerText from "./components/BannerText";
import GameGroup from "./components/GameGroup";
import Logo from "./components/Logo";
import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1020px] mx-auto flex flex-col items-center">
      <Logo/>
      <BannerText/>
      <GameGroup/>
    </div>
  )
}

export default App
