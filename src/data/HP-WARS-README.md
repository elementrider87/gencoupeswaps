# Adding an HP Wars entry

Open `hp-wars.json` and add one object per car inside the `[ ]`, separated by commas.
The page ranks everyone automatically by `whp`, highest to lowest, so order in the file doesn't matter.

```json
{
  "name": "Alexander Knight",
  "car": "2010 Genesis Coupe (BK1)",
  "engine": "427 LS3",
  "induction": "supercharged",
  "adder": "Vortech V2-Ti",
  "boost": "11 psi",
  "fuel": "92 octane",
  "trans": "T56 Magnum XL",
  "whp": 711.61,
  "wtq": 637.97,
  "dyno": "Mustang dyno, SAE",
  "date": "Oct 2024",
  "proof": "/images/hp-wars/alexander-knight-dyno.jpg",
  "build": "/featured/alexander-knight-2010-bk1",
  "note": "Optional short note."
}
```

- `induction` must be one of: `na`, `turbo`, `supercharged`, `nitrous`
- `whp` / `wtq` are wheel numbers (numbers only); they display rounded down (711.61 shows as 711)
- `proof` is the dyno sheet image; the person's name links to it (opens in the photo viewer)
- Put dyno sheets in `public/images/hp-wars/`
- Everything except `name`, `car`, `engine`, `induction`, `whp` is optional
