export function getMostRecentObject(array) {
  if (array.length === 0) {
    return null; // Retourne null si le tableau est vide
  }

  return array.reduce((mostRecent, current) => {
    // Convertit les dates en objets Date
    const mostRecentDate = new Date(mostRecent.date);
    const currentDate = new Date(current.date);
    // Compare les dates et retourne l'objet le plus récent
    return mostRecentDate > currentDate ? mostRecent : current;
  });
}
