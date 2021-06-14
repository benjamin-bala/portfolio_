import './card.css'
import { theme } from '../../theme'
import {RiArrowRightUpLine} from 'react-icons/ri'

export default function Card({state,project}){
    return(
        <div className="card"
        style={{
                        color: state.isDark ? theme.fontDark900 : '#000',  
        }}
        >
            <section
              style={{
                            borderBottom: `1px solid ${state.isDark? theme.fontDark600 : theme.darkBackground400}`
                }}
            >
                <div className="card-details">
                    <div className="card-details-writeup">
                        <h2>{`${project.project_id}/${project.project_name}`}</h2>
                        <p>{project.project_description}</p>
                    </div>
                    
                    <div className="card-details-link"
                    >
                        <a 
                            href={project.project_link} 
                            target="_blank"
                            rel="noreferrer"
                            style={{
                             color: state.isDark ? theme.fontDark900 : '#000',   
                            }}
                        >View project <RiArrowRightUpLine size={30} /> </a>
                        <a 
                            href={project.project_repo} 
                            target="_blank"
                            rel="noreferrer"
                            style={{
                             color: state.isDark ? theme.fontDark900 : '#000',   
                            }}
                        >Repo <RiArrowRightUpLine size={30} /> </a>
                    </div>
                </div>
                <div className="card-image">
                    <img src={project.project_thumbnail} alt="" />
                </div>
            </section>
        </div>
    )
}