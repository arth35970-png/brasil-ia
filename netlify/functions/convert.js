export async function handler(event) {
  const API_KEY = "SUA_API_AQUI";

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
}
