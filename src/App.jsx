import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>LegalShield</h1>
        <nav>
            

            {/* <ul>
                <a href="#search-engine-optimization">Search Engine Optimization</a>
                <a href="#online-reputation-management">Online Reputation Management</a>
                <a href="#social-media-marketing">Social Media Marketing</a>
            </ul> */}
        </nav>
    </header>
    <section class="background-picture"></section>

     <section class="content">
        <article class="ls-card">
            {/* <img src="./assets/images/search-engine-optimization.jpg" alt="Table with work related items and notebook that says SEO" class="float-left" />
            <h2>Search Engine Optimization</h2> */}
            <h2> Do you have passive or residual/royalty income? If so that's great! Keep doing what you do. </h2>
            <h2> For those who don't, or would like to create another stream of income, LegalShield might be for you. </h2>
        </article>
{/* 
        <article id="online-reputation-management" class="online-reputation-management">
            <img src="./assets/images/online-reputation-management.jpg" alt="Man using a laptop that says Reputation on the screen" class="float-right" />
            <h2>Online Reputation Management</h2>
            <p>
                The web is full of opinions, and some of these can be negative. Social media allows anyone with an
                internet connection to say whatever they want about your business. Online Reputation Management gives
                you the control over what potential customers see when they search for your business.
            </p>
        </article>

        <article id="social-media-marketing" class="social-media-marketing">
            <img src="./assets/images/social-media-marketing.jpg" alt="Table with people talking about social media" class="float-left" />
            <h2>Social Media Marketing</h2>
            <p>
                Social media continues to have a sizable influence on buying habits. Social media marketing helps you
                determine which platforms are suited to your brand, using analytics to find the right markets and
                increase your lead generation.
            </p>
        </article> */}
    </section>

    {/*<aside class="benefits">
        <article class="benefit-lead">
            <h3>Lead Generation</h3>
            <img src="./assets/images/lead-generation.png" alt="arrow pointing from a cog to a dollar sign"/>
            <p>
                Inbound strategies for lead generation require less work for your business, bringing customers directly
                to your website.
            </p>
        </article>

        <article class="benefit-brand">
            <h3>Brand Awareness</h3>
            <img src="./assets/images/brand-awareness.png" alt="man with a lightbulb for a head"/>
            <p>
                Users find your business through paid and organic searches, increasing the search ranking and visibility
                for your business.
            </p>
        </article>

        <article class="benefit-cost">
            <h3>Cost Management</h3>
            <img src="./assets/images/cost-management.png" alt="cog among dollar signs" />
            <p>
                As the search ranking for your business increases, your advertising costs decrease, and you no longer
                need to advertise your page.
            </p>
        </article>
    </aside> */}
    <footer>
        <h4>Developed by Allan Elias</h4>
        </footer>
    </>
  )
}

export default App
