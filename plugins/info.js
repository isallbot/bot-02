let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 INFO BOT 〙
*▌║*
*▌║✙* Dibuat dengan bahasa javascript via NodeJs
*▌║✙* Rec: -
*▌║✙* Script: @isall
*▌║✙* Instagram: @faisall_wapi
*▌║✙* YouTube: ISALL GANS
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 Thanks To 〙
*▌║✙* -
*▌║✙* -
*▌║✙* -
*▌║✙* -
*▌║✙* -
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 DONASI 〙 ═
*▌║✙* GOPAY: 0896-3026-7618
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*
*▌║*>Request? Wa.me/6289630267618
*▌║*
*▌║⊱⊲ ⃟ ⃟ ⃟ ⛨*〘 ISALL BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

