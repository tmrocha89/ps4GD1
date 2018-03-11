var games = [];

var Game = function(name, links){

	this.name = name;
	this.links = [];
	
	
	this.setLinks = function(links){
		for(var j=0; j < links.length; j++){
			this.links.push({name: links[j].innerText, link: links[j].href});
		}
	}
	
	this.print = function(printer){
		if(!printer){
			printer = console.log;
		}
		printer(this.name);
		var textLinks = "";
		for(var i=0; i < this.links.length; i++){
			if(this.links[i].name.indexOf("Download") > -1){
				printer("Alternative!!");
				textLinks = "";
			}
			textLinks += this.links[i].link +"\n";
		}
		printer(textLinks);
	};
	
	this.setLinks(links);

};

var game = function(name){
	for(var i=0; i < games.length; i++){
		if(games[i].name.toLowerCase().indexOf(name.toLowerCase()) > -1){
			games[i].print();
		}
	}
};


var table = document.getElementsByTagName("table")[0];
var rows = table.getElementsByTagName("tr");
for(var i=1; i < rows.length; i++){
	var row = rows[i];
	var columns = row.getElementsByTagName("td");
	var nameCol = (columns[3].getElementsByTagName("font")[0]).innerText;
	var links = columns[4].getElementsByTagName("a");
	games.push(new Game(nameCol, links));
	
}

