import React from 'react'
import Card from '../../Components/Card'
import NameSection from '../../Components/NameSection'
import './landingpage.css'
import { projects } from '../../projects'
import Skills from '../../Components/Skills'
import { theme } from '../../theme'
import Footer from '../../Components/Footer'

export default function Landingpage({state}){
    return(
        <div className="landingpage">
            <NameSection state={state} />
            <Skills state={state} />
            <div className="experience">
                <h2
                style={{
                    color: state.isDark ? theme.fontDark900 : '#000',   
                    textDecoration: 'underline'
                }}
                >Projects</h2>
                {
                    projects.map(project => {
                        return <Card state={state} project={project}/>
                    })
                }
            </div>
            <Footer state={state} theme={theme}/>
        </div>
    )
}
