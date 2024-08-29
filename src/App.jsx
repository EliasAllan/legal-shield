import { useState } from 'react'
import './App.css'
import logo from '../src/assets/images/leveluplogo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <img src={logo} alt="Logo" />
        <nav>
            

            
        </nav>
    </header>
    <section class="background-picture"></section>

     <section class="content">
        <article class="ls-card">
     
            <h2> Do you have passive or residual/royalty income? If so that's great! Keep doing what you do. </h2>
            <h2> For those who don't, or would like to create another stream of income on a subscription based model. </h2>
            <div>
      <a
        id="join-button"
        href="https://fsfernandosixtos.wearelegalshield.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}
      >
        Click for more information
      </a>
    </div>
        </article>
    </section>

{/*     
    <footer>
        <h4>Developed by Allan Elias</h4>
        </footer> */}
    </>
  )
}

export default App
