const Eris = require('eris');
const clientOptions = {
    intents: [
        "guilds",
        "guildMessages"
    ]
};
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
const playCommand = "k!play";
const prefix = "k!"
const prefixbeta = "kbeta!"
const update = "update"

  
bot.on('ready', () => {                                // When the bot is ready
    console.log('Zalogowano! Bot działa');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('k!witaj')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, 'Witaj!\nJestem Nowy!\n\n\nKomendy są dostępne pod tą wiadomością! A na serwerze wpisz: k!komendy\n\nKod źródłowy: https://glitch.com/embed/#!/embed/clear-tartan-gecko?path=server.js&previewSize=100');  // Send a message in the same channel with "damn it"
    }
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('k!komendy')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, '=====**KOMENDY**=====\n\n\nLista komend jest pod: https://kromkowo-pl.glitch.me/komendy.html');  // Send a message in the same channel with "damn it"
    }
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('k!secret')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, 'Odkryłeś EasterEgga');  // Send a message in the same channel with "damn it"
    }
});

bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes === prefix + "boost") {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, '=====**NAGRODY ZA ULEPSZANIE**=====\n\n\n**2 ULEPSZENIA**\n Ranga VIP\n\n\n**15 ULEPSZEŃ**\n 3000000$ w ekonomi\n\n\n**30 ULEPSZEŃ**\nTrial MODERATORA!!');  // Send a message in the same channel with "damn it"
    }
});
  
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('@MBot#0291')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, '=====**WSCIEKŁY!!!**=====\n:angry:');  // Send a message in the same channel with "damn it"
    }
});
  
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('kbeta!')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, '=====**BŁĄD**=====\nNie wykryto w informacjach:\n\n\n```eris.bot.beta.kbeta```\n\n\nDla osób nie rozumiejących:\n\nNie wykryto permisji (403)');  // Send a message in the same channel with "damn it"
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content.startsWith(playCommand)) { // If the message content starts with "!play "
        if(msg.content.length <= playCommand.length + 1) { // Check if a filename was specified
            bot.createMessage(msg.channel.id, "Please specify a filename.");
            return;
        }
        if(!msg.channel.guild) { // Check if the message was sent in a guild
            bot.createMessage(msg.channel.id, "This command can only be run in a server.");
            return;
        }
        if(!msg.member.voiceState.channelID) { // Check if the user is in a voice channel
            bot.createMessage(msg.channel.id, "Nie jesteś na kanale głosowym");
            return;
        }
        const filename = msg.content.substring(playCommand.length + 1); // Get the filename
        bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => { // Join the user's voice channel
            bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message); // Notify the user if there is an error
            console.log(err); // Log the error
        }).then((connection) => {
            if(connection.playing) { // Stop playing if the connection is playing something
                connection.stopPlaying();
            }
            connection.play(filename); // Play the file and notify the user
            bot.createMessage(msg.channel.id, `Teraz gram: **${filename}**`);
            connection.once("end", () => {
                bot.createMessage(msg.channel.id, `Zakończono **${filename}**`); // Say when the file has finished playing
            });
        });
    }
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes === prefix + "ping") {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, '🏓 Pong!\n Mój ping: **42ms**\n\nTwój ping: **NIE WIEM :)**');  // Send a message in the same channel with "damn it"
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "info") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Informacja", // Title of the embed
                description: "Informacje o **MNIE**\n\n\nStworzył mnie: MrBartek123#0001\n\n**ZESPÓŁ**\n\n**POMYSŁY NA BOTA** == Pechowy Podróżnik\n\n**NAZWA** == MrBartek123\n\n**FOTOGRAFIA LOGA** MrBartek123\n\n**Kod bota** == MrBartek (narazie tylko on)",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Hosting bota:", // Field title
                        value: "https://glitch.com", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Silnik bota",
                        value: "Eris.JS",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021"
                }
            }
        });
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "eegg") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Informacja", // Title of the embed
                description: "MADE AT GLITCH!!!!",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Made by:", // Field title
                        value: "https://glitch.com", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Witaj!",
                        value: msg.author.username,
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021"
                }
            }
        });
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "report") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Zgłoś osobę", // Title of the embed
                description: "Odpowiedz pod tą wiadomością nick osoby, a @MrBartek123#0001 to sprawdzi!",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Poinformowano:", // Field title
                        value: "@MrBartek123#0001", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Komenda otwrta przez:",
                        value: msg.author.username,
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021"
                }
            }
        });
    }
});

bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "invite") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Zaproś mnie!", // Title of the embed
                description: "Oto link do dodania mnie!\n\n",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Link normalny:", // Field title
                        value: "[Kliknij tutaj!](https://discord.com/api/oauth2/authorize?client_id=783996314391937024&permissions=33019968&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot).", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Dziękuje Ci",
                        value: msg.author.username,
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021"
                }
            }
        });
    }
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === update + "note") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "UPDATE NOTE", // Title of the embed
                description: "Wersja BOTA: k!14442412\nDodane funkcje:\n\n* Dodano moduł bota: GuildScan - AutoMod 4.12\n\n*W planach:*\n\n Zmiana prefixu przez osobę, więcej funkcji",
                author: { // Author property
                    name: "MBot"
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Co naprawiono?", // Field title
                        value: "***Kod komend wcześniej wyglądał tak:\n\nk!tresc\nA teraz będzie wyglądać tak:\n\nprefix + tresc***", // Field
                        inline: false // Whether you want multiple fields in same line
                    },
                    {
                        name: "Uruchom bota (wrazie wyłączenia)",
                        value: "[Kliknij tutaj!](https://clear-tartan-gecko.glitch.me/server.js).",
                        inline: false
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021" 
                }
            }
        });
    }
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefixbeta + "apply") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Dodano role w kodzie bota!", // Title of the embed
                description: "```Dodano role: eris.apply.discord.beta.bot.beta```",
                author: { // Author property
                    name: "MBot"
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Uruchom bota (wrazie wyłączenia)",
                        value: "WKRÓTCE",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Komunikaty - Nazwa robocza || MBot 2021" 
                }
            }
        });
    }
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "language") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Hello!", // Title of the embed
                description: "You are from other country?\n\n**NOW** you can use MBot in your main language!\n\n**Languages available:**\n\n**(Comming soon) English**\n\n**(Comming soon) Espaniol**\n\n**Polski**\n\n**(Comming soon) Deutsche**",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "How to choose your language?", // Field title
                        value: "Type: k!choose-**YOUR LANGUAGE NAME**", // Field
                        inline: true // Whether you want multiple fields in same line
                    },
                    {
                        name: "Thanks for using MBot",
                        value: "See YouTube channel: graczpotrafiPL to see DevLog (on DevLogs there will be an overview of bot commands and operation)",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Bot engine:\nEris\n**AND**\n\nJavaScript"
                }
            }
        });
    }
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "choose-polski") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Komendy w języku polskim", // Title of the embed
                description: "k!komendy - List komend w języku polskim",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Dziękuje za używanie MBot",
                        value: "Zobacz DevLog na kanale graczpotrafiPL aby się dowiedzieć o aktualizacjach bota i nie tylko!",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Bot engine:\nEris\n**AND**\n\nJavaScript"
                }
            }
        });
    }
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "choose-polski") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Komendy w języku polskim", // Title of the embed
                description: "k!komendy - List komend w języku polskim",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Dziękuje za używanie MBot",
                        value: "Zobacz DevLog na kanale graczpotrafiPL aby się dowiedzieć o aktualizacjach bota i nie tylko!",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Bot engine:\nEris\n**AND**\n\nJavaScript"
                }
            }
        });
    }
});
bot.on("ready", () => { // When the bot is ready
    console.log("Loaded GuildSkan - AutoMod 4.12"); // Log "Ready!"
});

bot.on("guildCreate", (guild) => { // When the client joins a new guild
    console.log(`Nowa rozmowa: ${guild.name}`);
});

bot.on("messageCreate", (msg) => { // When a message is created
    console.log(`Nowa wiadomość: ${msg.cleanContent}`);
});

// This event will never fire since the client did
// not specify `guildMessageTyping` intent
bot.on("typingStart", (channel, user) => { // When a user starts typing
    console.log(`${user.username} pisze na ${channel.name}`);
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "upd1ate") { // If the message content is "!embed"
        bot.createMessage(msg.channel.id, {
            embed: {
                title: "Aktualizowanie...", // Title of the embed
                description: "Wkrótce bot zostanie zresetowany!",
                author: { // Author property
                    name: msg.author.username,
                    icon_url: msg.author.avatarURL
                },
                color: 0x008000, // Color, either in hex (show), or a base-10 integer
                fields: [ // Array of field objects
                    {
                        name: "Dziękuje za używanie MBot",
                        value: "bot.refresh",
                        inline: true
                    }
                ],
                footer: { // Footer text
                    text: "Bot engine:\nEris\n**AND**\n\nJavaScript",
                     reactionButtons: [ // Add reaction buttons to the command
        {
            emoji: "⬅",
            type: "edit",
            response: (msg) => { // Reverse the message content
                return msg.content.split().reverse().join();
            }
        },
        {
            emoji: "🔁",
            type: "edit", // Pick a new pong variation
            response: ["Pang!", "Peng!", "Ping!", "Pong!", "Pung!"]
        },
        {
            emoji: "⏹",
            type: "cancel" // Stop listening for reactions
        }
    ],
    reactionButtonTimeout: 30000 // After 30 seconds, the buttons won't work anymore
                }
            }
        });
    }    
});
bot.on("messageCreate", (msg) => { // When a message is created
    if(msg.content === prefix + "restart") { // If the message content is "!ping"
        bot.createMessage(msg.channel.id, "Zresetowano w **${Math.floor(client.ping)}**ms")
        }
                                                                                             });
bot.connect();                                         // Get the bot to connect to Discord