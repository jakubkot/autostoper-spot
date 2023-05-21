import { tileLayer } from 'leaflet';

export const TILE_LAYER = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  opacity: 0.7,
  detectRetina: true,
  attribution: '&copy; Jakub Kot',
});
