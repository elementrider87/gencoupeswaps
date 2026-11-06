// Guides that are split into tabs. The same list drives the tab bar on the page
// and the sub-links shown under the guide in the sidebar.
export type GuideTab = { id: string; label: string };

export const guideTabs: Record<string, GuideTab[]> = {
  '/guides/swap-kits': [
    { id: 'overview', label: 'Complete Kits' },
    { id: 'oil-pan', label: 'Oil Pan' },
    { id: 'motor-mounts', label: 'Motor Mounts' },
    { id: 'headers', label: 'Headers' },
    { id: 'trans-mount', label: 'Trans Mount' },
  ],
  '/guides/power-adders': [
    { id: 'overview', label: 'Overview' },
    { id: 'single-turbo', label: 'Single Turbo' },
    { id: 'twin-turbo', label: 'Twin Turbo' },
    { id: 'top-mount', label: 'Top-Mount SC' },
    { id: 'centrifugal', label: 'Centrifugal SC' },
    { id: 'nitrous', label: 'Nitrous' },
  ],
  '/guides/differential': [
    { id: 'oem', label: 'OEM Diff & Axles' },
    { id: 'ford-88', label: 'Ford 8.8 Swap' },
  ],
};
