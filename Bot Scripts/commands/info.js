exports.run = (client, user, guild) => {

    if (message.mentions.users.size < 1) return message.reply('You must mention a user to grab the info of.').catch(console.error);

     let info = message.guild.member(message.mentions.users.first());
     let user = message.mentions.users.first();
     let guild = guild.member;
     if(!info) {
         return message.reply('That user does not seem to be valid.');

 const embed = new bot.methods.Embed()
  .setTitle(' ')
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Information')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Avatar URL:', `${user.avatarURL}`)
  .addField('User ID:', `${user.id}`)
  .addField('User Roles:', `${member.roles.join(", ")}`)
  .addField('Nickname:', `${member.nickname}`);

return message.channel.sendEmbed(embed).catch(console.error);
      }
    }
  });
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 2
};

exports.help = {
name: 'info',
description: 'Grabs information of the user.',
usage: 'info [user]'
};
