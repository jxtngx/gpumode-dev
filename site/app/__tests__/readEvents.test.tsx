const getDiscordEvents = require('../components/discordEvents')

// Setup global mocks
global.fetch = jest.fn()
global.DOMParser = jest.fn()

const mockXmlResponse = `
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <entry>
    <title>Introduction to React</title>
    <summary>Guest: Dan Abramov</summary>
    <published>2024-04-15T19:00:00Z</published>
  </entry>
  <entry>
    <title>TypeScript Best Practices</title>
    <summary>Guest: Anders Hejlsberg</summary>
    <published>2024-04-22T19:00:00Z</published>
  </entry>
</feed>
`

describe('getDiscordEvents', () => {
    beforeEach(() => {
        jest.clearAllMocks()

        // Mock DOMParser
        const entries = [
            {
                querySelector: (selector) => ({
                    textContent: 
                        selector === 'title' ? 'Introduction to React' :
                        selector === 'summary' ? 'Guest: Dan Abramov' :
                        selector === 'published' ? '2024-04-15T19:00:00Z' : ''
                })
            },
            {
                querySelector: (selector) => ({
                    textContent: 
                        selector === 'title' ? 'TypeScript Best Practices' :
                        selector === 'summary' ? 'Guest: Anders Hejlsberg' :
                        selector === 'published' ? '2024-04-22T19:00:00Z' : ''
                })
            }
        ];

        // @ts-ignore
        global.DOMParser.mockImplementation(() => ({
            parseFromString: () => ({
                getElementsByTagName: (tag) => tag === 'entry' ? entries : []
            })
        }))

        // Mock fetch response
        // @ts-ignore
        global.fetch.mockResolvedValue({
            text: () => Promise.resolve(mockXmlResponse)
        })
    })

    it('fetches and parses events from Atom feed', async () => {
        const result = await getDiscordEvents()
        
        expect(global.fetch).toHaveBeenCalledWith(
            'https://discord.com/api/guilds/1163851265125019668/events.atom'
        )
        
        expect(result).toEqual([
            {
                title: 'Introduction to React',
                description: 'Guest: Dan Abramov',
                date: '2024-04-15T19:00:00Z'
            },
            {
                title: 'TypeScript Best Practices',
                description: 'Guest: Anders Hejlsberg',
                date: '2024-04-22T19:00:00Z'
            }
        ])
    })

    it('handles fetch error gracefully', async () => {
        // @ts-ignore
        global.fetch.mockRejectedValue(new Error('Network error'))

        const result = await getDiscordEvents()
        expect(result).toEqual([])
    })
})