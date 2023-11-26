export interface SteamRecentGame {
  appid: number,
  name: string,
  playtime_forever: number,
  playtime_2weeks: number,
  img_icon_url: string
}

export interface SteamRecentGamesResponse {
  response: {
    total_count: number,
    games: SteamRecentGame[]
  }
}