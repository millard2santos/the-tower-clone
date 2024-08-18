/* eslint-disable react-refresh/only-export-components */
import type React from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Player } from '../entities/Player'

type PlayerContextType = {
    player: Player;
    setPlayer: React.Dispatch<React.SetStateAction<Player>>;
    playerRef : React.MutableRefObject<Player>
}
const playerContext = createContext<PlayerContextType | null>(null)

export const PlayerContext = ({ children }: { children: React.ReactNode }) => {
    const [player, setPlayer] = useState(new Player)
    const playerRef = useRef(player); // Ref para mantener la referencia al `player`


    useEffect(() => {
        playerRef.current = player; // Actualiza la ref cuando `player` cambia
    }, [player]);

    return (
        <playerContext.Provider value={{ player, setPlayer, playerRef }}>
            {children}
        </playerContext.Provider>
    )
}

export const usePlayer = () => useContext(playerContext) as PlayerContextType
