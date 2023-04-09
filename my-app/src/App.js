import { useNavigate } from "react-router-dom";
import Moon from "./Components/Moon";
import NavBar from "./Components/NavBar"

function App() {
  const navigate = useNavigate()
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
       //whatever you want to do when space is pressed
      navigate('/moonvillage')
    }
  })

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center h-screen gap-5">
      <p>MOONEH</p>
      <Moon />
      <p>Press Space to Begin</p>
      </div>
    </div>
  )
}

export default App;