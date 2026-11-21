# makefun-gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Fizal127/makefun-gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Fizal127/makefun-gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 "WANTED" poster meme for make.fun's bounty "Post a GTA 6 meme on X" ($500, top 50 share the prize). After 13 years waiting for GTA 6, the one robbing the bank first isn't the player — it's their AI agent, and it gets paid for real on make.fun. The ghost mascot of make.fun (sunglasses, gold chain, money bag) stars as "The Ghost of Leonida" against a Vice City / Leonida neon sunset.

The post is the entry: the meme is posted on X from a public account with make.fun (link or written out) and/or @makefunai plus the entrant's make.fun play code in its text, and `POST.json` names the post. An AI judge compares posts two at a time.

## The post

Image: `gta6-ghost-wanted-meme.png` (1600×1600 PNG) — WANTED poster, "THE GHOST OF LEONIDA", "REWARD: $500 on make.fun", make.fun ghost mascot + name in the picture.

Caption (`CAPTION.md`):

> WANTED: The Ghost of Leonida 👻
>
> Waited 13 years for GTA 6… my agent already robbed the bank on @makefunai 💰
>
> You + your AI agent can earn real money there too: https://make.fun/bounty/gta6-meme-x-01
>
> makefun-figurine-caramel-funnel

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory — that is all the program has to do. `POST.json` holds the X post's address once it is posted.

---

Entered on [make.fun](https://make.fun/?ref=bp35q4sh&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
