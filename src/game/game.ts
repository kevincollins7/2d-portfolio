import kaboom from 'kaboom';
import type { KaboomCtx } from 'kaboom';

import mainScene from './scenes/main';

const GAME_CANVAS: HTMLCanvasElement = document.getElementById('game') as HTMLCanvasElement;

const k: KaboomCtx = kaboom({
  global: false,
  touchToMouse: true,
  canvas: GAME_CANVAS,
  background: [0, 0, 0, 1],
});

k.loadSprite('player', './assets/spritesheet.png', {
  sliceX: 39,
  sliceY: 31,
  anims: {
    'idle-down': 936,
    'walk-down': { from: 936, to: 939 },
    'idle-side': 975,
    'walk-side': { from: 975, to: 978 },
    'idle-up': 1014,
    'walk-up': { from: 1014, to: 1017 },
  },
});

k.loadSprite('map', './assets/map.png');
k.setBackground(k.Color.fromHex('#311047'));

mainScene(k);

k.go('main');
