/* eslint-disable react-refresh/only-export-components */
import type React from 'react'
import { createContext, useContext, useState } from 'react';
import  Wave from '../entities/Wave';
import Enemy from '../entities/Enemy';
import { randomEnemy } from '../utilities/fightFunctions';

type WaveContextType = {
    wave: Wave;
    nextLevel : () => void;
    enemies : Enemy[];
    setEnemies: React.Dispatch<React.SetStateAction<Enemy[]>>,
    gold : number,
    setGold : React.Dispatch<React.SetStateAction<number>>
}

const waveContext = createContext<WaveContextType | null>(null)

export const WaveContext = ({ children }: { children: React.ReactNode }) => {
    const [wave, setWave] = useState(new Wave())
    const [enemies, setEnemies] = useState(Array.from({ length: wave.spawnNumber }, () => new Enemy(randomEnemy(), wave.level)))
    const [gold, setGold] = useState(0)

    const nextLevel = () => {
        wave.level += 1
        setWave(prev => (prev.next()))
        setEnemies(() => Array.from({ length: wave.spawnNumber }, () => new Enemy(randomEnemy(), wave.level)))
    }

    return (
        <waveContext.Provider value={{wave, nextLevel, enemies, setEnemies, gold, setGold}}>
            {children}
        </waveContext.Provider>
    )
}

export const useWave = () => useContext(waveContext) as WaveContextType


 