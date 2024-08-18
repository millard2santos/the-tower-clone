
import { usePlayer } from '../../context/PlayerContext'
import type Enemy from '../../entities/Enemy'


const EnemyComponent = ({ enemy }: { enemy: Enemy }) => {
  const { player, setPlayer } = usePlayer()


  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  // useEffect(() => {
  //   let interval = 0;
  //   const reachTime = setTimeout(() => {
  //     console.log('timeout');

  //     interval = setInterval(() => {
  //       playerRef.current.health -= enemy.damage; // Usamos `playerRef.current`
  //       console.log(playerRef.current.gold);

  //       setPlayer(playerRef.current.clone()); // Clonamos el jugador actualizado
  //     }, 1000);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(reachTime);
  //     clearInterval(interval);
  //   };
  // }, []); 
  return (
    <div>
      <h1>{enemy.type}</h1>
      <p>Health : {enemy.health}</p>
      <p>Damage : {enemy.damage}</p>
      <button type='button' onClick={() => {
        enemy.attack(player)
        setPlayer(player.clone())
      }}>Attack</button>
    </div>
  )
}

export default EnemyComponent