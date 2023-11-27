import "server-only";
import {cache} from "react";

import {
  AppDetails,
  GameInfoResponse,
  Player,
  PlayerSummaryResponse,
  SteamGame,
  SteamOwnedGamesResponse,
  SteamRecentGame,
  SteamRecentGamesResponse
} from "@/interfaces/steam";

const STEAM_ID = "76561198071726427";

export const getImageUrl = (appid: number, hash: string): string => {
  return `https://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
};

export const getRecentGames = cache(async (): Promise<SteamRecentGame[]> => {
  const url = [
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames`,
    `/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`
  ].join("");

  const response = await fetch(url, {next: {revalidate: 3600}});

  if (!response.ok) {
    return [];
  }

  const data = await response.json() as SteamRecentGamesResponse;

  return data.response.games;
});


export const getOwnedGames = cache(async (): Promise<SteamGame[]> => {
  const url = [
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}`,
    `&steamid=${STEAM_ID}&format=json`
  ].join("");

  const response = await fetch(url, {next: {revalidate: 86400}});

  if (!response.ok) {
    return [];
  }

  const data = await response.json() as SteamOwnedGamesResponse;

  return data.response.games;
});

export const getPlayerSummary = cache(async (): Promise<Player[]> => {
  const url = [
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}`,
    `&steamids=${STEAM_ID}`
  ].join("");

  const response = await fetch(url, {next: {revalidate: 86400}});

  if (!response.ok) {
    return [];
  }

  const data = await response.json() as PlayerSummaryResponse;

  return data.response.players;
});

export const getAppDetails = cache(async (appid: number): Promise<AppDetails | undefined> => {
  const url = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
  const response = await fetch(url, {next: {revalidate: 86400}});

  if (!response.ok) {
    return;
  }

  const data = await response.json() as GameInfoResponse;

  return data[appid]["data"] as AppDetails;
});