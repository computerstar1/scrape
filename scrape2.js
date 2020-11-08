const { DefaultContext, DefaultRequestMaker, Logger } = require('crawl-e/v0.5.2')

let context = new DefaultContext()
let logger = new Logger() 
let requestMaker = new DefaultRequestMaker()
requestMaker.logger = logger 

requestMaker.get('https://old.reddit.com/top/', context, (err, res) => {
  if (err) {
    console.error(`Oh noo, sth. wen't wrong: ${err}`)
  }
  console.log('Happy', res.status, '🙂') ///why I don't see here a request log as you say on 'tutorials'??
  // those are not tutorials, but those are tests 
