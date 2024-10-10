/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "lofi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ALVI",
  description: " VEDIO",
  usePrefix: true,
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
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
   var hi = ["- পৃথিবীতে সবচেয়ে দামি দুটো জিনিস হলো..!!💝\n\n- বিশ্বাস আর অপেক্ষা..!🖤\n\n- বিশ্বাস যা সবাই রাখতে পারে না..!💔 \n- আর অপেক্ষা যা সবাই করতে পারে না…!🙃🌸🥀","—গলার ভয়েজ শুনেই যে বুঝে ফেলে..!🙂 \n- আপনি ভালো আছেন কি নেই…!😊 \n- সেই'ই আপনার প্রিয় মানুষ..!❤️😇","আমার কোনো দুঃখ নাই যা আছে অপূর্ণতা অভিযোগ আর নিজের প্রতি ঘৃ*ণা..!🖤","জীবনে কষ্ট না থাকলে কেউ সৃষ্টিকর্তাকে স্মরণ করতোনা...!!😊💔","আমার হাতে নষ্ট হওয়া জিনিসগুলো মধ্যে আমি নিজেই একটা 😅"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=18aFZ5X7JTfpyO6llthq2XNVWUjet2FaP",
    "https://drive.google.com/uc?id=18X_-thw22ABVMXZ52ni5cab1k_fRwuw3",
    "https://drive.google.com/uc?id=18WEthclEs4rWBAxVhZ9wp6f-09gYgkr_",
    "https://drive.google.com/uc?id=18X80aNUFRV4VTVTKQzwn9MdpmMA5SLu_",
    "https://drive.google.com/uc?id=18V3Pk0r_cfUer4rSojDnZ9QJcp2G1yNt",
    "https://drive.google.com/uc?id=18Li4HZ0wTpNCLn_82qZViEcJHhd4Uy4G",
    "https://drive.google.com/uc?id=18Ec3rIekg2qrBuV7ZQsKorzNrCcN0oCe",
    "https://drive.google.com/uc?id=1870nULvHwzh7VuqYxU_FLxEXveQ6SeF0",
    "https://drive.google.com/uc?id=1182wm8eRM2DmnZaI2r8Snvv7A85wnP4tl",
    "https://drive.google.com/uc?id=182a3XxT_VnhALeZvPEfcJAHR2tM6Ptrm",
    "https://drive.google.com/uc?id=19QdxZW6L2BeBC45Pw_hQ8l0wvlzsazXB",
    "https://drive.google.com/uc?id=19MnYeXNIs1Zzlp0shut8wZYQt1ZLw7LZ",
    "https://drive.google.com/uc?id=19LaqOqBriFJov9jmf47xgK10HwziPWbO",
    "https://drive.google.com/uc?id=182a3XxT_VnhALeZvPEfcJAHR2tM6Ptrm",
    "https://drive.google.com/uc?id=1957zOufHMT5-_gLFhNMolfFMi0C1sa3F",
    "https://drive.google.com/uc?id=191UnH2tWq_IqN-uU3z5yGY2pbmMU1Qsw",
    "https://drive.google.com/uc?id=19057rG3HPrSTa8oot1bJoEQk5nro1r56",
    "https://drive.google.com/uc?id=1901BdUC6Dm58LK_Gmt0dw25iui0hAw-u",
    "https://drive.google.com/uc?id=18yag-No6KYVeVldF2VdtHW9QvgmlNA-x",
    "https://drive.google.com/uc?id=18tLS2Im-y8mBdLCpveBUc7I6b5ws8aMp",
    "https://drive.google.com/uc?id=18qHdNhfKnHH4XaOZl0522q_AalzIsPyy",
    "https://drive.google.com/uc?id=18nSQbxPhdNuguq-q8EOmMEJnrDjIqv4a",
];
     var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n         🄰🄻🅅🄸🄱🄾🅃       \n\n ${know} \n\n  𝗠𝗥. 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬\n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };