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

export const promptCards = [
  'Tell me a fun fact about the Roman Empire ↗',
  'Write a text inviting my neighbors to a barbecue ↗',
  "Give me ideas for what to do with my kids' art ↗",
  'Help me study vocabulary for a college entrance exam ↗',
  'Help me pick an outfit that will look good on camera ↗',
  'Write an email to request a quote from local plumbers ↗',
  'Create a charter to start a film club ↗',
  'Write a Python script to automate sending daily email reports ↗',
  'Quiz me on world capitals to enhance my geography skills ↗',
  'Design a programming game that teaches basics in a fun way ↗',
  'Make up a story about Sharky, a tooth-brushing shark superhero ↗',
  'Explain nostalgia to a kindergartener ↗',
];

export const showcases: ShowcaseContent[] = [
  { title: 'Writes, brainstorms, edits,\nand explores ideas with you', link: 'Learn more about writing with ChatGPT ›', image: '/reference/showcase-write.jpg' },
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
  'Assistance with writing, problem solving and more',
  'Access to GPT-4o mini',
  'Limited access to GPT-4o',
  'Limited access to advanced data analysis, file uploads, vision, web browsing, and image generation',
  'Use custom GPTs',
];

export const plusPlanItems = [
  'Early access to new features',
  'Access to GPT-4, GPT-4o, GPT-4o mini',
  'Up to 5x more messages for GPT-4o',
  'Access to advanced data analysis, file uploads, vision, and web browsing',
  'DALL·E image generation',
  'Create and use custom GPTs',
];

export const footerGroups: FooterGroupContent[] = [
  { heading: 'Our research', links: ['Overview', 'Index'], secondary: 'Latest advancements', extra: ['OpenAI o1', 'GPT-4', 'GPT-4o mini', 'DALL·E 3', 'Sora'] },
  { heading: 'ChatGPT', links: ['For Everyone', 'For Teams', 'For Enterprises', 'ChatGPT login ↗', 'Download'], secondary: 'API', extra: ['Platform overview', 'Pricing', 'Documentation ↗', 'API login ↗', '', 'Explore more', 'OpenAI for business', 'Stories'] },
  { heading: 'Safety overview', links: ['Safety overview'], secondary: 'Teams', extra: [] },
  { heading: 'Company', links: ['About us', 'News', 'Our Charter', 'Security', 'Residency', 'Careers'], extra: [] },
  { heading: 'Terms & policies', links: ['Terms of use', 'Privacy policy', 'Brand guidelines', 'Other policies'], extra: [] },
];
