export async function handler(event) {
  const API_KEY = "COLE_SUA_API_KEY_AQUI";

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
      body: JSON.stringify({ error: error.message })
    };
  }
}
