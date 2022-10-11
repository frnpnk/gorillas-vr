const setPositions = (radio) => {
  const pitagoras = (x, y) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  const xyArray = [];
  for (let times = 0; times < radio; times++) {
    const xposition = times;
    for (let times2 = 0; times2 < radio; times2++) {
      if (pitagoras(xposition, times2) < radio) {
        xyArray.push([xposition, times2]);
      }
    }
  }
  const completeArray = [];

  xyArray.forEach((e) => {
    completeArray.push(
      [e[0]*10, Math.random()*10,e[1] * -1*10],
      [e[0] * -1*10,Math.random()*10,e[1] * -1*10],
      [e[0] * -1*10,Math.random()*10, e[1]*10],
      [e[0]*10, Math.random()*10,e[1]*10]
    );
  });

  return completeArray;
};

export default setPositions;
