//Definition of packages
//Main package
const discord = require("discord.js");
//File readers
const { readdirSync } = require("fs");
const { join } = require("path");
//Config files
const { TOKEN, PREFIX } = require("./config.json");
const config = require("./config.json");
//Bot
const intents = new discord.Intents(32767);
const client = new discord.Client({ intents, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

//On ready event
client.on("ready", async () => {
  console.log("Bot is ready!");
  client.user.setActivity(
    `lets gen some things yo?`,
    { type: "PLAYING" }
  );
    client.user.setStatus("idle");
});
//On warn/errors event
client.on("warn", info => console.log(info));
client.on("error", console.error);

//Collections and maps
client.commands = new discord.Collection();
client.prefix = PREFIX;

//Loading files thru FS package
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file =>
  file.endsWith(".js")
);
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file));
  client.commands.set(command.name, command);
}

//On message event
client.on("message", message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
    
  if (message.content.startsWith(PREFIX)) {

    const args = message.content
      .slice(PREFIX.length)
      .trim()
      .split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
      return;
    }

    try {
      client.commands.get(command).execute(client, message, args);
      
    } catch (err) {
      //On error print output
      console.log(err);
    }
  }
});
client.login(TOKEN);
