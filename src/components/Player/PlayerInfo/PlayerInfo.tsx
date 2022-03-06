import React from 'react'
import './PlayerInfo.css'

interface PlayerInfoProps {
    title: string,
    content: string,
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({title, content}) => {
  return (
    <div className='playerInfo'>
        <h4>{title}</h4>
        <h5>{content}</h5>
    </div>
  )
}
