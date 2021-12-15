import React from 'react'

const Header = () => {
    return (
        <>
            <header className="header small">
    			  <div className="container">
    			  	 <div className="slicknav_menu">
    			  	 	<a href="#" aria-haspopup="true" role="button"  className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}>
                               <span className="slicknav_menutxt"></span>
                               <span className="slicknav_icon slicknav_no-text">
                                   <span className="slicknav_icon-bar"></span>
                                   <span className="slicknav_icon-bar"></span><span className="slicknav_icon-bar"></span></span>

    			  	 </a>
    			  	 <ul className="slicknav_nav slicknav_hidden" style={{display: 'none'}} aria-hidden="true" role="menu">
                           <ul className="m">
                               <li><a href="#block-01" role="menuitem" >About Us</a></li>
                                <li><a href="#block-02" role="menuitem" >How it works</a></li>
                                 <li><a href="#block-03" role="menuitem" >APY Levels</a></li>
                                  <li><a href="https://orion-money.medium.com/orion-money-litepaper-release-7e98bb3acb6f" target="_blank" role="menuitem" >Lite Paper</a>
                                  </li>
                                  </ul></ul>
    			     </div>

    			     <a href="/" className="logo"></a> 
                     <div className="block"><a href="//app.orion.money" className="btn">Launch dApp</a></div> 
                     <ul className="nav">
                         <li><a href="#block-01">About Us</a></li> 
                         <li><a href="#block-02">How it works</a></li>
                          <li><a href="#block-03">APY Levels</a></li> 
                          <li><a href="https://orion-money.medium.com/orion-money-litepaper-release-7e98bb3acb6f" target="_blank">Lite Paper</a>
                          </li></ul>
    			  </div>
    			</header> 
            
        </>
    )
}

export default Header
