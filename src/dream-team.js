module.exports = function createDreamTeam(members) {
  return Array.isArray(members) && Boolean(members.length) &&
    members.filter(member => typeof member === 'string')
      .map(name => name.trim()[0].toUpperCase())
      .sort().join('');
};
