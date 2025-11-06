function status(request, response) {
  response.status(200).json({ chave: "são feitos de código" });
}

export default status;
