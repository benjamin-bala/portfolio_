import React from 'react'
import './style.css'
import css from '../../assets/svg/css-3.svg'
import html from '../../assets/svg/html-5.svg'
import js from '../../assets/svg/javascript.svg'
import react from '../../assets/svg/structure.svg'
import { theme } from '../../theme'

export default function Skills({state}) {
    return (
        <div className="skills">
            <section
            style={{
                color: state.isDark ? theme.fontDark900 : '#000',
                textDecoration: 'underline'   
            }}
            >
                <h2>Skills</h2>
                <div className="skillset">
                    <img title="Html" src={html} alt="" />
                    <img title="Css" src={css} alt="" />
                    <img title="Javascript" src={js} alt="" />
                    <img title="React/React Native" src={react} alt="" />
                </div>
            </section>
        </div>
    )
}
