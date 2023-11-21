let [time, ...log] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const timeToMinutes = (time) => {
  const [hour, min] = time.split(":");
  return +hour * 60 + +min;
};

const [S, E, Q] = time.split(" ").map(timeToMinutes);

let enterLog = new Set();
let exitLog = new Set();
log.forEach((el) => {
  let [time, id] = el.split(" ");
  const CHAT_LOG = timeToMinutes(time);
  if (CHAT_LOG <= S) enterLog.add(id);
  else if (CHAT_LOG >= E && CHAT_LOG <= Q) exitLog.add(id);
});

enterLog.forEach((val) => {
  if (!exitLog.has(val)) enterLog.delete(val);
});

console.log(enterLog.size);
