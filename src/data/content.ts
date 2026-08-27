export interface ShowcaseContent {
  title: string;
  link?: string;
  image: string;
}

export interface FeatureContent {
  title: string;
  text: string;
  image: string;
  link?: string;
}

export interface FooterGroupContent {
  heading: string;
  links: string[];
  secondary?: string;
  extra: string[];
}

export interface PromptCardContent {
  category: string;
  icon: string;
  text: string;
}

export const promptCards = [
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, open Safari and search for the latest Apple news.' },
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, open Spotify and play Blonde by Frank Ocean.' },
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, find the screenshot I took today and open it.' },
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, turn on Dark Mode.' },
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, open my Downloads folder and show me the files I downloaded today.' },
  { category: 'Everyday Mac Control', icon: '🖥️', text: 'Motus, find the PDF called “Invoice” and open it.' },

  { category: 'Files & Organization', icon: '📁', text: 'Motus, clean up my Desktop. Organize everything into appropriate folders without deleting anything.' },
  { category: 'Files & Organization', icon: '📁', text: 'Motus, find all the screenshots from this month and put them in a folder called Screenshots.' },
  { category: 'Files & Organization', icon: '📁', text: 'Motus, find all PDF files in my Downloads folder and move them into a folder called Documents.' },
  { category: 'Files & Organization', icon: '📁', text: 'Motus, find duplicate files in my Documents folder and tell me which ones I can safely remove.' },
  { category: 'Files & Organization', icon: '📁', text: 'Motus, find the largest files on my Mac and show me what’s taking up the most space.' },
  { category: 'Files & Organization', icon: '📁', text: 'Motus, find every file related to the Motus project and organize them for me.' },

  { category: 'Communication', icon: '💬', text: 'Motus, open Slack and send Michael “Hey, are we still on for the meeting at 3?”' },
  { category: 'Communication', icon: '💬', text: 'Motus, find my conversation with Sarah and summarize what we discussed today.' },
  { category: 'Communication', icon: '💬', text: 'Motus, check my messages and tell me if anyone is waiting for a response from me.' },
  { category: 'Communication', icon: '💬', text: 'Motus, draft a reply to the latest message from David, but don’t send it yet.' },
  { category: 'Communication', icon: '💬', text: 'Motus, find the message where someone sent me the API credentials and tell me which conversation it’s in.' },

  { category: 'Web Research', icon: '🌐', text: 'Motus, find five current senior software engineering jobs that are hiring remotely and put the best ones in Notes.' },
  { category: 'Web Research', icon: '🌐', text: 'Motus, research the latest MacBook Pro and tell me whether it’s worth upgrading from my current Mac.' },
  { category: 'Web Research', icon: '🌐', text: 'Motus, find the cheapest flight to London next Friday and compare the best options.' },
  { category: 'Web Research', icon: '🌐', text: 'Motus, find the latest news about OpenAI and give me a summary.' },
  { category: 'Web Research', icon: '🌐', text: 'Motus, research our top five competitors and create a comparison in a note.' },

  { category: 'Coding / Developer Work', icon: '👨‍💻', text: 'Motus, run this project and fix whatever is causing the build to fail.' },
  { category: 'Coding / Developer Work', icon: '👨‍💻', text: 'Motus, find the authentication bug in this project, fix it, and run the tests to verify the fix.' },
  { category: 'Coding / Developer Work', icon: '👨‍💻', text: 'Motus, look through this codebase and find any obvious security vulnerabilities.' },
  { category: 'Coding / Developer Work', icon: '👨‍💻', text: 'Motus, update this project to the latest compatible version of its dependencies and make sure everything still works.' },
  { category: 'Coding / Developer Work', icon: '👨‍💻', text: 'Motus, find why this API endpoint is returning a 500 error and fix it.' },

  { category: 'Autonomous / Multi-Step Tasks', icon: '🧠', text: 'Motus, prepare everything I need for tomorrow’s meeting. Find the meeting, gather the relevant files, summarize them, and create a preparation note.' },
  { category: 'Autonomous / Multi-Step Tasks', icon: '🧠', text: 'Motus, download the latest version of this project, install the dependencies, run it, fix any errors you encounter, and let me know when it’s working.' },
  { category: 'Autonomous / Multi-Step Tasks', icon: '🧠', text: 'Motus, research this company, find their competitors, compare their products and pricing, and create a report in my Documents folder.' },

  { category: 'Demo', icon: '🔥', text: 'Motus, I need to prepare for tomorrow’s meeting. Figure out what I need, find the relevant information on my Mac and the web, organize everything, and let me know when you’re done.' },
] satisfies PromptCardContent[];

export const showcases: ShowcaseContent[] = [
  { title: 'Writes, brainstorms, edits,\nand explores ideas with you', image: '/reference/showcase-write.jpg' },
  { title: 'Summarize meetings. Find new\ninsights. Increase productivity.', image: '/reference/showcase-meetings.jpg' },
  { title: 'Generate and debug code. Automate\nrepetitive tasks. Learn new APIs.', image: '/reference/showcase-code.jpg' },
  { title: 'Learn something new. Dive into a\nhobby. Answer complex questions.', image: '/reference/showcase-learn.jpg' },
];

export const features: FeatureContent[] = [
  { title: 'Type, talk, and use it your way', text: 'With ChatGPT, you can type or start a voice conversation by tapping the headphone icon in the mobile app.', image: '/reference/feature-voice.jpg' },
  { title: 'Browse the web', text: 'ChatGPT can answer your questions using its vast knowledge and with information from the web.', image: '/reference/feature-web.jpg' },
  { title: 'Analyze data and create charts', text: 'Upload a file and ask ChatGPT to help analyze data, summarize information or create a chart.', image: '/reference/feature-data.jpg' },
  { title: 'Talk about an image', text: 'Take or upload an image and ask ChatGPT about it.', image: '/reference/feature-image.jpg' },
  { title: 'Customize ChatGPT for work, daily tasks or inspiration with GPTs', text: 'Explore the GPT store and see what others have made. ChatGPT Plus users can also create their own custom GPTs.', image: '/reference/feature-gpts.jpg' },
  { title: 'Create images', text: 'Ask ChatGPT to create images using a simple sentence or detailed paragraph.', image: '/reference/feature-create.jpg' },
  { title: 'Apple & ChatGPT', text: 'At WWDC in June 2024, we announced a partnership with Apple to integrate ChatGPT into experiences within iOS, iPadOS, and macOS.', image: '/reference/feature-apple.jpg', link: 'Learn more' },
];

export const freePlanItems = [
  'Core text and voice conversations',
  'Conversation history across your workspace',
  'Web research and file support',
  'Prompt refinement for clearer requests',
  'Essential tools for everyday work',
];

export const plusPlanItems = [
  'Everything in Starter',
  'Longer project memory and context',
  'Higher limits for voice, files, and research',
  'Advanced tools and real actions',
  'Priority access to new capabilities',
  'Faster responses during busy periods',
];

export const footerGroups: FooterGroupContent[] = [
  { heading: 'Product', links: ['Native voice', 'Connected workspace', 'Real actions', 'Prompt refinement'], extra: [] },
  { heading: 'Use cases', links: ['Writing', 'Research', 'Planning', 'Everyday work'], extra: [] },
  { heading: 'Resources', links: ['Download', 'Updates', 'Help center', 'System status'], extra: [] },
  { heading: 'Company', links: ['About', 'Careers', 'Contact'], extra: [] },
  { heading: 'Legal', links: ['Terms', 'Privacy', 'Security'], extra: [] },
];
