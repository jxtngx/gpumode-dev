import { useState, useEffect } from 'react'

interface Event {
    title: string;
    guest: string;
    date: string;
    // Add other fields as needed based on your XML structure
}

export default function getDiscordEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('YOUR_XML_URL_HERE');
                const xmlText = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

                const eventElements = xmlDoc.getElementsByTagName('event'); // Adjust tag name based on your XML
                const parsedEvents: Event[] = [];

                for (let i = 0; i < eventElements.length; i++) {
                    const event = eventElements[i];
                    parsedEvents.push({
                        title: event.getElementsByTagName('title')[0]?.textContent || '',
                        guest: event.getElementsByTagName('guest')[0]?.textContent || '',
                        date: event.getElementsByTagName('date')[0]?.textContent || '',
                    });
                }

                setEvents(parsedEvents);
            } catch (err) {
                setError('Failed to fetch events');
                console.error('Error fetching events:', err);
            }
        };

        fetchEvents();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Events</h1>
            <div className="events-list">
                {events.map((event, index) => (
                    <div key={index} className="event-item">
                        <h2>{event.title}</h2>
                        <p>{event.guest}</p>
                        <time>{event.date}</time>
                    </div>
                ))}
            </div>
        </div>
    );
}
