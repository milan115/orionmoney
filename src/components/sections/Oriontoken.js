import React from 'react'

const Oriontoken = () => {
    return (
        <>
            <section className="content-holder slider-section"><h2 className="slider-header orion-token-header">
                            Orion token
                        </h2> <div className="orion-token-section"><img src="./img/trade/orion-token-illustration@2x.png" className="orion-token"/> 
                        <img src="./img/trade/orion-token-illustration-mob@2x.png" className="orion-token orion-token-mobile"/> <span className="orion-token-trade">Trade $ORION on:</span> 
                            {/* <embed src="./img/trade/trade-lines.svg" className="orion-token-lines"/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="363" viewBox="0 0 60 363" fill="none">
			<path d="M1.5 183H37.5M37.5 183V6C37.5 3.79086 39.2909 2 41.5 2H58M37.5 183V244M58 361H41.5C39.2909 361 37.5 359.209 37.5 357V244M37.5 244H58M37.5 113H58" stroke="url(#paint0_linear_3301:6020)" stroke-opacity="0.1" stroke-width="3" stroke-linecap="round"/>
			<defs>
			  <linearGradient id="paint0_linear_3301:6020" x1="2.00001" y1="183" x2="29.8535" y2="185.02" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FFD600"/>
				<stop offset="1" stop-color="white"/>
			  </linearGradient>
			</defs>
		  </svg>



                                <embed src="./img/trade/lines-mobile.svg" className="orion-token-lines orion-token-lines-mobile"/> 
                                <div className="orion-token-links"><a href="https://www.gate.io/trade/ORION_USDT" target="_blank" className="orion-token-link">
                                    <img src="./img/trade/gateio-logo.svg"/><span className="link-name">Gate.io</span></a> 
                                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x5530ec23f4eE1521182bd158C09F4CA7efEC1ef0" target="_blank" className="orion-token-link">
                                    <img src="./img/trade/pancakeswap-logo.svg"/><span className="link-name">Pancakeswap</span></a> <a href="https://app.uniswap.org/#/swap?outputCurrency=0x727f064A78DC734D33eEc18d5370aef32Ffd46e4" target="_blank" className="orion-token-link">
                                    <img src="./img/trade/uniswap-logo.svg"/><span className="link-name">Uniswap</span></a> <div className="raw-wrapper"><span className="one-line"><svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 1.75L1.75 22.25" stroke="url(#paint0_linear_3312:6083)" stroke-opacity="0.1" stroke-width="3" stroke-linecap="round"></path> <defs><linearGradient id="paint0_linear_3312:6083" x1="1.75001" y1="-33.75" x2="-0.269726" y2="-5.89646" gradientUnits="userSpaceOnUse"><stop stop-color="#FFD600"></stop> <stop offset="1" stop-color="white"></stop></linearGradient></defs></svg></span> <a href="https://app.terraswap.io/#Swap" target="_blank" className="orion-token-link">
                        <img src="./img/trade/terraswap-logo.svg"/>
                        <span className="link-name">TerraSwap</span></a></div></div>
                    </div>
            </section> 
            
        </>
    )
}

export default Oriontoken
