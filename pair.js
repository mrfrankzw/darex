// const PastebinAPI = require('pastebin-js'),
// pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {giftedid} = require('./id');
const express = require('express');
const fs = require('fs');
const path = require('path');
let router = express.Router()
const pino = require("pino");
const { upload } = require('./mega');
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = giftedid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: Browsers.macOS("Safari")
                // browser: ['Ubuntu', 'Chrome', '20.0.04']
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
                    
                const auth_path = path.resolve(__dirname, 'temp', id, 'creds.json');
                const fileContent = fs.readFileSync(auth_path, 'utf8');


                    function randomMegaId(length = 6, numberLength = 4) {
                      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                      let result = '';
                      for (let i = 0; i < length; i++) {
                      result += characters.charAt(Math.floor(Math.random() * characters.length));
                        }
                       const number = Math.floor(Math.random() * Math.pow(10, numberLength));
                        return `${result}${number}`;
                          }

                        const mega_url = await upload(fs.createReadStream(fileContent), `${randomMegaId()}.json`);
                        console.log(mega_url);

                        const string_session = mega_url.replace('https://mega.nz/file/', '');

                        const sid = `Gifted~${string_session}`;
                        console.log(sid);
                
               // let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: sid });

               let GIFTED_MD_TEXT = `
*✅sᴇssɪᴏɴ ɪᴅ ɢᴇɴᴇʀᴀᴛᴇᴅ✅*
______________________________
╔════◇
║『 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚══════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: _youtube.com/@giftedtechnexus_
║❒ 𝐎𝐰𝐧𝐞𝐫: _https://t.me/giftedmd_
║❒ 𝐑𝐞𝐩𝐨: _https://github.com/mouricedevs/gifted_
║❒ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l_
║❒ 𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥: _https://youtu.be/seXFFjtnU64?si=yvUXm4UWYcX8ZJDp_
║ 💜💜💜
╚══════════════╝ 
 𝗚𝗜𝗙𝗧𝗘𝗗-𝗠𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 5.𝟬.𝟬
______________________________

Use your Session ID Above to Deploy your Bot.
Check on Tutorial for Deployment Procedure(Ensure you have Github Account and Billed Heroku Account First.)
Don't Forget To Give Star⭐ To My Repo`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("Service Has Been Restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
