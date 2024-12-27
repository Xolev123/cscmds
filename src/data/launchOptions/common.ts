import { LaunchOption } from '../../types/launchOptions';

export const commonOptions: LaunchOption[] = [
  {
    option: "-novid",
    description: "Disables intro video",
    reason: "Faster game launch"
  },
  {
    option: "-fullscreen",
    description: "Forces fullscreen mode",
    reason: "Maximizes performance and reduces input lag"
  },
  {
    option: "-window -noborder",
    description: "Borderless windowed mode",
    reason: "Easier alt-tabbing while maintaining performance"
  },
  {
    option: "-console",
    description: "Enables developer console on startup",
    reason: "Quick access to advanced commands"
  },
  {
    option: "-refresh [rate]",
    description: "Sets monitor refresh rate",
    reason: "Ensures game matches monitor capabilities"
  },
  {
    option: "-w [width] -h [height]",
    description: "Sets custom resolution",
    reason: "Optimizes performance or matches monitor specs"
  },
  {
    option: "-language [lang]",
    description: "Sets game language",
    reason: "Change game language without changing Steam language"
  }
];