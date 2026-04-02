export async function handler(event) {
  const API_KEY = "ffeadb6f059e0891b4d8a33ce7e56f95";

  const body = JSON.parse(event.body);

  const response = await 
    method: "POST",fetch("/.netlify/functions/convert", {
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
