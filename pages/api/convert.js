export default async function handler(req, res) {
  try {
    const API_KEY = process.env.CONVERTIO_API_KEY;
    const { file, filename } = req.body;

    if (!file || !filename) {
      return res.status(400).json({ error: "Arquivo ou nome não enviado" });
    }

    const response = await fetch("https://api.convertio.co/convert", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: "base64",
        file,
        filename,
        outputformat: "mp3"
      })
    });

    const data = await response.json();
    if (!data.data?.id) {
      return res.status(500).json({ error: "Falha ao iniciar conversão", detalhes: data });
    }

    res.status(200).json({ id: data.data.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
