const fs = require("fs");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gen",
    async execute(client, message, args) {

        const genchannel = "1059464838738362460";

        if (message.channel.id === genchannel) {

                if (!args[0]) {
                    return message.reply("Please provide a service!");
                }
                const filePath = __dirname + "/" + args[0] + ".txt";
                //if(args[0] != __dirname + "txt") return message.reply("Couldnt found: " + args[0] + " in our Database!")

                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        if(position == -1) {
                        
                         let outofstock = new MessageEmbed()
                         .setTitle("We are out of stock!")
                         .setDescription("No more accounts left on database!")
                         .setFooter("Any issues/account suggetions? DM Me")
                         .setColor("RED")

                        return message.channel.send({ embeds: [outofstock] });
                        }
                        message.author.send(firstLine);

                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                
                                let embed = new MessageEmbed()
                                .setTitle("Account generated!")
                                .setDescription("Please check out your DM messages")
                                .setFooter("Any issues? DM Me")
                                .setColor("GREEN")

                                message.channel.send({ embeds: [embed] });
                                
                                if (err) {
                                    console.log(err);
                                }
                            });

                        } else {
                            message.channel.send({content: "Out of stock!"});
                        }
                    } else {
                       
                        let embed2 = new MessageEmbed()
                        .setTitle("Service cannot be found!")
                        .setDescription("Check out, maybe it's a typo?")
                        .setFooter("Any issues? DM Me")
                        .setColor("RED")

                        message.channel.send({ embeds: [embed2] });
                        return;
                    }
                });
            } else {
                message.channel.send(":x: | Damn bro you got the wrong channel!")
            }
    }
}
