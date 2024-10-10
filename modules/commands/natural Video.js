module.exports.config = {
  name: "natural Video",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ALVI",
  description: " Natural VEDIO",
  usePrefix: true,
  commandCategory: "Hình ảnh",
  usages: "natural vedio",
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
   var hi = ["- একাকীত্ব উপভোগ করতে শিখুন..!🖤\n\n- পৃথিবী সবচেয়ে সুখী মানুষের তালিকায় থাকবেন..!❤️💫","পাখিরাও বুঝি বোঝে আজ ওদের অপেক্ষার শেষ 🤎⚡","মানুষ ভেঙে যায়, হেরে যায়! কখনো নিজের কাছে, কখনো ভাগ্যের কাছে!❤️‍🩹"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1OaUSXG_ZcnM-uRlUDoiMSZcNxqLB-RLY",
"https://drive.google.com/uc?id=1OVOIv2tS9ECPmSW9hi5-6puUJoIgk08c",
"https://drive.google.com/uc?id=1OBQG1WZspty8t7sDhIOtLOUCdxwshU_x",
"https://drive.google.com/uc?id=1OXpVkeycbAqhIBCg3ArwSEGgo_24gp7b",
"https://drive.google.com/uc?id=1OOKFMo-6wRI68d9Wf4b1OWQny7emK3J2",
"https://drive.google.com/uc?id=1OITDaEmgSM78h5UH1cq1AY-71LaA9r56",
"https://drive.google.com/uc?id=1OTkFDkkb8RD8UQgeKoES4CIN5xY-WCA7",
"https://drive.google.com/uc?id=1OcVDUYUFFYEP3l-Vkv9PKgehR0FJou1S",
"https://drive.google.com/uc?id=1OMynK-uuJxire7p1-jLD3WenCSS1IoWM",
"https://drive.google.com/uc?id=1O47DXwIjL0ite2M4Zwem5dcEmNRy91sZ"
  
  ];
     var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n ${know} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };