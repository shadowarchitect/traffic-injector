const express = require('express')
const app = express()
const PORT = process.env.PORT
app.get('/', (req, res) => {
  const delay = Math.floor(Math.random() * 8000) + 8000 // 8–16 detik
  const urls = [
  "https://pitradecenter.com/blockchain-assistance-dont-wait-until-your-wallet-is-locked-to-learn-how-to-get-help/",
  "https://pitradecenter.com/how-to-start-crypto-investing-and-trading-without-getting-burned-in-2025/",
  "https://pitradecenter.com/airdrops-and-upcoming-tokens/",
  "https://pitradecenter.com/blockchain-ssi-5-brutal-truths-that-will-destroy-your-faith-in-centralized-identity/",
  "https://pitradecenter.com/why-homeowners-in-oxford-ms-are-getting-crushed-by-their-insurance-policies/",
  "https://pitradecenter.com/crypto-investing-and-trading/",
  "https://pitradecenter.com/the-hidden-traps-inside-oxford-ms-homeowners-insurance-that-could-bankrupt-you/",
  "https://pitradecenter.com/pi-coin-at-120k-isnt-a-dream/",
  "https://pitradecenter.com/blockchain-4-0-how-it-compares-to-blockchain-3-0-and-earlier-versions/",
  "https://pitradecenter.com/c-blockchain/"
]
const targetURL = urls[Math.floor(Math.random() * urls.length)]

  const fakeReferrers = [
  'https://www.linkedin.com/',
  'https://medium.com/',
  'https://web.whatsapp.com/',
  'https://www.messenger.com/',
  'https://l.facebook.com/',
  'https://m.facebook.com/',
  'https://t.co/',
  'https://www.google.com/',
  'https://duckduckgo.com/',
  'https://t.me/',
  'https://discord.com/',
  'https://lemon8-app.com/',
  'https://www.reddit.com/',
  'https://www.pinterest.com/',
  'https://news.ycombinator.com/',
  'https://search.yahoo.com/',
  'https://outlook.live.com/',
  'https://www.quora.com/',
  'https://mail.google.com/'
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
app.listen(process.env.PORT || 3000, () => {
  console.log(`🔥🔥🔥 PORT YANG DIPAKAI: ${process.env.PORT || 3000}`)
})

