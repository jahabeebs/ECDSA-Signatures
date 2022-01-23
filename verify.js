const EC = require('elliptic').ec;
const SHA256 = require('crypto-js/sha256');

const ec = new EC('secp256k1');

// TODO: fill in the public key points
const publicKey = {
  x: "db9652920ca08d8511ef1505130432aa59c214c59c2701bf33dbfb92c067ce2",
  y: "6a452dc9d7b75f658e2152353119157b48da973f8086497768f799b3af03d1b3"
}

const key = ec.keyFromPublic(publicKey, 'hex');

// TODO: change this message to whatever was signed
const msg = "The secret lies in plain sight";
const msgHash = SHA256(msg).toString();

// TODO: fill in the signature components
const signature = {
  r: "96c3f28ed53070b4c21b0306c7263c11cbae7baaaf2adb6e3fa8fe39828775dc",
  s: "89381559b28332f6ede390b706e691ea12459f0accebc4432198f1282fb2f565"
};

console.log(key.verify(msgHash, signature));
