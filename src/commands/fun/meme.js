const { MessageEmbed } = require("discord.js");

const https = require("https");
const url = "https://www.reddit.com/r/memes/.json?limit=100";

module.exports = {
  name: "meme",
  description:
    "get a meme out from r/memes and sends it in the required channel",
  category: "Fun",
  cooldown: 5,
  run: async (client, message, args) => {
    https.get(url, (result) => {
      var body = "";
      result.on("data", (chunk) => {
        body += chunk;
      });

      result
        .on("end", () => {
          var response = JSON.parse(body);
          var index =
            response.data.children[Math.floor(Math.random() * 99) + 1].data;

          var link = "https://reddit.com" + index.permalink;

          if (index.post_hint !== "image") {
            var text = index.selftext;
            const textembed = new MessageEmbed()
              .setTitle(`${title}`)
              .setColor("RANDOM")
              .setURL(link);

            message.channel.send({ embeds: [textembed] });
          }

          var image = index.preview.images[0].source.url.replace("&amp;", "&");
          var title = index.title;

          if (index.post_hint !== "image") {
            const textembed2 = new MessageEmbed()
              .setTitle(`${title}`)
              .setColor("RANDOM")
              .setURL(link);

            message.channel.send({ embeds: [textembed] });
          }
          const imageembed = new MessageEmbed()
            .setTitle(`${title}`)
            .setImage(image)
            .setColor("RANDOM")
            .setURL(link);
          message.channel.send({ embeds: [imageembed] });
        })
        .on("error", function (e) {
          console.log("Got an error: ", e);
        });
    });
  },
};
