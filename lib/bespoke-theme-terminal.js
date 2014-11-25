var fs = require('fs');
var classes = require('bespoke-classes');
var insertCss = require('insert-css');

module.exports = function() {
    var css = fs.readFileSync(__dirname + '/tmp/theme.css', 'utf8');
    insertCss(css, { prepend: true });
    
    return function(deck) {
	classes()(deck);

	var parent = deck.parent;
	var content = document.createElement('div');
        content.className = 'bespoke-theme-terminal-content';
	var elem;
	while(parent.hasChildNodes()) content.appendChild(parent.firstChild);
	parent.appendChild(content);
	
    };
};