import discord from 'discord.js';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const intents = new discord.Intents(8);
const client = new discord.Client({ intents });
client.login(process.env.BOT_TOKEN);

// set bot status for fun
client.on('ready', async() => {
    await client.user.setActivity('in the Lab.');
    console.log('All roads lead to Eco!');
});

// fetch all server roles
client.on('ready', async () => {

    const options = {
        method: 'GET',
        url: `${process.env.DISCORD_API}/guilds/${process.env.GUILD_ID}/roles`,
        headers: {
            Authorization: `Bot ${process.env.BOT_TOKEN}`
        }
    };
    
    await axios.request(options)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.error(err));

});
