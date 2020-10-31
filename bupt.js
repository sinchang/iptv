// run script on here http://ivi.bupt.edu.cn/

const allRows = Array.from(document.querySelectorAll('.row'))
let result = '#EXTM3U\n'

allRows.forEach((row) => {
  const allItems = Array.from(row.querySelectorAll('div'))

  if (allItems) {
    allItems.forEach((item) => {
      const nameNode = item.querySelector('p')
      const linkNode = item.querySelectorAll('a')

      if (nameNode) {
        const name = nameNode.textContent.trim()
        result += `#EXTINF:-1 ,${name}\n`
      }

      if (linkNode && linkNode.length >= 2) {
        const link = linkNode[1].getAttribute('href')
        result += `http://ivi.bupt.edu.cn/${link}\n`
      }
    })
  }
})

console.log(result)
