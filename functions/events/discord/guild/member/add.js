const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `950230384203956257`,
  "content": `Hello <@!${context.params.event.user.id}> 👋 Welcome to the Server!`,
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Some Rules`,
      "description": "",
      "color": 0xffb300,
      "fields": [
        {
          "name": `If You're Gay:`,
          "value": `Leave the server`
        },
        {
          "name": `If You're Tamsyn:`,
          "value": `I luv u`
        }
      ]
    }
  ]
});