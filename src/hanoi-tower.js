module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const transfers = Math.pow(2, disksNumber) - 1;
    return {
        turns: transfers,
        seconds: transfers / (turnsSpeed / 3600)
    };
};
