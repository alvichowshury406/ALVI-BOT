const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Alvi",
  description: "goibot",
  usePrefix: false,
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

var tl = ["___ღ❥︎চোখ দিয়ে দেখি আর মুখ দিয়ে হাসি আমার মন বলে জান আমি শুধু আপনাকেই ভালোবাসি.!🌻😽✨" , "আমার আম্মু আ'মাকে ব্রিজের নিচে পাই'ছিলো.!🙂\nতোমাকে কোথা থেকে আন'ছিলো..?🤗" , "--°পাঞ্জাবি পড়া পিক চাইবা নাকি খুলে ফেলব 🙂💔" , "-🌼🦋\n\n•-আসেন দেখা করি চা খাই বিলটা না হয় আপনিই দিয়েন আমার কাছে টাকা নাই__🥱" , "❐-বুঝতে পারছিনা ঠকায় কে \n-মানুষ নাকি ভাগ্য?😿💔" , "__বড় আর হইলাম কই, এখনো \n\n-আকাশ দিয়ে হেলিকপ্টার গেলে তাকাই থাকা আমি...! 🌻🙂", "--বুকের বাম পাশে এসি সহ একটা \nফ্লাট খালি আছে...\nএকজন বিশ্বস্ত ভাড়াটিয়া চাই😊...!🙈👀" , "-একদিন ঠাস করে😎🔪 \n\nকিউট হয়ে যামু_😩 \nতারপর তোগোরে  আর পাত্তা দিমু না __🐸🌚🙂" , "-🦋🌻\n\n•— আমার একটা মানুষ হইলো না..!😌💔" , "-🧠🌻\n\n•- সুন্দর হওয়ার চুনু কিনছি তগরে আর পাত্তা দিমু না _🥱🫰" , "--নাটক কম করো প্রিয় তুমি যে অন্য জনে আসক্ত তা তোমার ব্যবহারেই বুঝা যায় প্রিয়__😒🦋" , "-°নক দিও আমিও তোমাকে পছন্দ করি..!😽🫶" , "ভাই আপনার ইনবক্সে গালি দিছি চেক দিয়েন 🙂🫰🏻" , "মূল্য না পেলে স্থান ত্যাগ করো..🙂🧡" , "___মন দে !🙂🫴\n---ছিনি মিনি খেলমু 🤭🤭" , "-চলো তো বিয়ে করে ফেলি ব!ল..!🙂" , "- ছেলেদের দায়িত্ব বোধ শিখিয়ে দিতে হয় না -😅\n- পরিস্থিতিই তাদের দায়িত্ববান বানিয়ে দেয়..!!🙂💔🥀" , "-আপনি ফুল চাইবেন আর আমি এক ঝাক --°\n\nফুল দিয়ে আপনাকে চাইবো.!☺️✨🌸" , "পৃথিবীর অর্ধেক সৌন্দর্য বাগানবিলাস আর অর্ধেক সৌন্দর্য তুমি🌸🦋" , "__ আইডিতে এত এত পাখি কিন্তু একটারও ডানা নাই😬😐!😔" , "-°তোর কথা তোর বাড়ি কেউ শুনে না তো আমি কোনো শুনবো__🤔😂 " , "-🌻🫰🏻•— হারাতে চাচ্ছি নিজেকে আর একবার হারিয়ে গেলে ফিরব না তোমাদের ভদ্র সমাজে...!!😊💔" , "- আমি শান্তি খুঁজি, আর দুঃখ আমারে খুঁজে-!!😅" , "-°ভাই তুই একটু আমার কাছে আই তরে মাইরা আমি ঘুমামু_👊😴" , "কালকে দেখা করিস তো একটু 😈" , "যদি ভালো রাখার নাম'ই ভালোবাসা হয় তাহলে কেউ কখনো আমায় ভালোবাসে নাই । 😞😔" , "ঘুড়ি ওড়ানোর বয়সে আমি নিজেকে উড়িয়েছি!-🤍🕊️\nমধ্যবিত্ত ঘরের সন্তান আমি বাস্তবতা দেখে বড় হয়েছি-!!😴🫰" , "- ভালোবাসা দূর থেকেই সুন্দর-!!🥹🫶\n\n- কাছে আসলে ঘর  নষ্ট হয়-!!🥵😸" , "_♡আমি বিচ্ছেদ চাইই্ নাহহ্ প্রিয়্যুহহ্ ৬০ বচ্ছর বয়সেও আপনার হাত টাহহ্ ধরে রাখতে চাইই্♡_🥺💜🌻" , "- খুব সাধারণ হতে চাই যতোটা সাধারণ হলে কেউ ভালোবাসবে না কেউ ঘৃণাও করবে না...!<3♡🩷🦋✨☺️🤍" , "-অনুভূতি গুলো আজ..!🙂\n-বড্ড ক্লান্ত_..!😓 \nআমি মরে \nগেলে আমার গল্প টা এখানেই সমাপ্ত_😅" , "পারিলে মানুষের হাসির কারণ হইও_☺️\n -মানুষ আর বাঁচেই' বা কয় দিন..✍️🌸🤎" , "তোর কি চোখে পড়ে না আমি বস আলভী চৌধুরী'র সাথে ব্যাস্ত আছি😒","SORRY - শব্দটা ___কি আজব তাই না 😌..!!\nপ্রিয় মানুষ বললেই ঝগড়া শেষ \n আর ডাক্তার বললে জীবন শেষ.!😌🥲💔" , "আহ্ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , "-যাকে যত বেশি ভালোবাসবে মিস করবে কেয়ার করবে সব সময় খোঁজ খবর নেবে..🖤\n-সেই তোমাকে অবহেলা করবে.!😅💔" , "হুম জান তোমার ওই'খানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে আমার বস আলভী চৌধুরী কে একটা Gf দে 🙄" , "যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস আলভী চৌধুরী'র সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗" , "-🌻🦋\n\n•- সপ্ন আমার একটাই বন্ধুর বউকে জড়িয়ে ধরব__🥹🫶🏻" , "_একটা বেডি দেন আসক্ত হই...!☹️🫴", "-তোমার একটা BF দরকার তাই না...!🫵🥺",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "কি") || (event.body.toLowerCase() == "ki")) {
     return api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nকিছু বুঝো না 😒 খালি কি কি করো 😪 চিপায় চলো বুজাই দিতাছি 😾\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯", threadID);
   };

    if ((event.body.toLowerCase() == "Bot 😘") || (event.body.toLowerCase() == "Bot 😽")) {
     return api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nকিস দিও না জান 🥀 আমার লজ্জা লাগে তো\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯", threadID);
   };

    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() =="lik888e")) {
     return api.sendMessage("╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n👍-হাত \n-মেরে কিবোর্ড দুর্বল করো না-🤣👈\n\n-ধন্যবাদ-🤗🤝\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯", threadID);
   };

   if ((event.body.toLowerCase() == ".") || (event.body.toLowerCase() == ".")) {
     return api.sendMessage("👩‍❤️‍💋‍👨", threadID);
   };

   if ((event.body.toLowerCase() == "hi777") || (event.body.toLowerCase() == "hello999") ||(event.body.toLowerCase() == "hlw777") || (event.body.toLowerCase() == "hel777o!")) {
     return api.sendMessage("╭──────────────────╮                     হুম বলো কি বলতে চাও 😊 কোনো দরকার থাকলে আমার বস আলভী চৌধুরী কে নক দিতে পারো   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "o999i") || (event.body.toLowerCase() == "ja77n")) {
     return api.sendMessage("╭──────────────────╮                     এই তো জান আমি 🙃 কি বলবা বলো 🐸 বেশি দরকার হলে বস আলভী চৌধুরী'র ইনবক্সে জাও 😚 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "l/") || (event.body.toLowerCase() == "legend")) {
     return api.sendMessage("╭──────────────────╮                    কিরে বোকাচুদা নিজেরে কি লিজেন্ড মনে করস নাকি 😂  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "morning")) {
     return api.sendMessage("🥱", threadID);
   };

   if ((event.body.toLowerCase() == "না") || (event.body.toLowerCase() == "na!")) {
     return api.sendMessage("╭──────────────────╮                    বেশি না না করস কেন 🐸👉  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "আলভী") || (event.body.toLowerCase() ==  "আলভি") || (event.body.toLowerCase() == "alvi") || (event.body.toLowerCase() == "Alvi")) {
     return api.sendMessage( "╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\nআমার বস আলভী চৌধুরী কে ডাকছো কেনো 🙈 GF দিবা নাকি 🤔\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝙼𝚁.𝙱𝙾𝚂𝚂 𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN\nContact Him on WhatsApp :- +60135647836", threadID);
   };

   if ((event.body.toLowerCase() == "ki kor77o!!") || (event.body.toLowerCase() == "কি করো888!!")) {
     return api.sendMessage("╭──────────────────╮                    এইতো GF  খুজতাছি 😏 তুমি কি করছো গো 😀 ╰──────────────────╯", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot er admin")) {
     return api.sendMessage("╭──────────────────╮                    এইজে নাও বসের আইডি লিংক - https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "kamon aco") || (event.body.toLowerCase() == "kem8888on acen")) {
     return api.sendMessage("╭──────────────────╮                      জি আলহামদুলিল্লাহ ভালো 🥰 আপনি?   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "kh678aiso") || (event.body.toLowerCase() == "khai77sen+")) {
     return api.sendMessage("╭──────────────────╮                      না গো জান আমি খাই না আমি রোবট 🤖 তুমি খাইছো 😘 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("╭──────────────────╮                    আমি শুধু আমর বস আলভী চৌধুরী'র কথায় চলি তোমার না 😒 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "namaj") || (event.body.toLowerCase() == "নামাজ")) {
     return api.sendMessage("╭──────────────────╮                    সবাই নামাজ পড়ছো তো নাকি 🥰🥰🥰  ╰──────────────────╯"
, threadID);
   };

   if ((event.body.toLowerCase() == " l8o") || (event.body.toLowerCase() == "up") || (event.body.toLowerCase() == "su") || (event.body.toLowerCase() == "ahh")) {
     return api.sendMessage("╭──────────────────╮                    কিরে বলদের বাচ্চারা বকা চোদাস কেন চোদা খাবি নাকি 😡 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "ui") || (event.body.toLowerCase() == "loi") || (event.body.toLowerCase() == "io")) {
     return api.sendMessage("╭──────────────────╮                    ইশ দেখ লুচ্চায় চোখ মারে  😏 লোচ্চা কোথাকার 😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "কিস দেও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️╭──────────────────╮                    তুমি পঁচা তোমাকে কিস দিবো না 🤭  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "thank you.") || (event.body.toLowerCase() == "tnx.") || (event.body.toLowerCase() == "thank you bot.") || (event.body.toLowerCase() == "thanks Vai.")) {
     return api.sendMessage("️╭──────────────────╮                    amke thanks na bole amr boss Alvi k akta gf dew🥰🥰🥰  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "999900") || (event.body.toLowerCase() == "#") || (event.body.toLowerCase() == "_") || (event.body.toLowerCase() == "??;") || (event.body.toLowerCase() == "&")) {
     return api.sendMessage("️╭──────────────────╮                    রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "hu66m") || (event.body.toLowerCase() == "hmm89756")) {
     return api.sendMessage("️╭──────────────────╮                    -  Hummm 2 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "79779") || (event.body.toLowerCase() == "7617") || (event.body.toLowerCase() == "0068")) {
     return api.sendMessage("️╭──────────────────╮                    -            Hummm 😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "name ki") || (event.body.toLowerCase() == "name ki apner")) {
     return api.sendMessage("️╭──────────────────╮                    - DJ  সেক্সি  🄱🄾🅃 SEXY»🤖🤖 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "oi hlw!!+") || (event.body.toLowerCase() == "ki kore888n")) {
     return api.sendMessage("️╭──────────────────╮                    Kicu Nah Bolen 🥀 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kamon aca88") || (event.body.toLowerCase() == "বাসর সবাই কেমন আছে")) {
     return api.sendMessage("️╭──────────────────╮                    আলহামদুলিল্লাহ ভালো 🥰 তেমার বাসার সবাই কেমন আছে  ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "+++++") || (event.body.toLowerCase() == "!+++!")) {
     return api.sendMessage("️╭──────────────────╮                    কি গো জান চুপ করে রইলা কেনো 😏😏 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "!!") || (event.body.toLowerCase() == "$87-")) {
     return api.sendMessage("️╭──────────────────╮                    কি গো কলিজা তোমার কি মন খারাপ 🥺 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "87") || (event.body.toLowerCase() == "09")) {
     return api.sendMessage("️╭──────────────────╮                    এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘   ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "Alvir gf ase?") || (event.body.toLowerCase() == "gf")) {
     return api.sendMessage("╭──────────────────╮                    আরে বলদ আমার বস আলভী চৌধুরী আমারে আর নিজেকেই ভালোবাসে এইজে দেখ তার https://www.facebook.com/PINIK.MR.ALVI.CHOWDHURY.YOUR.NEXT.VATAR.XAN ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "89888") || (event.body.toLowerCase() == "23777") || (event.body.toLowerCase() == "120987") || (event.body.toLowerCase() == "786666") || (event.body.toLowerCase() == "987766") || (event.body.toLowerCase() == "!!")) {
     return api.sendMessage("╭──────────────────╮                    ভাই এতো হাসিস না আসলে তোরে চোরের মত লাগে🌚🤣 ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "988") || (event.body.toLowerCase() == "788") || (event.body.toLowerCase() == "67") || (event.body.toLowerCase() == "566")) {
     return api.sendMessage("╭──────────────────╮                                                             _ এতো লাভ দেও কেন ভালোবেসে গেছো নাকি🥰          ╰──────────────────╯", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন++আছো") || (event.body.toLowerCase() == "++") || (event.body.toLowerCase() == "how are yo&&") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন তোমাকে হাসতে দেখি ☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami alvi") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা বস আলভী চৌধুরী ভালো আছো?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `╭──────•◈•──────╮\n         🄰🄻🅅🄸🄱🄾🅃        \n\n 🗣️Dᴇᴀʀ, ${name}\n 💌:${rand} \n\n╰──────•◈•──────╯`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
