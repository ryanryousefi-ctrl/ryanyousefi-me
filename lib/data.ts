export const publications = [
  { name: "Sports Illustrated", short: "SI" },
  { name: "Miami New Times", short: "MNT" },
  { name: "MiamiDolphins.com", short: "MIA" },
  { name: "Bleacher Report", short: "BR" },
  { name: "USA Today", short: "USAT" },
  { name: "Yahoo! Sports", short: "YS" },
  { name: "MSN", short: "MSN" },
  { name: "UPROXX", short: "UPROXX" },
  { name: "Talk Media", short: "TM" },
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
    title: "Coral Springs' Most Expensive Home Hits Market for $15M",
    publication: "Talk Media",
    summary:
      "A 19,054-square-foot estate in the gated Eagle Trace community has listed for $15 million, potentially attracting high-profile buyers like NBA star Giannis Antetokounmpo, who is rumored to be house hunting in South Florida.",
    category: "Local News",
    href: "https://coralspringstalk.com/coral-springs-most-expensive-home-59884",
    year: "2026",
  },
  {
    title: "Taking a Breath of Fresh Air: Zach Sieler's Story",
    publication: "MiamiDolphins.com",
    summary:
      "A longform profile of Dolphins defensive tackle Zach Sieler - from a small Michigan town to the NFL, life in an RV, and co-owning a hunting ranch in Florida. The story of a player who has never let professional football define the whole of who he is.",
    category: "Sports",
    href: "https://www.miamidolphins.com/news/longform/taking-a-breath-of-fresh-air-zach-sieler-s-story",
    year: "2021",
  },
  {
    title: "How Dodson Has Embraced the Rookie LBs (Though Still Not Ready to Step Aside)",
    publication: "Sports Illustrated",
    summary:
      "Miami Dolphins linebacker Tyrel Dodson on mentoring the next generation while still competing for his own role - a veteran's grace under pressure.",
    category: "Sports",
    href: "https://www.si.com/nfl/dolphins/onsi/how-dodson-has-embraced-the-rookie-lbs-though-still-not-ready-to-step-aside-01kthv940n7j",
    year: "2026",
  },
  {
    title: "How Johnson Already Is Showing He's Not a Typical Rookie",
    publication: "Sports Illustrated",
    summary:
      "Cornerback Chris Johnson arrived at minicamp and immediately looked like someone who had already been here. A closer look at what makes him different.",
    category: "Sports",
    href: "https://www.si.com/nfl/dolphins/onsi/how-johnson-already-is-showing-he-s-not-a-typical-rookie-01ktf43jrs3q",
    year: "2026",
  },
  {
    title: "How Gordon Is Setting Himself Up for a Big Second Season",
    publication: "Sports Illustrated",
    summary:
      "Running back Ollie Gordon came in knowing exactly what he needed to fix. His preparation heading into year two suggests he's already done it.",
    category: "Sports",
    href: "https://www.si.com/nfl/dolphins/onsi/how-gordon-is-setting-himself-up-for-a-big-second-season-01ktcs2pawz9",
    year: "2026",
  },
  {
    title: "Why the Dolphins Won't Have the No. 1 Pick in the 2027 Draft",
    publication: "Sports Illustrated",
    summary:
      "An analysis of Miami's draft positioning and why, despite low expectations, the Dolphins aren't headed toward the top of next year's board.",
    category: "Sports",
    href: "https://www.si.com/nfl/dolphins/onsi/why-the-dolphins-won-t-have-the-no-1-pick-in-the-2027-draft-01ks5s926sh0",
    year: "2026",
  },
  {
    title: "10 Reasons To Be Excited About the Dolphins' 2026 Season Despite the Low Expectations",
    publication: "Sports Illustrated",
    summary:
      "The expectations are low. The reasons for optimism aren't. Ten arguments for why Miami's new era under GM Jon-Eric Sullivan and head coach Jeff Hafley deserves more credit than it's getting.",
    category: "Sports",
    href: "https://www.si.com/nfl/dolphins/onsi/10-reasons-to-be-excited-about-the-dolphins-2026-season-despite-the-low-expectations-01krnxrs1qbp",
    year: "2026",
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
    period: "2026 - Present",
    title: "Contributor",
    company: "Sports Illustrated",
    description:
      "Covered professional and college sports for one of the most recognized names in American sports media. Reported on the NFL, NBA, and college athletics while contributing features and analysis to SI's digital platforms.",
    authorPage: "https://www.si.com/nfl/dolphins/onsi/author/ryan-yousefi",
  },
  {
    period: "2023 - Present",
    title: "Head of Content & Communications",
    company: "Third Time Games / Photo Finish LIVE",
    description:
      "Led content strategy and communications for a Web3 gaming company and its flagship product, Photo Finish LIVE - a blockchain-based horse racing simulation with a passionate global community. Built editorial voice from the ground up and managed communications across product launches, community events, and partnerships.",
    authorPage: "https://thirdtimegames.com/",
  },
  {
    period: "2025 - 2026",
    title: "Editor",
    company: "Pro Football Sports Network",
    description:
      "Led editorial operations for a dedicated professional football media outlet, overseeing coverage, shaping editorial voice, and ensuring the standard of reporting that serious football fans expect - from breaking news to in-depth analysis across the NFL landscape.",
    authorPage: "https://www.profootballnetwork.com/",
  },
  {
    period: "2021 - 2022",
    title: "Contributor",
    company: "MiamiDolphins.com",
    description:
      "Contributed longform storytelling and feature writing directly for the Miami Dolphins, bringing a journalist's eye to the stories behind the players and the franchise - the kind of deeply reported, human-centered pieces that go beyond the box score.",
    authorPage: "https://www.miamidolphins.com/news/longform/taking-a-breath-of-fresh-air-zach-sieler-s-story",
  },
  {
    period: "2021 - 2022",
    title: "Director of Content",
    company: "Virtual Human Studios",
    description:
      "Crafted editorial strategy, social media content, and community management for one of the original juggernauts in Web3 gaming. Built and executed content programs that brought the studio's worlds to life across platforms - telling the stories behind the technology and growing a dedicated community of players and believers at the frontier of blockchain gaming.",
    authorPage: "https://vhslab.com/",
  },
  {
    period: "2021 - Present",
    title: "Staff Writer",
    company: "Talk Media",
    description:
      "Written thousands of news stories spanning sports, crime, food, culture, and breaking news across Talk Media's network of publications - bringing the same speed, accuracy, and storytelling instincts developed across years of alt-weekly journalism to a high-volume, high-stakes news environment.",
    authorPage: "https://coralspringstalk.com/author/ryan-yousefi",
  },
  {
    period: "2013 - Present",
    title: "Staff Writer",
    company: "Miami New Times",
    description:
      "Reported on Miami's food, nightlife, arts, and culture scene for South Florida's most-read alternative newspaper. Broke local stories, wrote cover features, and built a readership through both print and digital.",
    authorPage: "https://www.miaminewtimes.com/author/ryan-yousefi/",
  },
  {
    period: "2020 - 2021",
    title: "Staff Writer",
    company: "Phoenix New Times",
    description:
      "Covered Phoenix's dining, entertainment, and local culture for the Southwest's premier alt-weekly. Developed a beat across food criticism, event coverage, and investigative local reporting.",
    authorPage: "https://www.phoenixnewtimes.com/author/ryan-yousefi/",
  },
  {
    period: "2016 - 2018",
    title: "On-Air Contributor",
    company: "ESPN Radio - 790 The Ticket Miami",
    description:
      "Contributed sports commentary and analysis to ESPN Radio's 790 The Ticket, Miami's premier sports radio station. Brought the same depth and perspective developed through years of sports writing to a live broadcast format, covering local teams and national storylines for South Florida's most passionate sports audience.",
    authorPage: "https://www.audacy.com/wqam",
  },
  {
    period: "2014 - 2016",
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
