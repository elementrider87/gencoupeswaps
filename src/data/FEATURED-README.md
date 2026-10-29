# Adding a featured build

Add one object to `featured-builds.json`. Fields:

- `slug`: URL name, lowercase with dashes (page lives at /featured/<slug>)
- `owner`, `title`, `car`, `summary`
- `category`: one of `na`, `turbo`, `supercharged`, `oem`
- `stats`: up to 6 `{ "label", "value" }` tiles shown at the top
- `sections`: `{ "title", "items": [...] }`. An item is plain text, or `{ "text", "link" }` to link it to a guide
- `photos`: `{ "src": "file-name.jpg", "caption": "..." }`. Put images in `public/images/` (run the photo script so the phone-sized copies exist). The first photo is the cover.
- `social`: `{ "label", "url" }` buttons
