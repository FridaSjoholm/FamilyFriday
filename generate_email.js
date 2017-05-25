var minimist = require('minimist');
var fs = require('fs');

console.log(process.argv);

var argv = minimist(process.argv.slice(2));

console.log(argv);

if (argv['_'].length < 2) {
  console.log('Usage: \n $ node generate_email.js <template.html> <config.json>');
  return;
}

var template_source = fs.readFileSync(argv['_'][0], 'utf8');
var config = JSON.parse(fs.readFileSync(argv['_'][1], 'utf8'));

console.log('Config:', config);
console.log('Template:', template_source);
