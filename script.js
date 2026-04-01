function initCarousel() {
  const track = document.querySelector('.track')
  const imgs = document.querySelectorAll('.track img')

  const total = imgs.length / 2
  let index = 0

  let intervalId = null
  let resumeTimeout = null

  function update(animate = true) {
    const width = imgs[0].offsetWidth
    track.style.transition = animate ? 'transform 0.2s ease' : 'none'
    track.style.transform = `translateX(-${index * width}px)`
  }

  function startAuto() {
    clearInterval(intervalId)

    intervalId = setInterval(() => {
      index++
      update()

      if (index === total) {
        setTimeout(() => {
          index = 0
          update(false)
        }, 200)
      }
    }, 1200)
  }

  function pauseAuto() {
    clearInterval(intervalId)
    clearTimeout(resumeTimeout)

    resumeTimeout = setTimeout(() => {
      startAuto()
    }, 2000)
  }

  document.getElementById('next').onclick = () => {
    pauseAuto()

    index++
    update()

    if (index === total) {
      setTimeout(() => {
        index = 0
        update(false)
      }, 200)
    }
  }

  document.getElementById('prev').onclick = () => {
    pauseAuto()

    if (index === 0) {
      index = total
      update(false)
    }

    setTimeout(() => {
      index--
      update()
    }, 0)
  }

  startAuto()
}

function initTimer() {
  const countDownDate = new Date("May 2, 2026 09:00:00").getTime()

  const timerEl = document.getElementById("timer")

  setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    timerEl.innerHTML =
      days + "d " +
      hours.toString().padStart(2, '0') + "h " +
      minutes.toString().padStart(2, '0') + "m " +
      seconds.toString().padStart(2, '0') + "s"

    if (distance < 0) {
      clearInterval()
      timerEl.innerHTML = "LIFTOFF"
    }
  }, 1000)
}

window.onload = () => {
  initCarousel()
  initTimer()
}
