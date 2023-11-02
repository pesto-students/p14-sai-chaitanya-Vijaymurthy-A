function calcWordFrequencies() {
  let inputString = prompt(
    "Enter your string, I'll list the frequency of each words"
  );

  let maps = new Map();

  let strings = inputString.split(" ");
  for (const string of strings) {
    if (!maps.has(string)) {
      maps.set(string, 1);
    } else {
      res = maps.get(string);
      maps.set(string, res + 1);
    }
  }
  maps.forEach(function (value, key) {
    console.log(key + " " + value);
  });
}
