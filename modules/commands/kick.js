module.exports.config = {
  name: "kick",
  version: "1.0.1", 
  hasPermssion: 1,
  credits: "Mirai Team",
  description: "Clear the person you need to remove from the group by tag",
  usePrefix: true,
  commandCategory: "System", 
  usages: "[tag]", 
  cooldowns: 0,
};

module.exports.languages = {
  "vi": {
    "error": "Đã có lỗi xảy ra, vui lòng thử lại sau",
    "needPermssion": "Cần quyền quản trị viên nhóm\nVui lòng thêm và thử lại!",
    "missingTag": "Bạn phải tag người cần kick"
  },
  "en": {
    "error": "Error! An error occurred. Please try again later!",
    "needPermssion": "╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nকুত্তার বাচ্চা এডমিন দে\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯",
    "missingTag": "You need tag some person to kick"
  }
}

module.exports.run = async function({ api, event, getText, Threads }) {
  var mention = Object.keys(event.mentions);
  try {
    let dataThread = (await Threads.getData(event.threadID)).threadInfo;
    if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nকিক খা পতিতার বাচ্চা...!😠\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯ "), event.threadID, event.messageID);
    if(!mention[0]) return api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nজানু কিক দেওয়ার জন্য ওই পতিতার বাচ্চার নাম মেনসন দেও..!😘\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯ ",event.threadID);
    if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
      for (const o in mention) {
        setTimeout(() => {
          api.removeUserFromGroup(mention[o],event.threadID) 
        },3000)
      }
    }
  } catch { return api.sendMessage(getText("error"),event.threadID) }
}