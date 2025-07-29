const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
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

  const minStay = 30000
  const maxStay = 90000
  const stayDuration = Math.floor(Math.random() * (maxStay - minStay + 1)) + minStay

  res.set('Referrer-Policy', 'no-referrer')
  res.set('X-Forwarded-For', getRandomGeoIP())

  res.send(`
    <html>
      <head>
        <title>Redirecting...</title>
        <meta http-equiv="refresh" content="${stayDuration / 1000}; url=${targetURL}">
        <script>
          const moveMouse = () => {
            const evt = new MouseEvent('mousemove', {
              clientX: Math.floor(Math.random() * window.innerWidth),
              clientY: Math.floor(Math.random() * window.innerHeight)
            });
            document.dispatchEvent(evt);
          };
          const scrollPage = () => {
            window.scrollTo({ top: Math.random() * document.body.scrollHeight, behavior: 'smooth' });
          };
          setInterval(moveMouse, 3000);
          setInterval(scrollPage, 5000);
          setTimeout(() => {
            window.location.href = '${targetURL}'
          }, ${stayDuration});
        </script>
      </head>
      <body>
        <h3>Redirecting... please wait.</h3>
        <p>Fake Referrer: ${selectedReferrer}</p>
        <p>Duration: ${stayDuration / 1000} seconds</p>
      </body>
    </html>
  `)
})

function getRandomGeoIP() {
  const geoPools = {
    usa: ['3.', '18.', '23.', '34.', '35.', '44.', '52.', '54.'],
    canada: ['15.', '142.', '134.', '198.'],
    uk: ['51.', '62.', '81.', '212.'],
    singapore: ['13.', '18.', '45.', '103.'],
    indonesia: ['36.', '103.', '110.', '180.']
  }
  const rand = Math.random()
  let pool = []
  if (rand < 0.6) pool = geoPools.usa
  else if (rand < 0.75) pool = geoPools.canada
  else if (rand < 0.85) pool = geoPools.uk
  else if (rand < 0.95) pool = geoPools.singapore
  else pool = geoPools.indonesia

  const base = pool[Math.floor(Math.random() * pool.length)]
  const b = Math.floor(Math.random() * 256)
  const c = Math.floor(Math.random() * 256)
  const d = Math.floor(Math.random() * 256)
  return `${base}${b}.${c}.${d}`
}

app.listen(PORT, () => {
  console.log(`🚀 Injector aktif di port ${PORT}`)
})
