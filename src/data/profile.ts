/**
 * ============================================================
 *  YOUR PERSONAL DATA LIVES HERE.  Edit this file, not components.
 *  Anything marked PLACEHOLDER is sample text to replace.
 * ============================================================
 */

export const site = {
  title: 'kiroku 記録',
  // PLACEHOLDER: replace with your full name
  name: 'Davy',
  handle: 'davy-null',
  // PLACEHOLDER: tagline
  tagline: 'Uncertainty Is Inherently Unsustainable.Eventually,Everything Either Is Or Isnt.',
  taglineJp: '闇を読み、仕組みを守る',
  description:
    'Personal archive of a cybersecurity and cloud developer in Nairobi: write-ups, CTF notes, projects and milestones.',
  location: 'Nairobi, Kenya',
  timezone: 'Africa/Nairobi',
  tzLabel: 'EAT',
  lat: -1.29,
  lon: 36.82,
  status: 'open to internships and security collaborations', // PLACEHOLDER
  /** Show the "sample" badge on entries marked placeholder: true. Set false when you go live. */
  showPlaceholderBadges: true,
};

export const intro = {
  // PLACEHOLDER: replace with your own story
  short:
    'Self-taught developer and computer science student focused on cybersecurity and cloud. I break things in labs, fix them in production, and write down what I learn so the next person loses less time.',
  long: [
    'I started with web development and kept pulling threads: every app I shipped raised a question about how it could fail, and every answer pointed deeper into Linux, networks and the cloud.',
    'Today I split my time between hands-on security practice (CTFs, labs, web app assessments), building products for Kenyan businesses, and leading cloud and DevOps work in my student community.',
  ],
};

/** Who you are, shown as a character sheet on the About page. PLACEHOLDER values. */
export const profileSheet = [
  { k: 'Name', v: site.name },
  { k: 'Handle', v: site.handle },
  { k: 'Class', v: 'Security-minded full-stack developer' },
  { k: 'Base', v: site.location },
  { k: 'Guild', v: 'Logical Solutions Technology, GDG' },
  { k: 'Weapon of choice', v: 'Linux terminal' },
  { k: 'Currently', v: 'Cloud, AWS, security labs' },
];

/** Level progression. level: 1-99. xp: 0-100 progress toward next level. PLACEHOLDER numbers. */
export const skills = [
  { name: 'Cybersecurity', jp: '防衛', level: 14, xp: 62, note: 'Web app testing, network enumeration, OWASP Top 10' },
  { name: 'Linux & Networking', jp: '基盤', level: 16, xp: 40, note: 'Shell, permissions, services, TCP/IP, SSH' },
  { name: 'Programming', jp: '術式', level: 15, xp: 75, note: 'TypeScript, Python, C++' },
  { name: 'Cloud', jp: '雲', level: 11, xp: 55, note: 'AWS, GCP basics, IAM' },
  { name: 'DevOps', jp: '流れ', level: 12, xp: 30, note: 'Docker, CI/CD, Terraform, Ansible' },
  { name: 'Ethical hacking', jp: '侵入', level: 10, xp: 80, note: 'HackTheBox, TryHackMe, OverTheWire' },
];

export const interests = [
  { name: 'Cybersecurity', jp: '防衛' },
  { name: 'Ethical hacking', jp: '侵入' },
  { name: 'Software development', jp: '開発' },
  { name: 'Linux', jp: '基盤' },
  { name: 'Cloud computing', jp: '雲' },
  { name: 'DevOps', jp: '流れ' },
];

/** The journey, oldest to newest. This IS a sequence, so it is numbered. PLACEHOLDER dates and text. */
export const timeline = [
  { when: '2021', title: 'First site shipped', text: 'Built and deployed a small web project. Realised I cared more about how it broke than how it looked.' },
  { when: '2022', title: 'University and the terminal', text: 'Began computer science studies. Moved my daily work into Linux and the command line.' },
  { when: '2023', title: 'Co-founded Logical Solutions Technology', text: 'Started building websites, security audits and M-Pesa integrations for Kenyan SMEs and student startups.' },
  { when: '2024', title: 'Labs, wargames and CTFs', text: 'Worked through OverTheWire Bandit, TryHackMe and HackTheBox. Started writing the lessons down.' },
  { when: '2026', title: 'Leading cloud and DevOps', text: 'Appointed DevOps lead at school, then cloud computing lead for Google Developer Groups.' },
];

export const philosophy = [
  { title: 'Break it to understand it', text: 'I learn a system fastest by finding out how it fails, in an environment where failing is allowed.' },
  { title: 'Write it down', text: 'If I cannot explain a technique in plain words, I have not learned it yet. Every lab becomes a write-up.' },
  { title: 'Iterate in the open', text: 'Ship the rough version, learn from it, ship the better one. Progress beats polish.' },
  { title: 'Defence is the point', text: 'Offence teaches me what to protect. The goal is always a safer system.' },
];

export const goals = [
  'Earn a recognised cloud certification and keep building on AWS.',
  'Compete regularly in CTFs and climb the HackTheBox ranks.',
  'Grow Logical Solutions Technology into a trusted security and web partner for Kenyan SMEs.',
  'Publish one useful write-up every two weeks.',
];

/** Mission log. status: active | queued | cleared. PLACEHOLDER. */
export const missions = [
  { title: 'Ship Shamba Advisor v1', detail: 'Crop advice over USSD and SMS for smallholder farmers.', status: 'active', progress: 70 },
  { title: 'Build a CTF-assistant agent', detail: 'An AI helper that organises notes and suggests next enumeration steps.', status: 'active', progress: 25 },
  { title: 'AWS certification', detail: 'Study plan and practice labs through GDG cloud sessions.', status: 'active', progress: 40 },
  { title: 'Publish the Bandit series', detail: 'Write up the early levels as beginner-friendly Linux lessons.', status: 'queued', progress: 0 },
  { title: 'Terraform and Ansible baseline', detail: 'Reusable infrastructure templates for client projects.', status: 'queued', progress: 10 },
  { title: 'DVWA assessment report', detail: 'OWASP Top 10 walkthrough with findings and fixes.', status: 'cleared', progress: 100 },
];

export const socials = {
  // PLACEHOLDER email: replace with your public contact address
  email: 'hello@davy-null.example.com',
  github: 'https://github.com/davy-null',
  // PLACEHOLDER: add your real URLs
  linkedin: 'https://www.linkedin.com/in/your-handle',
  others: [
    { label: 'TryHackMe', url: 'https://tryhackme.com/p/your-handle' },
    { label: 'HackTheBox', url: 'https://app.hackthebox.com/users/your-id' },
    { label: 'X / Twitter', url: 'https://x.com/your-handle' },
  ],
};

/**
 * Contact form. Leave endpoint empty to open the visitor's email app (works with no backend).
 * For direct delivery, create a free form at formspree.io or web3forms.com and paste the URL here.
 */
export const contactForm = {
  endpoint: '',
};

export const nav = [
  { href: '/', label: 'Origin', jp: '起源' },
  { href: '/about/', label: 'Profile', jp: '人物' },
  { href: '/writeups/', label: 'Archive', jp: '記録' },
  { href: '/achievements/', label: 'Trophies', jp: '実績' },
  { href: '/projects/', label: 'Works', jp: '作品' },
  { href: '/contact/', label: 'Signal', jp: '通信' },
];
