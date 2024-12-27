export interface Resource {
  title: string;
  url: string;
  author: string;
  type: 'video' | 'guide';
  description: string;
}

export const movementResources: Resource[] = [
  {
    title: "HOW TO ACTUALLY BHOP IN CS2 (CONFIG RELEASE)",
    url: "https://www.youtube.com/watch?v=FyL1jweSSZg",
    author: "sleepychris",
    type: "video",
    description: "Complete guide to bunny hopping in CS2 with config setup"
  },
  {
    title: "VALVE RUINED AND FIXED MOVEMENT (NEW CFG)",
    url: "https://www.youtube.com/watch?v=egTKboKTVvc",
    author: "sleepychris",
    type: "video",
    description: "Updated movement mechanics and configuration"
  },
  {
    title: "HOW TO IMPROVE MOVEMENT IN CS2",
    url: "https://youtu.be/gBAFlZmL9Vk",
    author: "sleepychris",
    type: "video",
    description: "Comprehensive movement improvement guide"
  },
  {
    title: "HOW TO JUMPBUG",
    url: "https://www.youtube.com/watch?v=nDLmfd6Yl74",
    author: "sleepychris",
    type: "video",
    description: "Detailed tutorial on jump bug technique"
  },
  {
    title: "HOW TO LONGJUMP",
    url: "https://www.youtube.com/watch?v=UCsBGIbzHuk",
    author: "sleepychris",
    type: "video",
    description: "Long jump technique tutorial"
  },
  {
    title: "Steam Community Movement Commands Guide",
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3313210014",
    author: "Community",
    type: "guide",
    description: "Comprehensive list of movement commands and configurations"
  }
];