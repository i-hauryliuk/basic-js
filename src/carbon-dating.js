const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    const activityValue = Number.parseFloat(sampleActivity);
    return Boolean(activityValue) && (activityValue > 0 && activityValue < MODERN_ACTIVITY) && 
      Math.ceil(Math.log(MODERN_ACTIVITY / activityValue) / (0.693 / HALF_LIFE_PERIOD));
  }
  return false;
};
