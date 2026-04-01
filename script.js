function initCarousel() {
  const track = document.querySelector('.track')
  const imgs = document.querySelectorAll('.track img')

  const total = imgs.length / 2
  let index = 0

  function update(animate = true) {
    const width = imgs[0].offsetWidth

    track.style.transition = animate ? 'transform 0.2s ease' : 'none'
    track.style.transform = `translateX(-${index * width}px)`
  }

  document.getElementById('next').onclick = () => {
    index++
    update()

    if (index === total) {
      setTimeout(() => {
        index = 0
        update(false)
      }, 200) // 👈 match transition (0.2s)
    }
  }

  document.getElementById('prev').onclick = () => {
    if (index === 0) {
      index = total
      update(false)
    }

    setTimeout(() => {
      index--
      update()
    }, 0)
  }

  setInterval(() => {
    index++
    update()

    if (index === total) {
      setTimeout(() => {
        index = 0
        update(false)
      }, 200) // 👈 match transition
    }
  }, 1200)
}

window.onload = initCarousel
