#!/usr/bin/env python3
"""
بيولّد نسخة مصغّرة من خط Material Symbols Outlined فيها الأيقونات المستخدمة في src/ بس.

التشغيل (من جذر المشروع، بعد npm install):
    pip install fonttools brotli
    python3 scripts/subset-material-symbols.py

اشغّله كل ما تضيف أيقونة جديدة. الناتج:
    src/assets/fonts/material-symbols-outlined-subset.woff2

الفكرة: أي نص بين علامتي تنصيص في src/ بصيغة snake_case (مثال 'church') وبيطابق اسم
أيقونة بيتحسب أيقونة مستخدمة، وبنشيل باقي الأيقونات من الخط.
"""
import glob
import os
import re

from fontTools import subset
from fontTools.ttLib import TTFont

SRC_FONT = (
    'node_modules/@fontsource-variable/material-symbols-outlined/files/'
    'material-symbols-outlined-latin-full-normal.woff2'
)
OUT = 'src/assets/fonts/material-symbols-outlined-subset.woff2'

words = set()
for path in glob.glob('src/**/*.ts*', recursive=True):
    with open(path, encoding='utf-8') as fh:
        words |= set(re.findall(r"""['"`]([a-z][a-z0-9]*(?:_[a-z0-9]+)*)['"`]""", fh.read()))

font = TTFont(SRC_FONT)
cmap = font.getBestCmap()
glyph_to_char = {}
for codepoint, glyph in cmap.items():
    glyph_to_char.setdefault(glyph, chr(codepoint).lower())

keep_glyphs, matched = set(), set()
for lookup in font['GSUB'].table.LookupList.Lookup:
    for st in lookup.SubTable:
        table = st.ExtSubTable if hasattr(st, 'ExtSubTable') else st
        if not hasattr(table, 'ligatures'):
            continue
        for first in list(table.ligatures):
            kept = []
            for lig in table.ligatures[first]:
                name = ''.join(glyph_to_char.get(g, '?') for g in [first, *lig.Component])
                if name in words:
                    kept.append(lig)
                    keep_glyphs.add(lig.LigGlyph)
                    matched.add(name)
            if kept:
                table.ligatures[first] = kept
            else:
                del table.ligatures[first]

letters = 'abcdefghijklmnopqrstuvwxyz0123456789_'
keep_glyphs |= {cmap[ord(c)] for c in letters if ord(c) in cmap}

options = subset.Options()
options.flavor = 'woff2'
options.layout_features = ['*']
options.notdef_outline = True
options.glyph_names = False
options.name_IDs = ['*']
subsetter = subset.Subsetter(options)
subsetter.populate(glyphs=keep_glyphs)
subsetter.subset(font)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
font.flavor = 'woff2'
font.save(OUT)
print(f'{len(matched)} أيقونة، الحجم {os.path.getsize(OUT) / 1024:.0f} KB -> {OUT}')
