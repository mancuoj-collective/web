const toggleBtn = document.querySelector('.toggle-btn')!

function toggleTheme() {
  const isDark = document.body.classList.contains('dark')
  document.body.classList.toggle('dark')
  toggleBtn.textContent = isDark ? '深色' : '浅色'
  localStorage.setItem('theme', isDark ? 'light' : 'dark')
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark')
    toggleBtn.textContent = '浅色'
  }
}

function init() {
  initTheme()
  toggleBtn.addEventListener('click', toggleTheme)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'd' || e.key === 'D') {
      toggleTheme()
    }
  })
}

init()
