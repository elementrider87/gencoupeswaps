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
  '/guides/differential': [
    { id: 'oem', label: 'OEM Diff & Axles' },
    { id: 'ford-88', label: 'Ford 8.8 Swap' },
  ],
};
