let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • GOPAY [0896-3026-7618]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6289630267618
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
