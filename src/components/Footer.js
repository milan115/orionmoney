import React from 'react'

const Footer = () => {
    return (
        <>

<footer className="footer">
    <div className="continer">
        <ul className="nav"><li><a href="/tc" target="_blank">T&amp;Cs</a></li>
                <li><a href="/pp" target="_blank">Privacy Policy</a></li> <li><a href="/security-and-audits" target="_blank">Audit Reports</a></li>
                <li><a href="https://www.learn-terra.com/" target="_blank">Learn Terra</a></li>
        </ul> 


   <ul className="contacts">
            <li><a href="https://t.me/Orion_Money" target="_blank">
                <img src="./img/icon-telegram.svg" width="28" height="28"/></a></li> 
            <li><a href="https://twitter.com/orion_money" target="_blank">
                <img src="./img/icon-bird.svg" width="28" height="28"/></a></li> 
            <li><a href="https://orion-money.medium.com/" target="_blank">
                <img src="./img/icon-medium.svg" width="28" height="28"/></a></li> 
            <li><a href="https://discord.gg/5vbWB2PWeS" target="_blank">
                <img src="./img/icon-discord.svg" width="28" height="28"/></a>
            </li>
    </ul> 
            <ul className="copy">
                <li><a href="/mediakit" target="_blank">Media Kit</a></li>
            <li><a href="mailto:contact@orion.money">Contact</a></li>
                <li><p>© Copyright Orion Money 2021</p></li>
            </ul>
    
    </div>
    
    </footer>
            
        </>
    )
}

export default Footer
