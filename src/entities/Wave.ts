export default class Wave {
  time: number;
  spawnNumber: number;
  recovery: number;
  level: number;
  constructor(time = 20, spawnNumber = 5, recovery = 10, level = 1) {
    this.time = time;
    this.spawnNumber = spawnNumber;
    this.recovery = recovery;
    this.level = level;
  }
  next() {
    return new Wave(
      this.time,
      this.spawnNumber,
      this.recovery,
      this.level
    )
  }
  
}
