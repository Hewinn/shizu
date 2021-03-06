const Discord = require("discord.js");
const dateFormat = require("dateformat")
const date = new Date();
dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
const { success, fail } = require("./json/color.json");


module.exports.run = async (bot, message, args) => {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = message.guild.owner.user || {};

    const verificationLevels = require("./json/verlevel.json");
    let online = message.guild.members.cache.filter(
      (member) => member.user.presence.status !== "offline"
    );
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        "Информация об" +
          " " +
          message.guild.name +
          " " 
      )
      .setThumbnail(
        message.guild.iconURL({ format: "png", dynamic: true, size: 1024 })
      )
      .setFooter("Server ID:" + message.guild.id)
      .setColor(success)
      .addField(
        "❯ Участники",
        `• Создатель: ${owner.tag} (ID:${owner.id})\n
         • Участников: ${
           message.guild.members.cache.filter(
             (m) => m.presence.status !== "offline"
           ).size
         } Онлайн / ${message.guild.memberCount} Всего\n
         • Людей: ${
           message.guild.memberCount -
           message.guild.members.cache.filter((m) => m.user.bot).size
         }\n
         • Ботов: ${
           message.guild.members.cache.filter((m) => m.user.bot).size
         }`,
        true
      )
      .addField(
        "❯ Каналы",
        `• ${
          message.guild.channels.cache.filter((m) => m.type === "text").size
        } Текстовых, ${
          message.guild.channels.cache.filter((m) => m.type === "voice").size
        } Голосовых\n
        • AFK: ${message.guild.afkChannel.name}`,
        true
      )
      .addField(
        "❯ Другое",
        `• Дата создания: ${dateFormat(message.guild.createdAt)}\n
         • Дней после создания: ${days.toFixed(0)}\n
         • Регион: ${message.guild.region}\n
         • Уровень верификации: ${
           verificationLevels[message.guild.verificationLevel]
         }\n
         • Ролей: ${message.guild.roles.cache.size}\n
         • Эмодзи: ${message.guild.emojis.cache.size}`,
        true
      );

    message.channel.send(embed);
    message.delete();
  }

module.exports.help = {
    name: "serverinfo",
}