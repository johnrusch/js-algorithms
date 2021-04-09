function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  const taller = Math.sign(
    redShirtHeights[redShirtHeights.length - 1] -
      blueShirtHeights[blueShirtHeights.length - 1]
  );
  let idx = redShirtHeights.length - 2;
  if (taller === 0) {
    return false;
  }
  while (idx >= 0) {
    if (taller === Math.sign(redShirtHeights[idx] - blueShirtHeights[idx])) {
      idx--;
    } else {
      return false;
    }
  }
  return true;
}
