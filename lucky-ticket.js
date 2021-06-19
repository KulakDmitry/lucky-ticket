function isLucky() {
  for (let i = 0; i < 1000000; i++) {
    arr = i.toString().split("");
    if (
      arr[0] + arr[1] + arr[2] === arr[3] + arr[4] + arr[5] ||
      (arr[0] === arr[5] && arr[1] === arr[4] && arr[2] === arr[3])
    ) {
      arr = arr.join(" ");
      console.log(`${arr} is a lucky ticket`);
    }
  }
}

isLucky();
