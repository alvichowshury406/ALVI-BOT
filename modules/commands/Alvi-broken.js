module.exports.config = {
  name: "💔",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ALVI",
  description: "random",
  usePrefix: false,
  commandCategory: "Alvi",
  usages: "💔",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["ಠ_ಠ━☆ﾟ.*･｡ﾟ\nবাহিরটা হাসলে 🙂ভিতর টা ক্ষয়✿ಠ益ಠবুঝলে প্রিয় 🥀😊\n-গুছিয়ে গল্প বলা যায় অনূভুতি নয়😞☹️", "°ღ۵-🌺🦋𝗗𝗿𝗲𝗮𝗺𝘀 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲𝗱 𝗶𝗻 𝘀𝗶𝗹𝗲𝗻𝗰𝗲 𝗮𝗿𝗲 𝘃𝗲𝗿𝘆 𝗯𝗲𝗮𝘂𝘁𝗶𝗳𝘂𝗹!😊🤍\n\n°ღ۵-🌺🦋—নিরব হয়ে অনুভব করা স্বপ্নগুলো অনেক সুন্দর!😊🤍", "•──────༏༏🌼🌻🌸༏༏──────•\n—কিছু মানুষ আছে..!!🙂🙁\n—আপনার সাথে কিছুদিন কথা বলবে…!!🙂\n—মায়ায় জড়াবে…!!💔😔\n—তারপর হঠাৎ একদিন ছেড়ে চলেযাবে..!!💔🥀🙃💔\n•──────༏༏মিথ্যা মায়া༏༏──────•", "-🦋🤍🥀বেশি মূল্য দিলে নিজের মূল্যটা কমে যায় 😓💔 \n–❝||Trust Me 💚🌺\n-.|| ভালোবাসা হোক কিংবা বন্ধুত্ব ❞💛🌸❝\n|| Better option পেলে সবাই ছেড়ে চলে যায় 🖤🌼", "–অতিরিক্ত মায়া মানেই অতিরিক্ত যন্ত্রণা….! 😥🌸✌️\n★এই শহরে,শুধু ‘ছেড়ে যাওয়ার গল্প শুনেছি…———\n★——–💔🙂🤟💜\nকখনো ফিরে আসার—–!গল্প \n—–🙂🥀———-শুনিনি——–\n★★★★🙂🥀🦋💔", "𝄞⋆⃝-𝘿𝙤𝙣’𝙩 𝙨𝙢𝙞𝙡𝙚 𝙀𝙫𝙚𝙣 𝙩𝙝𝙚 𝙥𝙞𝙘𝙩𝙪𝙧𝙚♡𝄞⋆⃝༅\n༎𝙞𝙨𝙣’𝙩 𝙥𝙧𝙚𝙩𝙩𝙮- 𝙏𝙝𝙚𝙣𝄞♡ 𝙡𝙞𝙛𝙚 𝙞𝙨 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡 ⋆⃝𝄞♡ ‌\n-𝙬𝙞𝙡𝙡 𝙗𝙚 ༎𝙝𝙤𝙬 ⋆⃝𝄞♡𝄞⋆\n\n‌‌-না হাসলে༅༎তো༅༎ছবিও♡𝄞⋆⃝༅༎সুন্দর হয় না\n-তাহলে𝄞♡জীবন༅༎সুন্দর ⋆⃝𝄞♡‌ \n-হবে ༎কিভাবে ⋆⃝𝄞♡", "💜🔐🌈🐰💚𝗜𝗻 𝘁𝗵𝗶𝘀 𝗖𝗶𝘁𝘆 𝗣𝗲𝗼𝗽𝗹𝗲 𝗗𝗼𝗻’𝘁💜🍬🖇️𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱 𝗘𝗺𝗼𝘁𝗶𝗼𝗻𝘀🐲𝗧𝗵𝗲𝘆 𝗢𝗡𝗹𝘆 𝗹𝗼𝗼𝗸 𝗳𝗼𝗿 𝗕𝗲𝗮𝘂𝘁𝘆:-)🌼🍒✨ \n\n🐹-! <—’এই শহরে মানুষ গুলো আবেগ বুঝেনা খোঁজে শুধু সৌন্দর্য.!”>3💜🐰🥺-! :\n🌈✨-! 🍒🖇️✨__", "🦋🥀•••🌺💚🌺~এই ব্যস্ত শহরটা যেমন ছিল তেমনিই থাকবে……🌻💜\n~শুধু বদলে যাবে কিছু গল্প…..🙂🖤🌺🦋🥀\n•••🌺💚🌺.- হারিয়ে ফেলেছি মানসিক শান্তি!🙂🥹ツ\n࿐❝༆কারো আলোকিত শহরে হাটতে চাইনাツ࿐🙂\n━━━━━━ ⊙ ━━━━━━🌻🌸🍀ツ \n࿐❝নিখোঁজ হয়ে থাকতে চাইআমি আমার শহরツ࿐”❝🙂"
  ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/Kd7tZWz.mp4",
  "https://i.imgur.com/W9R7hLv.mp4",
  "https://i.imgur.com/W9R7hLv.mp4",
  "https://i.imgur.com/n6NVV6K.mp4",
  "https://i.imgur.com/TifIlG5.mp4",
  "https://i.imgur.com/S8nfxx7.mp4"
  
  ];
   var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n ${know} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };