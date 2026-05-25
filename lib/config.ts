// ═══════════════════════════════════════════════════════════════
//  EDIT THIS FILE TO PERSONALIZE YOUR KEEPSAKE
//  Photos are auto-discovered from /public/photos — no editing needed.
// ═══════════════════════════════════════════════════════════════

export const siteConfig = {
  // Your names
  partnerOne: 'Muntaha',
  partnerTwo: 'Mursaleen',

  // Wedding date — ISO format (YYYY-MM-DDTHH:MM:SS)
  weddingDate: '2026-08-16T11:00:00',

  // Location (optional — leave empty string to hide)
  location: 'Goa, India',

  // Tagline shown on hero
  tagline: 'A love letter, in chapters',

  // Opening quote
  openingQuote: {
    text: 'To love another person is to see the face of God.',
    attribution: 'Victor Hugo',
  },
};

// ═══════════════════════════════════════════════════════════════
//  YOUR STORY — Add as many chapters as you like
//  Photos are picked automatically from /public/photos
// ═══════════════════════════════════════════════════════════════

export type Chapter = {
  number: string;
  date: string;
  title: string;
  body: string;          // Use \n\n for paragraph breaks
  imagePosition?: 'left' | 'right';
};

export const chapters: Chapter[] = [
  {
    number: 'I',
    date: 'Autumn, 2019',
    title: 'A coincidence, almost missed',
    body: 'It started with a question neither of us remembers asking. A friend\'s gathering, a quiet corner, a conversation that should have ended after five minutes but somehow stretched into two hours.\n\nThere was no fireworks, no script. Just the slow surprise of finding someone who laughs at the same things, who finishes the sentences you didn\'t know you were starting.',
    imagePosition: 'right',
  },
  {
    number: 'II',
    date: 'Winter, 2019',
    title: 'The first proper date',
    body: 'A small restaurant we had both been meaning to try. You ordered the wrong thing on purpose and ate mine instead. I pretended to mind.\n\nWe walked afterward, the kind of walk that has no destination — past closed shopfronts and quiet streets, until it was so late it was almost early.',
    imagePosition: 'left',
  },
  {
    number: 'III',
    date: 'Summer, 2021',
    title: 'The trip that changed things',
    body: 'We had planned for the mountains and got rain for five days straight. You said it was the best holiday of your life. I knew then.',
    imagePosition: 'right',
  },
  {
    number: 'IV',
    date: 'Spring, 2023',
    title: 'Building a small world',
    body: 'A flat with too many plants. A coffee machine that became a daily ritual. The kind of love that lives in the ordinary: groceries, laundry folded together, who gets the window seat on the train.\n\nIt is in these unglamorous hours that I learned what forever might feel like.',
    imagePosition: 'left',
  },
  {
    number: 'V',
    date: 'Winter, 2025',
    title: 'A question, an answer',
    body: 'I had a speech prepared. I forgot every word.\n\nYou said yes before I had properly asked.',
    imagePosition: 'right',
  },
  {
    number: 'VI',
    date: 'August 16, 2026',
    title: 'And so, here we are',
    body: 'A day we have rehearsed in conversation a thousand times, finally arriving.\n\nThe rest of this story we get to write together.',
  },
];
