
let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let scnya = `⟥⟞⟚━┈┈ ❨ Hʏ ${tag} ❩ ┈┈━⟚⟝⟤`
    let footerny = `┆📮 *ɴᴏᴛᴇ!* : Jɪᴋᴀ ᴋᴀʟɪᴀɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴀᴛᴀᴜ ᴄᴏᴘᴀs ᴅᴀʀɪ sᴄʀɪᴘᴛ ɪɴɪ ᴍᴀᴋᴀ ᴄʀᴇᴅɪᴛ ᴅᴀʀɪ sᴄᴇɪᴘᴛ ɪɴɪ ʜᴀʀᴜs ᴀᴅᴀ.\n┆📑 Creator:   ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×\n┆🥊YouTube: https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ\n┆🥊 *Sᴄʀɪᴘᴛ* : https://github.com/MendingTuru/Yuni-MD\n\n\n${readMore}┆ *I Love You:v*`
 conn.send3ButtonImg(m.chat, `https://telegra.ph/file/63d157733afce65388504.jpg`, scnya, footerny, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.tqto', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/kokopangeran_',
    mediaType: 2, 
    description: 'https://chat.whatsapp.com/IqFfoXcdh7UFyPoQTpKoQp',
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: 'https://chat.whatsapp.com/IqFfoXcdh7UFyPoQTpKoQp'
     }}
  })
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = ['sc','sourlcode']

module.exports = handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}