import forge from "node-forge";

const buffer = Buffer.from("4198b723438a72ffgg", "hex");
for (const v of buffer) {
  console.log(v);
}

const forgeDer = forge.util.createBuffer(buffer);
console.log(forgeDer);
console.log(forgeDer.getBytes());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(2));
console.log(arr);