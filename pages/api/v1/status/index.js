import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "são feitos de código" });
}

export default status;

// async para tornar a função asincrona
// await para aguardar a resposta
