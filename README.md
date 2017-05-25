# HTML Email Template
###### Email template for Family Friday dinner followup
---
## Usage
To use this program on your computer:
- Fork this repository to your computer.
- Once you have navigated to the folder run   `npm install.`
- Using the data in this folder run ` node generate_email.js template.html payload.json `

You can update the template and payload, or have multiple of each and combine them differently (for example update the payload every week or have special templates for festive occasions.) Just make sure that the names matches.

## Notes
---
#### Styling
This email Works well in many big marketing services like MailChimp, but in some cases the styling needs to be inline. We can use this [CSS inliner ](https://putsmail.com/inliner) to easily get all the css inline.

I've chosen not to do that because separating css and html makes it easier to work with for all parties

#### Links
As this is merely an example, none of the links are gonna work.

## Tests
---
To run tests, run `jasmine`

> By: Frida Sjöholm
