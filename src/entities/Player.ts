enum Stat {
  Health = "health",
  Damage = "damage",
  DefPer = "defper",
  AbsDef = "absdef",
  HealthReg = "healthReg",
  Thorns = "thorns",
  AttackSpeed = "attackspeed",
  CritChance = "critChance",
  CritDamage = "critDamage",
  Range = "range",
  DmgMeter = "dmgMeter",
  GoldBonus = "goldBonus",
  CoinBonus = "coinBonus",
  GoldWave = "goldWave",
  CoinWave = "coinWave",
}

type Stats = {
  [key in Stat]: number;
};

class Player {
  stats: Stats;
  constructor(stats: Partial<Stats> = {}) {
    this.stats = {
      [Stat.Health]: stats[Stat.Health] || 1,
      [Stat.Damage]: stats[Stat.Damage] || 1,
      [Stat.DefPer]: stats[Stat.DefPer] || 1,
      [Stat.AbsDef]: stats[Stat.AbsDef] || 1,
      [Stat.HealthReg]: stats[Stat.HealthReg] || 1,
      [Stat.Thorns]: stats[Stat.Thorns] || 1,
      [Stat.AttackSpeed]: stats[Stat.AttackSpeed] || 1,
      [Stat.CritChance]: stats[Stat.CritChance] || 1,
      [Stat.CritDamage]: stats[Stat.CritDamage] || 1,
      [Stat.Range]: stats[Stat.Range] || 1,
      [Stat.DmgMeter]: stats[Stat.DmgMeter] || 1,
      [Stat.GoldBonus]: stats[Stat.GoldBonus] || 1,
      [Stat.CoinBonus]: stats[Stat.CoinBonus] || 1,
      [Stat.GoldWave]: stats[Stat.GoldWave] || 1,
      [Stat.CoinWave]: stats[Stat.CoinWave] || 1,
    };
  }

  buy(stat: Stat, amount = 1) {
    this.stats[stat] += amount;
    return this.stats[stat];
  }

  clone() {
    return new Player({ ...this.stats });
  }
}

export { Player };
