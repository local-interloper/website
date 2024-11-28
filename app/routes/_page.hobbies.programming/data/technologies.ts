import {
  SiAngular, SiAppwrite, SiArduino, SiAstro,
  SiC, SiCloudflare,
  SiCplusplus,
  SiCsharp, SiDocker, SiElectron, SiEspressif, SiGit, SiGithub, SiGitlab,
  SiGo, SiGodotengine,
  SiHaxe, SiIced,
  SiJavascript, SiJetbrains, SiJira, SiLinux, SiLinuxmint,
  SiLua, SiMonogame, SiNextdotjs, SiNixos,
  SiPython, SiRaylib, SiRemix,
  SiRust, SiSocketdotio, SiTauri,
  SiTypescript, SiUnity, SiUnrealengine, SiVercel, SiVisualstudiocode
} from "react-icons/si";

const technologies = [
  {
    category: "Programming Languages",
    items: [
      {name: "Rust", Icon: SiRust},
      {name: "Go", Icon: SiGo},
      {name: "TypeScript", Icon: SiTypescript},
      {name: "JavaScript", Icon: SiJavascript},
      {name: "C#", Icon: SiCsharp},
      {name: "C", Icon: SiC},
      {name: "C++", Icon: SiCplusplus},
      {name: "Lua", Icon: SiLua},
      {name: "Python", Icon: SiPython},
      {name: "Haxe", Icon: SiHaxe},
    ]
  },
  {
    category: "Libraries / Frameworks",
    items: [
      {name: "Remix", Icon: SiRemix},
      {name: "Next.js", Icon: SiNextdotjs},
      {name: "Astro", Icon: SiAstro},
      {name: "Angular", Icon: SiAngular},
      {name: "raylib", Icon: SiRaylib},
      {name: "Monogame", Icon: SiMonogame},
      {name: "iced", Icon: SiIced},
      {name: "Tauri", Icon: SiTauri},
      {name: "Electron", Icon: SiElectron},
      {name: "Appwrite", Icon: SiAppwrite},
      {name: "esp-idf", Icon: SiEspressif},
      {name: "Arduino", Icon: SiArduino},
      {name: "socket.io", Icon: SiSocketdotio},
      {name: "Unity", Icon: SiUnity},
      {name: "Godot", Icon: SiGodotengine},
    ]
  },
  {
    category: "Tools / Services",
    items: [
      {name: "Jetbrains", Icon: SiJetbrains},
      {name: "Visual Studio Code", Icon: SiVisualstudiocode},
      {name: "Git", Icon: SiGit},
      {name: "GitHub", Icon: SiGithub},
      {name: "GitLab", Icon: SiGitlab},
      {name: "Cloudflare", Icon: SiCloudflare},
      {name: "Vercel", Icon: SiVercel},
      {name: "Docker", Icon: SiDocker},
      {name: "Linux", Icon: SiLinux},
      {name: "NixOS", Icon: SiNixos},
      {name: "Jira", Icon: SiJira},
    ]
  }
];

export default technologies;
