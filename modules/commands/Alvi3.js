module.exports.config = {
  name: "আলভী",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ALVI CHOWDHURY",
  description: "ALVI VEDIO",
  usePrefix: false,
  commandCategory: "Hình ảnh",
  usages: "/আলভি",
  cooldowns: 5,
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
   var hi = ["•⎯͢⎯⃝🩷🌻🪽\n\n\n___ღ۵জীবনের প্রতিটা 'মুহূর্ত' নিজের সাথে মানি'য়ে নাও দেখবে জীবন-সুন্দর-|♡ 🩷🪽🪻\n\n\n•⎯͢⎯⃝🩷🌻🪽", "︵❛❛༎💚🌺-মজা করো তবে হুকুম না-🤟\n\n-আমি অনেক সরল কিন্তু সোজা না-😴🫰", "\n\n🌺𝐁𝐎𝐓 𝐖𝐎𝐍𝐄𝐑🌺: 😽👉𝐌𝐑. 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘👈😽 \n\n🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊🌻://https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN\n\n🌼𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏🌼: 𝐖𝐀.𝐌𝐄/+𝟔𝟎𝟏𝟑𝟓𝟔𝟒𝟕𝟖𝟑𝟔 \n\n🌸𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌🌸: 𝐓.𝐌𝐄/+𝟔𝟎𝟏𝟑𝟓𝟔𝟒𝟕𝟖𝟑𝟔\n\n🔰𝐀𝐓𝐓𝐈𝐓𝐔𝐃𝐄 𝐊𝐈𝐍𝐆🔰: -যতটা খারাপ আমারে মনে করতাছো-🫰🔥 -এতোটা খারাপ আমি আলভী না-🤙😼 -এক মিনিট-🤞🔰 -ইতিহাস উঠায় দেখো আমি  আলভী এতো টাও ভালো না-🤟😾🔪", "•─┼•||•❀•︵💚\n\n\n⎯⃝🩷  𝙴𝚔𝚝𝚊 𝚂𝚖𝚈❝যাকে দেখলে মানসিক শান্তি পেতাম, আজ তার জন্য'ই শান্ত হয়ে গেলাম…!💔\n🌻💜🖇️ ⎯͢⎯⃝🩷 \n\n\n•─┼•||•❀•︵💚", "༏༏♡__۵🐰💚🪶۵__♡༏༏\n\n\n\n__ღ༎𝗙𝗲𝗲𝗹 𝗧𝗵𝗶𝘀 𝗮𝗱𝗼𝘂𝘁 𝗟𝗶𝗻𝗲:)>(💜\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎⎯͢⎯⃝💚🪶🪄\n\n\n┼●💚🌺─┼সিংহকে নিজের শক্তি দিয়ে রাজা বলা হয়, জঙ্গলে কোনও নির্বাচন হয় না….!┼●💚🌺─┼\n\n\n┼●🌺─┼ ┼●🌺─┼\n\n\n\n___ღ࿐༅༎🖤🌻💚🐰", "~`-💛🦋✨\n\n\n->!!-𝐓𝐡𝐞  𝐁𝐢𝐠𝐠𝐞𝐬𝐭 𝐑𝐞𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐈 𝐠𝐨𝐭 𝐢𝐬-»!! 😇🔐\n\n «_| |_»❥︎আমাকে রাখতে না পারলে সেটা একান্তই তোমার  ব্যর্থতা..!!>🌸🫠\n\n\n-💛🦋✨", "⎯͢⎯⃝💚🪽 ༅༎•─\n\n\nসভ্যতা আমায়, সংবিধান -শেখায়…! \n-শিষ্য না, গুরু'ই সংস্করণ -দেখায়..! 🤙🏾🙂\n\n\n⎯͢⎯⃝💚🪽 ༅༎•─", "‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎─༅༎༅💙🌼🩷༅༎༅─\n\n\n•⎯͢⎯⃝💙🪽🪄আমি ছন্নছাড়া বদমেজাজি নিজেও তা মানি,তুমি শুধু থেকে যাও আমি ভালোবাসতেও জানি •⎯͢⎯⃝💙🪽🪄\n\n\n─༅༎༅💙🌼🩷༅༎༅─", "⎯͢⎯⃝💚🪽 ༅༎•─\n\n\n_তুমি༊༎ রক্ত༊༎ শোষণ ༊༎ছেড়ে ༊༎দাও༊༎আমি সিগারেট༊༎খাওয়া ༊༎ভুলে ༊༎যাবো__💔😸\n\n\n⎯͢⎯⃝💚🪽 ༅༎•─", "‼️༆༒︎চিঁড়িঁয়াঁ খাঁনাঁয়ঁ বাঁঘঁ দেঁখঁছোঁ”༒︎☠︎︎👹❓⛔\n❗᯾༒︎মাঁগাঁরঁ জঁঙ্গঁলেঁ দেঁখোঁ নাঁইঁ➪᯾༒︎ ❔⛔ \n✅✌︎☝︎༒︎এ্ঁই্ঁ আ্ঁই্ঁডি্ঁর্ঁ মা্ঁলি্ঁক্ঁ দেঁখঁছোঁ ✌︎☆༒︎❕❇️⛔\n⁉️❤︎☠︎︎༒︎মাঁগাঁরঁ তাঁর্ঁ༒︎☠︎︎༒︎Attitude দেঁখোঁ নাঁইঁ❌☞︎︎︎✌︎😈"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/ee8hrrR.mp4",
  "https://i.imgur.com/veLr9Yn.mp4",
  "https://i.imgur.com/NZNjnh4.mp4",
  "https://i.imgur.com/QQK9FJV.mp4",
  "https://i.imgur.com/mOjnoes.mp4",
  "https://i.imgur.com/ogh1CoW.mp4",
  "https://i.imgur.com/mNE6nQW.mp4",
  "https://i.imgur.com/RH0qC0s.mp4",
  ];
     var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n ${know} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };