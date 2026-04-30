import type { VercelRequest, VercelResponse } from '@vercel/node';

const NOTION_TOKEN = process.env.NOTION_API_TOKEN!;
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  market: string;
  sector: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, market, sector, message } = req.body as ContactPayload;

  if (!name || !company || !email || !market || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Build the deal name from company + contact name
  const dealName = `${company} — ${name}`;

  // Build contact info string
  const contactInfo = `${email}${market ? ` | Market: ${market}` : ''}`;

  // Build the Notion page payload
  const notionPayload = {
    parent: { database_id: DATABASE_ID },
    properties: {
      'Deal Name': {
        title: [{ text: { content: dealName } }],
      },
      'Contact Info': {
        rich_text: [{ text: { content: contactInfo } }],
      },
      'Stage': {
        status: { name: 'Lead' },
      },
      'Lead Source': {
        select: { name: 'Website' },
      },
      'Notes': {
        rich_text: [
          {
            text: {
              content: `Sector: ${sector || 'Not specified'}\nTarget Market: ${market}`,
            },
          },
        ],
      },
    },
    // Add the message as page body content
    children: [
      {
        object: 'block' as const,
        type: 'heading_2' as const,
        heading_2: {
          rich_text: [{ type: 'text' as const, text: { content: 'Contact Details' } }],
        },
      },
      {
        object: 'block' as const,
        type: 'bulleted_list_item' as const,
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text' as const,
              text: { content: 'Name: ' },
              annotations: { bold: true },
            },
            { type: 'text' as const, text: { content: name } },
          ],
        },
      },
      {
        object: 'block' as const,
        type: 'bulleted_list_item' as const,
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text' as const,
              text: { content: 'Company: ' },
              annotations: { bold: true },
            },
            { type: 'text' as const, text: { content: company } },
          ],
        },
      },
      {
        object: 'block' as const,
        type: 'bulleted_list_item' as const,
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text' as const,
              text: { content: 'Email: ' },
              annotations: { bold: true },
            },
            { type: 'text' as const, text: { content: email } },
          ],
        },
      },
      {
        object: 'block' as const,
        type: 'bulleted_list_item' as const,
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text' as const,
              text: { content: 'Target Market: ' },
              annotations: { bold: true },
            },
            { type: 'text' as const, text: { content: market } },
          ],
        },
      },
      {
        object: 'block' as const,
        type: 'bulleted_list_item' as const,
        bulleted_list_item: {
          rich_text: [
            {
              type: 'text' as const,
              text: { content: 'Sector: ' },
              annotations: { bold: true },
            },
            { type: 'text' as const, text: { content: sector || 'Not specified' } },
          ],
        },
      },
      {
        object: 'block' as const,
        type: 'heading_2' as const,
        heading_2: {
          rich_text: [{ type: 'text' as const, text: { content: 'Message' } }],
        },
      },
      {
        object: 'block' as const,
        type: 'paragraph' as const,
        paragraph: {
          rich_text: [{ type: 'text' as const, text: { content: message } }],
        },
      },
    ],
  };

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notionPayload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Notion API error:', response.status, errorBody);
      return res.status(502).json({ error: 'Failed to create lead in Notion' });
    }

    const result = await response.json();
    return res.status(200).json({ success: true, id: result.id });
  } catch (err) {
    console.error('Notion API request failed:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
