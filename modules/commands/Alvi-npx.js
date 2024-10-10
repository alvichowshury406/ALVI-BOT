const axios = require("axios");
const fs = require("fs");
const request = require("request");

const link = [
  "https://i.imgur.com/vxCDlNN.mp4",
  "https://i.imgur.com/ez6Yq9h.mp4",
  "https://i.imgur.com/cIY4Fq5.mp4",
  "https://i.imgur.com/S7Unrvm.mp4",
  "https://i.imgur.com/V4ZATA5.mp4",
  "https://i.imgur.com/wrUU3Dy.mp4",
  "https://i.imgur.com/y6ObvT3.mp4",
  "https://i.imgur.com/jdIdLYo.mp4",
  "https://i.imgur.com/RAxJxRQ.mp4",
  "https://i.imgur.com/h5CCP73.mp4",
  "https://i.imgur.com/lub1znh.mp4",
  "https://i.imgur.com/QH3AWQS.mp4",
  "https://i.imgur.com/gfbjgtP.mp4",
  "https://i.imgur.com/lmfiBRp.mp4",
  "https://i.imgur.com/vHmIR2a.mp4",
  "https://i.imgur.com/PIHFTTz.mp4",
  "https://i.imgur.com/BQOw4V2.mp4",
  "https://i.imgur.com/Is9sLgx.mp4",
  "https://i.imgur.com/FkB05ez.mp4",
  "https://i.imgur.com/ZHFe1XF.mp4"
];

module.exports.config = {
  name: "😒",
  version: "1.0.0",
  hasPermission: 0,
  credits: "ALVI",
  description: "",
  usePrefix: true, 
  commandCategory: "no prefix", 
  usages: "😒",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.startsWith("😒")) {
    const rahad = [
      "_ওই দিকে কি দেখো এ দিকে দেখো..!🫂😍",
      " উম্মম্মমমমমমহহহ..বেবি ওই দিকে কি 😒"

    ];
    const rahad2 = rahad[Math.floor(Math.random() * rahad.length)];

    const callback = () => api.sendMessage({
      body: `╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n${rahad2}\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);

    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😒"] === "undefined" || data["😒"]) data["😒"] = false;
  else data["😒"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["😒"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};