import React from 'react'
import './style.css'
import { theme } from '../../theme'

export default function NameSection({state}) {
    return (
        <div className="name-section">
            <section
            style={{
                color: state.isDark ? theme.fontDark900 : '#000'
            }}
            >
                <h1>
                    Hello I'm <br />
                    Benjamin Bala
                </h1>
            </section>
            <section
             style={{
                color: state.isDark ? theme.fontDark900 : '#000'
            }}
            >
                <p>
                    Self taught Front End Developer,
                    I care deeply about creating useful,beautiful products that help people 
                    and make a difference. I can be as involved in your project as you need me to be
                </p>
            </section>
        </div>
    )
}
