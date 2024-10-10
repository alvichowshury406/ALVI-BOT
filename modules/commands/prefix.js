const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "prefix2",
  version: "1.0.0",
  hasPermission: 0,
  credits: "ALVI",
  usePrefix: true,
  description: "when send ,prefix then response",
  commandCategory: "bot prefix",
  usages: "prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
   // const GP = "╭•┄┅════❁🌺❁════┅┄•╮\n${GP}\n╰•┄┅════❁🌺❁════┅┄•╯\n\n"; 
  //🄰🄻🅅🄸 🄱🄾🅃"
     let d1PInfo = await api.getThreadInfo(event.threadID);
  let diptoName = d1PInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n━━━━━━━⊱🩷⊰━━━━━━━\n🌻⑅⃝আ্ঁল্ঁভী্ঁ🪴ত্যা্ঁহ্ঁ ⑅⃝┉❈\n━━━━━━━⊱🩷⊰━━━━━━━\n 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 ::${global.config.BOTNAME} \n \n: 𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇:${global.config.PREFIX} 💝\n\n: 𝙱𝙾𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳:${client.commands.size} ｣🖤\n\n𝚃𝙾𝙳𝙰𝚈 𝚃𝙸𝙼𝙴: ${time}\n𝚈𝙾𝚄𝚁 𝙱𝙾𝚇 𝙽𝙰𝙼𝙴: ${diptoName}💖\n\n♚════════════════════════♚\n\n𝚃𝙷𝙸𝚂 𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 𝙼𝚁. 𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈🤍\n\n━━━━━━━⊱🩷⊰━━━━━━━\n🌻⑅⃝𝙽𝙾𝚆 𝙴𝙽𝙹𝙾𝚈🪴𝙰𝙻𝚅𝙸 𝙱𝙾𝚃⑅⃝┉❈\n━━━━━━━⊱🩷⊰━━━━━━━\n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = ["https://i.imgur.com/UtKEhr0.mp4",
                 "https://i.imgur.com/iIaWTaC.mp4",
                 "https://i.imgur.com/l1qlgvS.mp4",
                 "https://i.imgur.com/7f3zzP1.mp4",
                 "https://i.imgur.com/cAnQykl.mp4",
                 "https://i.imgur.com/93yveNx.mp4",
                 "https://i.imgur.com/S1hPcWP.mp4",
                 "https://i.imgur.com/GcyMXs6.mp4",
                 "https://i.imgur.com/4GSI2i8.mp4",
                 "https://i.imgur.com/7jMAqqR.mp4",
                 "https://i.imgur.com/3DjfALk.mp4",
                 "https://i.imgur.com/99UQY5i.mp4",
                 "https://i.imgur.com/w2hX8p9.mp4",
                 "https://i.imgur.com/u6w2wCw.mp4",
                 "https://i.imgur.com/qbHb4TV.mp4",
                 "https://i.imgur.com/oVOPILK.mp4",
                 "https://i.imgur.com/XYIixNU.mp4",
                 "https://i.imgur.com/V3TqiXF.mp4",
                 "https://i.imgur.com/3hx98bS.mp4",
                 "https://i.imgur.com/hdx7x0j.mp4",
                 "https://i.imgur.com/ofB5UPz.mp4",
                 "https://i.imgur.com/pljQEPg.mp4",
                 "https://i.imgur.com/SE3DgRT.mp4",
                 "https://i.imgur.com/a9yHovY.mp4",
                 "https://i.imgur.com/0ldaQFb.mp4",
                 "https://i.imgur.com/cfcMXOi.mp4",
                 "https://i.imgur.com/OwzP64Y.mp4",
                 "https://i.imgur.com/65dBzTD.mp4",
                 "https://i.imgur.com/Q5z7xZt.mp4",
                 "https://i.imgur.com/rBvRkAq.mp4",
                 "https://i.imgur.com/dE2aFPX.mp4",
                 "https://i.imgur.com/B5myZLc.mp4",
                 "https://i.imgur.com/d7al0kz.mp4",
                 "https://i.imgur.com/wGO7lxC.mp4",
                 "https://i.imgur.com/XYsmu14.mp4",
                 "https://i.imgur.com/RVsTiRm.mp4",
                 "https://i.imgur.com/0ukh2CK.mp4",
                 "https://i.imgur.com/sEtUDg2.mp4",
                 "https://i.imgur.com/e9B6Xqx.mp4",
                 "https://i.imgur.com/W5dKfLc.mp4",
                 "https://i.imgur.com/vSMFyaD.mp4",
                 "https://i.imgur.com/ZJsfgkG.mp4",
                 "https://i.imgur.com/P1QJVHY.mp4",
                 "https://i.imgur.com/x7LYsp7.mp4",
                 "https://i.imgur.com/KRdDVBp.mp4",
                 "https://i.imgur.com/HBaXulv.mp4",
                 "https://i.imgur.com/iA0wpCd.mp4",
                 "https://i.imgur.com/gfgxieW.mp4",
               "https://i.imgur.com/43aO3Nn.mp4",
               "https://i.imgur.com/1ZTM6DT.mp4",
               "https://i.imgur.com/yTmA5HF.mp4",
               "https://i.imgur.com/6P9GLyH.mp4",
               "https://i.imgur.com/qUQMqBO.mp4",
               "https://i.imgur.com/6B5GyxD.mp4",
               "https://i.imgur.com/r99fNFk.mp4",
               "https://i.imgur.com/ddFVO87.mp4",
               "https://i.imgur.com/u8L9HGF.mp4",
               "https://i.imgur.com/zcibYK7.mp4",
               "https://i.imgur.com/Ikadz0Z.mp4",
               "https://i.imgur.com/RXanGhO.mp4",
               "https://i.imgur.com/LtBd5zy.mp4",
               "https://i.imgur.com/CvFKWhc.mp4",
               "https://i.imgur.com/pOn0wcX.mp4",
               "https://i.imgur.com/4x07AvR.mp4",
               "https://i.imgur.com/Rf8wj3R.mp4",
               "https://i.imgur.com/7THpS7L.mp4",
               "https://i.imgur.com/Y323uee.mp4",
               "https://i.imgur.com/yeFqV9d.mp4",
               "https://i.imgur.com/mJoVzEg.mp4",
               "https://i.imgur.com/WlPTRzv.mp4",
               "https://i.imgur.com/XVbr337.mp4",
               "https://i.imgur.com/QygK30k.mp4",
               "https://i.imgur.com/V6EOaiO.mp4",
               "https://i.imgur.com/mCFNiXt.mp4",
               "https://i.imgur.com/S8I7fH4.mp4",
               "https://i.imgur.com/0Yu5y5l.mp4",
               "https://i.imgur.com/O9GP9iZ.mp4",
               "https://i.imgur.com/KGA0RBA.mp4",
               "https://i.imgur.com/mdHHxzX.mp4",
               "https://i.imgur.com/DMU6eTu.mp4",
               "https://i.imgur.com/boWuxIu.mp4",
               "https://i.imgur.com/aHua4Dh.mp4",
               "https://i.imgur.com/oQ03oPf.mp4",
               "https://i.imgur.com/WSCcoQT.mp4",
               "https://i.imgur.com/r7E2Xmv.mp4",
               "https://i.imgur.com/o495Tr6.mp4",
               "https://i.imgur.com/I4SnGpF.mp4",
               "https://i.imgur.com/tGn5AXl.mp4",
               "https://i.imgur.com/3FgCnEm.mp4",
               "https://i.imgur.com/taEqWUk.mp4",
               "https://i.imgur.com/altj0gz.mp4",
               "https://i.imgur.com/8pKd0x2.mp4",
               "https://i.imgur.com/qoeSExU.mp4",
               "https://i.imgur.com/x7LYsp7.mp4",
               "https://i.imgur.com/KRdDVBp.mp4",
               "https://i.imgur.com/STNajBB.mp4",
               "https://i.imgur.com/HBaXulv.mp4",
               "https://i.imgur.com/iA0wpCd.mp4",
               "https://i.imgur.com/J7qPrpr.mp4",
               "https://i.imgur.com/b5TbJc8.mp4",
               "https://i.imgur.com/Ok2BR3t.mp4",
               "https://i.imgur.com/rpSDliz.mp4",
               "https://i.imgur.com/ey8NJy2.mp4",
               "https://i.imgur.com/qEXaIVT.mp4",
               "https://i.imgur.com/i2Jj4KS.mp4",
               "https://i.imgur.com/u5EvR8G.mp4",
               "https://i.imgur.com/YC64kD4.mp4",
               "https://i.imgur.com/1XY7gEm.mp4",
               "https://i.imgur.com/Tv1DMT4.mp4",
               "https://i.imgur.com/rfS4ihW.mp4",
               "https://i.imgur.com/fYl4DRh.mp4",
               "https://i.imgur.com/WxDW5wX.mp4",
               "https://i.imgur.com/zXjPa6A.mp4",
               "https://i.imgur.com/KtbfcKD.mp4",
               "https://i.imgur.com/lkuN5U0.mp4",
               "https://i.imgur.com/Wv85YgQ.mp4",
               "https://i.imgur.com/GVE1Nbm.mp4",
               "https://i.imgur.com/TobpCyu.mp4",
               "https://i.imgur.com/97vEPqO.mp4",
               "https://i.imgur.com/EmD9iPX.mp4",
               "https://i.imgur.com/FpKdJk9.mp4",
               "https://i.imgur.com/u47ToWR.mp4",
               "https://i.imgur.com/6xIVvJd.mp4",
               "https://i.imgur.com/xqms4ja.mp4",
               "https://i.imgur.com/EqUlV7n.mp4",
               "https://i.imgur.com/6WA09Vh.mp4",
               "https://i.imgur.com/BBDW3Rq.mp4",
               "https://i.imgur.com/P2VN5vA.mp4",
               "https://i.imgur.com/J25ZSn2.mp4",
               "https://i.imgur.com/KELcIRX.mp4",
               "https://i.imgur.com/J25ZSn2.mp4",
               "https://i.imgur.com/KELcIRX.mp4",
               "https://i.imgur.com/BfksKgK.mp4",
               "https://i.imgur.com/YLdLfm2.mp4",
               "https://i.imgur.com/nWCXEKq.mp4",
               "https://i.imgur.com/84OA0Bj.mp4", 
               "https://i.imgur.com/3wYEwbI.mp4",
               "https://i.imgur.com/ZUxKmxe.mp4",
               "https://i.imgur.com/P1nAqzZ.mp4",
               "https://i.imgur.com/GrtTCT2.mp4",
               "https://i.imgur.com/pG2A3oc.mp4",
               "https://i.imgur.com/ASDe8rb.mp4",
               "https://i.imgur.com/0czk2iY.mp4",
               "https://i.imgur.com/lgbo3Vl.mp4",
               "https://i.imgur.com/KhXcUy3.mp4",
               "https://i.imgur.com/W071YUz.mp4",
               "https://i.imgur.com/sNujqcx.mp4",
               "https://i.imgur.com/zmbIS1H.mp4",
               "https://i.imgur.com/vhMJqsx.mp4",
               "https://i.imgur.com/BufXEgS.mp4",
               "https://i.imgur.com/ClBRcZv.mp4",
               "https://i.imgur.com/EEKg4kP.mp4",
               "https://i.imgur.com/7pehprM.mp4",
               "https://i.imgur.com/8Kz0rkn.mp4",
               "https://i.imgur.com/fGNIkj3.mp4",
               "https://i.imgur.com/KugHCGl.mp4",
               "https://i.imgur.com/W8SsPgI.mp4",
               "https://i.imgur.com/QjfFppJ.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/Shaon${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.indexOf("prefix") ===0|| dipto2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}