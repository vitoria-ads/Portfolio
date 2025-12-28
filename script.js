function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value; // pega o valor digitado
  const mensagem = document.getElementById("mensagem").value; // pega o valor digitado
  const telefone = "5583988853626"; // Substitua pelo número desejado

  const texto = `Olá! Me chamo ${nome}, ${mensagem}\n`;

  const msfFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msfFormatada}`;

  window.open(url, "_blank");
}
