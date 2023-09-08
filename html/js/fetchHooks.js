
const streamUrl = 'http://localhost:3000';
let string = ''

const updateMsg = () => {
  const msg = document.getElementById('msg')
  msg.innerText = string
}

async function startStream() {
  const response = await fetch(streamUrl);
  const reader = response.body.getReader();
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      console.log('通讯结束')
      break;
    }
    
    const data = new TextDecoder().decode(value);
    // 更新 UI 显示新接收到的数据块
    string += data
    updateMsg()
  }
}

setTimeout(() => {
  startStream()
}, 1000)