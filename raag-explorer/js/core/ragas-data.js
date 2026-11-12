/*
 * Raag data extracted from "Sur Simran Sangeet, Part VII (Bhaag Satvaan)"
 * by Sant Sarwan Singh 'Gandharv' (Singh Brothers, Amritsar, 2006).
 * Source PDF: ਸੁਰ ਸਿਮਰਨ ਸੰਗੀਤ ਭਾਗ-7  (Sikhi School / Kirtan folder).
 *
 * This v1 covers the 28 MAIN (parent) raags — the primary raag of each family
 * indexed in the book's table of contents. Each family also contains many
 * numbered sub-variants in the book (Maal Sri, Majh Khamaji, etc.) which can be
 * added in a later pass.
 *
 * Note: The aroha / avaroha / pakad and komal/tivra details reflect a single
 * printed reference read from a scanned page, transcribed by eye. Performance
 * practice varies by gharana and artist — treat this as a faithful copy of THIS
 * book, not a single canonical authority.
 *
 * Time-of-day (samay) uses the traditional pahir system:
 *   Day   pahirs: 1st 6-9am · 2nd 9am-12pm · 3rd 12-3pm · 4th 3-6pm
 *   Night pahirs: 1st 6-9pm · 2nd 9pm-12am · 3rd 12-3am · 4th 3-6am
 * centerHour (0-24) is a representative clock position used by the Raag Clock.
 */

const RAAGS = [
  {
    id: 1, slug: "sri", name: "Sri", gurmukhi: "ਰਾਗ ਸ੍ਰੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (in aroha) [komal Re & Dha; tivra Ma]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਰੇ ਸਾ, ਰੇ ਮ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਗ ਰੇ, ਗ ਰੇ, ਰੇ, ਸਾ",
    pakad: "ਰੇ ਰੇ ਪ, ਮ ਧ ਪ, ਮ ਗ ਰੇ, ਪ ਮ, ਗ ਰੇ, ਗ ਰੇ ਸਾ",
    note: "The first raag of Sri Guru Granth Sahib Ji; a serene, devotional evening raag.",
    sggs: true
  },
  {
    id: 2, slug: "majh", name: "Majh", gurmukhi: "ਰਾਗ ਮਾਝ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "None [both Ni]",
    jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਗ ਮ ਰੇ, ਮ ਪ, ਧ ਨੀ, ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਪ ਗ ਮ ਰੇ, ਸਾ ਨੀ ਸਾ, ਧ ਨੀ ਰੇਂ, ਗ ਮ ਰੇ ਸਾ",
    pakad: "ਸਾ ਰੇ ਨੀ ਸਾ, ਧ ਨੀ ਰੇਂ, ਗ ਮ ਰੇ ਸਾ",
    note: "A weighty Punjabi raag of Sri Guru Granth Sahib Ji.",
    sggs: true
  },
  {
    id: 3, slug: "shudh-gauri", name: "Shudh Gauri", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਗਾਉੜੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re & Dha]",
    jaati: "Vakra–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ ਗ ਗ ਮ ਪ ਮ ਪ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਪ ਧ ਮ ਪ ਮ ਰੇ ਗ ਰੇ ਗ ਨੀ ਸਾ ਨੀ ਸਾ",
    pakad: "ਮ ਧ, ਪ ਧ, ਪ ਮ ਪ, ਗ ਮ ਰੇ, ਗ ਰੇ, ਸਾ ਰੇ ਨੀ, ਸਾ ਨੀ",
    note: "The parent form of the large Gauri family in Sri Guru Granth Sahib Ji.",
    sggs: true
  },
  {
    id: 4, slug: "asa", name: "Asa", gurmukhi: "ਰਾਗ ਆਸਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni (in aroha) [all shudh]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਮ ਪ ਧ ਰੇਂ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ",
    note: "Raag of Asa di Vaar; a raag of hope and inspiration.",
    sggs: true
  },
  {
    id: 5, slug: "gujri", name: "Gujri", gurmukhi: "ਰਾਗ ਗੁਜਰੀ",
    thaat: "Todi", vadi: "Dha", samvadi: "Ga", varjit: "Pa [komal Re, Ga & Dha; tivra Ma]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਨੀ ਸਾ ਰੇ ਗ ਮ ਧ ਮ ਗ ਰੇ ਗ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਮ ਧ ਨੀ ਧ ਮ ਗ ਰੇ ਗ ਰੇ ਸਾ",
    note: "A tender, plaintive late-morning raag.",
    sggs: true
  },
  {
    id: 6, slug: "devgandhari", name: "Devgandhari", gurmukhi: "ਰਾਗ ਦੇਵਗੰਧਾਰੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Re", varjit: "Ga (in aroha) [komal Dha & Ni; both Ga]",
    jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਮ, ਪ ਧੁ ਨੁ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੁ ਧੁ, ਪ ਮ ਪ, ਮ, ਗੁ ਰੇ ਸਾ, ਰੇ ਨੁ ਸਾ, ਰੇ ਗ ਮ",
    pakad: "ਮ ਪ, ਧੁ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ, ਰੇ ਨੁ ਸਾ ਰੇ ਗ ਮ",
    note: "A calm, contemplative raag.",
    sggs: true
  },
  {
    id: 7, slug: "bihagra", name: "Bihagra", gurmukhi: "ਰਾਗ ਬਿਹਾਗੜਾ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Dha (in aroha) [both Ma & Ni]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾਂ ਗ ਮ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਨੀ ਧ ਪ, ਮੇ ਗ, ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਨੀ ਧ ਪ, ਮੇ ਗ, ਧ ਗ, ਮ ਗ ਰੇ ਸਾ",
    note: "A gentle, romantic night raag.",
    sggs: true
  },
  {
    id: 8, slug: "vadhans", name: "Vadhans", gurmukhi: "ਰਾਗ ਵਡਹੰਸ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "Ga (aroha), Dha (avaroha) [both Ni]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਧ ਨੀ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗ, ਮ ਰੇ ਸਾ",
    pakad: "ਸਾ ਰੇ ਮ, ਰੇ ਸਾ, ਨੀ ਸਾ",
    note: "The raag of Alahania (mourning hymns) in Gurbani.",
    sggs: true
  },
  {
    id: 9, slug: "sorath", name: "Sorath", gurmukhi: "ਰਾਗ ਸੋਰਠਿ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (in aroha) [both Ni]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧ, ਮ ਪ ਧ, ਮ, ਰੇ ਗ ਰੇ, ਗ ਨੀ ਸਾ",
    pakad: "ਸਾ ਰੇ ਮ ਪ, ਧ ਮ ਗ ਰੇ",
    note: "A much-loved raag of Gurbani kirtan.",
    sggs: true
  },
  {
    id: 10, slug: "shudh-dhanasri", name: "Shudh Dhanasri", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਧਨਾਸਰੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [komal Ga & Ni]",
    jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਸਾ",
    pakad: "ਸਾ ਨੀ ਸਾ ਮ, ਪ ਮ, ਗ ਮ, ਪ ਗ ਪ",
    note: "The pure (shudh) form of Dhanasri.",
    sggs: true
  },
  {
    id: 11, slug: "jaitsri", name: "Jaitsri", gurmukhi: "ਰਾਗ ਜੈਤ ਸ੍ਰੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (in aroha) [komal Re & Dha; tivra Ma]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਮ, ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਨੀ ਸਾ, ਗ ਪ, ਮ ਧ ਪ, ਮ ਗ, ਰੇ ਨੀ ਧ ਪ, ਮ ਗ, ਮ ਗ, ਰੇ ਸਾ",
    note: "A dignified dusk raag of Gurbani.",
    sggs: true
  },
  {
    id: 12, slug: "shudh-todi", name: "Shudh Todi", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਟੋਡੀ",
    thaat: "Todi", vadi: "Dha", samvadi: "Ga", varjit: "None [komal Re, Ga & Dha; tivra Ma]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ, ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਰੇ ਗ ਰੇ ਸਾ",
    pakad: "ਧ ਨੀ ਸਾ ਰੇ, ਗ, ਰੇ, ਗ, ਰੇ ਸਾ, ਮ ਧ, ਮ ਗ, ਰੇ ਗ ਰੇ ਸਾ",
    note: "A poignant morning raag.",
    sggs: true
  },
  {
    id: 13, slug: "bairagi", name: "Bairagi", gurmukhi: "ਰਾਗ ਬੈਰਾਗੀ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Pa", varjit: "None [komal Re; tivra Ma]",
    jaati: "Vakra–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ, ਮ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਪ ਧ ਗ, ਧ, ਮ ਗ, ਰੇ ਗ, ਮ ਗ ਰੇ ਸਾ",
    note: "A raag of detachment (bairaag).",
    sggs: false
  },
  {
    id: 14, slug: "tilang", name: "Tilang", gurmukhi: "ਰਾਗ ਤਿਲੰਗ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "Re, Dha [both Ni]",
    jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਗ, ਮ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ, ਮ, ਗ ਸਾ",
    pakad: "ਨੀ ਸਾ, ਗ ਮ ਪ, ਨੀ ਪ, ਗ ਮ ਗ, ਸਾ",
    note: "A sweet, folk-flavoured raag of Gurbani.",
    sggs: true
  },
  {
    id: 15, slug: "suhi", name: "Suhi", gurmukhi: "ਰਾਗ ਸੂਹੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Dha (in aroha) [komal Ga; both Ni]",
    jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਨੀ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਮ, ਰੇ ਸਾ",
    pakad: "ਸਾ ਰੇ, ਗ, ਮ ਪ, ਨੀ ਪ, ਮ ਗ ਮ, ਰੇ ਸਾ",
    note: "A raag of love and separation in Gurbani.",
    sggs: true
  },
  {
    id: 16, slug: "shudh-bilaval", name: "Shudh Bilaval", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Pa (aroha), Ga weak (avaroha) [all shudh]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਸਾ, ਗ ਰੇ, ਗ ਪ, ਮ ਗ ਰੇ ਸਾ",
    note: "The bright, pure basis of the Bilawal thaat.",
    sggs: true
  },
  {
    id: 17, slug: "gond", name: "Gond", gurmukhi: "ਰਾਗ ਗੌਂਡ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga; both Ni]",
    jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਗ ਰੇ, ਮ ਪ, ਨੀ ਧ, ਸਾਂ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗ ਮ, ਰੇ ਸਾ",
    pakad: "ਰੇ ਮ ਪ, ਨੀ ਧ ਨੀ ਪ, ਪ ਗ ਮ ਰੇ, ਨੀ ਸਾ",
    note: "An intricate afternoon raag of Gurbani.",
    sggs: true
  },
  {
    id: 18, slug: "ramkali", name: "Ramkali", gurmukhi: "ਰਾਗ ਰਾਮਕਲੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re & Dha; both Ma & Ni]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੁ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਪ, ਗ ਪ, ਮ, ਰੁ ਸਾ",
    pakad: "ਮ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਪ ਗ ਮ, ਪ ਰੁ ਸਾ",
    note: "A dawn raag; also used for many Gurbani vaars.",
    sggs: true
  },
  {
    id: 19, slug: "shudh-nat", name: "Shudh Nat", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਨਟ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga (in avaroha) [both Ni]",
    jaati: "Sampuran–Vakra / Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ, ਧ ਨੀ ਪ, ਮ ਰੇ ਸਾ",
    pakad: "ਸਾ ਰੇ ਗ ਮ, ਪ ਮ, ਗ, ਮ ਪ, ਧ ਨੀ ਪ, ਮ ਗ ਰੇ, ਗ ਮ ਪ, ਸਾ ਰੇ ਸਾ",
    note: "The pure form of the Nat family (Nat Narayan).",
    sggs: true
  },
  {
    id: 20, slug: "mali-gaura", name: "Mali Gaura", gurmukhi: "ਰਾਗ ਮਾਲੀ ਗਾਉੜਾ",
    thaat: "Marwa", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re; tivra Ma; both Dha]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18,
    aroha: "ਸਾ, ਨੀ ਰੁ, ਨੀ ਧੁ, ਨੀ ਰੁ ਗ, ਮੇ ਪ, ਮੇ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੁ ਸਾ",
    pakad: "ਸਾਂ, ਰੁਂ ਨੀ ਧੁ ਨੀ, ਪ ਧ ਮੇ ਗ, ਮੇ ਗ, ਰੁ ਸਾ",
    note: "A rare, beautiful evening raag of Gurbani.",
    sggs: true
  },
  {
    id: 21, slug: "bhinn-sharaj", name: "Bhinn Sharaj", gurmukhi: "ਰਾਗ ਭਿੰਨ ਸ਼ੜਜ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [all shudh]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਮ ਗ ਸਾ",
    pakad: "ਸਾ ਗ ਮ ਧ ਮ ਗ ਸਾ",
    note: "A very pleasing (rasdayak), colourful midnight raag.",
    sggs: false
  },
  {
    id: 22, slug: "jairaj", name: "Jairaj", gurmukhi: "ਰਾਗ ਜਯਰਾਜ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga (aroha), Dha (avaroha) [all shudh]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਮ ਮ ਮ ਪ ਮ ਧ ਪ ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਰੇਂ ਸਾਂ ਧ ਪ ਪ ਮ ਧ ਮ ਪ ਰੇ ਸਾ",
    pakad: "ਮ ਧ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ ਪ ਪ ਧ ਪ ਰੇ ਸਾ",
    note: "A meend-dominant (glide-rich) night raag; taans are used sparingly.",
    sggs: false
  },
  {
    id: 23, slug: "kamal-ranjani", name: "Kamal Ranjani", gurmukhi: "ਰਾਗ ਕਮਲ ਰੰਜਨੀ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Ma, Re (aroha), Re (avaroha) [both Ni]",
    jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਪ ਨੀ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮ ਗ ਪ ਮ ਗ ਸਾ",
    pakad: "ਸਾ ਗ ਪ ਧ ਨੀ ਧ ਪ ਮ ਗ ਪ ਮ ਗ ਸਾਂ",
    note: "A dawn raag using both nishads (komal & shudh Ni).",
    sggs: false
  },
  {
    id: 24, slug: "shankara-bharan", name: "Shankara Bharan", gurmukhi: "ਰਾਗ ਸ਼ੰਕਰਾ ਭਰਣ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ma [all shudh]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਪ ਨੀ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਨੀ ਧ ਪ ਗ ਸਾ",
    pakad: "ਨੀ ਸਾ ਪ ਗ ਸਾ ਨੀ ਸਾ ਪ ਨੀ ਸਾ ਗ ਸਾ ਨੀ ਨੀ ਪ ਗ ਪ ਗ ਸਾ",
    note: "An uttarang-dominant midnight raag, sung with a Bihag ang.",
    sggs: false
  },
  {
    id: 25, slug: "kuntal", name: "Kuntal", gurmukhi: "ਰਾਗ ਕੁੰਤਲ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni (aroha), Re (avaroha) [komal Ni]",
    jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਸਾ",
    pakad: "ਮ ਪ ਧ ਸਾਂ, ਮ ਗ ਮ ਪ, ਧ ਮ, ਧ ਮ ਗ ਮ, ਗ, ਸਾ, ਧ ਸਾ ਮ",
    note: "Born of a blend of Hanspavni, Sarang and Bilawal.",
    sggs: false
  },
  {
    id: 26, slug: "malkauns", name: "Malkauns", gurmukhi: "ਰਾਗ ਮਾਲਕੌਂਸ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ga, Dha & Ni]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 23,
    aroha: "ਨੀ ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਸਾ",
    pakad: "ਧ ਨੀ ਸਾ ਮ ਗ, ਸਾ ਗ ਮ ਗ ਸਾ",
    note: "A deep, meditative, very popular late-night raag; alap-dominant and grave.",
    sggs: false
  },
  {
    id: 27, slug: "bhaum-palasi", name: "Bhaum Palasi", gurmukhi: "ਰਾਗ ਭੌਮ ਪਲਾਸੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (in aroha) [komal Ga & Ni]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਨੀ ਸਾ ਮ, ਮ ਗ, ਪ ਮ, ਗ ਮ ਗ ਰੇ ਸਾ",
    note: "A warm afternoon raag of the Palasi (Bhimpalasi) family.",
    sggs: false
  },
  {
    id: 28, slug: "lalit", name: "Lalit", gurmukhi: "ਰਾਗ ਲਲਿਤ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re; both Ma]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਰੁ ਗ ਮ, ਮੇ ਮ ਗ, ਮੇ ਧ ਸਾਂ",
    avaroha: "ਰੁਂ ਨੀ ਧ, ਮੇ ਧ, ਮ ਮ ਗ, ਰੁ ਸਾ",
    pakad: "ਨੀ ਰੁ ਗ ਮ, ਧ ਮ, ਧ ਮੇ, ਮ, ਗ",
    note: "A pre-dawn raag that uses both madhyams (shudh & tivra) prominently; an independent raag.",
    sggs: false
  },
  {
    id: 29, slug: "maru", name: "Maru", gurmukhi: "ਰਾਗ ਮਾਰੂ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Dha", varjit: "Pa [both Ma]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਸਾ ਗ ਮ ਗ ਮ, ਧ ਮੇ, ਗ ਮ ਰੇ, ਮ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ, ਰੇ ਮੇ ਗ, ਰੇ ਸਾ",
    pakad: "ਸਾ ਮ ਗ, ਮੇ ਗ, ਧ ਮ ਗ ਮ ਗ, ਰੇ ਸਾ",
    note: "A raag of veer-ras (heroic sentiment); one of the 31 raags of Sri Guru Granth Sahib Ji. Here the parent of a large family of Maru forms, set in Kalyan thaat with both madhyams.",
    sggs: true
  },
  {
    id: 30, slug: "tukhari", name: "Tukhari", gurmukhi: "ਰਾਗ ਤੁਖਾਰੀ",
    thaat: "Todi", vadi: "Re", samvadi: "Pa", varjit: "Re, Dha (in aroha)",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਨੀ ਸਾ ਗ ਮੇ ਪ ਨੀ ਧ ਪ ਮੇ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ",
    pakad: "ਨੀ ਸਾ ਮੇ ਗ ਮੇ ਪ ਨੀ ਧ ਪ ਮੇ ਪ ਗ ਰੇ ਸਾ",
    note: "The raag of Guru Nanak Dev Ji's Barah Maha; one of the 31 raags of Sri Guru Granth Sahib Ji. Given here in a Todi-thaat form with komal Ga and tivra Ma.",
    sggs: true
  },
  {
    id: 31, slug: "kedara", name: "Kedara", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਕੇਦਾਰ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga (in aroha)",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਮ ਮ ਪ ਧ ਪ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਮ ਪ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ",
    pakad: "ਸਾ ਮ ਮ ਪ ਧ ਪ ਮ ਪ ਮ ਰੇ ਸਾ",
    note: "A serene early-night raag that uses both madhyams (shudh & tivra); one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: true
  },
  {
    id: 32, slug: "bhairav", name: "Bhairav", gurmukhi: "ਰਾਗ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "None [komal Re & Dha]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6, samayNote: "Sandhi-prakash — the junction of day and night",
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਮ ਗ ਰੇ ਰੇ ਸਾ",
    pakad: "ਗ ਮ ਧ ਧ ਪ ਗ ਮ ਰੇ ਰੇ ਸਾ",
    note: "The great dawn raag (sandhi-prakash) with komal Re & Dha; one of the 31 raags of Sri Guru Granth Sahib Ji, and the parent of a large raag family.",
    sggs: true
  },
  {
    id: 33, slug: "basant", name: "Basant", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਬਸੰਤੁ",
    thaat: "Purvi", vadi: "Tar Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [komal Re & Dha; both Ma]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਮ ਗ, ਮੇ ਧੁ ਨੀ ਸਾਂ ਰੁਂ ਸਾਂ",
    avaroha: "ਰੁਂ ਨੀ ਧੁ ਪ, ਪ, ਮੇ ਗ, ਮੇ ਗ, ਮੇ ਧੁ, ਮੇ ਗ ਰੁ ਸਾ",
    pakad: "ਮੇ ਧੁ ਰੁਂ ਸਾਂ, ਰੁਂ ਨੀ, ਰੁਂ ਨੀ ਧੁ ਪ ਮ, ਮੇ ਗ, ਮੇ ਗ",
    note: "The classic raag of spring; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 34 seasonal Basant, Bahar and Hindol variants.",
    sggs: true
  },
  {
    id: 34, slug: "sarang", name: "Sarang", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga [both Ma & Ni]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਮੇ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ, ਮੇ ਪ ਧ ਪ, ਮ ਰੇ ਨੀ ਸਾ",
    pakad: "ਸਾ, ਰੇ ਮ ਰੇ, ਪ, ਮੇ ਪ, ਨੀ ਪ, ਮ ਪ, ਮ ਰੇ ਸਾ",
    note: "The midday raag; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of 88 Sarang, Bahar and Malhar variants, mostly in Kafi thaat.",
    sggs: true
  },
  {
    id: 35, slug: "malar", name: "Malar", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਮਲ੍ਹਾਰ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni [all shudh]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ, ਧ ਪ, ਮੇ ਪ, ਮ ਰੇ ਸਾ",
    pakad: "ਮ ਪ, ਧ ਸਾਂ, ਧ, ਪ ਮ",
    note: "The great monsoon raag of the rainy season; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 32 Malhar variants.",
    sggs: true
  },
  {
    id: 36, slug: "kanra", name: "Kanra", gurmukhi: "ਰਾਗ ਦਰਬਾਰੀ ਕਾਨੜਾ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "Pa (avaroh) [komal Ga, Dha & Ni]",
    jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਰੇ ਗੁ, ਰੇ ਸਾ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ, ਧੁ ਨੀ ਪ, ਮ ਪ, ਗੁ, ਮ ਰੇ ਸਾ",
    pakad: "ਗੁ ਰੇ ਰੇ ਸਾ, ਧੁ ਨੀ ਸਾ, ਰੇ ਸਾ",
    note: "A profound late-night raag, its family headed by Darbari Kanra; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 30 Kanra variants.",
    sggs: true
  },
  {
    id: 37, slug: "kalyan", name: "Kalyan", gurmukhi: "ਰਾਗ ਕਲਿਆਣ (ਯਮਨ)",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "None [tivra Ma]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਨੀ ਰੇ, ਗ ਮੇ, ਪ, ਮੇ ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ, ਪ ਰੇ ਸਾ",
    pakad: "ਨੀ ਰੇ ਸਾ, ਨੀ ਰੇ ਗ, ਰੇ ਸਾ, ਪ ਮੇ ਗ, ਪ ਰੇ ਸਾ",
    note: "The serene early-night raag (also called Yaman); one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 56 Kalyan variants, almost all with tivra Ma.",
    sggs: true
  },
  {
    id: 38, slug: "jaijaiwanti", name: "Jaijaiwanti", gurmukhi: "ਰਾਗ ਜੈਜਾਵੰਤੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga–Pa (aroh) [both Ga & Ni]",
    jaati: "Vakra Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਰੇ, ਗੁ ਰੇ ਸਾ",
    pakad: "ਰੇ ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ, ਨੀ ਧ ਪ ਰੇ ਸਾ",
    note: "The late-night Khamaj raag distinguished by its use of both komal and shudh Ni; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 69 Khamaj variants.",
    sggs: true
  },
  {
    id: 39, slug: "prabhati", name: "Prabhati", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re & Ga, both Ma]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਨੀ ਰੇ, ਗ, ਮ ਮੇ ਗ, ਗ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਮ, ਮ ਧੁ, ਮੇ ਮ ਗ, ਰੇ ਗ, ਮੇ ਗ ਰੇ ਸਾ",
    pakad: "ਗ ਮ, ਨੀ, ਧੁ ਨੀ, ਧੁ ਪ, ਗ ਮ, ਮੇ ਧੁ ਮ, ਮ ਗ ਮ",
    note: "The classic dawn raag; one of the 31 raags of Sri Guru Granth Sahib Ji. Parent of some 14 dawn variants in Bhairav, Todi and Purvi.",
    sggs: true
  },
  {
    id: 40, slug: "bhairavi", name: "Bhairavi", gurmukhi: "ਰਾਗ ਭੈਰਵੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re, Ga, Dha & Ni]",
    jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ",
    pakad: "ਮ ਗੁ, ਸਾ ਰੇ ਸਾ, ਪ ਧੁ ਨੀ ਸਾ",
    note: "The tender all-komal morning raag traditionally sung to close a performance — not one of the 31 raags of Sri Guru Granth Sahib Ji, but the parent of the largest family of all: 70 variants across Bhairavi and neighbouring thaats.",
    sggs: false
  },
  {
    id: 41, slug: "paraj", name: "Paraj", gurmukhi: "ਰਾਗ ਪਰਜ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "ਰੇ-ਪ (ਆਰੋਹ) [ਕੋਮਲ ਰੇ-ਧ, ਦੋਵੇਂ ਮ]",
    jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਸਾ, ਗ, ਮ ਪ, ਧੁ ਮੇ, ਧੁ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਪ ਗ, ਮ ਗ, ਮੇ ਗ ਰੇ ਸਾ",
    pakad: "ਸਾਂ ਨੀ ਧੁ ਪ, ਪ ਗ, ਮ ਗ",
    note: "A vigorous Purvi-thaat late-night raag (both Ma, komal Re & Dha); Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 42, slug: "yagya-ranjani", name: "Yagya Ranjani", gurmukhi: "ਰਾਗ ਯਗ੍ਯ ਰੰਜਨੀ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "ਗ-ਨੀ [ਕੋਮਲ ਰੇ-ਧ, ਮ ਤੀਬਰ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ, ਮੇ ਪ, ਧੁ ਸਾਂ",
    avaroha: "ਸਾਂ ਧੁ, ਪ ਮੇ, ਰੇ ਸਾ",
    pakad: "ਪ ਧੁ, ਸਾਂ ਰੇਂ, ਧੁ ਪ, ਮੇ ਰੇ ਸਾ",
    note: "A serene, pentatonic Purvi-thaat late-night raag (omits Ga & Ni; tivra Ma, komal Re & Dha). Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 43, slug: "chhaya-tilak", name: "Chhaya Tilak", gurmukhi: "ਰਾਗ ਛਾਇਆ ਤਿਲਕ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Re", varjit: "None [ਦੋਵੇਂ ਨੀ]",
    jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਪ ਨੀ, ਸਾ ਰੇ ਗ ਸਾ, ਰੇ, ਗ ਮ ਪ, ਮ ਗ ਮ ਰੇ, ਗ ਸਾ, ਰੇ ਮ ਪ ਧ ਮ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ, ਪ ਧ, ਮ ਪ, ਨੀ ਸਾਂ, ਪ ਧ ਮ ਗ, ਮ ਰੇ, ਗ ਮ ਪ ਮ ਗ ਮ ਰੇ, ਗ ਸਾ",
    pakad: "ਪ ਰੇ, ਗ ਮ ਪ ਮ ਗ ਮ ਰੇ ਗ ਸਾ, ਰੇ ਨੀ, ਸਾ, ਪ ਨੀ",
    note: "A Bilawal-thaat early-night raag blending Chhaya Nat and Tilak Kamod (uses both komal and shudh Ni). Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 44, slug: "deshkar", name: "Deshkar", gurmukhi: "ਰਾਗ ਦੇਸ਼ਕਾਰ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "ਮ-ਨੀ [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ, ਪ, ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਧ ਪ, ਧ ਗ, ਪ ਗ, ਰੇ ਸਾ, ਧ ਸਾ",
    pakad: "ਪ ਧ, ਗ ਪ, ਗ ਰੇ ਸਾ, ਰੇ ਪ ਸਾ",
    note: "A stately all-shudh pentatonic dawn raag of the upper tetrachord (omits Ma & Ni; close cousin of Bhupali), full of devotional feeling. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 45, slug: "chandrika", name: "Chandrika", gurmukhi: "ਰਾਗ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "ਗ ਵਰਜਿਤ; ਆਰੋਹ ਧ, ਅਵਰੋਹ ਨੀ ਵਰਜਿਤ [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0, samayNote: "Especially in the rains",
    aroha: "ਨੀ ਸਾ, ਰੇ ਮ ਪ, ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਧ ਪ, ਮ ਪ ਧ ਪ, ਮ ਰੇ ਨੀ, ਸਾ",
    pakad: "ਮ ਪ ਨੀ ਸਾਂ, ਧ ਪ, ਮ ਪ ਧ ਪ, ਮ ਰੇ, ਨੀ ਸਾ",
    note: "An all-shudh Bilawal-thaat midnight raag of the Sarang family (blends Sarang, Patdeep, Durga & Shyam-Kalyan; omits Ga), sung any time during the rainy season. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 46, slug: "ras-ranjani", name: "Ras Ranjani", gurmukhi: "ਰਾਗ ਰਸ ਰੰਜਨੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ, ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ, ਮ, ਰੇ ਸਾ",
    pakad: "ਰੇ ਮ, ਰੇ ਸਾ, ਧ ਨੀ ਸਾ",
    note: "A rare, richly pleasing all-shudh Bilawal-thaat midnight raag (omits Ga & Pa); the Re-Ma pairing casts a shadow of Durga, but the omitted Pa and prominent Ni set it apart, resting on the upper Sa. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 47, slug: "shankara", name: "Shankara", gurmukhi: "ਰਾਗ ਸ਼ੰਕਰਾ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "ਰੇ-ਮ (ਔਡਵ ਰੂਪ); ਜਾਂ ਸਿਰਫ਼ ਮ (ਸ਼ਾਡਵ ਰੂਪ) [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਪ ਨੀ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ, ਨੀ ਧ, ਸਾਂ ਨੀ ਪ, ਗ ਪ ਗ ਸਾ",
    pakad: "ਸਾਂ ਨੀ ਪ, ਨੀ ਧ ਸਾਂ, ਨੀ ਪ ਗ ਪ, ਗ ਸਾ",
    note: "A bold, all-shudh Bilawal-thaat late-evening raag (Ga vadi, Ni samvadi; the common form omits Re & Ma, a fuller form omits only Ma). Emphasis on Re & Dha can suggest Kalyan, but the 'Dha Pa, Sa Ni' phrasing and omitted Ma reveal Shankara; its sampuran cousin is Bihag. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 48, slug: "bhavani", name: "Bhavani", gurmukhi: "ਰਾਗ ਭਵਾਨੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ-ਨੀ [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Surtaar–Surtaar",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ ਧ ਸਾਂ",
    avaroha: "ਸਾਂ ਧ ਮ ਰੇ ਸਾ",
    pakad: "ਸਾ ਰੇ ਮ ਧ ਮ ਸਾਂ, ਧ ਮ ਰੇ ਸਾ",
    note: "A very sweet, tranquil four-note (surtaar) Bilawal-thaat midnight raag (omits Ga, Pa & Ni), moving mostly in the middle and upper octaves. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 49, slug: "hans-dhvani", name: "Hans Dhvani", gurmukhi: "ਰਾਗ ਹੰਸ ਧਵਨਿ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "ਮ-ਧ [ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਪ ਗ ਰੇ ਸਾ",
    pakad: "ਗ ਪ, ਨੀ ਪ, ਗ ਰੇ, ਗ ਰੇ ਸਾ",
    note: "A bright, all-shudh pentatonic early-night raag of Carnatic origin (omits Ma & Dha; Sa vadi, Pa samvadi), close kin to Shankara. Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  },
  {
    id: 50, slug: "chakradhar", name: "Chakradhar", gurmukhi: "ਰਾਗ ਚਕਰਧਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "ਪ [ਧ-ਨੀ ਅਲਪ; ਸਾਰੇ ਸ਼ੁੱਧ]",
    jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਧ ਨੀ ਸਾਂ",
    avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ",
    pakad: "ਸਾਂ, ਨੀ ਧ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਗ ਮ",
    note: "An all-shudh Bilawal-thaat midnight raag omitting Pa (with Dha & Ni used very sparingly; Ma vadi, Sa samvadi). Not one of the 31 raags of Sri Guru Granth Sahib Ji.",
    sggs: false
  }
];

// Transliteration map: Gurmukhi swar token -> Roman sargam (for the display).
// Convention (confirmed): UPPERCASE = shudh, lowercase = komal (re ga dha ni),
// tivra Ma = Ma' (Gurmukhi ਮੇ). Dot above = upper octave (Ṡa, ṙe).
const SWAR_MAP = {
  "ਸਾਂ": "Ṡa", "ਸਾ": "Sa",
  "ਰੇਂ": "Ṙe", "ਰੇ": "Re", "ਰੁਂ": "ṙe", "ਰੁ": "re",
  "ਗਾਂ": "Ġa", "ਗ": "Ga", "ਗੁਂ": "ġa", "ਗੁ": "ga",
  "ਮੇਂ": "Ṁa'", "ਮੇ": "Ma'", "ਮ'": "Ma'", "ਮ": "Ma",
  "ਪਂ": "Ṗa", "ਪ": "Pa",
  "ਧਂ": "Ḋha", "ਧ": "Dha", "ਧੁਂ": "ḋha", "ਧੁ": "dha",
  "ਨੀਂ": "Ṅi", "ਨੀਨੀ": "NiNi", "ਨੀ": "Ni", "ਨੀੁ": "ni", "ਨੁਂ": "ṅi", "ਨੁਨੁ": "nini", "ਨੁ": "ni"
};

function transliterateSwar(str) {
  if (!str) return "";
  return str.split(/(\s+|,|-|–)/).map(tok => {
    const t = tok.trim();
    if (t === "" ) return tok;
    if (t === "," || t === "-" || t === "–") return tok;
    return SWAR_MAP[t] || t;
  }).join("").replace(/\s+/g, " ").trim();
}

if (typeof module !== "undefined") { module.exports = { RAAGS, transliterateSwar }; }
