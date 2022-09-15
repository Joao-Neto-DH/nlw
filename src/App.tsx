import BannerText from "./components/BannerText";
import Logo from "./components/Logo";
import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <Logo/>
      <BannerText/>
    </div>
  )
}

export default App
