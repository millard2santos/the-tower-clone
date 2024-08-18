

export function calculateValueSoft(level: number): number {
  return level * 10 + 100; // Ejemplo: valor inicial 100, aumenta en 10 por nivel
}

export function calculatePriceSoft(level: number): number {
  return 100 * 1.1 ** level; // Ejemplo: precio inicial 100, aumenta en 10% por nivel
}

// Moderada Progresión
export function calculateValueModerate(level: number): number {
  return 20 *  1.2 ** level; // Ejemplo: valor inicial 20, aumenta en 20% por nivel
}

export function calculatePriceModerate(level: number): number {
  return 500 * 1.2 ** level; // Ejemplo: precio inicial 500, aumenta en 20% por nivel
}

// Fuerte Progresión
export function calculateValueStrong(level: number): number {
  return 50 * 1.5 ** level; // Ejemplo: valor inicial 50, aumenta en 50% por nivel
}

export function calculatePriceStrong(level: number): number {
  return 1000 * 1.3 ** level; // Ejemplo: precio inicial 1000, aumenta en 30% por nivel
}