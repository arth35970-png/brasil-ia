export default async function handler(req, res) {
  try {
    const API_KEY = "dd417eade3087e9318c1f71ca3e1714a";

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

    res.status(200).json({ id: data.data.id });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
