module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart Bot",
  usePrefix: true,
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`╭──────────────➣
│𝗠𝗥.𝗔𝗟𝗩𝗜 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Trying To Restart...♻️
│━━━━•🔰•━━━━┓
│❖Restarting: in 20's
│
│
│ ╔══╦╦╗─╔╦══╗
│ ║╔╗║║╚╦╝╠║║╝
│ ║╠╣║╚╗║╔╬║║╗
│ ╚╝╚╩═╩═╝╚══╝
│	     Restarted..
│			 🄱🄾🅃
│  Bot by ALVI
│━━━━•♻️•━━━━┛
│𝗠𝗥.𝗔𝗟𝗩𝗜 𝗦𝗘𝗥𝗩𝗘𝗥 is
│Successfully Restarted
╰──────────────➣`, threadID, () => process.exit(1));
}