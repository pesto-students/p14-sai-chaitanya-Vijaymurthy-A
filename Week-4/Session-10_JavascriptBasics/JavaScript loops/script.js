function drawTriangle() {
  for (let i = 0; i < 5; i++) {
    let asterisk = "";
    for (let j = 0; j < i; j++) {
      asterisk += "*    ";
    }
    console.log(asterisk);
  }
}

drawTriangle();
