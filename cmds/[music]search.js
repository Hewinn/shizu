  
const {MessageEmbed} = require("discord.js");
const { validateURL } = require("ytdl-core");
    const ytdl = require("ytdl-core")
const { YOUTUBE_API_KEY } = require("./json/config.json");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

module.exports.run = async (bot, message, args) => { 
    if (!args.length)
      return message.reply(`Usage: ${message.bot.prefix}${module.exports.name} <Video Name>`).catch(console.error);
    if (message.channel.activeCollector)
      return message.reply("A message collector is already active in this channel.");
    if (!message.member.voice.channel)
      return message.reply("You need to join a voice channel first!").catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new MessageEmbed()
      .setTitle(`**Выбери песню!**`)
      .setDescription(`Результаты: ${search}`)
      .setColor("#F8AA2A");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      var resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /(^[1-9][0-9]{0,1}$)/g;

        return pattern.test(msg.content) && parseInt(msg.content.match(pattern)[0]) <= 10;
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ["time"] });
      const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;

      message.channel.activeCollector = false;

      const urlValid = response.test(args[0]);


      const url = args[0];      
      
      var info = ytdl.getInfo(args[0]);
      
      var options = { seek: 0, volume: 1};
       
      var stream = ytdl(args[0], {filter: "audioonly"})
      
      connection.play(stream, options)
      .on('finish', () => {
          voiceChannel.leave()
      })
      .on('error', error => {
          console.log(error)
      })


      resultsMessage.delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
    }
  }


module.exports.help = { //настройка модуля
    name: `search` //комманда, название модуля
};