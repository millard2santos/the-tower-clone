import React, { useState } from 'react'
import { usePlayer } from '../../context/PlayerContext'

type Props = {}

const Scenario = (props: Props) => {

    const {player} = usePlayer()
    const [currentPlayer, setCurrentPlayer] = useState(player.clone())



  return (
    <div>Scenario</div>
  )
}

export default Scenario