const http = require('http')

const msg = '当生命的钟声敲响\n' +
  '我们才发现时间的匆忙\n' +
  '当病痛缠绕孩子的身躯\n' +
  '我们才懂得生命的脆弱\n' +
  '\n' +
  '你的微笑，如同春天的花朵\n' +
  '在我们心中永不凋零\n' +
  '你的眼神，如同星空的繁华\n' +
  '在我们心中永不熄灭\n' +
  '\n' +
  '可惜疾病夺去了你的生命\n' +
  '让我们的心痛苦不堪言\n' +
  '可惜我们无法阻挡命运的安排\n' +
  '让你离开人世的怀抱\n' +
  '\n' +
  '孩子啊，你是生命的奇迹\n' +
  '你的存在让我们感到无限美好\n' +
  '虽然你已经离开这个世界\n' +
  '但你的精神永远活在我们心中\n' +
  '\n' +
  '愿你在另一个世界里安息\n' +
  '愿你在天堂里快乐自在\n' +
  '我们会一直怀念你，永远怀念你\n' +
  '直到我们再次相聚的那一天。'

const server = http.createServer(async (req, res) => {
  console.log('request is enter')
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*' // 允许任意跨域
  })
  
  let i = 0
  
  let timer = setInterval(() => {
    // 一定要写流式响应的事件类型，并且和前端/ios/android监听事件一致
    res.write(`event:message\ndata:${
      msg.charAt(i) === '\n' ? '\\n' : msg.charAt(i)
    }\n\n`)
    i ++
    if (i > msg.length) {
      clearInterval(timer)
      // 记得关闭
      res.write('event:end\ndata: \n\n')
    }
  }, 100)
  
})

server.listen(3002, () => {
  console.log('SSE server is running')
})
