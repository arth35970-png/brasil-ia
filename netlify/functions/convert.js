export async function handler(event) {
  const API_KEY = "ffeadb6f059e0891b4d8a33ce7e56f95";

  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://api.convertio.co/convert", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro no backend",
        details: error.message
      })
    };
  }
}
