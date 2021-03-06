const { Command } = require('./../../classes/Command.js');

module.exports = class CleasWarningsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear-warns',
            aliases: ["c-w"],
            group: 'admin',
            memberName: 'clear-warns',
            description: 'Clears all the warns for an user',
            examples: ['clear-warns @AnnoyingGuy'],
            args: [
              {
                key: "member",
                prompt: "who do you want to clear the warns of?",
                type: "member"
              }
            ]
        });
    }

    run(msg, { member }) {
      if (!this.client.isOwner(msg.author)
          && !msg.member.roles.has("481492274333876224")
          && !msg.member.roles.has("481492388020486171")) return msg.reply("you don't have the permission to use this!");
      if (member.user.bot) return msg.reply("bots don't have to be warned, so don't have warnings!");
      this.client.warns.delete.run(member.user.id, msg.guild.id);
      msg.say(":ok: User warnings cleared!");
    }
};