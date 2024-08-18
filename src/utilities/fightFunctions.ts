import type { EnemyType } from "../types/Enemy.types";

export const randomEnemy = () => {
  const enemyTypes = {
    basic: Math.random() * 30,
    fast: Math.random() * 3,
    tank: Math.random() * 2,
    ranged: Math.random() * 3,
    boss : 0
  };
  
  const result: [EnemyType, number] = ["basic", enemyTypes.basic] ;
  for (const key in enemyTypes) {
    const index = key as EnemyType
    if (enemyTypes[index] >= result[1]) {
      result[0] = index
      result[1] = enemyTypes[index]
    }
  }
  return result[0]
};

