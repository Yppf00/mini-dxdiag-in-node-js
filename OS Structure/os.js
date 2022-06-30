const os = require('os');
let info = {
   "cpumodel": console.log('CPU MODEL:' + os.cpus()[0].model),
   "cpua": console.log(`CPU architecture: ${os.arch()}`),
   "fsm": console.log(`Free system memory in bytes: ${os.freemem()}`),
   "hn": console.log(`Host name: ${os.hostname()}`),
   "plt": console.log(`Platform: ${os.platform()}`),
   "type": console.log(`Type: ${os.type()}`),
   "tmib": console.log(`Total memory in bytes: ${os.totalmem()}`),
   "su": console.log(`System uptime in hours: ${os.uptime() / 60 / 60}`)
}
var fs = require('fs');
var stream = fs.createWriteStream("speks.txt");
stream.once('open', function (fd) {
   stream.write('open the console for the specs [CTRL + `]')
   stream.end();
});   