module.exports.config = {
  name: "onbot",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "HTHB",
  description: "Bật Bot.",
  usePrefix: true,
  commandCategory: "AdminBot",
  cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n চলে এসেছি আমি আলভী বট তোমাদের মাঝে_🤭 \n╰──────•◈•───────╯",event.threadID, () =>process.enter(0))
