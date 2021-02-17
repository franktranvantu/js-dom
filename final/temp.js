function say(something) {
  console.log(something);
}

function exec(func, arg) {
  func(arg);
}

// exec(say, 'Hi, there');

exec((something) => {
  console.log(something);
}, 'Hi, there');