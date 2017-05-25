describe("Compiles html and json", function() {
  var Handlebars = require('handlebars');
  var fs = require('fs');

  var template =
  `<div>
    <h1>{{member.name}}</h1>
    <div>
      <p>{{restaurant.name}}</p>
    </div>
  </div>`;
  var config = JSON.parse(fs.readFileSync('payload.json', 'utf8'));

  var memberSpecificConfig = {
      member: config.members[0],
      restaurant: config.restaurant
    };
  var template = Handlebars.compile(template);
  var html = template(memberSpecificConfig);

  var correctHtml =
  `<div>
    <h1>Jill</h1>
    <div>
      <p>Pizza R Us</p>
    </div>
  </div>`;
  it("has the right member name and restaurant name", function() {
    expect(html).toBe(correctHtml);
  });
});
