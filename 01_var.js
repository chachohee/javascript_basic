//var, let, const
var x = 1;
x = x + 2;

let y = 1;
y = y + 2;

const z = 1;
// z = z + 1; 에러남 => const는 재할당 안됨

document.getElementById("test").value = y;