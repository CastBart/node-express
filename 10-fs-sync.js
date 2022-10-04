const {readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

 writeFileSync(
    './content/result-sync.txt',
    `This is the result for both files: ${first}, ${second}`,
    {flag: 'a'}
)