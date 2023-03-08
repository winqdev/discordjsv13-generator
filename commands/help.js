const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    execute(client, message, args) {

     let embed = new MessageEmbed()
     .setTitle(":question: Help Arrived!")
     .setDescription(`:musical_keyboard: | Commands \n\n **-gen** - Allows you to generate some accounts! \n **-stock** - Just allows to see stock, huh`)
     .setColor("RANDOM")
     .setFooter("Developed by Winq | Beta Release!")

     message.channel.send({ embeds: [embed]})

    }
}