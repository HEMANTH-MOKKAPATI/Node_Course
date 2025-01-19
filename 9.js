const fs = require('node:fs'); // here the 'node:' is a namespace which is used to import core modules.( optional )

fs.writeFileSync(
  'first.txt',
  'This is the first file created using fs module!'
);

// above function creates a file if not exists and writes the content to it.
// if the file already exists, it will overwrite the content of the file.
