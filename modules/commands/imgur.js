module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ALVI",
    description: "Lấy link ảnh imgur",
    usePrefix: true,
    commandCategory: "Công cụ",
    usages: "[reply]",
    cooldowns: 5,
	dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('[⚜️]→ আপনার ফটো লিংক', event.threadID, event.messageID)
const res = await axios.get(`https://sandipapi.onrender.com/imgur?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
    return api.sendMessage(`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n${img}\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`, event.threadID, event.messageID);
	
}