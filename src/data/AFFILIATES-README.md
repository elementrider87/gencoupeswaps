# Affiliate links

All affiliate codes live in **one file**: `src/data/affiliates.json`.
The guides keep normal vendor links. When the site builds, any vendor that has a code
filled in gets its links rewritten automatically, marked `rel="sponsored nofollow"`,
and a short affiliate disclosure is added under the page title. Vendors with an empty
code are left alone, so nothing changes until a code is filled in.

## Amazon
After you're approved for Amazon Associates, put your tracking ID in:

```json
"amazon": { "tag": "yourtag-20" }
```

Every `amazon.com` link then gets `?tag=yourtag-20`, and pages with Amazon links also
show "As an Amazon Associate I earn from qualifying purchases." (Amazon requires that line.)
Use full `https://www.amazon.com/dp/ASIN` links in the guides, not `a.co` short links;
short links can't carry the tag.

## Vendors with a ref parameter (Sikky, LOJ, CX Racing, ICT Billet, etc.)
If a vendor gives you a link like `https://www.sikky.com/?ref=gencoupeswaps`, fill in:

```json
{ "name": "Sikky", "domains": ["sikky.com"], "type": "param", "param": "ref", "value": "gencoupeswaps" }
```

## Networks with deep links (Summit on impact.com, Vivid on FlexOffers, etc.)
Networks give a "deep link" format. Put it in `template` with `{url}` where the product
URL goes, e.g.:

```json
{ "name": "Summit Racing (impact.com)", "domains": ["summitracing.com"], "type": "wrap",
  "template": "https://summitracing.xxxx.net/c/1234567/123456/1234?u={url}" }
```

To add a new vendor, copy any entry and change the name, domains, and code.
Discount codes for readers (like Turbo Joe's) still go on the Discounts page
(`src/data/discounts.json`).
