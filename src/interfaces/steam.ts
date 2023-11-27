export interface SteamRecentGame {
  appid: number;
  name: string;
  playtime_forever: number;
  playtime_2weeks: number;
  img_icon_url: string;
}

export interface SteamRecentGamesResponse {
  response: {
    total_count: number;
    games: SteamRecentGame[];
  };
}

export interface SteamOwnedGamesResponse {
  response: {
    game_count: number;
    games: SteamGame[];
  };
}


export interface SteamGame {
  appid: number;
  playtime_forever: number;
  rtime_last_played: number;
}

export interface GameInfoResponse {
  [key: string]: {
    success: boolean;
    data: AppDetails
  };
}

export interface AppDetails {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  controller_support: string;
  dlc: number[];
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  header_image: string;
  capsule_image: string;
  capsule_imagev5: string;
  website: string;
  pc_requirements: {
    minimum: string;
  };
  mac_requirements: {
    minimum: string;
  };
  linux_requirements: any[];
  developers: string[];
  publishers: string[];
  demos: Demo[];
  price_overview: PriceOverview;
  packages: number[];
  package_groups: PackageGroup[];
  platforms: Platforms;
  metacritic: Metacritic;
  categories: Category[];
  genres: Genre[];
  screenshots: Screenshot[];
  movies: Movie[];
  recommendations: Recommendations;
  achievements: Achievements;
  release_date: ReleaseDate;
  support_info: SupportInfo;
  background: string;
  background_raw: string;
  content_descriptors: ContentDescriptors;
}

export interface Demo {
  appid: number;
  description: string;
}

export interface PriceOverview {
  currency: string;
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
}

export interface PackageGroup {
  name: string;
  title: string;
  description: string;
  selection_text: string;
  save_text: string;
  display_type: number;
  is_recurring_subscription: string;
  subs: Sub[];
}

export interface Sub {
  packageid: number;
  percent_savings_text: string;
  percent_savings: number;
  option_text: string;
  option_description: string;
  can_get_free_license: string;
  is_free_license: boolean;
  price_in_cents_with_discount: number;
}

export interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface Metacritic {
  score: number;
  url: string;
}

export interface Category {
  id: number;
  description: string;
}

export interface Genre {
  id: string;
  description: string;
}

export interface Screenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

export interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  webm: {
    [key: string]: string
  };
  mp4: {
    [key: string]: string
  };
  highlight: boolean;
}

export interface Recommendations {
  total: number;
}

export interface Achievements {
  total: number;
  highlighted: Highlighted[];
}

export interface Highlighted {
  name: string;
  path: string;
}

export interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

export interface SupportInfo {
  url: string;
  email: string;
}

export interface ContentDescriptors {
  ids: any[];
  notes: any;
}

export interface PlayerSummaryResponse {
  response: {
    players: Player[]
  };
}

export interface Player {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
}
