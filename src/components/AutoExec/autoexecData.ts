import { AutoExecCommand } from './types';

export const networkCommands: AutoExecCommand[] = [
  {
    command: "rate 786432",
    description: "Sets maximum bytes/second the client can receive",
    category: "Network",
    reason: "Optimal network performance"
  },
  {
    command: "cl_interp 0",
    description: "Minimizes interpolation delay",
    category: "Network",
    reason: "Better hit registration"
  },
  {
    command: "cl_interp_ratio 1",
    description: "Sets interpolation amount",
    category: "Network",
    reason: "Reduced delay between actions"
  },
  {
    command: "cl_updaterate 128",
    description: "Sets updates per second from server",
    category: "Network",
    reason: "Maximum server tick reception"
  },
  {
    command: "cl_cmdrate 128",
    description: "Sets updates sent to server per second",
    category: "Network",
    reason: "Maximum client tick transmission"
  }
];

export const performanceCommands: AutoExecCommand[] = [
  {
    command: "fps_max 0",
    description: "Removes FPS cap",
    category: "Performance",
    reason: "Maximum possible FPS"
  },
  {
    command: "r_dynamic 0",
    description: "Disables dynamic lighting",
    category: "Performance",
    reason: "Improved performance"
  },
  {
    command: "cl_disablefreezecam 1",
    description: "Disables freeze cam on death",
    category: "Performance",
    reason: "Less visual distraction"
  },
  {
    command: "cl_forcepreload 1",
    description: "Forces preloading of assets",
    category: "Performance",
    reason: "Reduces in-game stuttering"
  }
];

export const mouseCommands: AutoExecCommand[] = [
  {
    command: "m_rawinput 1",
    description: "Enables raw mouse input",
    category: "Mouse",
    reason: "Most accurate mouse movement"
  },
  {
    command: "m_customaccel 0",
    description: "Disables mouse acceleration",
    category: "Mouse",
    reason: "Consistent aim"
  },
  {
    command: "zoom_sensitivity_ratio_mouse 0.818933027098955175",
    description: "Sets scoped sensitivity ratio",
    category: "Mouse",
    reason: "Consistent muscle memory"
  }
];