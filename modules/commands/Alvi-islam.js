module.exports.config = {
  name: "🙂",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ALVI",
  description: "no prefix",
  usePrefix: false,
  commandCategory: "M H BD",
  usages: "🙂",
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
   var hi = ["‘𝗚𝗼 𝗯𝗮𝗰𝗸 𝘁𝗼 𝗔𝗟𝗟𝗔𝗛’–!!🤗💫 -‘𝗚𝗼𝗼𝗱 𝗳𝗼𝗿𝘁𝘂𝗻𝗲 𝘄𝗶𝗹𝗹 𝗿𝗲𝘁𝘂𝗿𝗻 𝘁𝗼 𝘆𝗼𝘂’-!🖤🌸\n‘তুমি!’তোমার!’রবের!’দিকে! ‘ফিরে!’যাও.!!🌼\n__’সফলতা!’তোমার!’দিকে! ‘ফিরবে.!!💗 \nIn-sha -Allah-🤲🌼",
"-নামাজ বাদ দিও না☺ \n-কারণ নামাজ তোমাকে সকল বিপদ থেকে রক্ষা করবে.!🥰🌸 \n-ইন-শা-আল্লাহ❤🤲",
"✿┼─🤗🦋🥀 \n•• 𝐈 𝐇𝐚𝐯𝐞 𝐍𝐨 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧 𝐀𝐛𝐨𝐮𝐭 𝐌𝐲 𝐥𝐢𝐟𝐞,🥰😇 \n𝐀𝐥𝐡𝐮𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐟𝐨𝐫 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠••💖🦋🥀\n✿┼─তুমি আল্লাহকে খুশি করো 🥰আল্লাহ তোমাকে খুশি করবেন 😍🦋🥀 \nআলহামদুলিল্লাহ 🥰",
"❥══❥🌺যদি কাঁদতেই হয় তাহলে,❥\n❥❥নামাজ পড়ে কাঁদো❥༊᭄ \n❥কারন,༊🍁 \nতোমার চোখের পানির মূল্য❥🥀 \n༊᭄❥┼আর কেউ না দিলেও \n🍁আল্লাহ দিবেন…..।🌺 \n𝙸𝚗 𝚂𝚑𝚊 𝙰𝚕𝚕𝚊𝚑🥰🥰 •︵🦋🌸ღ۵_❤️",
"༎ 𝐈 𝐝𝐨 𝐧𝐨𝐭 𝐤𝐧𝐨𝐰 𝐰𝐡𝐚𝐭 𝐢𝐬 𝐰𝐫𝐢𝐭𝐭𝐞𝐧 𝐢𝐧 𝐭𝐡𝐞 𝐝𝐞𝐬𝐭𝐢𝐧𝐲 \n༎ 𝐛𝐮𝐭 𝐈 𝐛𝐞𝐥𝐢𝐯𝐞 𝐭𝐡𝐚𝐭 𝐀𝐥𝐥𝐚𝐡 𝐝𝐨𝐞𝐬 𝐰𝐡𝐚𝐭 𝐇𝐞 𝐝𝐨𝐞𝐬 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐠𝐨𝐨𝐝🥀 \n..জানিনা ভাগ্যে কি লেখা আছে༉༎🦋🂡͜͡ \n..কিন্তু বিশ্বাস করি আল্লাহ্ যা করেন ভালোর জন্যই করেন༉🌸",
"✿┼─🤗🦋🥀 \n•• 𝐈 𝐇𝐚𝐯𝐞 𝐍𝐨 𝐂𝐨𝐦𝐩𝐥𝐚𝐢𝐧 𝐀𝐛𝐨𝐮𝐭 𝐌𝐲 𝐥𝐢𝐟𝐞,🥰😇 \n𝐀𝐥𝐡𝐮𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐟𝐨𝐫 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠••💖🦋🥀\n✿┼─তুমি আল্লাহকে খুশি করো 🥰আল্লাহ তোমাকে খুশি করবেন 😍🦋🥀 \nআলহামদুলিল্লাহ 🥰",
"💚🌻“আল্লাহ নসিবে অনেক কিছু রেখেছে প্রাপ্তির সময় হলে ঠিক পেয়ে যাব😊🦋 \n😊🦋_𝐈𝐧’𝐬𝐡𝐚’𝐀𝐥𝐥𝐚𝐡,,😊🦋",
"∙──༅༎﷽༎༅──∙\n─༊✾_ফজরের ও-ই ঠান্ডা পানি..\n\nসবার ভাগ্যে থাকে নাহ্..__🌺😌..🤍!༊✾",

"Successful-তো সেই দিন হবো..! \nযেদিন ‘পুলসিরাত’ পাড় করে ‘জান্নাতে’ যাবো..। 💚💚",
"আল্লাহর ভয়ে তুমি যা সব কিছু ছেড়ে দেবে-!🌸🥀\n_আল্লাহ্ তোমাকে তার চেয়ে আরো.❤️ \nউত্তম কিছু অবশ্যই দান করবেন...! \n\nআমিন …!😊🤲",

"─༅༎༅💙🌼🩷༅༎༅─\n\nনারী কালো হোক কিংবা সুন্দর,,,🌸🖤 হিজাবে🩷🪽নারী অসম্ভব সুন্দর’😇🌼 \n\n─༅༎༅💙🌼🩷༅༎༅─"
 ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1Zl_I96I_ItJMCO2tTjzKypH2hgv5bbmD",
    "https://drive.google.com/uc?id=1Zl0IyIK_hWvtDip1UW4kHcg9EuAGQdmZ",
    "https://drive.google.com/uc?id=1ZhtkY8ZQI3cybm_GSv7aSTC--Mx3aB2p",
    "https://drive.google.com/uc?id=1ZoHlB4898wKgfs9OEGBRdwOFVc2YhZW6",
    "https://drive.google.com/uc?id=1Zwg90Uest4IQViMiQB5bRYq5jJwitC6L",
    "https://drive.google.com/uc?id=1_8QKHZCblDgSwgYVx36h4P4v5gdrdGDZ",
    "https://drive.google.com/uc?id=1_BfZZxhimqFy70nNj7TFFLe6jH49cKVW",
    "https://drive.google.com/uc?id=1_KEz-3u7vP5sPFHsGNdfLsNoWP0aBatP",
    "https://drive.google.com/uc?id=1_PI6gtf-E0jrYv8n-k1s9YpsIC2AYxrk",
    "https://drive.google.com/uc?id=1aP50As3s7g4589WjuDjQs6n-8fw3RnRJ",
    "https://drive.google.com/uc?id=1agG9tp4pV0df0yK67DeKXr4imk8Cg3DH",
    "https://drive.google.com/uc?id=1qvT2dwO7dytupRRQcUdhDfHbqTFR21JI",
    "https://drive.google.com/uc?id=1qi_iL6FB_OVBVYw3HAWvnQgXBGtRrUO1",
    "https://drive.google.com/uc?id=1qspziP8dW7ksRvykkekZPZlFyLpGTeB5",
    "https://drive.google.com/uc?id=1qYDNiNGDw05GMEnffAx-wzAkNvB135Xv",
    "https://drive.google.com/uc?id=1qv8PRCjaTydXkILuZy5HUyI6wW4jtOW5",
    "https://drive.google.com/uc?id=1qkU11Pz0YM5YnkJUnqDj9l7o0Pk6LnO5",
    "https://drive.google.com/uc?id=1qZGJGq5dOLDPDB1H8TqC0RBi4X9zCFER",
    "https://drive.google.com/uc?id=1qx6DrMFbKl4j4e4BmkSZPjPe5HJX0aKF",
    "https://drive.google.com/uc?id=1qRWCfHjp-q2v73cqAhuKkmecrC4DWry",
    "https://drive.google.com/uc?id=1qwhnM75GeoKroHP2c1NOWcaUKlgIQUab",

 ]
   var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n ${know} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };