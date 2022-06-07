import discord from 'discord.js';
import dotenv from 'dotenv';
import axios from 'axios';

// config and setup
dotenv.config();
const intents = new discord.Intents(8);
const client = new discord.Client({ intents });
client.login(process.env.BOT_TOKEN);


client.on('ready', async() => {

    // set bot status for fun
    await client.user.setActivity('in the Lab.');
    console.log('All roads lead to Eco!');
    
    // fetch all server roles
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
