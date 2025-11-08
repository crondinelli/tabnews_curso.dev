function status(request, response) {
  response.status(200).json({ chave: "são feitos de código" });
}

export default status;

// async para tornar a função asincrona
// await para aguardar a resposta
