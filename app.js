const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: '',
		password: '',
	},
	channels: [ '' ]
});

client.connect();



//commands

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@username, heya!"
		client.say(channel, `@${tags.username}, Hey how is it going?`);
	}

  if(message.toLowerCase() === '!age') {
    //age command
    client.say(channel, `Nobody cares about your age sit down.`);
  }

	if(message.toLowerCase() === '!project') {
    //age command
    client.say(channel, `Ender City, cyber punk style city. Image shows inspiration for the build. Later in the build will come up with custom point redeems.`);
  }

	if(message.toLowerCase() === '!break') {
    //age command
    client.say(channel, `Going on a little break to refresh be back soon. Shortstack or Waddly is in charge until I get back!`);
  }

	if(message.toLowerCase() === '!vibe') {
    //age command
    client.say(channel, `wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance  wooperJam  blobDance `);
  }

	// if(message.toLowerCase() === '!age') {
  //   //age command
  //   client.say(channel, `Nobody cares about your age sit down.`);
  // }


});
