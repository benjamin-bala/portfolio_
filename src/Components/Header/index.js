import React from 'react'
import './header.css'
import {BiMoon,BiSun} from 'react-icons/bi'
import { ACTIONS } from '../../App'
import { theme } from '../../theme'

export default function Header({state,dispatch}){
    return(
        <div 
            className="header"
            style={{backgroundColor: state.isDark ? theme.darkBackground600 : '#fff'}}
        >
            <section>
                <div className="logo">
                    <h3 style={{
                        color: state.isDark ? theme.fontDark900 : '#333',                    
                        textTransform: 'uppercase',
                        fontWeight: '900',
                        fontSize: '2.2rem'
                    }}>{`{ ...Min }`}</h3>
                </div>
                <div className="toggle">
                    {
                        state.isDark ?
                            <span onClick={()=>dispatch({type: ACTIONS.TOGGLE_LIGHTMODE})}>
                                <BiSun 
                                    size={25} 
                                    fill={state.isDark ? '#fff' : '#000'}
                                    />
                            </span>
                        :
                            <span  onClick={()=>dispatch({type: ACTIONS.TOGGLE_DARKMODE})}>
                                <BiMoon 
                                    size={25} 
                                fill={state.isDark ? '#fff' : '#000'}
                                    />
                            </span>
                            
                    }
                </div>
            </section>
        </div>
    )
}
