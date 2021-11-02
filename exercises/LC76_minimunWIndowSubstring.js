var minWindow = function (s, t) {
  const needContainer = new Map();
  const runningContainer = new Map();
  let leftPointer = 0;
  let rightPointer = 0;
  let minString = s.substring(leftPointer, s.length);
  // put all the key into the map
  for (let i = 0; i < t.length; i++) {
    if (!needContainer.has(t.charAt(i))) {
      needContainer.set(t.charAt(i), 1);
      continue;
    }
    needContainer.set(t.charAt(i), needContainer.get(t.charAt(i)) + 1);
  }
  console.log("needContainer :>> ", needContainer);

  const helper = () => {
    // console.log("NEW CHECK");
    // console.log(runningContainer);
    for (const [key, value] of needContainer) {
      if (!runningContainer.has(key) || runningContainer.get(key) < value)
        return false;
    }
    return true;
  };

  while (rightPointer < s.length) {
    if (!runningContainer.has(s.charAt(rightPointer))) {
      runningContainer.set(s.charAt(rightPointer), 1);
    } else {
      runningContainer.set(
        s.charAt(rightPointer),
        runningContainer.get(s.charAt(rightPointer)) + 1
      );
    }

    rightPointer++;
    //         check if all requirement is sastify
    let validSolution = helper();
    while (validSolution) {
      runningContainer.set(
        s.charAt(leftPointer),
        runningContainer.get(s.charAt(leftPointer)) - 1
      );
      console.log("runningContainer :>> ", runningContainer);
      if (minString.length > s.substring(leftPointer, rightPointer).length) {
        console.log(
          " s.substring(leftPointer, rightPointer) :>> ",
          s.substring(leftPointer, rightPointer)
        );
        minString = s.substring(leftPointer, rightPointer);
      }
      leftPointer++;
      validSolution = helper();
      console.log("validSolution after :>> ", validSolution);
    }
  }
  console.log(minString);
  return minString;
};
minWindow("ADOBECODEBANC", "ABC");
