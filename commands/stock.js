const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "stock",
    async execute(client, message, args) {

        const filePath = __dirname + "/" + "steam.txt";
        const filePath2 = __dirname + "/" + "tunnelbear.txt";
        const filePath3 = __dirname + "/" + "netflix.txt";
        const filePath4 = __dirname + "/" + "burgerking.txt";
        const filePath5 = __dirname + "/" + "roblox.txt";

        var i;
        var count = 0;
        var countt = 0;
        var counttt = 0;
        var countttt = 0;
        var counttttt = 0;

        //Steam
        fs.createReadStream(filePath)
        .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) count++;
  })
  .on('end', function() {
    outputsteam(count);
  });
//Tunnelbear
function outputsteam() {
 fs.createReadStream(filePath2)
        .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) countt++;
  })
  .on('end', function() {
    outputtunnel(countt)
  });
}
//Netflix
function outputtunnel() {
  fs.createReadStream(filePath3)
        .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) counttt++;
  })
  .on('end', function() {
       outputnetflix(counttt)
  });
}

function outputnetflix() {
    fs.createReadStream(filePath4)
        .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) countttt++;
  })
  .on('end', function() {
       outputburger(countttt)
  });
}

function outputburger() {
    fs.createReadStream(filePath5)
    .on('data', function(chunk) {
for (i=0; i < chunk.length; ++i)
  if (chunk[i] == 10) counttttt++;
})
.on('end', function() {
   outputroblox(counttttt)
});
}

function outputroblox() {
let embed = new MessageEmbed()
     .setTitle("Current Stock")
     .setDescription(`Steam: ${count}\n Tunnelbear: ${countt}\n Netflix: ${counttt}\n Burgerking: ${countttt}\n Roblox: ${counttttt}`)
     .setColor("YELLOW")
     //.setImage("https://www.pngplay.com/wp-content/uploads/13/Steam-Logo-PNG-HD-Quality.png")
     .setFooter("Developed by Winq | Beta Release!")

     message.channel.send({ embeds: [embed] })
}

    }
}