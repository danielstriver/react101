import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <nav>
      <h1><span>Daniel.</span></h1>
      <ul className={isMenuVisible ? "show-menu" : "hide-menu"}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={() => {setIsMenuVisible(!isMenuVisible)}}>{isMenuVisible ? <X /> : <Menu />}</button>
    </nav>
  )
}
