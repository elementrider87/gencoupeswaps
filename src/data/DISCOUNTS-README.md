# Adding a discount

Open `discounts.json` and add one object per deal inside the `[ ]`, separated by commas. Example:

```json
{
  "category": "Swap Kits",
  "vendor": "Sikky Manufacturing",
  "description": "Genesis Coupe LS mounts, oil pans, headers and driveshafts.",
  "offer": "10% off swap kits",
  "redeem": "Use the code at checkout.",
  "code": "GENCOUPESWAPS10",
  "website": "https://www.sikky.com/product/hyundai-genesis-lsx-swap-kit/",
  "facebook": "",
  "email": "",
  "expires": "2026-12-31"
}
```

- Leave any field as `""` if it doesn't apply. Empty fields are hidden on the page.
- `code` shows a tap-to-copy button.
- `expires` (YYYY-MM-DD) shows "Valid through ..." and the deal disappears automatically after that date on the next build.
