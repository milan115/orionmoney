import React from 'react'
import About from './sections/About'
import Apylevel from './sections/Apylevel'
import Earlysupporters from './sections/Earlysupporters'
import Howit from './sections/Howit'
import Oriontoken from './sections/Oriontoken'
import OurInvestors from './sections/OurInvestors'
import Ourpartners from './sections/Ourpartners'

const Fullpage = () => {
    return (
        <>
             <div className="section fp-section fp-table" data-anchor="anchor1" style={{height: '150px'}}>
                    <div className="fp-tableCell" style={{height: '150px'}}><div className="content">
                    <div className="main">
                    <div className="text">
                        <h1>Earn up to <strong>20%</strong>*&nbsp;<br/>interest on your&nbsp;<br/>favorite stablecoins</h1>
                        <a href="//app.orion.money" className="btn big">Deposit Now</a> <div className="desc"><p>* Earn now 15% stable APY on USDT / USDC / DAI / BUSD / FRAX in kind. Soon higher APY levels augmented by ORION token.</p></div></div> <div className="block"><div className="form-block"><h2>How much can I earn?</h2> <form action="//app.orion.money"><dl><dt><select name="select" className="drop select2-hidden-accessible" data-select2-id="select2-data-1-fdxy" tabindex="-1" aria-hidden="true"><option value="1" data-select2-id="select2-data-3-w0be">USDT</option><option value="2" data-select2-id="select2-data-4-mnn7">USDC</option><option value="2" data-select2-id="select2-data-5-xrzb">BUSD</option><option value="3" data-select2-id="select2-data-6-j16d">DAI</option><option value="4" data-select2-id="select2-data-7-jshi">UST</option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-8w61" style={{width: '24px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-select-gd-container" aria-controls="select2-select-gd-container"><span className="select2-selection__rendered" id="select2-select-gd-container" role="textbox" aria-readonly="true" title="USDT">USDT</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> <small>Your Stablecoin</small></dt> 
                        <dd style={{display: 'none'}}><p>$0.0</p> <small>USD Interest per year</small></dd></dl> <dl><dt>
                            <input id="summ" type="text" value="10000" className="summ"/> 
                            <small>Amount</small></dt> <dd id="interest_crypto"><p><span className="symbol">USDT</span> <span className="amount">2,000</span></p> <small>Interest Earned</small></dd></dl> <dl><dt><div className="holder">
                                <input id="years" type="text" readonly="readonly"/>
                                <label for="years">Year</label></div> <div id="slider-range-max" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max" style={{width: '100%'}}>
                        </div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}}></span></div></dt> <dd id="total"><p><span className="symbol">USDT</span> <span className="amount">12,000</span></p> <small>Total</small></dd></dl> <div className="form-holder">
                        <dd style={{display: 'none'}}><p>$0.0</p> <small>USD Interest per year</small></dd><dd id="interest_crypto"><p><span className="symbol">USDT</span> <span className="amount">2,000</span></p> <small>Interest Earned</small></dd><dd id="total"><p><span className="symbol">USDT</span> <span className="amount">12,000</span></p> <small>Total</small></dd></div></form></div> <div className="form-desc"><ul></ul></div></div></div> <a href="#block-01" className="scroll">
                        <img src="img/scroll-down-icon.svg" width="20" height="48" alt=""/>Scroll down</a></div></div>
              </div> 




    		<About/>


           <Howit/> 









    		<div className="section-all">

    			 <Apylevel/> 

                <Oriontoken/>

    		



  		       <Ourpartners/>


  	          <OurInvestors/> 


              <Earlysupporters/>

</div>


            
        </>
    )
}

export default Fullpage
