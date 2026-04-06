export default async function handler(req, res) {
  try {
    const API_KEY = "SUA_API_KEI";

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

    console.log(data); // 🔥 ajuda a ver erro na Vercel

    if (!data.data || !data.data.id) {
      return res.status(500).json({
        error: "API não retornou ID",
        resposta: data
      });
    }

    res.status(200).json({ id: data.data.id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
