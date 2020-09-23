const fortuneCookies = [
  "What goes around, comes around.",
  "Karma is a biatch!",
  "If you play nice with others, they will play nice to you.",
  "Be like Nike and Just Do It!",
  "Whatever your desire, focus, and it will be yours.",
]

exports.getFortune = () => {
  const idx = Math.floor(Math.random()*fortuneCookies.length)
  return fortuneCookies[idx]
}