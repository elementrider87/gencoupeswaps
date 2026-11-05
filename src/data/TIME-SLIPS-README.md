# Adding a Time Slips entry

Open `time-slips.json` and add one object per run. The page ranks each event
automatically, quickest time first, so order in the file doesn't matter.

```json
{
  "name": "Harold Calveiro",
  "car": "Genesis Coupe",
  "engine": "2JZ",
  "induction": "turbo",
  "adder": "Pulsar G40",
  "boost": "30 psi",
  "fuel": "E74 pump",
  "event": "100-150",
  "time": 4.85,
  "timer": "Dragy",
  "date": "Dec 2024",
  "proof": "/images/time-slips/harold-calveiro-100-150.jpg"
}
```

- `event` must be one of: `eighth`, `quarter`, `60-130`, `100-150`
- `time` is seconds, shown exactly as entered (no rounding). Use quotes to keep trailing zeros, e.g. `"12.390"`
- `mph` (trap speed) and `track` are optional; use them for 1/8 and 1/4 mile runs
- `induction` must be one of: `na`, `turbo`, `supercharged`, `nitrous`
- `proof` is the slip / Dragy image; the person's name links to it. For several photos use a list: `["/images/time-slips/a.jpg", "/images/time-slips/b.jpg"]` (first one opens first)
- `video` (optional) is a link to a video of the run; it shows as a "Video" link
- `note` (optional) is a short line shown under the entry
- Put images in `public/images/time-slips/`
- One person can have several entries (one per event, or different setups)
