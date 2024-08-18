import type { EnemyType } from "../types/Enemy.types";

export default class Enemy {
  health: number;
  damage: number;
  gold: number;
  size: number;
  speed: number;
  type : string;
  constructor(type: EnemyType, level: number) {
    if (type === "fast") {
      this.health = 1 * level;
      this.damage = 1 * level;
      this.gold = 1 * level;
      this.speed = 3;
      this.size = 1;
    } else if (type === "tank") {
      this.health = 5 * level;
      this.damage = 2 * level;
      this.gold = 3 * level;
      this.speed = 0.5;
      this.size = 2;
    } else if (type === "boss") {
      this.health = 10 * level;
      this.damage = 4 * level;
      this.gold = 10 * level;
      this.speed = 0.3;
      this.size = 3;
    } else if (type === "ranged") {
      this.health = 1 * level;
      this.damage = 1 * level;
      this.gold = 1 * level;
      this.speed = 1;
      this.size = 1;
    }
    this.health = 1 * level;
    this.damage = 1 * level;
    this.gold = 1 * level;
    this.speed = 1;
    this.size = 1;
    this.type = type
  }
  attack(player) {
    player.health -= this.damage;
  }
}
