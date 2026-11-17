// =========================================================
// -1. CENTRALIZED INLINE SVG VECTOR SYMBOL ENGINE (NO EMOJI)
// =========================================================
const SVG_ICON_PATHS = {
  home: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  bookOpen: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
  zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  barChart: `<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>`,
  user: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  layoutGrid: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`,
  logIn: `<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>`,
  logOut: `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
  globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  info: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`,
  shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  fileText: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`,
  helpCircle: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  x: `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,
  check: `<polyline points="20 6 9 17 4 12"/>`,
  checkCircle: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  xCircle: `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`,
  alertTriangle: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  lock: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
  unlock: `<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>`,
  eye: `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`,
  eyeOff: `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`,
  search: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
  refreshCw: `<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>`,
  trash: `<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`,
  edit2: `<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>`,
  save: `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>`,
  plus: `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
  plusCircle: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,
  arrowLeft: `<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>`,
  arrowRight: `<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>`,
  chevronUp: `<polyline points="18 15 12 9 6 15"/>`,
  chevronDown: `<polyline points="6 9 12 15 18 9"/>`,
  chevronLeft: `<polyline points="15 18 9 12 15 6"/>`,
  chevronRight: `<polyline points="9 18 15 12 9 6"/>`,
  externalLink: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>`,
  clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  calendar: `<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
  play: `<polygon points="6 4 20 12 6 20 6 4"/>`,
  pause: `<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>`,
  squareStop: `<rect x="5" y="5" width="14" height="14" rx="2"/>`,
  volume2: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`,
  volumeX: `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`,
  mic: `<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>`,
  film: `<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>`,
  upload: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>`,
  heart: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  heartFilled: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>`,
  messageCircle: `<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>`,
  share2: `<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>`,
  send: `<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`,
  star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  starFilled: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>`,
  trophy: `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>`,
  award: `<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>`,
  crown: `<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>`,
  flame: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
  target: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
  gem: `<polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/><line x1="2" y1="9" x2="22" y2="9"/><line x1="12" y1="22" x2="8" y2="9"/><line x1="12" y1="22" x2="16" y2="9"/>`,
  gift: `<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>`,
  sparkles: `<path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/>`,
  clipboardCheck: `<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/>`,
  clipboardList: `<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>`,
  flask: `<path d="M9 3h6"/><path d="M10 3v6l-5.5 9.2A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.8L14 9V3"/>`,
  code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  terminal: `<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>`,
  cpu: `<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`,
  bug: `<rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m10 4 1 2"/><path d="m14 4-1 2"/>`,
  wrench: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
  layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
  box: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>`,
  gitBranch: `<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>`,
  repeat: `<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>`,
  database: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`,
  printer: `<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>`,
  wind: `<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>`,
  fan: `<path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><circle cx="12" cy="12" r="1.5"/>`,
  graduationCap: `<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>`,
  coffee: `<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>`,
  batteryFull: `<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/><rect x="4" y="9" width="12" height="6" fill="currentColor"/>`,
  batteryLow: `<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/><rect x="4" y="9" width="4" height="6" fill="currentColor"/>`,
  power: `<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>`,
  train: `<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/>`,
  ruler: `<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>`,
  link: `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
  scale: `<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>`,
  divide: `<circle cx="12" cy="6" r="1.5" fill="currentColor"/><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="18" r="1.5" fill="currentColor"/>`,
  tag: `<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>`,
  keyboard: `<rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M6 8h.001"/><path d="M10 8h.001"/><path d="M14 8h.001"/><path d="M18 8h.001"/><path d="M8 12h.001"/><path d="M12 12h.001"/><path d="M16 12h.001"/><path d="M7 16h10"/>`,
  radio: `<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>`,
  lightbulb: `<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>`,
  mapPin: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
  gamepad: `<line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/>`,
  flag: `<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>`,
  octagonStop: `<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
  triangle: `<polygon points="12 4 21 19 3 19" fill="currentColor" stroke="none"/>`,
  diamond: `<polygon points="12 2 22 12 12 22 2 12" fill="currentColor" stroke="none"/>`,
  circleFilled: `<circle cx="12" cy="12" r="9" fill="currentColor" stroke="none"/>`,
  squareFilled: `<rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" stroke="none"/>`,
  circleDot: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/>`,
  microscope: `<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>`,
  activity: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
  checkSquare: `<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
  squareOutline: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>`,
  camera: `<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>`,
  image: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`,
  rotateCw: `<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>`,
  download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  mail: `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
  messageSquare: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  sliders: `<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>`,
  eraser: `<path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>`,
  minimize2: `<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>`,
  copy: `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`,
  bot: `<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/>`
};

function getSymbolIcon(name, size = 18, extraStyle = '') {
  const inner = SVG_ICON_PATHS[name] || SVG_ICON_PATHS.circleDot;
  const st = extraStyle ? ` style="${extraStyle}"` : '';
  return `<svg class="inline-svg-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"${st} aria-hidden="true">${inner}</svg>`;
}

function hydrateStaticIcons(root = document) {
  root.querySelectorAll('.svg-ico[data-svg]').forEach(el => {
    const iconName = el.getAttribute('data-svg');
    const sz = parseInt(el.getAttribute('data-size') || '16', 10);
    el.innerHTML = getSymbolIcon(iconName, sz);
  });
}

function navigateFooterUnit(uId) {
  switchNav('learn');
  selectUnitToStudy(uId);
}

function navigateFooterTarget(kind) {
  switchNav('learn');
  setTimeout(() => {
    if (kind === 'shorts') {
      document.getElementById('shortsMainSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (kind === 'quests') {
      document.getElementById('homeWidgetsGrid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (kind === 'voice') {
      resumeLastLearningPoint();
      showToast('เปิดหน้าบทเรียนแล้ว — กดปุ่มเล่นเสียงอธิบายภาษาไทยด้านบนเนื้อหาได้ทันที', 'info');
    }
  }, 120);
}

function navigateFooterAccountTab(tab) {
  switchNav('account');
  if (currentUser && currentUser.isLoggedIn && typeof switchAccountSubtab === 'function') {
    switchAccountSubtab(tab);
  }
}

let activeTeacherTab = 'overview';

function updateTeacherKpisAndBadges() {
  const shortsCount = Array.isArray(cachedShortsMeta) ? cachedShortsMeta.length : 0;
  const questsCount = (typeof DataService !== 'undefined' && DataService.Quests)
    ? DataService.Quests.getAll().length
    : 0;
  const activeRooms = (typeof DataService !== 'undefined' && DataService.Kahoot)
    ? Object.values(DataService.Kahoot.loadSessions() || {}).filter(s => s && s.status !== 'finished').length
    : 0;

  const sBadge = document.getElementById('tTabShortsBadge');
  const qBadge = document.getElementById('tTabQuestsBadge');
  const kBadge = document.getElementById('tTabKahootBadge');
  const kpiMix = document.getElementById('tStatShortsAndKahoot');

  if (sBadge) sBadge.innerText = shortsCount;
  if (qBadge) qBadge.innerText = questsCount;
  if (kBadge) kBadge.innerText = activeRooms;
  if (kpiMix) kpiMix.innerText = `${shortsCount} คลิป / ${activeRooms} ห้อง`;
}

function switchTeacherTab(tab) {
  const allowed = ['overview', 'shorts', 'quests', 'kahoot'];
  activeTeacherTab = allowed.includes(tab) ? tab : 'overview';

  const map = {
    overview: { btn: 'tTabOverview', pane: 'tPaneOverview' },
    shorts:   { btn: 'tTabShorts',   pane: 'tPaneShorts' },
    quests:   { btn: 'tTabQuests',   pane: 'tPaneQuests' },
    kahoot:   { btn: 'tTabKahoot',   pane: 'tPaneKahoot' }
  };

  allowed.forEach(key => {
    document.getElementById(map[key].btn)?.classList.toggle('active', key === activeTeacherTab);
    document.getElementById(map[key].pane)?.classList.toggle('hidden', key !== activeTeacherTab);
  });

  if (activeTeacherTab === 'overview' && typeof renderTeacherReportTable === 'function') {
    renderTeacherReportTable();
  } else if (activeTeacherTab === 'shorts' && typeof renderTeacherShortsManager === 'function') {
    renderTeacherShortsManager();
  } else if (activeTeacherTab === 'quests' && typeof renderTeacherQuestsManageList === 'function') {
    renderTeacherQuestsManageList();
  } else if (activeTeacherTab === 'kahoot' && typeof renderTeacherKahootMonitor === 'function') {
    renderTeacherKahootMonitor();
  }
  updateTeacherKpisAndBadges();
}

function navigateFooterTeacherPanel(panelId) {
  switchNav('teacher');
  if (isShortTeacherAuthenticated()) {
    const panelTabMap = {
      teacherShortsPanelBox: 'shorts',
      teacherQuestBuilderPanel: 'quests',
      teacherKahootMonitorPanel: 'kahoot'
    };
    const targetTab = panelTabMap[panelId] || 'overview';
    setTimeout(() => {
      switchTeacherTab(targetTab);
      document.getElementById('teacherSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }
}

function showPlatformInfoToast(topic) {
  const msgs = {
    about: 'HelloCode: แพลตฟอร์มฝึกเขียนโปรแกรมภาษา C ครบวงจรทั้งทฤษฎี เสียงบรรยาย แล็บ 25 บท คลิป Shorts และ Kahoot',
    sequential: 'เส้นทางการเรียนรู้: Pre-test -> หัวข้อ 1 ถึง 5 -> Post-test -> ปลดล็อกหน่วยถัดไป',
    guide: 'สะสม XP จากบทเรียน ห้องทดลอง และภารกิจรายวันเพื่อปลดล็อกเหรียญรางวัล',
    privacy: 'นโยบายความเป็นส่วนตัว: ข้อมูลบัญชี คะแนน และคลิป Shorts จัดเก็บในเบราว์เซอร์ของคุณอย่างปลอดภัย'
  };
  showToast(msgs[topic] || msgs.about, 'info');
}

// =========================================================
// 0. SOUND EFFECTS, RIPPLE & CONFETTI ANIMATION ENGINE
// =========================================================
let sfxEnabled = true;
let audioCtx = null;

function initAudioCtx() {
  if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSfx(type) {
  if (!sfxEnabled) return;
  try {
    initAudioCtx();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (type === 'click') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.06);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'success') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);
        gain.gain.setValueAtTime(0.12, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.22);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.22);
      });
    } else if (type === 'error') {
      [240, 180].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.09, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.18);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.18);
      });
    } else if (type === 'pop') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.09);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  } catch (e) {}
}

function toggleSoundEffects() {
  sfxEnabled = !sfxEnabled;
  const btn = document.getElementById("btnSfxToggle");
  if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon(sfxEnabled ? 'volume2' : 'volumeX', 18)}</span>`;
  if (sfxEnabled) playSfx('pop');
}

// Global Button Ripple & Click Sound
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn, .nav-btn, .subtab-btn, .kahoot-btn, .option-btn, .unit-card');
  if (btn && !btn.disabled) {
    playSfx('click');
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = 'ripple-span';
    btn.classList.add('ripple-effect');
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
});

// Confetti Celebration Burst
function launchConfetti() {
  playSfx('success');
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#0EA5E9'];
  for (let i = 0; i < 85; i++) {
    pieces.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2 - 50,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 12
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.42; // gravity
      p.rot += p.vrot;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    });
    frame++;
    if (frame < 110) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(draw);
}

function addXpReward(amount, reasonText) {
  if (!currentUser) return;
  currentUser.xp = (currentUser.xp || 0) + amount;
  const xpEl = document.getElementById("userXpCount");
  const badge = document.getElementById("topXpBadge");
  if (xpEl) xpEl.innerText = currentUser.xp.toLocaleString();
  if (badge) {
    badge.style.transform = "scale(1.18)";
    setTimeout(() => badge.style.transform = "scale(1)", 260);
  }
  saveCurrentProgress();
  playSfx('pop');
}

// =========================================================
// 2. DEVICE & MICROSOFT EDGE DETECTION
// =========================================================
function detectDeviceAndOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth <= 768;
  return { isMobile: isMobile, ua: ua };
}

let edgeVoiceCheckTimer = null;

function hasThaiSpeechVoice() {
  if (!('speechSynthesis' in window) || typeof window.speechSynthesis.getVoices !== 'function') {
    return false;
  }
  const voices = window.speechSynthesis.getVoices() || [];
  availableVoices = voices;
  return voices.some(v => v && typeof v.lang === 'string' && v.lang.toLowerCase().includes('th'));
}

function checkEdgeEnforcement() {
  const modal = document.getElementById("edgeEnforceModal");
  const dev = detectDeviceAndOS();
  if (dev.isMobile) {
    if (modal) modal.classList.add("hidden");
    return;
  }
  if (sessionStorage.getItem("edge_dismissed")) {
    if (modal) modal.classList.add("hidden");
    return;
  }

  // If browser already has a Thai TTS voice (e.g. Chrome Google ภาษาไทย, Safari Kanya, Edge Premwadee), skip modal completely
  if (hasThaiSpeechVoice()) {
    if (modal) modal.classList.add("hidden");
    return;
  }

  const isEdge = dev.ua.indexOf("Edg/") > -1;
  if (isEdge) {
    if (modal) modal.classList.add("hidden");
    return;
  }

  // Wait asynchronously for speechSynthesis voices to populate (important in Chrome/Chromium)
  clearTimeout(edgeVoiceCheckTimer);
  edgeVoiceCheckTimer = setTimeout(() => {
    if (hasThaiSpeechVoice() || sessionStorage.getItem("edge_dismissed")) {
      if (modal) modal.classList.add("hidden");
      return;
    }
    const voicesNow = ('speechSynthesis' in window) ? (window.speechSynthesis.getVoices() || []) : [];
    // Show guidance only when the browser has initialized voices and truly lacks Thai voice support
    if (voicesNow.length > 0 && !hasThaiSpeechVoice()) {
      if (modal) modal.classList.remove("hidden");
    }
  }, 1500);
}

function openInMicrosoftEdge() {
  const currentUrl = window.location.href;
  window.location.href = "microsoft-edge:" + currentUrl;
}

function dismissEdgeModal() {
  sessionStorage.setItem("edge_dismissed", "1");
  document.getElementById("edgeEnforceModal").classList.add("hidden");
}

// =========================================================
// 3. TOAST, CONFIRM DIALOG, DEVICE CHECK & ACCOUNT AUTHENTICATION
// =========================================================
function escapeHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Backward-compatible alias
const escapeHtml = escapeHTML;

function showToast(message, type = 'info') {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const iconMap = {
    success: { name: 'checkCircle', color: '#10B981' },
    error:   { name: 'xCircle',     color: '#EF4444' },
    warning: { name: 'alertTriangle', color: '#F59E0B' },
    info:    { name: 'info',        color: '#4F46E5' }
  };
  const cfg = iconMap[type] || iconMap.info;
  const item = document.createElement("div");
  item.className = `toast-item ${type}`;
  item.innerHTML = `<span class="svg-ico" style="color:${cfg.color};">${getSymbolIcon(cfg.name, 18)}</span><span>${escapeHTML(message)}</span>`;
  container.appendChild(item);
  setTimeout(() => {
    item.style.opacity = "0";
    item.style.transform = "translateX(20px)";
    item.style.transition = "all 0.25s ease";
    setTimeout(() => item.remove(), 260);
  }, 3600);
}

function showConfirmModal({ title = "ยืนยันการดำเนินการ", message = "", confirmText = "ยืนยัน", danger = true } = {}) {
  return new Promise((resolve) => {
    const backdrop = document.getElementById("confirmModal");
    const titleEl = document.getElementById("confirmModalTitle");
    const msgEl = document.getElementById("confirmModalMessage");
    const inputWrap = document.getElementById("confirmModalInputWrap");
    const btnCancel = document.getElementById("confirmModalCancel");
    const btnOk = document.getElementById("confirmModalOk");

    if (inputWrap) inputWrap.classList.add("hidden");
    titleEl.innerText = title;
    msgEl.innerText = message;
    btnOk.innerText = confirmText;
    btnOk.className = danger ? "btn btn-danger" : "btn btn-primary";
    backdrop.classList.remove("hidden");

    const cleanup = (result) => {
      backdrop.classList.add("hidden");
      btnCancel.onclick = null;
      btnOk.onclick = null;
      resolve(result);
    };
    btnCancel.onclick = () => cleanup(false);
    btnOk.onclick = () => cleanup(true);
  });
}

function showAdminCodeConfirmModal({ title = "ยืนยันสิทธิ์ผู้ดูแล", message = "", inputLabel = "รหัสยืนยันสิทธิ์สถาบัน (Admin Setup Code):", confirmText = "ยืนยัน", danger = true } = {}) {
  return new Promise((resolve) => {
    const backdrop = document.getElementById("confirmModal");
    const titleEl = document.getElementById("confirmModalTitle");
    const msgEl = document.getElementById("confirmModalMessage");
    const inputWrap = document.getElementById("confirmModalInputWrap");
    const inputLbl = document.getElementById("confirmModalInputLabel");
    const inputEl = document.getElementById("confirmModalInput");
    const btnCancel = document.getElementById("confirmModalCancel");
    const btnOk = document.getElementById("confirmModalOk");

    titleEl.innerText = title;
    msgEl.innerText = message;
    if (inputLbl) inputLbl.innerText = inputLabel;
    if (inputEl) inputEl.value = "";
    if (inputWrap) inputWrap.classList.remove("hidden");
    btnOk.innerText = confirmText;
    btnOk.className = danger ? "btn btn-danger" : "btn btn-primary";
    backdrop.classList.remove("hidden");
    setTimeout(() => { if (inputEl) inputEl.focus(); }, 60);

    const cleanup = (confirmed) => {
      const code = inputEl ? inputEl.value : "";
      if (inputEl) inputEl.value = "";
      if (inputWrap) inputWrap.classList.add("hidden");
      backdrop.classList.add("hidden");
      btnCancel.onclick = null;
      btnOk.onclick = null;
      resolve({ confirmed, code });
    };
    btnCancel.onclick = () => cleanup(false);
    btnOk.onclick = () => cleanup(true);
  });
}

const safeStorage = {
  getItem(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    try { localStorage.setItem(key, value); return true; } catch (e) { return false; }
  },
  removeItem(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  }
};

const SAFE_AVATAR_DATA_URL_RE = /^data:image\/(png|jpe?g|webp|gif);base64,[A-Za-z0-9+/=]+$/i;
function isSafeAvatarDataUrl(url) {
  return typeof url === 'string' && url.length <= 250000 && SAFE_AVATAR_DATA_URL_RE.test(url);
}

function hashPassword(raw) {
  let h = 2166136261;
  const str = String(raw || "");
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return "h_" + (h >>> 0).toString(36);
}

// =========================================================
// 2B. CLEAN DATA SERVICE LAYER & PERSISTENT GAMIFICATION ENGINE
// =========================================================
const LEVEL_TITLES = [
  { minXp: 0,    lv: 1, title: "Lv.1 C Novice",         nextXp: 150 },
  { minXp: 150,  lv: 2, title: "Lv.2 Syntax Apprentice", nextXp: 350 },
  { minXp: 350,  lv: 3, title: "Lv.3 Logic Builder",     nextXp: 650 },
  { minXp: 650,  lv: 4, title: "Lv.4 Loop Master",       nextXp: 1000 },
  { minXp: 1000, lv: 5, title: "Lv.5 C Architect",       nextXp: 1500 },
  { minXp: 1500, lv: 6, title: "Lv.6 Code Grandmaster",  nextXp: 2500 }
];

const BADGE_CATALOG = [
  { id: "first_step",      icon: "sparkles",       name: "ก้าวแรกสู่ C",           desc: "สมัครหรือเข้าสู่ระบบเพื่อเริ่มเรียน" },
  { id: "pre_done_1",      icon: "clipboardCheck", name: "นักวิเคราะห์เริ่มต้น",   desc: "ทำแบบทดสอบก่อนเรียนครบ 1 หน่วย" },
  { id: "unit_1_master",   icon: "flag",           name: "พิชิตหน่วยที่ 1",        desc: "ผ่านแบบทดสอบหลังเรียนหน่วยที่ 1" },
  { id: "unit_2_master",   icon: "code",           name: "พิชิตหน่วยที่ 2",        desc: "ผ่านแบบทดสอบหลังเรียนหน่วยที่ 2" },
  { id: "unit_3_master",   icon: "gitBranch",      name: "พิชิตหน่วยที่ 3",        desc: "ผ่านแบบทดสอบหลังเรียนหน่วยที่ 3" },
  { id: "unit_4_master",   icon: "repeat",         name: "พิชิตหน่วยที่ 4",        desc: "ผ่านแบบทดสอบหลังเรียนหน่วยที่ 4" },
  { id: "unit_5_master",   icon: "layers",         name: "พิชิตหน่วยที่ 5",        desc: "ผ่านแบบทดสอบหลังเรียนหน่วยที่ 5" },
  { id: "all_5_units",     icon: "crown",          name: "ปรมาจารย์ภาษา C",      desc: "ผ่านครบทั้ง 5 หน่วยการเรียน" },
  { id: "xp_150",          icon: "zap",            name: "ดาวรุ่ง 150 XP",        desc: "สะสมคะแนน XP ครบ 150 แต้ม" },
  { id: "xp_500",          icon: "flame",          name: "พลังสะสม 500 XP",       desc: "สะสมคะแนน XP ครบ 500 แต้ม" },
  { id: "xp_1000",         icon: "gem",            name: "ขุมพลัง 1,000 XP",      desc: "สะสมคะแนน XP ครบ 1,000 แต้ม" },
  { id: "xp_2000",         icon: "trophy",         name: "ตำนาน 2,000 XP",        desc: "สะสมคะแนน XP ครบ 2,000 แต้ม" },
  { id: "streak_3",        icon: "calendar",       name: "ขยันต่อเนื่อง 3 วัน",    desc: "เข้าเรียนต่อเนื่องอย่างน้อย 3 วัน" },
  { id: "streak_7",        icon: "flame",          name: "สัปดาห์ทอง 7 วัน",       desc: "เข้าเรียนต่อเนื่องอย่างน้อย 7 วัน" },
  { id: "streak_14",       icon: "shield",         name: "วินัยเหล็ก 14 วัน",      desc: "เข้าเรียนต่อเนื่องอย่างน้อย 14 วัน" },
  { id: "labs_5",          icon: "flask",          name: "นักทดลอง (5 แล็บ)",     desc: "รับ XP มินิเกมครบ 5 แล็บ" },
  { id: "labs_15",         icon: "cpu",            name: "วิศวกรแล็บ (15 แล็บ)",  desc: "รับ XP มินิเกมครบ 15 แล็บ" },
  { id: "labs_25",         icon: "terminal",       name: "เซียนแล็บ 25 บทเรียน",  desc: "พิชิตแล็บมินิเกมครบทั้ง 25 หัวข้อ" },
  { id: "post_high_score", icon: "target",         name: "แม่นยำระดับโปร (8+)",   desc: "ทำ Post-test ได้ 8/10 ขึ้นไป" },
  { id: "post_perfect_10", icon: "starFilled",     name: "เต็มร้อยไร้ที่ติ (10/10)", desc: "ทำ Post-test ได้คะแนนเต็ม 10/10" },
  { id: "like_1",          icon: "heartFilled",    name: "กดถูกใจคลิปแรก",        desc: "กดหัวใจให้คลิป Shorts ครั้งแรก" },
  { id: "like_5",          icon: "heart",          name: "แฟนคลับ Shorts (5 คลิป)", desc: "กดถูกใจคลิป Shorts ครบ 5 คลิป" },
  { id: "comment_1",       icon: "messageCircle",  name: "นักแลกเปลี่ยนความรู้",    desc: "แสดงความคิดเห็นในคลิป Shorts" },
  { id: "share_1",         icon: "share2",         name: "ผู้ส่งต่อความรู้",       desc: "แชร์คลิป Shorts เพื่อส่งต่อเพื่อน" },
  { id: "kahoot_join",     icon: "gamepad",        name: "นักสู้ Kahoot",          desc: "เข้าร่วมแข่งขัน Kahoot สดในห้อง" }
];

function getLevelInfo(xp = 0) {
  let current = LEVEL_TITLES[0];
  for (const tier of LEVEL_TITLES) {
    if (xp >= tier.minXp) current = tier;
  }
  const span = Math.max(1, current.nextXp - current.minXp);
  const pct = xp >= current.nextXp ? 100 : Math.min(100, Math.round(((xp - current.minXp) / span) * 100));
  return { ...current, pct, xp };
}

function getTodayDateKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayDateKey() {
  const d = new Date(Date.now() - 86400000);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function createEmptyUnitsMap() {
  const units = {};
  for (let i = 1; i <= 5; i++) {
    units[i] = {
      preScore: null,
      postScore: null,
      preDone: false,
      postDone: false,
      contentRead: false,
      unlockedTopicIdx: 0,
      lastTopicIdx: 0
    };
  }
  return units;
}

function normalizeUserRecord(u) {
  if (!u || typeof u !== 'object') return createDefaultUnauthUser();
  if (!u.units || typeof u.units !== 'object') u.units = {};
  for (let i = 1; i <= 5; i++) {
    const prev = u.units[i] || {};
    u.units[i] = {
      preScore: typeof prev.preScore === 'number' ? prev.preScore : null,
      postScore: typeof prev.postScore === 'number' ? prev.postScore : null,
      preDone: !!prev.preDone,
      postDone: !!prev.postDone,
      contentRead: !!prev.contentRead,
      unlockedTopicIdx: typeof prev.unlockedTopicIdx === 'number'
        ? Math.max(0, Math.min(4, prev.unlockedTopicIdx))
        : (prev.contentRead ? 4 : 0),
      lastTopicIdx: typeof prev.lastTopicIdx === 'number'
        ? Math.max(0, Math.min(4, prev.lastTopicIdx))
        : 0
    };
  }
  if (typeof u.xp !== 'number' || Number.isNaN(u.xp)) u.xp = 0;
  if (typeof u.currentUnit !== 'number' || u.currentUnit < 1 || u.currentUnit > 5) u.currentUnit = 1;
  if (typeof u.currentTopicIdx !== 'number' || u.currentTopicIdx < 0 || u.currentTopicIdx > 4) {
    u.currentTopicIdx = u.units[u.currentUnit].lastTopicIdx || 0;
  }
  if (!u.currentTopic) {
    u.currentTopic = (typeof topicTitles !== 'undefined' && topicTitles[u.currentUnit])
      ? topicTitles[u.currentUnit][u.currentTopicIdx]
      : "1.1 ยุคและระดับของภาษาคอมพิวเตอร์";
  }
  if (!Array.isArray(u.likedShorts)) u.likedShorts = [];
  if (!Array.isArray(u.receivedShorts)) u.receivedShorts = [];
  if (!Array.isArray(u.activityHistory)) u.activityHistory = [];
  if (!Array.isArray(u.badges)) u.badges = [];
  if (!Array.isArray(u.claimedLabXp)) u.claimedLabXp = [];
  if (!Array.isArray(u.watchedShortsAllTime)) u.watchedShortsAllTime = [];
  if (typeof u.commentedShortsCount !== 'number') u.commentedShortsCount = 0;
  if (typeof u.sharedShortsCount !== 'number') u.sharedShortsCount = 0;
  if (typeof u.kahootGamesPlayed !== 'number') u.kahootGamesPlayed = 0;
  if (!Array.isArray(u.completedTeacherQuests)) u.completedTeacherQuests = [];
  if (!Array.isArray(u.customRewards)) u.customRewards = [];
  if (!u.streak || typeof u.streak !== 'object') u.streak = { count: 0, lastDate: "" };
  if (!u.dailyQuests || typeof u.dailyQuests !== 'object') {
    u.dailyQuests = { date: "", login: false, studyOrQuiz: 0, playLabs: 0, watchShorts: 0, shortSocial: 0, bonusClaimed: false };
  } else {
    if (typeof u.dailyQuests.playLabs !== 'number') u.dailyQuests.playLabs = 0;
    if (typeof u.dailyQuests.shortSocial !== 'number') u.dailyQuests.shortSocial = 0;
  }
  if (!Array.isArray(u.watchedShortsToday)) u.watchedShortsToday = [];
  u.avatarDataUrl = isSafeAvatarDataUrl(u.avatarDataUrl) ? u.avatarDataUrl : "";
  return u;
}

// =========================================================
// CLOUD SYNC ADAPTER CONFIGURATION (Firebase + Local Fallback)
// วิธีเปิดใช้งาน Cloud Sync:
// 1. นำเข้า Firebase SDK v10 (compat) ใน index.html ก่อน app.js
// 2. นำค่า firebaseConfig จาก Firebase Console มาใส่ด้านล่างให้ครบ
// =========================================================
const FIREBASE_CONFIG = {
  apiKey: "",            // ใส่ Firebase Web API Key
  authDomain: "",        // เช่น "hellocode-edu.firebaseapp.com"
  projectId: "",         // เช่น "hellocode-edu"
  storageBucket: "",     // เช่น "hellocode-edu.appspot.com"
  messagingSenderId: "", // ใส่ Messaging Sender ID
  appId: ""              // ใส่ Firebase App ID
};

function generateCryptoSalt(byteLen = 16) {
  try {
    if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
      const buf = new Uint8Array(byteLen);
      window.crypto.getRandomValues(buf);
      return Array.from(buf, b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {}
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

async function computeSaltedDigest(salt, value) {
  const input = `${salt}:${String(value || "")}`;
  try {
    if (window.crypto && window.crypto.subtle && typeof TextEncoder !== 'undefined') {
      const data = new TextEncoder().encode(input);
      const hashBuf = await window.crypto.subtle.digest("SHA-256", data);
      return "sha256_" + Array.from(new Uint8Array(hashBuf), b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) {}
  // Fallback multi-round salted mixer when WebCrypto subtle is unavailable (e.g. insecure file://)
  let h1 = hashPassword(input);
  let h2 = hashPassword(input.split('').reverse().join('') + salt);
  return `salted_${h1}_${h2}`;
}

// Pre-hashed institution Admin Setup digest (never store plaintext admin codes in source).
// Replace with await computeSaltedDigest(ADMIN_SETUP_SALT, "YOUR-NEW-CODE") when deploying to a school.
const ADMIN_SETUP_SALT = "hc_inst_salt_v1_9f4a";
const ADMIN_SETUP_HASH_SHA256 = "sha256_1cbdcd989aad0159abbe60966aa069f645ecc4f61a89ec531ae330012c7cefb5";
const ADMIN_SETUP_HASH_FALLBACK = "salted_h_hnclc6_h_138zq7s";

async function verifyAdminSetupCode(rawCode) {
  const clean = String(rawCode || "").trim();
  if (!clean) return false;
  const digest = await computeSaltedDigest(ADMIN_SETUP_SALT, clean);
  if (digest.startsWith("sha256_")) {
    return digest === ADMIN_SETUP_HASH_SHA256;
  }
  return digest === ADMIN_SETUP_HASH_FALLBACK;
}

function isSafeCloudVideoUrl(url) {
  return typeof url === 'string' && /^https:\/\/[^\s"'<>]+$/i.test(url.trim());
}

const DataService = {
  Cloud: {
    _initialized: false,
    _app: null,
    _auth: null,
    _db: null,
    _storage: null,

    isConfigured() {
      return Boolean(
        FIREBASE_CONFIG &&
        typeof FIREBASE_CONFIG.apiKey === 'string' && FIREBASE_CONFIG.apiKey.trim().length > 5 &&
        typeof FIREBASE_CONFIG.projectId === 'string' && FIREBASE_CONFIG.projectId.trim().length > 2 &&
        typeof FIREBASE_CONFIG.authDomain === 'string' && FIREBASE_CONFIG.authDomain.trim().length > 4 &&
        typeof window.firebase !== 'undefined'
      );
    },

    init() {
      if (this._initialized) return { mode: this._db ? 'firebase' : 'local' };
      this._initialized = true;
      if (!this.isConfigured()) return { mode: 'local' };
      try {
        this._app = (window.firebase.apps && window.firebase.apps.length)
          ? window.firebase.app()
          : window.firebase.initializeApp(FIREBASE_CONFIG);
        if (typeof window.firebase.auth === 'function') this._auth = window.firebase.auth();
        if (typeof window.firebase.firestore === 'function') this._db = window.firebase.firestore();
        if (typeof window.firebase.storage === 'function') this._storage = window.firebase.storage();
        return { mode: this._db ? 'firebase' : 'local' };
      } catch (err) {
        console.warn("Firebase init failed, switching to Local Fallback:", err);
        this._db = null;
        return { mode: 'local', error: err.message };
      }
    },

    getBackendMode() {
      const res = this.init();
      return res.mode;
    },

    async fetchUserByEmail(email) {
      const cleanEmail = String(email || "").trim().toLowerCase();
      if (!cleanEmail || this.getBackendMode() !== 'firebase' || !this._db) return null;
      try {
        const doc = await this._db.collection("users").doc(cleanEmail).get();
        if (!doc.exists) return null;
        const data = normalizeUserRecord(doc.data());
        const db = DataService.Users.getAll();
        db[cleanEmail] = data;
        safeStorage.setItem("c_edu_db_users_v4", JSON.stringify(db));
        return data;
      } catch (err) {
        console.warn("Cloud fetchUserByEmail fallback to local:", err);
        return null;
      }
    },

    async syncUser(user) {
      if (!user || !user.email || user.role === 'teacher') return false;
      if (this.getBackendMode() !== 'firebase' || !this._db) return false;
      try {
        await this._db.collection("users").doc(user.email.toLowerCase()).set(normalizeUserRecord({ ...user }), { merge: true });
        return true;
      } catch (err) {
        console.warn("Cloud syncUser fallback to local:", err);
        return false;
      }
    },

    async fetchAllUsersToLocalCache() {
      if (this.getBackendMode() !== 'firebase' || !this._db) return null;
      try {
        const snap = await this._db.collection("users").get();
        const cloudDb = {};
        snap.forEach(doc => {
          const data = doc.data();
          if (data && data.email) cloudDb[data.email.toLowerCase()] = normalizeUserRecord(data);
        });
        if (Object.keys(cloudDb).length > 0) {
          DataService.Users.saveAll(cloudDb, true);
        }
        return cloudDb;
      } catch (err) {
        console.warn("Cloud fetchAllUsers fallback to local:", err);
        return null;
      }
    },

    async fetchQuestsFromCloud() {
      if (this.getBackendMode() !== 'firebase' || !this._db) return null;
      try {
        const doc = await this._db.collection("platform_config").doc("teacher_quests").get();
        if (!doc.exists) return null;
        const data = doc.data();
        const items = Array.isArray(data?.items) ? data.items : [];
        safeStorage.setItem(DataService.Quests.STORAGE_KEY, JSON.stringify(items));
        return items;
      } catch (err) {
        console.warn("Cloud fetchQuestsFromCloud fallback:", err);
        return null;
      }
    },

    async syncQuests(list) {
      if (this.getBackendMode() !== 'firebase' || !this._db) return false;
      try {
        await this._db.collection("platform_config").doc("teacher_quests").set({ items: Array.isArray(list) ? list : [], updatedAt: Date.now() });
        return true;
      } catch (err) {
        console.warn("Cloud syncQuests fallback:", err);
        return false;
      }
    },

    async fetchShortsMetaFromCloud() {
      if (this.getBackendMode() !== 'firebase' || !this._db) return null;
      try {
        const snap = await this._db.collection("shorts_meta").get();
        const list = [];
        snap.forEach(doc => {
          const d = doc.data();
          if (d && d.id) {
            list.push({
              ...d,
              comments: Array.isArray(d.comments) ? d.comments : [],
              likedBy: Array.isArray(d.likedBy) ? d.likedBy : [],
              shares: Number(d.shares || 0),
              views: Number(d.views || 0),
              likes: Number(d.likes || 0)
            });
          }
        });
        return list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      } catch (err) {
        console.warn("Cloud fetchShortsMetaFromCloud fallback:", err);
        return null;
      }
    },

    async syncShortMeta(meta) {
      if (!meta || !meta.id) return false;
      if (this.getBackendMode() !== 'firebase' || !this._db) return false;
      try {
        await this._db.collection("shorts_meta").doc(meta.id).set(meta, { merge: true });
        return true;
      } catch (err) {
        console.warn("Cloud syncShortMeta fallback:", err);
        return false;
      }
    },

    async uploadShortToCloud(meta, blob) {
      if (this.getBackendMode() !== 'firebase' || !this._db || !this._storage) return null;
      try {
        const ext = (blob && blob.type && blob.type.includes('mp4')) ? 'mp4' : 'webm';
        const ref = this._storage.ref().child(`shorts/${meta.id}.${ext}`);
        await ref.put(blob);
        const downloadUrl = await ref.getDownloadURL();
        await this._db.collection("shorts_meta").doc(meta.id).set({ ...meta, cloudUrl: downloadUrl });
        return downloadUrl;
      } catch (err) {
        console.warn("Cloud uploadShort fallback to IndexedDB:", err);
        return null;
      }
    },

    async deleteShortFromCloud(id) {
      if (this.getBackendMode() !== 'firebase' || !this._db) return false;
      try {
        await this._db.collection("shorts_meta").doc(id).delete();
        if (this._storage) {
          await this._storage.ref().child(`shorts/${id}.webm`).delete().catch(() => {});
          await this._storage.ref().child(`shorts/${id}.mp4`).delete().catch(() => {});
        }
        return true;
      } catch (err) {
        return false;
      }
    },

    async signOut() {
      if (this._auth && typeof this._auth.signOut === 'function') {
        try { await this._auth.signOut(); } catch (e) {}
      }
    }
  },

  TeacherAuth: {
    LOCAL_CRED_KEY: "c_edu_teacher_cred_v5",

    getLocalCredential() {
      try {
        const raw = safeStorage.getItem(this.LOCAL_CRED_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        return (parsed && parsed.salt && parsed.hash && parsed.email) ? parsed : null;
      } catch (e) {
        return null;
      }
    },

    hasLocalCredential() {
      return Boolean(this.getLocalCredential());
    },

    async setupLocalCredential({ email, name, password }) {
      const cleanEmail = String(email || "").trim().toLowerCase();
      const cleanName = String(name || "").trim();
      const salt = generateCryptoSalt(16);
      const hash = await computeSaltedDigest(salt, `${cleanEmail}:${password}`);
      const record = {
        email: cleanEmail,
        name: cleanName || "ครูผู้สอน",
        salt,
        hash,
        updatedAt: Date.now()
      };
      safeStorage.setItem(this.LOCAL_CRED_KEY, JSON.stringify(record));
      return record;
    },

    async authenticate({ email, name, password, adminCode = "" }) {
      const cleanEmail = String(email || "").trim().toLowerCase();
      const cleanName = String(name || "").trim();
      if (!cleanEmail || !password || password.length < 6) {
        return { ok: false, error: "กรุณากรอกอีเมลและรหัสผ่านอย่างน้อย 6 ตัวอักษร" };
      }

      // Firebase Auth Adapter path when Firebase Config is provided
      if (DataService.Cloud.getBackendMode() === 'firebase' && DataService.Cloud._auth) {
        try {
          const cred = await DataService.Cloud._auth.signInWithEmailAndPassword(cleanEmail, password);
          let roleVerified = false;
          if (DataService.Cloud._db && cred.user) {
            const teacherDoc = await DataService.Cloud._db.collection("teachers").doc(cred.user.uid).get();
            roleVerified = teacherDoc.exists && teacherDoc.data()?.role === 'teacher';
          }
          if (!roleVerified) {
            await DataService.Cloud.signOut();
            return { ok: false, error: "บัญชีนี้ไม่มีสิทธิ์ระดับครูผู้สอนในฐานข้อมูล Firebase" };
          }
          return {
            ok: true,
            mode: 'firebase',
            email: cleanEmail,
            name: cleanName || cred.user.displayName || "ครูผู้สอน"
          };
        } catch (err) {
          return { ok: false, error: `เข้าสู่ระบบ Firebase ไม่สำเร็จ: ${err.message}` };
        }
      }

      // Secure Local Fallback Adapter (Salted SHA-256 Digest + Admin Setup Code hash check)
      const stored = this.getLocalCredential();
      if (!stored) {
        const isValidAdmin = await verifyAdminSetupCode(adminCode);
        if (!isValidAdmin) {
          return {
            ok: false,
            error: "รหัสยืนยันสิทธิ์สถาบัน (Admin Setup Code) ไม่ถูกต้อง — นักเรียนไม่สามารถตั้งบัญชีครูเองได้"
          };
        }
        const created = await this.setupLocalCredential({ email: cleanEmail, name: cleanName, password });
        return {
          ok: true,
          firstSetup: true,
          mode: 'local',
          email: created.email,
          name: created.name
        };
      }

      if (stored.email !== cleanEmail) {
        return { ok: false, error: `อีเมลครูผู้สอนไม่ตรงกับบัญชีที่ตั้งค่าไว้ (${escapeHTML(stored.email)})` };
      }
      const attemptHash = await computeSaltedDigest(stored.salt, `${cleanEmail}:${password}`);
      if (attemptHash !== stored.hash) {
        return { ok: false, error: "รหัสผ่านครูผู้สอนไม่ถูกต้อง" };
      }
      return {
        ok: true,
        mode: 'local',
        email: stored.email,
        name: cleanName || stored.name
      };
    }
  },

  Users: {
    getAll() {
      try {
        const db = safeStorage.getItem("c_edu_db_users_v4");
        const parsed = db ? JSON.parse(db) : {};
        return (parsed && typeof parsed === 'object') ? parsed : {};
      } catch (e) { return {}; }
    },
    saveAll(db, skipCloud = false) {
      const ok = safeStorage.setItem("c_edu_db_users_v4", JSON.stringify(db || {}));
      if (!skipCloud && DataService.Cloud.getBackendMode() === 'firebase') {
        Object.values(db || {}).forEach(u => { DataService.Cloud.syncUser(u); });
      }
      return ok;
    },
    getByEmail(email) {
      if (!email) return null;
      const db = this.getAll();
      const rec = db[email.toLowerCase()];
      return rec ? normalizeUserRecord({ ...rec }) : null;
    },
    saveUser(user) {
      if (!user || !user.email || user.email === "guest@example.com" || user.role === 'teacher') return true;
      const db = this.getAll();
      const cleanUser = normalizeUserRecord(user);
      db[user.email.toLowerCase()] = cleanUser;
      const ok = safeStorage.setItem("c_edu_db_users_v4", JSON.stringify(db));
      DataService.Cloud.syncUser(cleanUser);
      return ok;
    },
    getTeacherAvatar() {
      const raw = safeStorage.getItem("c_edu_teacher_avatar_v4");
      return isSafeAvatarDataUrl(raw) ? raw : "";
    },
    setTeacherAvatar(dataUrl) {
      if (!dataUrl) {
        safeStorage.removeItem("c_edu_teacher_avatar_v4");
        return true;
      }
      if (!isSafeAvatarDataUrl(dataUrl)) return false;
      return safeStorage.setItem("c_edu_teacher_avatar_v4", dataUrl);
    },
    getSession() {
      return {
        email: safeStorage.getItem("c_edu_current_session_v4"),
        role: safeStorage.getItem("c_edu_current_role_v4"),
        teacherName: safeStorage.getItem("c_edu_teacher_name")
      };
    },
    setStudentSession(email) {
      safeStorage.setItem("c_edu_current_session_v4", email);
      safeStorage.setItem("c_edu_current_role_v4", "student");
    },
    setTeacherSession(name, email = "teacher@admin.local") {
      safeStorage.setItem("c_edu_current_role_v4", "teacher");
      safeStorage.setItem("c_edu_teacher_name", name);
      if (email) safeStorage.setItem("c_edu_current_session_v4", email);
    },
    clearSession() {
      safeStorage.removeItem("c_edu_current_session_v4");
      safeStorage.removeItem("c_edu_current_role_v4");
      safeStorage.removeItem("c_edu_teacher_name");
    },
    getTopLeaderboard(limit = 5) {
      return Object.values(this.getAll())
        .map(u => normalizeUserRecord({ ...u }))
        .filter(u => u && u.email && u.email !== "guest@example.com" && u.role !== 'teacher')
        .sort((a, b) => (b.xp || 0) - (a.xp || 0))
        .slice(0, limit);
    }
  },
  Quests: {
    STORAGE_KEY: "c_edu_teacher_quests_v4",
    getAll() {
      try {
        const raw = safeStorage.getItem(this.STORAGE_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list : [];
      } catch (e) { return []; }
    },
    saveAll(list) {
      const normalized = Array.isArray(list) ? list : [];
      safeStorage.setItem(this.STORAGE_KEY, JSON.stringify(normalized));
      DataService.Cloud.syncQuests(normalized);
    },
    create(quest) {
      const list = this.getAll();
      list.unshift(quest);
      this.saveAll(list);
      return quest;
    },
    update(id, patch) {
      const list = this.getAll().map(q => q.id === id ? { ...q, ...patch } : q);
      this.saveAll(list);
      return list;
    },
    toggleActive(id) {
      const list = this.getAll().map(q => q.id === id ? { ...q, active: !q.active } : q);
      this.saveAll(list);
      return list;
    },
    remove(id) {
      const list = this.getAll().filter(q => q.id !== id);
      this.saveAll(list);
      return list;
    }
  },
  Kahoot: {
    loadSessions() {
      try {
        const raw = safeStorage.getItem("c_edu_active_kahoot_sessions_v4");
        return raw ? JSON.parse(raw) : {};
      } catch (e) { return {}; }
    },
    saveSessions(sessions) {
      safeStorage.setItem("c_edu_active_kahoot_sessions_v4", JSON.stringify(sessions || {}));
    }
  },
  Shorts: {
    async listMeta() {
      const localList = await ShortsDB.getAllMeta().catch(() => []);
      if (DataService.Cloud.getBackendMode() === 'firebase') {
        const cloudList = await DataService.Cloud.fetchShortsMetaFromCloud();
        if (Array.isArray(cloudList)) {
          const mergedMap = {};
          localList.forEach(item => { if (item && item.id) mergedMap[item.id] = item; });
          for (const item of cloudList) {
            if (!item || !item.id) continue;
            mergedMap[item.id] = { ...(mergedMap[item.id] || {}), ...item };
            await ShortsDB.upsertMeta(mergedMap[item.id]).catch(() => {});
          }
          return Object.values(mergedMap)
            .map(s => ({
              ...s,
              comments: Array.isArray(s.comments) ? s.comments : [],
              likedBy: Array.isArray(s.likedBy) ? s.likedBy : [],
              shares: Number(s.shares || 0)
            }))
            .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        }
      }
      return localList;
    },
    getVideoBlob(id) { return ShortsDB.getVideoBlob(id); },
    async saveShort(meta, blob) {
      const ok = await ShortsDB.saveShort(meta, blob);
      if (DataService.Cloud.getBackendMode() === 'firebase') {
        const cloudUrl = await DataService.Cloud.uploadShortToCloud(meta, blob);
        if (cloudUrl) {
          meta.cloudUrl = cloudUrl;
          await ShortsDB.updateMeta(meta.id, (cur) => ({ ...cur, cloudUrl })).catch(() => {});
        }
      }
      return ok;
    },
    async updateMeta(id, patchFn) {
      let updated = await ShortsDB.updateMeta(id, patchFn);
      if (!updated) {
        const fallbackItem = (cachedShortsMeta || []).find(s => s && s.id === id);
        if (fallbackItem) {
          updated = patchFn({ ...fallbackItem });
          await ShortsDB.upsertMeta(updated).catch(() => {});
        }
      }
      if (updated && DataService.Cloud.getBackendMode() === 'firebase') {
        DataService.Cloud.syncShortMeta(updated);
      }
      return updated;
    },
    async deleteShort(id) {
      const ok = await ShortsDB.deleteShort(id);
      if (DataService.Cloud.getBackendMode() === 'firebase') {
        DataService.Cloud.deleteShortFromCloud(id);
      }
      return ok;
    },
    async estimateStorage() {
      if (navigator.storage && typeof navigator.storage.estimate === 'function') {
        try {
          const est = await navigator.storage.estimate();
          const usage = est.usage || 0;
          const quota = est.quota || 0;
          return { supported: true, usage, quota, remaining: Math.max(0, quota - usage) };
        } catch (e) {}
      }
      return { supported: false, usage: 0, quota: 0, remaining: Infinity };
    }
  }
};

function createDefaultUnauthUser() {
  return {
    email: "guest@example.com",
    name: "เข้าสู่ระบบ",
    year: "บัญชีนักเรียน / ครูผู้สอน",
    role: "student",
    isLoggedIn: false,
    avatarDataUrl: "",
    xp: 0,
    currentUnit: 1,
    currentTopicIdx: 0,
    currentTopic: "1.1 ยุคและระดับของภาษาคอมพิวเตอร์",
    units: createEmptyUnitsMap(),
    likedShorts: [],
    receivedShorts: [],
    activityHistory: [],
    badges: [],
    claimedLabXp: [],
    watchedShortsAllTime: [],
    commentedShortsCount: 0,
    sharedShortsCount: 0,
    kahootGamesPlayed: 0,
    completedTeacherQuests: [],
    customRewards: [],
    streak: { count: 0, lastDate: "" },
    dailyQuests: { date: "", login: false, studyOrQuiz: 0, playLabs: 0, watchShorts: 0, shortSocial: 0, bonusClaimed: false },
    watchedShortsToday: []
  };
}

let currentUser = createDefaultUnauthUser();

function loadUserDatabase() {
  return DataService.Users.getAll();
}

function saveUserDatabase(db) {
  DataService.Users.saveAll(db);
}

function ensureDailyQuestReset() {
  if (!currentUser || currentUser.role === 'teacher') return;
  normalizeUserRecord(currentUser);
  const today = getTodayDateKey();
  if (currentUser.dailyQuests.date !== today) {
    currentUser.dailyQuests = {
      date: today,
      login: !!currentUser.isLoggedIn,
      studyOrQuiz: 0,
      playLabs: 0,
      watchShorts: 0,
      shortSocial: 0,
      bonusClaimed: false
    };
    currentUser.watchedShortsToday = [];
  } else if (currentUser.isLoggedIn && !currentUser.dailyQuests.login) {
    currentUser.dailyQuests.login = true;
  }
}

function updateDailyStreak() {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') return;
  normalizeUserRecord(currentUser);
  const today = getTodayDateKey();
  const yesterday = getYesterdayDateKey();
  if (currentUser.streak.lastDate === today) return;
  if (currentUser.streak.lastDate === yesterday) {
    currentUser.streak.count = (currentUser.streak.count || 0) + 1;
  } else {
    currentUser.streak.count = 1;
  }
  currentUser.streak.lastDate = today;
  ensureDailyQuestReset();
  checkAndUnlockBadges(true);
}

function getTeacherQuestProgress(quest) {
  normalizeUserRecord(currentUser);
  const target = Math.max(1, Number(quest.targetValue || 1));
  let current = 0;
  if (quest.conditionType === 'watch_shorts') {
    current = (currentUser.watchedShortsAllTime || []).length;
  } else if (quest.conditionType === 'play_labs') {
    current = (currentUser.claimedLabXp || []).length;
  } else if (quest.conditionType === 'pass_unit') {
    const u = Math.max(1, Math.min(5, target));
    current = (currentUser.units[u] && currentUser.units[u].postDone) ? 1 : 0;
    return { current, target: 1, met: current >= 1 };
  } else if (quest.conditionType === 'comment_shorts') {
    current = currentUser.commentedShortsCount || 0;
  } else if (quest.conditionType === 'like_shorts') {
    current = (currentUser.likedShorts || []).length;
  } else if (quest.conditionType === 'manual_submit') {
    const done = (currentUser.completedTeacherQuests || []).includes(quest.id);
    return { current: done ? 1 : 0, target: 1, met: done };
  }
  return { current: Math.min(current, target), target, met: current >= target };
}

function evaluateTeacherQuests(silent = false) {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') return;
  normalizeUserRecord(currentUser);
  const quests = DataService.Quests.getAll().filter(q => q.active !== false);
  let anyRewarded = false;

  quests.forEach(quest => {
    if (currentUser.completedTeacherQuests.includes(quest.id)) return;
    if (quest.conditionType === 'manual_submit') return;
    const prog = getTeacherQuestProgress(quest);
    if (prog.met) {
      currentUser.completedTeacherQuests.push(quest.id);
      const xpBonus = Number(quest.xpReward || 0);
      if (xpBonus > 0) currentUser.xp = (currentUser.xp || 0) + xpBonus;
      const rewardName = quest.rewardTitle || `รางวัลภารกิจ: ${quest.title}`;
      currentUser.customRewards.push({
        questId: quest.id,
        questTitle: quest.title,
        rewardTitle: rewardName,
        xpReward: xpBonus,
        earnedAt: Date.now()
      });
      recordUserActivity("teacher_quest", currentUser.currentUnit || 1, `สำเร็จภารกิจครู "${quest.title}" (+${xpBonus} XP · ${rewardName})`);
      anyRewarded = true;
      if (!silent) {
        showToast(`สำเร็จภารกิจพิเศษ "${quest.title}" รับ +${xpBonus} XP และรางวัล "${rewardName}"!`, "success");
      }
    }
  });

  if (anyRewarded) {
    saveCurrentProgress();
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  }
}

function claimManualTeacherQuest(questId) {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') {
    showToast("กรุณาเข้าสู่ระบบด้วยบัญชีนักเรียนเพื่อส่งภารกิจ", "warning");
    return;
  }
  normalizeUserRecord(currentUser);
  if (currentUser.completedTeacherQuests.includes(questId)) {
    showToast("คุณรับรางวัลจากภารกิจนี้เรียบร้อยแล้ว", "info");
    return;
  }
  const quest = DataService.Quests.getAll().find(q => q.id === questId && q.active !== false);
  if (!quest) return;

  currentUser.completedTeacherQuests.push(quest.id);
  const xpBonus = Number(quest.xpReward || 0);
  if (xpBonus > 0) currentUser.xp = (currentUser.xp || 0) + xpBonus;
  const rewardName = quest.rewardTitle || `รางวัลภารกิจ: ${quest.title}`;
  currentUser.customRewards.push({
    questId: quest.id,
    questTitle: quest.title,
    rewardTitle: rewardName,
    xpReward: xpBonus,
    earnedAt: Date.now()
  });
  recordUserActivity("teacher_quest", currentUser.currentUnit || 1, `ส่งภารกิจพิเศษ "${quest.title}" (+${xpBonus} XP · ${rewardName})`);
  checkAndUnlockBadges(false);
  saveCurrentProgress();
  launchConfetti();
  showToast(`ส่งภารกิจสำเร็จ! รับ +${xpBonus} XP และรางวัล "${rewardName}"`, "success");
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  if (typeof renderAccountPage === 'function' && !document.getElementById("accountSection").classList.contains("hidden")) {
    renderAccountPage();
  }
}

function trackDailyQuestProgress(questType, shortId = null) {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') return;
  ensureDailyQuestReset();
  if (questType === 'studyOrQuiz') {
    currentUser.dailyQuests.studyOrQuiz = Math.min(2, (currentUser.dailyQuests.studyOrQuiz || 0) + 1);
  } else if (questType === 'playLab') {
    currentUser.dailyQuests.playLabs = Math.min(1, (currentUser.dailyQuests.playLabs || 0) + 1);
  } else if (questType === 'watchShort' && shortId) {
    if (!currentUser.watchedShortsAllTime.includes(shortId)) {
      currentUser.watchedShortsAllTime.push(shortId);
    }
    if (!currentUser.watchedShortsToday.includes(shortId)) {
      currentUser.watchedShortsToday.push(shortId);
      currentUser.dailyQuests.watchShorts = Math.min(2, currentUser.watchedShortsToday.length);
    }
  } else if (questType === 'shortSocial') {
    currentUser.dailyQuests.shortSocial = Math.min(1, (currentUser.dailyQuests.shortSocial || 0) + 1);
  }

  const q = currentUser.dailyQuests;
  if (q.login && q.studyOrQuiz >= 2 && q.playLabs >= 1 && q.watchShorts >= 2 && q.shortSocial >= 1 && !q.bonusClaimed) {
    q.bonusClaimed = true;
    currentUser.xp = (currentUser.xp || 0) + 30;
    showToast("ภารกิจรายวันครบทั้ง 5 ข้อแล้ว! รับโบนัส +30 XP", "success");
  }
  checkAndUnlockBadges(false);
  evaluateTeacherQuests(false);
  saveCurrentProgress();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
}

function checkAndUnlockBadges(silent = false) {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') return;
  normalizeUserRecord(currentUser);
  const prevSet = new Set(currentUser.badges || []);
  const earned = new Set(prevSet);
  earned.add("first_step");

  let anyPre = false, highPost = false, perfectPost = false, all5 = true;
  for (let i = 1; i <= 5; i++) {
    const st = currentUser.units[i];
    if (st.preDone) anyPre = true;
    if (st.postDone) {
      earned.add(`unit_${i}_master`);
    } else {
      all5 = false;
    }
    if (typeof st.postScore === 'number' && st.postScore >= 8) highPost = true;
    if (typeof st.postScore === 'number' && st.postScore >= 10) perfectPost = true;
  }

  if (anyPre) earned.add("pre_done_1");
  if (all5) earned.add("all_5_units");
  if (highPost) earned.add("post_high_score");
  if (perfectPost) earned.add("post_perfect_10");

  const xp = currentUser.xp || 0;
  if (xp >= 150) earned.add("xp_150");
  if (xp >= 500) earned.add("xp_500");
  if (xp >= 1000) earned.add("xp_1000");
  if (xp >= 2000) earned.add("xp_2000");

  const streakCnt = currentUser.streak?.count || 0;
  if (streakCnt >= 3) earned.add("streak_3");
  if (streakCnt >= 7) earned.add("streak_7");
  if (streakCnt >= 14) earned.add("streak_14");

  const labCount = (currentUser.claimedLabXp || []).length;
  if (labCount >= 5) earned.add("labs_5");
  if (labCount >= 15) earned.add("labs_15");
  if (labCount >= 25) earned.add("labs_25");

  const likeCount = (currentUser.likedShorts || []).length;
  if (likeCount >= 1) earned.add("like_1");
  if (likeCount >= 5) earned.add("like_5");
  if ((currentUser.commentedShortsCount || 0) >= 1) earned.add("comment_1");
  if ((currentUser.sharedShortsCount || 0) >= 1) earned.add("share_1");
  if ((currentUser.kahootGamesPlayed || 0) >= 1) earned.add("kahoot_join");

  const nextArr = Array.from(earned);
  currentUser.badges = nextArr;

  if (!silent) {
    const newlyEarned = nextArr.filter(id => !prevSet.has(id));
    newlyEarned.forEach(bId => {
      const meta = BADGE_CATALOG.find(b => b.id === bId);
      if (meta) {
        showToast(`ปลดล็อกเหรียญรางวัลใหม่: "${meta.name}"!`, "success");
      }
    });
  }
}

// Anti-XP-Farming Engine for 25 Mini-Game Labs (1 Claim Per Lab Per Account)
function claimLabXpOnce(labId, xpAmount = 10, label = "ทดลองห้องแล็บมินิเกม") {
  if (!currentUser) return false;
  if (currentUser.role === 'teacher') {
    showToast(`โหมดครูผู้สอน: ทดลอง ${label} สำเร็จ`, "info");
    refreshLabXpFooter(labId, xpAmount, label);
    return false;
  }
  normalizeUserRecord(currentUser);
  if (currentUser.claimedLabXp.includes(labId)) {
    showToast("รับ XP ของแล็บนี้ครบแล้ว (จำกัด 1 ครั้งต่อแล็บ)", "info");
    refreshLabXpFooter(labId, xpAmount, label);
    return false;
  }
  currentUser.claimedLabXp.push(labId);
  addXpReward(xpAmount, label);
  recordUserActivity("lab_xp", currentUser.currentUnit || 1, `พิชิตมินิเกม: ${label} (+${xpAmount} XP)`);
  trackDailyQuestProgress('playLab');
  refreshLabXpFooter(labId, xpAmount, label);
  showToast(`สำเร็จภารกิจแล็บ! ได้รับ +${xpAmount} XP (${currentUser.claimedLabXp.length}/25 แล็บ)`, "success");
  return true;
}

function refreshLabXpFooter(labId, xpAmount = 10, label = "ทดลองมินิเกม") {
  const box = document.getElementById(`labFooter_${labId}`);
  const btn = document.getElementById(`btnClaimLab_${labId}`);
  const stat = document.getElementById(`labFooterStatus_${labId}`);
  if (!box || !btn || !stat) return;
  const isClaimed = (currentUser.role !== 'teacher') && Array.isArray(currentUser.claimedLabXp) && currentUser.claimedLabXp.includes(labId);
  box.classList.toggle("claimed", isClaimed);
  btn.classList.toggle("claimed", isClaimed);
  if (isClaimed) {
    stat.innerHTML = `<span class="svg-ico" style="color:#059669;">${getSymbolIcon('checkCircle', 16)}</span> <span>ได้รับโบนัส +${xpAmount} XP จากแล็บนี้แล้ว</span>`;
    btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('check', 15)}</span> <span>รับ XP แล้ว</span>`;
  } else {
    stat.innerHTML = `<span class="svg-ico" style="color:#4F46E5;">${getSymbolIcon('sparkles', 16)}</span> <span>รับโบนัส +${xpAmount} XP เมื่อบันทึกผล</span>`;
    btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('star', 15)}</span> <span>บันทึกผลการทดลอง (+${xpAmount} XP)</span>`;
  }
}

function getLabXpFooterHtml(labId, xpAmount = 10, label = "ทดลองมินิเกม") {
  const isClaimed = (currentUser.role !== 'teacher') && Array.isArray(currentUser.claimedLabXp) && currentUser.claimedLabXp.includes(labId);
  const safeLabel = escapeHtml(label);
  return `
    <div class="lab-xp-footer ${isClaimed ? 'claimed' : ''}" id="labFooter_${labId}">
      <div id="labFooterStatus_${labId}" style="font-size:0.8rem; font-weight:700; color:#334155; display:flex; align-items:center; gap:6px;">
        <span class="svg-ico" style="color:${isClaimed ? '#059669' : '#4F46E5'};">${getSymbolIcon(isClaimed ? 'checkCircle' : 'sparkles', 16)}</span>
        <span>${isClaimed ? `ได้รับโบนัส +${xpAmount} XP จากแล็บนี้แล้ว` : `รับโบนัส +${xpAmount} XP เมื่อบันทึกผล`}</span>
      </div>
      <button type="button" class="btn-lab-claim ${isClaimed ? 'claimed' : ''}" id="btnClaimLab_${labId}" onclick="claimLabXpOnce('${labId}', ${xpAmount}, '${safeLabel}')">
        <span class="svg-ico">${getSymbolIcon(isClaimed ? 'check' : 'star', 15)}</span>
        <span>${isClaimed ? 'รับ XP แล้ว' : `บันทึกผลการทดลอง (+${xpAmount} XP)`}</span>
      </button>
    </div>
  `;
}

function recordUserActivity(type, unitId, detailText) {
  if (!currentUser || !currentUser.isLoggedIn || currentUser.role === 'teacher') return;
  normalizeUserRecord(currentUser);
  const now = Date.now();
  const hist = currentUser.activityHistory;
  const last = hist[hist.length - 1];
  if (last && last.type === type && last.unitId === unitId && last.detail === detailText && (now - last.timestamp) < 3000) {
    return;
  }
  hist.push({
    id: "act_" + now + "_" + Math.random().toString(36).slice(2, 6),
    timestamp: now,
    type,
    unitId: unitId || currentUser.currentUnit || 1,
    detail: detailText
  });
  if (hist.length > 80) {
    currentUser.activityHistory = hist.slice(hist.length - 80);
  }
  checkAndUnlockBadges(false);
  saveCurrentProgress();
}

function saveCurrentProgress() {
  if (!currentUser || currentUser.role === 'teacher') return;
  if (currentUser.isLoggedIn && currentUser.email !== "guest@example.com") {
    DataService.Users.saveUser(currentUser);
  }
  updateTopAccountWidget();
}

function showAuthError(msg) {
  const el = document.getElementById("loginErrorBanner");
  if (!el) return;
  if (!msg) {
    el.classList.add("hidden");
    el.innerText = "";
  } else {
    el.classList.remove("hidden");
    el.innerText = msg;
    el.classList.remove("animate-shake");
    void el.offsetWidth;
    el.classList.add("animate-shake");
    playSfx('error');
  }
}

function togglePasswordField(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  if (inp.type === "password") {
    inp.type = "text";
    if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('eyeOff', 16)}</span>`;
  } else {
    inp.type = "password";
    if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('eye', 16)}</span>`;
  }
}

function openAccountOrLogin() {
  if (currentUser && currentUser.isLoggedIn) {
    openProfileModal();
  } else {
    openLoginModal();
  }
}

function renderAvatarElement(el, userObj, shieldSize = 18) {
  if (!el) return;
  el.innerHTML = "";
  const isTeacher = Boolean(userObj && userObj.role === 'teacher' && userObj.isLoggedIn);
  const isLoggedIn = Boolean(userObj && userObj.isLoggedIn);

  if (isLoggedIn && isSafeAvatarDataUrl(userObj.avatarDataUrl)) {
    const img = document.createElement("img");
    img.className = "avatar-photo";
    img.alt = userObj.name || "Profile Avatar";
    img.src = userObj.avatarDataUrl;
    el.appendChild(img);
    return;
  }
  if (isTeacher) {
    el.innerHTML = `<span class="svg-ico">${getSymbolIcon('shield', shieldSize)}</span>`;
    return;
  }
  if (!isLoggedIn && el.id === "widgetAvatar") {
    el.innerHTML = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`;
    return;
  }
  el.textContent = ((userObj && userObj.name) ? userObj.name : "U").charAt(0).toUpperCase();
}

function buildAvatarHtml(userObj, sizePx = 32, fontSize = '0.82rem') {
  const nameStr = (userObj && userObj.name) ? userObj.name : "U";
  if (userObj && isSafeAvatarDataUrl(userObj.avatarDataUrl)) {
    return `<span class="account-avatar" style="width:${sizePx}px;height:${sizePx}px;font-size:${fontSize};"><img class="avatar-photo" src="${userObj.avatarDataUrl}" alt="${escapeHtml(nameStr)}"></span>`;
  }
  const cls = (userObj && userObj.role === 'teacher') ? "account-avatar teacher" : "account-avatar";
  return `<span class="${cls}" style="width:${sizePx}px;height:${sizePx}px;font-size:${fontSize};">${escapeHtml(nameStr.charAt(0).toUpperCase())}</span>`;
}

let avatarCropState = {
  img: null,
  objUrl: null,
  zoom: 1,
  offsetX: 0,
  offsetY: 0,
  rotationDeg: 0,
  isDragging: false,
  lastClientX: 0,
  lastClientY: 0,
  eventsBound: false
};

function triggerAvatarFilePicker() {
  if (!currentUser || !currentUser.isLoggedIn) {
    showToast("กรุณาเข้าสู่ระบบก่อนเพิ่มรูปโปรไฟล์", "warning");
    openLoginModal();
    return;
  }
  const inp = document.getElementById("avatarFileInput");
  if (inp) {
    inp.value = "";
    inp.click();
  }
}

function handleAvatarFileSelected(file) {
  if (!file) return;
  if (!currentUser || !currentUser.isLoggedIn) {
    showToast("กรุณาเข้าสู่ระบบก่อนเพิ่มรูปโปรไฟล์", "warning");
    return;
  }
  if (!file.type || !file.type.startsWith("image/")) {
    showToast("กรุณาเลือกไฟล์รูปภาพเท่านั้น (JPG, PNG, WebP, GIF)", "error");
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    showToast("ไฟล์รูปภาพมีขนาดใหญ่เกิน 15 MB กรุณาเลือกรูปที่เล็กลง", "error");
    return;
  }

  if (avatarCropState.objUrl) {
    URL.revokeObjectURL(avatarCropState.objUrl);
    avatarCropState.objUrl = null;
  }

  const objUrl = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => {
    avatarCropState.img = img;
    avatarCropState.objUrl = objUrl;
    avatarCropState.zoom = 1;
    avatarCropState.offsetX = 0;
    avatarCropState.offsetY = 0;
    avatarCropState.rotationDeg = 0;
    avatarCropState.isDragging = false;

    const slider = document.getElementById("avatarZoomSlider");
    const zoomLbl = document.getElementById("avatarZoomLabel");
    if (slider) slider.value = "1";
    if (zoomLbl) zoomLbl.innerText = "1.0x";

    bindAvatarCropPointerEvents();
    document.getElementById("avatarCropModal").classList.remove("hidden");
    drawAvatarCropCanvas();
  };
  img.onerror = () => {
    URL.revokeObjectURL(objUrl);
    showToast("ไม่สามารถอ่านไฟล์รูปภาพนี้ได้ กรุณาลองเลือกไฟล์อื่น", "error");
  };
  img.src = objUrl;
}

function bindAvatarCropPointerEvents() {
  if (avatarCropState.eventsBound) return;
  const frame = document.getElementById("avatarCropFrame");
  if (!frame) return;
  avatarCropState.eventsBound = true;

  frame.addEventListener("pointerdown", (e) => {
    if (!avatarCropState.img) return;
    avatarCropState.isDragging = true;
    avatarCropState.lastClientX = e.clientX;
    avatarCropState.lastClientY = e.clientY;
    frame.setPointerCapture?.(e.pointerId);
  });

  frame.addEventListener("pointermove", (e) => {
    if (!avatarCropState.isDragging || !avatarCropState.img) return;
    const dx = e.clientX - avatarCropState.lastClientX;
    const dy = e.clientY - avatarCropState.lastClientY;
    avatarCropState.lastClientX = e.clientX;
    avatarCropState.lastClientY = e.clientY;
    avatarCropState.offsetX += dx;
    avatarCropState.offsetY += dy;
    drawAvatarCropCanvas();
  });

  const endDrag = () => { avatarCropState.isDragging = false; };
  frame.addEventListener("pointerup", endDrag);
  frame.addEventListener("pointercancel", endDrag);
}

function renderAvatarCropToCanvas(canvas) {
  if (!canvas || !avatarCropState.img) return;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const previewSize = 240;
  const ratio = size / previewSize;

  const img = avatarCropState.img;
  const rotRad = (avatarCropState.rotationDeg * Math.PI) / 180;
  const isQuarterTurn = (avatarCropState.rotationDeg % 180) !== 0;
  const effW = isQuarterTurn ? img.naturalHeight : img.naturalWidth;
  const effH = isQuarterTurn ? img.naturalWidth : img.naturalHeight;

  const baseScale = Math.max(previewSize / Math.max(1, effW), previewSize / Math.max(1, effH));
  const scalePreview = baseScale * avatarCropState.zoom;
  const drawnWPreview = effW * scalePreview;
  const drawnHPreview = effH * scalePreview;

  const maxOffX = Math.max(0, (drawnWPreview - previewSize) / 2);
  const maxOffY = Math.max(0, (drawnHPreview - previewSize) / 2);
  avatarCropState.offsetX = Math.max(-maxOffX, Math.min(maxOffX, avatarCropState.offsetX));
  avatarCropState.offsetY = Math.max(-maxOffY, Math.min(maxOffY, avatarCropState.offsetY));

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "#F8FAFC";
  ctx.fillRect(0, 0, size, size);

  ctx.save();
  ctx.translate(size / 2 + avatarCropState.offsetX * ratio, size / 2 + avatarCropState.offsetY * ratio);
  ctx.rotate(rotRad);
  const scaleOut = scalePreview * ratio;
  ctx.drawImage(
    img,
    -(img.naturalWidth * scaleOut) / 2,
    -(img.naturalHeight * scaleOut) / 2,
    img.naturalWidth * scaleOut,
    img.naturalHeight * scaleOut
  );
  ctx.restore();
}

function drawAvatarCropCanvas() {
  const canvas = document.getElementById("avatarCropCanvas");
  renderAvatarCropToCanvas(canvas);
}

function updateAvatarCropZoom(val) {
  avatarCropState.zoom = Math.max(1, Math.min(3, parseFloat(val) || 1));
  const lbl = document.getElementById("avatarZoomLabel");
  if (lbl) lbl.innerText = `${avatarCropState.zoom.toFixed(1)}x`;
  drawAvatarCropCanvas();
}

function rotateAvatarCrop() {
  avatarCropState.rotationDeg = (avatarCropState.rotationDeg + 90) % 360;
  avatarCropState.offsetX = 0;
  avatarCropState.offsetY = 0;
  drawAvatarCropCanvas();
}

function resetAvatarCropPosition() {
  avatarCropState.zoom = 1;
  avatarCropState.offsetX = 0;
  avatarCropState.offsetY = 0;
  const slider = document.getElementById("avatarZoomSlider");
  const lbl = document.getElementById("avatarZoomLabel");
  if (slider) slider.value = "1";
  if (lbl) lbl.innerText = "1.0x";
  drawAvatarCropCanvas();
}

function closeAvatarCropModal() {
  document.getElementById("avatarCropModal").classList.add("hidden");
  if (avatarCropState.objUrl) {
    URL.revokeObjectURL(avatarCropState.objUrl);
    avatarCropState.objUrl = null;
  }
  avatarCropState.img = null;
  avatarCropState.isDragging = false;
  const inp = document.getElementById("avatarFileInput");
  if (inp) inp.value = "";
}

function persistCurrentUserAvatar(dataUrl, isRemoval = false) {
  if (!currentUser || !currentUser.isLoggedIn) return false;
  const prevAvatar = currentUser.avatarDataUrl || "";
  currentUser.avatarDataUrl = dataUrl;

  let saved = true;
  if (currentUser.role === 'teacher') {
    saved = DataService.Users.setTeacherAvatar(dataUrl);
  } else {
    saved = DataService.Users.saveUser(currentUser);
  }

  if (!saved) {
    currentUser.avatarDataUrl = prevAvatar;
    showToast("พื้นที่จัดเก็บของเบราว์เซอร์ไม่เพียงพอสำหรับบันทึกรูปโปรไฟล์", "error");
    return false;
  }

  if (currentUser.role !== 'teacher') {
    recordUserActivity(
      "profile_update",
      currentUser.currentUnit || 1,
      isRemoval ? "ลบรูปโปรไฟล์ส่วนตัว" : "เพิ่ม / อัปเดตรูปโปรไฟล์ส่วนตัว"
    );
  }
  updateTopAccountWidget();
  renderAccountPage();
  renderHomeDashboard();
  if (!document.getElementById("teacherSection").classList.contains("hidden")) {
    renderTeacherReportTable();
  }
  return true;
}

function confirmSaveAvatarCrop() {
  if (!avatarCropState.img) return;
  const outCanvas = document.createElement("canvas");
  outCanvas.width = 192;
  outCanvas.height = 192;
  renderAvatarCropToCanvas(outCanvas);
  const dataUrl = outCanvas.toDataURL("image/jpeg", 0.86);
  outCanvas.width = 0;
  outCanvas.height = 0;

  if (!isSafeAvatarDataUrl(dataUrl)) {
    showToast("ไม่สามารถประมวลผลรูปโปรไฟล์ได้ กรุณาลองรูปภาพอื่น", "error");
    return;
  }

  if (persistCurrentUserAvatar(dataUrl, false)) {
    closeAvatarCropModal();
    playSfx('success');
    showToast("บันทึกรูปโปรไฟล์ของคุณเรียบร้อยแล้ว!", "success");
  }
}

async function handleRemoveAvatar() {
  if (!currentUser || !currentUser.isLoggedIn || !currentUser.avatarDataUrl) return;
  const ok = await showConfirmModal({
    title: "ยืนยันการลบรูปโปรไฟล์",
    message: "ต้องการลบรูปโปรไฟล์และกลับไปใช้ตัวอักษรย่อเริ่มต้นใช่หรือไม่?",
    confirmText: "ลบรูปโปรไฟล์",
    danger: true
  });
  if (!ok) return;
  if (persistCurrentUserAvatar("", true)) {
    playSfx('pop');
    showToast("ลบรูปโปรไฟล์เรียบร้อยแล้ว", "info");
  }
}

function openProfileModal() {
  if (!currentUser || !currentUser.isLoggedIn) {
    openLoginModal();
    return;
  }
  const isTeacher = currentUser.role === 'teacher';
  const av = document.getElementById("profileModalAvatar");
  av.className = isTeacher ? "account-avatar teacher" : "account-avatar";
  renderAvatarElement(av, currentUser, 22);

  document.getElementById("profileModalName").innerText = currentUser.name;
  document.getElementById("profileModalEmail").innerText = currentUser.email;
  const badge = document.getElementById("profileModalBadge");
  badge.innerText = isTeacher ? "ครูผู้สอน" : `${currentUser.year || 'นักเรียน'} · ${currentUser.xp || 0} XP`;
  badge.className = isTeacher ? "account-role-badge badge-teacher" : "account-role-badge badge-student";

  document.getElementById("profileTeacherActions").classList.toggle("hidden", !isTeacher);
  document.getElementById("profileEditName").value = currentUser.name;
  document.getElementById("profileEditYearWrap").classList.toggle("hidden", isTeacher);
  if (!isTeacher && currentUser.year) {
    document.getElementById("profileEditYear").value = currentUser.year;
  }
  document.getElementById("profileModal").classList.remove("hidden");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.add("hidden");
}

function handleProfileUpdate(e) {
  e.preventDefault();
  if (!currentUser || !currentUser.isLoggedIn) return;
  const newName = document.getElementById("profileEditName").value.trim();
  if (!newName) return;

  currentUser.name = newName;
  if (currentUser.role === 'teacher') {
    DataService.Users.setTeacherSession(newName);
  } else {
    const newYear = document.getElementById("profileEditYear").value;
    currentUser.year = newYear;
    recordUserActivity("profile_update", currentUser.currentUnit || 1, `อัปเดตข้อมูลบัญชี (${newName})`);
    saveCurrentProgress();
  }
  updateTopAccountWidget();
  renderHomeDashboard();
  renderAccountPage();
  closeProfileModal();
  showToast("อัปเดตข้อมูลบัญชีเรียบร้อยแล้ว", "success");
}

async function handleLogout() {
  const ok = await showConfirmModal({
    title: "ยืนยันการออกจากระบบ",
    message: "ข้อมูลผลการเรียน คลิปถูกใจ และคลังคลิปสั้นทั้งหมดจะถูกเก็บรักษาไว้อย่างปลอดภัยในระบบ",
    confirmText: "ออกจากระบบ",
    danger: true
  });
  if (!ok) return;

  stopTopicAudio();
  DataService.Users.clearSession();
  await DataService.Cloud.signOut();
  const clearedAiKey = (typeof clearAiApiKeyOnLogout === 'function') ? clearAiApiKeyOnLogout() : false;

  currentUser = createDefaultUnauthUser();
  updateTopAccountWidget();
  switchNav('learn');
  renderUnitCards();
  refreshShortsUI();
  if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
  if (typeof renderAccountPage === 'function') renderAccountPage();
  playSfx('pop');
  showToast(
    clearedAiKey ? "ออกจากระบบและล้าง API Key ออกจากเครื่องเรียบร้อยแล้ว" : "ออกจากระบบเรียบร้อยแล้ว",
    "info"
  );
}

function switchStudentAuthMode(mode) {
  showAuthError("");
  const btnSignIn = document.getElementById("subTabStudentSignIn");
  const btnReg = document.getElementById("subTabStudentRegister");
  const formSignIn = document.getElementById("formStudentSignIn");
  const formReg = document.getElementById("formStudentRegister");

  if (mode === 'signin') {
    btnSignIn.classList.add("active");
    btnReg.classList.remove("active");
    formSignIn.classList.remove("hidden");
    formReg.classList.add("hidden");
  } else {
    btnReg.classList.add("active");
    btnSignIn.classList.remove("active");
    formReg.classList.remove("hidden");
    formSignIn.classList.add("hidden");
  }
}

async function handleStudentSignIn(e) {
  e.preventDefault();
  showAuthError("");
  const email = document.getElementById("signInStudentEmail").value.trim().toLowerCase();
  const pass = document.getElementById("signInStudentPass").value;
  const submitBtn = e.target ? e.target.querySelector('button[type="submit"]') : null;

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "กำลังตรวจสอบบัญชี...";
  }

  try {
    let db = DataService.Users.getAll();
    if (DataService.Cloud.getBackendMode() === 'firebase') {
      const cloudRec = await DataService.Cloud.fetchUserByEmail(email);
      if (cloudRec) {
        db = DataService.Users.getAll();
      }
      await DataService.Cloud.fetchQuestsFromCloud();
    }

    if (!db[email]) {
      showAuthError("ไม่พบบัญชีอีเมลนี้ในระบบ กรุณาตรวจสอบอีเมลหรือกด 'สมัครบัญชีใหม่'");
      return;
    }

    const userRecord = normalizeUserRecord(db[email]);
    if (userRecord.passwordHash) {
      if (hashPassword(pass) !== userRecord.passwordHash) {
        showAuthError("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
        return;
      }
    } else {
      userRecord.passwordHash = hashPassword(pass);
    }

    userRecord.isLoggedIn = true;
    currentUser = userRecord;
    updateDailyStreak();
    ensureDailyQuestReset();
    recordUserActivity("login", currentUser.currentUnit || 1, `เข้าสู่ระบบ (${currentUser.currentTopic || "หน่วยที่ 1"})`);
    DataService.Users.saveUser(currentUser);
    DataService.Users.setStudentSession(email);

    updateTopAccountWidget();
    closeLoginModal();
    renderUnitCards();
    await refreshShortsUI();
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    if (typeof renderAccountPage === 'function') renderAccountPage();
    launchConfetti();
    showToast(`ยินดีต้อนรับกลับคุณ ${currentUser.name}`, "success");
  } catch (err) {
    showAuthError(`ไม่สามารถเข้าสู่ระบบได้: ${err.message || err}`);
    showToast("เกิดข้อผิดพลาดในการเชื่อมต่อ — ลองใหม่อีกครั้ง", "error");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = "เข้าสู่ระบบ";
    }
  }
}

async function handleStudentRegister(e) {
  e.preventDefault();
  showAuthError("");
  const email = document.getElementById("regStudentEmail").value.trim().toLowerCase();
  const name = document.getElementById("regStudentName").value.trim();
  const year = document.getElementById("regStudentYear").value;
  const pass = document.getElementById("regStudentPass").value;
  const passConfirm = document.getElementById("regStudentPassConfirm").value;
  const submitBtn = e.target ? e.target.querySelector('button[type="submit"]') : null;

  if (!year) {
    showAuthError("กรุณาเลือกระดับชั้นปีการศึกษา");
    return;
  }
  if (pass.length < 4) {
    showAuthError("กรุณาตั้งรหัสผ่านอย่างน้อย 4 ตัวอักษร");
    return;
  }
  if (pass !== passConfirm) {
    showAuthError("รหัสผ่านทั้งสองช่องไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "กำลังสร้างบัญชี...";
  }

  try {
    let db = DataService.Users.getAll();
    if (DataService.Cloud.getBackendMode() === 'firebase') {
      const existingCloud = await DataService.Cloud.fetchUserByEmail(email);
      if (existingCloud) {
        showAuthError("อีเมลนี้ถูกลงทะเบียนไว้ในระบบ Cloud แล้ว กรุณาใช้แท็บ 'เข้าสู่ระบบ'");
        return;
      }
      await DataService.Cloud.fetchQuestsFromCloud();
      db = DataService.Users.getAll();
    }

    if (db[email]) {
      showAuthError("อีเมลนี้ถูกลงทะเบียนไว้แล้ว กรุณาใช้แท็บ 'เข้าสู่ระบบ'");
      return;
    }
    if (Object.keys(db).length >= 200) {
      showAuthError("ระบบรองรับผู้เรียนเต็มความจุ 200 บัญชีแล้ว กรุณาติดต่อผู้สอน");
      return;
    }

    currentUser = normalizeUserRecord({
      email: email,
      name: name,
      year: year,
      passwordHash: hashPassword(pass),
      role: "student",
      isLoggedIn: true,
      xp: 50,
      currentUnit: 1,
      currentTopicIdx: 0,
      currentTopic: "1.1 ยุคและระดับของภาษาคอมพิวเตอร์",
      units: createEmptyUnitsMap(),
      likedShorts: [],
      receivedShorts: [],
      activityHistory: [],
      badges: ["first_step"],
      streak: { count: 1, lastDate: getTodayDateKey() },
      dailyQuests: { date: getTodayDateKey(), login: true, studyOrQuiz: 0, watchShorts: 0, bonusClaimed: false },
      watchedShortsToday: []
    });
    recordUserActivity("register", 1, "สร้างบัญชีใหม่และเริ่มต้นหน่วยที่ 1 (+50 XP)");

    DataService.Users.saveUser(currentUser);
    if (DataService.Cloud.getBackendMode() === 'firebase') {
      await DataService.Cloud.syncUser(currentUser);
    }
    DataService.Users.setStudentSession(email);

    updateTopAccountWidget();
    closeLoginModal();
    renderUnitCards();
    await refreshShortsUI();
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    if (typeof renderAccountPage === 'function') renderAccountPage();
    launchConfetti();
    showToast(`สมัครสมาชิกสำเร็จ! ยินดีต้อนรับ ${name} (+50 XP)`, "success");
  } catch (err) {
    showAuthError(`ไม่สามารถสมัครสมาชิกได้: ${err.message || err}`);
    showToast("บันทึกข้อมูลสมาชิกไม่สำเร็จ กรุณาลองใหม่", "error");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = "สร้างบัญชีและเข้าสู่ระบบ";
    }
  }
}

function updateTeacherAuthFormUI() {
  const banner = document.getElementById("teacherAuthModeBanner");
  const hint = document.getElementById("teacherAuthSetupHint");
  const btn = document.getElementById("btnTeacherAuthSubmit");
  const emailInp = document.getElementById("loginTeacherEmail");
  const nameInp = document.getElementById("loginTeacherName");
  const adminWrap = document.getElementById("teacherAdminCodeWrap");
  const adminInp = document.getElementById("loginTeacherAdminCode");
  const mode = DataService.Cloud.getBackendMode();

  if (mode === 'firebase') {
    if (adminWrap) adminWrap.classList.add("hidden");
    if (adminInp) { adminInp.required = false; adminInp.value = ""; }
    if (banner) banner.innerHTML = `<span class="svg-ico">${getSymbolIcon('shield', 15)}</span><span>โหมดฐานข้อมูล Cloud: Firebase Auth</span>`;
    if (hint) hint.innerText = "ลงชื่อเข้าใช้ด้วยบัญชีครูที่ได้รับสิทธิ์ใน Firebase Console";
    if (btn) btn.innerText = "เข้าสู่ระบบครูผู้สอน";
    return;
  }

  const storedCred = DataService.TeacherAuth.getLocalCredential();
  if (!storedCred) {
    if (adminWrap) adminWrap.classList.remove("hidden");
    if (adminInp) adminInp.required = true;
    if (banner) banner.innerHTML = `<span class="svg-ico">${getSymbolIcon('shield', 15)}</span><span>ตั้งค่าบัญชีครูผู้สอนครั้งแรก (Local Mode)</span>`;
    if (hint) hint.innerText = "ต้องกรอกรหัสยืนยันสิทธิ์สถาบัน (Admin Setup Code) จากผู้ดูแลระบบเพื่อสร้างบัญชีครูครั้งแรก";
    if (btn) btn.innerText = "สร้างบัญชีครูและเข้าสู่ระบบ";
  } else {
    if (adminWrap) adminWrap.classList.add("hidden");
    if (adminInp) { adminInp.required = false; adminInp.value = ""; }
    if (banner) banner.innerHTML = `<span class="svg-ico">${getSymbolIcon('shield', 15)}</span><span>ยืนยันตัวตนครูผู้สอน (Local Mode)</span>`;
    if (hint) hint.innerHTML = `บัญชีที่ลงทะเบียน: <b>${escapeHTML(storedCred.email)}</b> · <a href="#" onclick="resetLocalTeacherAccount(); return false;" style="color:#6D28D9; font-weight:700;">ตั้งค่าบัญชีครูใหม่</a>`;
    if (btn) btn.innerText = "เข้าสู่ระบบครูผู้สอน";
    if (emailInp && !emailInp.value) emailInp.value = storedCred.email;
    if (nameInp && !nameInp.value) nameInp.value = storedCred.name || "";
  }
}

async function resetLocalTeacherAccount() {
  const modalRes = await showAdminCodeConfirmModal({
    title: "รีเซ็ตบัญชีครูภายในเครื่อง",
    message: "การล้างบัญชีครูต้องกรอกรหัสยืนยันสิทธิ์สถาบัน (Admin Setup Code) เพื่อป้องกันการสวมสิทธิ์จากผู้เรียน",
    inputLabel: "รหัสยืนยันสิทธิ์สถาบัน (Admin Setup Code):",
    confirmText: "ตรวจสอบและรีเซ็ตบัญชีครู",
    danger: true
  });
  if (!modalRes || !modalRes.confirmed) return;

  const isAuthorized = await verifyAdminSetupCode(modalRes.code);
  if (!isAuthorized) {
    playSfx('error');
    showToast("รหัสยืนยันสิทธิ์สถาบันไม่ถูกต้อง — ไม่อนุญาตให้รีเซ็ตบัญชีครู", "error");
    return;
  }

  safeStorage.removeItem(DataService.TeacherAuth.LOCAL_CRED_KEY);
  const keyInp = document.getElementById("loginTeacherKey");
  if (keyInp) keyInp.value = "";
  updateTeacherAuthFormUI();
  playSfx('success');
  showToast("ยืนยันสิทธิ์สำเร็จ — พร้อมตั้งค่าบัญชีครูผู้สอนใหม่แล้ว", "info");
}

async function handleTeacherLogin(e) {
  e.preventDefault();
  showAuthError("");
  const email = (document.getElementById("loginTeacherEmail")?.value || "").trim().toLowerCase();
  const name = (document.getElementById("loginTeacherName")?.value || "").trim();
  const password = (document.getElementById("loginTeacherKey")?.value || "").trim();
  const adminCode = (document.getElementById("loginTeacherAdminCode")?.value || "").trim();
  const submitBtn = document.getElementById("btnTeacherAuthSubmit");

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "กำลังตรวจสอบสิทธิ์...";
  }

  try {
    const authRes = await DataService.TeacherAuth.authenticate({ email, name, password, adminCode });
    if (!authRes.ok) {
      showAuthError(authRes.error || "ไม่สามารถยืนยันตัวตนครูผู้สอนได้");
      return;
    }

    const displayName = authRes.name || name || "ครูผู้สอน";
    const teacherEmail = authRes.email || email;

    currentUser = {
      email: teacherEmail,
      name: displayName,
      year: "ครูผู้สอน",
      role: "teacher",
      isLoggedIn: true,
      avatarDataUrl: DataService.Users.getTeacherAvatar(),
      xp: 999,
      likedShorts: [],
      receivedShorts: [],
      activityHistory: [],
      badges: BADGE_CATALOG.map(b => b.id),
      streak: { count: 1, lastDate: getTodayDateKey() }
    };

    DataService.Users.setTeacherSession(displayName, teacherEmail);
    if (DataService.Cloud.getBackendMode() === 'firebase') {
      await DataService.Cloud.fetchAllUsersToLocalCache();
      await DataService.Cloud.fetchQuestsFromCloud();
    }

    const keyInp = document.getElementById("loginTeacherKey");
    if (keyInp) keyInp.value = "";
    const adminInp = document.getElementById("loginTeacherAdminCode");
    if (adminInp) adminInp.value = "";

    updateTopAccountWidget();
    closeLoginModal();
    await refreshShortsUI();
    if (typeof renderHomeDashboard === 'function') renderHomeDashboard();
    if (typeof renderAccountPage === 'function') renderAccountPage();
    switchNav('teacher');
    launchConfetti();
    showToast(
      authRes.firstSetup
        ? `ตั้งค่าบัญชีครูสำเร็จและเข้าสู่ระบบแล้ว: ${displayName}`
        : `เข้าสู่ระบบครูผู้สอนสำเร็จ: ${displayName}`,
      "success"
    );
  } catch (err) {
    showAuthError(`เกิดข้อผิดพลาดในการเข้าสู่ระบบ: ${err.message || err}`);
  } finally {
    if (submitBtn) submitBtn.disabled = false;
    updateTeacherAuthFormUI();
  }
}

function updateTopAccountWidget() {
  const boxEl = document.getElementById("topRightAccountWidget");
  const nameEl = document.getElementById("widgetUserName");
  const badgeEl = document.getElementById("widgetRoleBadge");
  const avatarEl = document.getElementById("widgetAvatar");
  const navTeacher = document.getElementById("navTeacher");
  const mNavTeacher = document.getElementById("mNavTeacher");
  const btnLogout = document.getElementById("btnLogoutTop");
  const xpEl = document.getElementById("userXpCount");

  // Hero & Shorts teacher-only visibility controls
  const heroSignInBtn = document.getElementById("heroSignInBtn");
  const heroTeacherUploadBtn = document.getElementById("heroTeacherUploadBtn");
  const btnMainUploadShort = document.getElementById("btnMainUploadShort");
  const btnEmptyUploadShort = document.getElementById("btnEmptyUploadShort");

  const isTeacher = (currentUser.role === 'teacher' && currentUser.isLoggedIn);
  const isStudent = (currentUser.role === 'student' && currentUser.isLoggedIn && currentUser.email !== "guest@example.com");

  if (xpEl) xpEl.innerText = (currentUser.xp || 0).toLocaleString();

  if (isTeacher) {
    boxEl.classList.remove("unauthenticated");
    nameEl.innerText = currentUser.name;
    badgeEl.innerText = "ครูผู้สอน";
    badgeEl.className = "account-role-badge badge-teacher";
    avatarEl.className = "account-avatar teacher";
    renderAvatarElement(avatarEl, currentUser, 16);
    navTeacher.classList.remove("hidden");
    if (mNavTeacher) mNavTeacher.classList.remove("hidden");
    btnLogout.classList.remove("hidden");

    if (heroSignInBtn) heroSignInBtn.classList.add("hidden");
    if (heroTeacherUploadBtn) heroTeacherUploadBtn.classList.remove("hidden");
    if (btnMainUploadShort) btnMainUploadShort.classList.remove("hidden");
    if (btnEmptyUploadShort) btnEmptyUploadShort.classList.remove("hidden");
  } else if (isStudent) {
    boxEl.classList.remove("unauthenticated");
    nameEl.innerText = currentUser.name;
    badgeEl.innerText = `${currentUser.year || 'นักเรียน'}`;
    badgeEl.className = "account-role-badge badge-student";
    avatarEl.className = "account-avatar";
    renderAvatarElement(avatarEl, currentUser, 16);
    navTeacher.classList.add("hidden");
    if (mNavTeacher) mNavTeacher.classList.add("hidden");
    btnLogout.classList.remove("hidden");

    if (heroSignInBtn) heroSignInBtn.classList.add("hidden");
    if (heroTeacherUploadBtn) heroTeacherUploadBtn.classList.add("hidden");
    if (btnMainUploadShort) btnMainUploadShort.classList.add("hidden");
    if (btnEmptyUploadShort) btnEmptyUploadShort.classList.add("hidden");
  } else {
    // แสดง "เข้าสู่ระบบ" ที่กล่องมุมขวาบนเมื่อยังไม่ได้เข้าสู่ระบบ
    boxEl.classList.add("unauthenticated");
    nameEl.innerText = "เข้าสู่ระบบ";
    badgeEl.innerText = "บัญชีนักเรียน / ครูผู้สอน";
    badgeEl.className = "account-role-badge badge-student";
    avatarEl.className = "account-avatar";
    renderAvatarElement(avatarEl, currentUser, 16);
    navTeacher.classList.add("hidden");
    if (mNavTeacher) mNavTeacher.classList.add("hidden");
    btnLogout.classList.add("hidden");

    if (heroSignInBtn) heroSignInBtn.classList.remove("hidden");
    if (heroTeacherUploadBtn) heroTeacherUploadBtn.classList.add("hidden");
    if (btnMainUploadShort) btnMainUploadShort.classList.add("hidden");
    if (btnEmptyUploadShort) btnEmptyUploadShort.classList.add("hidden");
  }

  let completedUnits = 0;
  if (currentUser.units) {
    for (let u = 1; u <= 5; u++) {
      if (currentUser.units[u] && currentUser.units[u].postDone) completedUnits++;
    }
  }
  const pct = Math.round((completedUnits / 5) * 100);
  document.getElementById("topProgFill").style.width = `${pct}%`;
  document.getElementById("topProgPercent").innerText = `${pct}%`;
}

// =========================================================
// 3B. SHORTS VIDEO STORAGE (IndexedDB - Supports Many Persistent Clips)
// =========================================================
const ShortsDB = {
  DB_NAME: "c_edu_shorts_db_v1",
  DB_VERSION: 1,
  STORE_META: "shorts_meta",
  STORE_BLOBS: "shorts_blobs",
  _dbPromise: null,

  open() {
    if (this._dbPromise) return this._dbPromise;
    this._dbPromise = new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error("เบราว์เซอร์ไม่รองรับ IndexedDB สำหรับจัดเก็บวิดีโอ"));
        return;
      }
      const req = indexedDB.open(this.DB_NAME, this.DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.STORE_META)) {
          const metaStore = db.createObjectStore(this.STORE_META, { keyPath: "id" });
          metaStore.createIndex("createdAt", "createdAt", { unique: false });
          metaStore.createIndex("unitId", "unitId", { unique: false });
        }
        if (!db.objectStoreNames.contains(this.STORE_BLOBS)) {
          db.createObjectStore(this.STORE_BLOBS, { keyPath: "id" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return this._dbPromise;
  },

  async getAllMeta() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.STORE_META, "readonly");
      const store = tx.objectStore(this.STORE_META);
      const req = store.getAll();
      req.onsuccess = () => {
        const list = (req.result || [])
          .map(s => ({
            ...s,
            comments: Array.isArray(s.comments) ? s.comments : [],
            shares: Number(s.shares || 0)
          }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        resolve(list);
      };
      req.onerror = () => reject(req.error);
    });
  },

  async getVideoBlob(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.STORE_BLOBS, "readonly");
      const req = tx.objectStore(this.STORE_BLOBS).get(id);
      req.onsuccess = () => resolve(req.result ? req.result.videoBlob : null);
      req.onerror = () => reject(req.error);
    });
  },

  async saveShort(meta, videoBlob) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([this.STORE_META, this.STORE_BLOBS], "readwrite");
      tx.objectStore(this.STORE_META).put(meta);
      tx.objectStore(this.STORE_BLOBS).put({ id: meta.id, videoBlob: videoBlob });
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => {
        const err = tx.error;
        if (err && (err.name === "QuotaExceededError" || /quota/i.test(err.message || ""))) {
          reject(new Error("พื้นที่จัดเก็บของเบราว์เซอร์เต็ม (QuotaExceededError) กรุณาลบคลิปเก่าบางส่วนออกก่อน"));
        } else {
          reject(err || new Error("ไม่สามารถบันทึกวิดีโอลงพื้นที่จัดเก็บได้"));
        }
      };
      tx.onabort = () => {
        const err = tx.error;
        if (err && (err.name === "QuotaExceededError" || /quota/i.test(err.message || ""))) {
          reject(new Error("พื้นที่จัดเก็บของเบราว์เซอร์เต็ม (QuotaExceededError) กรุณาลบคลิปเก่าบางส่วนออกก่อน"));
        } else {
          reject(err || new Error("ไม่สามารถบันทึกวิดีโอลงพื้นที่จัดเก็บได้"));
        }
      };
    });
  },

  async upsertMeta(meta) {
    if (!meta || !meta.id) return false;
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.STORE_META, "readwrite");
      tx.objectStore(this.STORE_META).put(meta);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  },

  async updateMeta(id, patchFn) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(this.STORE_META, "readwrite");
      const store = tx.objectStore(this.STORE_META);
      const getReq = store.get(id);
      getReq.onsuccess = () => {
        const item = getReq.result;
        if (!item) { resolve(null); return; }
        const updated = patchFn({ ...item });
        store.put(updated);
        tx.oncomplete = () => resolve(updated);
      };
      getReq.onerror = () => reject(getReq.error);
    });
  },

  async deleteShort(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([this.STORE_META, this.STORE_BLOBS], "readwrite");
      tx.objectStore(this.STORE_META).delete(id);
      tx.objectStore(this.STORE_BLOBS).delete(id);
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  }
};

let shortsSyncChannel = null;
try {
  if ('BroadcastChannel' in window) {
    shortsSyncChannel = new BroadcastChannel('c_edu_shorts_sync_v1');
    shortsSyncChannel.onmessage = (ev) => {
      if (ev.data && ev.data.type === 'SHORTS_UPDATED') {
        refreshShortsUI();
      }
    };
  }
} catch (e) {}

function notifyShortsUpdated() {
  if (shortsSyncChannel) {
    try { shortsSyncChannel.postMessage({ type: 'SHORTS_UPDATED' }); } catch (e) {}
  }
}

// =========================================================
// 3C. SHORTS UPLOAD, 60s & 480p ENFORCEMENT, AND PLAYBACK
// =========================================================
let cachedShortsMeta = [];
let activeShortsList = [];
let currentPlayingShortIdx = -1;
let currentPlayingBlobUrl = null;
let openContextMenuEl = null;

// Upload State
let pendingShortState = {
  file: null,
  inspectVideoUrl: null,
  durationSec: 0,
  origWidth: 0,
  origHeight: 0,
  targetWidth: 0,
  targetHeight: 0,
  needsDownscale: false,
  isValidDuration: false,
  isTranscoding: false,
  cancelRequested: false
};

function formatShortViewsThai(count) {
  const n = Number(count || 0);
  if (n >= 1000000) return `การดู ${(n / 1000000).toFixed(1).replace(/\.0$/, '')} ล้าน ครั้ง`;
  if (n >= 10000) return `การดู ${(n / 10000).toFixed(1).replace(/\.0$/, '')} หมื่น ครั้ง`;
  if (n >= 1000) return `การดู ${(n / 1000).toFixed(1).replace(/\.0$/, '')} พัน ครั้ง`;
  return `การดู ${n.toLocaleString()} ครั้ง`;
}

function formatDurationMMSS(sec) {
  const s = Math.max(0, Math.round(sec || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r < 10 ? '0' + r : r}`;
}

function formatBytesReadable(bytes) {
  if (!bytes) return "0 B";
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function getUnitLabelShort(unitId) {
  if (!unitId || unitId === 'all') return "ทั่วไป";
  return `หน่วยที่ ${unitId}`;
}

function isShortTeacherAuthenticated() {
  return Boolean(currentUser && currentUser.role === 'teacher' && currentUser.isLoggedIn);
}

function openShortUploadModal() {
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่สามารถอัปโหลดคลิปสั้นได้", "error");
    return;
  }
  resetShortUploadModalState();
  document.getElementById("shortUploadModal").classList.remove("hidden");
}

function closeShortUploadModal() {
  if (pendingShortState.isTranscoding) {
    pendingShortState.cancelRequested = true;
  }
  resetShortUploadModalState();
  document.getElementById("shortUploadModal").classList.add("hidden");
}

function releaseVideoElement(v) {
  if (!v) return;
  try { v.pause(); } catch (e) {}
  try { v.removeAttribute("src"); } catch (e) {}
  try { v.srcObject = null; } catch (e) {}
  try { v.load(); } catch (e) {}
}

function releaseCanvasMemory(c) {
  if (!c) return;
  try {
    const ctx = c.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, c.width, c.height);
    c.width = 0;
    c.height = 0;
  } catch (e) {}
}

function resetShortUploadModalState() {
  if (pendingShortState.inspectVideoUrl) {
    URL.revokeObjectURL(pendingShortState.inspectVideoUrl);
  }
  pendingShortState = {
    file: null,
    inspectVideoUrl: null,
    durationSec: 0,
    origWidth: 0,
    origHeight: 0,
    targetWidth: 0,
    targetHeight: 0,
    needsDownscale: false,
    isValidDuration: false,
    isTranscoding: false,
    cancelRequested: false
  };
  const fileInp = document.getElementById("shortFileInput");
  if (fileInp) fileInp.value = "";
  document.getElementById("shortTitleInput").value = "";
  document.getElementById("shortUnitInput").value = "all";
  document.getElementById("shortInspectionBox").classList.add("hidden");
  document.getElementById("shortThumbScrubWrap").classList.add("hidden");
  document.getElementById("shortUploadProgressWrap").classList.add("hidden");
  document.getElementById("shortProgressBar").style.width = "0%";
  document.getElementById("shortProgressPct").innerText = "0%";
  releaseCanvasMemory(document.getElementById("shortThumbPreviewCanvas"));
  const submitBtn = document.getElementById("btnSubmitUploadShort");
  submitBtn.disabled = true;
  submitBtn.innerText = "เผยแพร่คลิปสั้น";
}

async function handleShortFilePicked(file) {
  if (!file) return;
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่สามารถลงคลิปได้", "error");
    return;
  }
  if (!file.type.startsWith("video/")) {
    showToast("กรุณาเลือกไฟล์วิดีโอเท่านั้น (MP4, WebM, MOV)", "error");
    return;
  }

  // Check IndexedDB / browser storage quota before allocating frames
  const storageEst = await DataService.Shorts.estimateStorage();
  if (storageEst.supported && storageEst.remaining < file.size * 1.15) {
    showToast(`พื้นที่จัดเก็บคงเหลือ (${formatBytesReadable(storageEst.remaining)}) ไม่เพียงพอสำหรับไฟล์ขนาด ${formatBytesReadable(file.size)}`, "error");
    return;
  }

  if (pendingShortState.inspectVideoUrl) {
    URL.revokeObjectURL(pendingShortState.inspectVideoUrl);
  }

  const url = URL.createObjectURL(file);
  pendingShortState.file = file;
  pendingShortState.inspectVideoUrl = url;

  document.getElementById("shortInspectionBox").classList.remove("hidden");
  document.getElementById("shortFileNameText").innerText = `${file.name} (${formatBytesReadable(file.size)})`;
  document.getElementById("shortDurationBadge").innerHTML = `${getSymbolIcon('clock', 14)} <span>กำลังตรวจสอบความยาววิดีโอ...</span>`;
  document.getElementById("shortResolutionBadge").innerHTML = `${getSymbolIcon('clock', 14)} <span>กำลังตรวจสอบความละเอียด...</span>`;
  document.getElementById("btnSubmitUploadShort").disabled = true;

  if (!document.getElementById("shortTitleInput").value.trim()) {
    const cleanTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ");
    document.getElementById("shortTitleInput").value = cleanTitle.slice(0, 80);
  }

  const probeVid = document.createElement("video");
  probeVid.preload = "auto";
  probeVid.muted = true;
  probeVid.playsInline = true;
  probeVid.src = url;

  try {
    await new Promise((resolve, reject) => {
      probeVid.onloadedmetadata = async () => {
        if (!isFinite(probeVid.duration) || probeVid.duration === 0) {
          probeVid.currentTime = 1e9;
          await new Promise(r => {
            probeVid.ontimeupdate = () => { probeVid.ontimeupdate = null; r(); };
            setTimeout(r, 800);
          });
          probeVid.currentTime = 0;
        }
        resolve();
      };
      probeVid.onerror = () => reject(new Error("ไม่สามารถอ่านไฟล์วิดีโอนี้ได้"));
    });
  } catch (err) {
    releaseVideoElement(probeVid);
    showToast(err.message || "ไฟล์วิดีโอไม่ถูกต้อง", "error");
    resetShortUploadModalState();
    return;
  }

  const dur = probeVid.duration;
  const w = probeVid.videoWidth || 480;
  const h = probeVid.videoHeight || 854;
  pendingShortState.durationSec = dur;
  pendingShortState.origWidth = w;
  pendingShortState.origHeight = h;

  // 1. Strict 60 seconds limit check
  const isDurValid = isFinite(dur) && dur > 0 && dur <= 60.05;
  pendingShortState.isValidDuration = isDurValid;

  const durEl = document.getElementById("shortDurationBadge");
  if (isDurValid) {
    durEl.innerHTML = `<span style="color:#059669; font-weight:700; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('checkCircle', 14)} ความยาว: ${dur.toFixed(1)} วินาที (ไม่เกิน 60 วินาที)</span>`;
  } else {
    durEl.innerHTML = `<span style="color:#DC2626; font-weight:700; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('xCircle', 14)} ความยาว ${dur.toFixed(1)} วินาที — เกินขีดจำกัดสูงสุด 60 วินาที ต่อ 1 คลิป!</span>`;
  }

  // 2. Max 480p resolution check & auto-downscale sizing
  const shortSide = Math.min(w, h);
  const longSide = Math.max(w, h);
  const needsDownscale = (shortSide > 480 || longSide > 854);
  pendingShortState.needsDownscale = needsDownscale;

  if (needsDownscale) {
    const scale = (h >= w)
      ? Math.min(480 / w, 854 / h)
      : Math.min(854 / w, 480 / h);
    pendingShortState.targetWidth = Math.max(2, Math.floor((w * scale) / 2) * 2);
    pendingShortState.targetHeight = Math.max(2, Math.floor((h * scale) / 2) * 2);
  } else {
    pendingShortState.targetWidth = w;
    pendingShortState.targetHeight = h;
  }

  const resEl = document.getElementById("shortResolutionBadge");
  const submitBtn = document.getElementById("btnSubmitUploadShort");
  if (!needsDownscale) {
    resEl.innerHTML = `<span style="color:#059669; font-weight:700; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('checkCircle', 14)} คุณภาพ: ${w}×${h} (ผ่านเกณฑ์สูงสุด 480p)</span>`;
    submitBtn.innerText = "เผยแพร่คลิปสั้น";
  } else {
    resEl.innerHTML = `<span style="color:#D97706; font-weight:700; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('refreshCw', 14)} ต้นฉบับ ${w}×${h} สูงกว่า 480p — ระบบจะลดขนาดเป็น ${pendingShortState.targetWidth}×${pendingShortState.targetHeight} (480p) อัตโนมัติ</span>`;
    submitBtn.innerText = "แปลงเป็น 480p และเผยแพร่";
  }

  // 3. Generate initial thumbnail frame (strict <= 240px max dimension)
  const scrubWrap = document.getElementById("shortThumbScrubWrap");
  const scrubInp = document.getElementById("shortThumbScrubber");
  const initSec = Math.min(0.5, Math.max(0, dur * 0.2));
  scrubInp.max = Math.max(0.1, (dur - 0.05).toFixed(1));
  scrubInp.value = initSec.toFixed(1);
  document.getElementById("shortThumbSecVal").innerText = initSec.toFixed(1);
  scrubWrap.classList.remove("hidden");
  await drawThumbnailFrame(probeVid, initSec);
  releaseVideoElement(probeVid);

  submitBtn.disabled = !isDurValid;
  if (!isDurValid) {
    playSfx('error');
    showToast("คลิปยาวเกิน 60 วินาที กรุณาเลือกคลิปที่ไม่เกิน 60 วินาที", "error");
  }
}

async function updateShortThumbFromTime(secStr) {
  const sec = parseFloat(secStr) || 0;
  document.getElementById("shortThumbSecVal").innerText = sec.toFixed(1);
  if (!pendingShortState.inspectVideoUrl) return;
  const v = document.createElement("video");
  v.muted = true;
  v.playsInline = true;
  v.preload = "auto";
  v.src = pendingShortState.inspectVideoUrl;
  await new Promise(r => {
    v.onloadeddata = r;
    setTimeout(r, 800);
  });
  await drawThumbnailFrame(v, sec);
  releaseVideoElement(v);
}

function drawThumbnailFrame(videoEl, sec) {
  return new Promise((resolve) => {
    const canvas = document.getElementById("shortThumbPreviewCanvas");
    if (!canvas) { resolve(); return; }
    const w = videoEl.videoWidth || 480;
    const h = videoEl.videoHeight || 854;
    // Strict <= 240px max dimension to minimize RAM and IndexedDB bloat
    const thumbMaxDim = 240;
    const scale = Math.min(1, thumbMaxDim / Math.max(w, h));
    canvas.width = Math.max(96, Math.min(240, Math.round(w * scale)));
    canvas.height = Math.max(96, Math.min(240, Math.round(h * scale)));

    const targetTime = Math.min(sec, Math.max(0, (videoEl.duration || 1) - 0.05));
    let done = false;
    const finishDraw = () => {
      if (done) return;
      done = true;
      videoEl.removeEventListener("seeked", finishDraw);
      try {
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      } catch (e) {}
      resolve();
    };

    if (Math.abs((videoEl.currentTime || 0) - targetTime) < 0.02 && videoEl.readyState >= 2) {
      finishDraw();
      return;
    }

    videoEl.addEventListener("seeked", finishDraw);
    setTimeout(finishDraw, 700);
    try {
      videoEl.currentTime = targetTime;
    } catch (e) {
      finishDraw();
    }
  });
}

function transcodeVideoTo480p(file, targetW, targetH, durationSec, onProgress) {
  return new Promise(async (resolve, reject) => {
    if (typeof MediaRecorder === 'undefined') {
      reject(new Error("เบราว์เซอร์นี้ไม่รองรับการแปลงความละเอียดอัตโนมัติ กรุณาเลือกไฟล์ความละเอียดไม่เกิน 480p โดยตรง"));
      return;
    }

    const vid = document.createElement("video");
    const objUrl = URL.createObjectURL(file);
    vid.src = objUrl;
    vid.playsInline = true;
    vid.preload = "auto";

    const canvas = document.createElement("canvas");
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext("2d");

    let audioCtx = null;
    let combinedStream = null;
    let animId = null;

    const cleanupResources = () => {
      if (animId) cancelAnimationFrame(animId);
      if (combinedStream) {
        combinedStream.getTracks().forEach(t => { try { t.stop(); } catch (e) {} });
      }
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {});
      }
      releaseVideoElement(vid);
      releaseCanvasMemory(canvas);
      URL.revokeObjectURL(objUrl);
    };

    try {
      await new Promise((res, rej) => {
        vid.onloadeddata = res;
        vid.onerror = () => rej(new Error("ไม่สามารถโหลดวิดีโอเพื่อลดขนาดเป็น 480p ได้"));
      });

      const videoStream = canvas.captureStream(24);
      combinedStream = new MediaStream([...videoStream.getVideoTracks()]);

      // Route audio silently through AudioContext -> MediaStreamDestination
      try {
        const AudioCtxCls = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxCls) {
          audioCtx = new AudioCtxCls();
          if (audioCtx.state === 'suspended') {
            await audioCtx.resume();
          }
          const srcNode = audioCtx.createMediaElementSource(vid);
          const destNode = audioCtx.createMediaStreamDestination();
          srcNode.connect(destNode);
          destNode.stream.getAudioTracks().forEach(t => combinedStream.addTrack(t));
        }
      } catch (audioErr) {
        // Video-only fallback
      }

      const mimeCandidates = [
        "video/webm;codecs=vp9,opus",
        "video/webm;codecs=vp8,opus",
        "video/webm",
        "video/mp4"
      ];
      const chosenMime = mimeCandidates.find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m));
      const recorderOpts = chosenMime
        ? { mimeType: chosenMime, videoBitsPerSecond: 900000 }
        : { videoBitsPerSecond: 900000 };

      const recorder = new MediaRecorder(combinedStream, recorderOpts);
      const chunks = [];
      recorder.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) chunks.push(ev.data);
      };

      recorder.onstop = () => {
        cleanupResources();
        if (pendingShortState.cancelRequested) {
          reject(new Error("ยกเลิกการอัปโหลดแล้ว"));
          return;
        }
        const outBlob = new Blob(chunks, { type: chosenMime || "video/webm" });
        resolve(outBlob);
      };

      recorder.onerror = () => {
        cleanupResources();
        reject(new Error("เกิดข้อผิดพลาดระหว่างบีบอัดวิดีโอเป็น 480p"));
      };

      const drawStep = () => {
        if (pendingShortState.cancelRequested) {
          vid.pause();
          if (recorder.state !== 'inactive') recorder.stop();
          return;
        }
        ctx.drawImage(vid, 0, 0, targetW, targetH);
        const pct = Math.min(99, Math.round((vid.currentTime / Math.max(0.1, durationSec)) * 100));
        if (onProgress) onProgress(pct);

        if (!vid.paused && !vid.ended) {
          animId = requestAnimationFrame(drawStep);
        }
      };

      vid.onended = () => {
        ctx.drawImage(vid, 0, 0, targetW, targetH);
        if (onProgress) onProgress(100);
        if (recorder.state !== 'inactive') recorder.stop();
      };

      recorder.start(250);
      try {
        await vid.play();
      } catch (playErr) {
        vid.muted = true;
        await vid.play();
      }
      drawStep();
    } catch (err) {
      cleanupResources();
      reject(err);
    }
  });
}

async function handleShortUploadSubmit(e) {
  e.preventDefault();
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่สามารถอัปโหลดคลิปได้", "error");
    return;
  }
  if (!pendingShortState.file || !pendingShortState.isValidDuration) {
    showToast("กรุณาเลือกคลิปวิดีโอความยาวไม่เกิน 60 วินาที", "error");
    return;
  }

  const title = document.getElementById("shortTitleInput").value.trim();
  const unitId = document.getElementById("shortUnitInput").value;
  if (!title) {
    showToast("กรุณากรอกชื่อหัวข้อคลิปสั้น", "warning");
    return;
  }

  const submitBtn = document.getElementById("btnSubmitUploadShort");
  const progWrap = document.getElementById("shortUploadProgressWrap");
  const progBar = document.getElementById("shortProgressBar");
  const progPct = document.getElementById("shortProgressPct");
  const progLabel = document.getElementById("shortProgressLabel");

  submitBtn.disabled = true;
  pendingShortState.isTranscoding = true;
  pendingShortState.cancelRequested = false;

  try {
    const thumbCanvas = document.getElementById("shortThumbPreviewCanvas");
    // Guarantee <= 240px max thumbnail output
    let thumbDataUrl = "";
    if (thumbCanvas && thumbCanvas.width > 0 && thumbCanvas.height > 0) {
      thumbDataUrl = thumbCanvas.toDataURL("image/jpeg", 0.72);
    }

    let finalBlob = pendingShortState.file;
    if (pendingShortState.needsDownscale) {
      progWrap.classList.remove("hidden");
      progLabel.innerText = `กำลังแปลงเป็น ${pendingShortState.targetWidth}×${pendingShortState.targetHeight} (480p)...`;
      finalBlob = await transcodeVideoTo480p(
        pendingShortState.file,
        pendingShortState.targetWidth,
        pendingShortState.targetHeight,
        pendingShortState.durationSec,
        (pct) => {
          progBar.style.width = `${pct}%`;
          progPct.innerText = `${pct}%`;
        }
      );
    }

    const estAfter = await DataService.Shorts.estimateStorage();
    if (estAfter.supported && estAfter.remaining < finalBlob.size * 1.1) {
      throw new Error(`พื้นที่จัดเก็บเบราว์เซอร์ไม่เพียงพอ (เหลือ ${formatBytesReadable(estAfter.remaining)})`);
    }

    progWrap.classList.remove("hidden");
    progLabel.innerText = "กำลังบันทึกลงคลังข้อมูลถาวร...";
    progBar.style.width = "100%";
    progPct.innerText = "100%";

    const meta = {
      id: "short_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
      title: title,
      unitId: unitId,
      durationSec: Math.round(pendingShortState.durationSec * 10) / 10,
      width: pendingShortState.targetWidth,
      height: pendingShortState.targetHeight,
      qualityLabel: "480p",
      fileSizeBytes: finalBlob.size,
      mimeType: finalBlob.type || "video/webm",
      views: 0,
      likes: 0,
      likedBy: [],
      comments: [],
      shares: 0,
      createdAt: Date.now(),
      uploaderName: currentUser.name,
      uploaderEmail: currentUser.email,
      thumbDataUrl: thumbDataUrl
    };

    await DataService.Shorts.saveShort(meta, finalBlob);
    pendingShortState.isTranscoding = false;
    notifyShortsUpdated();
    await refreshShortsUI();
    closeShortUploadModal();
    launchConfetti();
    showToast("เผยแพร่คลิปสั้นขึ้นหน้าหลักเรียบร้อยแล้ว!", "success");
  } catch (err) {
    pendingShortState.isTranscoding = false;
    submitBtn.disabled = false;
    progWrap.classList.add("hidden");
    showToast(err.message || "เกิดข้อผิดพลาดในการอัปโหลดคลิปสั้น", "error");
  }
}

const SHORTS_PAGE_SIZE = 10;
let shortsShelfLimit = SHORTS_PAGE_SIZE;
let allShortsLimit = SHORTS_PAGE_SIZE;
let teacherShortsLimit = SHORTS_PAGE_SIZE;

async function refreshShortsUI() {
  try {
    cachedShortsMeta = await DataService.Shorts.listMeta();
  } catch (e) {
    cachedShortsMeta = [];
  }
  renderMainShortsShelf();
  renderTeacherShortsManager();
  if (!document.getElementById("shortAllModal").classList.contains("hidden")) {
    renderAllShortsGrid();
  }
  if (!document.getElementById("accountSection").classList.contains("hidden") && typeof renderAccountLikedShorts === 'function') {
    renderAccountLikedShorts();
  }
}

function applyShortsFilter() {
  shortsShelfLimit = SHORTS_PAGE_SIZE;
  renderMainShortsShelf();
}

function loadMoreShortsShelf() {
  shortsShelfLimit += SHORTS_PAGE_SIZE;
  renderMainShortsShelf();
}

function renderMainShortsShelf() {
  const emptyEl = document.getElementById("shortsEmptyState");
  const carouselEl = document.getElementById("shortsCarouselWrapper");
  const trackEl = document.getElementById("shortsShelfTrack");
  const filterEl = document.getElementById("shortsUnitFilter");
  const countPill = document.getElementById("shortsCountPill");

  if (!trackEl || !emptyEl || !carouselEl) return;

  const totalCount = cachedShortsMeta.length;
  if (countPill) countPill.innerText = `${totalCount} คลิป`;

  // ถ้ายังไม่มีคนลงคลิป -> โชว์ว่า "ยังไม่มีรายการ"
  if (totalCount === 0) {
    emptyEl.classList.remove("hidden");
    carouselEl.classList.add("hidden");
    if (filterEl) filterEl.classList.add("hidden");
    return;
  }

  emptyEl.classList.add("hidden");
  carouselEl.classList.remove("hidden");
  if (filterEl) filterEl.classList.remove("hidden");

  const selectedUnit = filterEl ? filterEl.value : "all";
  const filtered = (selectedUnit === "all")
    ? cachedShortsMeta
    : cachedShortsMeta.filter(s => String(s.unitId) === String(selectedUnit));

  activeShortsList = filtered;

  if (filtered.length === 0) {
    trackEl.innerHTML = `<div style="padding:28px; color:#A1A1AA; font-size:0.9rem; width:100%; text-align:center;">ยังไม่มีรายการคลิปสั้นในหมวดหมู่นี้</div>`;
    return;
  }

  const visibleList = filtered.slice(0, shortsShelfLimit);
  const remainingCount = filtered.length - visibleList.length;
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  let html = visibleList.map((item) => {
    const isNew = (now - (item.createdAt || 0)) < sevenDaysMs;
    const unitLabel = item.unitId && item.unitId !== 'all' ? `<span class="short-unit-chip">${getUnitLabelShort(item.unitId)}</span>` : '';
    return `
      <div class="short-card" onclick="openShortPlayer('${item.id}')">
        <div class="short-thumb-wrap">
          <img class="short-thumb-img" src="${item.thumbDataUrl || ''}" alt="${escapeHtml(item.title)}" loading="lazy">
          ${isNew ? '<span class="short-new-pill">ใหม่</span>' : ''}
          <span class="short-dur-pill">${formatDurationMMSS(item.durationSec)}</span>
          <div class="short-hover-play">
            <div class="short-play-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>
            </div>
          </div>
        </div>
        <div class="short-meta-footer">
          <div class="short-title-text" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</div>
          <button class="short-menu-btn" onclick="openShortContextMenu(event, '${item.id}')" title="ตัวเลือกเพิ่มเติม">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
          </button>
        </div>
        <div class="short-views-row">
          <span>${formatShortViewsThai(item.views)}</span>
          ${unitLabel}
        </div>
      </div>
    `;
  }).join("");

  if (remainingCount > 0) {
    const nextBatch = Math.min(SHORTS_PAGE_SIZE, remainingCount);
    html += `
      <button type="button" class="shorts-load-more-card" onclick="loadMoreShortsShelf()">
        <span class="svg-ico">${getSymbolIcon('plusCircle', 26)}</span>
        <span>โหลดเพิ่มอีก ${nextBatch} คลิป</span>
        <span style="font-size:0.74rem; color:#A1A1AA; font-weight:600;">เหลืออีก ${remainingCount} คลิป</span>
      </button>
    `;
  }

  trackEl.innerHTML = html;
}

function scrollShortsTrack(direction) {
  const track = document.getElementById("shortsShelfTrack");
  if (!track) return;
  const amount = Math.max(320, track.clientWidth * 0.72);
  track.scrollBy({ left: direction * amount, behavior: 'smooth' });
}

function closeShortContextMenu() {
  if (openContextMenuEl) {
    openContextMenuEl.remove();
    openContextMenuEl = null;
  }
}

document.addEventListener("click", (e) => {
  if (openContextMenuEl && !openContextMenuEl.contains(e.target) && !e.target.closest(".short-menu-btn") && !e.target.closest("#btnShortsShelfMenu")) {
    closeShortContextMenu();
  }
});

function openShortContextMenu(ev, shortId) {
  ev.stopPropagation();
  closeShortContextMenu();

  const item = cachedShortsMeta.find(s => s.id === shortId);
  if (!item) return;

  const menu = document.createElement("div");
  menu.className = "short-context-menu";
  const isTeacher = isShortTeacherAuthenticated();

  let html = `
    <button class="short-ctx-item" onclick="closeShortContextMenu(); openShortPlayer('${shortId}')">
      ${getSymbolIcon('play', 15)} เปิดเล่นคลิปนี้
    </button>
    <button class="short-ctx-item" onclick="closeShortContextMenu(); shareShortClip('${shortId}')">
      ${getSymbolIcon('share2', 15)} แชร์ลิงก์คลิปนี้ (${item.shares || 0})
    </button>
  `;

  if (isTeacher) {
    html += `
      <button class="short-ctx-item" onclick="closeShortContextMenu(); openShortEditModal('${shortId}')">
        ${getSymbolIcon('edit2', 15)} แก้ไขชื่อ / หมวดหน่วย
      </button>
      <button class="short-ctx-item danger" onclick="closeShortContextMenu(); deleteShortClip('${shortId}')">
        ${getSymbolIcon('trash', 15)} ลบคลิปสั้นถาวร
      </button>
    `;
  } else {
    html += `
      <div style="padding:7px 12px; font-size:0.74rem; color:#A1A1AA; border-top:1px solid #3F3F46; margin-top:4px; line-height:1.5;">
        <div>${getSymbolIcon('clock', 12)} ${formatDurationMMSS(item.durationSec)} · ${item.width}×${item.height} (480p)</div>
        <div>${getSymbolIcon('user', 12)} โดย ${escapeHtml(item.uploaderName || 'ครูผู้สอน')}</div>
      </div>
    `;
  }

  menu.innerHTML = html;
  document.body.appendChild(menu);
  openContextMenuEl = menu;

  const rect = ev.currentTarget.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  let left = rect.right - menuRect.width;
  if (left < 12) left = 12;
  let top = rect.bottom + 6;
  if (top + menuRect.height > window.innerHeight - 12) {
    top = Math.max(12, rect.top - menuRect.height - 6);
  }
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
}

function openShortsShelfOptionsMenu(ev) {
  ev.stopPropagation();
  closeShortContextMenu();

  const menu = document.createElement("div");
  menu.className = "short-context-menu";
  const isTeacher = isShortTeacherAuthenticated();

  let html = `
    <button class="short-ctx-item" onclick="closeShortContextMenu(); openAllShortsModal()">
      ${getSymbolIcon('film', 15)} ดูคลิปสั้นทั้งหมด (${cachedShortsMeta.length} คลิป)
    </button>
    <button class="short-ctx-item" onclick="closeShortContextMenu(); refreshShortsUI(); showToast('รีเฟรชรายการคลิปแล้ว', 'info')">
      ${getSymbolIcon('refreshCw', 15)} รีเฟรชรายการ
    </button>
  `;

  if (isTeacher) {
    html += `
      <button class="short-ctx-item" onclick="closeShortContextMenu(); openShortUploadModal()" style="color:#FCA5A5;">
        ${getSymbolIcon('plusCircle', 15)} อัปโหลดคลิปสั้นใหม่ (ครู)
      </button>
      <button class="short-ctx-item" onclick="closeShortContextMenu(); switchNav('teacher')">
        ${getSymbolIcon('settings', 15)} จัดการคลังคลิปในแผงควบคุมครู
      </button>
    `;
  }

  menu.innerHTML = html;
  document.body.appendChild(menu);
  openContextMenuEl = menu;

  const rect = ev.currentTarget.getBoundingClientRect();
  const menuRect = menu.getBoundingClientRect();
  let left = rect.right - menuRect.width;
  if (left < 12) left = 12;
  menu.style.left = `${left}px`;
  menu.style.top = `${rect.bottom + 6}px`;
}

function openShortEditModal(shortId) {
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่แก้ไขข้อมูลคลิปได้", "error");
    return;
  }
  const item = cachedShortsMeta.find(s => s.id === shortId);
  if (!item) return;
  document.getElementById("editShortId").value = item.id;
  document.getElementById("editShortTitle").value = item.title;
  document.getElementById("editShortUnit").value = item.unitId || "all";
  document.getElementById("shortEditModal").classList.remove("hidden");
}

function closeShortEditModal() {
  document.getElementById("shortEditModal").classList.add("hidden");
}

async function handleShortEditSubmit(e) {
  e.preventDefault();
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่แก้ไขคลิปได้", "error");
    return;
  }
  const id = document.getElementById("editShortId").value;
  const newTitle = document.getElementById("editShortTitle").value.trim();
  const newUnit = document.getElementById("editShortUnit").value;
  if (!newTitle) return;

  await DataService.Shorts.updateMeta(id, (item) => ({ ...item, title: newTitle, unitId: newUnit }));
  notifyShortsUpdated();
  await refreshShortsUI();
  closeShortEditModal();
  showToast("แก้ไขข้อมูลคลิปสั้นเรียบร้อยแล้ว", "success");
}

async function deleteShortClip(shortId) {
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่สามารถลบคลิปสั้นได้", "error");
    return;
  }
  const item = cachedShortsMeta.find(s => s.id === shortId);
  const ok = await showConfirmModal({
    title: "ยืนยันการลบคลิปสั้น",
    message: `ต้องการลบคลิป "${item ? item.title : ''}" ออกจากระบบถาวรหรือไม่? (คลิปจะหายไปจากหน้าหลักและคลังคลิป)`,
    confirmText: "ลบคลิปถาวร",
    danger: true
  });
  if (!ok) return;

  await DataService.Shorts.deleteShort(shortId);
  notifyShortsUpdated();
  await refreshShortsUI();
  showToast("ลบคลิปสั้นเรียบร้อยแล้ว", "info");
}

async function openShortPlayer(shortId) {
  if (!cachedShortsMeta.length) {
    try { cachedShortsMeta = await DataService.Shorts.listMeta(); } catch (e) {}
  }
  let list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  let idx = list.findIndex(s => s.id === shortId);
  if (idx === -1) {
    list = cachedShortsMeta;
    idx = list.findIndex(s => s.id === shortId);
    if (idx === -1) return;
    activeShortsList = list;
  }

  currentPlayingShortIdx = idx;
  document.getElementById("shortPlayerModal").classList.remove("hidden");
  await loadShortIntoPlayer(list[idx]);
}

async function loadShortIntoPlayer(item) {
  if (!item) return;
  const videoEl = document.getElementById("shortsVideoElement");
  if (currentPlayingBlobUrl) {
    URL.revokeObjectURL(currentPlayingBlobUrl);
    currentPlayingBlobUrl = null;
  }

  let srcUrl = null;
  try {
    const blob = await DataService.Shorts.getVideoBlob(item.id);
    if (blob) {
      currentPlayingBlobUrl = URL.createObjectURL(blob);
      srcUrl = currentPlayingBlobUrl;
    } else if (isSafeCloudVideoUrl(item.cloudUrl)) {
      srcUrl = item.cloudUrl.trim();
    }
  } catch (err) {
    if (isSafeCloudVideoUrl(item.cloudUrl)) {
      srcUrl = item.cloudUrl.trim();
    }
  }

  if (!srcUrl) {
    showToast("ไม่พบไฟล์วิดีโอนี้ในคลังจัดเก็บหรือ Cloud", "error");
    closeShortPlayer();
    return;
  }

  videoEl.onerror = () => {
    showToast("ไม่สามารถโหลดวิดีโอจาก Cloud หรือคลังจัดเก็บได้ในขณะนี้", "warning");
  };
  videoEl.src = srcUrl;
  videoEl.load();
  videoEl.play().catch(() => {});

  // Track daily quest watch Short (max once per shortId per day)
  trackDailyQuestProgress('watchShort', item.id);

  // Increment view count
  const updated = await DataService.Shorts.updateMeta(item.id, (cur) => ({
    ...cur,
    views: (cur.views || 0) + 1
  }));
  const latestItem = updated || item;
  notifyShortsUpdated();
  refreshShortsUI();

  // Update Player UI
  document.getElementById("playerQualityBadge").innerText = `${latestItem.width}×${latestItem.height} (${latestItem.qualityLabel || '480p'})`;
  document.getElementById("playerShortUnitTag").innerText = getUnitLabelShort(latestItem.unitId);
  document.getElementById("playerShortTitle").innerText = latestItem.title;
  document.getElementById("playerShortMeta").innerText = `โดย ${latestItem.uploaderName || 'ครูผู้สอน'} · ${formatShortViewsThai(latestItem.views)} · ${formatDurationMMSS(latestItem.durationSec)}`;

  const userKey = currentUser.isLoggedIn ? currentUser.email.toLowerCase() : "guest";
  const userLikesArr = Array.isArray(currentUser.likedShorts) ? currentUser.likedShorts : [];
  const isLiked = (Array.isArray(latestItem.likedBy) && latestItem.likedBy.includes(userKey))
    || (currentUser.isLoggedIn && userLikesArr.includes(latestItem.id));
  const likeIconEl = document.getElementById("shortLikeIcon");
  if (likeIconEl) likeIconEl.innerHTML = getSymbolIcon(isLiked ? 'heartFilled' : 'heart', 20);
  document.getElementById("btnShortLike").classList.toggle("liked", isLiked);
  document.getElementById("shortLikeCount").innerText = (latestItem.likes || 0).toLocaleString();

  const commentsArr = Array.isArray(latestItem.comments) ? latestItem.comments : [];
  const cCountEl = document.getElementById("shortCommentCount");
  if (cCountEl) cCountEl.innerText = commentsArr.length.toLocaleString();
  const sCountEl = document.getElementById("shortShareCount");
  if (sCountEl) sCountEl.innerText = (latestItem.shares || 0).toLocaleString();

  // Update comments drawer content if open (or reset state cleanly)
  renderShortCommentsDrawer(latestItem);

  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  document.getElementById("btnShortPrev").disabled = (currentPlayingShortIdx <= 0);
  document.getElementById("btnShortNext").disabled = (currentPlayingShortIdx >= list.length - 1);

  const delBtn = document.getElementById("btnPlayerTeacherDelete");
  delBtn.classList.toggle("hidden", !isShortTeacherAuthenticated());
}

async function navigateShortPlayer(delta) {
  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  const nextIdx = currentPlayingShortIdx + delta;
  if (nextIdx < 0 || nextIdx >= list.length) return;
  currentPlayingShortIdx = nextIdx;
  await loadShortIntoPlayer(list[nextIdx]);
}

async function toggleCurrentShortLike() {
  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  const item = list[currentPlayingShortIdx];
  if (!item) return;
  const userKey = currentUser.isLoggedIn ? currentUser.email.toLowerCase() : "guest";
  const updated = await DataService.Shorts.updateMeta(item.id, (cur) => {
    const likedBy = Array.isArray(cur.likedBy) ? [...cur.likedBy] : [];
    const pos = likedBy.indexOf(userKey);
    if (pos === -1) likedBy.push(userKey);
    else likedBy.splice(pos, 1);
    return { ...cur, likedBy: likedBy, likes: likedBy.length };
  });
  if (updated) {
    const isLiked = updated.likedBy.includes(userKey);
    if (currentUser.isLoggedIn && currentUser.role === 'student') {
      normalizeUserRecord(currentUser);
      const idx = currentUser.likedShorts.indexOf(item.id);
      if (isLiked && idx === -1) {
        currentUser.likedShorts.push(item.id);
        recordUserActivity("like_short", currentUser.currentUnit || 1, `กดถูกใจคลิป Shorts: "${updated.title}"`);
        trackDailyQuestProgress('shortSocial');
      } else if (!isLiked && idx !== -1) {
        currentUser.likedShorts.splice(idx, 1);
      }
      checkAndUnlockBadges(false);
      evaluateTeacherQuests(false);
      saveCurrentProgress();
      if (typeof renderAccountPage === 'function' && !document.getElementById("accountSection").classList.contains("hidden")) {
        renderAccountPage();
      }
    }
    const likeIconEl = document.getElementById("shortLikeIcon");
    if (likeIconEl) likeIconEl.innerHTML = getSymbolIcon(isLiked ? 'heartFilled' : 'heart', 20);
    document.getElementById("btnShortLike").classList.toggle("liked", isLiked);
    document.getElementById("shortLikeCount").innerText = updated.likes.toLocaleString();
    playSfx('pop');
    refreshShortsUI();
  }
}

function toggleShortCommentsDrawer(forceOpen) {
  const drawer = document.getElementById("shortCommentsDrawer");
  if (!drawer) return;
  const willOpen = (typeof forceOpen === 'boolean') ? forceOpen : drawer.classList.contains("hidden");
  drawer.classList.toggle("hidden", !willOpen);
  if (willOpen) {
    const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
    const item = list[currentPlayingShortIdx];
    if (item) renderShortCommentsDrawer(item);
    setTimeout(() => document.getElementById("shortCommentInput")?.focus(), 80);
  }
}

function renderShortCommentsDrawer(item) {
  const listEl = document.getElementById("shortCommentsList");
  const headCount = document.getElementById("shortCommentsHeaderCount");
  const sideCount = document.getElementById("shortCommentCount");
  if (!listEl || !item) return;

  const comments = Array.isArray(item.comments) ? item.comments : [];
  if (headCount) headCount.innerText = comments.length;
  if (sideCount) sideCount.innerText = comments.length.toLocaleString();

  if (comments.length === 0) {
    listEl.innerHTML = `<div style="text-align:center; padding:28px 12px; color:#A1A1AA; font-size:0.84rem;">ยังไม่มีความคิดเห็น — พิมพ์ข้อความแรกเพื่อแลกเปลี่ยนความรู้ได้เลย</div>`;
    return;
  }

  const myEmail = (currentUser && currentUser.isLoggedIn) ? currentUser.email.toLowerCase() : "";
  const isTeacherUser = isShortTeacherAuthenticated();

  listEl.innerHTML = [...comments].reverse().map(c => {
    const canDelete = isTeacherUser || (myEmail && c.authorEmail && c.authorEmail.toLowerCase() === myEmail);
    const timeStr = new Date(c.createdAt || Date.now()).toLocaleString('th-TH', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
    });
    const teacherTag = (c.authorRole === 'teacher')
      ? `<span class="shorts-comment-badge-teacher">${getSymbolIcon('shield', 11)} ครูผู้สอน</span>`
      : '';
    return `
      <div class="shorts-comment-item">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <div>
            <span style="font-weight:800; color:#F4F4F5;">${escapeHTML(c.authorName || 'ผู้เรียน')}</span>
            ${teacherTag}
            <span style="font-size:0.7rem; color:#A1A1AA; margin-left:6px;">${escapeHTML(timeStr)}</span>
          </div>
          ${canDelete ? `<button type="button" onclick="deleteShortComment('${escapeHTML(item.id)}', '${escapeHTML(c.id)}')" title="ลบความคิดเห็น" style="background:transparent; border:none; color:#FCA5A5; cursor:pointer; padding:2px;">${getSymbolIcon('trash', 14)}</button>` : ''}
        </div>
        <div style="margin-top:5px; color:#E4E4E7; line-height:1.45; word-break:break-word;">${escapeHTML(c.text)}</div>
      </div>
    `;
  }).join("");
}

async function handleShortCommentSubmit(e) {
  e.preventDefault();
  const inp = document.getElementById("shortCommentInput");
  const text = (inp ? inp.value : "").trim();
  if (!text) return;

  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  const item = list[currentPlayingShortIdx];
  if (!item) return;

  const authorName = (currentUser && currentUser.isLoggedIn) ? currentUser.name : "ผู้เยี่ยมชม";
  const authorEmail = (currentUser && currentUser.isLoggedIn) ? currentUser.email.toLowerCase() : "guest";
  const authorRole = (currentUser && currentUser.isLoggedIn) ? currentUser.role : "guest";

  const newComment = {
    id: "cmt_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
    authorName,
    authorEmail,
    authorRole,
    text,
    createdAt: Date.now()
  };

  const updated = await DataService.Shorts.updateMeta(item.id, (cur) => {
    const comments = Array.isArray(cur.comments) ? [...cur.comments] : [];
    comments.push(newComment);
    return { ...cur, comments };
  });

  if (updated) {
    if (inp) inp.value = "";
    list[currentPlayingShortIdx] = updated;
    renderShortCommentsDrawer(updated);
    if (currentUser && currentUser.isLoggedIn && currentUser.role === 'student') {
      normalizeUserRecord(currentUser);
      currentUser.commentedShortsCount = (currentUser.commentedShortsCount || 0) + 1;
      recordUserActivity("comment_short", currentUser.currentUnit || 1, `แสดงความคิดเห็นในคลิป Shorts: "${updated.title}"`);
      trackDailyQuestProgress('shortSocial');
      checkAndUnlockBadges(false);
      evaluateTeacherQuests(false);
      saveCurrentProgress();
    }
    notifyShortsUpdated();
    refreshShortsUI();
    playSfx('pop');
    showToast("ส่งความคิดเห็นเรียบร้อยแล้ว", "success");
  }
}

async function deleteShortComment(shortId, commentId) {
  const ok = await showConfirmModal({
    title: "ลบความคิดเห็น",
    message: "ต้องการลบความคิดเห็นนี้ออกจากคลิปใช่หรือไม่?",
    confirmText: "ลบข้อความ",
    danger: true
  });
  if (!ok) return;

  const updated = await DataService.Shorts.updateMeta(shortId, (cur) => {
    const comments = (Array.isArray(cur.comments) ? cur.comments : []).filter(c => c.id !== commentId);
    return { ...cur, comments };
  });
  if (updated) {
    const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
    if (list[currentPlayingShortIdx] && list[currentPlayingShortIdx].id === shortId) {
      list[currentPlayingShortIdx] = updated;
    }
    renderShortCommentsDrawer(updated);
    notifyShortsUpdated();
    refreshShortsUI();
    showToast("ลบความคิดเห็นเรียบร้อยแล้ว", "info");
  }
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {}
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch (e) {
    return false;
  }
}

async function shareCurrentShort() {
  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  const item = list[currentPlayingShortIdx];
  if (!item) return;
  await shareShortClip(item.id);
}

let activeShareShortId = null;
let selectedShareRecipientKeys = new Set();

function getShortShareUrl(shortId) {
  return `${window.location.origin}${window.location.pathname}?short=${encodeURIComponent(shortId)}`;
}

async function recordShortShareMetric(shortId, detailLabel = "") {
  const item = cachedShortsMeta.find(s => s.id === shortId);
  if (!item) return;

  const updated = await DataService.Shorts.updateMeta(shortId, (cur) => ({
    ...cur,
    shares: (Number(cur.shares || 0)) + 1
  }));
  if (updated) {
    const sCountEl = document.getElementById("shortShareCount");
    if (sCountEl && currentPlayingShortIdx >= 0) {
      const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
      if (list[currentPlayingShortIdx] && list[currentPlayingShortIdx].id === shortId) {
        list[currentPlayingShortIdx] = updated;
        sCountEl.innerText = (updated.shares || 0).toLocaleString();
      }
    }
  }

  if (currentUser && currentUser.isLoggedIn && currentUser.role === 'student') {
    normalizeUserRecord(currentUser);
    currentUser.sharedShortsCount = (currentUser.sharedShortsCount || 0) + 1;
    recordUserActivity("share_short", currentUser.currentUnit || 1, detailLabel || `แชร์คลิป: "${item.title}"`);
    trackDailyQuestProgress('shortSocial');
    checkAndUnlockBadges(false);
    evaluateTeacherQuests(false);
    saveCurrentProgress();
  }
  notifyShortsUpdated();
  refreshShortsUI();
  playSfx('pop');
}

function openShortShareModal(shortId) {
  const item = cachedShortsMeta.find(s => s.id === shortId);
  if (!item) return;
  activeShareShortId = shortId;
  selectedShareRecipientKeys = new Set();

  const thumbWrap = document.getElementById("sharePreviewThumbWrap");
  if (thumbWrap) {
    thumbWrap.innerHTML = item.thumbDataUrl
      ? `<img src="${item.thumbDataUrl}" alt="${escapeHtml(item.title)}" style="width:100%; height:100%; object-fit:cover; border-radius:8px; display:block;">`
      : getSymbolIcon('film', 20);
  }
  const titleEl = document.getElementById("sharePreviewTitle");
  const metaEl = document.getElementById("sharePreviewMeta");
  const urlInp = document.getElementById("shareLinkUrlInput");
  const searchInp = document.getElementById("shareRecipientSearch");
  const noteInp = document.getElementById("shareRecipientNote");

  if (titleEl) titleEl.innerText = item.title || "คลิปความรู้ภาษา C";
  if (metaEl) metaEl.innerText = `โดย ${item.authorName || 'ครูผู้สอน'} · ${formatDurationMMSS(item.durationSec)} · ${getUnitLabelShort(item.unitId)}`;
  if (urlInp) urlInp.value = getShortShareUrl(shortId);
  if (searchInp) searchInp.value = "";
  if (noteInp) noteInp.value = "";

  renderShareRecipientsList();
  updateShareRecipientsActionBar();
  document.getElementById("shortShareModal").classList.remove("hidden");
}

function closeShortShareModal() {
  document.getElementById("shortShareModal").classList.add("hidden");
  activeShareShortId = null;
  selectedShareRecipientKeys.clear();
}

function getShareRecipientCandidates() {
  const list = [];
  const selfEmail = (currentUser && currentUser.isLoggedIn && currentUser.role !== 'teacher')
    ? (currentUser.email || '').toLowerCase()
    : '';

  if (!currentUser || currentUser.role !== 'teacher') {
    const tName = safeStorage.getItem("c_edu_teacher_name") || "ครูผู้สอน HelloCode";
    list.push({
      key: "teacher",
      name: tName,
      role: "teacher",
      avatarDataUrl: DataService.Users.getTeacherAvatar()
    });
  }

  const db = DataService.Users.getAll();
  Object.values(db).forEach(rec => {
    if (!rec || !rec.email) return;
    const emailLower = rec.email.toLowerCase();
    if (emailLower === selfEmail || emailLower === 'guest@example.com') return;
    list.push({
      key: emailLower,
      name: rec.name || emailLower,
      role: "student",
      year: rec.year || "",
      avatarDataUrl: isSafeAvatarDataUrl(rec.avatarDataUrl) ? rec.avatarDataUrl : ""
    });
  });

  return list;
}

function renderShareRecipientsList() {
  const container = document.getElementById("shareRecipientsList");
  if (!container) return;
  const query = (document.getElementById("shareRecipientSearch")?.value || "").trim().toLowerCase();
  const candidates = getShareRecipientCandidates().filter(c =>
    !query || (c.name || "").toLowerCase().includes(query) || (c.key || "").toLowerCase().includes(query)
  );

  if (candidates.length === 0) {
    container.innerHTML = `<div style="font-size:0.8rem; color:#64748B; padding:10px 4px;">ไม่พบรายชื่อผู้รับในระบบ</div>`;
    return;
  }

  container.innerHTML = candidates.map(c => {
    const isSel = selectedShareRecipientKeys.has(c.key);
    const avatarHtml = buildAvatarHtml(c, 42, 15);
    return `
      <button type="button" class="share-recipient-chip ${isSel ? 'selected' : ''}" onclick="toggleShareRecipient('${escapeHtml(c.key)}')">
        <span class="share-recipient-avatar-wrap">
          ${avatarHtml}
          <span class="share-recipient-check">${getSymbolIcon('check', 11)}</span>
        </span>
        <span class="share-recipient-name">${escapeHtml(c.name)}</span>
      </button>
    `;
  }).join("");
}

function toggleShareRecipient(key) {
  if (selectedShareRecipientKeys.has(key)) {
    selectedShareRecipientKeys.delete(key);
  } else {
    selectedShareRecipientKeys.add(key);
  }
  renderShareRecipientsList();
  updateShareRecipientsActionBar();
}

function updateShareRecipientsActionBar() {
  const bar = document.getElementById("shareSendSelectedBar");
  const badge = document.getElementById("shareSelectedCountBadge");
  const cnt = selectedShareRecipientKeys.size;
  if (badge) badge.innerText = cnt;
  if (bar) bar.classList.toggle("hidden", cnt === 0);
}

async function sendShortToSelectedRecipients() {
  if (!activeShareShortId || selectedShareRecipientKeys.size === 0) return;
  const item = cachedShortsMeta.find(s => s.id === activeShareShortId);
  if (!item) return;

  const note = (document.getElementById("shareRecipientNote")?.value || "").trim();
  const senderName = (currentUser && currentUser.isLoggedIn) ? currentUser.name : "เพื่อนร่วมเรียน";
  const senderEmail = (currentUser && currentUser.isLoggedIn) ? currentUser.email : "guest@example.com";

  const payload = {
    shortId: item.id,
    title: item.title,
    unitId: item.unitId,
    thumbDataUrl: item.thumbDataUrl || "",
    durationSec: item.durationSec || 0,
    fromName: senderName,
    fromEmail: senderEmail,
    note,
    sentAt: Date.now()
  };

  const db = DataService.Users.getAll();
  let sentCount = 0;

  selectedShareRecipientKeys.forEach(key => {
    if (key === 'teacher') {
      try {
        const inbox = JSON.parse(safeStorage.getItem("c_edu_teacher_received_shorts_v1") || "[]");
        const next = Array.isArray(inbox) ? inbox : [];
        next.push(payload);
        safeStorage.setItem("c_edu_teacher_received_shorts_v1", JSON.stringify(next.slice(-40)));
        sentCount++;
      } catch (e) {}
    } else if (db[key]) {
      const rec = normalizeUserRecord(db[key]);
      rec.receivedShorts.push(payload);
      if (rec.receivedShorts.length > 30) rec.receivedShorts = rec.receivedShorts.slice(-30);
      db[key] = rec;
      sentCount++;
    }
  });

  DataService.Users.saveAll(db);
  await recordShortShareMetric(item.id, `ส่งคลิป "${item.title}" ให้ผู้รับ ${sentCount} คน`);
  showToast(`ส่งคลิป "${item.title}" ให้ผู้รับ ${sentCount} คนเรียบร้อยแล้ว!`, "success");
  closeShortShareModal();
}

async function getShortVideoShareFile(shortId) {
  const item = cachedShortsMeta.find(s => s.id === shortId);
  const blob = await DataService.Shorts.getVideoBlob(shortId);
  if (!blob) return null;
  const mime = (blob.type || "video/mp4").toLowerCase();
  let ext = "mp4";
  if (mime.includes("webm")) ext = "webm";
  else if (mime.includes("quicktime")) ext = "mov";
  const baseTitle = ((item && item.title) || "HelloCode-Short").replace(/[\\/:*?\x22<>|]/g, "_").trim() || "HelloCode-Short";
  const filename = `${baseTitle}.${ext}`;
  const file = new File([blob], filename, { type: blob.type || "video/mp4" });
  return { blob, file, filename, item };
}

function triggerBlobDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 1000);
}

async function shareShortNativeFile() {
  if (!activeShareShortId) return;
  const data = await getShortVideoShareFile(activeShareShortId);
  if (!data) {
    showToast("ไม่พบไฟล์วิดีโอในคลังจัดเก็บ", "error");
    return;
  }
  const shareUrl = getShortShareUrl(activeShareShortId);
  const title = data.item ? data.item.title : "HelloCode Short Video";
  const text = `ชมคลิปความรู้ภาษา C: ${title}`;

  if (navigator.share) {
    try {
      if (typeof navigator.canShare === 'function' && navigator.canShare({ files: [data.file] })) {
        await navigator.share({ title, text, files: [data.file] });
        await recordShortShareMetric(activeShareShortId, `แชร์ไฟล์วิดีโอ "${title}"`);
        showToast("แชร์ไฟล์วิดีโอผ่านระบบเรียบร้อยแล้ว!", "success");
        closeShortShareModal();
        return;
      }
      await navigator.share({ title, text, url: shareUrl });
      await recordShortShareMetric(activeShareShortId, `แชร์คลิป "${title}" ผ่านระบบ`);
      showToast("แชร์คลิปผ่านระบบเรียบร้อยแล้ว!", "success");
      closeShortShareModal();
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }
  }

  triggerBlobDownload(data.blob, data.filename);
  await copyTextToClipboard(shareUrl);
  await recordShortShareMetric(activeShareShortId, `ส่งออกไฟล์วิดีโอ "${data.filename}"`);
  showToast(`บันทึกไฟล์วิดีโอ "${data.filename}" พร้อมคัดลอกลิงก์แล้ว สามารถแนบส่งต่อในแอปอื่นได้ทันที`, "success");
}

async function downloadShortVideoFile() {
  if (!activeShareShortId) return;
  const data = await getShortVideoShareFile(activeShareShortId);
  if (!data) {
    showToast("ไม่พบไฟล์วิดีโอในคลังจัดเก็บ", "error");
    return;
  }
  triggerBlobDownload(data.blob, data.filename);
  await recordShortShareMetric(activeShareShortId, `ดาวน์โหลดไฟล์วิดีโอ "${data.filename}"`);
  showToast(`ดาวน์โหลดวิดีโอ "${data.filename}" เรียบร้อยแล้ว`, "success");
}

async function shareShortToExternalApp(appId) {
  if (!activeShareShortId) return;
  const item = cachedShortsMeta.find(s => s.id === activeShareShortId);
  if (!item) return;

  const shareUrl = getShortShareUrl(activeShareShortId);
  const shareText = `ชมคลิปความรู้ภาษา C: ${item.title} — HelloCode`;
  const encUrl = encodeURIComponent(shareUrl);
  const encText = encodeURIComponent(shareText);
  const encCombined = encodeURIComponent(`${shareText}\n${shareUrl}`);

  await copyTextToClipboard(`${shareText}\n${shareUrl}`);

  const intentUrls = {
    line: `https://social-plugins.line.me/lineit/share?url=${encUrl}&text=${encText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}&quote=${encText}`,
    messenger: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}&quote=${encText}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encCombined}`,
    telegram: `https://t.me/share/url?url=${encUrl}&text=${encText}`,
    x: `https://twitter.com/intent/tweet?text=${encText}&url=${encUrl}`,
    email: `mailto:?subject=${encodeURIComponent(item.title || 'HelloCode C-Learning Clip')}&body=${encCombined}`
  };

  const targetUrl = intentUrls[appId];
  if (!targetUrl) return;

  if (appId === 'email') {
    window.location.href = targetUrl;
  } else {
    window.open(targetUrl, "_blank", "noopener,noreferrer,width=640,height=580");
  }

  await recordShortShareMetric(activeShareShortId, `แชร์คลิปไปยัง ${appId.toUpperCase()}`);
  showToast(`เปิดหน้าต่างแชร์ไปยัง ${appId.toUpperCase()} พร้อมคัดลอกข้อความแล้ว`, "success");
}

async function copyShareModalLink() {
  if (!activeShareShortId) return;
  const shareUrl = getShortShareUrl(activeShareShortId);
  await copyTextToClipboard(shareUrl);
  await recordShortShareMetric(activeShareShortId);
  showToast("คัดลอกลิงก์แชร์คลิปเรียบร้อยแล้ว", "success");
}

async function shareShortClip(shortId) {
  openShortShareModal(shortId);
}

async function deleteShortFromPlayer() {
  const list = activeShortsList.length ? activeShortsList : cachedShortsMeta;
  const item = list[currentPlayingShortIdx];
  if (!item) return;
  closeShortPlayer();
  await deleteShortClip(item.id);
}

function closeShortPlayer() {
  const videoEl = document.getElementById("shortsVideoElement");
  if (videoEl) {
    releaseVideoElement(videoEl);
  }
  if (currentPlayingBlobUrl) {
    URL.revokeObjectURL(currentPlayingBlobUrl);
    currentPlayingBlobUrl = null;
  }
  toggleShortCommentsDrawer(false);
  currentPlayingShortIdx = -1;
  document.getElementById("shortPlayerModal").classList.add("hidden");
}

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("shortPlayerModal");
  if (!modal || modal.classList.contains("hidden")) return;
  if (e.key === "Escape") closeShortPlayer();
  else if (e.key === "ArrowUp") { e.preventDefault(); navigateShortPlayer(-1); }
  else if (e.key === "ArrowDown") { e.preventDefault(); navigateShortPlayer(1); }
});

function openAllShortsModal() {
  const unitFilter = document.getElementById("allShortsUnitFilter");
  if (unitFilter) unitFilter.value = "all";
  allShortsLimit = SHORTS_PAGE_SIZE;
  renderAllShortsGrid();
  document.getElementById("shortAllModal").classList.remove("hidden");
}

function closeAllShortsModal() {
  document.getElementById("shortAllModal").classList.add("hidden");
}

function resetAllShortsPaginationAndRender() {
  allShortsLimit = SHORTS_PAGE_SIZE;
  renderAllShortsGrid();
}

function loadMoreAllShorts() {
  allShortsLimit += SHORTS_PAGE_SIZE;
  renderAllShortsGrid();
}

function renderAllShortsGrid() {
  const grid = document.getElementById("allShortsGridContainer");
  const countEl = document.getElementById("allShortsTotalCount");
  const loadMoreWrap = document.getElementById("allShortsLoadMoreWrap");
  const filterEl = document.getElementById("allShortsUnitFilter");
  const selectedUnit = filterEl ? filterEl.value : "all";
  if (!grid) return;

  const list = (selectedUnit === "all")
    ? cachedShortsMeta
    : cachedShortsMeta.filter(s => String(s.unitId) === String(selectedUnit));

  if (countEl) countEl.innerText = list.length;

  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:32px; color:#A1A1AA;">ยังไม่มีรายการ</div>`;
    if (loadMoreWrap) loadMoreWrap.classList.add("hidden");
    return;
  }

  const visible = list.slice(0, allShortsLimit);
  grid.innerHTML = visible.map((item) => `
    <div class="short-card" style="width:100%;" onclick="closeAllShortsModal(); openShortPlayer('${item.id}')">
      <div class="short-thumb-wrap">
        <img class="short-thumb-img" src="${item.thumbDataUrl || ''}" alt="${escapeHtml(item.title)}" loading="lazy">
        <span class="short-dur-pill">${formatDurationMMSS(item.durationSec)}</span>
      </div>
      <div class="short-meta-footer">
        <div class="short-title-text">${escapeHtml(item.title)}</div>
        <button class="short-menu-btn" onclick="openShortContextMenu(event, '${item.id}')">⋮</button>
      </div>
      <div class="short-views-row">${formatShortViewsThai(item.views)}</div>
    </div>
  `).join("");

  if (loadMoreWrap) {
    const remaining = list.length - visible.length;
    loadMoreWrap.classList.toggle("hidden", remaining <= 0);
    const btn = loadMoreWrap.querySelector("button");
    if (btn && remaining > 0) {
      btn.innerText = `โหลดคลิปเพิ่มเติม (+${Math.min(SHORTS_PAGE_SIZE, remaining)} / เหลือ ${remaining})`;
    }
  }
}

function loadMoreTeacherShorts() {
  teacherShortsLimit += SHORTS_PAGE_SIZE;
  renderTeacherShortsManager();
}

async function renderTeacherShortsManager() {
  const container = document.getElementById("teacherShortsListContainer");
  const badge = document.getElementById("teacherShortsStorageBadge");
  if (!container) return;

  let storageTxt = "";
  try {
    const est = await DataService.Shorts.estimateStorage();
    if (est.supported && typeof est.usage === 'number') {
      storageTxt = ` · ใช้พื้นที่ ${formatBytesReadable(est.usage)}`;
    }
  } catch (e) {}

  if (badge) badge.innerText = `${cachedShortsMeta.length} คลิป${storageTxt}`;
  if (typeof updateTeacherKpisAndBadges === 'function') updateTeacherKpisAndBadges();

  if (cachedShortsMeta.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:24px; background:#F8FAFC; border:1px dashed #CBD5E1; border-radius:12px; color:#64748B; font-size:0.86rem;">
        ยังไม่มีคลิปสั้นในคลัง กด <b>"+ อัปโหลดคลิปสั้นใหม่"</b> เพื่อเริ่มต้น
      </div>
    `;
    return;
  }

  const visible = cachedShortsMeta.slice(0, teacherShortsLimit);
  const remaining = cachedShortsMeta.length - visible.length;

  container.innerHTML = `
    <div style="overflow-x:auto; max-height:360px; border:1px solid #E2E8F0; border-radius:12px;">
      <table class="teacher-report-table">
        <thead>
          <tr>
            <th>ปก</th>
            <th style="text-align:left;">ชื่อหัวข้อคลิป</th>
            <th>หมวดหน่วย</th>
            <th>ความยาว</th>
            <th>ความละเอียด</th>
            <th>ขนาดไฟล์</th>
            <th>ยอดดู</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          ${visible.map(item => `
            <tr>
              <td>
                <img src="${item.thumbDataUrl || ''}" style="width:32px; height:52px; object-fit:cover; border-radius:6px; cursor:pointer; background:#0F172A;" onclick="openShortPlayer('${item.id}')" loading="lazy">
              </td>
              <td style="text-align:left; font-weight:700; max-width:220px;">${escapeHtml(item.title)}</td>
              <td><span class="score-badge" style="background:#EEF2FF; color:#4338CA;">${getUnitLabelShort(item.unitId)}</span></td>
              <td style="font-family:'Fira Code';">${formatDurationMMSS(item.durationSec)}</td>
              <td style="font-family:'Fira Code';">${item.width}×${item.height}</td>
              <td>${formatBytesReadable(item.fileSizeBytes)}</td>
              <td><b>${(item.views || 0).toLocaleString()}</b></td>
              <td>
                <div style="display:flex; gap:5px; justify-content:center;">
                  <button class="btn btn-outline" style="min-height:30px; padding:3px 9px; font-size:0.74rem;" onclick="openShortPlayer('${item.id}')">${getSymbolIcon('play', 13)} เล่น</button>
                  <button class="btn btn-outline" style="min-height:30px; padding:3px 9px; font-size:0.74rem;" onclick="openShortEditModal('${item.id}')" title="แก้ไข">${getSymbolIcon('edit2', 13)}</button>
                  <button class="btn btn-danger" style="min-height:30px; padding:3px 9px; font-size:0.74rem;" onclick="deleteShortClip('${item.id}')" title="ลบ">${getSymbolIcon('trash', 13)}</button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    ${remaining > 0 ? `
      <div style="text-align:center; margin-top:10px;">
        <button class="btn btn-outline" style="min-height:36px; font-size:0.82rem;" onclick="loadMoreTeacherShorts()">
          โหลดเพิ่มเติม · เหลือ ${remaining} คลิป
        </button>
      </div>
    ` : ''}
  `;
}

// =========================================================
// 4. SPEECH SYNTHESIS ENGINE
// =========================================================
let availableVoices = [];
let currentUtterance = null;
let isSpeakingAudio = false;

function populateVoices() {
  if ('speechSynthesis' in window) {
    availableVoices = window.speechSynthesis.getVoices() || [];
    if (availableVoices.some(v => v && typeof v.lang === 'string' && v.lang.toLowerCase().includes('th'))) {
      document.getElementById("edgeEnforceModal")?.classList.add("hidden");
    }
  }
}

if ('speechSynthesis' in window) {
  populateVoices();
  window.speechSynthesis.onvoiceschanged = populateVoices;
}

function getBestThaiFemaleVoice() {
  if (!availableVoices.length) populateVoices();
  const thaiVoices = availableVoices.filter(v => v.lang && v.lang.toLowerCase().includes('th'));
  const femaleChoice = thaiVoices.find(v =>
    v.name.includes('Premwadee') ||
    v.name.includes('Google ภาษาไทย') ||
    v.name.includes('Kanya') ||
    v.name.includes('Narisa') ||
    v.name.toLowerCase().includes('female')
  );
  return femaleChoice || thaiVoices[0] || null;
}

function playTopicAudio() {
  if (!('speechSynthesis' in window)) {
    showToast("เบราว์เซอร์นี้ไม่รองรับระบบเสียงพูด", "warning");
    return;
  }
  stopTopicAudio();

  const scriptKey = `${activeUnitId}_${activeTopicIdx}`;
  const textToSpeak = speechNarrations[scriptKey] || "";

  currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
  currentUtterance.lang = 'th-TH';
  currentUtterance.rate = 0.92;
  currentUtterance.pitch = 1.02;

  const bestVoice = getBestThaiFemaleVoice();
  if (bestVoice) currentUtterance.voice = bestVoice;

  const btn = document.getElementById("btnPlayVoice");
  if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('pause', 16)}</span> กำลังบรรยายเสียง...`;

  currentUtterance.onend = () => {
    isSpeakingAudio = false;
    if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('volume2', 16)}</span> เล่นเสียงอธิบาย`;
  };
  currentUtterance.onerror = () => {
    isSpeakingAudio = false;
    if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('volume2', 16)}</span> เล่นเสียงอธิบาย`;
  };

  isSpeakingAudio = true;
  window.speechSynthesis.speak(currentUtterance);
}

function stopTopicAudio() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  isSpeakingAudio = false;
  const btn = document.getElementById("btnPlayVoice");
  if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('volume2', 16)}</span> เล่นเสียงอธิบาย`;
}

// =========================================================
// 5. INITIALIZATION & NAVIGATION
// =========================================================
window.onload = async function() {
  const brandLogoImg = document.getElementById("platformBrandLogoImg");
  const favLink = document.getElementById("platformFavicon");
  if (brandLogoImg && brandLogoImg.src) {
    if (favLink) favLink.href = brandLogoImg.src;
    const aiFabImg = document.getElementById("aiFabDinoImg");
    const aiHeadImg = document.getElementById("aiHeadDinoImg");
    if (aiFabImg) aiFabImg.src = brandLogoImg.src;
    if (aiHeadImg) aiHeadImg.src = brandLogoImg.src;
  }
  hydrateStaticIcons();
  populateVoices();
  checkEdgeEnforcement();
  if (typeof initKahootMonitorSync === 'function') initKahootMonitorSync();
  if (typeof initAiChatAssistant === 'function') initAiChatAssistant();

  let tickCount = 0;
  setInterval(() => {
    tickCount++;
    const el = document.getElementById("liveClock");
    if (el) el.innerText = new Date().toLocaleTimeString('th-TH');
    if (!document.getElementById("teacherSection").classList.contains("hidden")) {
      renderTeacherKahootMonitor();
    }
    if (!document.getElementById("kViewHostLive").classList.contains("hidden")) {
      updateHostLiveElapsedUI();
    }
    if (tickCount % 3 === 0 && !document.getElementById("learnSection").classList.contains("hidden")) {
      if (typeof renderLiveKahootHomeBanner === 'function') renderLiveKahootHomeBanner();
    }
  }, 1000);

  const cloudState = DataService.Cloud.init();
  if (cloudState.mode === 'firebase') {
    await Promise.all([
      DataService.Cloud.fetchAllUsersToLocalCache(),
      DataService.Cloud.fetchQuestsFromCloud()
    ]);
  }

  const sess = DataService.Users.getSession();

  if (sess.role === "teacher") {
    const tName = sess.teacherName || "ครูผู้สอน";
    currentUser = {
      email: sess.email || "teacher@admin.local",
      name: tName,
      year: "ครูผู้สอน",
      role: "teacher",
      isLoggedIn: true,
      avatarDataUrl: DataService.Users.getTeacherAvatar(),
      xp: 999,
      likedShorts: [],
      receivedShorts: [],
      activityHistory: [],
      badges: BADGE_CATALOG.map(b => b.id),
      claimedLabXp: [],
      completedTeacherQuests: [],
      customRewards: [],
      streak: { count: 1, lastDate: getTodayDateKey() }
    };
  } else if (sess.email) {
    const restored = DataService.Users.getByEmail(sess.email);
    if (restored) {
      currentUser = restored;
      currentUser.isLoggedIn = true;
      updateDailyStreak();
      ensureDailyQuestReset();
      checkAndUnlockBadges(true);
      evaluateTeacherQuests(true);
      DataService.Users.saveUser(currentUser);
    }
  }

  updateTopAccountWidget();
  renderUnitCards();
  renderHomeDashboard();
  renderTeacherReportTable();
  renderTeacherKahootMonitor();
  renderTeacherQuestsManageList();
  await refreshShortsUI();
  if (typeof updateTeacherKpisAndBadges === 'function') updateTeacherKpisAndBadges();

  // URL Deep-Link ?short=<id> Auto-Open Shared Clip
  try {
    const params = new URLSearchParams(window.location.search);
    const sharedShortId = params.get("short");
    if (sharedShortId) {
      const found = cachedShortsMeta.find(s => s.id === sharedShortId);
      if (found) {
        await openShortPlayer(sharedShortId);
      } else {
        showToast("ไม่พบคลิปสั้นที่แชร์มาในคลังจัดเก็บ (อาจถูกลบแล้ว)", "warning");
      }
    }
  } catch (e) {}
};

function openLoginModal() {
  showAuthError("");
  if (typeof updateTeacherAuthFormUI === 'function') updateTeacherAuthFormUI();
  document.getElementById("loginModal").classList.remove("hidden");
}
function closeLoginModal() {
  showAuthError("");
  document.getElementById("loginModal").classList.add("hidden");
}

function switchLoginRole(role) {
  showAuthError("");
  const tabStudent = document.getElementById("tabStudentBtn");
  const tabTeacher = document.getElementById("tabTeacherBtn");
  const studentAuthPane = document.getElementById("studentAuthPane");
  const formTeacher = document.getElementById("formTeacher");

  if (role === 'student') {
    tabStudent.className = "role-tab-btn active";
    tabTeacher.className = "role-tab-btn";
    studentAuthPane.classList.remove("hidden");
    formTeacher.classList.add("hidden");
  } else {
    tabTeacher.className = "role-tab-btn active teacher-mode";
    tabStudent.className = "role-tab-btn";
    studentAuthPane.classList.add("hidden");
    formTeacher.classList.remove("hidden");
    if (typeof updateTeacherAuthFormUI === 'function') updateTeacherAuthFormUI();
  }
}

function switchNav(nav) {
  if (nav === 'teacher' && !isShortTeacherAuthenticated()) {
    showToast("กรุณาเข้าสู่ระบบด้วยบัญชีครูผู้สอนก่อน", "warning");
    openLoginModal();
    switchLoginRole('teacher');
    return;
  }

  stopTopicAudio();
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".m-nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("learnSection").classList.add("hidden");
  document.getElementById("kahootSection").classList.add("hidden");
  document.getElementById("analyticsSection").classList.add("hidden");
  document.getElementById("accountSection").classList.add("hidden");
  document.getElementById("teacherSection").classList.add("hidden");

  if (nav === 'learn') {
    document.getElementById("navLearn").classList.add("active");
    const mBtn = document.getElementById("mNavLearn");
    if (mBtn) mBtn.classList.add("active");
    document.getElementById("learnSection").classList.remove("hidden");
    backToUnitList();
    refreshShortsUI();
    renderHomeDashboard();
  } else if (nav === 'kahoot') {
    document.getElementById("navKahoot").classList.add("active");
    const mBtn = document.getElementById("mNavKahoot");
    if (mBtn) mBtn.classList.add("active");
    document.getElementById("kahootSection").classList.remove("hidden");
    kSwitchView('roleSelect');
  } else if (nav === 'analytics') {
    document.getElementById("navAnalytics").classList.add("active");
    const mBtn = document.getElementById("mNavAnalytics");
    if (mBtn) mBtn.classList.add("active");
    document.getElementById("analyticsSection").classList.remove("hidden");
    renderAnalyticsView();
  } else if (nav === 'account') {
    const navAcc = document.getElementById("navAccount");
    const mAcc = document.getElementById("mNavAccount");
    if (navAcc) navAcc.classList.add("active");
    if (mAcc) mAcc.classList.add("active");
    document.getElementById("accountSection").classList.remove("hidden");
    renderAccountPage();
  } else if (nav === 'teacher') {
    document.getElementById("navTeacher").classList.add("active");
    const mBtn = document.getElementById("mNavTeacher");
    if (mBtn) mBtn.classList.add("active");
    document.getElementById("teacherSection").classList.remove("hidden");
    switchTeacherTab(activeTeacherTab || 'overview');
    renderTeacherReportTable();
    renderTeacherKahootMonitor();
    renderTeacherShortsManager();
    renderTeacherQuestsManageList();
    updateTeacherKpisAndBadges();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// 5B. SEQUENTIAL HOME DASHBOARD, TEACHER QUEST BUILDER & ACCOUNT HUB
// =========================================================
function getNextSequentialTarget() {
  normalizeUserRecord(currentUser);
  if (currentUser.role === 'teacher') {
    return {
      unitId: activeUnitId || 1,
      topicIdx: 0,
      status: 'teacher',
      unitTitle: curriculumData[activeUnitId || 1].title,
      stepText: 'โหมดครูผู้สอน',
      pct: 100
    };
  }

  for (let u = 1; u <= 5; u++) {
    const st = currentUser.units[u];
    if (!st.postDone) {
      if (!st.preDone) {
        return {
          unitId: u,
          topicIdx: 0,
          status: 'need_pre',
          unitTitle: curriculumData[u].title,
          stepText: `แบบทดสอบก่อนเรียน · 10 ข้อ`,
          pct: 0
        };
      }
      const tIdx = Math.min(st.lastTopicIdx || 0, st.unlockedTopicIdx || 0);
      const unlockedCount = (st.unlockedTopicIdx || 0) + 1;
      const pct = Math.min(85, 15 + Math.round((unlockedCount / 5) * 70));
      const topicLabel = topicTitles[u][tIdx] ? topicTitles[u][tIdx].split("(")[0].trim() : `หัวข้อ ${u}.1`;
      const stepText = (st.unlockedTopicIdx >= 4 && st.contentRead)
        ? `พร้อมทำแบบทดสอบหลังเรียน หน่วยที่ ${u}`
        : `${topicLabel} · ปลดล็อก ${unlockedCount}/5`;
      return {
        unitId: u,
        topicIdx: tIdx,
        status: 'in_content',
        unitTitle: curriculumData[u].title,
        stepText,
        pct
      };
    }
  }

  return {
    unitId: 5,
    topicIdx: 4,
    status: 'all_done',
    unitTitle: 'เรียนครบทั้ง 5 หน่วยแล้ว',
    stepText: 'ผ่านแบบทดสอบหลังเรียนครบทุกหน่วยแล้ว',
    pct: 100
  };
}

function resumeLastLearningPoint() {
  const target = getNextSequentialTarget();
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".m-nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("navLearn").classList.add("active");
  const mBtn = document.getElementById("mNavLearn");
  if (mBtn) mBtn.classList.add("active");
  document.getElementById("learnSection").classList.remove("hidden");
  document.getElementById("kahootSection").classList.add("hidden");
  document.getElementById("analyticsSection").classList.add("hidden");
  document.getElementById("accountSection").classList.add("hidden");
  document.getElementById("teacherSection").classList.add("hidden");
  selectUnitToStudy(target.unitId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLiveKahootHomeBanner() {
  const banner = document.getElementById("homeLiveKahootBanner");
  if (!banner) return;
  const sessions = DataService.Kahoot.loadSessions();
  const activeRooms = Object.values(sessions).filter(r => r && r.status !== 'finished');
  if (activeRooms.length === 0) {
    banner.classList.add("hidden");
    return;
  }
  activeRooms.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  const room = activeRooms[0];
  const pinCode = room.fullPin || room.pin || "-";
  const roomTitle = room.unitTitle || room.title || "ห้องแข่งขันภาษา C";
  const pCount = Object.keys(room.players || {}).length;
  document.getElementById("homeLiveKahootTitle").innerHTML = `${getSymbolIcon('zap', 16)} มีห้องแข่งขัน Kahoot เปิดอยู่! (${activeRooms.length} ห้อง)`;
  document.getElementById("homeLiveKahootSub").innerText = `${roomTitle} · PIN: ${pinCode} · ผู้เล่น ${pCount} คน`;
  banner.dataset.pin = pinCode;
  banner.classList.remove("hidden");
}

function joinActiveKahootFromHome() {
  const banner = document.getElementById("homeLiveKahootBanner");
  const pin = banner ? (banner.dataset.pin || "") : "";
  switchNav('kahoot');
  kSwitchView('joinPin');
  const inp = document.getElementById("inputRoomPin");
  if (inp && pin) {
    inp.value = pin;
    inp.focus();
  }
  showToast(`กรอกรหัส PIN ${pin} ให้แล้ว — กดเข้าร่วมห้องแข่งขันได้ทันที!`, "info");
}

function renderContinueLearningCard() {
  const target = getNextSequentialTarget();
  const kickerEl = document.getElementById("continueKickerText");
  const titleEl = document.getElementById("continueUnitTitle");
  const subEl = document.getElementById("continueTopicSub");
  const fillEl = document.getElementById("continueProgFill");
  const lblEl = document.getElementById("continueProgLabel");
  const btnEl = document.getElementById("btnResumeLearning");

  if (!titleEl) return;
  const isGuest = !currentUser.isLoggedIn;
  kickerEl.innerHTML = isGuest
    ? `${getSymbolIcon('play', 13)} เส้นทางการเรียนรู้`
    : `${getSymbolIcon('play', 13)} เรียนต่อสำหรับ ${escapeHtml(currentUser.name)}`;
  titleEl.innerText = target.unitTitle;
  subEl.innerText = target.stepText;
  fillEl.style.width = `${target.pct}%`;
  lblEl.innerText = `${target.pct}% ของหน่วยที่ ${target.unitId}`;
  btnEl.innerHTML = target.status === 'all_done'
    ? `<span class="svg-ico">${getSymbolIcon('trophy', 16)}</span> ทบทวนบทเรียนหน่วยที่ 5`
    : `<span class="svg-ico">${getSymbolIcon('play', 16)}</span> เรียนต่อจากครั้งล่าสุด`;
}

let activeHomeWidgetTab = 'quests';

function switchHomeWidgetTab(tab) {
  activeHomeWidgetTab = (tab === 'leaderboard') ? 'leaderboard' : 'quests';
  const btnQ = document.getElementById("homeSegTabQuests");
  const btnL = document.getElementById("homeSegTabLeaderboard");
  const paneQ = document.getElementById("homeSegPaneQuests");
  const paneL = document.getElementById("homeSegPaneLeaderboard");
  if (btnQ) {
    btnQ.classList.toggle("active", activeHomeWidgetTab === 'quests');
    btnQ.setAttribute("aria-selected", activeHomeWidgetTab === 'quests' ? "true" : "false");
  }
  if (btnL) {
    btnL.classList.toggle("active", activeHomeWidgetTab === 'leaderboard');
    btnL.setAttribute("aria-selected", activeHomeWidgetTab === 'leaderboard' ? "true" : "false");
  }
  if (paneQ) paneQ.classList.toggle("hidden", activeHomeWidgetTab !== 'quests');
  if (paneL) paneL.classList.toggle("hidden", activeHomeWidgetTab !== 'leaderboard');
  if (activeHomeWidgetTab === 'leaderboard') {
    renderTop5Leaderboard();
  }
}

function renderDailyQuestsCard() {
  const streakEl = document.getElementById("homeStreakPill");
  const listEl = document.getElementById("homeDailyQuestsList");
  const teacherWrap = document.getElementById("homeTeacherQuestsWrapper");
  const pendingBadge = document.getElementById("homePendingQuestsBadge");
  if (!listEl) return;

  const isStudentLogged = currentUser.isLoggedIn && currentUser.role === 'student';
  if (isStudentLogged) ensureDailyQuestReset();

  const streakCount = isStudentLogged ? (currentUser.streak?.count || 1) : 0;
  if (streakEl) {
    streakEl.innerHTML = `${getSymbolIcon('flame', 14)} ${streakCount} วันต่อเนื่อง`;
  }

  const q = (isStudentLogged && currentUser.dailyQuests)
    ? currentUser.dailyQuests
    : { login: false, studyOrQuiz: 0, playLabs: 0, watchShorts: 0, shortSocial: 0, bonusClaimed: false };

  const items = [
    { label: "เข้าสู่ระบบเพื่อเริ่มเรียนวันนี้ (+10 XP)", done: !!q.login, progress: q.login ? "1/1" : "0/1" },
    { label: "ศึกษาหัวข้อหรือทำแบบทดสอบ 2 ครั้ง", done: (q.studyOrQuiz || 0) >= 2, progress: `${Math.min(2, q.studyOrQuiz || 0)}/2` },
    { label: "ทดลองและรับ XP ห้องแล็บมินิเกม 1 แล็บ", done: (q.playLabs || 0) >= 1, progress: `${Math.min(1, q.playLabs || 0)}/1` },
    { label: "รับชมคลิปความรู้ Shorts 2 คลิป", done: (q.watchShorts || 0) >= 2, progress: `${Math.min(2, q.watchShorts || 0)}/2` },
    { label: "ถูกใจ คอมเมนต์ หรือแชร์คลิป Shorts", done: (q.shortSocial || 0) >= 1, progress: `${Math.min(1, q.shortSocial || 0)}/1` }
  ];

  listEl.innerHTML = items.map(it => `
    <div class="quest-item ${it.done ? 'done' : ''}">
      <span style="display:inline-flex; align-items:center; gap:7px;">
        <span class="svg-ico" style="color:${it.done ? '#059669' : '#64748B'};">${getSymbolIcon(it.done ? 'checkSquare' : 'squareOutline', 16)}</span>
        <span>${it.label}</span>
      </span>
      <span style="color:${it.done ? '#059669' : '#4F46E5'}; font-weight:800; flex-shrink:0;">${it.progress}</span>
    </div>
  `).join("") + (q.bonusClaimed
    ? `<div style="font-size:0.76rem; color:#059669; font-weight:800; margin-top:8px; display:flex; align-items:center; gap:5px;">${getSymbolIcon('gift', 15)} รับโบนัสครบ 5 ภารกิจประจำวันแล้ว (+30 XP)</div>`
    : `<div style="font-size:0.75rem; color:#64748B; margin-top:8px;">ทำครบ 5 ข้อรับโบนัส +30 XP อัตโนมัติ</div>`);

  // Render Teacher Special Quests & update pending quest badge
  const tQuests = DataService.Quests.getAll().filter(tq => tq.active !== false);
  const incompleteDailyCount = items.filter(it => !it.done).length;
  const incompleteTeacherCount = tQuests.filter(tq =>
    !(isStudentLogged && Array.isArray(currentUser.completedTeacherQuests) && currentUser.completedTeacherQuests.includes(tq.id))
  ).length;
  const totalPending = incompleteDailyCount + incompleteTeacherCount;
  if (pendingBadge) {
    pendingBadge.innerText = totalPending;
    pendingBadge.title = `ภารกิจที่ยังไม่เสร็จ ${totalPending} รายการ`;
  }

  if (teacherWrap) {
    if (tQuests.length === 0) {
      teacherWrap.innerHTML = "";
      return;
    }
    teacherWrap.innerHTML = `
      <div class="quest-section-divider">
        <span style="display:inline-flex; align-items:center; gap:6px;">${getSymbolIcon('gift', 16, 'color:#7C3AED;')} ภารกิจพิเศษจากครูผู้สอน (${tQuests.length})</span>
        <span style="font-size:0.72rem; color:#6D28D9; font-weight:700;">รางวัลพิเศษ</span>
      </div>
      ${tQuests.map(tq => {
        const done = isStudentLogged && Array.isArray(currentUser.completedTeacherQuests) && currentUser.completedTeacherQuests.includes(tq.id);
        const prog = isStudentLogged ? getTeacherQuestProgress(tq) : { current: 0, target: Number(tq.targetValue || 1), met: false };
        const isManual = tq.conditionType === 'manual_submit';
        return `
          <div class="teacher-quest-card ${done ? 'done' : ''}">
            <div style="flex:1; min-width:200px;">
              <div style="font-weight:800; font-size:0.86rem; color:#0F172A; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                <span class="svg-ico" style="color:${done ? '#059669' : '#7C3AED'};">${getSymbolIcon(done ? 'checkCircle' : 'award', 15)}</span>
                <span>${escapeHtml(tq.title)}</span>
                <span class="reward-chip">+${Number(tq.xpReward || 0)} XP · ${escapeHtml(tq.rewardTitle || 'รางวัลพิเศษ')}</span>
              </div>
              <div style="font-size:0.76rem; color:#475569; margin-top:3px;">${escapeHtml(tq.description)}</div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              ${done
                ? `<span style="font-size:0.76rem; font-weight:800; color:#059669; display:inline-flex; align-items:center; gap:4px;">${getSymbolIcon('check', 14)} สำเร็จแล้ว</span>`
                : (isManual
                  ? `<button type="button" class="btn btn-teacher" style="min-height:32px; padding:4px 10px; font-size:0.74rem;" onclick="claimManualTeacherQuest('${tq.id}')">ยืนยันส่งภารกิจ</button>`
                  : `<span style="font-size:0.78rem; font-weight:800; color:#6D28D9; background:#EDE9FE; padding:4px 10px; border-radius:99px;">${prog.current}/${prog.target}</span>`
                )
              }
            </div>
          </div>
        `;
      }).join("")}
    `;
  }
}

function onTeacherQuestCondChange() {
  const cond = document.getElementById("tqConditionType")?.value;
  const wrap = document.getElementById("tqTargetValueWrap");
  const lbl = document.getElementById("tqTargetLabel");
  const inp = document.getElementById("tqTargetValue");
  if (!wrap || !lbl || !inp) return;

  if (cond === 'manual_submit') {
    wrap.classList.add("hidden");
    inp.required = false;
  } else if (cond === 'pass_unit') {
    wrap.classList.remove("hidden");
    lbl.innerText = "ระบุหน่วยที่ต้องสอบผ่าน (1 ถึง 5):";
    inp.min = 1;
    inp.max = 5;
    if (Number(inp.value) > 5 || Number(inp.value) < 1) inp.value = 1;
    inp.required = true;
  } else {
    wrap.classList.remove("hidden");
    lbl.innerText = "เป้าหมาย (จำนวน):";
    inp.min = 1;
    inp.max = 25;
    inp.required = true;
  }
}

function handleSaveTeacherQuest(e) {
  e.preventDefault();
  if (!isShortTeacherAuthenticated()) {
    showToast("เฉพาะบัญชีครูผู้สอนเท่านั้นที่จัดการภารกิจได้", "error");
    return;
  }
  const editId = (document.getElementById("tqEditId").value || "").trim();
  const title = document.getElementById("tqTitleInput").value.trim();
  const description = document.getElementById("tqDescInput").value.trim();
  const conditionType = document.getElementById("tqConditionType").value;
  const targetValue = conditionType === 'manual_submit' ? 1 : Math.max(1, parseInt(document.getElementById("tqTargetValue").value || "1", 10));
  const xpReward = Math.max(5, parseInt(document.getElementById("tqXpReward").value || "50", 10));
  const rewardTitle = document.getElementById("tqRewardTitle").value.trim();

  if (!title || !description || !rewardTitle) return;

  if (editId) {
    DataService.Quests.update(editId, {
      title, description, conditionType, targetValue, xpReward, rewardTitle
    });
    showToast(`อัปเดตภารกิจ "${title}" เรียบร้อยแล้ว`, "success");
  } else {
    DataService.Quests.create({
      id: "tq_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      title,
      description,
      conditionType,
      targetValue,
      xpReward,
      rewardTitle,
      active: true,
      createdAt: Date.now(),
      createdBy: currentUser.name
    });
    showToast(`สร้างภารกิจใหม่ "${title}" (+${xpReward} XP) สำเร็จ!`, "success");
  }

  resetTeacherQuestForm();
  renderTeacherQuestsManageList();
  renderHomeDashboard();
  playSfx('success');
}

function editTeacherQuest(id) {
  const q = DataService.Quests.getAll().find(item => item.id === id);
  if (!q) return;
  document.getElementById("tqEditId").value = q.id;
  document.getElementById("tqTitleInput").value = q.title;
  document.getElementById("tqDescInput").value = q.description;
  document.getElementById("tqConditionType").value = q.conditionType;
  onTeacherQuestCondChange();
  document.getElementById("tqTargetValue").value = q.targetValue || 1;
  document.getElementById("tqXpReward").value = q.xpReward || 50;
  document.getElementById("tqRewardTitle").value = q.rewardTitle || "";
  document.getElementById("btnCancelEditQuest").classList.remove("hidden");
  document.getElementById("btnSaveTeacherQuest").innerHTML = `<span class="svg-ico">${getSymbolIcon('save', 16)}</span> บันทึกการแก้ไขภารกิจ`;
  document.getElementById("teacherQuestForm").scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetTeacherQuestForm() {
  document.getElementById("tqEditId").value = "";
  document.getElementById("teacherQuestForm")?.reset();
  document.getElementById("tqTargetValue").value = 3;
  document.getElementById("tqXpReward").value = 50;
  onTeacherQuestCondChange();
  document.getElementById("btnCancelEditQuest")?.classList.add("hidden");
  const btn = document.getElementById("btnSaveTeacherQuest");
  if (btn) btn.innerHTML = `<span class="svg-ico">${getSymbolIcon('plusCircle', 16)}</span> สร้างภารกิจและรางวัล`;
}

function toggleTeacherQuestActive(id) {
  DataService.Quests.toggleActive(id);
  renderTeacherQuestsManageList();
  renderHomeDashboard();
  showToast("อัปเดตสถานะภารกิจแล้ว", "info");
}

async function deleteTeacherQuest(id) {
  const q = DataService.Quests.getAll().find(x => x.id === id);
  const ok = await showConfirmModal({
    title: "ยืนยันการลบภารกิจ",
    message: `ต้องการลบภารกิจ "${q ? q.title : ''}" ออกจากระบบหรือไม่?`,
    confirmText: "ลบภารกิจ",
    danger: true
  });
  if (!ok) return;
  DataService.Quests.remove(id);
  renderTeacherQuestsManageList();
  renderHomeDashboard();
  showToast("ลบภารกิจเรียบร้อยแล้ว", "info");
}

function getConditionSummaryText(q) {
  const n = Number(q.targetValue || 1);
  switch (q.conditionType) {
    case 'watch_shorts': return `ดูคลิป Shorts ${n} คลิป`;
    case 'play_labs': return `เล่นรับ XP มินิเกม ${n} แล็บ`;
    case 'pass_unit': return `สอบผ่านหน่วยที่ ${n}`;
    case 'comment_shorts': return `คอมเมนต์ Shorts ${n} ครั้ง`;
    case 'like_shorts': return `กดถูกใจ Shorts ${n} คลิป`;
    case 'manual_submit': return `ส่งงาน/ยืนยันโดยผู้เรียน`;
    default: return q.conditionType;
  }
}

function renderTeacherQuestsManageList() {
  const container = document.getElementById("teacherQuestsManageList");
  const badge = document.getElementById("teacherQuestsCountBadge");
  if (!container) return;

  const list = DataService.Quests.getAll();
  if (badge) badge.innerText = `${list.length} รายการ`;
  if (typeof updateTeacherKpisAndBadges === 'function') updateTeacherKpisAndBadges();

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:18px; background:#FFFFFF; border:1px dashed #CBD5E1; border-radius:12px; color:#64748B; font-size:0.84rem;">
        ยังไม่มีภารกิจจากครูผู้สอน
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:12px; background:#FFFFFF;">
      <table class="teacher-report-table">
        <thead>
          <tr>
            <th style="text-align:left;">ชื่อภารกิจ &amp; คำอธิบาย</th>
            <th>เงื่อนไข</th>
            <th>XP / รางวัลพิเศษ</th>
            <th>สถานะ</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(q => `
            <tr>
              <td style="text-align:left; max-width:260px;">
                <div style="font-weight:800; color:#0F172A;">${escapeHTML(q.title)}</div>
                <div style="font-size:0.74rem; color:#64748B;">${escapeHTML(q.description)}</div>
              </td>
              <td><span class="score-badge" style="background:#EEF2FF; color:#4338CA;">${escapeHTML(getConditionSummaryText(q))}</span></td>
              <td>
                <div style="font-weight:800; color:#D97706;">+${Number(q.xpReward || 0)} XP</div>
                <div style="font-size:0.72rem; color:#6D28D9; font-weight:700;">${escapeHTML(q.rewardTitle || '-')}</div>
              </td>
              <td>
                <span class="score-badge ${q.active !== false ? 'score-high' : 'score-pending'}">${q.active !== false ? 'เปิดใช้งาน' : 'ปิดชั่วคราว'}</span>
              </td>
              <td>
                <div style="display:flex; gap:5px; justify-content:center; flex-wrap:wrap;">
                  <button type="button" class="btn btn-outline" style="min-height:30px; padding:3px 9px; font-size:0.72rem;" onclick="toggleTeacherQuestActive('${escapeHTML(q.id)}')">${q.active !== false ? 'ปิด' : 'เปิด'}</button>
                  <button type="button" class="btn btn-outline" style="min-height:30px; padding:3px 9px; font-size:0.72rem;" onclick="editTeacherQuest('${escapeHTML(q.id)}')" title="แก้ไข">${getSymbolIcon('edit2', 13)}</button>
                  <button type="button" class="btn btn-danger" style="min-height:30px; padding:3px 9px; font-size:0.72rem;" onclick="deleteTeacherQuest('${escapeHTML(q.id)}')" title="ลบ">${getSymbolIcon('trash', 13)}</button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderTop5Leaderboard() {
  const box = document.getElementById("homeTop5LeaderboardList");
  if (!box) return;
  const top = DataService.Users.getTopLeaderboard(5);
  if (top.length === 0) {
    box.innerHTML = `
      <div style="text-align:center; padding:18px; color:#64748B; font-size:0.84rem; background:#F8FAFC; border-radius:12px; border:1px dashed #CBD5E1; margin-top:8px;">
        ยังไม่มีข้อมูลอันดับผู้เรียน — สมัครสมาชิกและเริ่มเก็บ XP เพื่อขึ้นอันดับ #1!
      </div>
    `;
    return;
  }
  const rankColors = ["#D97706", "#64748B", "#B45309", "#4338CA", "#4338CA"];
  const rankBgs = ["#FEF3C7", "#E2E8F0", "#FFEDD5", "#EEF2FF", "#EEF2FF"];
  box.innerHTML = top.map((u, idx) => {
    const isMe = currentUser.isLoggedIn && currentUser.email.toLowerCase() === u.email.toLowerCase();
    const lv = getLevelInfo(u.xp || 0);
    const rankContent = idx < 3
      ? getSymbolIcon('trophy', 15)
      : `${idx + 1}`;
    return `
      <div class="leaderboard-row" style="${isMe ? 'border-color:#4F46E5; background:#EEF2FF;' : ''}">
        <div style="display:flex; align-items:center; gap:10px;">
          <div class="lb-rank" style="background:${rankBgs[idx] || '#EEF2FF'}; color:${rankColors[idx] || '#4338CA'};">${rankContent}</div>
          ${buildAvatarHtml(u, 32, '0.8rem')}
          <div>
            <div style="font-weight:800; color:#0F172A; font-size:0.86rem;">
              ${escapeHtml(u.name)} ${isMe ? '<span style="color:#4F46E5; font-size:0.72rem;">(คุณ)</span>' : ''}
            </div>
            <div style="font-size:0.72rem; color:#64748B;">${escapeHtml(u.year || '-')} · ${lv.title}</div>
          </div>
        </div>
        <div style="font-weight:800; color:#D97706; font-family:'Fira Code'; font-size:0.85rem; display:inline-flex; align-items:center; gap:4px;">${getSymbolIcon('starFilled', 14)} ${(u.xp || 0).toLocaleString()}</div>
      </div>
    `;
  }).join("");
}

function renderHomeDashboard() {
  renderLiveKahootHomeBanner();
  renderContinueLearningCard();
  renderDailyQuestsCard();
  renderTop5Leaderboard();
}

function renderAccountPage() {
  const guestEl = document.getElementById("accountGuestNotice");
  const authEl = document.getElementById("accountAuthenticatedView");
  if (!guestEl || !authEl) return;

  if (!currentUser || !currentUser.isLoggedIn) {
    guestEl.classList.remove("hidden");
    authEl.classList.add("hidden");
    return;
  }

  guestEl.classList.add("hidden");
  authEl.classList.remove("hidden");
  if (currentUser.role === 'student') {
    normalizeUserRecord(currentUser);
    checkAndUnlockBadges(true);
  }

  const isTeacher = currentUser.role === 'teacher';
  const lv = getLevelInfo(currentUser.xp || 0);
  const likedCount = (currentUser.likedShorts || []).length;

  const avPage = document.getElementById("accountPageAvatar");
  avPage.className = isTeacher ? "account-avatar teacher" : "account-avatar";
  renderAvatarElement(avPage, currentUser, 28);

  const avStudio = document.getElementById("accProfileAvatarPreview");
  if (avStudio) {
    avStudio.className = isTeacher ? "account-avatar avatar-preview-lg teacher" : "account-avatar avatar-preview-lg";
    renderAvatarElement(avStudio, currentUser, 32);
  }

  const hasAvatar = isSafeAvatarDataUrl(currentUser.avatarDataUrl);
  const btnRemoveAv = document.getElementById("btnRemoveAvatar");
  const btnChooseAv = document.getElementById("btnChooseAvatar");
  const avStatusTxt = document.getElementById("accAvatarStatusText");
  if (btnRemoveAv) btnRemoveAv.classList.toggle("hidden", !hasAvatar);
  if (btnChooseAv) {
    btnChooseAv.innerHTML = `<span class="svg-ico">${getSymbolIcon('camera', 16)}</span> ${hasAvatar ? 'เปลี่ยนรูปโปรไฟล์' : 'เพิ่มรูปโปรไฟล์'}`;
  }
  if (avStatusTxt) {
    avStatusTxt.innerText = hasAvatar
      ? "กำลังใช้งานรูปโปรไฟล์ของคุณ"
      : "เพิ่มรูปโปรไฟล์ส่วนตัวของคุณ เพื่อแสดงบนแถบเมนู หน้าบัญชี และกระดานอันดับ";
  }

  document.getElementById("accountPageName").innerText = currentUser.name;
  document.getElementById("accountPageEmail").innerText = currentUser.email;
  document.getElementById("accountPageLevelPill").innerText = isTeacher ? "Admin · ครูผู้สอน" : lv.title;
  document.getElementById("accountPageYearBadge").innerText = isTeacher ? "ครูผู้สอน" : (currentUser.year || "นักเรียน");
  document.getElementById("accountPageStreakBadge").innerHTML = `${getSymbolIcon('flame', 14)} ${currentUser.streak?.count || 0} วันต่อเนื่อง`;
  document.getElementById("accountPageXpBadge").innerHTML = `${getSymbolIcon('starFilled', 14)} ${(currentUser.xp || 0).toLocaleString()} XP`;
  document.getElementById("accountNextLevelXp").innerText = `${currentUser.xp || 0} / ${lv.nextXp} XP`;
  document.getElementById("accountLevelProgFill").style.width = `${lv.pct}%`;
  document.getElementById("accLikedCountBadge").innerText = likedCount;

  document.getElementById("accEditName").value = currentUser.name;
  document.getElementById("accEditYearWrap").classList.toggle("hidden", isTeacher);
  document.getElementById("accEditPassWrap").classList.toggle("hidden", isTeacher);
  if (!isTeacher && currentUser.year) {
    document.getElementById("accEditYear").value = currentUser.year;
  }
  const passInp = document.getElementById("accEditNewPass");
  if (passInp) passInp.value = "";

  const target = getNextSequentialTarget();
  const summaryEl = document.getElementById("accLastPositionSummary");
  if (summaryEl) {
    let doneUnits = 0;
    if (currentUser.units) {
      for (let i = 1; i <= 5; i++) if (currentUser.units[i]?.postDone) doneUnits++;
    }
    const claimedLabsCnt = (currentUser.claimedLabXp || []).length;
    const badgeCnt = (currentUser.badges || []).length;
    summaryEl.innerHTML = `
      <div><b>หน่วยปัจจุบัน:</b> ${escapeHtml(target.unitTitle)}</div>
      <div><b>สถานะล่าสุด:</b> ${escapeHtml(target.stepText)}</div>
      <div><b>ความคืบหน้ารวม:</b> ${doneUnits} / 5 หน่วย (${Math.round((doneUnits / 5) * 100)}%)</div>
      <div><b>ห้องทดลองที่รับ XP แล้ว:</b> ${claimedLabsCnt} / 25 แล็บ</div>
      <div><b>เหรียญรางวัล:</b> ${badgeCnt} / ${BADGE_CATALOG.length} เหรียญ · <b>คลิปถูกใจ:</b> ${likedCount} คลิป</div>
    `;
  }

  renderAccountLikedShorts();
  renderAccountHistoryAndBadges();
}

function switchAccountSubtab(tab) {
  document.getElementById("accTabProfile").classList.toggle("active", tab === 'profile');
  document.getElementById("accTabLiked").classList.toggle("active", tab === 'liked');
  document.getElementById("accTabHistory").classList.toggle("active", tab === 'history');

  document.getElementById("accPanelProfile").classList.toggle("hidden", tab !== 'profile');
  document.getElementById("accPanelLiked").classList.toggle("hidden", tab !== 'liked');
  document.getElementById("accPanelHistory").classList.toggle("hidden", tab !== 'history');

  if (tab === 'liked') renderAccountLikedShorts();
  if (tab === 'history') renderAccountHistoryAndBadges();
}

function handleAccountPageProfileSave(e) {
  e.preventDefault();
  if (!currentUser || !currentUser.isLoggedIn) return;
  const newName = document.getElementById("accEditName").value.trim();
  const newPass = document.getElementById("accEditNewPass").value;
  if (!newName) return;

  if (currentUser.role !== 'teacher' && newPass && newPass.length < 4) {
    showToast("รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 4 ตัวอักษร", "error");
    return;
  }

  currentUser.name = newName;
  if (currentUser.role === 'teacher') {
    DataService.Users.setTeacherSession(newName);
  } else {
    currentUser.year = document.getElementById("accEditYear").value;
    if (newPass) {
      currentUser.passwordHash = hashPassword(newPass);
    }
    recordUserActivity("profile_update", currentUser.currentUnit || 1, `อัปเดตข้อมูลบัญชี (${newName})`);
    saveCurrentProgress();
  }
  updateTopAccountWidget();
  renderAccountPage();
  renderHomeDashboard();
  playSfx('success');
  showToast("บันทึกการเปลี่ยนแปลงบัญชีเรียบร้อยแล้ว!", "success");
}

function getReceivedShortsForCurrentUser() {
  if (!currentUser || !currentUser.isLoggedIn) return [];
  if (currentUser.role === 'teacher') {
    try {
      const parsed = JSON.parse(safeStorage.getItem("c_edu_teacher_received_shorts_v1") || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) { return []; }
  }
  normalizeUserRecord(currentUser);
  return Array.isArray(currentUser.receivedShorts) ? currentUser.receivedShorts : [];
}

function renderAccountLikedShorts() {
  const container = document.getElementById("accLikedShortsContainer");
  const badgeEl = document.getElementById("accLikedCountBadge");
  const recSec = document.getElementById("accReceivedShortsSection");
  const recContainer = document.getElementById("accReceivedShortsContainer");
  if (!container) return;

  if (recSec && recContainer) {
    const recList = getReceivedShortsForCurrentUser();
    if (recList.length > 0) {
      recSec.classList.remove("hidden");
      recContainer.innerHTML = `
        <div class="liked-shorts-grid">
          ${recList.slice().reverse().map(rec => {
            const liveMeta = cachedShortsMeta.find(s => s.id === rec.shortId);
            const thumbSrc = (liveMeta && liveMeta.thumbDataUrl) || rec.thumbDataUrl || '';
            const titleTxt = (liveMeta && liveMeta.title) || rec.title || 'คลิปสั้น';
            const durSec = (liveMeta && liveMeta.durationSec) || rec.durationSec || 0;
            const sentDate = rec.sentAt ? new Date(rec.sentAt).toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }) : '';
            return `
              <div style="background:#0F172A; color:#F8FAFC; border-radius:14px; padding:10px; border:1px solid #334155; display:flex; flex-direction:column; gap:8px;">
                <div class="short-thumb-wrap" style="cursor:pointer;" onclick="openShortPlayer('${escapeHtml(rec.shortId)}')">
                  ${thumbSrc ? `<img class="short-thumb-img" src="${thumbSrc}" alt="${escapeHtml(titleTxt)}" loading="lazy">` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#94A3B8;">${getSymbolIcon('film', 24)}</div>`}
                  <span class="short-dur-pill">${formatDurationMMSS(durSec)}</span>
                </div>
                <div class="short-title-text" style="font-size:0.84rem;" title="${escapeHtml(titleTxt)}">${escapeHtml(titleTxt)}</div>
                <div style="font-size:0.74rem; color:#A5B4FC; font-weight:700;">จาก: ${escapeHtml(rec.fromName || 'ผู้ใช้งาน')}</div>
                ${rec.note ? `<div style="font-size:0.72rem; color:#CBD5E1; background:rgba(255,255,255,0.08); padding:4px 7px; border-radius:7px;">${escapeHtml(rec.note)}</div>` : ''}
                ${sentDate ? `<div style="font-size:0.68rem; color:#94A3B8;">${escapeHtml(sentDate)}</div>` : ''}
                <button class="btn btn-primary" style="min-height:32px; padding:4px 8px; font-size:0.75rem; margin-top:auto;" onclick="openShortPlayer('${escapeHtml(rec.shortId)}')">${getSymbolIcon('play', 13)} เปิดดูคลิป</button>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      recSec.classList.add("hidden");
      recContainer.innerHTML = "";
    }
  }

  const userKey = currentUser.isLoggedIn ? currentUser.email.toLowerCase() : "";
  const likedIds = Array.isArray(currentUser.likedShorts) ? currentUser.likedShorts : [];
  const likedItems = cachedShortsMeta.filter(s =>
    likedIds.includes(s.id) || (Array.isArray(s.likedBy) && userKey && s.likedBy.includes(userKey))
  );

  if (badgeEl) badgeEl.innerText = likedItems.length;

  if (likedItems.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:32px; background:#F8FAFC; border:1px dashed #CBD5E1; border-radius:14px; color:#64748B; font-size:0.88rem; display:flex; align-items:center; justify-content:center; gap:8px;">
        <span class="svg-ico" style="color:#EF4444;">${getSymbolIcon('heart', 18)}</span>
        <span>ยังไม่มีคลิปสั้นที่กดถูกใจ</span>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="liked-shorts-grid">
      ${likedItems.map(item => `
        <div style="background:#0F0F0F; color:#F4F4F5; border-radius:14px; padding:10px; border:1px solid #27272A; display:flex; flex-direction:column; gap:8px;">
          <div class="short-thumb-wrap" style="cursor:pointer;" onclick="openShortPlayer('${item.id}')">
            <img class="short-thumb-img" src="${item.thumbDataUrl || ''}" alt="${escapeHtml(item.title)}" loading="lazy">
            <span class="short-dur-pill">${formatDurationMMSS(item.durationSec)}</span>
          </div>
          <div class="short-title-text" style="font-size:0.84rem;" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</div>
          <div style="display:flex; gap:6px; margin-top:auto;">
            <button class="btn btn-primary" style="flex:1; min-height:32px; padding:4px 8px; font-size:0.75rem;" onclick="openShortPlayer('${item.id}')">${getSymbolIcon('play', 13)} เปิดดูซ้ำ</button>
            <button class="btn btn-outline" style="min-height:32px; padding:4px 8px; font-size:0.75rem; background:#18181B; color:#FDA4AF; border-color:#3F3F46;" onclick="unlikeShortFromAccount('${item.id}')" title="ยกเลิกถูกใจ">${getSymbolIcon('x', 13)}</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

async function unlikeShortFromAccount(shortId) {
  if (!currentUser || !currentUser.isLoggedIn) return;
  const userKey = currentUser.email.toLowerCase();
  await DataService.Shorts.updateMeta(shortId, (cur) => {
    const likedBy = Array.isArray(cur.likedBy) ? cur.likedBy.filter(k => k !== userKey) : [];
    return { ...cur, likedBy, likes: likedBy.length };
  });
  if (Array.isArray(currentUser.likedShorts)) {
    currentUser.likedShorts = currentUser.likedShorts.filter(id => id !== shortId);
  }
  saveCurrentProgress();
  await refreshShortsUI();
  renderAccountLikedShorts();
  showToast("นำคลิปออกจากรายการถูกใจแล้ว", "info");
}

function renderAccountHistoryAndBadges() {
  const badgesGrid = document.getElementById("accBadgesGrid");
  const tbody = document.getElementById("accUnitScoresTbody");
  const timeline = document.getElementById("accActivityTimeline");
  const rewardsBox = document.getElementById("accTeacherRewardsBox");
  const rewardsList = document.getElementById("accCustomRewardsList");
  if (!badgesGrid || !tbody || !timeline) return;

  const earnedSet = new Set(currentUser.badges || []);
  badgesGrid.innerHTML = BADGE_CATALOG.map(b => {
    const unlocked = earnedSet.has(b.id) || currentUser.role === 'teacher';
    return `
      <div class="badge-tile ${unlocked ? 'unlocked' : 'locked'}">
        <div class="badge-ico-ring">${getSymbolIcon(unlocked ? b.icon : 'lock', 20)}</div>
        <div style="font-weight:800; font-size:0.82rem; color:#0F172A;">${b.name}</div>
        <div style="font-size:0.72rem; color:#64748B; margin-top:2px;">${b.desc}</div>
      </div>
    `;
  }).join("");

  if (rewardsBox && rewardsList) {
    const custRewards = Array.isArray(currentUser.customRewards) ? currentUser.customRewards : [];
    rewardsBox.classList.toggle("hidden", custRewards.length === 0);
    rewardsList.innerHTML = custRewards.map(rw => `
      <span class="reward-chip" style="padding:6px 12px; font-size:0.8rem;">
        ${getSymbolIcon('gift', 14)} ${escapeHtml(rw.rewardTitle)} (+${Number(rw.xpReward || 0)} XP)
      </span>
    `).join("");
  }

  let rowsHtml = "";
  for (let u = 1; u <= 5; u++) {
    const st = (currentUser.units && currentUser.units[u]) ? currentUser.units[u] : {};
    const preTxt = st.preDone ? `<span class="score-badge score-pass">${st.preScore}/10</span>` : `<span class="score-badge score-pending">ยังไม่สอบ</span>`;
    const postTxt = st.postDone ? `<span class="score-badge score-pass">${st.postScore}/10</span>` : `<span class="score-badge score-pending">ยังไม่สอบ</span>`;
    const unlockedCount = st.preDone ? ((st.unlockedTopicIdx || 0) + 1) : 0;
    const statusTxt = st.postDone
      ? `<span style="color:#059669; font-weight:800; display:inline-flex; align-items:center; gap:4px;">${getSymbolIcon('checkCircle', 14)} ผ่านหน่วยนี้แล้ว</span>`
      : (st.preDone ? `<span style="color:#D97706; font-weight:700; display:inline-flex; align-items:center; gap:4px;">${getSymbolIcon('play', 14)} กำลังเรียน</span>` : `<span style="color:#64748B;">รอเริ่มเรียน</span>`);
    rowsHtml += `
      <tr>
        <td style="text-align:left; font-weight:700;">${curriculumData[u].title}</td>
        <td>${preTxt}</td>
        <td>${postTxt}</td>
        <td>${unlockedCount} / 5 หัวข้อ</td>
        <td>${statusTxt}</td>
      </tr>
    `;
  }
  tbody.innerHTML = rowsHtml;

  const hist = Array.isArray(currentUser.activityHistory) ? [...currentUser.activityHistory].reverse() : [];
  if (hist.length === 0) {
    timeline.innerHTML = `<div style="color:#64748B; font-size:0.85rem; padding:12px;">ยังไม่มีประวัติกิจกรรมการเรียน เริ่มเข้าเรียนหน่วยที่ 1 เพื่อบันทึกไทม์ไลน์ของคุณ</div>`;
    return;
  }

  const typeIcons = {
    register: "sparkles",
    login: "logIn",
    pre_test: "clipboardCheck",
    study_topic: "bookOpen",
    post_test: "trophy",
    like_short: "heartFilled",
    comment_short: "messageCircle",
    share_short: "share2",
    lab_xp: "flask",
    teacher_quest: "gift",
    kahoot_join: "gamepad",
    profile_update: "edit2"
  };
  timeline.innerHTML = hist.map((act, idx) => {
    const dStr = new Date(act.timestamp).toLocaleString('th-TH', {
      day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit'
    });
    return `
      <div class="timeline-item">
        <div style="width:34px; height:34px; border-radius:10px; background:#EEF2FF; color:#4F46E5; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0;">
          ${getSymbolIcon(typeIcons[act.type] || "activity", 17)}
        </div>
        <div style="flex:1;">
          <div style="font-weight:700; font-size:0.86rem; color:#0F172A;">
            ${escapeHtml(act.detail)} ${idx === 0 ? '<span style="background:#EEF2FF; color:#4F46E5; font-size:0.68rem; padding:2px 7px; border-radius:99px; margin-left:4px;">ล่าสุด</span>' : ''}
          </div>
          <div style="font-size:0.74rem; color:#64748B; margin-top:2px; display:inline-flex; align-items:center; gap:5px;">
            ${getSymbolIcon('clock', 12)} ${dStr} · หน่วยที่ ${act.unitId || 1}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// =========================================================
// 6. UNITS, PRE-TEST & POST-TEST ENGINE (STRICT SEQUENTIAL ORDER)
// =========================================================
let activeUnitId = 1;
let activeTopicIdx = 0;
let currentQuizList = [];
let currentQuizIdx = 0;
let currentQuizScore = 0;
let quizTimer = null;
let quizTimeLeft = 20;
let selectedAnswer = null;

function renderUnitCards() {
  const grid = document.getElementById("unitSelectionGrid");
  grid.innerHTML = "";

  for (let u = 1; u <= 5; u++) {
    const uData = curriculumData[u];
    const uProgress = currentUser.units ? currentUser.units[u] : { postDone: false, preDone: false, unlockedTopicIdx: 0 };
    const isPrevDone = (u === 1) ? true : (currentUser.units && currentUser.units[u - 1].postDone);
    const isLocked = !isPrevDone && currentUser.role !== 'teacher';

    const card = document.createElement("div");
    card.className = "unit-card";
    card.style.borderTop = `5px solid ${uData.color}`;

    let statusBadge = `<span style="color: #64748B; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('lock', 14)} ล็อก · ผ่านหน่วยที่ ${u-1} ก่อน</span>`;
    if (!isLocked) {
      if (uProgress && uProgress.postDone) {
        statusBadge = `<span style="color: #10B981; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('checkCircle', 14)} ผ่านแล้ว · ${uProgress.postScore}/10</span>`;
      } else if (uProgress && uProgress.preDone) {
        const unlockedCnt = (uProgress.unlockedTopicIdx || 0) + 1;
        statusBadge = `<span style="color: #F59E0B; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('gamepad', 14)} กำลังเรียน · ${unlockedCnt}/5 หัวข้อ</span>`;
      } else {
        statusBadge = `<span style="color: #4F46E5; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('play', 14)} พร้อมเริ่มแบบทดสอบก่อนเรียน</span>`;
      }
    }

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div class="unit-badge" style="background: ${uData.color};">หน่วยที่ ${u}</div>
        <span style="font-size:0.75rem; font-weight:700; color:#64748B;">5 มินิเกม</span>
      </div>
      <h3 style="font-size: 1.05rem; margin: 6px 0; color: #0F172A;">${uData.title.replace(`หน่วย ${u} `, '')}</h3>
      <p style="font-size: 0.8rem; color: #64748B; line-height: 1.45;">ก่อนเรียน 10 ข้อ &rarr; 5 หัวข้อเรียงลำดับ &amp; มินิเกม &rarr; หลังเรียน 10 ข้อ</p>
      <div style="font-size: 0.82rem; margin-top: 10px; font-weight: 700; padding-top: 8px; border-top: 1px dashed #E2E8F0;">${statusBadge}</div>
    `;

    if (!isLocked) card.onclick = () => selectUnitToStudy(u);
    else { card.style.opacity = "0.62"; card.style.cursor = "not-allowed"; }

    grid.appendChild(card);
  }
  renderHomeDashboard();
}

function selectUnitToStudy(uId) {
  if (uId > 1 && currentUser.role !== 'teacher') {
    const prevDone = currentUser.units && currentUser.units[uId - 1]?.postDone;
    if (!prevDone) {
      showToast(`กรุณาเรียนและผ่านแบบทดสอบหลังเรียนหน่วยที่ ${uId - 1} ก่อนตามลำดับ`, "warning");
      return;
    }
  }
  activeUnitId = uId;
  document.getElementById("studyUnitBadgeHeader").innerText = `หน่วยที่ ${uId}: ${curriculumData[uId].title.replace(`หน่วย ${uId} `, '')}`;
  document.getElementById("studyUnitBadgeHeader").style.background = curriculumData[uId].color;

  document.getElementById("unitListView").classList.add("hidden");
  document.getElementById("unitStudyContainer").classList.remove("hidden");

  const uProgress = currentUser.units ? currentUser.units[uId] : null;
  if (!uProgress || (!uProgress.preDone && currentUser.role !== 'teacher')) {
    startUnitPreTest(uId);
  } else {
    showUnitContent(uId);
  }
}

function backToUnitList() {
  stopTopicAudio();
  clearInterval(quizTimer);
  document.getElementById("unitStudyContainer").classList.add("hidden");
  document.getElementById("unitListView").classList.remove("hidden");
  renderUnitCards();
}

function startUnitPreTest(uId) {
  stopTopicAudio();
  document.getElementById("pillPre").className = "step-pill active";
  document.getElementById("pillContent").className = "step-pill";
  document.getElementById("pillPost").className = "step-pill";

  document.getElementById("unitPreTestArea").classList.remove("hidden");
  document.getElementById("unitContentArea").classList.add("hidden");
  document.getElementById("unitPostTestArea").classList.add("hidden");

  document.getElementById("preUnitTitle").innerText = `หน่วย ${uId}`;

  const rawBank = fullQuestionBank[uId];
  const sampled = [...rawBank].sort(() => Math.random() - 0.5).slice(0, 10);

  currentQuizList = sampled.map(item => {
    const correctText = item.opts[item.ans];
    const shuffledOpts = [...item.opts].sort(() => Math.random() - 0.5);
    return {
      q: item.q.replace(/^\d+[\.\)]\s*/, ''),
      opts: shuffledOpts,
      ansIdx: shuffledOpts.indexOf(correctText)
    };
  });

  currentQuizIdx = 0;
  currentQuizScore = 0;
  renderPreQuestion();
}

function renderPreQuestion() {
  clearInterval(quizTimer);
  selectedAnswer = null;
  document.getElementById("btnPreNext").disabled = true;

  if (currentQuizIdx >= currentQuizList.length) {
    if (currentUser.units) {
      normalizeUserRecord(currentUser);
      currentUser.units[activeUnitId].preDone = true;
      currentUser.units[activeUnitId].preScore = currentQuizScore;
      currentUser.units[activeUnitId].unlockedTopicIdx = Math.max(0, currentUser.units[activeUnitId].unlockedTopicIdx || 0);
      currentUser.units[activeUnitId].lastTopicIdx = 0;
      currentUser.currentUnit = activeUnitId;
      currentUser.currentTopicIdx = 0;
      currentUser.currentTopic = topicTitles[activeUnitId][0];
      addXpReward(50, "จบแบบทดสอบก่อนเรียน");
      recordUserActivity("pre_test", activeUnitId, `ทำแบบทดสอบก่อนเรียน หน่วยที่ ${activeUnitId} ได้ ${currentQuizScore}/10`);
      trackDailyQuestProgress('studyOrQuiz');
      saveCurrentProgress();
    }
    launchConfetti();
    showToast(`ทำแบบทดสอบก่อนเรียนหน่วยที่ ${activeUnitId} ครบ 10 ข้อแล้ว! คะแนน: ${currentQuizScore}/10 (+50 XP)`, "success");
    showUnitContent(activeUnitId);
    return;
  }

  document.getElementById("preQIdx").innerText = currentQuizIdx + 1;
  const q = currentQuizList[currentQuizIdx];
  document.getElementById("preQText").innerText = `${currentQuizIdx + 1}. ${q.q}`;

  const container = document.getElementById("preOptions");
  container.innerHTML = "";

  q.opts.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn animate-fade";
    btn.innerText = `${String.fromCharCode(65 + idx)}. ${optText}`;
    btn.onclick = () => {
      document.querySelectorAll("#preOptions .option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = idx;
      document.getElementById("btnPreNext").disabled = false;
    };
    container.appendChild(btn);
  });

  quizTimeLeft = 20;
  document.getElementById("preTimer").innerText = quizTimeLeft;
  quizTimer = setInterval(() => {
    quizTimeLeft--;
    document.getElementById("preTimer").innerText = quizTimeLeft;
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      nextUnitPreQuestion();
    }
  }, 1000);
}

function nextUnitPreQuestion() {
  clearInterval(quizTimer);
  if (selectedAnswer === currentQuizList[currentQuizIdx].ansIdx) currentQuizScore++;
  currentQuizIdx++;
  renderPreQuestion();
}

function showUnitContent(uId) {
  document.getElementById("pillPre").className = "step-pill done";
  document.getElementById("pillContent").className = "step-pill active";
  document.getElementById("pillPost").className = (currentUser.units && currentUser.units[uId].postDone) ? "step-pill done" : "step-pill";

  document.getElementById("unitPreTestArea").classList.add("hidden");
  document.getElementById("unitContentArea").classList.remove("hidden");
  document.getElementById("unitPostTestArea").classList.add("hidden");

  const uData = curriculumData[uId];
  document.getElementById("currentUnitHeading").innerHTML = `<span class="svg-ico" style="color:#4F46E5;">${getSymbolIcon('gamepad', 20)}</span> <span>${escapeHtml(uData.title)}: บทเรียน &amp; มินิเกมจำลอง</span>`;

  const uProgress = (currentUser.units && currentUser.units[uId]) ? currentUser.units[uId] : { unlockedTopicIdx: 0, lastTopicIdx: 0 };
  const unlockedMax = (currentUser.role === 'teacher') ? 4 : (uProgress.unlockedTopicIdx || 0);
  const startTopicIdx = (currentUser.role === 'teacher') ? 0 : Math.min(uProgress.lastTopicIdx || 0, unlockedMax);

  const tabContainer = document.getElementById("topicSubtabs");
  tabContainer.innerHTML = "";

  topicTitles[uId].forEach((title, idx) => {
    const btn = document.createElement("button");
    btn.className = "subtab-btn";
    btn.id = `subtabBtn_${idx}`;
    btn.onclick = () => setTopicIndex(idx);
    tabContainer.appendChild(btn);
  });

  setTopicIndex(startTopicIdx);
}

function refreshTopicSubtabLocks() {
  const titles = topicTitles[activeUnitId];
  const uProgress = (currentUser.units && currentUser.units[activeUnitId]) ? currentUser.units[activeUnitId] : null;
  const unlockedMax = (currentUser.role === 'teacher') ? 4 : (uProgress ? (uProgress.unlockedTopicIdx || 0) : 0);

  titles.forEach((title, i) => {
    const b = document.getElementById(`subtabBtn_${i}`);
    if (!b) return;
    const isLocked = (currentUser.role !== 'teacher') && (i > unlockedMax);
    const isDone = (i < unlockedMax) || (uProgress && uProgress.contentRead && i <= unlockedMax && i !== activeTopicIdx);
    b.disabled = isLocked;
    b.className = "subtab-btn";
    if (i === activeTopicIdx) b.classList.add("active");
    else if (isLocked) b.classList.add("locked");
    else if (isDone) b.classList.add("done-topic");

    const shortTitle = escapeHtml(title.split("(")[0].trim());
    if (isLocked) {
      b.innerHTML = `<span class="svg-ico">${getSymbolIcon('lock', 13)}</span> <span>${shortTitle}</span>`;
    } else if (i < unlockedMax || uProgress?.postDone) {
      b.innerHTML = `<span class="svg-ico">${getSymbolIcon('check', 13)}</span> <span>${shortTitle}</span>`;
    } else {
      b.innerHTML = `<span>${shortTitle}</span>`;
    }
  });

  const finishBtn = document.getElementById("btnFinishToPostTest");
  if (finishBtn) {
    const canPost = (currentUser.role === 'teacher') || (unlockedMax >= titles.length - 1);
    finishBtn.disabled = !canPost;
    finishBtn.innerHTML = canPost
      ? `<span class="svg-ico">${getSymbolIcon('trophy', 16)}</span> <span>จบการศึกษา &rarr; ทำแบบทดสอบหลังเรียน</span>`
      : `<span class="svg-ico">${getSymbolIcon('lock', 15)}</span> <span>เรียนให้ครบ ${titles.length} หัวข้อก่อนทำแบบทดสอบหลังเรียน (${unlockedMax + 1}/${titles.length})</span>`;
  }
}

function setTopicIndex(idx) {
  stopTopicAudio();
  const titles = topicTitles[activeUnitId];
  if (idx < 0 || idx >= titles.length) return;

  const uProgress = (currentUser.units && currentUser.units[activeUnitId]) ? currentUser.units[activeUnitId] : null;
  const unlockedMax = (currentUser.role === 'teacher') ? 4 : (uProgress ? (uProgress.unlockedTopicIdx || 0) : 0);

  if (idx > unlockedMax && currentUser.role !== 'teacher') {
    playSfx('error');
    showToast("กรุณาศึกษาหัวข้อก่อนหน้าตามลำดับก่อนเข้าหัวข้อนี้", "warning");
    return;
  }

  activeTopicIdx = idx;
  if (currentUser.role !== 'teacher' && uProgress) {
    if (activeTopicIdx >= titles.length - 1) {
      uProgress.contentRead = true;
    }
    uProgress.lastTopicIdx = activeTopicIdx;
    currentUser.currentUnit = activeUnitId;
    currentUser.currentTopicIdx = activeTopicIdx;
    currentUser.currentTopic = titles[activeTopicIdx];
    recordUserActivity("study_topic", activeUnitId, `เข้าศึกษาหัวข้อ ${titles[activeTopicIdx].split("(")[0].trim()}`);
    saveCurrentProgress();
  }

  refreshTopicSubtabLocks();

  const activeBtn = document.getElementById(`subtabBtn_${activeTopicIdx}`);
  if (activeBtn) activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

  renderInteractiveSandbox(activeUnitId, activeTopicIdx);
  updateTopicNavButtons();
}

function navigateTopic(direction) {
  const titles = topicTitles[activeUnitId];
  const nextIdx = activeTopicIdx + direction;
  if (direction > 0 && currentUser.role !== 'teacher' && currentUser.units && currentUser.units[activeUnitId]) {
    const st = currentUser.units[activeUnitId];
    if (nextIdx <= titles.length - 1 && (st.unlockedTopicIdx || 0) < nextIdx) {
      st.unlockedTopicIdx = nextIdx;
      if (nextIdx === titles.length - 1) st.contentRead = true;
      trackDailyQuestProgress('studyOrQuiz');
    }
  }
  setTopicIndex(nextIdx);
}

function updateTopicNavButtons() {
  const totalTopics = topicTitles[activeUnitId].length;
  const btnPrev = document.getElementById("btnPrevTopic");
  const btnNext = document.getElementById("btnNextTopic");
  const indicator = document.getElementById("topicIndicatorText");

  indicator.innerText = `หัวข้อ ${activeTopicIdx + 1} / ${totalTopics}`;
  btnPrev.disabled = (activeTopicIdx === 0);

  if (activeTopicIdx === totalTopics - 1) {
    btnNext.innerHTML = `<span>ทำแบบทดสอบหลังเรียน</span> <span class="svg-ico">${getSymbolIcon('arrowRight', 15)}</span>`;
    btnNext.className = "btn btn-success topic-nav-btn";
    btnNext.onclick = finishStudyingAndUnlockPost;
  } else {
    btnNext.innerHTML = `<span>หัวข้อถัดไป</span> <span class="svg-ico">${getSymbolIcon('arrowRight', 15)}</span>`;
    btnNext.className = "btn btn-primary topic-nav-btn";
    btnNext.onclick = () => navigateTopic(1);
  }
}
// =========================================================
// 7. UPGRADED INTERACTIVE MINI-GAMES & SANDBOXES (ALL 25 TOPICS)
// =========================================================
function renderInteractiveSandbox(uId, tIdx) {
  const container = document.getElementById("interactiveLabBox");
  const title = topicTitles[uId][tIdx];
  const key = `${uId}_${tIdx}`;
  const c = detailedConcepts[key] || { how: "", syntax: "", extra: "", analogy: "", pitfall: "" };

  let explanationHtml = `
    <div class="concept-deep-dive animate-fade">
      <h5>${getSymbolIcon('mapPin', 16, 'color:#4F46E5;')} กลไกการทำงานเชิงลึก (How it works):</h5>
      <p>${c.how}</p>
      <h5 style="margin-top:10px;">${getSymbolIcon('terminal', 16, 'color:#0EA5E9;')} รูปแบบไวยากรณ์และการนำไปใช้ (Syntax &amp; Code Example):</h5>
      <pre style="background:#0F172A; padding:12px 14px; border-radius:12px; font-family:'Fira Code'; font-size:0.85rem; color:#F8FAFC; overflow-x:auto; border:1px solid #334155;">${c.syntax}</pre>
      ${c.extra ? `<div class="concept-extra-tip">${getSymbolIcon('bookOpen', 16, 'color:#2563EB;')} <b>เกร็ดความรู้เพิ่มเติมระดับโปร:</b> ${c.extra}</div>` : ''}
      <div class="concept-analogy-box">
        ${getSymbolIcon('lightbulb', 16, 'color:#D97706;')} <b>ตัวอย่างเปรียบเทียบให้เห็นภาพ:</b> ${c.analogy}
      </div>
      <div class="concept-pitfall-box">
        ${getSymbolIcon('alertTriangle', 16, 'color:#DC2626;')} <b>ข้อควรระวัง / จุดที่มักเขียนผิดบ่อย:</b> ${c.pitfall}
      </div>
    </div>
  `;

  let labHtml = "";

  // Unit 1 Mini-Games
  if (uId === 1) {
    if (tIdx === 0) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('gamepad', 18, 'color:#4F46E5;')} มินิเกม: เครื่องถอดรหัส 3 ยุคภาษาคอมพิวเตอร์ (Language Decoder)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดสำรวจครบทั้ง 3 ระดับและลองแปลงคำสั่ง (+15 XP)</span>
          </div>
          <div class="visual-stage" id="u1_lang_stage">
            <div style="margin-bottom:6px; color:#4F46E5; animation: bounceIcon 2s infinite;" id="u1_lang_icon">${getSymbolIcon('zap', 38)}</div>
            <div id="u1_lang_display" style="font-size: 1.15rem; font-weight: 800; color: #4F46E5; font-family:'Fira Code';">High-Level (C): int score = 100;</div>
            <div id="u1_lang_desc" style="font-size: 0.9rem; color: #475569; margin-top: 6px;">มนุษย์เขียนและอ่านเข้าใจได้ทันที พัฒนาโปรแกรมได้รวดเร็วและย้ายข้ามเครื่องได้</div>
            <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap; justify-content:center;">
              <span style="font-size:0.78rem; background:#EEF2FF; color:#4338CA; padding:3px 10px; border-radius:99px; font-weight:700; display:inline-flex; align-items:center; gap:3px;" id="u1_lang_speed">ความเร็วคนเขียน: ${getSymbolIcon('starFilled', 13, 'color:#F59E0B;')}${getSymbolIcon('starFilled', 13, 'color:#F59E0B;')}${getSymbolIcon('starFilled', 13, 'color:#F59E0B;')}${getSymbolIcon('starFilled', 13, 'color:#F59E0B;')}${getSymbolIcon('starFilled', 13, 'color:#F59E0B;')}</span>
              <span style="font-size:0.78rem; background:#DCFCE7; color:#15803D; padding:3px 10px; border-radius:99px; font-weight:700;" id="u1_lang_cpu">ความเข้าใจของ CPU: ต้องใช้ Compiler แปลง</span>
            </div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="setLangLevel(1)">1. ภาษาเครื่อง (0101 Binary)</button>
            <button class="btn btn-outline" onclick="setLangLevel(2)">2. ภาษาแอสเซมบลี (MOV/ADD)</button>
            <button class="btn btn-primary" onclick="setLangLevel(3)">3. ภาษาระดับสูง (ภาษา C)</button>
            <button class="btn btn-success" onclick="animateCpuTranslate()">${getSymbolIcon('zap', 15)} จำลองการส่งเข้า CPU (+15 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 1) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('repeat', 18, 'color:#4F46E5;')} มินิเกม: เรียงลำดับวงจรพัฒนาโปรแกรม 5 ขั้นตอน (PDLC Pipeline Simulator)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดรันจำลองโครงการตั้งแต่ขั้นที่ 1 ถึง 5</span>
          </div>
          <div class="visual-stage" id="pdlc_stage" style="background:#EEF2FF; border-color:#C7D2FE;">
            <div style="color:#4F46E5; animation: bounceIcon 1.8s infinite;">${getSymbolIcon('search', 38)}</div>
            <div style="font-weight:800; font-size:1.15rem; color:#4F46E5; margin-top:4px;">ขั้นที่ 1: การวิเคราะห์ปัญหา (Problem Analysis)</div>
            <p style="font-size:0.9rem; color:#334155; margin-top:4px;">ระบุ Input (คะแนนดิบ), Process (ตรวจเกณฑ์ >= 50), และ Output (ผลสอบ ผ่าน/ตก)</p>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="setPdlcStep(1)">1. วิเคราะห์</button>
            <button class="btn btn-outline" onclick="setPdlcStep(2)">2. ออกแบบ</button>
            <button class="btn btn-outline" onclick="setPdlcStep(3)">3. เขียนโค้ด</button>
            <button class="btn btn-outline" onclick="setPdlcStep(4)">4. ทดสอบบั๊ก</button>
            <button class="btn btn-outline" onclick="setPdlcStep(5)">5. บำรุงรักษา</button>
            <button class="btn btn-primary" onclick="autoRunPdlcPipeline()">${getSymbolIcon('play', 15)} รันอัตโนมัติครบ 5 ขั้น (+15 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 2) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('zap', 18, 'color:#4F46E5;')} มินิเกม: จำลองเส้นทางผังงานตัดสินใจ (Flowchart Interactive Runner)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: เลื่อนปรับคะแนนและกดปล่อยกระแสข้อมูลวิ่งผ่านผังงาน</span>
          </div>
          <div class="visual-stage">
            <div style="font-size:0.95rem; color:#334155; font-weight:600;">
              กำหนดข้อมูลนำเข้า (Input Score): <strong id="u1_fc_score_text" style="color:#4F46E5; font-size:1.4rem;">65</strong> / 100
            </div>
            <input type="range" class="slider-ui" id="u1_fc_slider" min="0" max="100" value="65" oninput="updateFlowchartRunner(this.value)" style="margin:10px 0;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; justify-content:center; margin-top:6px;">
              <div style="padding:6px 14px; border-radius:99px; background:#E0E7FF; color:#3730A3; font-weight:700; font-size:0.82rem; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('circleDot', 14)} START</div>
              <span>${getSymbolIcon('arrowRight', 16, 'color:#64748B;')}</span>
              <div style="padding:6px 14px; transform:skewX(-12deg); background:#FEF3C7; color:#92400E; font-weight:700; font-size:0.82rem; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('box', 14)} Read Score</div>
              <span>${getSymbolIcon('arrowRight', 16, 'color:#64748B;')}</span>
              <div style="padding:8px 14px; border:2px solid #4F46E5; border-radius:8px; background:#EEF2FF; color:#4F46E5; font-weight:800; font-size:0.82rem; display:inline-flex; align-items:center; gap:5px;">${getSymbolIcon('diamond', 14)} Score >= 50 ?</div>
            </div>
            <div id="u1_fc_box" style="margin-top:14px; padding:12px 20px; border-radius:14px; background:#DCFCE7; color:#15803D; font-weight:800; border:2px solid #22C55E; transition:all 0.3s ease;">
              ${getSymbolIcon('circleFilled', 14, 'color:#15803D;')} เงื่อนไข (65 >= 50) เป็นจริง (True) &rarr; วิ่งไปเส้นทางขวา: แสดงผล "สอบผ่าน (PASS)"
            </div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="updateFlowchartRunner(35); document.getElementById('u1_fc_slider').value=35;">ลองคะแนน 35 (เท็จ)</button>
            <button class="btn btn-outline" onclick="updateFlowchartRunner(50); document.getElementById('u1_fc_slider').value=50;">ลองคะแนน 50 (เส้นแบ่ง)</button>
            <button class="btn btn-primary" onclick="updateFlowchartRunner(88); document.getElementById('u1_fc_slider').value=88; claimLabXpOnce('lab_1_2', 10, 'จำลองผังงาน Flowchart');">ลองคะแนน 88 (จริง +10 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 3) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('fileText', 18, 'color:#4F46E5;')} มินิเกม: จับคู่แปลงรหัสเทียมเป็นโค้ดภาษา C (Pseudocode Translator)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: คลิกทีละบรรทัดเพื่อดูการแปลงร่างจากรหัสเทียมสู่ภาษา C</span>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:12px; margin-top:8px;">
            <div class="code-mirror-box" style="background:#1E293B;">
              <div style="color:#FCD34D; font-weight:700; margin-bottom:6px;">${getSymbolIcon('clipboardList', 15)} รหัสเทียม (คลิกที่บรรทัด):</div>
              <div style="cursor:pointer; padding:3px 6px; border-radius:6px;" onclick="highlightPseudoLine(1)">1. START</div>
              <div style="cursor:pointer; padding:3px 6px; border-radius:6px;" onclick="highlightPseudoLine(2)">2. INPUT price, qty</div>
              <div style="cursor:pointer; padding:3px 6px; border-radius:6px;" onclick="highlightPseudoLine(3)">3. SET total = price * qty</div>
              <div style="cursor:pointer; padding:3px 6px; border-radius:6px;" onclick="highlightPseudoLine(4)">4. PRINT total</div>
              <div style="cursor:pointer; padding:3px 6px; border-radius:6px;" onclick="highlightPseudoLine(5)">5. END</div>
            </div>
            <div class="code-mirror-box" id="pseudo_c_target">
              <div style="color:#38BDF8; font-weight:700; margin-bottom:6px;">${getSymbolIcon('terminal', 15)} โค้ดภาษา C ที่สอดคล้องกัน:</div>
              <div id="pc_line_1">int main() {</div>
              <div id="pc_line_2">&nbsp;&nbsp;scanf("%d %d", &price, &qty);</div>
              <div id="pc_line_3">&nbsp;&nbsp;int total = price * qty;</div>
              <div id="pc_line_4">&nbsp;&nbsp;printf("Total = %d", total);</div>
              <div id="pc_line_5">&nbsp;&nbsp;return 0; }</div>
            </div>
          </div>
          <div id="pseudo_explain_bar" style="margin-top:10px; padding:10px 14px; background:white; border-radius:12px; border:1px solid #CBD5E1; font-size:0.88rem; font-weight:600; color:#4F46E5; text-align:center;">
            ${getSymbolIcon('info', 15)} คลิกที่บรรทัดรหัสเทียมฝั่งซ้ายเพื่อดูการจับคู่คำสั่งภาษา C
          </div>
        </div>`;
    } else {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('settings', 18, 'color:#4F46E5;')} มินิเกม: ห้องทดลอง IDE Compiler & Debugger</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ลองซ่อมโค้ดที่มีบั๊กให้ Compile ผ่าน 100%</span>
          </div>
          <div class="code-mirror-box" id="ide_code_editor">
            #include &lt;stdio.h&gt;<br>
            int main() {<br>
            &nbsp;&nbsp;printf("Welcome to C Compiler!")<span id="ide_semicolon" style="color:#EF4444; font-weight:800; background:rgba(239,68,68,0.2); padding:0 4px;">[ลืม ;]</span><br>
            &nbsp;&nbsp;return 0;<br>
            }
          </div>
          <div class="visual-stage" id="compile_stage_box" style="min-height:100px; margin-top:10px;">
            <span style="color:#64748B; font-weight:600;">กดปุ่มด้านล่างเพื่อทดสอบการ Compile หรือซ่อมบั๊ก Syntax Error</span>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-danger" onclick="simulateBugCompile()">${getSymbolIcon('bug', 15)} ลอง Compile ตอนลืมใส่ ;</button>
            <button class="btn btn-success" onclick="simulateCompile()">${getSymbolIcon('wrench', 15)} เติม ; และกด Compile & Run (+15 XP)</button>
          </div>
        </div>`;
    }
  }
  // Unit 2 Mini-Games
  else if (uId === 2) {
    if (tIdx === 0) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('microscope', 18, 'color:#4F46E5;')} มินิเกม: ผ่าตัดโครงสร้างโปรแกรมภาษาซี (C Anatomy Inspector)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: แตะสำรวจแต่ละส่วนของโค้ดเพื่อดูการทำงานในระดับ CPU</span>
          </div>
          <div class="code-mirror-box">
            <span class="code-hl" style="cursor:pointer; margin-bottom:4px;" onclick="explainCCode(1)">1. #include &lt;stdio.h&gt;  // Preprocessor Directive</span>
            <span style="cursor:pointer; color:#38BDF8; display:block; padding:2px 6px;" onclick="explainCCode(2)">2. int main() {        // Entry Point Function</span>
            <span style="cursor:pointer; color:#A7F3D0; display:block; padding:2px 6px;" onclick="explainCCode(3)">3. &nbsp;&nbsp;printf("Hello C Pro!\\n"); // Statement</span>
            <span style="cursor:pointer; color:#FCD34D; display:block; padding:2px 6px;" onclick="explainCCode(4)">4. &nbsp;&nbsp;return 0;         // Exit Status</span>
            <span style="color:#F8FAFC; display:block; padding:2px 6px;">5. }</span>
          </div>
          <div class="visual-stage" id="c_explain_stage" style="background:#EEF2FF; border-color:#A5B4FC; font-weight:700; color:#1E293B;">
            ${getSymbolIcon('info', 16, 'color:#4F46E5;')} คลิกที่บรรทัดโค้ดหมายเลข 1 ถึง 4 เพื่อส่องกล้องจุลทรรศน์ดูหน้าที่การทำงาน
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="explainCCode(1)">ส่วนที่ 1 (#include)</button>
            <button class="btn btn-outline" onclick="explainCCode(2)">ส่วนที่ 2 (main)</button>
            <button class="btn btn-outline" onclick="explainCCode(3)">ส่วนที่ 3 (printf)</button>
            <button class="btn btn-outline" onclick="explainCCode(4)">ส่วนที่ 4 (return 0)</button>
          </div>
        </div>`;
    } else if (tIdx === 1) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('tag', 18, 'color:#4F46E5;')} มินิเกม: เครื่องสแกนกฎการตั้งชื่อตัวแปร (Identifier Validator)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: พิมพ์ชื่อตัวแปรหรือกดปุ่มทดสอบเพื่อตรวจจับชื่อที่ถูกและผิดกฎ</span>
          </div>
          <input type="text" id="var_input_test" class="input-field" placeholder="ลองพิมพ์ชื่อตัวแปร เช่น student_score, 1stPlace, my-name, float" oninput="validateVariableName(this.value)">
          <div class="visual-stage" id="var_validate_box">
            <div style="color:#64748B; font-weight:600;">${getSymbolIcon('keyboard', 16)} พิมพ์ชื่อตัวแปรในช่องด้านบน หรือกดปุ่มตัวอย่างด้านล่าง...</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="document.getElementById('var_input_test').value='total_score_1'; validateVariableName('total_score_1');">ลอง: total_score_1</button>
            <button class="btn btn-outline" onclick="document.getElementById('var_input_test').value='2ndPlayer'; validateVariableName('2ndPlayer');">ลอง: 2ndPlayer</button>
            <button class="btn btn-outline" onclick="document.getElementById('var_input_test').value='user age'; validateVariableName('user age');">ลอง: user age</button>
            <button class="btn btn-outline" onclick="document.getElementById('var_input_test').value='return'; validateVariableName('return');">ลอง: return</button>
          </div>
        </div>`;
    } else if (tIdx === 2) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('box', 18, 'color:#4F46E5;')} มินิเกม: จำลองการจัดสรรบล็อกหน่วยความจำ RAM (Memory Block Allocator)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดจองพื้นที่ RAM ให้เห็นขนาด Byte ของแต่ละชนิดข้อมูล</span>
          </div>
          <div class="visual-stage" id="ram_visual_drawer">
            <div style="color:#64748B; font-weight:600;">กดเลือกชนิดข้อมูลด้านล่างเพื่อดูการจองช่องหน่วยความจำ RAM (1 ช่อง = 1 Byte)</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="allocateRam('char', 'char grade = \\'A\\';', 1)">จอง char (1 Byte)</button>
            <button class="btn btn-outline" onclick="allocateRam('int', 'int salary = 35000;', 4)">จอง int (4 Bytes)</button>
            <button class="btn btn-outline" onclick="allocateRam('float', 'float gpa = 3.85f;', 4)">จอง float (4 Bytes)</button>
            <button class="btn btn-primary" onclick="allocateRam('double', 'double pi = 3.1415926535;', 8); claimLabXpOnce('lab_2_2', 10, 'จำลองการจัดสรร RAM');">จอง double (8 Bytes +10 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 3) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('divide', 18, 'color:#4F46E5;')} มินิเกม: เครื่องคำนวณตัวดำเนินการ & Modulo Visualizer</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ทดลองปรับตัวตั้งและตัวหารเพื่อดูผลหารจำนวนเต็ม (/) และเศษเหลือ (%)</span>
          </div>
          <div class="visual-stage">
            <div style="display:flex; gap:18px; flex-wrap:wrap; justify-content:center; align-items:center;">
              <div style="background:#EEF2FF; padding:12px 18px; border-radius:14px; border:1.5px solid #A5B4FC;">
                <div style="font-size:0.78rem; color:#4338CA; font-weight:700;">หารเอาผลลัพธ์เต็ม (/)</div>
                <div style="font-size:1.35rem; font-family:'Fira Code'; font-weight:800; color:#1E293B;">
                  <span id="div_num_a">17</span> / <span id="div_num_b">5</span> = <span id="div_res_num" style="color:#4F46E5;">3</span>
                </div>
              </div>
              <div style="background:#DCFCE7; padding:12px 18px; border-radius:14px; border:1.5px solid #6EE7B7;">
                <div style="font-size:0.78rem; color:#065F46; font-weight:700;">หารเอาเฉพาะเศษ (%)</div>
                <div style="font-size:1.35rem; font-family:'Fira Code'; font-weight:800; color:#1E293B;">
                  <span id="mod_num_a">17</span> % <span id="mod_val_num" style="color:#4F46E5;">5</span> = <span id="mod_res_num" style="color:#10B981;">2</span>
                </div>
              </div>
            </div>
            <div style="margin-top:14px; width:100%; max-width:360px;">
              <label style="font-size:0.82rem; font-weight:700;">เลื่อนปรับตัวหาร (1 - 10):</label>
              <input type="range" class="slider-ui" min="1" max="10" value="5" oninput="calcModulo(this.value)" style="margin-top:6px;">
            </div>
            <div id="mod_explain_text" style="font-size:0.88rem; color:#334155; margin-top:8px; font-weight:600;">
              ${getSymbolIcon('lightbulb', 15, 'color:#D97706;')} มีของ 17 ชิ้น แบ่งใส่กล่องละ 5 ชิ้น ได้ 3 กล่องเต็ม และเหลือเศษ 2 ชิ้น!
            </div>
          </div>
        </div>`;
    } else {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('printer', 18, 'color:#4F46E5;')} มินิเกม: จำลองหน้าจอคอนโซล printf & scanf</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ปรับค่าคะแนนและทดลองเปลี่ยน Format Specifier</span>
          </div>
          <div class="code-mirror-box">
            int score = <span id="pf_score_num" style="color:#FDE047;">85</span>;<br>
            scanf("%d", <span style="color:#4ADE80; font-weight:800;">&amp;score</span>); // รับค่าเข้าที่อยู่ &amp;score<br>
            printf("ผลคะแนนสอบ: <span id="pf_fmt_tag" style="color:#38BDF8;">%d</span> คะแนน\\n", score);
          </div>
          <div class="visual-stage" style="background:#090D16; color:#4ADE80; font-family:'Fira Code'; border:2px solid #334155;">
            <div style="font-size:0.75rem; color:#94A3B8; margin-bottom:4px;">${getSymbolIcon('terminal', 14)} C Console Terminal Output:</div>
            <div style="font-size:1.15rem; font-weight:700;">
              &gt; ผลคะแนนสอบ: <span id="terminal_score_num">85</span> คะแนน
            </div>
          </div>
          <div class="sandbox-controls">
            <input type="range" class="slider-ui" min="0" max="100" value="85" oninput="updatePrintfSim(this.value)">
          </div>
        </div>`;
    }
  }
  // Unit 3 Mini-Games
  else if (uId === 3) {
    if (tIdx === 0) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('zap', 18, 'color:#4F46E5;')} มินิเกม: ห้องปฏิบัติการประเมินค่าความจริง (Boolean Truth Lab)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดทดสอบนิพจน์ตรรกศาสตร์เพื่อดูค่า 1 (จริง) และ 0 (เท็จ)</span>
          </div>
          <div class="visual-stage" id="bool_stage_box">
            <div style="font-size:1.35rem; font-family:'Fira Code'; font-weight:800; color:#10B981;" id="bool_eval_text">(10 > 3) &rarr; จริง (คืนค่า 1)</div>
            <div id="bool_eval_sub" style="font-size:0.86rem; color:#64748B; margin-top:6px;">ในภาษา C ค่าที่ไม่ใช่ศูนย์ถือเป็นจริง (True) เสมอ</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="evalBool('(10 > 3)', 1, '10 มากกว่า 3 เป็นความจริง คืนค่า 1')">10 > 3</button>
            <button class="btn btn-outline" onclick="evalBool('(15 == 20)', 0, '15 ไม่ได้เท่ากับ 20 เป็นเท็จ คืนค่า 0')">15 == 20</button>
            <button class="btn btn-outline" onclick="evalBool('!(5 == 5)', 0, '5==5 เป็นจริง แต่ถูกเครื่องหมาย ! (NOT) กลับค่าเป็นเท็จ (0)')">!(5 == 5)</button>
            <button class="btn btn-outline" onclick="evalBool('(8 > 5) && (2 > 9)', 0, 'ตัวเชื่อม && (AND) ต้องจริงทั้งคู่ เมื่อฝั่งขวาเท็จจึงได้เท็จ (0)')">(8 > 5) && (2 > 9)</button>
            <button class="btn btn-primary" onclick="evalBool('(8 > 5) || (2 > 9)', 1, 'ตัวเชื่อม || (OR) ขอเพียงฝั่งใดฝั่งหนึ่งจริง ก็ได้ผลลัพธ์เป็นจริง (1) ทันที!')">(8 > 5) || (2 > 9)</button>
          </div>
        </div>`;
    } else if (tIdx === 1) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('wind', 18, 'color:#4F46E5;')} มินิเกม: เซ็นเซอร์พัดลมอัจฉริยะด้วยคำสั่ง if</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: เลื่อนปรับอุณหภูมิห้องให้เกิน 30°C เพื่อกระตุ้นเงื่อนไข if</span>
          </div>
          <div class="visual-stage">
            <div id="fan_icon" style="display:inline-flex; color:#0EA5E9; animation: spinFan 0.6s linear infinite;">${getSymbolIcon('fan', 52)}</div>
            <div style="margin-top:8px; font-weight:800; font-size:1.1rem;">อุณหภูมิห้องปัจจุบัน: <span id="room_temp_text" style="color:#EF4444;">34</span> °C</div>
            <input type="range" class="slider-ui" min="20" max="42" value="34" oninput="updateFanIf(this.value)" style="margin-top:10px;">
          </div>
          <div class="code-mirror-box">
            <span id="fan_code_line" class="code-hl">if (temp > 30) { turn_on_fan(); } // เงื่อนไขเป็นจริง พัดลมทำงาน!</span>
          </div>
        </div>`;
    } else if (tIdx === 2) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('radio', 18, 'color:#4F46E5;')} มินิเกม: สัญญาณไฟจราจรอัจฉริยะสองทาง (if - else Controller)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดสลับสถานะปุ่มไฟข้ามถนนเพื่อดูการสลับบล็อก if และ else</span>
          </div>
          <div class="visual-stage" id="cross_light_stage" style="background:#FEE2E2; border-color:#FCA5A5;">
            <div id="cross_light_icon" style="color:#DC2626;">${getSymbolIcon('circleFilled', 44)}</div>
            <div style="font-weight:800; font-size:1.1rem; color:#DC2626; margin-top:4px;" id="cross_light_text">เข้าบล็อก else: สัญญาณไฟแดง ห้ามข้ามถนน!</div>
          </div>
          <div class="code-mirror-box">
            <span id="cross_code_display">if (button_pressed == 1) { ข้ามได้; } <b style="color:#FDE047;">else { ห้ามข้าม; }</b></span>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-primary" onclick="toggleCrossLight()">${getSymbolIcon('power', 15)} กดปุ่มสลับสัญญาณไฟคนข้ามถนน (+10 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 3) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('graduationCap', 18, 'color:#4F46E5;')} มินิเกม: เครื่องคัดเกรดอัตโนมัติหลายทาง (else if Ladder)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: เลื่อนสไลเดอร์ดูการคัดกรองคะแนนผ่านบันไดเงื่อนไข else if</span>
          </div>
          <div class="visual-stage">
            <div style="font-size:2.4rem; font-weight:800; color:#10B981; display:inline-flex; align-items:center; gap:8px;" id="grade_badge_text">เกรด A ${getSymbolIcon('starFilled', 28, 'color:#F59E0B;')}</div>
            <div style="font-weight:700; font-size:1rem; margin-top:4px;">คะแนนสอบของคุณ: <strong id="grade_score_display" style="color:#4F46E5; font-size:1.25rem;">85</strong> / 100</div>
            <input type="range" class="slider-ui" min="0" max="100" value="85" oninput="updateGradeElseIf(this.value)" style="margin-top:10px;">
          </div>
          <div class="code-mirror-box" id="grade_code_box">
            <span class="code-hl">if (score >= 80) grade = 'A'; // ตรงเงื่อนไขแรก! ข้ามที่เหลือทั้งหมด</span>
          </div>
        </div>`;
    } else {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('coffee', 18, 'color:#4F46E5;')} มินิเกม: ตู้กดเครื่องดื่มอัตโนมัติ (switch - case Vending Machine)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดเลือกเมนู 1-3 และลองกดปุ่มอื่นๆ เพื่อทดสอบ default case</span>
          </div>
          <div class="visual-stage" id="vending_stage_box">
            <div style="color:#F59E0B; animation: bounceIcon 1.6s infinite;" id="vending_drink_icon">${getSymbolIcon('coffee', 44)}</div>
            <div style="font-weight:800; font-size:1.1rem; color:#1E293B; margin-top:6px;" id="vending_drink_text">ตรงกับ case 1: จ่ายน้ำส้มคั้น แล้วหยุดด้วย break;</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="chooseVending(1, 'coffee', 'น้ำส้มคั้นสด')">กดเลข 1 (Case 1)</button>
            <button class="btn btn-outline" onclick="chooseVending(2, 'zap', 'โคล่าซ่าเย็นใจ')">กดเลข 2 (Case 2)</button>
            <button class="btn btn-outline" onclick="chooseVending(3, 'flame', 'กาแฟลาเต้')">กดเลข 3 (Case 3)</button>
            <button class="btn btn-warning" onclick="chooseVending(99, 'alertTriangle', 'ไม่พบเมนู (เข้าทำงานที่ default:)')">กดเลข 99 (Default)</button>
          </div>
        </div>`;
    }
  }
  // Unit 4 Mini-Games
  else if (uId === 4) {
    if (tIdx === 0) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('repeat', 18, 'color:#4F46E5;')} มินิเกม: เครื่องตรวจสอบ 3 เสาหลักของลูป & ป้องกัน Infinite Loop</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ทดลองถอดหรือใส่คำสั่ง i++ เพื่อดูผลของ Infinite Loop</span>
          </div>
          <div class="code-mirror-box" id="u4_loop_anatomy_code">
            int i = 1; // 1. ค่าเริ่มต้น<br>
            while (i &lt;= 5) { // 2. เงื่อนไขสิ้นสุด<br>
            &nbsp;&nbsp;printf("รอบที่ %d ", i);<br>
            &nbsp;&nbsp;<span id="u4_step_line" style="color:#4ADE80; font-weight:800;">i++; // 3. ปรับค่าตัวนับเพิ่มทีละ 1</span><br>
            }
          </div>
          <div class="visual-stage" id="u4_loop_anatomy_stage">
            <div style="font-weight:800; color:#10B981; font-size:1.05rem;">${getSymbolIcon('checkCircle', 18)} ลูปสมบูรณ์ครบ 3 เสาหลัก: ทำงาน 5 รอบแล้วจบอย่างปลอดภัย</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-danger" onclick="toggleInfiniteLoopSim(true)">${getSymbolIcon('alertTriangle', 15)} ลองลบบรรทัด i++ ออก (จำลอง Infinite Loop)</button>
            <button class="btn btn-success" onclick="toggleInfiniteLoopSim(false)">${getSymbolIcon('wrench', 15)} ใส่ i++ กลับคืน (ลูปปลอดภัย +10 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 1) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('cpu', 18, 'color:#4F46E5;')} มินิเกม: หุ่นยนต์เดินเก็บดาวด้วยคำสั่ง for loop</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดสั่งหุ่นยนต์ก้าวเดินทีละรอบ หรือกดรันอัตโนมัติจนครบ 5 ช่อง</span>
          </div>
          <div class="visual-stage" style="min-height:130px;">
            <div id="robot_walk_track" style="display:flex; gap:12px; justify-content:center; align-items:center;">
              ${getSymbolIcon('cpu', 30, 'color:#4F46E5;')}
              ${getSymbolIcon('starFilled', 26, 'color:#F59E0B;')}
              ${getSymbolIcon('starFilled', 26, 'color:#F59E0B;')}
              ${getSymbolIcon('starFilled', 26, 'color:#F59E0B;')}
              ${getSymbolIcon('starFilled', 26, 'color:#F59E0B;')}
            </div>
            <div style="margin-top:12px; font-weight:800; color:#4F46E5; font-family:'Fira Code';">
              for (int i = 0; i &lt; 5; i++) &rarr; รอบปัจจุบัน i = <span id="robot_step_idx">0</span> | ดาวที่เก็บได้: <span id="robot_stars">1</span>/5
            </div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-primary" onclick="stepRobotForLoop()">${getSymbolIcon('arrowRight', 15)} ก้าวเดินทีละรอบ (i++)</button>
            <button class="btn btn-success" onclick="autoRunRobotForLoop()">${getSymbolIcon('zap', 15)} รันลูปอัตโนมัติจนจบ (+15 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 2) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('batteryFull', 18, 'color:#4F46E5;')} มินิเกม: ระบบจ่ายพลังงานด้วย while loop (ตรวจก่อนทำ)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดรันลูปใช้พลังงานทีละ 25% จนกว่าเงื่อนไข battery > 0 จะเป็นเท็จ</span>
          </div>
          <div class="visual-stage">
            <div id="battery_icon" style="color:#10B981;">${getSymbolIcon('batteryFull', 46)}</div>
            <div style="font-weight:800; margin-top:6px; font-size:1.1rem;">
              while (battery > 0) &rarr; พลังงานคงเหลือ: <span id="battery_percent" style="color:#10B981;">100</span>%
            </div>
            <div id="battery_status_msg" style="font-size:0.86rem; color:#64748B; margin-top:4px;">เงื่อนไข (100 > 0) เป็นจริง: อนุญาตให้เครื่องทำงานต่อ</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-warning" onclick="drainBatteryWhile()">${getSymbolIcon('zap', 15)} รันลูป 1 รอบ (battery -= 25)</button>
            <button class="btn btn-outline" onclick="rechargeBatteryWhile()">${getSymbolIcon('power', 15)} ชาร์จแบตเตอรี่เต็ม 100%</button>
          </div>
        </div>`;
    } else if (tIdx === 3) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('logIn', 18, 'color:#4F46E5;')} มินิเกม: ทดสอบความต่างของ do - while (ทำก่อนตรวจทีหลัง)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดทดสอบเพื่อพิสูจน์ว่าแม้เงื่อนไขจะเป็นเท็จตั้งแต่ต้น แต่ do-while ก็ยังทำ 1 รอบ!</span>
          </div>
          <div class="code-mirror-box">
            int pass = 1234;<br>
            do {<br>
            &nbsp;&nbsp;printf("เปิดหน้าจอรับรหัสผ่านรอบที่ 1 แน่นอน!\\n");<br>
            } while (pass != 1234); // เงื่อนไขเป็นเท็จ แต่ทำไปแล้ว 1 ครั้ง!
          </div>
          <div class="visual-stage" id="dowhile_stage">
            <div style="color:#64748B; font-weight:600;">กดปุ่มด้านล่างเพื่อเปรียบเทียบการทำงานระหว่าง while และ do-while</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-primary" onclick="runDoWhileSim()">${getSymbolIcon('play', 15)} ทดสอบรัน do-while (+10 XP)</button>
          </div>
        </div>`;
    } else {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('octagonStop', 18, 'color:#4F46E5;')} มินิเกม: ตัวควบคุมจังหวะลูป break, continue & ตารางดาว Nested Loops</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ทดลองสั่ง break, continue และสร้างตารางดาว 2 มิติ</span>
          </div>
          <div class="visual-stage" id="break_continue_stage">
            <div style="font-size:1rem; font-weight:700; color:#334155;">ผลลัพธ์การวนลูปตั้งแต่ i = 1 ถึง 6:</div>
            <div id="bc_output_display" style="font-family:'Fira Code'; font-size:1.2rem; font-weight:800; color:#4F46E5; margin-top:8px; white-space:pre-line;">1  2  3  4  5  6</div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-danger" onclick="testLoopCtrl('break')">${getSymbolIcon('octagonStop', 15)} ใส่ if (i == 4) break;</button>
            <button class="btn btn-warning" onclick="testLoopCtrl('continue')">${getSymbolIcon('arrowRight', 15)} ใส่ if (i == 4) continue;</button>
            <button class="btn btn-primary" onclick="testLoopCtrl('nested')">${getSymbolIcon('starFilled', 15)} รัน Nested Loops (วาดดาว 3x4)</button>
            <button class="btn btn-outline" onclick="testLoopCtrl('reset')">${getSymbolIcon('refreshCw', 15)} รีเซ็ต</button>
          </div>
        </div>`;
    }
  }
  // Unit 5 Mini-Games
  else if (uId === 5) {
    if (tIdx === 0) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('database', 18, 'color:#4F46E5;')} มินิเกม: ตู้ล็อกเกอร์อาร์เรย์ 1 มิติ (1D Array Locker Explorer)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: คลิกสำรวจช่องล็อกเกอร์แต่ละช่อง และลองสุ่มเปลี่ยนค่าข้อมูลในอาร์เรย์</span>
          </div>
          <div class="visual-stage">
            <div style="display:flex; gap:8px; overflow-x:auto; width:100%; justify-content:center; padding:6px;" id="u5_locker_row">
              <div class="matrix-cell selected" onclick="inspectLocker(0, 85, this)">
                <div style="font-size:0.72rem; opacity:0.85;">scores[0]</div>
                <div style="font-size:1.25rem; font-weight:800;">85</div>
              </div>
              <div class="matrix-cell" onclick="inspectLocker(1, 92, this)">
                <div style="font-size:0.72rem; opacity:0.85;">scores[1]</div>
                <div style="font-size:1.25rem; font-weight:800;">92</div>
              </div>
              <div class="matrix-cell" onclick="inspectLocker(2, 78, this)">
                <div style="font-size:0.72rem; opacity:0.85;">scores[2]</div>
                <div style="font-size:1.25rem; font-weight:800;">78</div>
              </div>
              <div class="matrix-cell" onclick="inspectLocker(3, 95, this)">
                <div style="font-size:0.72rem; opacity:0.85;">scores[3]</div>
                <div style="font-size:1.25rem; font-weight:800;">95</div>
              </div>
              <div class="matrix-cell" onclick="inspectLocker(4, 88, this)">
                <div style="font-size:0.72rem; opacity:0.85;">scores[4]</div>
                <div style="font-size:1.25rem; font-weight:800;">88</div>
              </div>
            </div>
            <div id="locker_info_text" style="font-size:0.95rem; color:#4F46E5; margin-top:12px; font-weight:700;">
              ${getSymbolIcon('mapPin', 15)} คลิกที่ช่องแรก: <code>scores[0]</code> เก็บค่า <strong>85</strong> (ช่องแรกสุดเริ่มนับที่ Index 0 เสมอ!)
            </div>
          </div>
        </div>`;
    } else if (tIdx === 1) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('barChart', 18, 'color:#4F46E5;')} มินิเกม: เครื่องสแกนอาร์เรย์ด้วย for loop (Array Scanner & Sum)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: กดปุ่มสแกนทีละช่องเพื่อดูการบวกสะสมค่าลงในตัวแปร sum</span>
          </div>
          <div class="code-mirror-box">
            int arr[4] = {15, 25, 30, 20}, sum = 0;<br>
            for (int i = 0; i &lt; 4; i++) { sum += arr[i]; }
          </div>
          <div class="visual-stage">
            <div id="arr_scan_boxes" style="display:flex; gap:10px; justify-content:center; margin-bottom:10px;">
              <div class="ram-cell" id="scan_cell_0"><span>[0]</span><b>15</b></div>
              <div class="ram-cell" id="scan_cell_1"><span>[1]</span><b>25</b></div>
              <div class="ram-cell" id="scan_cell_2"><span>[2]</span><b>30</b></div>
              <div class="ram-cell" id="scan_cell_3"><span>[3]</span><b>20</b></div>
            </div>
            <div style="font-size:1.15rem; font-weight:800; color:#10B981;" id="arr_sum_display">
              กดปุ่มด้านล่างเพื่อเริ่มวนลูปบวกสะสมค่า (sum = 0)
            </div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-primary" onclick="animateArrayScanSum()">${getSymbolIcon('play', 15)} รันลูปสแกนบวกค่าทีละช่อง (+15 XP)</button>
          </div>
        </div>`;
    } else if (tIdx === 2) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('layoutGrid', 18, 'color:#4F46E5;')} มินิเกม: สำรวจพิกัดตารางอาร์เรย์ 2 มิติ (2D Matrix Grid Radar)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: คลิกที่ช่องตารางใดก็ได้เพื่อดูรหัสพิกัด [แถว Row][คอลัมน์ Col]</span>
          </div>
          <div class="visual-stage">
            <div style="display:grid; grid-template-columns:repeat(3, auto); gap:8px; justify-content:center;">
              <div class="matrix-cell" onclick="inspectMatrixCell(0, 0, 10, this)">[0][0] = 10</div>
              <div class="matrix-cell" onclick="inspectMatrixCell(0, 1, 20, this)">[0][1] = 20</div>
              <div class="matrix-cell" onclick="inspectMatrixCell(0, 2, 30, this)">[0][2] = 30</div>
              <div class="matrix-cell" onclick="inspectMatrixCell(1, 0, 40, this)">[1][0] = 40</div>
              <div class="matrix-cell" onclick="inspectMatrixCell(1, 1, 50, this)">[1][1] = 50</div>
              <div class="matrix-cell" onclick="inspectMatrixCell(1, 2, 60, this)">[1][2] = 60</div>
            </div>
            <div id="matrix_inspect_output" style="font-size:0.95rem; font-weight:700; color:#4F46E5; margin-top:12px;">
              ${getSymbolIcon('info', 15)} คลิกที่ช่องในตารางขนาด 2x3 ด้านบนเพื่อตรวจสอบพิกัด [Row][Col]
            </div>
          </div>
        </div>`;
    } else if (tIdx === 3) {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('train', 18, 'color:#4F46E5;')} มินิเกม: ขบวนรถไฟสตริงและโบกี้ปิดท้าย '\\0' (Null-Terminated String Train)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: พิมพ์ข้อความภาษาอังกฤษเพื่อดูการจัดเรียงตัวอักษรและโบกี้ '\\0' ในแรม</span>
          </div>
          <input type="text" class="input-field" maxlength="10" value="CODING" placeholder="พิมพ์ข้อความสั้นๆ..." oninput="renderStringTrain(this.value)">
          <div class="visual-stage">
            <div id="train_carriages" style="display:flex; gap:6px; flex-wrap:wrap; justify-content:center; font-family:'Fira Code'; font-weight:700;"></div>
            <div id="train_summary_text" style="font-size:0.88rem; color:#334155; margin-top:12px; font-weight:600;"></div>
          </div>
        </div>`;
      setTimeout(() => renderStringTrain("CODING"), 50);
    } else {
      labHtml = `
        <div class="sandbox-card animate-pop">
          <div class="sandbox-header-bar">
            <h4>${getSymbolIcon('wrench', 18, 'color:#4F46E5;')} มินิเกม: ห้องปฏิบัติการฟังก์ชัน &lt;string.h&gt; (strlen, strcpy, strcat, strcmp)</h4>
            <span class="minigame-mission-badge">${getSymbolIcon('target', 14)} ภารกิจ: ทดลองพิมพ์ข้อความและกดปุ่มฟังก์ชันจัดการสตริง</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <input type="text" id="str_lab_a" class="input-field" value="Hello" oninput="updateStrlenSim()">
            <input type="text" id="str_lab_b" class="input-field" value="World" oninput="updateStrlenSim()">
          </div>
          <div class="visual-stage">
            <div style="font-size:1.1rem; font-family:'Fira Code'; font-weight:800; color:#4F46E5;" id="str_func_result">
              strlen(str1) = 5 ตัวอักษร | strlen(str2) = 5 ตัวอักษร
            </div>
          </div>
          <div class="sandbox-controls">
            <button class="btn btn-outline" onclick="runStringFunc('strlen')">${getSymbolIcon('ruler', 15)} strlen (นับความยาว)</button>
            <button class="btn btn-outline" onclick="runStringFunc('strcat')">${getSymbolIcon('link', 15)} strcat (ต่อข้อความ)</button>
            <button class="btn btn-outline" onclick="runStringFunc('strcpy')">${getSymbolIcon('clipboardList', 15)} strcpy (คัดลอก)</button>
            <button class="btn btn-primary" onclick="runStringFunc('strcmp')">${getSymbolIcon('scale', 15)} strcmp (เปรียบเทียบ +10 XP)</button>
          </div>
        </div>`;
    }
  }

  const labXpMap = { '1_0': 15, '1_1': 15, '1_4': 15, '4_1': 15, '5_1': 15 };
  const labXpAmount = labXpMap[key] || 10;
  const labCleanTitle = title.includes(':') ? title.split(':')[1].trim() : title;
  const labFooterHtml = getLabXpFooterHtml(`lab_${uId}_${tIdx}`, labXpAmount, labCleanTitle);
  const playgroundHtml = getLiveCPlaygroundHtml(key);

  container.innerHTML = `
    <div style="font-size:1.15rem; font-weight:800; color:#0F172A; margin-bottom:10px;">${escapeHTML(title)}</div>
    ${explanationHtml}
    ${labHtml}
    ${playgroundHtml}
    ${labFooterHtml}
  `;
  initLiveCPlayground(key);
}

// =========================================================
// Interactive Mini-Game Action Functions
// =========================================================
function setLangLevel(lvl) {
  const icon = document.getElementById("u1_lang_icon");
  const d = document.getElementById("u1_lang_display");
  const desc = document.getElementById("u1_lang_desc");
  const speed = document.getElementById("u1_lang_speed");
  const cpu = document.getElementById("u1_lang_cpu");
  const mkStars = (n) => Array.from({ length: n }, () => getSymbolIcon('starFilled', 13, 'color:#F59E0B;')).join('');
  if (lvl === 1) {
    icon.innerHTML = getSymbolIcon('cpu', 38, 'color:#EF4444;');
    d.innerText = "Machine Language: 01001000 01100101 00000001";
    desc.innerText = "รหัสเลขฐานสอง (0 กับ 1) ซีพียูประมวลผลได้ทันทีโดยไม่ต้องแปล แต่มนุษย์เขียนและหาบั๊กยากที่สุด";
    speed.innerHTML = `ความเร็วคนเขียน: ${mkStars(1)}`;
    cpu.innerText = "ความเข้าใจของ CPU: 100% ทันที";
  } else if (lvl === 2) {
    icon.innerHTML = getSymbolIcon('wrench', 38, 'color:#F59E0B;');
    d.innerText = "Assembly Language: MOV AX, 100 ; ADD AX, 5";
    desc.innerText = "ภาษาระดับต่ำ ใช้คำย่อภาษาอังกฤษ (Mnemonics) ต้องใช้ Assembler แปลงเป็นภาษาเครื่อง";
    speed.innerHTML = `ความเร็วคนเขียน: ${mkStars(2)}`;
    cpu.innerText = "ความเข้าใจของ CPU: แปลงด้วย Assembler";
  } else {
    icon.innerHTML = getSymbolIcon('zap', 38, 'color:#4F46E5;');
    d.innerText = "High-Level (C): int score = 100 + 5;";
    desc.innerText = "ภาษาระดับสูง โครงสร้างเหมือนภาษาอังกฤษและคณิตศาสตร์ มนุษย์เข้าใจง่ายและพัฒนาได้เร็วที่สุด";
    speed.innerHTML = `ความเร็วคนเขียน: ${mkStars(5)}`;
    cpu.innerText = "ความเข้าใจของ CPU: แปลงด้วย Compiler";
  }
}

function animateCpuTranslate() {
  const d = document.getElementById("u1_lang_display");
  const desc = document.getElementById("u1_lang_desc");
  d.innerHTML = `${getSymbolIcon('clock', 18)} กำลังผ่าน Compiler แปลงเป็น 01010110...`;
  setTimeout(() => {
    d.innerHTML = `${getSymbolIcon('checkCircle', 18, 'color:#10B981;')} ซีพียูประมวลผลสำเร็จ! ได้ผลลัพธ์ score = 105`;
    desc.innerText = "ยอดเยี่ยม! นี่คือกระบวนการที่โค้ดภาษา C ถูกแปลงไปสั่งงานชิปประมวลผล";
    claimLabXpOnce('lab_1_0', 15, "จำลองการแปลภาษา 3 ยุค");
  }, 650);
}

function setPdlcStep(s) {
  const b = document.getElementById("pdlc_stage");
  const steps = [
    null,
    { icon: "search", title: "ขั้นที่ 1: การวิเคราะห์ปัญหา (Problem Analysis)", desc: "กำหนด Input, Process, Output ให้ชัดเจนเพื่อไม่ให้หลงทาง" },
    { icon: "layers", title: "ขั้นที่ 2: การออกแบบขั้นตอน (Algorithm Design)", desc: "วาดผังงาน Flowchart หรือเขียนรหัสเทียม Pseudocode วางโครงสร้างตรรกะ" },
    { icon: "terminal", title: "ขั้นที่ 3: การลงมือเขียนโค้ด (Coding)", desc: "แปลงผังงานที่ออกแบบไว้ให้เป็นคำสั่งภาษา C ที่ถูกต้องตามไวยากรณ์" },
    { icon: "bug", title: "ขั้นที่ 4: การทดสอบและแก้ไขบั๊ก (Testing & Debugging)", desc: "รันทดสอบด้วยข้อมูลหลายๆ รูปแบบ เพื่อกำจัด Syntax Error และ Logic Error" },
    { icon: "bookOpen", title: "ขั้นที่ 5: การจัดทำเอกสารและบำรุงรักษา (Maintenance)", desc: "เขียนคู่มือการใช้งาน คอมเมนต์โค้ด และอัปเดตฟีเจอร์ให้ทันสมัย" }
  ];
  if (!b || !steps[s]) return;
  b.innerHTML = `
    <div style="color:#4F46E5; animation: popIn 0.3s ease;">${getSymbolIcon(steps[s].icon, 38)}</div>
    <div style="font-weight:800; font-size:1.15rem; color:#4F46E5; margin-top:4px;">${steps[s].title}</div>
    <p style="font-size:0.9rem; color:#334155; margin-top:4px;">${steps[s].desc}</p>`;
}

function autoRunPdlcPipeline() {
  let step = 1;
  const timer = setInterval(() => {
    setPdlcStep(step);
    playSfx('pop');
    step++;
    if (step > 5) {
      clearInterval(timer);
      claimLabXpOnce('lab_1_1', 15, "ครบวงจร PDLC 5 ขั้นตอน");
    }
  }, 600);
}

function updateFlowchartRunner(v) {
  const num = parseInt(v);
  document.getElementById("u1_fc_score_text").innerText = num;
  const box = document.getElementById("u1_fc_box");
  if (num >= 50) {
    box.style.background = "#DCFCE7";
    box.style.color = "#15803D";
    box.style.borderColor = "#22C55E";
    box.innerHTML = `${getSymbolIcon('circleFilled', 14, 'color:#15803D;')} เงื่อนไข (${num} >= 50) เป็นจริง (True) &rarr; วิ่งไปเส้นทางขวา: แสดงผล "สอบผ่าน (PASS)"`;
  } else {
    box.style.background = "#FEE2E2";
    box.style.color = "#DC2626";
    box.style.borderColor = "#EF4444";
    box.innerHTML = `${getSymbolIcon('circleFilled', 14, 'color:#DC2626;')} เงื่อนไข (${num} >= 50) เป็นเท็จ (False) &rarr; วิ่งไปเส้นทางซ้าย: แสดงผล "สอบตก (FAIL)"`;
  }
}

function highlightPseudoLine(lineNum) {
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`pc_line_${i}`);
    if (el) el.className = (i === lineNum) ? "code-hl" : "";
  }
  const desc = [
    "",
    "START &rarr; แปลงเป็นจุดเริ่มต้นฟังก์ชัน int main() {",
    "INPUT price, qty &rarr; แปลงเป็นคำสั่งรับค่า scanf(\"%d %d\", &price, &qty);",
    "SET total = price * qty &rarr; แปลงเป็นสมการคำนวณ int total = price * qty;",
    "PRINT total &rarr; แปลงเป็นคำสั่งแสดงผลออกจอ printf(\"Total = %d\", total);",
    "END &rarr; แปลงเป็นคำสั่งจบโปรแกรม return 0; }"
  ];
  const bar = document.getElementById("pseudo_explain_bar");
  if (bar) bar.innerHTML = `${getSymbolIcon('sparkles', 15, 'color:#4F46E5;')} ${desc[lineNum]}`;
}

function simulateBugCompile() {
  playSfx('error');
  const box = document.getElementById("compile_stage_box");
  box.classList.add("animate-shake");
  setTimeout(() => box.classList.remove("animate-shake"), 450);
  box.innerHTML = `
    <span style="color:#EF4444; font-weight:800;">${getSymbolIcon('xCircle', 16)} Compile Failed! (1 Syntax Error)</span>
    <div style="font-family:'Fira Code'; color:#991B1B; background:#FEE2E2; padding:8px 12px; border-radius:8px; margin-top:6px; font-size:0.84rem;">
      error: expected ';' before 'return' at line 4
    </div>`;
}

function simulateCompile() {
  const semi = document.getElementById("ide_semicolon");
  if (semi) {
    semi.style.color = "#4ADE80";
    semi.style.background = "transparent";
    semi.innerText = ";";
  }
  const box = document.getElementById("compile_stage_box");
  box.innerHTML = `<span style="color:#F59E0B; font-weight:700;">${getSymbolIcon('clock', 16)} กำลังตรวจสอบไวยากรณ์และสร้างไฟล์ .exe...</span>`;
  setTimeout(() => {
    playSfx('success');
    box.innerHTML = `
      <span style="color:#10B981; font-weight:800;">${getSymbolIcon('checkCircle', 16)} การคอมไพล์สำเร็จสมบูรณ์ (0 Errors, 0 Warnings)!</span>
      <div style="font-family:'Fira Code'; color:#1E293B; margin-top:6px; font-size:0.9rem;">
        Output File: <strong>program.exe</strong> | Console: <span style="color:#4F46E5; font-weight:700;">Welcome to C Compiler!</span>
      </div>`;
    claimLabXpOnce('lab_1_4', 15, "ซ่อมบั๊กและคอมไพล์สำเร็จ");
  }, 550);
}

function explainCCode(part) {
  const b = document.getElementById("c_explain_stage");
  if (part === 1) b.innerHTML = `${getSymbolIcon('box', 16, 'color:#4F46E5;')} <code>#include &lt;stdio.h&gt;</code>: คำสั่ง Preprocessor ดึงไลบรารีมาตรฐานเข้ามาเพื่อให้ใช้ printf และ scanf ได้`;
  else if (part === 2) b.innerHTML = `${getSymbolIcon('logIn', 16, 'color:#0EA5E9;')} <code>int main()</code>: ฟังก์ชันหลักที่เป็นจุดเริ่มต้นทำงาน (Entry Point) ของโปรแกรมภาษา C ทุกตัว`;
  else if (part === 3) b.innerHTML = `${getSymbolIcon('printer', 16, 'color:#10B981;')} <code>printf(...)</code>: คำสั่งส่งข้อความออกหน้าจอ โดยใช้ \\n เพื่อสั่งขึ้นบรรทัดใหม่ และจบคำสั่งด้วย ;`;
  else if (part === 4) b.innerHTML = `${getSymbolIcon('checkCircle', 16, 'color:#059669;')} <code>return 0;</code>: ส่งรหัส 0 คืนให้ระบบปฏิบัติการเพื่อยืนยันว่าโปรแกรมทำงานจบโดยไม่มีข้อผิดพลาด`;
}

function validateVariableName(val) {
  const b = document.getElementById("var_validate_box");
  if (!b) return;
  if (!val) { b.innerHTML = '<span style="color:#64748B;">พิมพ์ชื่อตัวแปรเพื่อทดสอบความถูกต้อง...</span>'; return; }
  const safeVal = escapeHTML(val);
  const safeSuggested = escapeHTML(val.replace(/\s+/g, '_'));
  if (/^[0-9]/.test(val)) {
    playSfx('error');
    b.innerHTML = `<span style="color:#DC2626; font-weight:800;">${getSymbolIcon('xCircle', 16)} "${safeVal}" ผิดกฎเหล็ก: ห้ามขึ้นต้นชื่อตัวแปรด้วยตัวเลขเด็ดขาด!</span>`;
  } else if (/\s/.test(val)) {
    playSfx('error');
    b.innerHTML = `<span style="color:#DC2626; font-weight:800;">${getSymbolIcon('xCircle', 16)} "${safeVal}" ผิดกฎ: ห้ามมีเว้นวรรคในชื่อตัวแปร (แนะนำให้ใช้ _ เช่น ${safeSuggested})</span>`;
  } else if (["int", "float", "char", "double", "if", "else", "for", "while", "do", "switch", "case", "return", "const", "break", "continue"].includes(val)) {
    playSfx('error');
    b.innerHTML = `<span style="color:#DC2626; font-weight:800;">${getSymbolIcon('xCircle', 16)} "${safeVal}" ผิดกฎ: เป็นคำสงวน (Reserved Keyword) ของภาษา C ห้ามนำมาตั้งชื่อซ้ำ!</span>`;
  } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(val)) {
    playSfx('pop');
    b.innerHTML = `<span style="color:#10B981; font-weight:800;">${getSymbolIcon('checkCircle', 16)} "${safeVal}" ถูกต้อง 100%! สามารถใช้เป็นชื่อตัวแปรในภาษา C ได้อย่างปลอดภัย</span>`;
  } else {
    playSfx('error');
    b.innerHTML = `<span style="color:#DC2626; font-weight:800;">${getSymbolIcon('xCircle', 16)} "${safeVal}" ผิดกฎ: มีเครื่องหมายพิเศษที่ไม่อนุญาต (อนุญาตเฉพาะตัวอักษร ตัวเลข และ _ เท่านั้น)</span>`;
  }
}

function allocateRam(type, code, bytes) {
  const d = document.getElementById("ram_visual_drawer");
  let blocksHtml = "";
  for (let i = 1; i <= 8; i++) {
    const isActive = i <= bytes;
    blocksHtml += `<div class="ram-cell ${isActive ? 'active' : ''}">
      <span style="font-size:0.65rem;">Byte ${i}</span>
      <b>${isActive ? 'USED' : 'FREE'}</b>
    </div>`;
  }
  d.innerHTML = `
    <div style="font-weight:800; color:#065F46; font-size:1rem;">${getSymbolIcon('database', 16)} คำสั่ง: <code style="color:#4F46E5;">${code}</code> (ใช้พื้นที่ ${bytes} Bytes)</div>
    <div class="ram-cell-grid">${blocksHtml}</div>
  `;
}

function calcModulo(v) {
  const b = parseInt(v);
  document.getElementById("div_num_b").innerText = b;
  document.getElementById("div_res_num").innerText = Math.floor(17 / b);
  document.getElementById("mod_val_num").innerText = b;
  const res = 17 % b;
  document.getElementById("mod_res_num").innerText = res;
  document.getElementById("mod_explain_text").innerHTML = `${getSymbolIcon('lightbulb', 15, 'color:#D97706;')} มีของ 17 ชิ้น แบ่งใส่กล่องละ ${b} ชิ้น &rarr; ได้ ${Math.floor(17/b)} กล่องเต็ม และเหลือเศษ ${res} ชิ้น!`;
}

function updatePrintfSim(v) {
  document.getElementById("pf_score_num").innerText = v;
  document.getElementById("terminal_score_num").innerText = v;
}

function evalBool(expr, res, explain) {
  const el = document.getElementById("bool_eval_text");
  const sub = document.getElementById("bool_eval_sub");
  el.innerHTML = `${expr} &rarr; ${res === 1 ? 'จริง (คืนค่า 1)' : 'เท็จ (คืนค่า 0)'}`;
  el.style.color = res === 1 ? "#10B981" : "#EF4444";
  if (sub) sub.innerHTML = `${getSymbolIcon('lightbulb', 15, 'color:#D97706;')} ${explain}`;
}

function updateFanIf(t) {
  document.getElementById("room_temp_text").innerText = t;
  const fan = document.getElementById("fan_icon");
  const line = document.getElementById("fan_code_line");
  if (t > 30) {
    fan.style.animation = "spinFan 0.55s linear infinite";
    line.className = "code-hl";
    line.innerHTML = `if (${t} > 30) { turn_on_fan(); } &rarr; <span style="color:#4ADE80;">เงื่อนไขเป็นจริง: พัดลมกำลังหมุนระบายความร้อน!</span>`;
  } else {
    fan.style.animation = "none";
    line.className = "";
    line.innerHTML = `if (${t} > 30) { ... } &rarr; <span style="color:#94A3B8;">เงื่อนไขเป็นเท็จ: ข้ามบล็อก if (พัดลมหยุดหมุน)</span>`;
  }
}

let isCrossPressed = false;
function toggleCrossLight() {
  isCrossPressed = !isCrossPressed;
  const stage = document.getElementById("cross_light_stage");
  const icon = document.getElementById("cross_light_icon");
  const text = document.getElementById("cross_light_text");
  const code = document.getElementById("cross_code_display");

  if (isCrossPressed) {
    stage.style.background = "#DCFCE7";
    stage.style.borderColor = "#6EE7B7";
    icon.innerHTML = getSymbolIcon('circleFilled', 44, 'color:#16A34A;');
    text.innerText = "เข้าบล็อก if: สัญญาณไฟเขียว ข้ามถนนได้อย่างปลอดภัย!";
    text.style.color = "#15803D";
    code.innerHTML = `<span class="code-hl">if (button_pressed == 1) { ข้ามได้; } // เงื่อนไขเป็นจริง</span>`;
    claimLabXpOnce('lab_3_2', 10, "สลับไฟจราจร if-else");
  } else {
    stage.style.background = "#FEE2E2";
    stage.style.borderColor = "#FCA5A5";
    icon.innerHTML = getSymbolIcon('circleFilled', 44, 'color:#DC2626;');
    text.innerText = "เข้าบล็อก else: สัญญาณไฟแดง ห้ามข้ามถนน!";
    text.style.color = "#DC2626";
    code.innerHTML = `<span class="code-hl">else { ห้ามข้าม; } // เมื่อเงื่อนไข if เป็นเท็จ</span>`;
  }
}

function updateGradeElseIf(s) {
  document.getElementById("grade_score_display").innerText = s;
  const badge = document.getElementById("grade_badge_text");
  const box = document.getElementById("grade_code_box");

  if (s >= 80) {
    badge.innerHTML = `เกรด A ${getSymbolIcon('starFilled', 28, 'color:#F59E0B;')}`;
    badge.style.color = "#10B981";
    box.innerHTML = `<span class="code-hl">if (${s} >= 80) grade = 'A'; // ตรงเงื่อนไขขั้นที่ 1</span>`;
  } else if (s >= 70) {
    badge.innerHTML = `เกรด B ${getSymbolIcon('checkCircle', 28, 'color:#3B82F6;')}`;
    badge.style.color = "#3B82F6";
    box.innerHTML = `<span class="code-hl">else if (${s} >= 70) grade = 'B'; // ตรงเงื่อนไขขั้นที่ 2</span>`;
  } else if (s >= 60) {
    badge.innerHTML = `เกรด C ${getSymbolIcon('award', 28, 'color:#F59E0B;')}`;
    badge.style.color = "#F59E0B";
    box.innerHTML = `<span class="code-hl">else if (${s} >= 60) grade = 'C'; // ตรงเงื่อนไขขั้นที่ 3</span>`;
  } else if (s >= 50) {
    badge.innerHTML = `เกรด D ${getSymbolIcon('alertTriangle', 28, 'color:#D97706;')}`;
    badge.style.color = "#D97706";
    box.innerHTML = `<span class="code-hl">else if (${s} >= 50) grade = 'D'; // ตรงเงื่อนไขขั้นที่ 4</span>`;
  } else {
    badge.innerHTML = `เกรด F ${getSymbolIcon('xCircle', 28, 'color:#EF4444;')}`;
    badge.style.color = "#EF4444";
    box.innerHTML = `<span class="code-hl">else grade = 'F'; // ไม่ตรงเงื่อนไขใดเลย ตกลงมาที่ else สุดท้าย</span>`;
  }
}

function chooseVending(c, icon, name) {
  const iconEl = document.getElementById("vending_drink_icon");
  const textEl = document.getElementById("vending_drink_text");
  const iconName = (SVG_ICON_PATHS && SVG_ICON_PATHS[icon]) ? icon : 'coffee';
  if (iconEl) {
    iconEl.style.color = c === 99 ? "#D97706" : (c === 2 ? "#EF4444" : (c === 3 ? "#92400E" : "#F59E0B"));
    iconEl.innerHTML = getSymbolIcon(iconName, 44);
  }
  if (textEl) {
    if (c === 99) {
      textEl.innerHTML = `${getSymbolIcon('alertTriangle', 16, 'color:#D97706;')} กดเลข 99: ${name}`;
    } else {
      textEl.innerHTML = `${getSymbolIcon('checkCircle', 16, 'color:#10B981;')} ตรงกับ case ${c}: ได้รับ "${name}" แล้วหยุดด้วยคำสั่ง break;`;
    }
  }
}

function toggleInfiniteLoopSim(isBroken) {
  const line = document.getElementById("u4_step_line");
  const stage = document.getElementById("u4_loop_anatomy_stage");
  if (isBroken) {
    playSfx('error');
    line.style.color = "#EF4444";
    line.innerText = "// ลืมเขียน i++; (ค่า i ค้างอยู่ที่ 1 ตลอดกาล!)";
    stage.innerHTML = `<div style="font-weight:800; color:#DC2626; font-size:1.05rem;">${getSymbolIcon('alertTriangle', 18)} เกิด Infinite Loop! เงื่อนไข (1 &lt;= 5) เป็นจริงชั่วนิรันดร์ โปรแกรมค้าง!</div>`;
  } else {
    playSfx('success');
    line.style.color = "#4ADE80";
    line.innerText = "i++; // 3. ปรับค่าตัวนับเพิ่มทีละ 1";
    stage.innerHTML = `<div style="font-weight:800; color:#10B981; font-size:1.05rem;">${getSymbolIcon('checkCircle', 18)} ซ่อมลูปสำเร็จ! มี i++ ช่วยเพิ่มค่าจน i กลายเป็น 6 และหลุดออกจากลูปอย่างปลอดภัย</div>`;
    claimLabXpOnce('lab_4_0', 10, "ซ่อม Infinite Loop");
  }
}

let rStep = 0;
function stepRobotForLoop() {
  rStep = (rStep + 1) % 5;
  document.getElementById("robot_step_idx").innerText = rStep;
  document.getElementById("robot_stars").innerText = rStep + 1;
  let track = "";
  for (let i = 0; i < 5; i++) {
    if (i < rStep) track += getSymbolIcon('checkCircle', 26, 'color:#10B981;');
    else if (i === rStep) track += getSymbolIcon('cpu', 30, 'color:#4F46E5;');
    else track += getSymbolIcon('starFilled', 26, 'color:#F59E0B;');
  }
  document.getElementById("robot_walk_track").innerHTML = track;
}

function autoRunRobotForLoop() {
  rStep = -1;
  let count = 0;
  const timer = setInterval(() => {
    stepRobotForLoop();
    playSfx('pop');
    count++;
    if (count >= 5) {
      clearInterval(timer);
      claimLabXpOnce('lab_4_1', 15, "รันหุ่นยนต์ for loop ครบ 5 รอบ");
    }
  }, 380);
}

let batt = 100;
function drainBatteryWhile() {
  if (batt > 0) batt -= 25;
  document.getElementById("battery_percent").innerText = batt;
  const bEl = document.getElementById("battery_icon");
  if (batt > 50) { bEl.style.color = "#10B981"; bEl.innerHTML = getSymbolIcon('batteryFull', 46); }
  else if (batt > 0) { bEl.style.color = "#F59E0B"; bEl.innerHTML = getSymbolIcon('batteryLow', 46); }
  else { bEl.style.color = "#EF4444"; bEl.innerHTML = getSymbolIcon('octagonStop', 46); }
  const msg = document.getElementById("battery_status_msg");
  if (batt > 0) {
    msg.innerText = `เงื่อนไข (${batt} > 0) เป็นจริง: วนลูปทำงานต่อได้`;
    msg.style.color = "#059669";
  } else {
    msg.innerText = `เงื่อนไข (0 > 0) เป็นเท็จ! หยุดการวนลูป while ทันที`;
    msg.style.color = "#DC2626";
  }
}

function rechargeBatteryWhile() {
  batt = 100;
  document.getElementById("battery_percent").innerText = 100;
  const bEl = document.getElementById("battery_icon");
  bEl.style.color = "#10B981";
  bEl.innerHTML = getSymbolIcon('batteryFull', 46);
  document.getElementById("battery_status_msg").innerText = "ชาร์จเต็ม 100%! เงื่อนไข (100 > 0) พร้อมวนลูปใหม่";
  document.getElementById("battery_status_msg").style.color = "#059669";
}

function runDoWhileSim() {
  document.getElementById("dowhile_stage").innerHTML = `
    <div style="color:#10B981; font-weight:800; font-size:1.05rem;">${getSymbolIcon('checkCircle', 18)} บล็อก do { ... } ทำงานสำเร็จ 1 รอบ!</div>
    <div style="font-size:0.88rem; color:#334155; margin-top:4px;">เพราะ do-while ทำคำสั่งก่อนแล้วค่อยตรวจเงื่อนไขทีหลัง จึงการันตีการรันอย่างน้อย 1 รอบเสมอ</div>`;
  claimLabXpOnce('lab_4_3', 10, "ทดสอบ do-while");
}

function testLoopCtrl(type) {
  const out = document.getElementById("bc_output_display");
  if (type === 'break') {
    out.innerHTML = `1 &nbsp; 2 &nbsp; 3 &nbsp; ${getSymbolIcon('octagonStop', 18, 'color:#EF4444;')} (เจอ i==4 สั่ง break; ดีดออกจากลูปทันที!)`;
  } else if (type === 'continue') {
    out.innerHTML = `1 &nbsp; 2 &nbsp; 3 &nbsp; <span style="color:#F59E0B;">[ข้าม 4]</span> &nbsp; 5 &nbsp; 6 (เจอ i==4 สั่ง continue; ข้ามรอบที่ 4 ไปรอบ 5)`;
  } else if (type === 'nested') {
    const starRow = Array.from({ length: 4 }, () => getSymbolIcon('starFilled', 18, 'color:#F59E0B;')).join(' ');
    out.innerHTML = `<div style="line-height:1.8;">${starRow} &nbsp;(แถว 1)<br>${starRow} &nbsp;(แถว 2)<br>${starRow} &nbsp;(แถว 3)</div>`;
    claimLabXpOnce('lab_4_4', 10, "รัน Nested Loops 3x4");
  } else {
    out.innerText = "1  2  3  4  5  6";
  }
}

function inspectLocker(idx, val, el) {
  document.querySelectorAll("#u5_locker_row .matrix-cell").forEach(c => c.classList.remove("selected"));
  if (el) el.classList.add("selected");
  document.getElementById("locker_info_text").innerHTML = `
    ${getSymbolIcon('mapPin', 15)} อ้างอิงคำสั่ง: <code>scores[${idx}]</code> (ลำดับที่ ${idx + 1}) &rarr; ค่าที่เก็บอยู่ใน RAM คือ <strong>${val}</strong> คะแนน`;
}

function animateArrayScanSum() {
  const vals = [15, 25, 30, 20];
  let sum = 0;
  let idx = 0;
  for (let i = 0; i < 4; i++) {
    const c = document.getElementById(`scan_cell_${i}`);
    if (c) c.classList.remove("active");
  }
  const timer = setInterval(() => {
    if (idx < 4) {
      const c = document.getElementById(`scan_cell_${idx}`);
      if (c) c.classList.add("active");
      sum += vals[idx];
      document.getElementById("arr_sum_display").innerHTML = `กำลังสแกน i = ${idx} (arr[${idx}] = ${vals[idx]}) &rarr; ผลรวมสะสม sum = ${sum}`;
      playSfx('pop');
      idx++;
    } else {
      clearInterval(timer);
      document.getElementById("arr_sum_display").innerHTML = `${getSymbolIcon('sparkles', 18, 'color:#10B981;')} สแกนครบ 4 ช่องสำเร็จ! ผลรวม sum = ${sum} | ค่าเฉลี่ย = ${sum / 4}`;
      claimLabXpOnce('lab_5_1', 15, "สแกนอาร์เรย์หาผลรวม");
    }
  }, 500);
}

function inspectMatrixCell(r, c, val, el) {
  document.querySelectorAll(".matrix-cell").forEach(cell => cell.classList.remove("selected"));
  if (el) el.classList.add("selected");
  document.getElementById("matrix_inspect_output").innerHTML = `
    ${getSymbolIcon('target', 15)} พิกัดตาราง: <code>matrix[${r}][${c}]</code> (แถวที่ ${r}, คอลัมน์ที่ ${c}) &rarr; เก็บค่าข้อมูล = <strong>${val}</strong>`;
}

function renderStringTrain(str) {
  const clean = (str || "").slice(0, 10);
  const safeClean = escapeHTML(clean);
  const box = document.getElementById("train_carriages");
  const summary = document.getElementById("train_summary_text");
  if (!box) return;
  let html = "";
  for (let i = 0; i < clean.length; i++) {
    html += `<div style="background:#EEF2FF; border:2px solid #6366F1; padding:8px 12px; border-radius:10px; text-align:center;">
      <div style="font-size:0.68rem; color:#4338CA;">[${i}]</div>
      <div style="font-size:1.1rem; color:#1E293B;">'${escapeHTML(clean[i])}'</div>
    </div>`;
  }
  html += `<div style="background:#FEE2E2; border:2px solid #EF4444; padding:8px 12px; border-radius:10px; text-align:center;">
    <div style="font-size:0.68rem; color:#B91C1C;">[${clean.length}]</div>
    <div style="font-size:1.1rem; color:#DC2626;">'\\0'</div>
  </div>`;
  box.innerHTML = html;
  if (summary) {
    summary.innerHTML = `ข้อความ <b>"${safeClean}"</b> มีความยาว <b>${clean.length}</b> ตัวอักษร แต่ต้องใช้พื้นที่อาร์เรย์ <b>${clean.length + 1} ช่อง</b> (รวมตัวปิดท้าย '\\0')`;
  }
}

function updateStrlenSim() {
  runStringFunc('strlen');
}

function runStringFunc(fn) {
  const a = document.getElementById("str_lab_a").value;
  const b = document.getElementById("str_lab_b").value;
  const safeA = escapeHTML(a);
  const safeB = escapeHTML(b);
  const safeCombined = escapeHTML(a + b);
  const out = document.getElementById("str_func_result");
  if (!out) return;
  if (fn === 'strlen') {
    out.innerHTML = `strlen("${safeA}") = ${a.length} | strlen("${safeB}") = ${b.length}`;
  } else if (fn === 'strcat') {
    out.innerHTML = `strcat(str1, str2) &rarr; "${safeCombined}" (ความยาวรวม ${a.length + b.length})`;
  } else if (fn === 'strcpy') {
    out.innerHTML = `strcpy(str1, str2) &rarr; คัดลอกทับ str1 กลายเป็น "${safeB}"`;
  } else if (fn === 'strcmp') {
    const cmp = a === b ? 0 : (a > b ? 1 : -1);
    out.innerHTML = `strcmp("${safeA}", "${safeB}") คืนค่า = ${cmp} (${cmp === 0 ? 'ข้อความเหมือนกันทุกประการ!' : 'ข้อความแตกต่างกัน'})`;
    claimLabXpOnce('lab_5_4', 10, "ทดสอบฟังก์ชัน string.h");
  }
}

// =========================================================
// Post-Test Handlers
// =========================================================
function finishStudyingAndUnlockPost() {
  stopTopicAudio();
  if (currentUser.role !== 'teacher' && currentUser.units) {
    const unlockedMax = currentUser.units[activeUnitId]?.unlockedTopicIdx || 0;
    const needMax = topicTitles[activeUnitId].length - 1;
    if (unlockedMax < needMax) {
      playSfx('error');
      showToast("กรุณาศึกษาเนื้อหาให้ครบทั้ง 5 หัวข้อตามลำดับก่อนทำแบบทดสอบหลังเรียน", "warning");
      return;
    }
  }
  if (currentUser.units) {
    currentUser.units[activeUnitId].contentRead = true;
    currentUser.units[activeUnitId].unlockedTopicIdx = topicTitles[activeUnitId].length - 1;
    saveCurrentProgress();
  }
  startUnitPostTest(activeUnitId);
}

function startUnitPostTest(uId) {
  stopTopicAudio();
  document.getElementById("pillPre").className = "step-pill done";
  document.getElementById("pillContent").className = "step-pill done";
  document.getElementById("pillPost").className = "step-pill active";

  document.getElementById("unitPreTestArea").classList.add("hidden");
  document.getElementById("unitContentArea").classList.add("hidden");
  document.getElementById("unitPostTestArea").classList.remove("hidden");

  document.getElementById("postQuizActiveView").classList.remove("hidden");
  document.getElementById("postQuizResultView").classList.add("hidden");

  document.getElementById("postUnitTitle").innerText = `หน่วย ${uId}`;

  const rawBank = fullQuestionBank[uId];
  const sampled = [...rawBank].sort(() => Math.random() - 0.5).slice(0, 10);
  
  currentQuizList = sampled.map(item => {
    const correctText = item.opts[item.ans];
    const shuffledOpts = [...item.opts].sort(() => Math.random() - 0.5);
    return {
      q: item.q.replace(/^\d+[\.\)]\s*/, ''),
      opts: shuffledOpts,
      ansIdx: shuffledOpts.indexOf(correctText)
    };
  });

  currentQuizIdx = 0;
  currentQuizScore = 0;
  renderPostQuestion();
}

function renderPostQuestion() {
  clearInterval(quizTimer);
  selectedAnswer = null;
  document.getElementById("btnPostNext").disabled = true;

  if (currentQuizIdx >= currentQuizList.length) {
    const earnedXp = currentQuizScore * 15;
    if (currentUser.units) {
      normalizeUserRecord(currentUser);
      currentUser.units[activeUnitId].postDone = true;
      currentUser.units[activeUnitId].postScore = currentQuizScore;
      currentUser.units[activeUnitId].contentRead = true;
      currentUser.units[activeUnitId].unlockedTopicIdx = topicTitles[activeUnitId].length - 1;
      if (activeUnitId < 5) {
        currentUser.currentUnit = activeUnitId + 1;
        currentUser.currentTopicIdx = 0;
        currentUser.currentTopic = topicTitles[activeUnitId + 1][0];
      }
      addXpReward(earnedXp, "จบแบบทดสอบหลังเรียน");
      recordUserActivity("post_test", activeUnitId, `จบแบบทดสอบหลังเรียน หน่วยที่ ${activeUnitId} ได้ ${currentQuizScore}/10 (+${earnedXp} XP)`);
      trackDailyQuestProgress('studyOrQuiz');
      saveCurrentProgress();
      renderHomeDashboard();
    }
    launchConfetti();
    document.getElementById("postQuizActiveView").classList.add("hidden");
    document.getElementById("postQuizResultView").classList.remove("hidden");
    document.getElementById("postResultScoreDisplay").innerText = `${currentQuizScore} / 10`;
    document.getElementById("postResultXpGain").innerHTML = `${getSymbolIcon('starFilled', 16, 'color:#F59E0B;')} ได้รับโบนัส +${earnedXp} XP!`;
    return;
  }

  document.getElementById("postQIdx").innerText = currentQuizIdx + 1;
  const q = currentQuizList[currentQuizIdx];
  document.getElementById("postQText").innerText = `${currentQuizIdx + 1}. ${q.q}`;

  const container = document.getElementById("postOptions");
  container.innerHTML = "";

  q.opts.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn animate-fade";
    btn.innerText = `${String.fromCharCode(65 + idx)}. ${optText}`;
    btn.onclick = () => {
      document.querySelectorAll("#postOptions .option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = idx;
      document.getElementById("btnPostNext").disabled = false;
    };
    container.appendChild(btn);
  });

  quizTimeLeft = 20;
  document.getElementById("postTimer").innerText = quizTimeLeft;
  quizTimer = setInterval(() => {
    quizTimeLeft--;
    document.getElementById("postTimer").innerText = quizTimeLeft;
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      nextUnitPostQuestion();
    }
  }, 1000);
}

function nextUnitPostQuestion() {
  clearInterval(quizTimer);
  if (selectedAnswer === currentQuizList[currentQuizIdx].ansIdx) currentQuizScore++;
  currentQuizIdx++;
  renderPostQuestion();
}

function retakePostTest() { startUnitPostTest(activeUnitId); }
// =========================================================
// 8. TEACHER REPORT CONSOLE & CSV EXPORT
// =========================================================
function renderTeacherReportTable() {
  const db = loadUserDatabase();
  const students = Object.values(db).filter(u => u.role === 'student');
  const tbody = document.getElementById("teacherReportTbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  let totalScoreAll = 0;
  let completedCount = 0;

  students.forEach((st, idx) => {
    let totalPostScore = 0;
    let completedUnitsCount = 0;

    for (let u = 1; u <= 5; u++) {
      if (st.units && st.units[u] && st.units[u].postScore !== null) totalPostScore += st.units[u].postScore;
      if (st.units && st.units[u] && st.units[u].postDone) completedUnitsCount++;
    }

    if (completedUnitsCount === 5) completedCount++;
    totalScoreAll += totalPostScore;

    const progressPercent = Math.round((completedUnitsCount / 5) * 100);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td style="text-align: left; font-weight: 700;">
        <div style="display:flex; align-items:center; gap:8px;">
          ${buildAvatarHtml(st, 26, '0.72rem')}
          <span>${escapeHtml(st.name)}</span>
        </div>
      </td>
      <td style="font-size:0.75rem; color:#64748B;">${escapeHTML(st.email)}</td>
      <td><b>${escapeHTML(st.year)}</b></td>
      <td style="font-size:0.78rem; color:#4F46E5; font-weight:600;">${escapeHTML(st.currentTopic || 'หน่วย 1')}</td>
      <td>
        <div style="display:flex; align-items:center; gap:5px; justify-content:center;">
          <div style="width:45px; height:7px; background:#E2E8F0; border-radius:4px; overflow:hidden;">
            <div style="height:100%; background:#10B981; width:${progressPercent}%;"></div>
          </div>
          <span style="font-weight:700;">${progressPercent}%</span>
        </div>
      </td>
      <td>${formatScoreBadge(st, 1)}</td>
      <td>${formatScoreBadge(st, 2)}</td>
      <td>${formatScoreBadge(st, 3)}</td>
      <td>${formatScoreBadge(st, 4)}</td>
      <td>${formatScoreBadge(st, 5)}</td>
      <td><b style="color:#4F46E5;">${totalPostScore} / 50</b></td>
      <td>
        <button class="btn btn-warning" style="min-height:28px; padding:2px 8px; font-size:0.75rem;" onclick="resetStudentProgress('${escapeHTML(st.email)}')">
          ${getSymbolIcon('refreshCw', 13)} รีเซ็ต
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("tStatTotalStudents").innerText = `${students.length} คน`;
  document.getElementById("tStatCompletedStudents").innerText = `${completedCount} คน`;
  const avg = students.length > 0 ? (totalScoreAll / students.length).toFixed(1) : "0.0";
  document.getElementById("tStatAverageScore").innerText = `${avg} / 50`;
  if (typeof updateTeacherKpisAndBadges === 'function') updateTeacherKpisAndBadges();
}

function formatScoreBadge(st, u) {
  if (!st.units || !st.units[u]) return "-";
  const pre = st.units[u].preScore !== null ? st.units[u].preScore : "-";
  const post = st.units[u].postScore !== null ? st.units[u].postScore : "-";

  let postBadge = post;
  if (post !== "-") {
    if (post >= 8) postBadge = `<span class="score-badge score-high">${post}</span>`;
    else if (post >= 5) postBadge = `<span class="score-badge score-mid">${post}</span>`;
    else postBadge = `<span class="score-badge score-low">${post}</span>`;
  }
  return `${pre} / ${postBadge}`;
}

async function resetStudentProgress(email) {
  const ok = await showConfirmModal({
    title: "รีเซ็ตผลการเรียนนักเรียน",
    message: `คุณต้องการรีเซ็ตคะแนนและบทเรียนของ ${email} หรือไม่?`,
    confirmText: "รีเซ็ตคะแนน",
    danger: true
  });
  if (!ok) return;
  const db = DataService.Users.getAll();
  if (db[email]) {
    db[email].units = createEmptyUnitsMap();
    db[email].currentUnit = 1;
    db[email].currentTopicIdx = 0;
    db[email].currentTopic = "1.1 ยุคและระดับของภาษาคอมพิวเตอร์";
    db[email].activityHistory = [];
    db[email].badges = ["first_step"];
    db[email].claimedLabXp = [];
    db[email].completedTeacherQuests = [];
    db[email].customRewards = [];
    db[email].kahootGamesPlayed = 0;
    db[email].watchedShortsAllTime = [];
    db[email].commentedShortsCount = 0;
    db[email].sharedShortsCount = 0;
    DataService.Users.saveAll(db);
    if (currentUser.isLoggedIn && currentUser.email.toLowerCase() === email.toLowerCase()) {
      currentUser = normalizeUserRecord(db[email]);
      updateTopAccountWidget();
      renderUnitCards();
      renderHomeDashboard();
    } else {
      renderHomeDashboard();
    }
    renderTeacherReportTable();
    showToast("รีเซ็ตผลการเรียนของนักเรียนสำเร็จแล้ว", "success");
  }
}

function filterTeacherReportTable() {
  const q = document.getElementById("teacherSearchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#teacherReportTbody tr");
  rows.forEach(r => {
    const text = r.innerText.toLowerCase();
    r.style.display = text.includes(q) ? "" : "none";
  });
}

function escapeCsvCell(val) {
  let str = (val === null || val === undefined) ? "" : String(val);
  // Protect against spreadsheet formula injection (=, +, @)
  if (/^[=+@]/.test(str)) {
    str = `'${str}`;
  }
  return `"${str.replace(/"/g, '""')}"`;
}

function exportTeacherReportCsv() {
  try {
    const db = loadUserDatabase();
    let students = Object.values(db).filter(u => u && u.role === 'student');
    const q = (document.getElementById("teacherSearchInput")?.value || "").trim().toLowerCase();

    if (q) {
      students = students.filter(st => {
        const hay = `${st.name || ''} ${st.email || ''} ${st.year || ''} ${st.currentTopic || ''}`.toLowerCase();
        return hay.includes(q);
      });
    }

    if (students.length === 0) {
      showToast("ไม่พบข้อมูลผู้เรียนสำหรับส่งออกไฟล์ CSV", "warning");
      return;
    }

    const headers = [
      "ลำดับ",
      "ชื่อ-นามสกุล",
      "อีเมล",
      "ชั้นปี",
      "หัวข้อล่าสุด",
      "ความคืบหน้า(%)",
      "Pre-test หน่วย 1",
      "Pre-test หน่วย 2",
      "Pre-test หน่วย 3",
      "Pre-test หน่วย 4",
      "Pre-test หน่วย 5",
      "Post-test หน่วย 1",
      "Post-test หน่วย 2",
      "Post-test หน่วย 3",
      "Post-test หน่วย 4",
      "Post-test หน่วย 5",
      "คะแนนรวม(เต็ม 50)",
      "คะแนน XP สะสม"
    ];

    const rows = students.map((st, idx) => {
      normalizeUserRecord(st);
      let totalPostScore = 0;
      let completedUnitsCount = 0;
      const preCols = [];
      const postCols = [];
      for (let u = 1; u <= 5; u++) {
        const unit = st.units[u] || {};
        preCols.push(unit.preScore !== null && unit.preScore !== undefined ? unit.preScore : "-");
        if (unit.postScore !== null && unit.postScore !== undefined) {
          totalPostScore += Number(unit.postScore);
          postCols.push(unit.postScore);
        } else {
          postCols.push("-");
        }
        if (unit.postDone) completedUnitsCount++;
      }
      const progressPercent = Math.round((completedUnitsCount / 5) * 100);

      return [
        idx + 1,
        st.name || "-",
        st.email || "-",
        st.year || "-",
        st.currentTopic || "หน่วย 1",
        `${progressPercent}%`,
        ...preCols,
        ...postCols,
        `${totalPostScore}/50`,
        st.xp || 0
      ].map(escapeCsvCell).join(",");
    });

    const csvContent = "\uFEFF" + [headers.map(escapeCsvCell).join(","), ...rows].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const filename = `hellocode-student-report-${getTodayDateKey()}.csv`;
    triggerBlobDownload(blob, filename);
    playSfx('success');
    showToast(`ส่งออกรายงานคะแนน CSV (${students.length} คน) เรียบร้อยแล้ว`, "success");
  } catch (err) {
    showToast(`ไม่สามารถส่งออกรายงาน CSV ได้: ${err.message || err}`, "error");
  }
}

function loadMockStudentsData() {
  const db = DataService.Users.getAll();
  const mockList = [
    { email: "kwan.napalai@college.ac.th", name: "ขวัญ นภาลัย", year: "ปวช.2", unit: 4, topic: "4.2 for loop", xp: 620, pre: [7, 8, 6, 8, null], post: [9, 9, 8, null, null] },
    { email: "somchai.code@college.ac.th", name: "สมชาย มุ่งมั่นโค้ด", year: "ปวช.3", unit: 5, topic: "5.5 ฟังก์ชันสตริง", xp: 890, pre: [8, 7, 8, 9, 8], post: [10, 10, 9, 10, 10] },
    { email: "piyapat.dev@college.ac.th", name: "ปิยะพัฒน์ สายสร้าง", year: "ปวส.1", unit: 2, topic: "2.3 ชนิดข้อมูลพื้นฐาน", xp: 240, pre: [5, 6, null, null, null], post: [8, null, null, null, null] },
    { email: "ananda.tech@college.ac.th", name: "อนันดา พัฒนาการ", year: "ปวช.1", unit: 3, topic: "3.4 คำสั่ง else if", xp: 410, pre: [6, 7, 5, null, null], post: [8, 9, null, null, null] }
  ];

  mockList.forEach(m => {
    db[m.email] = normalizeUserRecord({
      email: m.email,
      name: m.name,
      year: m.year,
      passwordHash: hashPassword("1234"),
      role: "student",
      isLoggedIn: false,
      xp: m.xp,
      currentUnit: m.unit,
      currentTopic: m.topic,
      units: {
        1: { preScore: m.pre[0], postScore: m.post[0], preDone: true, postDone: m.post[0] !== null, contentRead: true, unlockedTopicIdx: 4, lastTopicIdx: 4 },
        2: { preScore: m.pre[1], postScore: m.post[1], preDone: m.pre[1] !== null, postDone: m.post[1] !== null, contentRead: m.post[1] !== null, unlockedTopicIdx: m.post[1] !== null ? 4 : 2, lastTopicIdx: 2 },
        3: { preScore: m.pre[2], postScore: m.post[2], preDone: m.pre[2] !== null, postDone: m.post[2] !== null, contentRead: m.post[2] !== null, unlockedTopicIdx: m.post[2] !== null ? 4 : 1, lastTopicIdx: 1 },
        4: { preScore: m.pre[3], postScore: m.post[3], preDone: m.pre[3] !== null, postDone: m.post[3] !== null, contentRead: m.post[3] !== null, unlockedTopicIdx: m.post[3] !== null ? 4 : 1, lastTopicIdx: 1 },
        5: { preScore: m.pre[4], postScore: m.post[4], preDone: m.pre[4] !== null, postDone: m.post[4] !== null, contentRead: m.post[4] !== null, unlockedTopicIdx: m.post[4] !== null ? 4 : 0, lastTopicIdx: 0 }
      }
    });
  });

  DataService.Users.saveAll(db);
  renderTeacherReportTable();
  renderHomeDashboard();
  playSfx('success');
  showToast("เติมข้อมูลนักเรียนตัวอย่างเรียบร้อยแล้ว", "success");
}

async function clearAllStudentData() {
  const ok = await showConfirmModal({
    title: "ล้างข้อมูลคะแนนนักเรียนทั้งหมด",
    message: "ข้อมูลคะแนนสอบของนักเรียนจะถูกลบออกทั้งหมด",
    confirmText: "ล้างข้อมูลคะแนน",
    danger: true
  });
  if (!ok) return;
  DataService.Users.saveAll({});
  renderTeacherReportTable();
  renderHomeDashboard();
  showToast("ล้างฐานข้อมูลคะแนนนักเรียนเรียบร้อยแล้ว", "info");
}

// =========================================================
// 9. PERSONAL ANALYTICS VIEW
// =========================================================
function renderAnalyticsView() {
  const tbody = document.getElementById("analyticsTableBody");
  tbody.innerHTML = "";

  let totalPost = 0;

  for (let u = 1; u <= 5; u++) {
    const uProg = (currentUser.units && currentUser.units[u]) ? currentUser.units[u] : { preScore: null, postScore: null, postDone: false };
    const pre = uProg.preScore !== null ? uProg.preScore : "-";
    const post = uProg.postScore !== null ? uProg.postScore : "-";
    
    let diffText = "-";
    if (uProg.preScore !== null && uProg.postScore !== null) {
      const diff = uProg.postScore - uProg.preScore;
      diffText = diff >= 0 ? `+${diff}` : `${diff}`;
      totalPost += uProg.postScore;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="text-align: left; font-weight: 700;">${curriculumData[u].title}</td>
      <td>${pre}</td>
      <td><b style="color:#10B981;">${post}</b></td>
      <td style="font-weight: 800; color: #4F46E5;">${diffText}</td>
      <td>${uProg.postDone ? `<span class="score-badge score-high">${getSymbolIcon('checkCircle', 13)} สำเร็จ</span>` : `<span style="color: #64748B;">${getSymbolIcon('clock', 13)} กำลังเรียน</span>`}</td>
    `;
    tbody.appendChild(tr);
  }

  const maxPossible = 50;
  const avgPercent = Math.round((totalPost / maxPossible) * 100);
  document.getElementById("totalScoreAverage").innerText = `${totalPost} / ${maxPossible} (${avgPercent}%)`;
  const qBadge = document.getElementById("overallQualityBadge");
  if (avgPercent >= 80) {
    qBadge.innerHTML = `${getSymbolIcon('trophy', 15, 'color:#15803D;')} ยอดเยี่ยมระดับเชี่ยวชาญ`;
    qBadge.style.background = "#DCFCE7";
    qBadge.style.color = "#15803D";
  } else if (avgPercent >= 50) {
    qBadge.innerHTML = `${getSymbolIcon('award', 15, 'color:#B45309;')} พัฒนาการดีเยี่ยม`;
    qBadge.style.background = "#FEF3C7";
    qBadge.style.color = "#B45309";
  } else {
    qBadge.innerHTML = `${getSymbolIcon('sparkles', 15, 'color:#4338CA;')} เริ่มต้นสะสมคะแนนและฝึกฝน`;
    qBadge.style.background = "#EEF2FF";
    qBadge.style.color = "#4338CA";
  }
}
