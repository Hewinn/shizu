const Discord = require("discord.js"); //основа
module.exports.run = async (bot, msg, args) => { 
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    msg.delete();
    try {
        let embed = new Discord.RichEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL) //автор
            .setTitle(`${bot.user.username} помощь в коммандах`) //тайтл
            .setColor(0xf8f105) //цвет полоски
            .setThumbnail(bot.user.avatarURL) //маленькая картинка справа текста
            .setDescription("Вот мои комманды для админов: \n \n `^ahelp` - комманда для помощи админам\n`^reboot` - комманда перезагрузки бота\n`Shizu уничтожить` - комманда для битвы\n `^prune число` - комманда для удаление сообщений.") //описание
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
    name: "hsys" //комманда, название модуля
};