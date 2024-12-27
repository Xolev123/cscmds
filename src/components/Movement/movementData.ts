import { MovementTechnique } from './types';

export const commonTechniques: MovementTechnique[] = [
  {
    name: "Bunny Hop",
    description: "Chain jumps to maintain speed and momentum",
    difficulty: "Medium",
    usage: "Fast map traversal, avoiding shots",
    shortcode: "bh"
  },
  {
    name: "Air Strafe",
    description: "Control movement mid-air for complex patterns",
    difficulty: "Hard",
    usage: "Direction changes, reaching difficult spots",
    shortcode: "as"
  },
  {
    name: "Counter-Strafing",
    description: "Quick direction changes for accurate shooting",
    difficulty: "Medium",
    usage: "Accurate shooting while moving",
    shortcode: "cs"
  },
  {
    name: "Crouch Jump",
    description: "Jumping while crouched for extra height",
    difficulty: "Easy",
    usage: "Reaching higher spots, jump boosts",
    shortcode: "cj"
  }
];

export const advancedTechniques: MovementTechnique[] = [
  {
    name: "Jump Bug",
    description: "Exploiting game mechanics to gain extra height",
    difficulty: "Very Hard",
    usage: "Surviving high falls, surprising enemies",
    shortcode: "jb"
  },
  {
    name: "Long Jump",
    description: "Extended jumps using crouch-jump technique",
    difficulty: "Hard",
    usage: "Reaching far platforms, crossing gaps",
    shortcode: "lj"
  },
  {
    name: "Silent Landing",
    description: "Landing without making noise",
    difficulty: "Hard",
    usage: "Stealthy approaches, avoiding detection",
    shortcode: "sl"
  },
  {
    name: "Run Boost",
    description: "Boosting teammates using momentum",
    difficulty: "Very Hard",
    usage: "Team boost for unexpected peeks",
    shortcode: "rb"
  }
];

export const expertTechniques: MovementTechnique[] = [
  {
    name: "Edge Bug",
    description: "Using edges to negate fall damage",
    difficulty: "Expert",
    usage: "Advanced fall damage negation",
    shortcode: "eb"
  },
  {
    name: "Pixel Surf",
    description: "Sliding on extremely small surfaces",
    difficulty: "Expert",
    usage: "Advanced movement or positioning",
    shortcode: "ps"
  },
  {
    name: "Drop Bug",
    description: "Manipulating fall speed for precise landings",
    difficulty: "Expert",
    usage: "Avoiding fall damage, precise positioning",
    shortcode: "db"
  },
  {
    name: "Ladder Glide",
    description: "Moving horizontally while on ladders",
    difficulty: "Expert",
    usage: "Fast or unexpected movement on ladders",
    shortcode: "lg"
  }
];