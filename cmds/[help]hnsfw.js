const Discord = require("discord.js"); //основа
module.exports.run = async (bot, msg, args) => { 
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    msg.delete();
    try {
        let embed = new Discord.MessageEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL()) //автор
            .setTitle(`${bot.user.username} помощь в коммандах`) //тайтл
            .setColor(0xf8f105) //цвет полоски
            .setThumbnail(bot.user.avatarURL()) //маленькая картинка справа текста
            .setDescription("Вот мои NSFW комманды: \n \n `^bj`, `^femdom`, `^futanari`, `^gasm`, `^gs`, `^gsg`, `^hentai`, `^holop`, `^holoero`, `^kemonomini`, `^kitsune`, `^kuni`, `^lesbian`, `^nekog`, `^nekol`, `^trap`, `^yuri`") //описание
            .setFooter('🛠Бот ещё в разработке, есть предложения пишите всегда рад!') //строчка в конце
            .setTimestamp() //время отправления

        msg.channel.send({ //отправление
            embed //ембеда в чат
        });
    } catch (e) { //при ошибке
        msg.reply(e.message) //выводит сообщение в чат
    }
}
    

module.exports.help = { //настройка модуля
    name: "hnsfw" //комманда, название модуля
};