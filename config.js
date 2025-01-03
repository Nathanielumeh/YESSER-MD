const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZ6UklYZFhTZG0wdE9sUmZWNDhBcmV0cGJoV0NFaEhtdk1VNW8rajgxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3hjbDFVR3RZQ0dIM21kSEo3d05zRklsd0V1RzJYN2MyMFlha3dwQjN4Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0kwa2liNXpDUGxURGJ3d0IwVVBOaEVQTmJ4R0ZVK0V3U0VCL0NxZVZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ3J3QTBoSmhPbWtQV0xKbjBuSnRVekdkNWdXYUdwNHVyQW9VaFlFT1RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCdFVDQm9DSlA2UW55QjdNenh1eDRkZGFKMDdBdDNDTnkzTjFaZm5jRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXNkkrQ1NTeU1GSk5rMTZDeU52dElLdzBzYjlISVBESmZ6d09kL1lRMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtNS2VXTll2ZmI5Z3VxRVhrM0FVRWxzVm5PV1YyL2ptMGdqWGpCM2IwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzlhakZ6dnliQWRwTjFJT0YvbXBxT3J4alY4K3RUaDAycWV3RjVSUzdtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9DOVp1c1BvQ2Y3VjBVaU00WDh4SldISnBKclhtdGJCRXNPeEYwSEZEUUZ1dmp2amFKRkZrRjhqZG5RdjFhYjV3UTYzUWc3d3R2eUJGSW5QOTcvOGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoieXh3K2VsV3pxR3lvTFY4NDJ5NExqOTJCZ1hXTXBEWjE2c29KK0xIb1Nncz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR096SXJaSlNUcWVyekpsZUktMVk5ZyIsInBob25lSWQiOiJjZTJlYTE2Ni05M2IyLTQxNGMtYjRmMC1hNDI4MTUzNjc2ODYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEFnYnJ1aXRwOWtBVXZoNjlHWkJmOVpuN1BFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1jY3FiWWRaR0Y3Ni94Y1JwSHJ1dWJDVHU3az0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFUTc3UktOVyIsIm1lIjp7ImlkIjoiMjM0ODEzOTQwMTcyOTo1OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDdiK0xjREVJdmYzcnNHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOGxvenVCRnRSVDgwbVUwUFloQzVpU1RBWEZBUlNDRFUwMGIrMTZSLzAyND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiczdMR2IzMkVOZ0p5UGJuWVI3RGtwUkZVejRFWGhieWVTaDcwM2IxUTRheXJXaDBGK3Azc2VGWEZQRFk2dWVHc1k1S1pwSlJNOVJ2OEozQWMvaGJURFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjJxNWRuSTV1a1IyNUNkcXFxeDN4VFo3VWxTUDB2NFAwUWdGQ3Bqc3kvTHZrQnVFQ2l1NFZtN3hRSGhqVytjL2M2SHBNcWtjVnFxVzJjL3htbDdLaWpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzOTQwMTcyOTo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSmFNN2dSYlVVL05KbE5EMklRdVlra3dGeFFFVWdnMU5ORy90ZWtmOU51In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1ODk2OTg1fQ==",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
