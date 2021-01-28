module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musique est finie !`);
};