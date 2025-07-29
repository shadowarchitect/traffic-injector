const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  const delay = Math.floor(Math.random() * 8000) + 8000 // 8–16 detik
  const targetURL = 'https://pitradecenter.com/chatgpt-agent-for-crypto/'
  const fakeReferrers = [
    'https://www.reddit.com/',
    'https://www.pinterest.com/',
    'https://web.whatsapp.com/',
    'https://www.bing.com/',
  ]
  const selectedReferrer = fakeReferrers[Math.floor(Math.random() * fakeReferrers.length)]

  res.set('Referrer-Policy', 'no-referrer') // Optional cloaking
  res.set('Refresh', `${delay / 1000}; url=${targetURL}`)
  res.set('X-Forwarded-For', getRandomUSIP())
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="${delay / 1000}; URL='${targetURL}'" />
        <script>
          setTimeout(() => {
            window.location.href = '${targetURL}'
          }, ${delay});
        </script>
      </head>
      <body>
        <h3>Redirecting... stay still.</h3>
        <p>Faked referrer: ${selectedReferrer}</p>
      </body>
    </html>
  `)
})
function getRandomUSIP() {
  const a = 3 + Math.floor(Math.random() * 60)
  const b = Math.floor(Math.random() * 256)
  const c = Math.floor(Math.random() * 256)
  const d = Math.floor(Math.random() * 256)
  return `${a}.${b}.${c}.${d}`
}
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
