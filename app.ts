const toggle = document.querySelector('.toggle')!

function toggleTheme() {
  const isDark = document.body.classList.contains('dark')
  document.body.classList.toggle('dark')
  toggle.textContent = isDark ? '浅色' : '深色'
  localStorage.setItem('theme', isDark ? 'light' : 'dark')
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark')
    toggle.textContent = '深色'
  }
}

function init() {
  initTheme()
  toggle.addEventListener('click', toggleTheme)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      toggleTheme()
    }
  })
}

init()
