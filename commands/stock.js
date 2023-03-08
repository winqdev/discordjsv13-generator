const { MessageEmbed } = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "stock",
    async execute(client, message, args) {

        const filePath = __dirname + "/" + "example.txt"; //File path

        var i;
        var count = 0; //Total Accounts in a txt file!

        //Steam
        fs.createReadStream(filePath)
        .on('data', function(chunk) {
    for (i=0; i < chunk.length; ++i)
      if (chunk[i] == 10) count++;
  })
  .on('end', function() {
    send(count);
  });

  function send(count) {
let embed = new MessageEmbed()
     .setTitle("Current Stock")
     .setDescription(`${count} total accounts`)
     .setColor("YELLOW")
     .setFooter("Developed by Winq | Beta Release!")

     message.channel.send({ embeds: [embed] })
  }

    }
}
