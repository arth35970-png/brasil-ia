export default async function handler(req, res) {
  try {
    const API_KEY = process.env.CONVERTIO_API_KEY;
    const { id } = req.query;

    if (!id) return res.status(400).json({ error: "ID não enviado" });

    const response = await fetch(`https://api.convertio.co/convert/${id}/status`, {
      headers: { "Authorization": "Bearer " + API_KEY }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
