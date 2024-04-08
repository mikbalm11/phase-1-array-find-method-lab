function superbowlWin (array) {
    const winningObj = array.find(element => element.result === 'W');
    return winningObj !== undefined ? winningObj.year : undefined;
}
