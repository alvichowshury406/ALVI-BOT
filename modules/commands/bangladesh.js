const fs = require("fs");
module.exports.config = {
	name: "bd",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "  𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈", 
	description: "hihihihi",
	commandCategory: "ALVI",
  usePrefix: true,
	usages: "Bangladesh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bangladesh")==0 || event.body.indexOf("bd")==0 || event.body.indexOf("Bd")==0 || event.body.indexOf("🇧🇩")==0) {
		var msg = {
				body: "╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n🖤«┄┅════❁🇧🇩❁════┅┄»🤍                «🐰✨ 𝘽𝘼𝙉𝙂𝙇𝘼𝘿𝙀𝙎𝙃 𝙊𝙐𝙍 𝘽𝙀𝘼𝙐𝙏𝙄𝙁𝙐𝙇 𝘾𝙊𝙐𝙉𝙏𝙍𝙔🇧🇩 :)>(🧡                        𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈                   •┄┅════❁🇧🇩❁════┅┄•                    «••ᗩしᐯᏆ••»                      𝐏𝐫𝐞𝐟𝐢𝐱 : « / »                          🅴🆅🅴🅽🆃 :«🇧🇩»                       🄰🄻🅅🄸 🄱🄾🅃\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯",
				attachment: fs.createReadStream(__dirname + `/noprefix/bd.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇧🇩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }