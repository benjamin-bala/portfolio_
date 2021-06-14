import React from 'react'
import {AiFillGithub,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import './style.css'

export default function Footer({theme,state}) {
    const profile = [
        {
            id: 0,
            name: 'github',
            url: 'https://github.com/benjamin-bala'
        },
        {
            id: 1,
            name: 'twitter',
            url: 'https://twitter.com/benjeee_'
        },
        {
            id: 2,
            name: 'instagram',
            url: 'https://www.instagram.com/benjiee._'
        }
    ]
    return (
        <div className="footer">
            <section>
                <div className="profile">
                    <span>
                        {
                            profile.map(item => {
                                return(
                                    <a 
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                        color: state.isDark ? theme.fontDark900 : '#000',   
                                        }}
                                    >
                                        {
                                            item.name === 'github' ?
                                                <AiFillGithub size={25}/>
                                            :
                                            item.name === 'twitter' ?
                                            <AiOutlineTwitter size={25} />
                                            :
                                            <AiOutlineInstagram size={25} />
                                        }
                                    </a>
                                )
                            })
                        }
                    </span>
                </div>
            </section>
        </div>
    )
}
