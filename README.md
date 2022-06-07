# Discord Roles

A bot example to extract all roles in a Discord server.

## Requirements

- Node.js
- Discord.js

## Setup

#### Discord Settings config

- Create an application in [Discord Developer Portal](https://discord.com/developers/applications)
- Copy the "Bot Token" from the Bot tab
- Add the bot to the server

#### App config

Duplicate `.env.dist` and rename it to `.env`, edit the file:

- BOT_TOKEN = the bot token from the Discord Developer Portal
- DISCORD_API = the discord API URL
- GUILD_ID = the server ID for the bot to read the roles
