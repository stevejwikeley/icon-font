# Icon Font setup	 

Only tested on OSX
Required:
brew install ttfautohint fontforge --with-python
Then run:

SUDO NPM Install

Adding a new icon:

Add svg icon to SRC folder 
Add 

Code point to the Gruntfile.js (check online)

'icon-name' : 0xE060 (Using PUA codes incrimentaly)

Search for PUA code in http://unicode-table.com/en/search/?q=F101 to get the character code

Paste this at the bottom of the template file in the div id="character-list" 


## To build the font; 

In command line run grunt task:

Grunt Build


Take the TTF and convert to OTF in Fontographer

You're done!


Follow instructions from here:

https://github.com/sapegin/grunt-webfont for Windows

npm install grunt-webfont --save-dev
Then install ttfautohint

Then install fontforge.

Download and install fontforge.
Add C:\Program Files (x86)\FontForgeBuilds\bin to your PATH environment variable.





