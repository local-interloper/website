import "server-only";
import {cache} from "react";

import {SteamRecentGame, SteamRecentGamesResponse} from "@/interfaces/steam-recent";

const URL = [
  `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames`,
  `/v0001/?key=${process.env.STEAM_API_KEY}&steamid=76561198071726427&format=json`
].join("");

export const getImageUrl = (appid: number, hash: string): string => {
  return `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
};

export const getRecentGames = cache(async (): Promise<SteamRecentGame[] | undefined> => {
  const response = await fetch(URL);

  if (!response.ok) {
    return;
  }

  const data = await response.json() as SteamRecentGamesResponse;

  return data.response.games;
});

export const getGames = cache(async (): Promise<SteamRecentGame[] | undefined> => {
  const response = await fetch(URL);

  if (!response.ok) {
    return;
  }

  const data = await response.json() as SteamRecentGamesResponse;

  return data.response.games;
});
