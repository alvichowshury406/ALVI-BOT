       module.exports.config = {
           name: "Rls",
           version: "1.0.0",
           hasPermssion: 0,
           credits: "Zia_Rein",
           description: "important notes",
           usePrefix: true,
           commandCategory: "random-img",
           usages: "send message",
           cooldowns: 5,
           dependencies: {
               "request": "",
               "fs-extra": "",
               "axios": ""
           }
       };

       module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
           const axios = global.nodemodule["axios"];
           const request = global.nodemodule["request"];
           const fs = global.nodemodule["fs-extra"];
           var ZiaRein3 = (`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n💯___𝐖𝐀𝐑𝐍𝐈𝐍𝐆-𝐍𝐎𝐓𝐈𝐂𝐄___💯

       আসসালামু আলাইকুম "༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺-🧚‍♂️𝄞⋆⃝️️️️️️️️️️️️️️️»̶̶͓͓͓̽̽̽নী্ঁল্ঁ᭄ ক্যা্ঁফে্ঁর্ঁ᭄ গ্ঁল্প্ঁ᭄»̶̶͓͓͓̽̽̽⑅⃝💞𝄞⋆⃝🌸࿐" ফ্যামেলি গ্রুপের কলিজার ভাই/বোন__😊🍒 

       আমাদের গ্রুপে আসার জন্য আপনাকে অনেক ধন্যবাদ______!!🍒😘    

       এটা আড্ডা বক্স, এখানে কোন বাজে বিহেভ অথবা ১৮+ কথা বলা যাবে না 💯

       এখানে সবাই বন্ধুর মতো আড্ডা দিবা💯

       তোমাদের নিয়ে আমাদের এইসব বক্স সো তোমরা মিলে মিশে আড্ডা দিবা 🌼

       ৩ দিনের বেশি এক্টিভ না থাকলে এডমিন  
       আপনাকে বক্সের রুলস অনুযায়ী রিমুভ করতে বাধ্য হবে_______💚🍒


       ༆◥⃧⃜ؖؖؖؖ⃝ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ»̶̶͓͓͓̽̽̽𝄞⋆⃝🌺🧚‍♂️𝄞⋆⃝️️️️️️️️️️️️️️️»̶̶͓͓͓̽̽̽নী্ঁল্ঁ᭄ ক্যা্ঁফে্ঁর্ঁ᭄ গ্ঁল্প্ঁ᭄»̶̶͓͓͓̽̽̽⑅⃝💞🧚‍♂️-𝄞⋆⃝🌸࿐ ফ্যামেলি গ্ৰুপের পক্ষ থেকে আপনাকে  জানায় ভালবাসা  অভিরাম_____💯🌸

                 🌸💯______𝐂.𝐄.𝐎______💯🌸

            𝄞⋆⃝😽🌼🅲🅴🅾༅༎🌺༅𝐌𝐑.𝐁𝐎𝐒𝐒 𝐀𝐋𝐕𝐈 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘❥᭄ ⑅⃝🤟🌺         




       ♦️_𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑:☞\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`);
          var ZiaRein = [
       "https://i.imgur.com/huumLca.jpg",
       "https://i.imgur.com/EcryTGh.jpg",
       "https://i.imgur.com/tu12HrQ.jpg",
       "https://i.imgur.com/Vx25FHG.jpg",
       "https://i.imgur.com/NcbC8Pn.jpg",
           ];
           var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
           return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
       };
