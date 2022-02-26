const joinNames = namesObj => {
    const names = namesObj.map(e => e.name);
    const lastName = names.pop();
    joinedNames = names.join(', ');
    return `${joinedNames} & ${lastName}`;


};

module.exports = joinNames;
