module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Kanichi",
    description: "Leave the group",
    usePrefix: true,
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nভালোবাসার মা রে ৩৬৫ দিন ষুদি😾🖕🤖_____BOSS _ তুমি থাকো আমি চলে গেলাম🥺\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯"));
  }