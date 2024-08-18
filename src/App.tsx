
import './App.css'
import CashShop from './components/CashShop/CashShop'
import EnemyComponent from './components/Enemy/EnemyComponent'
import { usePlayer } from './context/PlayerContext'
import { useWave } from './context/WaveContext'

function App() {
  const { player, setPlayer } = usePlayer()
  const { wave, nextLevel, enemies, setEnemies, gold, setGold } = useWave()

  return (
    <>
      <h1>Wave {wave.level}</h1>
      <h2>Gold : { gold }</h2>
      <h1>Player</h1>
      <p>Health : {player.health}</p>
      <p>Damage : {player.damage}</p>
      <button type='button' onClick={() => {
        const currentEnemies = [...enemies]
        player.attack(currentEnemies[0]) // Ataca al primer enemigo de la lista
        if (currentEnemies[0].health <= 0) {
          setGold(gold + currentEnemies[0].gold)
          currentEnemies.splice(0, 1)
        }
        if (currentEnemies.length === 0) {
          nextLevel()
          return
        }
        setEnemies(currentEnemies)
      }}>Attack</button>
      <button type='button' onClick={() => {
        console.log(player.damage);
        player.buy("damage")
        const clone = player.clone()

        setPlayer(clone)
      }}>Buy Damage : {player.damage}</button>
      <button type='button' onClick={() => {
        player.buy("absdef")
        setPlayer(player.clone())
      }}>Buy Defense : {player.absdef}</button>
      {
        enemies.map((enemy, index) => (<EnemyComponent enemy={enemy} key={index} />))
      }
      <CashShop />
    </>

  )
}

export default App
