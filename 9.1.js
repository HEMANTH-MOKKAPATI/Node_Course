const fs = require('fs');

fs.appendFileSync('first.txt', '\nthis is the appended content!');
// above function appends the content to the existing file.
