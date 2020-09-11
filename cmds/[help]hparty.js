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
            .setDescription("Вот мои комманды для развлечений: \n \n `^slap` - ударить кого-то\n`^neko` - показ неко тян фото\n`^foxgirl` - показ fox тян фото\n`^tickle` - кого-то защекотать\n`^smug` - показ фото с самодовольной емоцией\n`^poke` - потыкать кого-то\n`^pat` - погладить кого-то (＾• ω •＾)\n`^nekogif` - показ неко тян гифок\n`^hug` - обнять кого-то\n`^holo` - показ Холо фото\n`^feed` - покормить кого-то :3") //описание
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
    name: "hparty" //комманда, название модуля
};