const code = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

//

function encriptar() {
  const frase = document.getElementById("txtEncriptado").value.toLowerCase();
  let encriptado = frase.replace(
    /[aeiou]/gim,
    (key) => code[key[0].toLowerCase()]
  );

  document.getElementById("txtDesencriptado").innerHTML = encriptado;
  let buttonDes = document.getElementById("btnDesencriptado");
  buttonDes.disabled = true;
}

function desencriptar() {
  let decryptedText = document
    .getElementById("txtEncriptado")
    .value.toLowerCase()
    .trim();
  for (const i in code) {
    const regex = new RegExp(code[i], "g");
    decryptedText = decryptedText.replace(regex, i);
  }
  document.getElementById("txtDesencriptado").innerHTML = decryptedText;
}

function copy() {
  let contenido = document
    .querySelector("#txtDesencriptado")
    .value.toLowerCase()
    .trim();
  navigator.clipboard.writeText(contenido);
  document.getElementById("txtDesencriptado").innerHTML = "";

  document.getElementById("txtEncriptado").value = contenido;

  let buttonDes2 = document.getElementById("btnDesencriptado");
  buttonDes2.disabled = false;
}
