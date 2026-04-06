export default async function handler(req, res) {
  try {
    const API_KEY = "1ea6dbf1ecfbac7508c7cf4c0f38b70e";

    const body = JSON.parse(req.body);

    const response = await fetch("https://api.convertio.co/convert", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        input: "base64",
        file: body.file,
        filename: body.filename,
        outputformat: "mp3"
      })
    });

    const data = await response.json();

    console.log("RESPOSTA API:", data);

    // 🔥 mostra erro real
    if (!data.data || !data.data.id) {
      return res.status(500).json({
        error: "Erro da Convertio",
        detalhes: data
      });
    }

    res.status(200).json({ id: data.data.id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
