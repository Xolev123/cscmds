import { LaunchOption } from '../../types/launchOptions';

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
    option: "+violence_hblood 0",
    description: "Attempts to remove blood effects",
    reason: "Reduces visual clutter and may improve performance"
  },
  {
    option: "-softparticlesdefaultoff",
    description: "Disables soft particles",
    reason: "Improves performance on lower-end systems"
  },
  {
    option: "-limitvsconst",
    description: "Limits vertex shader constants",
    reason: "Can help with stability on some GPUs"
  },
  {
    option: "-noubershader",
    description: "Disables uber shaders",
    reason: "Can boost FPS on some systems"
  },
  {
    option: "-insecure",
    description: "Launches in insecure mode (VAC disabled)",
    reason: "For testing or using certain mods safely"
  }
];