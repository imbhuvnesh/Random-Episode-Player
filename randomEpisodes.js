var path = require('path');
const fs = require('fs');
var cp = require("child_process");



var folder_name = '/home/bhuvenesh/Desktop/familyguy';

process.chdir(folder_name);

folder_items = [];
var i = 0;


fs.readdirSync(folder_name).forEach(file => {
    folder_items[i] = file;
    i++;
  });

var season_folder = folder_items[Math.floor(Math.random() * folder_items.length)];


process.chdir(season_folder);


var episodes = [];
var j = 0;

fs.readdirSync(folder_name+'/'+season_folder).forEach(file => {
    episodes[j] = file;
    j++;
  });

//   console.log(episodes);

var play = episodes[Math.floor(Math.random() * episodes.length)];


cp.exec('xdg-open ' + play, function (err, stdout, stderr) {
  if (err) {
      console.error(err);
      return;
  }
  console.log(stdout);
  process.exit(0);// exit process once it is opened
});
console.log("Playing: " + play);