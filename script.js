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

window.onload = initCarousel
