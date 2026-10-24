# Adding an HP Wars entry

Open `hp-wars.json` and add one object per car inside the `[ ]`, separated by commas. Example:

```json
[
  {
    "name": "Alexander Knight",
    "handle": "@elementrider87",
    "car": "2013 Genesis Coupe 3.8 (BK2)",
    "engine": "LS3 6.2L",
    "induction": "na",
    "trans": "T56 Magnum XL",
    "fuel": "93 pump",
    "whp": 450,
    "wtq": 420,
    "dyno": "Dynojet",
    "date": "2026-10",
    "proof": "https://youtube.com/your-dyno-video",
    "photo": "/images/hp-wars/alexander-knight.jpg"
  }
]
```

- `induction` must be one of: `na`, `turbo`, `supercharged`, `nitrous`
- `whp` / `wtq` are wheel numbers (numbers only, no "hp")
- `wtq`, `handle`, `fuel`, `proof`, `photo` are optional
- Put photos in `public/images/hp-wars/`
- The page sorts by whp automatically and ranks within each tab.
