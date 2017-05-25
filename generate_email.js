var minimist = require('minimist');
var Handlebars = require('handlebars');
var fs = require('fs');

var argv = minimist(process.argv.slice(2));
//Checking if the correct number of arguments is given, if not, directs user how to use.
if (argv['_'].length < 2) {
  console.log('Usage: \n $ node generate_email.js <template.html> <config.json>');
  return;
}

// We get data from the files user provided and save as variables
var template_source = fs.readFileSync(argv['_'][0], 'utf8');
var config = JSON.parse(fs.readFileSync(argv['_'][1], 'utf8'));

// We loop through members and generate email for them specifically
for (i = 0; i < config.members.length; i++) {
  var memberSpecificConfig = {
    member: config.members[i],
    restaurant: config.restaurant
  };
  // Handlebars compiles the data and the template to finished html which we can log
  var template = Handlebars.compile(template_source);
  var html = template(memberSpecificConfig);
  console.log("********************************************************************")
  console.log("************************* Email for ********************************")
  console.log("************************* " + config.members[i].email )
  console.log(html);
}
