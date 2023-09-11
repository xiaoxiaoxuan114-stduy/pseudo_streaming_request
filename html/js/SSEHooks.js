
const streamUrl = 'http://localhost:3002'
let string = ''

const updateMsg = () => {
  const msg = document.getElementById('msg')
  msg.innerText = string
}

function startStream() {
  const eventSource = new EventSource(streamUrl)
  eventSource.addEventListener('message', ({ data }) => {
    console.log(data)
    if (data === '\\n') // 区分换行
      string += '\n'
    else
      string += data
    updateMsg()
  })
  eventSource.addEventListener('error', () => {
    console.log('连接异常')
    eventSource.close()
  })
  eventSource.addEventListener('end', () => {
    console.log('流式请求结束')
    eventSource.close()
  })
}

setTimeout(() => {
  startStream()
}, 1000)
