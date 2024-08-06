// backend/server.js
const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/generate-og-image", async (req, res) => {
  const { title, content, image } = req.body;

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; width: 1200px; height: 630px; display: flex; justify-content: center; align-items: center; }
        .container { border: 1px solid #ddd; padding: 20px; text-align: center; }
        .container h2 { margin: 0; }
        .container img { max-width: 100%; height: auto; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>${title}</h2>
        <p>${content}</p>
        ${image ? `<img src="${image}" alt="Post Image" />` : ""}
      </div>
    </body>
    </html>
  `;

  await page.setContent(htmlContent);
  const screenshot = await page.screenshot({ type: "jpeg" });

  await browser.close();
  res.setHeader("Content-Type", "image/jpeg");
  res.send(screenshot);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
