// code your solution here

function superbowlWin(arrayOfObjects) {
  let win = arrayOfObjects.find(FindWinningYear);
  if (win !== undefined) {
    return win["year"];
  } else {
    return undefined;
  }
}
function FindWinningYear(item) {
  return item.result === "W";
}
