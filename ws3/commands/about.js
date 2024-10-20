module.exports = {
  description: "What is kyea ai?",
  async run({ api, send, admin }){
    await send({
      attachment: {
        type: "image",
        payload: {
          url: "https://imgur.com/5Jky31r.jpeg",
          is_reusable: true
        }
      }
    });
    setTimeout(async () => await send({
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: `🤖 About kyea ai:
WieAI is your friendly, helpful personal assistant.

💭 Why I named kyea as a name of the page bot because this is dedicated to my girlfriend itself 👸

❓ Contact us admins if you experienced/encountered any issue regarding to the bot and I will try to fix it. Thankyou for using me as a personal assistant!`,
          buttons: [
            {
              type: "web_url",
              url: "https://www.facebook.com/profile.php?id=61567233395964",
              title: "Like/Follow our Page"
                },
            {
              type: "web_url",
              url: "https://www.facebook.com/kyzinnot",
              title: "Contact Admin 1"
                },
            {
              type: "web_url",
              url: "https://www.facebook.com/profile.php?id=61567648343673",
              title: "Contact Admin 2"
                }
             ]
        }
      }
    }), 2*1000);
  }
}
