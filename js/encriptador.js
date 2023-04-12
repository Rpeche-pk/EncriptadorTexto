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
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let encriptado = frase.replace(
    /[aeiou]/gim,
    (key) => code[key[0].toLowerCase()]
  );

  if (frase.length !== 0) {
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent =
      "Dale al botón **Copiar** para activar el botón Desencriptar";
    //muñeco.src = "./img/encriptado.jpg";

    const div = document.getElementById("idEncriptado");

    if (document.getElementById("txtDesencriptado") == null) {
      const textArea = document.createElement("textarea");
      textArea.id = "txtDesencriptado";
      textArea.className = "mensaje";
      div.appendChild(textArea);
      document.getElementById("btnCopiar").style.display = "block";
    }

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("txtDesencriptado").style.display = "block";
    document.getElementById("txtDesencriptado").innerHTML = encriptado;
    let buttonDes = document.getElementById("btnDesencriptado");
    buttonDes.disabled = true;
  } else {
    muñeco.src = "./img/alura.png";
  }
}

function desencriptar() {
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let decryptedText = document
    .getElementById("txtEncriptado")
    .value.toLowerCase()
    .trim();

  for (const i in code) {
    const regex = new RegExp(code[i], "g");
    decryptedText = decryptedText.replace(regex, i);
  }
  tituloMensaje.textContent = "Desencriptado";
  parrafo.textContent = "Texto Desencriptado con éxito";

  document.getElementById("txtDesencriptado").style.display = "block";
  document.getElementById("txtDesencriptado").innerHTML = decryptedText;
}

function copy() {
  let muñeco = document.getElementById("muñeco");
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let contenido = document
    .querySelector("#txtDesencriptado")
    .value.toLowerCase()
    .trim();
  navigator.clipboard.writeText(contenido);
  document.getElementById("txtDesencriptado").innerHTML = "";
  document.getElementById("txtDesencriptado").style.display = "none";
  document.getElementById("muñeco").style.display = "block";
  muñeco.src = "./img/alura.png";

  document.getElementById("txtEncriptado").value = contenido;
  tituloMensaje.textContent = "Copiado!!!";
  parrafo.textContent =
    "Una vez copiado, dale al botón encriptar o desencriptar";

  let buttonDes2 = document.getElementById("btnDesencriptado");
  buttonDes2.disabled = false;
}
