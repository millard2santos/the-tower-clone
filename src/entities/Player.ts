import {
  calculateValueSoft,
  calculateValueModerate,
  calculateValueStrong,
  calculatePriceSoft,
  calculatePriceModerate,
  calculatePriceStrong,
} from "../utilities/progression";

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

type StatLevels = {
  [key in Stat]: number;
};

type StatValues = {
  [key in Stat]: number;
};

type StatPrices = {
  [key in Stat]: number;
};

class Player {
  levels: StatLevels;
  values: StatValues;
  prices: StatPrices;
  constructor(levels: Partial<StatLevels> = {}) {
    this.levels = {
      [Stat.Health]: levels[Stat.Health] || 1,
      [Stat.Damage]: levels[Stat.Damage] || 1,
      [Stat.DefPer]: levels[Stat.DefPer] || 1,
      [Stat.AbsDef]: levels[Stat.AbsDef] || 1,
      [Stat.HealthReg]: levels[Stat.HealthReg] || 1,
      [Stat.Thorns]: levels[Stat.Thorns] || 1,
      [Stat.AttackSpeed]: levels[Stat.AttackSpeed] || 1,
      [Stat.CritChance]: levels[Stat.CritChance] || 1,
      [Stat.CritDamage]: levels[Stat.CritDamage] || 1,
      [Stat.Range]: levels[Stat.Range] || 1,
      [Stat.DmgMeter]: levels[Stat.DmgMeter] || 1,
      [Stat.GoldBonus]: levels[Stat.GoldBonus] || 1,
      [Stat.CoinBonus]: levels[Stat.CoinBonus] || 1,
      [Stat.GoldWave]: levels[Stat.GoldWave] || 1,
      [Stat.CoinWave]: levels[Stat.CoinWave] || 1,
    };
    this.values = {} as StatValues;
    this.prices = {} as StatPrices;

    // Inicializar valores y precios
    this.initializeValuesAndPrices();
  }
  private initializeValuesAndPrices() {
    for (const stat in Stat) {
      this.updateStatValue(stat as Stat);
      this.updateStatPrice(stat as Stat);
    }
  }
  // Método para obtener el valor real de un stat
  getStatValue(stat: Stat): number {
    return this.values[stat];
  }

  // Método para obtener el precio de mejora
  getStatPrice(stat: Stat): number {
    return this.prices[stat];
  }
  // Método para actualizar el valor real de un stat al ser mejorado
  private updateStatValue(stat: Stat) {
    switch (stat) {
      case Stat.Health:
      case Stat.Damage:
      case Stat.AbsDef:
      case Stat.HealthReg:
        this.values[stat] = calculateValueSoft(this.levels[stat]);
        break;

      case Stat.AttackSpeed:
      case Stat.CritDamage:
      case Stat.DmgMeter:
      case Stat.GoldBonus:
      case Stat.CoinBonus:
        this.values[stat] = calculateValueModerate(this.levels[stat]);
        break;

      case Stat.DefPer:
      case Stat.Thorns:
      case Stat.CritChance:
      case Stat.Range:
      case Stat.GoldWave:
      case Stat.CoinWave:
        this.values[stat] = calculateValueStrong(this.levels[stat]);
        break;
    }
  }

  // Método para actualizar el precio de un stat al ser mejorado
  private updateStatPrice(stat: Stat) {
    switch (stat) {
      case Stat.Health:
      case Stat.Damage:
      case Stat.AbsDef:
      case Stat.HealthReg:
        this.prices[stat] = calculatePriceSoft(this.levels[stat]);
        break;

      case Stat.AttackSpeed:
      case Stat.CritDamage:
      case Stat.DmgMeter:
      case Stat.GoldBonus:
      case Stat.CoinBonus:
        this.prices[stat] = calculatePriceModerate(this.levels[stat]);
        break;

      case Stat.DefPer:
      case Stat.Thorns:
      case Stat.CritChance:
      case Stat.Range:
      case Stat.GoldWave:
      case Stat.CoinWave:
        this.prices[stat] = calculatePriceStrong(this.levels[stat]);
        break;
    }
  }
  // Método para subir de nivel un stat y actualizar su valor y precio
  levelUp(stat: Stat, amount = 1) {
    this.levels[stat] += amount;
    this.updateStatValue(stat);
    this.updateStatPrice(stat);
  }
  // Método para clonar el Player actual
  clone() {
    return new Player({ ...this.levels });
  }
}

export { Player };
