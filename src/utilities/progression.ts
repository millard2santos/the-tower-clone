export function level1Progression(basePrice: number, count: number): number {
  const increment: number = 5; // Incremento suave
  return basePrice + (count - 1) * increment;
}
export function level2Progression(basePrice: number, count: number): number {
  const factor: number = 1.15; // Incremento del 15%
  return basePrice * factor ** count -1;
}

export function level3Progression(basePrice: number, count: number): number {
  const exponent: number = 2; // Progresión cuadrática
  return basePrice * count ** exponent;
}

export function level4Progression(basePrice: number, count: number): number {
  const factor: number = 1.3; // Incremento del 30%
  return basePrice * factor ** count - 1;
}
