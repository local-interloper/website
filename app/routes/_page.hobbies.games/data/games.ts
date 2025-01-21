export interface GameInfo {
  title: string;
  subtitle: string;
  description: string;
  appId: number;
}

const GAMES: GameInfo[] = [
  {
    title: "Rain World",
    subtitle: "ʕ•-•ʔ",
    description: `
    A funny game that shoves you into a fully simulated ecosystem filled with horrific creatures and arms you with 
    nothing but a piece of trash and rebar. I like bullshit and Rain World provides it.
    `,
    appId: 312520,
  },
  {
    title: "Dark Souls",
    subtitle: "\\[T]/",
    description: `
    A beautifully crafted dark fantasy universe with incredible world design, great combat and awesome character 
    design. This is what you get when you let Legend of Zelda hang out with that twitchy kid in the back of the 
    classroom and he starts showing it his sketchbook.
    `,
    appId: 570940,
  },
  {
    title: "System Shock 2",
    subtitle: "(nah.)",
    description: `
    A beautifully crafted dark fantasy universe with incredible world design, great combat and awesome character 
    design. This is what you get when you let Legend of Zelda hang out with that twitchy kid in the back of the 
    classroom and he starts showing it his sketchbook.
    `,
    appId: 238210,
  },
  {
    title: "Barotrauma",
    subtitle: "(Space Station 13 under the ocean)",
    description: `
    The game is an RPG where you and your crew mates operate a nuclear submarine on the moon Europa. All I'm going to 
    say is that fastest time to kill goes to putting welding gas into an oxygen mask. (don't forget to take the air tank
    and put it instead of welding fuel in order to turn your crew mates into cremates.)
    `,
    appId: 602960,
  },
  {
    title: "SOMA",
    subtitle: "(I don't want this flesh behind my eyes anymore)",
    description: `
    An incredible psychological horror game. It's a proof that given enough creativity and dedication, the horror genre 
    can deliver an amazing experience and thrive in our post Amnesia era. One of my favorite story driven games to this 
    day. Not to mention, of course it was made by Frictional Games.
    `,
    appId: 282140,
  },
  {
    title: "BONEWORKS",
    subtitle: "(Half Life: Alyx crawled so this can run)",
    description: `
    It's a fully physically simulated vomit inducer designed for reality disassociation headsets. It's a massive
    Half-Life reference with an incredible interaction system that allows for some seriously insane stuff and great 
    combat. It further embraces it's sandboxy and exploratory nature with great post game content. It's the ultimate 
    VR playground.
    `,
    appId: 823500,
  },
  {
    title: "Into the Breach",
    subtitle: "(The critically acclaimed Chess 2)",
    description: `
    These guys took chess and turned it into a rouge-like. It's probably the best puzzle game out there. The core 
    systems allow for insane amount of emergent gameplay and that's what sells it. It's incredible how many complex 
    plays can emerge from a set of very simple rules. Also it's made by Subset Games (people behind FTL).
    `,
    appId: 590380
  }
];

export default GAMES;