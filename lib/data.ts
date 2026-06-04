export const publications = [
  { name: "Sports Illustrated", short: "SI" },
  { name: "Miami New Times", short: "MNT" },
  { name: "Phoenix New Times", short: "PNT" },
  { name: "UPROXX", short: "UPROXX" },
  { name: "Voice Media Group", short: "VMG" },
  { name: "Photo Finish LIVE", short: "PFL" },
];

export type ArticleCategory =
  | "Journalism"
  | "Sports"
  | "Gaming & Technology"
  | "Local News"
  | "Opinion & Commentary";

export interface Article {
  title: string;
  publication: string;
  summary: string;
  category: ArticleCategory;
  href: string;
  year?: string;
}

export const articles: Article[] = [
  {
    title: "The Business of Horse Racing in the Digital Age",
    publication: "Photo Finish LIVE",
    summary:
      "An inside look at how blockchain technology and fantasy gaming are reshaping one of sport's oldest institutions, and why a new generation of fans is finding their way to the track.",
    category: "Gaming & Technology",
    href: "#",
    year: "2024",
  },
  {
    title: "Inside the Solana Summer Camp: Web3's Bet on Southeast Asia",
    publication: "Photo Finish LIVE",
    summary:
      "From Da Nang to Ho Chi Minh City, a wave of builders is creating the infrastructure for a decentralized future — and the energy in the room is unlike anything in American tech.",
    category: "Gaming & Technology",
    href: "#",
    year: "2023",
  },
  {
    title: "The Making of a Miami Institution",
    publication: "Miami New Times",
    summary:
      "Some restaurants survive South Florida's notoriously brutal dining market. A rare few become something more — a fixture, a landmark, a reason to drive across town.",
    category: "Local News",
    href: "#",
    year: "2019",
  },
  {
    title: "Nightlife After the Pandemic: What We Lost, What We Found",
    publication: "Miami New Times",
    summary:
      "The clubs came back. The music came back. But something had shifted — in the crowd, in the city, and in what we need from a night out.",
    category: "Local News",
    href: "#",
    year: "2021",
  },
  {
    title: "Phoenix's Food Scene Has a Secret",
    publication: "Phoenix New Times",
    summary:
      "The desert city has long lived in the shadow of its coastal counterparts. A new class of chefs and restaurateurs is ready to change the conversation.",
    category: "Local News",
    href: "#",
    year: "2018",
  },
  {
    title: "The Athletes Who Disappeared",
    publication: "UPROXX",
    summary:
      "Fame in professional sports arrives fast and leaves faster. What happens to the players the cameras stop following?",
    category: "Sports",
    href: "#",
    year: "2020",
  },
  {
    title: "Why the NFL Draft Feels Like the Super Bowl Now",
    publication: "Sports Illustrated",
    summary:
      "Thirty years ago, the draft was a two-paragraph transaction. Today it's a prime-time spectacle. The story of how a personnel exercise became America's second-biggest football holiday.",
    category: "Sports",
    href: "#",
    year: "2022",
  },
  {
    title: "The Rise of Sports Betting and the Fans It's Changing",
    publication: "Sports Illustrated",
    summary:
      "Legalized gambling has transformed how millions of Americans watch sports. Whether that's good for the game depends on who you ask.",
    category: "Sports",
    href: "#",
    year: "2023",
  },
  {
    title: "Dispatches from the Edge of the Internet",
    publication: "UPROXX",
    summary:
      "A tour through the stranger corners of digital culture — the subreddits, Discord servers, and parasocial relationships that define how a generation entertains itself.",
    category: "Opinion & Commentary",
    href: "#",
    year: "2021",
  },
  {
    title: "What Good Writing Owes the Reader",
    publication: "Voice Media Group",
    summary:
      "An editor's argument for clarity, honesty, and the radical act of trusting your audience to handle the truth.",
    category: "Opinion & Commentary",
    href: "#",
    year: "2019",
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  authorPage?: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "Contributor",
    company: "Sports Illustrated",
    description:
      "Covered professional and college sports for one of the most recognized names in American sports media. Reported on the NFL, NBA, and college athletics while contributing features and analysis to SI's digital platforms.",
    authorPage: "https://www.si.com/nfl/dolphins/onsi/author/ryan-yousefi",
  },
  {
    period: "2023 — Present",
    title: "Head of Content & Communications",
    company: "Third Time Games / Photo Finish LIVE",
    description:
      "Led content strategy and communications for a Web3 gaming company and its flagship product, Photo Finish LIVE — a blockchain-based horse racing simulation with a passionate global community. Built editorial voice from the ground up and managed communications across product launches, community events, and partnerships.",
    authorPage: "https://thirdtimegames.com/",
  },
  {
    period: "2025 — 2026",
    title: "Editor",
    company: "Pro Football Sports Network",
    description:
      "Led editorial operations for a dedicated professional football media outlet, overseeing coverage, shaping editorial voice, and ensuring the standard of reporting that serious football fans expect — from breaking news to in-depth analysis across the NFL landscape.",
    authorPage: "https://www.profootballnetwork.com/",
  },
  {
    period: "2021 — 2022",
    title: "Director of Content",
    company: "Virtual Human Studios",
    description:
      "Crafted editorial strategy, social media content, and community management for one of the original juggernauts in Web3 gaming. Built and executed content programs that brought the studio's worlds to life across platforms — telling the stories behind the technology and growing a dedicated community of players and believers at the frontier of blockchain gaming.",
    authorPage: "https://vhslab.com/",
  },
  {
    period: "2021 — Present",
    title: "Staff Writer",
    company: "Talk Media",
    description:
      "Written thousands of news stories spanning sports, crime, food, culture, and breaking news across Talk Media's network of publications — bringing the same speed, accuracy, and storytelling instincts developed across years of alt-weekly journalism to a high-volume, high-stakes news environment.",
    authorPage: "https://coralspringstalk.com/author/ryan-yousefi",
  },
  {
    period: "2013 — Present",
    title: "Staff Writer",
    company: "Miami New Times",
    description:
      "Reported on Miami's food, nightlife, arts, and culture scene for South Florida's most-read alternative newspaper. Broke local stories, wrote cover features, and built a readership through both print and digital.",
    authorPage: "https://www.miaminewtimes.com/author/ryan-yousefi/",
  },
  {
    period: "2020 — 2021",
    title: "Staff Writer",
    company: "Phoenix New Times",
    description:
      "Covered Phoenix's dining, entertainment, and local culture for the Southwest's premier alt-weekly. Developed a beat across food criticism, event coverage, and investigative local reporting.",
    authorPage: "https://www.phoenixnewtimes.com/author/ryan-yousefi/",
  },
  {
    period: "2016 — 2018",
    title: "On-Air Contributor",
    company: "ESPN Radio — 790 The Ticket Miami",
    description:
      "Contributed sports commentary and analysis to ESPN Radio's 790 The Ticket, Miami's premier sports radio station. Brought the same depth and perspective developed through years of sports writing to a live broadcast format, covering local teams and national storylines for South Florida's most passionate sports audience.",
  },
  {
    period: "2014 — 2016",
    title: "Contributor",
    company: "UPROXX",
    description:
      "Wrote sports and culture features for UPROXX, one of the web's leading destinations for music, sports, and entertainment journalism. Contributed essays, longform profiles, and cultural analysis.",
    authorPage: "https://uproxx.com/author/ryan-yousefi/",
  },
];

export interface SpeakingItem {
  title: string;
  event: string;
  format: string;
  description: string;
  year: string;
}

export const speakingItems: SpeakingItem[] = [
  {
    title: "Building Community in Web3 Gaming",
    event: "Solana Summer Camp",
    format: "Workshop",
    description:
      "Led a workshop on audience development and storytelling for Web3 projects, drawing on lessons from traditional journalism and applied to decentralized gaming ecosystems.",
    year: "2023",
  },
  {
    title: "The Future of Sports Media",
    event: "Industry Panel",
    format: "Panel Discussion",
    description:
      "Joined fellow sports media professionals to discuss the shifting landscape of fan engagement, streaming, and the monetization of sports content in the post-broadcast era.",
    year: "2022",
  },
  {
    title: "Alt-Weekly Journalism in the Digital Age",
    event: "Voice Media Group Editorial Summit",
    format: "Keynote",
    description:
      "Presented on sustaining the alt-weekly editorial model in an era of platform dependency, audience fragmentation, and the erosion of local advertising revenue.",
    year: "2020",
  },
  {
    title: "Storytelling for Non-Journalists",
    event: "Marketing & Communications Workshop",
    format: "Workshop",
    description:
      "A practical workshop on applying journalistic storytelling techniques to brand communications, marketing copy, and executive communications.",
    year: "2021",
  },
  {
    title: "Food Writing and the City",
    event: "Miami Media Meetup",
    format: "Podcast / Radio",
    description:
      "Appeared on a local media podcast to discuss the craft of restaurant criticism, the ethics of food writing, and what it means to cover a city's culture through its kitchens.",
    year: "2019",
  },
];
