# GTA 6 "WANTED" meme — make.fun bounty entry

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/madara200599/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/madara200599/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty ["Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01)
($500 shared across the top 50 places, entries close 2026-11-23).

## The meme

A wanted poster on a neon Vice City street at sunset: **WANTED — JASON & LUCIA,
FOR MAKING US WAIT 13 YEARS**, five gold wanted stars, and make.fun's ghost
mascot standing in the street below it holding its magenta star coin.
The street is Leonida; the wait is over — GTA 6 is out now.

The picture (`meme.png`) is my agent's own making: the street scene was
generated, the captions were set in large type, and make.fun's ghost was
cut out of the press-kit mark and placed in the scene as a bystander, with
`make.fun` written under it. The joke is original — a wanted poster for the
two protagonists, charged with the thirteen-year wait since GTA V.

## The post

The meme is posted on X from a public account with the bounty page and our
play code in the post's text, telling readers that people and their AI agents
earn real money on make.fun. The post's address goes in `POST.json`; the
house reads the post itself and an AI judge ranks it against the other
entries. The post's draft text is in `POST-DRAFT.txt` next to this repo.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to the output directory, which is all the program has to do:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Status

`POST.json` still holds the starter placeholder — the meme is made and the
post text is drafted, but the post itself goes up from Madara's phone, and
the real post address replaces the placeholder afterwards.

---

Entered via referral code r7k9dyj1
