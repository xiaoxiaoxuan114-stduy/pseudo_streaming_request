/* eslint-disable */

const http = require('http');

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
    'Content-Type': 'text/plain',
    'Transfer-Encoding': 'chunked',
    'Access-Control-Allow-Origin': '*' // 允许任意跨域
  });
  
  // 模拟逐步生成响应数据
  for (let i = 0; i < msg.length; i++) {
    res.write(msg.charAt(i));
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  res.end();
});

server.listen(3000);
console.log('server is running')
