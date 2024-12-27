import { LaunchOption } from '../../types/launchOptions';

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
  },
  {
    option: "-forcenovsync",
    description: "Forces VSync off",
    reason: "Reduces input lag"
  },
  {
    option: "-freq [Hz]",
    description: "Sets monitor frequency",
    reason: "Ensures correct refresh rate"
  }
];