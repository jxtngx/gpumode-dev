import { XMLParser } from 'fast-xml-parser'
import fs from 'fs'


export function readXMLFile(filePath: string): any {
  const xmlString = fs.readFileSync(filePath, 'utf-8');
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlString);

  return jsonObj;
}

// interface ScheduledEvent {
//     id: string;
//     guild_id: string;
//     name: string;
//     description?: string;
//     scheduled_start_time: string;
//     scheduled_end_time?: string;
//     privacy_level: number;
//     status: number;
//     entity_type: number;
//     entity_id?: string;
//     creator_id?: string;
//     // Add other fields as needed
// }



export async function fetchGuildScheduledEvents() {
    const guildId = process.env.GUILD_ID
    const token = process.env.DISCORD_TOKEN

  try {
      const response = await fetch(`https://discord.com/api/v10/guilds/${guildId}/scheduled-events`, {
          headers: {
              'Authorization': `Bot ${token}`,
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const events = await response.json();
      console.log(events)
      return events;
  } catch (error) {
      console.error('Error fetching scheduled events:', error);
      throw error;
  }
}
