module.exports = (client, message, query, tracks) => {
        message.channel.send({
                    embed: {
                        color: 'BLUE',
                        author: { name: `Voici vos résultats de recherche pour ${query}` },
                        footer: { text: 'This bot uses a  project made by SaohT' },
                        timestamp: new Date(),
                        description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};