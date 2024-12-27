import { LaunchOption } from './types';

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
  }
];

export const essentialOptions: LaunchOption[] = [
  {
    option: "-high",
    description: "Sets high CPU priority",
    reason: "Better CPU prioritization for improved performance"
  },
  {
    option: "+fps_max 0",
    description: "Removes FPS cap",
    reason: "Maximum possible FPS for lowest input lag"
  },
  {
    option: "-allow_third_party_software",
    description: "Enables third-party software integration",
    reason: "Required for streaming and recording tools"
  },
  {
    option: "-tickrate 128",
    description: "Sets server tickrate",
    reason: "Better hit registration and movement accuracy"
  },
  {
    option: "-nojoy",
    description: "Disables joystick support",
    reason: "Reduces input latency and prevents accidental inputs"
  }
];

export const optionalOptions: LaunchOption[] = [
  {
    option: "-threads [number]",
    description: "Specifies CPU thread count",
    reason: "Optimizes CPU usage for your specific hardware"
  },
  {
    option: "-nod3d9ex",
    description: "Disables DirectX 9Ex features",
    reason: "Can improve performance on older systems"
  },
  {
    option: "-forcenovsync",
    description: "Forces VSync off",
    reason: "Reduces input lag but may cause screen tearing"
  },
  {
    option: "+violence_hblood 0",
    description: "Attempts to remove blood effects",
    reason: "Reduces visual clutter and may improve performance"
  },
  {
    option: "-softparticlesdefaultoff",
    description: "Disables soft particles",
    reason: "Improves performance on lower-end systems"
  }
];