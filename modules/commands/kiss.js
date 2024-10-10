/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "kiss",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "DinhPhuc",
    description: "",
    usePrefix: true,
  commandCategory: "Love",
    usages: "[tag]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/`;
    const path = resolve(__dirname, 'cache', 'hon.png');
    if (!existsSync(dirMaterial + "")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/BtSlsSS.jpg", path);

}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache");

    let hon_img = await jimp.read(__root + "/hon.png");
    let pathImg = __root + `/hon_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    hon_img.resize(700, 440).composite(circleOne.resize(200, 200), 390, 23).composite(circleTwo.resize(180, 180), 140, 80);
    
    let raw = await hon_img.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, Currencies }) { 
    const fs = global.nodemodule["fs-extra"];
    const ae = ["╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n___🍓𝐒𝐦𝐢𝐥𝐞 𝐢𝐬 𝐦𝐢𝐧𝐞 𝐛𝐮𝐭.𝐫𝐞𝐚𝐬𝐨𝐧 𝐢𝐬 𝐲𝐨𝐮-<🦋💜\n\n●──•🦋⊰༊হাসিটা আমার কিন্তু কারনটা তুমি༊>-😊🌸💚🌺_🌻\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯","╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n︵ღ᭄🌺🌸༊࿐💙\n\n      ____ღ۵-🌺🦋“𝙉𝙚𝙫𝙚𝙧 𝙘𝙝𝙚𝙖𝙩 𝙨𝙤𝙢𝙚𝙤𝙣𝙚 𝙬𝙝𝙤 𝙘𝙡𝙤𝙨𝙚 𝙮𝙤𝙪𝙧 𝙚𝙮𝙚𝙨 𝙖𝙣𝙙 𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙞𝙣 𝙮𝙤𝙪 𝙗𝙚𝙘𝙖𝙪𝙨𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙖𝙧𝙚 ⧼𝙡𝙪𝙘𝙠𝙮⧽.🍂🌻\n\n     ____ღ۵-🌺🦋“যে আপনাকে চোখ বন্ধ করে বিশ্বাস করে তাকে কোনোদিন ঠকাবেন না কারণ এমন মানুষ ভাগ্যবানেরাই পেয়ে থাকে।🍂🌻\n\n︵ღ᭄🌺🌸༊࿐💙\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯"];
    const hc = Math.floor(Math.random() * 101) + 101;
    const rd = Math.floor(Math.random() * 10) + 1;
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    var one = senderID, two = mention[0];
  await Currencies.increaseMoney(event.senderID, parseInt(hc*rd));
  
  if (!two) return api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nআপনি কারে কিস করতে চান তারে মেনশন দেন...!!😘👨‍🍼\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯", threadID, messageID);
  else {
        return makeImage({ one, two }).then(path => api.sendMessage({ body: `${ae[Math.floor(Math.random() * ae.length)]}\n Horimism to you after being kissing is ${hc} %\n + ${((hc)*rd)} $`, attachment: fs.createReadStream(path)}, threadID, () => fs.unlinkSync(path), messageID));
  }
}