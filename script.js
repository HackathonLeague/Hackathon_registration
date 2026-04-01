function initCarousel() {
  const track = document.querySelector('.track')
  const imgs = document.querySelectorAll('.track img')

  const total = imgs.length / 2
  let index = 0

  function update() {
    const width = imgs[0].offsetWidth
    track.style.transform = `translateX(-${index * width}px)`
  }

  document.getElementById('next').onclick = () => {
    index = (index + 1) % total
    update()
  }

  document.getElementById('prev').onclick = () => {
    index = (index - 1 + total) % total
    update()
  }

  setInterval(() => {
    index = (index + 1) % total
    update()
  }, 3000)
}

window.onload = initCarousel
