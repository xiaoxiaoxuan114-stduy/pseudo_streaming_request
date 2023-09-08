
const streamUrl = 'ws://localhost:3001'
let string = ''

const updateMsg = () => {
  const msg = document.getElementById('msg')
  msg.innerText = string
}

const socket = new WebSocket(streamUrl);

// 监听连接事件
socket.addEventListener('open', function (event) {
  console.log('已连接到服务器');
  
  // 向服务器发送消息
  socket.send('Hello, WebSocket!');
});

// 监听消息事件
socket.addEventListener('message', function ({ data }) {
  if (!data.startsWith('服务器已接收到消息')) {
    string += data
    updateMsg()
  }
});

// 监听关闭事件
socket.addEventListener('close', function (event) {
  console.log('连接已关闭');
});

// 监听错误事件
socket.addEventListener('error', function (event) {
  console.error('连接出错：', event);
});
