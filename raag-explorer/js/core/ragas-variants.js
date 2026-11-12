/*
 * Sub-variant raags — the numbered entries within each family in
 * "Sur Simran Sangeet, Part VII". Each entry's `parent` is the slug of its
 * family's primary raag in data.js (RAAGS).
 *
 * Extraction is incremental (this is a large, multi-pass job). Some folios are
 * missing from the scanned PDF (e.g. Sri family entries 4–11 on book folios
 * 20–21 are absent) — those are simply not in this file. `variantNum` is the
 * book's own numbering so gaps are visible.
 *
 * Same field schema as RAAGS. timeEnglish/centerHour are derived from the
 * book's samay (time) using the pahir system (see data.js header).
 */

const VARIANTS = [
  /* ===== Sri family (parent: sri) — present: 2,3,12–18; 4–11 missing in scan ===== */
  {
    parent: "sri", variantNum: 2, name: "Sri Tank", gurmukhi: "ਰਾਗ ਸ੍ਰੀ ਟੰਕ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Re", varjit: "Ma (in aroha) [komal Re & Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਗ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਰੁ ਰੁ ਪ, ਨੀ ਧੁ ਪ, ਗ ਰੁ, ਸਾ"
  },
  {
    parent: "sri", variantNum: 3, name: "Dhaval Sri", gurmukhi: "ਰਾਗ ਧਵਲ ਸ੍ਰੀ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ma (in aroha) [komal Re & Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਸਾ ਗ ਪ ਧੁ ਨੀ, ਸਾਂ ਗਾਂ ਰੁਂ ਸਾਂ, ਧੁ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "sri", variantNum: 12, name: "Hans Sri", gurmukhi: "ਰਾਗ ਹੰਸ ਸ੍ਰੀ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਪ ਮ, ਪ ਗ, ਗ ਪ, ਗ ਸਾ", pakad: "ਨੀ ਪ, ਮ ਪ, ਨੀ ਸਾ, ਸਾ ਗ ਮ ਪ, ਸਾਂ ਨੁ ਪ ਮ, ਮ ਪ ਗ ਸਾ"
  },
  {
    parent: "sri", variantNum: 13, name: "Maal Sri (1)", gurmukhi: "ਰਾਗ ਮਾਲ ਸ੍ਰੀ (1)",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ, ਮੇ ਗ, ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮੇ ਗ, ਪ ਗ ਸਾ", pakad: "ਸਾਂ, ਨੀ ਪ, ਮੇ ਗ, ਪ ਗ ਸਾ"
  },
  {
    parent: "sri", variantNum: 14, name: "Dhavla Sri", gurmukhi: "ਰਾਗ ਧਵਲਾ ਸ੍ਰੀ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Re, Ni [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਮੇ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਧ ਪ, ਮੇ ਗ, ਪ ਗ ਸਾ", pakad: "ਧ ਪ, ਮੇ ਗ, ਪ ਗ ਸਾ"
  },
  {
    parent: "sri", variantNum: 15, name: "Maal Sri (2)", gurmukhi: "ਰਾਗ ਮਾਲ ਸ੍ਰੀ (2)",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ, ਗ ਸਾ", pakad: "ਸਾ, ਨੀ ਸਾ, ਗ ਮੇ, ਪ ਮੇ, ਪ ਮੇ ਗ, ਗ ਮੇ ਗ ਸਾ"
  },
  {
    parent: "sri", variantNum: 16, name: "Mukul Sri", gurmukhi: "ਰਾਗ ਮੁਕੁਲ ਸ੍ਰੀ",
    thaat: "Todi", vadi: "Ma", samvadi: "Sa", varjit: "Re (in aroha) [komal Re & Dha; both Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ, ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਧੁ ਮ ਗ, ਮ ਗੁ ਰੁ ਸਾ", pakad: "ਸਾ, ਗ ਮ, ਗ ਪ, ਨੁ ਧੁ ਪ, ਧੁ ਮ, ਗ, ਮ ਗੁ ਰੁ ਸਾ, ਗ ਮ"
  },
  {
    parent: "sri", variantNum: 17, name: "Sri Vati", gurmukhi: "ਰਾਗ ਸ੍ਰੀ ਵਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha), Pa (avaroha) [komal Re & Ga; tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ, ਗੁ ਰੁ ਸਾ", pakad: "ਗੁ, ਮੇ ਪ ਨੀ ਸਾਂ ਨੀ, ਪ ਮੇ, ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "sri", variantNum: 18, name: "Kaal Murti", gurmukhi: "ਰਾਗ ਕਾਲ ਮੁਰਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Dha, Ni (in aroha) [komal Re, Ga, Dha & Ni; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ, ਗੁ ਰੇ ਗੁ, ਮੇ ਪ, ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮੇ ਗੁ ਰੁ ਸਾ", pakad: "ਗੁ ਰੁ ਗੁ, ਮੇ ਪ, ਸਾਂ ਨੁ ਧੁ ਪ, ਮੇ ਗੁ ਰੁ ਸਾ"
  },

  /* ===== Majh family (parent: majh) — present: 2–8 ===== */
  {
    parent: "majh", variantNum: 2, name: "Majh Khamaji", gurmukhi: "ਰਾਗ ਮਾਝ ਖਮਾਜੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (in aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਨੀ ਸਾਂ, ਸਾਂ ਨੁ ਧ ਪ, ਧ ਮ, ਸਾ ਗ ਮ"
  },
  {
    parent: "majh", variantNum: 3, name: "Majhi", gurmukhi: "ਰਾਗ ਮਾਝੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Ma (in aroha) [komal Ga; both Dha; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ, ਧੁ, ਧ ਨੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੁ ਧ ਧੁ, ਪ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ, ਨੁ ਧ ਨੁ ਧੁ ਪ, ਗੁ ਪ ਮ, ਗੁ ਰੇ ਸਾ, ਗੁ"
  },
  {
    parent: "majh", variantNum: 4, name: "Dhaman Majh", gurmukhi: "ਰਾਗ ਧਮਨ ਮਾਝ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "None [both Ma]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਰੇ ਸਾ, ਮ ਗ, ਪ ਮੇ ਧ ਪ, ਨੀ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ, ਮੇ ਰੇ, ਮ ਗ, ਰੇ ਸਾ", pakad: "ਮ ਗ, ਪ ਮੇ ਧ ਪ, ਪ ਰੇ, ਮ ਗ ਰੇ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "majh", variantNum: 5, name: "Khatnat", gurmukhi: "ਰਾਗ ਖਟਨਟ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None [both Re, Ga, Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਰੇ ਨੀ ਸਾ, ਮ ਗੁ ਮ, ਸਾ ਰੇ ਗ ਮ, ਪ, ਧੁ ਧੁ ਨੀ ਧ, ਪ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੁ ਪ, ਮ ਮ, ਪ, ਮ, ਪ, ਗ ਮ, ਸਾ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਧੁ ਧੁ, ਨੁ ਪ, ਰੇ ਪ, ਗੁ ਮ ਰੇ ਨੀ, ਸਾ, ਪ ਮ ਰੁ ਸਾ"
  },
  {
    parent: "majh", variantNum: 6, name: "Chap Ghantak", gurmukhi: "ਰਾਗ ਚਪ ਘੰਟਕ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Ma", varjit: "Ga [komal Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਰੇ ਮ, ਪ ਧੁ, ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "majh", variantNum: 7, name: "Jog Varan", gurmukhi: "ਰਾਗ ਜੋਗ ਵਰਨ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "Ni (in aroha) [komal Ga & Ni; both Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ, ਗੁ ਰੇ, ਮ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਧ ਮ ਪ, ਗੁ ਰੇ ਸਾ ਰੇ, ਨੀ ਸਾ", pakad: "ਸਾ ਰੇ ਨੀ ਸਾ, ਗੁ ਰੇ ਮ ਪ, ਧ ਮ ਪ, ਧੁ ਸਾਂ"
  },
  {
    parent: "majh", variantNum: 8, name: "Abhiri", gurmukhi: "ਰਾਗ ਆਭੀਰੀ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Pa", varjit: "None [komal Ga & Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ, ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗੁ, ਰੇ ਸਾ", pakad: "ਸਾ ਪ, ਧੁ ਪ, ਨੀ ਧੁ ਪ, ਮ ਗੁ, ਰੇ ਸਾ, ਨੀ ਸਾ"
  },

  /* ===== Shudh Gauri family (parent: shudh-gauri) — present: 2–13 ===== */
  {
    parent: "shudh-gauri", variantNum: 2, name: "Gauri Bairagan", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਬੈਰਾਗਣ",
    thaat: "Bhairav", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18,
    aroha: "ਸਾ ਨੀ ਰੁ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੁ, ਪ ਮ ਰੁ ਨੀ ਸਾ", pakad: "ਸਾ ਰੇ ਨੀ, ਪ ਮ ਪ ਨੀ, ਪ ਰੁ, ਸਾ ਰੁ, ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 3, name: "Gauri Guareri", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਗੁਆਰੇਰੀ",
    thaat: "Purvi", vadi: "Dha", samvadi: "Re", varjit: "Pa [komal Re & Dha; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18,
    aroha: "ਨੀ ਰੁ ਗ, ਮੇ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮੇ, ਗ, ਰੁ, ਸਾ", pakad: "ਰੁ ਗ ਰੁ, ਧੁ ਮੇ, ਗ ਨੀ, ਸਾ ਰੁ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 4, name: "Gauri Purbi", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਪੂਰਬੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ga (in aroha) [komal Re & Dha; both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਪ, ਗ ਮ ਗ, ਰੁ ਸਾ", pakad: "ਮ, ਰੁ ਮੇ ਪ, ਧੁ ਪ ਧੁ, ਮੇ ਪ, ਗ ਮ ਗ, ਰੁ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 5, name: "Gauri Cheti", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਚੇਤੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Ga (in aroha) [komal Re & Dha; both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਮੇ ਪ, ਮੇ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਧੁ ਮ, ਪ ਮੇ, ਧੁ ਮੇ, ਗ ਰੁ, ਗ ਰੁ ਸਾ", pakad: "ਨੀ ਧੁ, ਪ ਧੁ ਮ, ਧੁ ਮੇ, ਗ ਰੁ, ਗ ਰੁ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 6, name: "Gauri Dakhni", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਦਖਿਣੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Pa", varjit: "Ga [komal Dha; both Re]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਧੁ ਮ, ਰੁ ਨੀ ਸਾ", pakad: "ਸਾ, ਮ ਰੇ, ਮ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਮ ਰੁ, ਰੁ ਰੁ, ਮ ਰੁ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 7, name: "Gauri Deepki", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਦੀਪਕੀ",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "Dha (in aroha) [all twelve swars used]", jaati: "Vakra Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ, ਰੁ ਨੀ ਸਾ, ਮ, ਗ ਮ, ਗ ਰੇ ਗੁ, ਮੇ ਪ, ਮ ਨੁ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੁ ਸਾਂ, ਰੁਂ ਨੀ ਸਾਂ, ਨੁ ਧ ਪ, ਮੇ ਪ, ਧੁ ਪ ਮ ਗੁ ਰੇ ਗੁ ਸਾ, ਰੁ ਨੀ ਸਾ", pakad: "ਰੁ ਨੀ ਸਾ, ਮ, ਗ ਮ, ਗ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਪ, ਗੁ ਸਾ ਨੀ ਧ ਪ ਰੇ, ਸਾ, ਮ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 8, name: "Gauri Purbi Deepki", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਪੂਰਬੀ ਦੀਪਕੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re & Dha; both Ma]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੁ ਗ ਮ, ਮੇ ਮ ਗ ਮ, ਪ ਧੁ ਪ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਧੁ ਮੇ, ਮੇ ਧੁ, ਮੇ ਮ, ਗ ਮ, ਰੁ ਸਾ", pakad: "ਸਾ ਰੁ ਨੀ, ਸਾ, ਰੁ ਗ ਮ, ਮੇ ਮ ਗ ਰੁ, ਸਾ ਰੁ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 9, name: "Gauri bhi Sorath bhi", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਭੀ ਸੋਰਠਿ ਭੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (in aroha) [both Re, Ma & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੁ ਧ ਪ, ਧ ਮ ਪ ਗ, ਮ ਗ, ਰੁ ਨੀ ਸਾ", pakad: "ਸਾ, ਮ ਰੇ, ਮੇ ਪ, ਧ ਮ, ਗ ਰੁ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 10, name: "Gauri Majh", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਮਾਝ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re; both Ma, Dha & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6, samayNote: "Both junctions — dawn and dusk",
    aroha: "ਸਾ ਨੀ ਰੁ ਗ, ਮੇ ਪ ਗ, ਮ ਧੁ, ਨੀ ਰੁਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਪ ਨੁ ਧ ਪ, ਮੇ ਪ, ਗ ਮ, ਪ ਗ ਰੁ ਸਾ", pakad: "ਨੀ ਰੁ ਗ ਮ, ਪ ਗ, ਰੁ ਸਾ, ਮੇ ਪ ਧੁ ਨੀ, ਪ ਧ ਪ, ਪ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 11, name: "Gauri Mala", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਮਾਲਾ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re & Dha; both Ma & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18,
    aroha: "ਸਾ ਰੁ ਗ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗ ਰੁ ਸਾ", pakad: "ਗ, ਪ ਧੁ ਨੁ, ਧੁ ਪ, ਮੇ ਧੁ ਮੇ ਗ, ਮ ਗ ਰੁ ਨੀ, ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 12, name: "Gauri Malwa", gurmukhi: "ਰਾਗ ਗਾਉੜੀ ਮਾਲਵਾ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha), Ga (avaroha) [komal Re & Dha; tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਰੁ ਸਾ", pakad: "ਸਾ ਪ ਮੇ ਪ ਨੀ ਪ, ਮੇ ਪ ਰੁ, ਮੇ ਰੁ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-gauri", variantNum: 13, name: "Khiti Gauri", gurmukhi: "ਰਾਗ ਖਿਤੀ ਗਾਉੜੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (in aroha) [komal Re & Dha; both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ, ਗ ਮ ਗ, ਰੁ ਨੀ ਸਾ", pakad: "ਰੁ ਮੇ ਪ, ਨੀ ਧੁ ਪ, ਗ ਮ, ਗ ਮੇ, ਪ ਮ ਗ ਰੁ, ਨੀ ਸਾ"
  },
  {
    parent: "asa", variantNum: 2, name: "Asavari", gurmukhi: "ਰਾਗ ਆਸਾਵਰੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ga, Ni (aroha) [komal Ga, Dha & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੁ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 3, name: "Jaunpuri", gurmukhi: "ਰਾਗ ਜੌਨਪੁਰੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Ga (aroha) [komal Ga, Dha & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ, ਪ ਧੁ ਨੁ ਸਾਂ, ਧੁ ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 4, name: "Gandhari", gurmukhi: "ਰਾਗ ਗੰਧਾਰੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ga (aroha) [komal Ga & Dha; both Re & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੁ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੁ ਧੁ ਪ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 5, name: "Abheri", gurmukhi: "ਰਾਗ ਆਭੇਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Re, Ga, Dha & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਮ ਪ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੁ ਸਾ", pakad: "ਗੁ ਮ ਪ, ਨੁ ਸਾਂ, ਨੁ ਧੁ, ਪ ਮ ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 6, name: "Sameri", gurmukhi: "ਰਾਗ ਸਾਮੇਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Dha (aroha) [komal Ga, Dha & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 7, name: "Sham Mukhari", gurmukhi: "ਰਾਗ ਸ਼ਾਮ ਮੁਖਾਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re (avaroha) [komal Ga & Ni; both Dha]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ, ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੁ ਧੁ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਧ ਨੁ ਧੁ, ਪ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 8, name: "Navmanohari", gurmukhi: "ਰਾਗ ਨਵਮਨੋਹਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa (aroha); Dha, Ga (avaroha) [komal Dha & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਪ ਮ, ਰੇ ਸਾ", pakad: "ਰੇ ਮ, ਧੁ ਨੁ ਸਾਂ, ਨੁ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 9, name: "Neelam Pari", gurmukhi: "ਰਾਗ ਨੀਲਮ ਪਰੀ",
    thaat: "Asavari", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Dha; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਸਾ, ਧੁ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਪ ਧੁ, ਨੁ ਪ ਮ, ਗ ਮ, ਰੇ ਗ ਰੇ, ਮ ਗ ਸਾ", pakad: "ਰੇ ਗ ਮ ਸਾ, ਧੁ ਮ ਪ ਨੀ ਸਾਂ, ਨੁ ਪ ਧੁ, ਨੁ ਪ ਮ, ਗ ਮ, ਰੇ ਗ ਰੇ, ਮ ਗ ਸਾ"
  },
  {
    parent: "asa", variantNum: 10, name: "Ram Manohari", gurmukhi: "ਰਾਗ ਰਾਮ ਮਨੋਹਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Re (avaroha) [komal Dha]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਸਾ", pakad: "ਮ ਪ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗ, ਸਾ ਗ, ਸਾ"
  },
  {
    parent: "asa", variantNum: 11, name: "Shobhavari", gurmukhi: "ਰਾਗ ਸ਼ੋਭਾਵਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਮ ਗ ਗੁ ਸਾ", pakad: "ਧ ਨੁ ਸਾ, ਗ ਮ ਗ, ਸਾ ਗੁ ਨੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 12, name: "Jogeshwari", gurmukhi: "ਰਾਗ ਜੋਗੇਸ਼ਵਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Dha & Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਸਾਂ ਧੁ ਪ, ਮ ਪ ਧੁ, ਮ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 13, name: "Desi", gurmukhi: "ਰਾਗ ਦੇਸੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ga, Pa (aroha) [komal Ga & Dha; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਮ ਗੁ, ਰੇ ਗੁ, ਰੇ ਸਾ, ਰੇ, ਸਾ ਨੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 14, name: "Shudh Desi", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਦੇਸੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ga (aroha) [komal Ga, Dha & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਨੁ ਸਾਂ, ਨੁ ਧੁ ਪ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 15, name: "Kokil Pancham", gurmukhi: "ਰਾਗ ਕੋਕਿਲ ਪੰਚਮ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Re, Ni [komal Ga & Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਮ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮ ਪ, ਧੁ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਮ ਪ ਧ ਸਾਂ, ਗੁਂ ਸਾਂ, ਧੁ ਧੁ ਪ, ਮ ਪ ਧੁ ਪ, ਧੁ ਮ ਪ, ਮ ਗੁ ਪ ਗੁ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 16, name: "Urvashi", gurmukhi: "ਰਾਗ ਉਰਵਸ਼ੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re [komal Dha & Ni; both Ga]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੁ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ, ਧੁ ਮ ਨੁ ਧੁ, ਪ ਗੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 17, name: "Komal Desi", gurmukhi: "ਰਾਗ ਕੋਮਲ ਦੇਸੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ga, Pa (aroha) [komal Ga, Dha & Ni; both Re]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਮ ਪ, ਨੁ ਸਾਂ, ਨੁ ਧੁ ਪ, ਮ ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 18, name: "Khat", gurmukhi: "ਰਾਗ ਖਟ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga; both Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਗੁ ਮ ਪ, ਨੁ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਧ ਮ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਨੀ ਸਾ, ਮ ਗੁ, ਮ ਪ, ਨੁ ਧ, ਸਾ ਨੁ ਧ ਪ"
  },
  {
    parent: "asa", variantNum: 19, name: "Jheelaf", gurmukhi: "ਰਾਗ ਝੀਲਫ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "None [komal Ga, Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਰੇਂ, ਸਾਂ, ਨੁ ਧੁ ਪ, ਗੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਨੁ ਸਾ, ਗੁ ਮ ਪ, ਪ ਧੁ ਨੁ ਸਾਂ, ਧੁ ਪ, ਗੁ ਪ ਮ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 20, name: "Nat Khat", gurmukhi: "ਰਾਗ ਨਟ ਖਟ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None [both Re, Ga, Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਮ, ਮ ਪ, ਧੁ ਨੁ ਪ, ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ ਮ, ਰੇ ਸਾ", pakad: "ਪ ਨੁ ਧ ਸਾ, ਸਾ ਰੇ ਗ ਮ, ਧੁ ਨੁ ਪ, ਮ ਪ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 21, name: "Charukeshi", gurmukhi: "ਰਾਗ ਚਾਰੁਕੋਸ਼ੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਨੁ ਸਾ ਰੇ, ਗ ਰੇ, ਗ ਮ, ਨੁ ਧੁ ਪ ਸਾਂ, ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 22, name: "Jangla", gurmukhi: "ਰਾਗ ਜੰਗਲਾ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Pa", varjit: "None [komal Ga; both Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ, ਪ ਧ, ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਨੁ ਧ ਪ, ਪ ਨੀ ਸਾਂ, ਧ ਨੁ, ਪ ਨੁ, ਧ ਨੁ, ਧ ਪ"
  },
  {
    parent: "asa", variantNum: 23, name: "Uday Chandrika", gurmukhi: "ਰਾਗ ਉਦਯ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ni, Ga (avaroha) [komal Ga, Dha & Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ, ਗੁ ਮ, ਪ ਧੁ ਨੁ, ਸਾਂ, ਧੁ ਪ, ਮ ਰੇ"
  },
  {
    parent: "asa", variantNum: 24, name: "Amrit Vahin", gurmukhi: "ਰਾਗ ਅੰਮ੍ਰਿਤ ਵਾਹਿਨ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Re (aroha), Pa (avaroha) [komal Ga & Ni; both Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਮ ਪ, ਧ ਨੁ ਧ ਨੁ ਸਾਂ, ਨੁ ਧੁ, ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 25, name: "Aadi Bhairavi", gurmukhi: "ਰਾਗ ਆਦੀ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ni [komal Ga & Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਗੁ ਰੇ, ਗੁ ਮ, ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ, ਪ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ, ਪ ਮ, ਗੁ ਮ ਪ, ਧੁ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 26, name: "Kirpa Vati", gurmukhi: "ਰਾਗ ਕਿਰਪਾ ਵਤੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ma, Ni (aroha) [komal Ga, Dha & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਧੁ, ਸਾਂ, ਨੁ ਧੁ ਪ, ਧੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 27, name: "Chandrika Bhairavi", gurmukhi: "ਰਾਗ ਚੰਦ੍ਰਿਕਾ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Ga, Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਗੁ, ਰੇ ਗੁ, ਮ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ, ਗੁ ਰੇ ਗੁ, ਮ ਧੁ ਨੁ ਸਾਂ, ਨੁ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 28, name: "Jog Bhairavi", gurmukhi: "ਰਾਗ ਜੋਗ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Re", varjit: "Ni (aroha); Ma, Ga (avaroha) [komal Ga, Dha & Ni]", jaati: "Shadav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ, ਪ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ ਪ, ਮ ਪ ਧੁ ਪ, ਰੇ ਸਾ, ਨੁ ਧੁ, ਰੇ ਪ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 29, name: "Jhankar Dhwani", gurmukhi: "ਰਾਗ ਝਨਕਾਰ ਧਵਨਿ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "None [komal Dha & Ni; both Ga]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਪ ਧੁ, ਨੁ ਧੁ, ਨੁ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 30, name: "Bhogi", gurmukhi: "ਰਾਗ ਭੋਗੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Re (aroha) [komal Re, Ga & Ni; both Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਧੁ ਪ ਮ, ਗੁ ਰੁ ਸਾ", pakad: "ਮ ਪ, ਧੁ ਪ, ਧ ਨੁ, ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਧੁ ਪ ਮ, ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 31, name: "Rudra Gandhar", gurmukhi: "ਰਾਗ ਰੁਦਰ ਗੰਧਾਰ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Re (avaroha) [komal Ga, Dha & Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਰੇ, ਮ ਪ ਮ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਮ, ਗੁ ਸਾ", pakad: "ਰੇ ਗੁ ਰੇ, ਮ ਪ ਮ, ਧੁ ਨੁ, ਸਾਂ ਨੁ ਧੁ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "asa", variantNum: 32, name: "Lenk Dahan", gurmukhi: "ਰਾਗ ਲੈਂਕ-ਦਹਨ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਗ, ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ, ਪ ਮ ਗ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ, ਗੁ ਗ, ਮ ਪ, ਪ, ਨੀ ਨੀ, ਸਾਂ ਨੀ ਨੀ ਧ ਪ ਮ ਗ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 33, name: "Hem Kalyan", gurmukhi: "ਰਾਗ ਹੇਮ ਕਲਿਆ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ni (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਰੇ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਧ, ਨੀ, ਸਾਂ ਧ ਪ, ਮ, ਰੇ ਗੁ"
  },
  {
    parent: "asa", variantNum: 34, name: "Kaushik Ranjani", gurmukhi: "ਰਾਗ ਕੌਸਿਕ ਰੰਜਨੀ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Ma", varjit: "Pa", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 35, name: "Leela Vati", gurmukhi: "ਰਾਗ ਲੀਲਾ ਵਤੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni [komal Ga & Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ, ਪ ਗੁ, ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਰੇ ਪ, ਧੁ ਪ, ਸਾਂ ਰੇਂ, ਸਾਂ ਧੁ ਪ ਗੁ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 36, name: "Madmadi", gurmukhi: "ਰਾਗ ਮਦਮਾਦੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ga [komal Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ, ਪ, ਰੇ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 37, name: "Anand Bhairavi", gurmukhi: "ਰਾਗ ਅਨੰਦ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "Ni (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਪ, ਮ ਪ ਨੀ ਪ, ਸਾਂ ਨੀ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 38, name: "Dakhni Bhairavi", gurmukhi: "ਰਾਗ ਦਖਿਨੀ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਨੀ ਸਾਂ, ਪ ਧ ਨੀ ਧ ਪ, ਰੇ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 39, name: "Sindh Bhairavi", gurmukhi: "ਰਾਗ ਸਿੰਧ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਪ ਧ, ਪ ਗੁ ਰੇ, ਗੁ ਸਾ, ਸਾ ਰੇ ਨੀ ਸਾ, ਨੀ ਧ ਪ"
  },
  {
    parent: "asa", variantNum: 40, name: "Nat Bhairavi", gurmukhi: "ਰਾਗ ਨਟ ਭੈਰਵੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 41, name: "Ranjan", gurmukhi: "ਰਾਗ ਰੰਜਨ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re [komal Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗ ਸਾ", pakad: "ਧੁ ਨੁ ਸਾ, ਗ ਮ ਪ ਮ"
  },
  {
    parent: "asa", variantNum: 42, name: "Gaain Priya", gurmukhi: "ਰਾਗ ਗਾਇਨ ਪ੍ਰਿਅ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Dha & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਧੁ ਨੁ ਸਾ, ਰੇ, ਗ, ਮ"
  },
  {
    parent: "asa", variantNum: 43, name: "Rup Tej", gurmukhi: "ਰਾਗ ਰੂਪ ਤੇਜ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Dha & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧੁ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਮ ਗ ਸਾ", pakad: "ਧੁ ਨੁ ਸਾ ਗ ਮ"
  },
  {
    parent: "asa", variantNum: 44, name: "Gango Bhushni", gurmukhi: "ਰਾਗ ਗਾਂਗੋ ਭੁਸ਼ਨੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "None [komal Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ, ਗ ਮ, ਪ ਧੁ ਨੀ, ਸਾਂ ਨੀ, ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 45, name: "Bhog Leela", gurmukhi: "ਰਾਗ ਭੋਗ ਲੀਲਾ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Ma (aroha), Pa (avaroha) [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਧੁ ਨੀ, ਸਾਂ, ਨੀ ਧੁ, ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 46, name: "Saras Aanan", gurmukhi: "ਰਾਗ ਸਰਸ ਆਨਨ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਮ, ਗ ਰੇ ਸਾ, ਰੇ ਗ ਮ"
  },
  {
    parent: "asa", variantNum: 47, name: "Sar Sangi", gurmukhi: "ਰਾਗ ਸਰ ਸਾਂਗੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "None [komal Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਪ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 48, name: "Manohari", gurmukhi: "ਰਾਗ ਮਨੋਹਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Re (avaroha) [komal Dha]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਸਾ", pakad: "ਗ ਮ, ਪ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ, ਗ ਸਾ"
  },
  {
    parent: "asa", variantNum: 49, name: "Anand Leela", gurmukhi: "ਰਾਗ ਅਨੰਦ ਲੀਲਾ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [komal Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ, ਰੇ ਗ ਮ, ਪ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 50, name: "Gayatri", gurmukhi: "ਰਾਗ ਗਾਯਤਰੀ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "Ga [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧੁ ਪ, ਮ ਰੇ ਨੀ ਸਾਂ"
  },
  {
    parent: "asa", variantNum: 51, name: "Naam Vant", gurmukhi: "ਰਾਗ ਨਾਮ ਵੰਤ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ma, Ni", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਪ ਧ, ਪ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 52, name: "Gaan Roop", gurmukhi: "ਰਾਗ ਗਾਨ ਰੂਪ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ, ਰੇ ਸਾ", pakad: "ਸਾ ਧੁ, ਸਾ, ਰੇ ਮ ਪ, ਮ, ਰੇ, ਸਾ"
  },
  {
    parent: "asa", variantNum: 53, name: "Dhenupal", gurmukhi: "ਰਾਗ ਧੇਨੁਪਾਲ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਪ ਮ, ਗੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 54, name: "Mayesh", gurmukhi: "ਰਾਗ ਮਾਯੇਸ਼",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Ma", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ ਪ, ਧ ਪ, ਗੁ ਰੇ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "asa", variantNum: 55, name: "Ghanta Karan", gurmukhi: "ਰਾਗ ਘੰਟਾ ਕਰਣ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਧੁ ਨੀ ਸਾ, ਰੇ, ਸਾ, ਰੇ ਗ ਮ, ਰੇ, ਸਾ"
  },
  {
    parent: "asa", variantNum: 56, name: "Maithili", gurmukhi: "ਰਾਗ ਮੈਥਿਲੀ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "Ma [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਧੁ ਪ, ਪ ਧੁ ਨੀ, ਸਾ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "asa", variantNum: 57, name: "Nir Sohan", gurmukhi: "ਰਾਗ ਨਿਰ ਸੋਹਨ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "Ma, Ni [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਗ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ ਸਾ, ਰੇ ਸਾ, ਧੁ ਪ"
  },
  {
    parent: "asa", variantNum: 58, name: "Devgandhar", gurmukhi: "ਰਾਗ ਦੇਵਗੰਧਾਰ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Ga", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਧ ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ, ਸਾ ਗੁ"
  },
  {
    parent: "gujri", variantNum: 2, name: "Navneet", gurmukhi: "ਰਾਗ ਨਵਨੀਤ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "gujri", variantNum: 3, name: "Chandra Jyoti", gurmukhi: "ਰਾਗ ਚੰਦ੍ਰ ਜਿਓਤਿ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਧ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਮ ਪ, ਧ ਪ, ਨੀ, ਸਾਂ ਨੀ ਧ, ਪ ਧ, ਪ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "gujri", variantNum: 4, name: "Chandra Rekha", gurmukhi: "ਰਾਗ ਚੰਦ੍ਰ ਰੇਖਾ",
    thaat: "Todi", vadi: "Ga", samvadi: "Dha", varjit: "Ni (aroha), Pa (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "gujri", variantNum: 5, name: "Chakor Dhwani", gurmukhi: "ਰਾਗ ਚਕੋਰ ਧਵਨਿ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "Pa (avaroha)", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਮ, ਗੁ ਰੇ ਸਾ, ਸਾ ਰੇ ਗੁ"
  },
  {
    parent: "gujri", variantNum: 6, name: "Saraswati Chandra", gurmukhi: "ਰਾਗ ਸਰਸਵਤੀ ਚੰਦ੍ਰ",
    thaat: "Todi", vadi: "Pa", samvadi: "Re", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ, ਪ ਗੁ ਰੇ, ਗੁ ਸਾ", pakad: "ਨੀ ਪ ਧ ਮ, ਪ ਗੁ ਸਾ, ਰੇ ਮ ਪ"
  },
  {
    parent: "devgandhari", variantNum: 2, name: "Mudri", gurmukhi: "ਰਾਗ ਮੁਰਡੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਮ, ਸਾ ਗ ਮ ਪ, ਨੀ ਧ, ਸਾਂ ਧ ਨੀ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "devgandhari", variantNum: 3, name: "Devgandhar", gurmukhi: "ਰਾਗ ਦੇਵਗੰਧਾਰ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Re", varjit: "Ga, Ni (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਗ ਰੇ, ਸਾ ਰੇ, ਗ ਸਾ"
  },
  {
    parent: "devgandhari", variantNum: 4, name: "Pandhri", gurmukhi: "ਰਾਗ ਪੰਧਰੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਧ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "devgandhari", variantNum: 5, name: "Malini", gurmukhi: "ਰਾਗ ਮਾਲਿਨੀ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Ma [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ, ਧ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "devgandhari", variantNum: 6, name: "Panagmrit", gurmukhi: "ਰਾਗ ਪਾਨਗ੍ਰਿਮਤ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਧ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 2, name: "Bihag", gurmukhi: "ਰਾਗ ਬਿਹਾਗ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਨੀ ਸਾ, ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗ ਮ ਪ ਮੇ ਪ, ਗ ਮ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 3, name: "Pat Bihag", gurmukhi: "ਰਾਗ ਪਟ ਬਿਹਾਗ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਨੁ ਧ ਪ, ਗ ਮ ਰੇ, ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਪ, ਪ ਗ, ਮ ਗ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 4, name: "Gandharv Bihag", gurmukhi: "ਰਾਗ ਗੰਧਰਵ ਬਿਹਾਗ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮੇ ਪ, ਮ ਗ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ, ਨੀ ਧ ਪ, ਮੇ ਪ, ਮ ਗ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 5, name: "Nat Bihag", gurmukhi: "ਰਾਗ ਨਟ ਬਿਹਾਗ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Dha (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ, ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਨੀ ਧ ਪ, ਪ ਮੇ, ਗ ਮ ਗ, ਰੇ ਨੀ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ ਪ, ਗ ਮ ਗ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 6, name: "Maru Bihag", gurmukhi: "ਰਾਗ ਮਾਰੂ ਬਿਹਾਗ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਪ ਨੀ ਸਾ, ਗ, ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗ, ਮ ਗ ਮ, ਮ ਗ, ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਗ, ਮ ਗ, ਰੇ ਸਾ, ਨੀ ਸਾ ਮ"
  },
  {
    parent: "bihagra", variantNum: 7, name: "Mewara", gurmukhi: "ਰਾਗ ਮੇਵਾੜਾ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਧ, ਮ, ਧ ਪ, ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 8, name: "Muravanti (Dakhni)", gurmukhi: "ਰਾਗ ਮੁਰਾਵੰਤੀ (ਦਖਿਨੀ)",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਸਾਂ, ਰੇ ਗ ਮ, ਪ ਨੀ ਸਾਂ, ਰੇ ਗ, ਧ, ਨੀ ਸਾਂ ਰੇਂ, ਧ ਨੀ ਸਾਂ, ਧ ਨੀ"
  },
  {
    parent: "bihagra", variantNum: 9, name: "Gopenj Namonath", gurmukhi: "ਰਾਗ ਗੋਪੇਨਜ ਨਮੋਨਾਥ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (aroha); Ma, Ni (avaroha) [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾ ਧ, ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਗ, ਰੇ ਸਾ, ਧ ਪ, ਨੀ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 10, name: "Gopal", gurmukhi: "ਰਾਗ ਗੋਪਾਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਪ ਨੀ ਸਾ, ਰੇ ਮ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "bihagra", variantNum: 11, name: "Gopalta", gurmukhi: "ਰਾਗ ਗੋਪਲਤਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਮ, ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "bihagra", variantNum: 12, name: "Dhimti", gurmukhi: "ਰਾਗ ਧੀਮਤੀ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Dha [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਰੇ ਮ, ਗ ਰੇ ਨੀ ਸਾ, ਨੀ ਪ ਨੀ ਸਾ ਰੇ"
  },
  {
    parent: "vadhans", variantNum: 2, name: "Vadhans Dakhni", gurmukhi: "ਰਾਗ ਵੜਹੰਸ ਦਖਿਨੀ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni (aroha) [komal Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਰੇ, ਮ ਗ ਸਾ", pakad: "ਮ ਰੇ, ਮ ਗ ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 3, name: "Ravi Kaunsh", gurmukhi: "ਰਾਗ ਰਵੀ ਕੌਂਸ਼",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha), Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗ ਮ ਰੇ, ਗੁ ਰੇ, ਸਾ ਮ, ਧ ਨੀ, ਧ ਮ, ਨੀ ਧ ਗ ਪ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 4, name: "Kamkaunsh", gurmukhi: "ਰਾਗ ਕਾਮਕੌਂਸ਼",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re [both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਗ, ਮ ਸਾ", pakad: "ਸਾ ਮ, ਗ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੁ ਧ ਪ, ਮ ਗ ਮ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 5, name: "Jakkaunsh", gurmukhi: "ਰਾਗ ਜਕਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ ਮੇ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਮੇ, ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ ਧ ਨੀ ਧ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 6, name: "Rakat Hans", gurmukhi: "ਰਾਗ ਰਕਤ ਹੰਸ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Ni (aroha); Pa, Ga (avaroha) [komal Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਪ ਮ, ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਸਾਂ, ਨੁ ਪ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 7, name: "Chandu Kauns", gurmukhi: "ਰਾਗ ਚੰਦੂ ਕੌਂਸ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਧ ਨੀ ਸਾ, ਗੁ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਗੁ ਮ ਗੁ ਸਾ, ਗੁ ਮ ਧ ਮ ਨੀ ਸਾਂ, ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 8, name: "Madhukaunsh", gurmukhi: "ਰਾਗ ਮਧੁਕੌਂਸ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਪ ਨੀ, ਸਾ ਗੁ ਸਾ, ਸਾ ਗੁ, ਮ ਪ ਨੀ, ਪ ਮ ਗੁ ਨੀ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 9, name: "Gun Kauns", gurmukhi: "ਰਾਗ ਗੁਣ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਪ ਗੁ ਮ, ਗੁ ਰੇ, ਸਾ ਨੀ ਧ, ਨੀ ਸਾ", pakad: "ਪ ਮ, ਪ ਗੁ ਮ, ਨੀ ਧ, ਨੀ ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਪ ਗੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 10, name: "Hans Kankani", gurmukhi: "ਰਾਗ ਹੰਸ ਕੰਕਣੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ, ਗ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਗ ਮ ਪ, ਪ ਨੀ ਧ ਪ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 11, name: "Bhinn Kaunsh", gurmukhi: "ਰਾਗ ਭਿੰਨ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਮ ਗੁ ਸਾ", pakad: "ਪ ਨੀ ਸਾ, ਗੁ ਸਾ, ਗੁ ਮ ਗੁ, ਧ ਨੀ ਧ ਮ, ਗੁ, ਮ ਧ ਮ, ਗੁ ਮ ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 12, name: "Nand Kauns", gurmukhi: "ਰਾਗ ਨੰਦ ਕੌਂਸ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Re (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ, ਮ ਧ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਮ ਗੁ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ, ਮ ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 13, name: "Hari Kaunsh", gurmukhi: "ਰਾਗ ਹਰੀ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ni", samvadi: "Ga", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗੁ, ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ ਸਾ, ਗੁ ਮੇ ਧ ਨੀ ਧ ਮੇ, ਧ ਨੀ ਧ, ਗੁ ਮੇ, ਸਾ ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 14, name: "Deep Kaunsh", gurmukhi: "ਰਾਗ ਦੀਪ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਮ ਪ, ਗੁ ਮ ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਨੀ ਪ, ਮ ਪ, ਨੀ ਸਾ, ਗੁ ਮ ਪ ਗੁ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 15, name: "Shiv Kaunsh", gurmukhi: "ਰਾਗ ਸ਼ਿਵ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (avaroha)", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਨੀ ਸਾ, ਸਾ ਰੇ ਗੁ ਪ, ਮ ਗੁ, ਰੇ ਗੁ ਪ ਮ, ਧ ਪ, ਧ ਮ ਸਾ, ਸਾ ਨੀ ਧ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 16, name: "Dhani Kaunsh", gurmukhi: "ਰਾਗ ਧਾਨੀ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਪ ਗੁ, ਮ ਗੁ ਸਾ", pakad: "ਨੀ ਪ, ਗੁ ਮ, ਪ ਗੁ, ਸਾ, ਮ ਗੁ ਮ, ਨੀ ਪ ਗੁ, ਮ ਪ, ਸਾਂ ਨੀ ਪ, ਮ, ਗੁ, ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 17, name: "Gopi Kaunsh", gurmukhi: "ਰਾਗ ਗੋਪੀ ਕੌਂਸ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਧ ਮ, ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਧ ਮ, ਪ ਗੁ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ, ਪ ਧ ਮ, ਪ ਧ, ਸਾਂ ਧ, ਨੀ ਪ, ਧ ਮ, ਪ ਗੁ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 18, name: "Arun Kaunsh", gurmukhi: "ਰਾਗ ਅਰੁਣ ਕੌਂਸ਼",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਮ ਸਾ", pakad: "ਸਾ, ਗ ਮ ਧੁ ਸਾ, ਮ ਸਾਂ, ਗ ਮ ਸਾਂ, ਗ ਮ ਧੁ ਸਾ, ਧੁ ਮ, ਨੀ ਧੁ ਮ, ਧੁ ਨੀ ਸਾਂ"
  },
  {
    parent: "vadhans", variantNum: 19, name: "Madhur Kaunsh", gurmukhi: "ਰਾਗ ਮਧੁਰ ਕੌਂਸ਼",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Ma", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗੁ, ਮ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਮ, ਗੁ ਮ, ਧੁ, ਨੀ ਧੁ ਮ, ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਮ ਧੁ ਮ, ਗੁ ਮ, ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 20, name: "Malkaunsh", gurmukhi: "ਰਾਗ ਮਾਲਕੌਂਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮ ਗੁ, ਮ ਗੁ ਸਾ", pakad: "ਧੁ ਨੀ ਸਾਂ, ਧੁ ਨੀ ਧੁ ਮ, ਗੁ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 21, name: "Jog Kauns", gurmukhi: "ਰਾਗ ਜੋਗ ਕੌਂਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ ਮ, ਪ ਧੁ ਪ, ਮ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਪ ਧੁ ਨੀ ਧੁ ਪ ਮ, ਗ ਮ ਗੁ ਸਾ", pakad: "ਸਾ ਧੁ ਨੀ ਸਾ, ਗੁ ਸਾ, ਗ ਮ, ਪ ਮ ਗ, ਮ ਗੁ ਸਾ, ਧੁ ਨੀ ਸਾਂ, ਗ ਮ"
  },
  {
    parent: "vadhans", variantNum: 22, name: "Pancham Kaunsh", gurmukhi: "ਰਾਗ ਪੰਚਮ ਕੌਂਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ, ਮ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਪ ਮ ਗੁ ਸਾ", pakad: "ਸਾ, ਧੁ ਨੀ ਧੁ ਮ ਪ ਮ, ਧੁ ਨੀ ਸਾ, ਗੁ ਮ ਪ ਮ, ਧੁ ਮ ਪ ਮ, ਗੁ ਮ ਗੁ ਪ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 23, name: "Sampuran Kaunsh", gurmukhi: "ਰਾਗ ਸੰਪੂਰਨ ਕੌਂਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਮ, ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਮ ਪ ਮ ਗੁ ਸਾ, ਸਾ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗੁ, ਸਾ ਰੇ ਸਾ, ਮ ਧੁ ਨੀ ਧੁ ਮ ਗੁ, ਮ ਪ ਮ ਗੁ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 24, name: "Jayant Kaunsh", gurmukhi: "ਰਾਗ ਜਯੰਤ ਕੌਂਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਧੁ, ਨੀ ਧੁ, ਮ ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਪ ਨੀ ਰੇ, ਰੇ ਗੁ ਰੇ ਸਾ, ਰੇ ਗ ਮ ਪ, ਮ ਗੁ, ਮ ਧੁ ਨੀ ਧੁ ਮ ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 25, name: "Kul Kaunsh", gurmukhi: "ਰਾਗ ਕੁਲ ਕੌਂਸ਼",
    thaat: "Asavari", vadi: "Pa", samvadi: "Re", varjit: "Ni (aroha) [komal Ni; both Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੁ ਧ ਪ, ਮ ਗ, ਰੇ ਗ ਮ, ਪ ਧੁ ਸਾਂ, ਨੁ ਧ ਪ"
  },
  {
    parent: "vadhans", variantNum: 26, name: "Mohan Kaunsh", gurmukhi: "ਰਾਗ ਮੋਹਨ ਕੌਂਸ਼",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha); Re, Pa (avaroha)", jaati: "Shadav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਮ ਗ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਮ ਧੁ ਨੀ ਧੁ, ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਮ ਗ ਸਾ, ਗ ਮ"
  },
  {
    parent: "vadhans", variantNum: 27, name: "Ranjan Kaunsh", gurmukhi: "ਰਾਗ ਰੰਜਨ ਕੌਂਸ਼",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ, ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਨੀ ਧੁ ਗੁ, ਧੁ ਸਾ", pakad: "ਮ ਗੁ ਸਾਂ, ਨੀ ਧੁ, ਨੀ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 28, name: "Paraj Kaunsh", gurmukhi: "ਰਾਗ ਪਰਜ ਕੌਂਸ਼",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ, ਗ ਮ ਗੁ ਸਾ, ਗ ਮ ਧੁ ਨੀ, ਮੇ ਧੁ ਨੀ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾ ਰੇਂ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਨੀ, ਧੁ ਪ, ਮੇ ਪ ਧੁ ਪ, ਗ ਮ ਗ, ਰੇ ਸਾ, ਗ ਮ ਗੁ ਸਾ", pakad: "ਮੇ, ਧੁ ਨੀ, ਮੇ, ਪ, ਗ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 29, name: "Pushap Lalit", gurmukhi: "ਰਾਗ ਪੁਸ਼ਪ ਲਲਿਤ",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Ga, Ni (avaroha)", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ, ਪ ਮੇ, ਰੇ ਸਾ", pakad: "ਗ, ਮੇ ਧੁ, ਨੀ ਸਾਂ, ਧੁ, ਪ ਮੇ, ਰੇ ਸਾ"
  },
  {
    parent: "vadhans", variantNum: 30, name: "Dhaat Vardhani", gurmukhi: "ਰਾਗ ਧਾਤੁ ਵਰਧਨੀ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ, ਪ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "sorath", variantNum: 2, name: "Tilak Kamod", gurmukhi: "ਰਾਗ ਤਿਲਕ ਕਾਮੋਦ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Dha (aroha) [all shudh]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਸਾ, ਰੇ ਮ ਪ, ਪ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਪ ਧ ਮ ਗ, ਸਾ ਰੇ ਗ, ਸਾ ਨੀ", pakad: "ਪ ਨੀ ਸਾ ਰੇ ਗ, ਰੇ ਗ ਸਾ, ਰੇ ਪ ਮ ਗ, ਸਾਂ ਨੀ"
  },
  {
    parent: "sorath", variantNum: 3, name: "Desh", gurmukhi: "ਰਾਗ ਦੇਸ਼",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਰੇ ਗ ਸਾ", pakad: "ਨੁ ਧ ਪ, ਧ ਮ, ਗ ਰੇ, ਗ ਨੀ ਸਾ"
  },
  {
    parent: "sorath", variantNum: 4, name: "Deshakh", gurmukhi: "ਰਾਗ ਦੇਸ਼ਾਖਯ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਮ ਰੇ, ਪ ਮ, ਨੀ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਮ ਨੀ ਪ ਸਾਂ, ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ"
  },
  {
    parent: "sorath", variantNum: 5, name: "Sudhan Pal", gurmukhi: "ਰਾਗ ਸੁਧਨ ਪਾਲ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਗੁ ਸਾ", pakad: "ਮ, ਗੁ ਮ, ਪ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਗੁ ਰੇ ਗੁ ਸਾ"
  },
  {
    parent: "sorath", variantNum: 6, name: "Najani", gurmukhi: "ਰਾਗ ਨਜਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ni", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਸਾ, ਰੇ, ਗੁ ਮ, ਪ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 2, name: "Dhanasri (Bhim Palasi Anga)", gurmukhi: "ਰਾਗ ਧਨਾਸਿਰੀ (ਭੀਮ ਪਲਾਸੀ ਅੰਗ)",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਨੀ ਸਾ, ਮ ਗੁ ਮ ਪ, ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਗੁ, ਮ ਗੁ, ਪ, ਨੀ ਧ ਪ, ਮ ਗੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 3, name: "Maru Dhanasri", gurmukhi: "ਰਾਗੁ ਮਾਰੂ ਧਨਾਸਿਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮ ਗੁ, ਪ ਧ, ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਪ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਮ ਗੁ, ਪ ਧ, ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਪ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 4, name: "Dhanasri (Khamaj Anga)", gurmukhi: "ਰਾਗ ਧਨਾਸਿਰੀ (ਅੰਗ ਖਮਾਜ)",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਧ ਪ ਧ ਮ, ਪ ਗ, ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ, ਗ ਮ ਪ, ਨੁ ਧ ਪ, ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 5, name: "Sindh Dhanasri", gurmukhi: "ਰਾਗ ਸਿੰਧ ਧਨਾਸਿਰੀ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ, ਸਾ ਰੇ ਗੁ ਮ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਪ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 6, name: "Sindhu Dhanasi (Dakhni)", gurmukhi: "ਰਾਗ ਇੰਧੂ ਧਨਾਸੀ (ਦਖਿਨੀ)",
    thaat: "Todi", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮੇ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮੇ, ਧ ਨੀ ਸਾਂ ਨੀ, ਧ ਪ, ਧ ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 7, name: "Multani Dhanasri", gurmukhi: "ਰਾਗ ਮੁਲਤਾਨੀ ਧਨਾਸਿਰੀ",
    thaat: "Todi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਮ ਗੁ ਮੇ ਪ, ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ, ਮ ਗੁ, ਗੁ ਮੇ, ਪ ਮੇ ਗੁ, ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ, ਮ ਗੁ, ਗੁ ਮੇ ਪ ਮੇ, ਧ ਪ ਮੇ ਗੁ, ਮ ਗ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 8, name: "Puria Dhanasri", gurmukhi: "ਰਾਗ ਪੁਰੀਆ ਧਨਾਸਿਰੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਨੀ ਰੇ ਗ, ਮੇ ਪ, ਧ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਰੇ, ਗ, ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗੁ, ਮੇ ਪ, ਧ ਪ ਮੇ ਗ, ਮੇ ਰੇ ਗ, ਧ ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 9, name: "Dhanasri (Bhairavi Anga)", gurmukhi: "ਰਾਗ ਧਨਾਸਿਰੀ (ਭੈਰਵੀ ਅੰਗ)",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਨੀ ਸਾ, ਮ ਗੁ, ਮ ਪ, ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮ ਪ, ਮ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਗੁ, ਮ ਪ ਨੀ, ਧ ਪ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 10, name: "Dhanasi (Dakhni)", gurmukhi: "ਰਾਗ ਧਨਾਯਸੀ (ਦਖਿਨੀ)",
    thaat: "Bhairavi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ ਨੀ ਸਾਂ, ਪ ਨੀ ਰੇਂ ਸਾਂ, ਸਾ ਰੇ ਨੀ ਸਾਂ, ਪ ਨੀ ਮ ਪ, ਮ ਗੁ, ਪ ਮ, ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 11, name: "Kundal Dhanasi (Dakhni)", gurmukhi: "ਰਾਗ ਕੁੰਡਲ ਧਨਾਯਸੀ (ਦਖਿਨੀ)",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਮ, ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 12, name: "Bhog Dhanayasi (Dakhni)", gurmukhi: "ਰਾਗ ਭੋਗ ਧਨਾਯਸੀ (ਦਖਿਨੀ)",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗੁ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਪ ਧ, ਨੀ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮੇ ਪ, ਨੀ ਸਾਂ, ਨੀ, ਪ ਧ, ਨੀ ਪ ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 13, name: "Maruv Dhanayasi (Dakhni)", gurmukhi: "ਰਾਗ ਮਾਰੁਵ ਧਨਾਯਸੀ (ਦਖਿਨੀ)",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ, ਧ ਨੀ ਧ ਪ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਧ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਪ, ਧ ਨੀ ਧ ਪ, ਮ ਧ, ਮ ਪ, ਮ ਧ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 14, name: "Shudh Dhanayasi (Dakhni)", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਧਨਾਯਸੀ (ਦਖਿਨੀ)",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਮ, ਪ, ਸਾ ਗੁ ਸਾ, ਗੁ, ਮ ਪ, ਨੀ ਪ, ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 15, name: "Madhura", gurmukhi: "ਰਾਗ ਮਧੁਰਾ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ma", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ, ਸਾ, ਨੀ ਪ, ਸਾ ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 16, name: "Rain Pati", gurmukhi: "ਰਾਗ ਰੈਨ ਪਤੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਪ ਮ ਗੁ ਸਾ", pakad: "ਮ ਪ, ਧ ਪ, ਮ, ਗੁ ਸਾ, ਧ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 17, name: "Puni Todh", gurmukhi: "ਰਾਗ ਪੁਨੀ ਤੋਡ਼",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Ni", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਸਾ, ਰੇ ਰੇ ਗੁ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-dhanasri", variantNum: 18, name: "Rameshwar", gurmukhi: "ਰਾਗ ਰਾਮੇਸ਼ਵਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Ma", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗੁ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਸਾ", pakad: "ਗੁ ਪ, ਧ ਨੀ, ਧ ਪ ਗੁ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 2, name: "Manjari", gurmukhi: "ਰਾਗ ਮੰਜਰੀ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 3, name: "Madhavi Manohari (Dakhni)", gurmukhi: "ਰਾਗ ਮਾਧਵੀ ਮਨੋਹਰੀ (ਦਖਿਨੀ)",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗੁ, ਰੇ ਗੁ ਮੇ ਪ, ਨੀ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮੇ ਗੁ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮੇ ਪ, ਨੀ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ, ਮੇ ਗੁ"
  },
  {
    parent: "jaitsri", variantNum: 4, name: "Rudu Manjari", gurmukhi: "ਰਾਗ ਰੁਦੂ ਮੰਜਰੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Ma (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਨੀ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਧੁ ਪ, ਸਾ ਰੇ ਗੁ ਪ, ਗੁ ਰੇ ਗੁ ਪ, ਧੁ ਪ, ਧੁ ਨੀ, ਸਾਂ ਨੀ ਧੁ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 5, name: "Sada Kesari", gurmukhi: "ਰਾਗ ਸਦਾ ਕੇਸਰੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ, ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮੇ ਪ ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 6, name: "Saj Giri", gurmukhi: "ਰਾਗ ਸਾਜ ਗਿਰੀ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਰੇ ਗ, ਮੇ ਗ, ਮੇ ਪ, ਧੁ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਧ, ਮੇ ਗ, ਪ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ, ਮੇ ਗ, ਮੇ ਪ, ਧੁ ਪ, ਮੇ ਨੀ ਧ ਸਾਂ, ਰੇ ਨੀ ਧੁ ਪ, ਪ ਧ ਗ, ਮੇ ਧ ਗ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 7, name: "Darap Panjri", gurmukhi: "ਰਾਗ ਦਰਪ ਪੰਜਰੀ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "Dha (aroha), Re (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ, ਰੇ ਗ ਮੇ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਸਾ", pakad: "ਗ, ਰੇ ਗ, ਮੇ, ਪ ਨੀ, ਸਾਂ, ਨੀ ਧ, ਪ, ਮੇ ਗ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 8, name: "Vishav Pahtav", gurmukhi: "ਰਾਗ ਵਿਸ਼ਵ ਪਹਟਾਵ",
    thaat: "Todi", vadi: "Re", samvadi: "Pa", varjit: "Ma, Ni (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਪ ਮੇ, ਗੁ ਰੇ, ਗੁ ਰੇ, ਨੀ ਧੁ ਪ ਸਾ"
  },
  {
    parent: "jaitsri", variantNum: 9, name: "Saraswati Chandu", gurmukhi: "ਰਾਗ ਸਰਸਵਤੀ ਚੰਦੂ",
    thaat: "Todi", vadi: "Pa", samvadi: "Re", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਮੇ ਪ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ, ਗੁ ਰੇ ਗੁ ਸਾ", pakad: "ਨੀ ਪ, ਧ ਮੇ ਪ, ਗੁ ਸਾ, ਰੇ ਮੇ ਪ"
  },
  {
    parent: "shudh-todi", variantNum: 2, name: "Multani Todi", gurmukhi: "ਰਾਗ ਮੁਲਤਾਨੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਮੇ ਗੁ, ਪ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 3, name: "Basanti Todi", gurmukhi: "ਰਾਗ ਬਸੰਤੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ, ਮੇ ਪ, ਮੇ ਧੁ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਮੇ ਗ, ਮੇ ਗ, ਮੇ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 4, name: "Lachmi Todi", gurmukhi: "ਰਾਗ ਲਛਮੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Ma", samvadi: "Sa", varjit: "Ga (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਰੇ ਨੀ ਸਾ, ਰੇ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਮ ਪ ਮ, ਗ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਪ ਸਾਂ, ਧ ਨੀ ਧ ਪ, ਗ ਮ ਪ ਧ, ਮ ਪ ਗੁ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 5, name: "Anjani Todi", gurmukhi: "ਰਾਗ ਅੰਜਨੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha); Ma (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਧ ਪ, ਧ ਪ, ਮ ਪ ਗੁ, ਪ ਗੁ ਰੇ, ਗੁ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 6, name: "Ramkali Todi", gurmukhi: "ਰਾਗ ਰਮਕਲੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਪ ਧੁ ਪ, ਮੇ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਮੇ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਮੇ ਪ ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 7, name: "Darbari Todi", gurmukhi: "ਰਾਗ ਵਰਬਾਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "None", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਧੁ ਨੀ ਪ ਸਾ, ਸਾ ਰੇ ਸਾ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 8, name: "Bahaduri Todi (1)", gurmukhi: "ਰਾਗ ਬਹਾਦੁਰੀ ਟੋਡੀ (1)",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Pa (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਨੀ ਰੇ ਗੁ, ਮੇ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਗੁ, ਮ ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਨੀ ਧੁ ਪ, ਮ ਗੁ, ਰੇ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 9, name: "Bahaduri Todi (2)", gurmukhi: "ਰਾਗ ਬਹਾਦੁਰੀ ਟੋਡੀ (2)",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "Ni (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਰੇ ਨੀ, ਸਾ ਰੇ ਗੁ, ਮ ਪ ਨੀ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧੁ, ਮ, ਗੁ ਰੇ, ਗੁ ਰੇ, ਸਾ", pakad: "ਨੀ ਸਾ ਰੇ, ਗੁ ਮ, ਪ ਗੁ ਮ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 10, name: "Chhaia Todi", gurmukhi: "ਰਾਗ ਛਾਇਆ ਟੋਡੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "Pa, Ni", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਸਾ ਗੁ ਮੇ, ਧੁ ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 11, name: "Lachari Todi", gurmukhi: "ਰਾਗ ਲਾਚਾਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "None", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਰੇ ਗ, ਰੇ ਗ ਮ, ਮ ਪ, ਧੁ ਪ, ਨੀ ਪ, ਪ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧ, ਪ, ਨੀ ਧੁ ਪ, ਮ ਪ, ਮ ਗੁ, ਰੇ ਗ ਮ ਸਾ", pakad: "ਸਾ ਰੇ ਗ, ਰੇ ਗ ਮ, ਮ ਨੀ ਧ ਪ, ਧੁ ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 12, name: "Sarvan Todi", gurmukhi: "ਰਾਗ ਸਰਵਣ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha); Ma (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਨੀ ਪ, ਨੀ ਧੁ, ਪ ਮ, ਪ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਰੇਂ ਸਾ, ਸਾ ਮ, ਮ ਪ, ਧੁ ਪ, ਧੁ ਨੀ, ਪ ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 13, name: "Gauri Todi", gurmukhi: "ਰਾਗ ਗੌਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ ਪ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਪ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 14, name: "Asa Todi", gurmukhi: "ਰਾਗ ਆਸਾ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha); Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧੁ ਸਾਂ ਨੀ ਧੁ ਮ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 15, name: "Asavari Todi", gurmukhi: "ਰਾਗ ਆਸਾਵਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Dha", samvadi: "Ga", varjit: "Ga (aroha); Ni (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ, ਗੁ, ਰੇ ਸਾ, ਰੇ ਗੁ ਰੇ, ਪ ਧੁ, ਮ ਪ ਧੁ, ਪ ਧੁ ਗੁ ਗੁ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 16, name: "Gandhari Todi", gurmukhi: "ਰਾਗ ਗੰਧਾਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Re", varjit: "Ga (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਪ, ਮ ਗੁ ਰੇ, ਗੁ ਰੇ ਨੀ, ਸਾ ਨੀ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਧੁ ਪ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 17, name: "Jai-Jaivanti Todi", gurmukhi: "ਰਾਗ ਜੈ-ਜੈਵੰਤੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Dha", samvadi: "Re", varjit: "Ga, Ni (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ, ਧ ਮ, ਪ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਧ ਰੇ, ਸਾ, ਸਾ ਰੇ ਮ ਪ, ਧ ਮ ਪ ਗੁ, ਪ ਰੇ, ਗੁ ਰੇ, ਨੀ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 18, name: "Desi Todi", gurmukhi: "ਰਾਗ ਦੇਸੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha)", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਮ ਰੇ, ਪ ਮ ਪ, ਧ ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ, ਪ ਧ, ਮ ਪ, ਪ ਰੇ ਗੁ ਸਾ, ਰੇ ਨੀ ਸਾ", pakad: "ਪ ਮ ਗੁ, ਰੇ ਗੁ ਰੇ ਸਾਂ, ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 19, name: "Bilaskhani Todi", gurmukhi: "ਰਾਗ ਬਿਲਾਸਖਾਨੀ ਟੋਡੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "Ma, Ni (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਪ, ਧੁ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਧੁ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 20, name: "Khat Todi", gurmukhi: "ਰਾਗ ਖਟ ਟੋਡੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ, ਰੇ ਗੁ, ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਮ, ਪ ਗੁ ਮ, ਮ, ਨੀ ਧੁ, ਨੀ ਪ, ਗੁ ਮ ਰੇ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 21, name: "Setki Todi", gurmukhi: "ਰਾਗ ਸੇਟਕੀ ਟੋਡੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ, ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਸਾ, ਗੁ ਮ, ਗੁ ਮ ਪ, ਗੁ ਮ ਪ ਗੁ, ਮ ਪ, ਗੁ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 22, name: "Bhupal Todi", gurmukhi: "ਰਾਗ ਭੁਪਾਲ ਟੋਡੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "Ma, Ni", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ, ਪ ਗੁ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਧੁ ਸਾ, ਰੇ ਗੁ"
  },
  {
    parent: "shudh-todi", variantNum: 23, name: "Hemvanti", gurmukhi: "ਰਾਗ ਹੇਮਵੰਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Re", varjit: "Ga (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਧੁ, ਨੀ ਧੁ ਪ, ਮੇ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 24, name: "Ahiri Todi", gurmukhi: "ਰਾਗ ਅਹੀਰੀ ਟੋਡੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਧ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 25, name: "Yachna", gurmukhi: "ਰਾਗ ਯਾਚਨਾ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ, ਨੀ ਧ ਪ ਸਾ, ਧ ਨੀ ਪ, ਰੇ ਸਾ, ਰੇ ਗੁ ਮੇ ਪ, ਧ ਨੀ ਧ ਪ, ਮੇ ਪ ਗੁ ਮੇ"
  },
  {
    parent: "shudh-todi", variantNum: 26, name: "Jayvanti", gurmukhi: "ਰਾਗ ਜਯਵੰਤੀ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "Dha, Ni (aroha); Ni (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 27, name: "Govardhan", gurmukhi: "ਰਾਗ ਗੋਵਰਧਨ",
    thaat: "Todi", vadi: "Dha", samvadi: "Ga", varjit: "Ma, Ni (aroha); Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗੁ ਰੇ ਗੁ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਨੀ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਗੁ ਰੇ ਧੁ, ਪ ਧੁ ਪ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 28, name: "Bhaila Mukhe", gurmukhi: "ਰਾਗ ਭੈਲਾ ਮੁਖੇ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "Dha (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ, ਗੁ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮੇ, ਪ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 29, name: "Vijak Kokila", gurmukhi: "ਰਾਗ ਵਿਜਕ ਕੋਕਿਲਾ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Ni (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ, ਸਾ ਰੇ ਗੁ"
  },
  {
    parent: "shudh-todi", variantNum: 30, name: "Kokila Panchmi", gurmukhi: "ਰਾਗ ਕੋਕਿਲਾ ਪੰਚਮੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Ma (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਨੀ ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ ਪ, ਧੁ"
  },
  {
    parent: "shudh-todi", variantNum: 31, name: "Kam Ranjani", gurmukhi: "ਰਾਗ ਕਾਮ ਰੰਜਨੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਰੇ ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮੇ, ਗੁ ਰੇ ਗੁ ਸਾ", pakad: "ਰੇ ਗੁ, ਰੇ ਮੇ ਪ, ਧੁ ਨੀ, ਸਾਂ ਨੀ, ਧੁ ਮੇ, ਗੁ ਰੇ, ਗੁ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 32, name: "Dharamvati", gurmukhi: "ਰਾਗ ਧਰਮਵਤੀ",
    thaat: "Todi", vadi: "Re", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ, ਗੁ ਮੇ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 33, name: "Ratan Mati", gurmukhi: "ਰਾਗ ਰਤਨ ਮਤੀ",
    thaat: "Todi", vadi: "Re", samvadi: "Pa", varjit: "Ga (aroha); Pa (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਧ ਮੇ, ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ, ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 34, name: "Rati", gurmukhi: "ਰਾਗ ਰਤੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗੁ, ਰੇ ਗੁ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਰੇ ਗੁ ਮੇ, ਸਾ ਗੁ ਰੇ ਗੁ ਮੇ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਮੇ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 35, name: "Latamati", gurmukhi: "ਰਾਗ ਲਤਾਮਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Ga", varjit: "Ni (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ, ਮੇ ਪ, ਧੁ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਧੁ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ, ਮੇ ਪ ਧੁ ਪ, ਸਾਂ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਧੁ ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 36, name: "Marukali", gurmukhi: "ਰਾਗ ਮਰੁਕਲੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਸਾ, ਮੇ ਗੁ, ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਪ, ਮੇ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਨੀ ਸਾ", pakad: "ਗੁ ਰੇ ਸਾ, ਮੇ ਗ ਮੇ ਪ ਨੀ ਧੁ ਪ, ਧੁ ਨੀ ਧੁ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-todi", variantNum: 37, name: "Kusum Rajni", gurmukhi: "ਰਾਗ ਕੁਸੁਮ ਰਜਨੀ",
    thaat: "Todi", vadi: "Re", samvadi: "Pa", varjit: "Ga (aroha)", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੀ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਧੁ ਨੀ, ਸਾਂ, ਸਾਂ ਨੀ ਧ, ਨੀ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 2, name: "Varati", gurmukhi: "ਰਾਗ ਵਰਾਟੀ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਰੇ ਗ, ਪ, ਮੇ ਗ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਪ ਧ ਗ, ਪ, ਧ, ਮੇ ਗ, ਰੇ ਗ, ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 3, name: "Karank Varali", gurmukhi: "ਰਾਗ ਕਰੰਕ ਵਰਾਲੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (aroha) [komal Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਨੁ, ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਨੁ ਸਾ ਰੇ, ਪ ਮ ਰੇ ਸਾ, ਨੁ ਧ ਨੁ ਪ, ਸਾਂ ਨੀ ਪ ਮ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 4, name: "Kuntal Varali", gurmukhi: "ਰਾਗ ਕੁੰਤਲ ਵਰਾਲੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਪ, ਧ ਨੁ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਸਾ", pakad: "ਪ ਨੀ ਸਾ ਮ, ਧ ਨੁ ਧ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਨੁ, ਧ ਪ ਮ, ਨੁ ਸਾ ਮ"
  },
  {
    parent: "bairagi", variantNum: 5, name: "Kunt Varali", gurmukhi: "ਰਾਗ ਕੁੰਤ ਵਰਾਲੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga [komal Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਪ ਧ ਨੁ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਸਾ", pakad: "ਸਾ ਮ, ਪ, ਧ ਨੁ ਧ, ਸਾਂ ਨੁ ਧ ਪ, ਮ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 6, name: "Shok Varali", gurmukhi: "ਰਾਗ ਸ਼ੋਕ ਵਰਾਲੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਗੁ, ਮ ਪ, ਮ ਧ, ਮ ਪ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਗੁ, ਮ ਪ, ਮ ਧ, ਮ ਪ, ਧ ਨੀ ਧ ਸਾਂ, ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 7, name: "Varali (Dakhni)", gurmukhi: "ਰਾਗ ਵਰਾਲੀ (ਦਖਿਨੀ)",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਮੇ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਪ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਗੁ, ਰੇ ਗੁ, ਮੇ ਪ ਧੁ ਨੀ, ਸਾਂ, ਨੀ ਧੁ, ਪ ਮੇ ਗ"
  },
  {
    parent: "bairagi", variantNum: 8, name: "Salga Varali", gurmukhi: "ਰਾਗ ਸਾਲਗ ਵਰਾਲੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Sa", varjit: "Ma", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੀ ਧ ਪ, ਗੁ, ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ ਪ, ਧ ਨੀ ਧ ਪ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 9, name: "Jhal Varali", gurmukhi: "ਰਾਗ ਝਾਲ ਵਰਾਲੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ ਰੇ ਗੁ, ਮੇ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਪ ਮੇ ਗੁ, ਰੇ ਸਾ, ਧੁ ਨੀ ਧੁ ਪ, ਮੇ, ਗੁ ਮੇ, ਧੁ ਪ ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 10, name: "Shankar Priya", gurmukhi: "ਰਾਗ ਸ਼ੰਕਰ ਪ੍ਰਿਅ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਗ, ਮੇ ਪ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਧ, ਮੇ ਪ ਗੁ, ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਨੀ, ਸਾ ਰੇ ਗੁ, ਮੇ ਪ ਗੁ"
  },
  {
    parent: "bairagi", variantNum: 11, name: "Rajni", gurmukhi: "ਰਾਗ ਰਜਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "Pa, Ni (aroha); Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗੁ, ਸਾ ਰੇ ਸਾ", pakad: "ਗੁ, ਰੇ ਗੁ, ਮੇ, ਧ, ਸਾਂ, ਨੀ ਧ ਮੇ, ਗੁ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 12, name: "Madh Ja", gurmukhi: "ਰਾਗ ਮਧੁ ਜਾ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗੁ, ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮੇ ਗੁ ਸਾ", pakad: "ਪ, ਮੇ ਪ ਗੁ, ਸਾ, ਨੀ, ਸਾ, ਮੇ ਗੁ, ਮੇ ਪ"
  },
  {
    parent: "bairagi", variantNum: 13, name: "Sambedhani", gurmukhi: "ਰਾਗ ਸਮਬੇਧਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "Pa, Ni (avaroha)", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਮੇ ਗੁ, ਰੇ, ਸਾ ਰੇ ਸਾ", pakad: "ਗੁ, ਮੇ ਪ, ਮੇ ਗੁ, ਸਾ ਰੇ ਗੁ, ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ, ਧ ਮੇ ਗੁ, ਰੇ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 14, name: "Jyoti Sarupni", gurmukhi: "ਰਾਗ ਜਿਓਤਿ ਸਰੂਪਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ, ਪ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 15, name: "Vilambini", gurmukhi: "ਰਾਗ ਵਿਲੰਬਿਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "Re", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਮ ਗ ਮੇ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਨੀ, ਪ ਮ ਗ ਸਾ", pakad: "ਸਾ ਮ, ਗ ਮ, ਪ ਮ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਨੀ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 16, name: "Kantamani", gurmukhi: "ਰਾਗ ਕਾਂਤਾਮਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ, ਪ ਧੁ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 17, name: "Madhavi Manohari", gurmukhi: "ਰਾਗ ਮਾਧਵੀ ਮਨੋਹਰੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "Pa (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗੁ ਰੇ ਗੁ, ਮੇ ਪ ਨੀ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮੇ ਗੁ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਰੇ ਗੁ, ਸਾ ਗੁ, ਮੇ ਪ ਨੀ, ਧੁ ਨੀ, ਸਾਂ, ਨੀ ਧੁ, ਮੇ ਗੁ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 18, name: "Neet Mati", gurmukhi: "ਰਾਗ ਨੀਤ ਮਤੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮੇ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 19, name: "Chatur Ranjani", gurmukhi: "ਰਾਗ ਚਤੁਰ ਰੰਜਨੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਮੇ, ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਨੀ, ਪ ਗ ਮੇ, ਰੇ ਸਾ", pakad: "ਪ, ਗ ਮੇ, ਸਾ ਮੇ ਗ ਮੇ, ਪ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਨੀ, ਪ ਗ ਮੇ, ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 20, name: "Gomati", gurmukhi: "ਰਾਗ ਗੋਮਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Re", varjit: "Ni, Pa (avaroha)", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਗੁ, ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ", pakad: "ਪ, ਮੇ ਪ, ਧ ਨੀ ਸਾਂ, ਪ, ਮੇ ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 21, name: "Gatva Hardaka", gurmukhi: "ਰਾਗ ਗਤੋ ਹਿਰਦਯਾ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "Ma (aroha); Re, Ga (avaroha)", jaati: "Shadav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਰੇ ਗੁ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਧ ਨੀ ਪ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਪ, ਰੇ ਗੁ ਰੇ ਸਾ, ਨੀ ਪ, ਮੇ ਪ ਨੀ ਪ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 22, name: "Rishab Vahini", gurmukhi: "ਰਾਗ ਰਿਸ਼ਭ ਵਾਹਿਨੀ",
    thaat: "Todi", vadi: "Re", samvadi: "Dha", varjit: "Ga (aroha); Pa (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ, ਸਾ ਰੇ, ਮੇ ਪ, ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਮੇ, ਗੁ ਰੇ, ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 23, name: "Radh Priya", gurmukhi: "ਰਾਗ ਰਧੁ ਪ੍ਰਿਅ",
    thaat: "Todi", vadi: "Ga", samvadi: "Dha", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ, ਗੁ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਸਾ ਰੇ ਗੁ, ਮੇ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 24, name: "Pavni", gurmukhi: "ਰਾਗ ਪਾਵਨੀ",
    thaat: "Todi", vadi: "Ga", samvadi: "Pa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਸਾ ਰੇ ਗੁ, ਮੇ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bairagi", variantNum: 25, name: "Sindhni", gurmukhi: "ਰਾਗ ਸਿੰਧਨੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re (avaroha)", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗੁ ਮੇ ਪ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮੇ, ਗੁ ਸਾ", pakad: "ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ, ਪ ਮੇ ਗ ਮੇ, ਪ ਮੇ, ਗੁ ਸਾ"
  },
  {
    parent: "tilang", variantNum: 2, name: "Tilang Jog", gurmukhi: "ਰਾਗ ਤਿਲੰਗ ਜੋਗ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Dha", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਨੀ ਪ, ਮ ਗ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "tilang", variantNum: 3, name: "Tilang Dhani", gurmukhi: "ਰਾਗ ਤਿਲੰਗ ਧਨੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Dha", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਗ ਮ ਪ ਨੀ, ਸਾਂ ਨੀ ਪ ਮ, ਗ ਗੁ ਸਾ"
  },
  {
    parent: "tilang", variantNum: 4, name: "Maru Tilang", gurmukhi: "ਰਾਗ ਮਾਰੂ ਤਿਲੰਗ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha); Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮੇ ਪ, ਨੀ ਪ ਮੇ ਪ, ਪ ਨੀ ਸਾਂ ਰੇਂ, ਸਾਂ ਨੀ ਪ, ਮੇ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tilang", variantNum: 5, name: "Madhu-Madhavi (1)", gurmukhi: "ਰਾਗ ਮਧੁ-ਮਾਧਵੀ (1)",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ, ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ, ਨੀ ਧ, ਮ, ਪ ਧ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tilang", variantNum: 6, name: "Madhu-Madhavi (2)", gurmukhi: "ਰਾਗ ਮਧੁ-ਮਾਧਵੀ (2)",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ ਮ, ਗ ਸਾ", pakad: "ਸਾਂ, ਨੀ ਸਾਂ, ਨੀ ਪ ਮ, ਪ ਮ, ਗ ਮ, ਗ ਸਾ, ਗ"
  },
  {
    parent: "suhi", variantNum: 2, name: "Dakhni Suhi", gurmukhi: "ਰਾਗ ਦਖਿਨੀ ਸੁਹੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha); Pa (avaroha)", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਰੇ ਸਾ, ਸਾ ਗੁ ਮ ਪ, ਨੀ ਪ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ, ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਮ ਗੁ ਮ, ਪ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ, ਗੁ ਮ ਪ"
  },
  {
    parent: "suhi", variantNum: 3, name: "Gandharv Suhi", gurmukhi: "ਰਾਗ ਗੰਧਰਵ ਸੁਹੀ",
    thaat: "Kafi", vadi: "Ni", samvadi: "Ga", varjit: "Pa (aroha); Pa (avaroha)", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ, ਮ ਗੁ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਰੇ ਗ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗ ਮ ਗ, ਧ ਮ, ਧ ਗ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "suhi", variantNum: 4, name: "Suhi (Khamaj Angadi)", gurmukhi: "ਰਾਗ ਸੁਹੀ, ਖਮਾਜ ਅੰਗਦੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਗ ਰੇ, ਗ ਮ ਪ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੁ ਧ, ਧ ਮ, ਗ ਪ, ਗ ਮ ਰੇ, ਗ, ਸਾ ਰੇ, ਨੀ ਸਾ", pakad: "ਗ ਰੇ, ਗ ਮ, ਪ, ਮ, ਪ ਨੀ ਸਾਂ, ਧ, ਗ ਮ ਧ ਮ ਗ, ਰੇ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "suhi", variantNum: 5, name: "Suhi Lalit", gurmukhi: "ਰਾਗ ਸੁਹੀ ਲਲਿਤ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "None", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ, ਨੀ ਰੇ ਗ, ਮ ਮੇ ਧੁ ਨੀ ਸਾਂ, ਪ, ਧ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਮ ਗ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ ਮ, ਮੇ ਮ, ਸਾਂ ਨੀ ਧ ਮ, ਮ ਗ, ਮ ਮੇ ਮ ਧੁ ਮ, ਮ ਗ, ਰੇ ਸਾ, ਨੀ ਰੇ ਗ ਮ"
  },
  {
    parent: "suhi", variantNum: 6, name: "Suha", gurmukhi: "ਰਾਗ ਸੁਹਾ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Dha", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਮ, ਗੁ ਮ ਗੁ, ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 2, name: "Alaihiya Bilaval", gurmukhi: "ਰਾਗ ਅਲੈਹੀਆ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "Ma (aroha) [both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ, ਗ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੁ ਧ ਪ, ਮ ਗ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 3, name: "Dev Giri Bilaval", gurmukhi: "ਰਾਗ ਦੇਵ ਗਿਰੀ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ma, Ni (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਗ ਪ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਗ, ਪ, ਮ ਗ ਰੇ, ਪ ਰੇ, ਸਾ, ਸਾ ਨੀ ਧ ਪ, ਸਾ ਰੇ ਗ"
  },
  {
    parent: "shudh-bilaval", variantNum: 4, name: "Yamni Bilaval", gurmukhi: "ਰਾਗ ਯਮਨੀ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Pa", varjit: "Ma (aroha) [both Ma; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ ਨੁ ਧ ਪ, ਮੇ ਗ, ਮ ਗ ਰੇ, ਗ ਰੇ ਸਾ", pakad: "ਧ ਨੁ ਧ ਪ, ਮੇ ਗ, ਮ ਗ ਰੇ, ਪ ਮੇ ਧ ਪ, ਗ ਪ ਗ ਰੇ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 5, name: "Shukal Bilaval", gurmukhi: "ਰਾਗ ਸ਼ੁਕਲ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ, ਪ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਧ ਮ, ਪ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਨੁ, ਗ ਮ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 6, name: "Nat Bilaval", gurmukhi: "ਰਾਗ ਨਟ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਗ ਮ ਗ, ਮ ਪ ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੁ ਪ, ਮ ਗ ਮ ਰੇ, ਸਾ", pakad: "ਸਾ, ਗ ਮ, ਪ ਮ, ਗ, ਰੇ, ਗ ਮ ਪ, ਮ ਗ, ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 7, name: "Sarparda Bilaval", gurmukhi: "ਰਾਗ ਸਰਪਰਦਾ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਗ ਰੇ ਗ, ਗ ਰੇ ਗ ਮ, ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੁ ਧ ਪ, ਮ, ਗ ਰੇ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਧ ਨੁ ਧ ਪ, ਪ, ਗ ਰੇ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 8, name: "Lalit Bilaval", gurmukhi: "ਰਾਗ ਲਲਿਤ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ni, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗ, ਮ, ਧ ਮੇ ਸਾਂ", avaroha: "ਸਾਂ, ਧ, ਮੇ ਮ ਗ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਧ ਮੇ ਮ ਮੇ ਗ, ਮੇ ਧ ਸਾ, ਗ ਮ ਧ, ਮੇ ਸਾਂ"
  },
  {
    parent: "shudh-bilaval", variantNum: 9, name: "Jait Bilaval", gurmukhi: "ਰਾਗ ਜੈਤ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਗ ਰੇ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ, ਰੇ ਗ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ, ਧ ਮ ਗ ਰੇ, ਪ ਮ ਗ, ਮ ਰੇ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 10, name: "Kalamb Bilaval", gurmukhi: "ਰਾਗ ਕਲੰਬ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ma (aroha) [both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਨੁ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ ਨੁ ਧ ਪ, ਮ ਗ, ਮ ਰੇ, ਸਾ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਪ, ਮ ਗ ਮ ਰੇ, ਸਾ ਮ ਰੇ"
  },
  {
    parent: "shudh-bilaval", variantNum: 11, name: "Bengal Bilaval", gurmukhi: "ਰਾਗ ਬੰਗਾਲ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਰੇ ਸਾ, ਨੀ ਧ ਨੀ, ਸਾ ਪ ਗ ਰੇ ਗ ਮ, ਪ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੀ ਪ, ਮ ਗ, ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 12, name: "Suha Bilaval", gurmukhi: "ਰਾਗ ਸੁਹਾ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Pa, Ga (avaroha)", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ ਗ ਮ, ਪ, ਮ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ, ਧ ਨੀ ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 13, name: "Lachha Sakh Bilaval", gurmukhi: "ਰਾਗ ਲੱਛਾ ਸਾਖ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [all shudh]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ, ਰੇ ਸਾ, ਗ ਪ ਮ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੁ ਪ ਮ, ਗ ਪ ਮ ਗ, ਰੇ ਸਾ", pakad: "ਪ, ਮ ਗ, ਮ, ਮ ਨੁ ਧ ਪ, ਮ ਗ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 14, name: "Asa Bilaval", gurmukhi: "ਰਾਗ ਆਸਾ ਬਿਲਾਵਲ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਗ, ਪ ਮ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਧ, ਪ ਮ, ਮ ਪ, ਗ ਮ, ਰੇ ਗ, ਪ ਮ ਗ ਰੇ ਸਾ, ਮ ਰੇ"
  },
  {
    parent: "shudh-bilaval", variantNum: 15, name: "Gun Kali", gurmukhi: "ਰਾਗ ਗੁਣ ਕਲੀ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਰੇ ਗ, ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਗ ਰੇ ਸਾ, ਨੀ ਧ, ਪ, ਸਾ, ਪ ਪ ਨੀ ਧ ਸਾਂ, ਪ ਪ ਧ ਸਾਂ, ਧ ਗ, ਪ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 16, name: "Vesar", gurmukhi: "ਰਾਗ ਵੇਸਰ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Ma", varjit: "None [all shudh]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਮ ਪ, ਧ ਨੀ ਪ, ਧ ਮ ਗ, ਮ ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਸਾਂ ਧ ਨੀ ਪ, ਧ ਮ ਗ, ਰੇ ਗ ਰੇ, ਸਾ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਮ ਗ ਰੇ, ਸਾ, ਮ ਰੇ ਗ, ਸਾਂ ਨੀ ਧ, ਪ ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 17, name: "Kamal Ranjani", gurmukhi: "ਰਾਗ ਕਮਲ ਰੰਜਨੀ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "Re, Ma (aroha); Re (avaroha) [both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੁ ਪ, ਮ, ਗ, ਸਾ", pakad: "ਸਾ, ਗ ਪ, ਧ ਨੁ ਧ ਪ, ਮ ਗ ਪ ਮ, ਗ, ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 18, name: "Kalambh", gurmukhi: "ਰਾਗ ਕਲੰਭ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ, ਮ, ਨੁ ਧ ਪ, ਮ ਪ, ਗ ਮ, ਸਾ ਗ, ਗ ਮ, ਧ ਨੀ ਸਾਂ, ਸਾਂ ਨੁ, ਧ ਪ, ਧ ਮ, ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 19, name: "Chandika", gurmukhi: "ਰਾਗ ਚੰਦਿਕਾ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Dha (aroha); Ga, Ni (avaroha) [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਪ, ਮ ਪ ਧ, ਪ ਮ ਰੇ, ਨੀ ਸਾ", pakad: "ਮ ਪ ਨੀ ਸਾਂ, ਧ ਪ, ਮ ਪ ਧ ਪ, ਮ ਰੇ, ਨੀ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 20, name: "Chakradhar", gurmukhi: "ਰਾਗ ਚਕਰਧਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ, ਰੇ ਗ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਗ, ਰੇ ਸਾ", pakad: "ਸਾਂ, ਨੀ ਧ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਗ ਮ"
  },
  {
    parent: "shudh-bilaval", variantNum: 21, name: "Jajraj", gurmukhi: "ਰਾਗ ਜਜਰਾਜ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga (aroha); Ga, Ni (avaroha) [all shudh]", jaati: "Shadav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਪ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਧ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਸਾਂ, ਰੇਂ ਸਾਂ, ਪ, ਪ ਧ, ਪ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 22, name: "Deepak", gurmukhi: "ਰਾਗ ਦੀਪਕ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re (aroha) [both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਗ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਗ ਮ ਪ, ਮ, ਗ ਮ ਪ, ਮ ਗ, ਰੇ ਸਾ, ਸਾ ਨੀ ਧ ਪ"
  },
  {
    parent: "shudh-bilaval", variantNum: 23, name: "Durga", gurmukhi: "ਰਾਗ ਧੁਰਗਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਮ ਰੇ, ਧ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 24, name: "Deshkar", gurmukhi: "ਰਾਗ ਦੇਸ਼ਕਾਰ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਪ, ਗ ਪ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਧ, ਗ ਪ, ਗ ਰੇ ਸਾ, ਰੇ ਧ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 25, name: "Pahadi", gurmukhi: "ਰਾਗ ਪਹਾੜੀ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ ਸਾ, ਧ, ਪ ਧ, ਸਾ, ਗ ਪ ਧ ਪ, ਗ ਰੇ ਸਾ, ਧ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 26, name: "Bhavani", gurmukhi: "ਰਾਗ ਭਵਾਨੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa, Ni [all shudh]", jaati: "Chatushruti Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ, ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਮ, ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਧ, ਮ ਸਾਂ, ਧ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 27, name: "Bhinn Shadaj", gurmukhi: "ਰਾਗ ਭਿੰਨ ਸ਼ੜਜ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ, ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ, ਮ ਗ, ਸਾ", pakad: "ਸਾ, ਗ ਮ, ਧ ਮ, ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 28, name: "Mand", gurmukhi: "ਰਾਗ ਮਾਂਡ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [all shudh]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਗ ਰੇ, ਮ ਗ ਪ ਮ, ਧ ਪ ਨੀ ਧ, ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਧ, ਮ ਪ ਗ, ਮ ਸਾ", pakad: "ਸਾ, ਰੇ ਗ, ਸਾ, ਰੇ, ਮ ਮ ਪ, ਧ, ਪ ਧ ਸਾਂ, ਨੀ ਸਾਂ ਨੀ ਧ, ਧ ਨੀ ਪ, ਪ ਧ, ਮ ਪ ਗ, ਮ ਸਾ, ਰੇ ਗ, ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 29, name: "Ras Ranjani", gurmukhi: "ਰਾਗ ਰਸ ਰੰਜਨੀ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Dha [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਧ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 30, name: "Has-Chandu", gurmukhi: "ਰਾਗ ਹਸਚੰਦੂ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ni, Pa", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗ, ਮ ਮੇ, ਮ ਧ ਮ ਸਾਂ", avaroha: "ਰੇਂ ਸਾਂ, ਧ ਮੇ ਮ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਮ, ਗ ਮ ਮੇ, ਮ ਧ ਮ ਸਾਂ, ਰੇਂ ਸਾਂ, ਧ ਮੇ ਮ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 31, name: "Lajwanti", gurmukhi: "ਰਾਗ ਲਾਜਵੰਤੀ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "None [all shudh]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗ ਰੇ, ਮ ਗ, ਪ ਧ ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਧ ਮ, ਪ ਗ, ਮ ਪ ਰੇ ਸਾ", pakad: "ਮ ਗ, ਪ ਧ, ਮ ਪ, ਸਾਂ, ਪ, ਧ ਮ, ਪ ਗ, ਮ ਪ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 32, name: "Shankara", gurmukhi: "ਰਾਗ ਸ਼ੰਕਰਾ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ma (aroha); Ma (avaroha) [all shudh]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਪ, ਨੀ ਧ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਨੀ ਧ, ਗ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਧ ਸਾਂ, ਨੀ, ਧ ਪ ਗ ਪ, ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 33, name: "Has Dhwani", gurmukhi: "ਰਾਗ ਹੰਸਧਵਨਿ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ma, Dha [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ, ਗ ਪ ਗ ਰੇ, ਗ ਪ ਨੀ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ ਨੀ ਸਾਂ, ਗ ਰੇਂ ਸਾਂ, ਨੀ ਪ, ਗ ਰੇ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 34, name: "Chit Mohani", gurmukhi: "ਰਾਗ ਚਿਤ ਮੋਹਨੀ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Dha, Ga (avaroha) [all shudh]", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ, ਰੇ ਗ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮ ਰੇ, ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ, ਧ ਨੀ, ਸਾਂ, ਨੀ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 35, name: "Mewara", gurmukhi: "ਰਾਗ ਮੇਵਾੜਾ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਧ, ਮ, ਧ ਪ, ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 36, name: "Jan-Ranjani (1)", gurmukhi: "ਜਨ-ਰਜਨੀ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Ma", varjit: "Dha, Ga, Ni [all shudh]", jaati: "Shadav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਧ ਮ ਰੇ ਗ ਮ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ ਨੀ ਸਾਂ ਪ ਧ ਮ ਰੇ ਗ ਮ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 37, name: "Uttar-Ravi Chandrika", gurmukhi: "ਉੱਤਰ-ਰਵਿ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਗ ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 38, name: "Gaurav Priya", gurmukhi: "ਗੌਰਵ ਪ੍ਰਿਆ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Pa (avaroha) [all shudh]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਨੀ ਗ ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਗ ਮ ਧ ਸਾਂ ਨੀ ਧ ਮ"
  },
  {
    parent: "shudh-bilaval", variantNum: 39, name: "Jan-Ranjani (2)", gurmukhi: "ਜਨ-ਰਜਨੀ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Dha", varjit: "Ga, Ni (avaroha) [all shudh]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 40, name: "Naun-Chaul", gurmukhi: "ਨੌਂ-ਚੌਲ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 41, name: "Naga Nandani", gurmukhi: "ਨਾਗਾ ਨੰਦਨੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਗ ਮ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 42, name: "Navroz", gurmukhi: "ਨਵਰੋਜ਼",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Pa (avaroha) [all shudh]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਮ ਧ ਨੀ ਸਾ ਰੇ ਗ ਮ ਪ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ ਮ, ਮ ਗ ਰੇ ਸਾ, ਨੀ ਧ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ, ਮ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਮ ਗ ਰੇ ਸਾ, ਨੀ ਧ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 43, name: "Naga Dhwani", gurmukhi: "ਨਾਗਾ ਧਵਨਿ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Dha", varjit: "None [all shudh]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਰੇ ਗ ਮ ਗ ਮ ਪ ਪ ਨੀ ਧ ਪ ਨੀ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ ਮ ਧ ਪ ਮ ਰੇ ਗ ਮ ਗ ਰੇ ਗ ਸਾ", pakad: "ਗ ਰੇ ਗ ਮ ਗ ਮ ਪ ਪ ਨੀ ਧ ਪ ਧ ਨੀ ਧ ਪ ਮ ਧ ਪ ਮ ਰੇ ਗ ਮ ਗ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 44, name: "Parvati", gurmukhi: "ਪਾਰਵਤੀ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Re (aroha) [all shudh]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਗ ਮ ਪ ਧ ਨੀ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 45, name: "Puran Chandrika", gurmukhi: "ਪੂਰਣ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 46, name: "Purno Uday", gurmukhi: "ਪੂਰਨੋ ਉਦਯ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni (aroha); Dha (avaroha) [all shudh]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਮ ਪ ਧ ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 47, name: "Balihari (Dakhini)", gurmukhi: "ਬਲਿਹਾਰੀ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "Ma, Ni (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਗ ਪ, ਗ ਗ ਪ, ਪ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 48, name: "Mohan", gurmukhi: "ਮੋਹਨ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Dha", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਰੇ ਗ ਪ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਧ ਪ ਮ ਗ ਰੇ ਰੇ ਗ ਪ ਗ ਰੇ ਸਾ ਧ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 49, name: "Shyam", gurmukhi: "ਸ਼੍ਰਿਆਮ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha); Ni (avaroha) [all shudh]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਰੇ ਨੀ ਸਾ ਰੇ ਮ ਪ ਪ ਧ ਪ ਮ ਪ ਮ ਰੇ ਪ ਗ ਮ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 50, name: "Kaushik Dhwani", gurmukhi: "ਕੌਸ਼ਿਕ ਧਵਨਿ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਸਾ", pakad: "ਮ ਗ ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 51, name: "Jhankar", gurmukhi: "ਝਨਕਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 52, name: "Purav Holika", gurmukhi: "ਪੂਰਵ ਹੌਲਿਕਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਸਾ", pakad: "ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 53, name: "Manhar", gurmukhi: "ਮਨਹਰ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ ਗ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਗ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਗ ਪ ਨੀ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਗ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 54, name: "Mamta", gurmukhi: "ਮਮਤਾ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ma [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਸਾ", pakad: "ਗ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 55, name: "Hem", gurmukhi: "ਹੇਮ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Ni [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਧ ਪ ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ ਧ ਪ ਸਾ ਰੇ ਸਾ", pakad: "ਧ ਪ ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਪ ਸਾਂ ਸਾਂ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 56, name: "Homant", gurmukhi: "ਹੇਮੰਤ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 57, name: "Raghupati", gurmukhi: "ਰਘੁਪਤੀ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Ma, Ni (aroha); Ni (avaroha) [all shudh]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਮ ਗ ਰੇ ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ"
  },
  {
    parent: "shudh-bilaval", variantNum: 58, name: "Mahuri", gurmukhi: "ਮਾਹੁਰੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ni (avaroha) [all shudh]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ ਗ ਮ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਗ ਮ ਸਾ", pakad: "ਮ ਗ ਮ ਰੇ ਗ ਮ ਪ ਧ ਪ ਮ ਰੇ ਗ ਮ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 59, name: "Sarparda", gurmukhi: "ਸਰਪਰਦਾ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ ਧ ਪ ਨੀ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 60, name: "Kolahal", gurmukhi: "ਕੌਲਾਹਲ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਨੀ ਪ ਨੀ ਸਾਂ ਨੀ ਪ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 61, name: "Gaman Bhaskar", gurmukhi: "ਗਾਮਨ ਭਾਸਕਰ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Dha", varjit: "Ma (aroha); Ni, Re (avaroha) [all shudh]", jaati: "Shadav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਸਾ", pakad: "ਗ ਪ ਧ ਪ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 62, name: "Malav", gurmukhi: "ਮਾਲਵ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Re", varjit: "Ma, Ni (aroha); Ni (avaroha) [tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਸਾ ਪ ਧ ਪ ਮ ਪ ਧ ਸਾਂ"
  },
  {
    parent: "shudh-bilaval", variantNum: 63, name: "Chhaya", gurmukhi: "ਛਾਇਆ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni (aroha)", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਸਾਂ ਧ ਨੀ ਪ ਮ ਗ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਧ ਪ ਸਾ ਰੇ ਗ ਪ ਮ ਗ ਪ ਧ ਨੀ ਧ ਪ ਨੀ ਧ ਸਾਂ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 64, name: "Indra", gurmukhi: "ਇੰਦਰਾ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ni (aroha) [all shudh]", jaati: "Vakar Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਪ ਮ ਧ ਪ ਗ ਮ ਰੇ ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਧ ਗ ਪ ਪ ਰੇ ਗ ਸਾ", pakad: "ਨੀ ਧ ਸਾ ਧ ਨੀ ਸਾ ਗ ਪ ਮ ਰੇ ਗ ਸਾ ਰੇ ਨੀ ਸਾ ਗ"
  },
  {
    parent: "shudh-bilaval", variantNum: 65, name: "Hindoli", gurmukhi: "ਹਿੰਦੋਲੀ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਨੀ ਸਾਂ ਰੇਂ ਗਾਂ ਰੇਂ ਸਾਂ ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 66, name: "Abhogi", gurmukhi: "ਅਭੋਗੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਗ ਮ ਧ ਸਾਂ ਸਾਂ ਧ ਮ ਮ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 67, name: "Sankara Bharan (Dakhini)", gurmukhi: "ਸੰਕਰਾ ਭਰਣ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Re", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਧ ਸਾਂ ਨੀ ਧ ਪ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 68, name: "Bilhari (Dakhini)", gurmukhi: "ਬਿਲਹਰੀ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni (aroha) [both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਪ ਨੁ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਰੇ ਗ ਰੇ ਗ ਪ ਗ ਗ ਪ ਧ ਸਾਂ ਸਾਂ ਨੀ ਧ ਪ ਪ ਨੁ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 69, name: "Lachha Sakh", gurmukhi: "ਲੱਛਾ ਸਾਖ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "None [both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਨੁ ਧ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਪ ਮ ਗ ਮ ਮ ਨੁ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 70, name: "Pat Manjari", gurmukhi: "ਪਟ ਮੰਜਰੀ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None (Dha weak) [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਪ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਗ ਮ ਗ ਮ ਪ ਪ ਪ ਸਾਂ ਪ ਧ ਪ ਗ ਰੇ ਗ ਮ ਰੇ ਰੇ ਮ ਗ"
  },
  {
    parent: "shudh-bilaval", variantNum: 71, name: "Garjana Bheri", gurmukhi: "ਗਾਰਜਨਾ ਭੇਰੀ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ga (avaroha) [all shudh]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਰੇਂ ਸਾਂ ਧ ਪ ਮ ਧ ਸਾ", pakad: "ਸਾਂ ਨੀ ਰੇਂ ਸਾਂ ਧ ਗ ਮ ਧ ਪ ਧ ਪ ਮ ਧ ਸਾਂ"
  },
  {
    parent: "shudh-bilaval", variantNum: 72, name: "Aarbi (Dakhini)", gurmukhi: "ਆਰਬੀ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Ga, Ni (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਸਾ ਨੀ ਧ, ਧ ਰੇ ਸਾ, ਰੇ ਮ ਪ ਧ ਪ, ਧ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-bilaval", variantNum: 73, name: "Gunkari", gurmukhi: "ਗੁਣਕਰੀ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "Ga, Ni [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਮ ਧ ਪ ਧ ਮ ਰੇ ਸਾ ਸਾ ਰੇ ਪ"
  },
  {
    parent: "gond", variantNum: 2, name: "Sarvan Gond", gurmukhi: "ਸਰਵਣ ਗੌਡ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Dha [both Re]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ ਰੇ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਗ ਮ ਰੁ ਸਾ", pakad: "ਪ ਮ ਗ ਮ ਪ ਗ ਮ ਰੁ ਸਾ ਪ ਨੀ ਪ ਸਾ"
  },
  {
    parent: "gond", variantNum: 3, name: "Desh Gond", gurmukhi: "ਦੇਸ਼ ਗੌਡ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "Ga, Ma [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਸਾਂ ਸਾਂ ਧ ਪ ਧ ਪ ਰੇ ਸਾ"
  },
  {
    parent: "gond", variantNum: 4, name: "Pant Gond", gurmukhi: "ਪੰਤ ਗੌਡ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re, Dha]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ ਮ ਪ ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ ਧ ਮ ਪ ਗ ਮ ਰੇ ਸਾ ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "gond", variantNum: 5, name: "Gandharv Gond", gurmukhi: "ਗਾਂਧਰਵ ਗੌਡ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Re (aroha); Ma (avaroha) [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਮ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਪ ਗ ਪ ਧ ਮ ਪ ਗ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "gond", variantNum: 6, name: "Chandika Gond", gurmukhi: "ਚੰਦ੍ਰਿਕਾ ਗੌਡ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Re", varjit: "Ni (aroha); Ga, Ni (avaroha) [komal Re, Ga & Dha]", jaati: "Shadav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੁ ਗੁ ਮ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ ਰੁ ਸਾ", pakad: "ਸਾ, ਰੁ ਸਾ, ਗੁ ਸਾ, ਧੁ ਰੁਂ ਸਾਂ, ਧੁ ਮ ਗੁ ਰੁ, ਸਾ ਰੁ ਗੁ ਮ, ਰੁ ਸਾ, ਧੁ ਸਾ"
  },
  {
    parent: "gond", variantNum: 7, name: "Anant Gond", gurmukhi: "ਅਨੰਤ ਗੌਡ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni (aroha) [komal Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਸਾ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੁ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਮ ਮ ਪ ਮ ਗ ਮ ਧ ਨੁ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "gond", variantNum: 8, name: "Narayan Gond", gurmukhi: "ਨਾਰਾਇਣ ਗੌਡ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Re", varjit: "Ga, Pa (avaroha) [komal Ni]", jaati: "Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੁ ਸਾ ਰੇ ਮ ਪ ਗ ਮ ਪ ਧ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਪ, ਮ ਪ, ਮ ਰੇ, ਨੁ ਸਾ", pakad: "ਰੇ ਮ ਪ ਗ ਮ ਪ ਨੁ ਪ ਧ ਨੁ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "gond", variantNum: 9, name: "Reet Gond", gurmukhi: "ਰੀਤ ਗੌਡ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa (avaroha) [komal Ga, Dha & Ni]", jaati: "Vakar Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ ਰੇ ਗੁ ਮ ਨੁ ਧੁ ਮ ਪ ਨੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੁ ਧੁ ਮ ਪ ਧੁ ਸਾਂ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੁ ਧੁ ਮ ਪ ਧੁ ਮ ਪ ਧੁ ਮ ਗੁ ਰੇ ਸਾ ਗੁ ਰੇ ਗੁ ਸਾ"
  },
  {
    parent: "gond", variantNum: 10, name: "Sarang Gond", gurmukhi: "ਸਾਰੰਗ ਗੌਡ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Dha [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਪ ਮ ਪ ਮ ਰੇ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 2, name: "Gun Kali", gurmukhi: "ਗੁਣ ਕਲੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ ਧ ਪ ਮ ਰੇ"
  },
  {
    parent: "ramkali", variantNum: 3, name: "Lalit Kali", gurmukhi: "ਲਲਿਤ ਕਲੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re, Dha; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਨੀ ਧ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਸਾ ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 4, name: "Roopkali", gurmukhi: "ਰੂਪਕਲੀ",
    thaat: "Bhairav", vadi: "Re", samvadi: "Pa", varjit: "Ma, Ni [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਸਾ ਰੇ ਸਾ ਗ ਰੇ ਗ ਪ ਧ ਪ ਗ ਰੇ ਸਾ ਧ ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 5, name: "Komalkali", gurmukhi: "ਕੌਮਕਲੀ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Pa", varjit: "Ni [komal Re]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਧ ਪ ਗ ਮ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਪ ਧ ਸਾਂ ਧ ਪ ਧ ਪ ਮ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 6, name: "Vilaskali", gurmukhi: "ਵਿਲਾਸਕਲੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "None [komal Re, Ga, Dha; both Ma, Ni]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਨੀ ਸਾ ਪ ਸਾ ਰੇ ਗ ਰੇ ਗ ਮ ਗ ਪ ਮ ਪ ਧ ਨੀ ਧ ਪ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਸਾਂ ਨੀ ਧ ਪ ਮ ਨੀ ਧ ਪ ਮ ਪ ਧ ਮ ਗ ਰੇ ਗ ਰੇ ਧ ਸਾ", pakad: "ਮੇ ਪ ਧ ਨੀ ਧ ਪ ਧ ਮ ਗ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 7, name: "Saveri", gurmukhi: "ਸਾਵੇਰੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha) [komal Re, Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਪ ਮ ਪ ਧ ਮ ਗ ਰੇ ਸਾ ਰੇ ਮ ਪ ਧ ਮ ਧ ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 8, name: "Jogi Asavari", gurmukhi: "ਜੋਗੀ ਆਸਾਵਰੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "Ga, Ni (aroha) [komal Re, Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ ਧ ਪ ਧ ਸਾਂ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 9, name: "Ahireshwari", gurmukhi: "ਅਹੀਰੇਸ਼ਵਰੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਧ ਨੀ ਸਾ ਗ ਮ ਰੇ ਗ ਮ ਧ ਨੀ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਮ ਗ ਮ ਰੇ ਧ ਨੀ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਰੇ ਸਾ ਧ ਨੀ ਸਾ ਗ ਮ"
  },
  {
    parent: "ramkali", variantNum: 10, name: "Kamal Manohari", gurmukhi: "ਕਮਲ ਮਨੋਹਰੀ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Ni", varjit: "Re [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਸਾ", pakad: "ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 11, name: "Lalit Pancham", gurmukhi: "ਲਲਿਤ ਪੰਚਮ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [komal Re, Dha; both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਗ ਮ ਮੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਧ ਮੇ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਮ ਗ ਮ ਮੇ ਗ ਮ ਧ ਨੀ ਸਾਂ ਧ ਪ ਧ ਮੇ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 12, name: "Araj", gurmukhi: "ਅਰਜ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re; both Ma, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਮ ਪ ਮੇ ਪ ਧ ਪ ਮ ਨੀ ਧ ਪ ਮ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 13, name: "Megh Ranjani", gurmukhi: "ਮੇਘ ਰੰਜਨੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Dha [komal Re; both Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਮ ਮੇ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਰੇਂ ਸਾਂ ਨੀ ਮੇ ਮ ਗ ਰੇ ਮ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "ramkali", variantNum: 14, name: "Ahir Lalit", gurmukhi: "ਅਹੀਰ ਲਲਿਤ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re, Ni; both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧ ਮ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਰੇ ਸਾ ਰੇ ਨੀ ਸਾ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮ ਗ ਰੇ ਸਾ ਨੀ ਧ"
  },
  {
    parent: "ramkali", variantNum: 15, name: "Ram Gandhar", gurmukhi: "ਰਮ ਗੰਧਾਰ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Dha; both Re, Ga, Ma, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਮੇ ਮ ਪ ਮੇ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਰੇਂ ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਰੇ ਗ ਮ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 2, name: "Nat Narayan", gurmukhi: "ਨਟ ਨਾਰਾਇਣ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ga (avaroha) [both Ma, Ni]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਮ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਨੀ ਧ ਨੀ ਧ ਪ ਮੇ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 3, name: "Hans Nat", gurmukhi: "ਹੰਸ ਨਟ",
    thaat: "Bilawal", vadi: "Re", samvadi: "Pa", varjit: "Pa (aroha) [all shudh]", jaati: "Shadav–Vakar Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਗ ਮ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਸਾਂ ਨੀ ਪ ਧ ਪ ਮ ਗ ਰੇ ਨੀ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਪ ਨੀ ਰੇ ਗ ਰੇ ਗ ਪ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 4, name: "Kaunad Nat", gurmukhi: "ਕੌਂਦ ਨਟ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ma]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਰੇ ਗ ਮ ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਪ ਧ ਪ ਗ ਮ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ ਧ ਮੇ ਪ ਧ ਗ ਮ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 5, name: "Savani Nat", gurmukhi: "ਸਾਵਨੀ ਨਟ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Ni", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਪ ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਧ ਮ ਪ ਗ ਸਾ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਗ ਪ ਧ ਮ ਪ ਧ ਪ ਨੀ ਸਾਂ ਨੀ ਧ ਸਾਂ ਪ ਧ ਮ ਪ ਗ ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 6, name: "Hamir Nat", gurmukhi: "ਹਮੀਰ ਨਟ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Re (aroha) [both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਮੇ ਪ ਗ ਮ ਰੇ ਗ ਮੇ ਪ ਮ ਰੇ ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 7, name: "Hari Nat", gurmukhi: "ਹਰੀ ਨਟ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Re [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਮ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਧ ਨੀ ਪ ਮ ਗ ਸਾ", pakad: "ਮ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਪ ਧ ਨੀ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 8, name: "Chhaya Nat", gurmukhi: "ਛਾਇਆ ਨਟ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "None [both Ma]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਪ ਰੇ ਗ ਮ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 9, name: "Nat", gurmukhi: "ਨਟ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Pa (avaroha) [komal Ga, both Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਗ ਮ ਪ ਨੀ ਧ ਨੀ ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 10, name: "Sindh Sarvan Nat", gurmukhi: "ਸਿੰਧ ਸਰਵਣ ਨਟ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Pa", varjit: "Ni (aroha) [komal Dha, Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਰੇ ਗ ਮ ਪ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਨੀ ਸਾ", pakad: "ਗ ਮ ਪ ਧ ਸਾਂ ਨੀ ਧ ਪ ਰੇ ਗ ਮ ਪ ਮ ਗ ਮ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 11, name: "Nat Mangal", gurmukhi: "ਨਟ ਮੰਗਲ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Ga", varjit: "Re (aroha) [komal Dha, Ni; both Ga]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਗ ਮ ਪ ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਗ ਮ ਪ ਧ ਪ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 12, name: "Nat Puriya", gurmukhi: "ਨਟ ਪੁਰੀਆ",
    thaat: "Asavari", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Re, Ga; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਧ ਨੀ ਧ ਪ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 13, name: "Nat Narayani", gurmukhi: "ਨਟ ਨਾਰਾਇਣੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re, Dha, Ni; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 14, name: "Narayani", gurmukhi: "ਨਾਰਾਇਣੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga, Ni (aroha); Ga (avaroha) [komal Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਨੀ ਧ ਪ ਰੇ ਮ ਰੇ ਸਾ ਨੀ ਧ"
  },
  {
    parent: "shudh-nat", variantNum: 15, name: "Sarang Nat (Dakhini)", gurmukhi: "ਸਾਰੰਗ ਨਟ (ਦਖਿਣੀ)",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha) [komal Re, Dha]", jaati: "Vakar Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਪ ਪ ਧ ਸਾਂ ਧ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 16, name: "Dhat Panchmi", gurmukhi: "ਧਾਤੁ ਪੰਚਮੀ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "Pa (aroha) [komal Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਨੀ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਰੇ ਗ ਮੇ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ ਪ ਨੀ ਪ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਰੇ ਗ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 17, name: "Purvi", gurmukhi: "ਪੂਰਵੀ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Re, Dha; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਪ ਮੇ ਗ ਮ ਗ ਰੇ ਗ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 18, name: "Paraj", gurmukhi: "ਪਰਜ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "None [komal Re, Dha; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਸਾ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਪ ਗ ਮ ਗ"
  },
  {
    parent: "shudh-nat", variantNum: 19, name: "Triveni", gurmukhi: "ਤ੍ਰਿਵੇਣੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ma [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਪ ਧ ਪ ਸਾਂ ਨੀ ਧ ਪ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 20, name: "Tanki", gurmukhi: "ਟੰਕੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Re", varjit: "Ma (aroha) [komal Re, Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਪ ਗ ਸਾ", pakad: "ਗ ਰੇ ਸਾ ਰੇ ਸਾ ਗ ਪ ਧ ਪ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 21, name: "Deepak", gurmukhi: "ਦੀਪਕ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha); Ni (avaroha) [komal Re, Dha; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਪ ਮੇ ਧ ਪ ਸਾਂ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 22, name: "Manohar", gurmukhi: "ਮਨੋਹਰ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Dha", varjit: "Pa (aroha) [komal Re, Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਰੇਂ ਸਾਂ ਧ ਨੀ ਧ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਪ ਮੇ ਗ ਰੇ ਗ ਰੇ ਸਾ ਮੇ ਧ ਰੇਂ ਸਾਂ ਧ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 23, name: "Malvi", gurmukhi: "ਮਾਲਵੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ni (aroha); Dha (avaroha) [komal Re, Dha; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਧ ਮੇ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ ਪ ਮੇ ਧ ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 24, name: "Reva", gurmukhi: "ਰੇਵਾ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Dha", varjit: "Ma, Ni [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਪ ਗ ਪ ਧ ਪ ਗ ਰੇ ਗ ਰੇ ਸਾ ਗ ਰੇ ਸਾ ਗ"
  },
  {
    parent: "shudh-nat", variantNum: 25, name: "Ramapriya", gurmukhi: "ਰਮਾਪ੍ਰਿਆ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Re, Dha; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਰੇਂ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਰੇਂ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 26, name: "Sunam Bodhini", gurmukhi: "ਸੁਨਾਮ ਬੋਧਿਨੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Pa, Ni (aroha) [komal Re, Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਗ ਮੇ ਪ ਗ ਮੇ ਪ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 27, name: "Manjari", gurmukhi: "ਮੰਜਰੀ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha) [komal Re, Dha; both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਗ ਮੇ ਧ ਨੀ ਪ ਮੇ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 28, name: "Dhat Ranjani", gurmukhi: "ਧਾਤੁ ਰੰਜਨੀ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni [komal Re, Dha; tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਰੇ ਸਾ", pakad: "ਪ ਧ ਸਾਂ ਧ ਧ ਪ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 29, name: "Gaura Anjani", gurmukhi: "ਗੌਰਾ ਅੰਜਨੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Re, Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਮੇ ਗ ਪ ਮੇ ਧ ਪ ਮੇ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 30, name: "Pushpa Ranjani", gurmukhi: "ਪੁਸ਼ਪ ਰੰਜਨੀ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "Pa [komal Re; both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਮੇ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮੇ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 31, name: "Latika", gurmukhi: "ਲਤਿਕਾ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "Ma [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 32, name: "Lalita Mangal", gurmukhi: "ਲਲਿਤਾ ਮੰਗਲ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Ga (aroha) [komal Re; both Ma, Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਰੇਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਪ ਧ ਨੀ ਧ ਪ ਧ ਨੀ ਸਾਂ ਰੇਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 33, name: "Taralika", gurmukhi: "ਤਰਲਿਕਾ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [komal Ga, Ni; both Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਮ ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ ਮੇ ਪ ਮ ਮੇ ਮ ਗ ਮ ਮੇ ਪ ਨੀ ਪ ਮੇ ਮ ਗ ਸਾ ਨੀ ਗ ਸਾ ਗ ਮ ਗ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 34, name: "Kuntali", gurmukhi: "ਕੁੰਤਲੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Ni (aroha) [komal Re; tivra Ma; both Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਪ ਮੇ ਧ ਪ ਗ ਮੇ ਪ ਧ ਪ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਮ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 35, name: "Kusam Ranjani", gurmukhi: "ਕੁਸਮ ਰੰਜਨੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Ga (aroha) [komal Re, Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਪ ਰੇ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 36, name: "Kumud Prabha", gurmukhi: "ਕੁਮੁਦ ਪ੍ਰਭਾ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Ni", varjit: "Ma, Pa (aroha); Re, Pa (avaroha) [komal Re, Dha; tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮੇ ਗ ਨੀ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਧ ਨੀ ਸਾਂ ਧ ਮੇ ਗ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 37, name: "Priya Darshani", gurmukhi: "ਪ੍ਰਿਯ ਦਰਸ਼ਨੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha) [komal Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਮੇ ਪ ਗ ਰੇ ਮੇ ਗ ਪ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 38, name: "Paulambari", gurmukhi: "ਪੌਲਾਮਬਰੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re, Dha, Ni; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 39, name: "Manohar (2)", gurmukhi: "ਮਨੋਹਰ",
    thaat: "Purvi", vadi: "Ga", samvadi: "Dha", varjit: "Pa [komal Re, Dha; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਧ ਨੀ ਧ ਸਾਂ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਧ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਧ ਮੇ ਗ ਰੇ ਗ ਰੇ ਸਾ ਮੇ ਧ ਰੇਂ ਸਾਂ ਰੇਂ ਨੀ ਧ ਪ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "shudh-nat", variantNum: 40, name: "Kaumari", gurmukhi: "ਕੌਮਾਰੀ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Dha [komal Re; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਪ ਮੇ ਪ ਨੀ ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਰੇ ਸਾ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 2, name: "Bhankar", gurmukhi: "ਭੰਕਾਰ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਗ ਮ ਪ ਮ ਪ ਗ ਮੇ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਧ ਮ ਗ ਪ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਮ ਗ ਮੇ ਧ ਮੇ ਗ ਪ ਗ ਰੇ ਸਾ ਨੀ ਨੀ ਸਾ ਰੇ ਗ"
  },
  {
    parent: "mali-gaura", variantNum: 3, name: "Marwa", gurmukhi: "ਮਾਰਵਾ",
    thaat: "Marwa", vadi: "Re", samvadi: "Dha", varjit: "Pa [komal Re; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਧ ਮੇ ਗ ਰੇ ਗ ਮੇ ਰੇ ਗ ਮੇ ਧ ਮ ਗ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 4, name: "Pancham", gurmukhi: "ਪੰਚਮ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re; both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਨੀ ਧ ਨੀ ਸਾ ਮ ਗ ਮੇ ਧ ਨੀ ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਮ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਮ ਮੇ ਗ ਮ ਧ ਮੇ ਮ ਗ ਮੇ ਧ ਨੀ ਮੇ ਧ ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 5, name: "Puriya", gurmukhi: "ਪੂਰੀਆ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "Pa [komal Re; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਰੇ ਗ ਮੇ ਧ ਨੀ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਨੀ ਰੇ ਸਾ ਨੀ ਧ ਨੀ ਮੇ ਧ ਰੇ ਸਾ ਗ ਮੇ ਧ ਗ ਮੇ ਗ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 6, name: "Sajgiri", gurmukhi: "ਸਾਜਗਿਰੀ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Re; tivra Ma; both Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਰੇ ਗ ਮੇ ਗ ਮੇ ਪ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਧ ਮੇ ਗ ਪ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ ਮੇ ਗ ਰੇ ਸਾ ਗ ਮੇ ਨੀ ਧ ਮੇ ਧ ਮੇ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 7, name: "Lalit", gurmukhi: "ਲਲਿਤ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re; both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮੇ ਧ ਸਾਂ", avaroha: "ਰੇਂ ਨੀ ਧ ਮੇ ਧ ਮੇ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ ਮ ਮੇ ਮ ਗ ਮੇ ਧ ਮੇ ਮ ਗ"
  },
  {
    parent: "mali-gaura", variantNum: 8, name: "Ratan Deep", gurmukhi: "ਰਤਨ ਦੀਪ",
    thaat: "Marwa", vadi: "Sa", samvadi: "Ma", varjit: "Re, Pa (aroha); Ni (avaroha) [komal Re; tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ ਧ ਪ ਪ ਮੇ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 9, name: "Dhanaj Paivat", gurmukhi: "ਧਨਜ ਪੈਵਤ",
    thaat: "Marwa", vadi: "Dha", samvadi: "Re", varjit: "Ma, Ni [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਧ ਸਾਂ ਧ ਪ ਰੇ ਗ ਪ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 10, name: "Malin / Aruna Shankar", gurmukhi: "ਮਾਲਿਨ ਜਾਂ ਅਰੁਣਾ ਸ਼ੰਕਰ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "Re, Ma (aroha); Ma (avaroha) [komal Re]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਸਾ ਗ ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ ਨੀ ਸਾ ਨੀ ਪ ਗ ਪ ਨੀ ਧ ਸਾ ਨੀ ਸਾ ਗ ਸਾਂ ਨੀ ਪ ਗ ਪ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 11, name: "Puvariya", gurmukhi: "ਪੁਵਰਿਆ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "Pa [komal Re; tivra Ma; both Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਰੇ ਗ ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਗ ਮੇ ਧ ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਰੇ ਸਾਂ ਨੀ ਰੇ ਧ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 12, name: "Jait", gurmukhi: "ਜੈਤ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਪ ਧ ਗ ਪ ਗ ਰੇ ਸਾ ਸਾ ਰੇ ਸਾ ਰੇ ਗ ਰੇ ਗ ਪ ਪ ਧ ਰੇ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 13, name: "Sohni", gurmukhi: "ਸੋਹਨੀ",
    thaat: "Marwa", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha); Pa (avaroha) [komal Re; tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਸਾਂ ਨੀ ਧ ਮੇ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਧ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਗ ਮੇ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "mali-gaura", variantNum: 14, name: "Dhat Chandrika", gurmukhi: "ਧਾਤੁ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa (aroha) [komal Re; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 15, name: "Pancham Sohni", gurmukhi: "ਪੰਚਮ ਸੋਹਨੀ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਰੇ ਗ ਮੇ ਪ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਰੇਂ ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਰੇਂ ਸਾਂ ਨੀ ਧ ਪ ਮ ਪ ਮੇ ਧ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 16, name: "Sampuran Pancham", gurmukhi: "ਸੰਪੂਰਨ ਪੰਚਮ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਮ ਪ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਪ ਮੇ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਸਾ ਨੀ ਰੇ ਗ ਮ ਪ ਮੇ ਧ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 17, name: "Komal Rikhab da Deshkar", gurmukhi: "ਕੌਮਲ ਰਿਖਭ ਦਾ ਦੇਸ਼ਕਾਰ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Ga", varjit: "Ma, Ni [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਸਾਂ ਧ ਪ ਧ ਪ ਗ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਪ ਸਾ ਰੇ ਸਾ ਗ ਪ ਧ ਸਾਂ ਧ ਪ ਧ ਪ ਗ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 18, name: "Hamas Nand", gurmukhi: "ਹਮਸ ਨੰਦ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Ni", varjit: "Pa, Dha (aroha); Dha, Ga (avaroha) [komal Re; tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਰੇ ਗ ਮੇ ਨੀ ਸਾਂ ਨੀ ਪ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "mali-gaura", variantNum: 19, name: "Sindhu", gurmukhi: "ਸਿੰਧੁ",
    thaat: "Marwa", vadi: "Pa", samvadi: "Ga", varjit: "Ni (avaroha) [komal Re; tivra Ma]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਰੇ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਗ ਰੇ ਗ ਸਾ", pakad: "ਸਾ ਗ ਰੇ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮੇ ਗ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "maru", variantNum: 2, name: "Maru (2)", gurmukhi: "ਮਾਰੂ (2)",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Dha (aroha) [komal Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਮ ਗ ਮ ਪ ਧ ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਪ ਮ ਪ ਮ ਰੇ ਗ ਸਾ", pakad: "ਸਾ ਮ ਗ ਮ ਪ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "maru", variantNum: 3, name: "Maru (3)", gurmukhi: "ਮਾਰੂ (3)",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Pa [tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਨੀ ਰੇ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 4, name: "Maru (4)", gurmukhi: "ਮਾਰੂ (4)",
    thaat: "Marwa", vadi: "Re", samvadi: "Dha", varjit: "Pa [komal Re; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਗ ਮੇ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਗ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਰੇ ਸਾ ਗ ਮੇ ਧ ਮੇ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 5, name: "Maru (5)", gurmukhi: "ਮਾਰੂ (5)",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re, Dha; both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਨੀ ਧ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 6, name: "Shudh Maruv", gurmukhi: "ਸ਼ੁੱਧ ਮਾਰੂਵ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni (aroha); Ni (avaroha) [komal Re, Ga, Dha]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਸਾਂ ਧ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ ਸਾ ਗ ਮ ਪ"
  },
  {
    parent: "maru", variantNum: 7, name: "Maruv Kanra", gurmukhi: "ਮਾਰੂਵ ਕਾਨੜਾ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Dha [komal Re; both Ga]", jaati: "Vakar Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਮ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਗ ਮ ਪ ਨੀ ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 8, name: "Maruv", gurmukhi: "ਮਾਰੂਵ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "Re (aroha) [komal Re, Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ ਨੀ ਧ ਪ ਧ ਨੀ ਧ ਪ ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 9, name: "Maruv Dhanashri", gurmukhi: "ਮਾਰੂਵ ਧਨਾਸ਼ਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [komal Ga, Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਪ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਪ ਮ ਪ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 10, name: "Maruv Basant", gurmukhi: "ਮਾਰੂਵ ਬਸੰਤ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha) [komal Re, Ga, Dha; tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਮੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਸਾ ਮੇ ਧ ਮੇ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 11, name: "Basant Maru", gurmukhi: "ਬਸੰਤ ਮਾਰੂ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Ga", varjit: "Re, Ni (avaroha) [komal Re, Dha; tivra Ma]", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਗ ਸਾ", pakad: "ਗ ਮੇ ਪ ਧ ਨੀ ਧ ਸਾਂ ਸਾਂ ਧ ਪ ਮੇ ਗ ਸਾ ਸਾ ਰੇ ਗ ਮੇ ਪ"
  },
  {
    parent: "maru", variantNum: 12, name: "Priya Darshani", gurmukhi: "ਪ੍ਰਿਯ ਦਰਸ਼ਨੀ",
    thaat: "Purvi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha) [komal Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਮੇ ਪ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "maru", variantNum: 13, name: "Deshkar", gurmukhi: "ਦੇਸ਼ਕਾਰ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "None [komal Re, Dha; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਸਾ ਰੇ ਗ ਮੇ ਗ ਪ ਮੇ ਧ ਪ ਮੇ ਗ ਰੇ ਗ ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 14, name: "Ram Chhaya", gurmukhi: "ਰਾਮ ਛਾਇਆ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Ma, Ni [komal Re, Dha] (Purvi or Bhairav)", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਧ ਸਾ ਰੇ ਗ ਪ ਧ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "maru", variantNum: 15, name: "Bahuli (Sampuran)", gurmukhi: "ਬਹੁਲੀ",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re, Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਮ ਗ ਰੇ ਗ ਮ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tukhari", variantNum: 2, name: "Audav Tukhari", gurmukhi: "ਔਡਵ ਤੁਖਾਰੀ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Ni [komal Ga, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਸਾ ਰੇ ਗ ਮ ਗ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "tukhari", variantNum: 3, name: "Sankiran Tukhari", gurmukhi: "ਸੰਕੀਰਣ ਤੁਖਾਰੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Re, Dha (aroha) [both Ga, Ma, Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ ਰੇ ਸਾ ਨੀ ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਪ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਗ ਮ ਪ ਨੀ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tukhari", variantNum: 4, name: "Madhuvanti", gurmukhi: "ਮਧੁਵੰਤੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha (aroha) [komal Ga; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਧ ਪ ਮੇ ਗ ਮੇ ਗ ਰੇ ਸਾ ਸਾ ਰੇ ਸਾ ਮੇ ਧ ਪ"
  },
  {
    parent: "tukhari", variantNum: 5, name: "Prabhat Ranjani", gurmukhi: "ਪ੍ਰਭਾਤ ਰਜਨੀ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re, Dha; both Ga, Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਪ ਮ ਪ ਮ ਗ ਰੇ ਸਾ ਨੀ ਸਾ", pakad: "ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ ਨੀ ਧ ਪ ਮ ਪ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tukhari", variantNum: 6, name: "Madhu Ja", gurmukhi: "ਮਧੁ ਜਾ",
    thaat: "Todi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [komal Ga; tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਸਾ", pakad: "ਪ ਮੇ ਮੇ ਗ ਸਾ ਨੀ ਸਾ ਮੇ ਗ ਮੇ ਪ"
  },
  {
    parent: "tukhari", variantNum: 7, name: "Vijay Nagari", gurmukhi: "ਵਿਜਯ ਨਗਰੀ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "Ni [komal Ga; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਪ ਮੇ ਗ ਰੇ ਸਾ ਰੇ ਧ ਸਾ ਰੇ ਧ ਸਾ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "tukhari", variantNum: 8, name: "Chandmadhu", gurmukhi: "ਚੰਦੁਮਧੁ",
    thaat: "Todi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Dha [komal Ga, Ni; tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ ਗ ਸਾ", pakad: "ਪ ਨੀ ਸਾ ਗ ਮੇ ਪ ਮੇ ਗ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 2, name: "Maluha Kedar", gurmukhi: "ਮਲੂਹਾ ਕੇਦਾਰ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "None (Re, Dha weak in aroha) [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਮ ਪ ਨੀ ਸਾ ਰੇ ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਨੀ ਸਾ ਧ ਪ ਮ ਪ ਪ ਸਾ ਰੇ ਸਾ ਗ ਮ ਪ ਗ ਮ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 3, name: "Sargam Kedar", gurmukhi: "ਸੈਰਗਮ ਕੇਦਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਮੇ ਪ ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਪ ਨੀ ਧ ਪ ਮੇ ਪ ਮ ਮੇ ਪ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 4, name: "Jaldhar Kedar", gurmukhi: "ਜਲਧਰ ਕੇਦਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ ਰੇ ਪ ਧ ਪ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਪ ਮ ਧ ਮ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਰੇ ਪ ਧ ਪ ਮ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 5, name: "Nat Kedar", gurmukhi: "ਨਟ ਕੇਦਾਰ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni (aroha) [both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਮ ਮ ਗ ਮ ਪ ਪ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਪ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 6, name: "Sindh Muravan Kedar", gurmukhi: "ਸਿੰਧ ਮੁਰਵਣ ਕੇਦਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha); Ga (avaroha) [both Ga, Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮੇ ਪ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਮੇ ਪ ਮੇ ਪ ਧ ਪ ਮ ਰੇ ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "kedara", variantNum: 7, name: "Vaishi Kedar", gurmukhi: "ਵੈਸ਼ੀ ਕੇਦਾਰ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਗ ਰੇ ਗ ਮ ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਧ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਪ ਮ ਧ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 2, name: "Anand Bhairav", gurmukhi: "ਅਨੰਦ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Dha, Ni (aroha) [komal Re; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ ਸਾਂ ਧ ਨੀ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 3, name: "Ahir Bhairav", gurmukhi: "ਅਹੀਰ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ ਨੀ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 4, name: "Nat Bhairav", gurmukhi: "ਨਟ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Dha; shudh Re]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਗ ਮ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਪ ਰੇ ਗ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਗ ਮ ਪ ਧ ਧ ਪ ਮ ਪ ਰੇ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 5, name: "Sarvan Bhairav", gurmukhi: "ਸਰਵਣ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Dha; both Re, Ni]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਰੇਂ ਨੀ ਧ ਪ ਗ ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਗ ਰੇ ਮ ਪ ਗ ਮ ਧ ਪ ਮ ਰੇ ਗ ਮ ਪ ਮ"
  },
  {
    parent: "bhairav", variantNum: 6, name: "Mangal Bhairav", gurmukhi: "ਮੰਗਲ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ni [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਗ ਸਾ ਰੇ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਪ ਮ ਗ ਰੇ ਸਾ ਰੇ ਸਾ ਧ ਪ ਧ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 7, name: "Bairagi Bhairav", gurmukhi: "ਬੈਰਾਗੀ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Dha [komal Re, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਮ ਪ ਨੀ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 16, name: "Durga Bhairav", gurmukhi: "ਦੁਰਗਾ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ ਧ ਸਾ", pakad: "ਮ ਪ ਧ ਸਾਂ ਰੇਂ ਸਾਂ ਧ ਪ ਮ ਧ ਪ ਮ ਰੇ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 17, name: "Komal Bhairav", gurmukhi: "ਕੌਮਲ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "None [komal Re, Ga, Dha, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਧ ਸਾਂ ਨੀ ਧ ਪ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 18, name: "Sorashtar", gurmukhi: "ਸੌਰਾਸ਼ਟਰ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re; both Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਮ ਰੇ ਸਾ ਗ ਮ ਧ ਮ ਧ ਸਾਂ ਰੇਂ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 19, name: "Kalingra", gurmukhi: "ਕਲਿੰਗੜਾ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re, Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਗ ਮ ਗ ਨੀ ਸਾ ਰੇ ਗ ਮ"
  },
  {
    parent: "bhairav", variantNum: 20, name: "Hijaz", gurmukhi: "ਹਿਜ਼ਾਜ਼",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Dha, Ni; both Re]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ ਧ ਪ ਮ ਗ ਰੇ"
  },
  {
    parent: "bhairav", variantNum: 21, name: "Jheelaf", gurmukhi: "ਝੀਲਫ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "Re, Ni [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ ਧ ਪ ਪ ਮ ਸਾ ਮ ਪ ਧ ਪ ਮ ਪ ਮ ਗ ਮ"
  },
  {
    parent: "bhairav", variantNum: 22, name: "Bindu Malin", gurmukhi: "ਬਿੰਦੁ ਮਾਲਿਨ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ma [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਪ ਗ ਪ ਧ ਪ ਧ ਨੀ ਰੇਂ ਸਾਂ ਧ ਨੀ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 23, name: "Arun Kauns", gurmukhi: "ਅਰੁਣ ਕੌਂਸ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਮ ਨੀ ਧ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਮ ਸਾ ਨੀ ਸਾ", pakad: "ਸਾ ਗ ਮ ਨੀ ਸਾ ਗ ਮ ਧ ਮ ਨੀ ਧ ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਗ ਮ ਗ ਮ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 24, name: "Ahiri Bhatiyar", gurmukhi: "ਅਹੀਰੀ ਭਟਿਆਰ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re, Ni]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਪ ਨੀ ਰੇ ਸਾ ਸਾ ਧ ਪ ਧ ਮ ਪ ਗ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਸਾਂ ਧ ਪ ਧ ਮ ਪ ਗ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਧ ਪ ਧ ਮ ਪ ਗ ਰੇ ਸਾ ਪ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 25, name: "Jogiya", gurmukhi: "ਜੋਗੀਆ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni (aroha); Ga (avaroha) [komal Re, Dha]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਧ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਗ ਰੇ ਸਾ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 26, name: "Dev Ranjani", gurmukhi: "ਦੇਵ ਰੰਜਨੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Ma", varjit: "Re, Ga [komal Dha, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਮ ਪ ਧ ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਧ ਪ ਮ ਸਾ", pakad: "ਮ ਪ ਧ ਪ ਧ ਸਾਂ ਧ ਪ ਸਾਂ ਧ ਨੀ ਧ ਪ ਮ ਪ ਮ"
  },
  {
    parent: "bhairav", variantNum: 27, name: "Kanishka", gurmukhi: "ਕਨਿਸ਼ਕਾ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਧ ਨੀ ਸਾਂ ਸਾਂ ਨੀ ਧ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 28, name: "Girija", gurmukhi: "ਗਿਰਿਜਾ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Dha", varjit: "Re, Pa [komal Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ ਸਾਂ ਨੀ ਧ ਮ ਗ ਮ ਧ ਨੀ ਧ ਮ ਸਾ ਮ ਗ ਮ"
  },
  {
    parent: "bhairav", variantNum: 29, name: "Bairagi", gurmukhi: "ਬੈਰਾਗੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Ma", varjit: "Ga, Dha [komal Re, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਨੀ ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 30, name: "He Vitri", gurmukhi: "ਹੇ ਵਿਤਰੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "Ni (aroha) [komal Re, Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਧ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 31, name: "Rondh Priya", gurmukhi: "ਰੌਂਧ ਪ੍ਰਿਆ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "None [komal Re, Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ ਮ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਨੀ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 36, name: "Vimal", gurmukhi: "ਵਿਮਲ",
    thaat: "Bhairav", vadi: "Re", samvadi: "Pa", varjit: "Ma, Dha [komal Re, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਸਾ ਰੇ ਸਾ ਨੀ ਪ ਰੇ ਸਾ ਸਾ ਰੇ ਗ ਪ ਨੀ ਪ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 37, name: "Gidhar Gaul (Dakhini)", gurmukhi: "ਗੀਧਰ ਗੌਲ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Re (aroha); Ma (avaroha) [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਮ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਰੇ ਸਾ ਧ ਨੀ ਸਾ ਮ ਗ ਪ ਗ ਗ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 38, name: "Nagasastam (Dakhini)", gurmukhi: "ਨਾਗਸਾਸਤਮ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha); Ni (avaroha) [komal Re; both Dha]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਪ ਮ ਧ ਸਾਂ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਸਾ ਰੇ ਸਾ ਧ ਸਾ ਰੇ ਧ ਪ ਮ ਧ ਪ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 39, name: "Ushak", gurmukhi: "ਉਸ਼ਾਕ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga [komal Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਪ ਧ ਨੀ ਰੇਂ ਸਾਂ ਮ ਰੇਂ ਸਾਂ ਨੀ ਧ ਪ ਮ ਧ ਪ"
  },
  {
    parent: "bhairav", variantNum: 40, name: "Sharvari (Dakhini)", gurmukhi: "ਸ਼ਰਵਰੀ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re, Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਰੇ ਸਾ ਰੇ ਨੀ ਸਾ ਨੀ ਧ ਪ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 41, name: "Bhairav Nat", gurmukhi: "ਭੈਰਉ ਨਟ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re; both Ga]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਸਾ ਮ ਗ ਪ ਮ ਧ ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਨੀ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਪ ਮ ਧ ਪ ਧ ਮ ਗ ਮ ਰੇ ਗ ਰੇ ਮ ਪ ਮ ਗ ਮ ਗ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 42, name: "Shiv Mangala", gurmukhi: "ਸ਼ਿਵ ਮੰਗਲਾ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Re, Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਮ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਗ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 43, name: "Bhupalam (Dakhini)", gurmukhi: "ਭੁਪਾਲਮ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਪ ਗ ਪ ਧ ਪ ਗ ਪ ਧ ਪ ਗ ਧ ਪ ਗ ਰੇ ਸਾ ਸਾ ਰੇ ਗ ਪ"
  },
  {
    parent: "bhairav", variantNum: 44, name: "Basant Bhairav", gurmukhi: "ਬਸੰਤੁ ਭੈਰਉ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "None [komal Re, Dha]", jaati: "Vakar Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਧ ਨੀ ਸਾ ਰੇ ਗ ਮ ਪ ਮ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਸਾਂ ਧ ਨੀ ਸਾਂ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਧ ਨੀ ਸਾਂ ਮ ਧ ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 45, name: "Ahir Bhairavi (Dakhini)", gurmukhi: "ਅਹੀਰ ਭੈਰਵੀ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "None [komal Re, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਰੇ ਸਾ ਪ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "bhairav", variantNum: 46, name: "Bhuvan Mohini", gurmukhi: "ਭੁਵਨ ਮੋਹਨੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni [both Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਰੇ ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 47, name: "Maruvi (Dakhini)", gurmukhi: "ਮਾਰੂਵੀ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Ma", varjit: "Re, Pa [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ ਨੀ ਪ ਸਾਂ ਨੀ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 48, name: "Malikamdum (Dakhini)", gurmukhi: "ਮਲਿਕਮਦੁਮ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "Re, Ma (aroha); Ma (avaroha) [komal Re, Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਧ ਗ ਪ ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ ਧ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 49, name: "Hanumbhaim", gurmukhi: "ਹਨੁਮਭੈਮ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਮ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 50, name: "Ruchira", gurmukhi: "ਰੁਚਿਰਾ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Re [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਸਾ", pakad: "ਮ ਪ ਧ ਪ ਮ ਪ ਮ ਗ ਸਾ ਗ ਪ ਮ"
  },
  {
    parent: "bhairav", variantNum: 51, name: "Panang", gurmukhi: "ਪਨੰਗ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Ni", varjit: "Pa [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਸਾ ਰੇ ਗ ਮ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 52, name: "Manohari", gurmukhi: "ਮਨੋਹਰੀ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Ga", varjit: "Ma, Ni [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਪ ਗ ਰੇ ਸਾ ਪ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 53, name: "Gaukaran", gurmukhi: "ਗੌਕਰਣ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ga [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਪ ਨੀ ਸਾ ਰੇ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 54, name: "Panchali", gurmukhi: "ਪਾਂਚਾਲੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Pa [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮ ਗ ਰੇ ਸਾ ਨੀ ਧ ਮ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "bhairav", variantNum: 55, name: "Madhu Kunj", gurmukhi: "ਮਧੁ ਕੁੰਜ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Dha [komal Re, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ ਗ ਰੇ ਸਾ ਨੀ ਪ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 56, name: "Radhapati", gurmukhi: "ਰਾਧਾਪਤੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Dha [komal Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਗ ਸਾ", pakad: "ਨੀ ਸਾ ਗ ਗ ਮ ਮ ਪ ਮ ਗ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 57, name: "Pandav", gurmukhi: "ਪਾਂਡਵ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Ni", varjit: "Pa [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਰੇ ਗ ਮ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 58, name: "Rajiv Pandav", gurmukhi: "ਰਾਜੀਵ ਪਾਂਡਵ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha); Pa (avaroha) [komal Re, Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮ ਪ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 59, name: "Madhukar", gurmukhi: "ਮਧੁਕਰ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Ni", varjit: "Ma, Dha [komal Re]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਨੀ ਪ ਨੀ ਸਾ ਗ ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 60, name: "Roopvan Ganeshwari", gurmukhi: "ਰੂਪਵਾਨ ਗਾਨੇਸ਼ਵਰੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Ga, Ni (avaroha) [komal Re, Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਮ ਰੇ ਸਾ ਸਾ ਗ ਮ ਧ ਮ ਧ ਪ ਗ ਮ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 61, name: "Gangoj", gurmukhi: "ਗਾਂਗੋਜ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Ga [komal Re]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਧ ਮ ਪ ਰੇ ਸਾ ਨੀ ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 62, name: "Roopgangoj", gurmukhi: "ਰੂਪਗਾਂਗੋਜ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga (aroha); Ga (avaroha) [komal Re]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਮ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਮ ਪ ਧ ਪ ਗ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 63, name: "Bhaira Vahini", gurmukhi: "ਭੈਰਾ ਵਾਹਿਨੀ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Ga", varjit: "None [komal Re, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਧ ਪ ਮ ਗ ਰੇ ਸਾ ਰੇ ਗ ਮ ਧ ਪ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 64, name: "Chakravak (Dakhini)", gurmukhi: "ਚਕਰਵਾਕ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "None [komal Re, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 65, name: "Bhujanga", gurmukhi: "ਭੁਜੰਗਾ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Ga", varjit: "Pa [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਸਾ ਮ ਗ ਮ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਮ ਗ ਮ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 66, name: "Rudra Pancham", gurmukhi: "ਰੁਦਰ ਪੰਚਮ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha); Pa (avaroha) [komal Re, Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਨੀ ਧ ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 67, name: "Malin", gurmukhi: "ਮਾਲਿਨ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "Ni (aroha) [komal Re, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ ਧ ਸਾਂ ਧ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 68, name: "Shudh Gandharvi", gurmukhi: "ਸ਼ੁੱਧ ਗਾਂਧਰਵੀ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "Ga, Ni (avaroha) [komal Re]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 69, name: "Gaj Vardhan", gurmukhi: "ਗਜ ਵਰਧਨ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha); Ni (avaroha) [komal Re]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 70, name: "Jagat Mohini", gurmukhi: "ਜਗਤ ਮੋਹਨੀ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha); Pa (avaroha) [komal Re]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ ਨੀ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 71, name: "Sindhu", gurmukhi: "ਸਿੰਧੁ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Ga", varjit: "Ni (avaroha) [komal Re]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਗ ਸਾ", pakad: "ਗ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ ਧ ਪ ਮ ਗ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 72, name: "Sarvan Kant", gurmukhi: "ਸਰਵਣ ਕਾਂਤ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Ga", varjit: "None [komal Re]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਮ ਧ ਨੀ ਸਾਂ ਨੀ ਧ ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairav", variantNum: 73, name: "Dev Kriya", gurmukhi: "ਦੇਵ ਕ੍ਰਿਯਾ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Ma", varjit: "Pa [all shudh]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ ਧ ਨੀ ਧ ਮ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 2, name: "Basant Pancham", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਪੰਚਮ",
    thaat: "Purvi", vadi: "Tar Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [komal Re & Dha; both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਮ ਗ, ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਮ ਗ"
  },
  {
    parent: "basant", variantNum: 3, name: "Dant Basant", gurmukhi: "ਰਾਗ ਦੰਤ ਬਸੰਤੁ",
    thaat: "Purvi", vadi: "Re", samvadi: "Dha", varjit: "Ga, Pa (aroha) [komal Re & Dha; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੁ ਮੇ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ ਧੁ, ਪ ਮੇ, ਗ ਮੇ, ਰੁ ਸਾ", pakad: "ਸਾ ਰੁ, ਮੇ, ਗ ਮੇ, ਰੁ ਸਾ, ਪ ਮੇ ਗ ਮੇ, ਧੁ ਨੀ ਧੁ, ਪ ਮੇ ਗ ਮੇ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 4, name: "Basant Priya (Dakhini)", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਪ੍ਰਿਅ (ਦਖਿਣੀ)",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Re]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੁ ਗ ਮ, ਪ ਧੁ, ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ, ਪ ਮ ਰੁ ਸਾ", pakad: "ਰੁ ਗ ਮ, ਪ ਧੁ, ਪ, ਧੁ ਪ, ਮ ਗ, ਪ ਮ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 5, name: "Basant Marwa (Dakhini)", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਮਾਰਵਾ (ਦਖਿਣੀ)",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni (avaroh) [komal Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਮ ਗ ਸਾ", pakad: "ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਸਾਂ ਧ ਪ, ਮ ਗ ਸਾ"
  },
  {
    parent: "basant", variantNum: 6, name: "Basant Lila", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਲੀਲਾ",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "Ga (aroha), Ma (avaroh) [komal Re & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੁ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੁ ਸਾ", pakad: "ਰੁ ਮ ਪ, ਧ, ਨੀ ਧ ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਗ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 7, name: "Jogi Basant", gurmukhi: "ਰਾਗ ਜੋਗੀ ਬਸੰਤੁ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "None [all shudh]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਪ, ਧ ਨੀ ਸਾਂ, ਸਾਂ ਧ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ, ਸਾ ਰੇ ਗ ਸਾ"
  },
  {
    parent: "basant", variantNum: 8, name: "Gambhir Basant", gurmukhi: "ਰਾਗ ਗੰਭੀਰ ਬਸੰਤੁ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Ni, Ga (avaroh) [komal Ga, Dha, Ni; both Re]", jaati: "Sampuran–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਮ, ਗੁ ਮ, ਰੁ ਗੁ, ਮ ਪ, ਧੁ ਪ, ਨੀ ਪ, ਸਾਂ", avaroha: "ਸਾਂ ਧੁ, ਪ ਮ, ਰੇ ਸਾ", pakad: "ਸਾ ਮ, ਗੁ ਮ, ਨੀ ਧੁ ਨੀ ਪ, ਸਾਂ ਧੁ, ਮ ਪ ਮ, ਰੁ ਗੁ ਮ ਪ"
  },
  {
    parent: "basant", variantNum: 9, name: "Basant Mukhari", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਮੁਖਾਰੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re, Dha, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੁ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਮ, ਸਾ ਰੁ ਸਾ", pakad: "ਪ ਧੁ ਨੀ, ਧੁ ਪ, ਮ ਗ ਮ, ਸਾ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 10, name: "Gopi Ka Basant (Dakhini)", gurmukhi: "ਰਾਗ ਗੋਪੀ ਕਾ ਬਸੰਤੁ (ਦਖਿਣੀ)",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Re [komal Ga, Dha, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਸਾ, ਗੁ ਮ ਪ, ਨੀ ਧੁ ਨੀ ਸਾਂ, ਧੁ ਪ, ਮ ਗੁ ਮ ਪ ਨੀ, ਧੁ ਸਾਂ, ਮ ਪ ਗੁ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 11, name: "Kanak Basant", gurmukhi: "ਰਾਗ ਕਨਕ ਬਸੰਤੁ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa (aroha), Pa (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਰੇ, ਮ ਗੁ ਸਾ", pakad: "ਮ ਪ, ਨੀ ਪ ਮ, ਗੁ ਰੇ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 12, name: "Jivika Basant", gurmukhi: "ਰਾਗ ਜੀਵਕਾ ਬਸੰਤੁ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni (aroha), Pa, Ga (avaroh) [komal Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਮ ਪ, ਧ ਸਾਂ, ਨੀ ਪ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 13, name: "Taan Basant", gurmukhi: "ਰਾਗ ਤਾਨ ਬਸੰਤੁ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ, ਮ ਪ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ"
  },
  {
    parent: "basant", variantNum: 14, name: "Kalyan Basant", gurmukhi: "ਰਾਗ ਕਲਿਆਣ ਬਸੰਤੁ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [komal Ga & Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਮ, ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਮ, ਗੁ ਮ, ਪ, ਪ ਪ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 15, name: "Emani Basant", gurmukhi: "ਰਾਗ ਏਮਨੀ ਬਸੰਤ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Pa (aroha) [both Re, Ma, Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ, ਨੀ ਰੇ ਗ, ਮੇ ਧ, ਨੀ ਰੁਂ ਗ, ਮੇ ਗਾਂ ਰੁਂ ਸਾਂ", avaroha: "ਸਾਂ, ਰੁਂ ਨੀ ਧੁ ਪ, ਮੇ ਧ, ਮੇ ਗ, ਮੇ ਗ, ਰੁ ਸਾ", pakad: "ਸਾ ਮ, ਮ ਗ, ਮੇ ਧ, ਨੀ ਰੁਂ ਸਾਂ, ਰੁਂ ਨੀ ਧੁ ਪ, ਮੇ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 16, name: "Malti Basant", gurmukhi: "ਰਾਗ ਮਾਲਤੀ ਬਸੰਤੁ",
    thaat: "Marwa", vadi: "Dha", samvadi: "Ga", varjit: "Pa [komal Re & Dha; both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਨੀ ਰੁ ਸਾ, ਸਾ, ਗ ਮੇ ਧੁ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਰੁਂ ਨੀ ਧੁ, ਮੇ ਗ, ਸਾ ਮ ਮੇ ਮ ਗ, ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਰੁਂ ਨੀ ਧੁ, ਮੇ ਗ, ਸਾ ਮ, ਮੇ ਮ ਗ, ਮੇ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 17, name: "Basant Hindol", gurmukhi: "ਰਾਗ ਬਸੰਤੁ ਹਿੰਡੋਲ",
    thaat: "Marwa", vadi: "Ga", samvadi: "Pa", varjit: "Pa, Ni (aroha) [komal Re; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੁ ਗ, ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗ ਮੇ ਗ, ਰੁ ਸਾ", pakad: "ਸਾ ਰੁ ਨੀ ਸਾ, ਸਾ ਮ, ਗ ਮੇ, ਗ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 18, name: "Mayur Basant", gurmukhi: "ਰਾਗ ਮਯੂਰ ਬਸੰਤੁ",
    thaat: "Marwa", vadi: "Re", samvadi: "Pa", varjit: "None [komal Re; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੁ ਗ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਰੁਂ, ਮ ਗ, ਰੁ ਗ ਸਾ", pakad: "ਰੁ ਗ ਮੇ, ਪ ਧ, ਨੀ ਸਾਂ, ਰੁਂ ਗਾਂ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਰੁ, ਮ ਗ ਰੁ ਗ ਸਾ"
  },
  {
    parent: "basant", variantNum: 19, name: "Hindol", gurmukhi: "ਰਾਗ ਹਿੰਡੋਲ",
    thaat: "Kalyan", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਗ ਸਾ", pakad: "ਧ ਧ, ਨੀ ਮੇ, ਧ ਸਾਂ, ਨੀ ਧ ਮੇ ਗ"
  },
  {
    parent: "basant", variantNum: 20, name: "Sanjh Ka Hindol", gurmukhi: "ਰਾਗ ਸਾਂਝ ਕਾ ਹਿੰਡੋਲ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧ, ਮੇ ਨੀ, ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਨੀ, ਮੇ ਗ ਸਾ", pakad: "ਗ, ਮੇ ਧ, ਮੇ ਨੀ, ਮੇ ਧ ਸਾਂ, ਨੀ ਧ ਨੀ, ਮੇ ਗ ਸਾ"
  },
  {
    parent: "basant", variantNum: 21, name: "Marag Hindol", gurmukhi: "ਰਾਗ ਮਾਰਗ ਹਿੰਡੋਲ",
    thaat: "Marwa", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha) [komal Re; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗ ਮੇ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਰੁਂ ਨੀ ਧ, ਮੇ ਗ, ਪ ਗ ਸਾ", pakad: "ਸਾ ਗ ਸਾ, ਪ ਮੇ ਗ, ਮੇ ਗ, ਮੇ ਪ ਧ ਪ, ਗ ਮੇ ਗ, ਮੇ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 22, name: "Hindol Bahar", gurmukhi: "ਰਾਗ ਹਿੰਡੋਲ ਬਹਾਰ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Ga", varjit: "Re [both Ga, Ma, Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ, ਗ, ਮੇ ਗ, ਮ ਪ, ਗੁ ਮ, ਨੀ ਧ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਪ, ਧ ਪ, ਮੇ ਗੁ ਮ, ਸਾਂ, ਪ, ਮੇ ਗ, ਮ ਗ, ਸਾ", pakad: "ਮ ਨੀ ਧ, ਧ ਨੀ, ਸਾਂ ਨੀ ਪ, ਮੇ ਗ, ਮ ਗ, ਸਾ"
  },
  {
    parent: "basant", variantNum: 23, name: "Basant Bahar", gurmukhi: "ਰਾਗ ਬਸੰਤ ਬਹਾਰ",
    thaat: "Purvi", vadi: "Tar Sa", samvadi: "Ma", varjit: "Re, Pa (avaroh) [both Re, Ga, Ma, Dha, Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗ, ਮੇ ਗ, ਰੁ ਸਾ, ਸਾ ਮ ਪ, ਗੁ ਮ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਨੀ ਸਾਂ, ਨੀ ਪ, ਮ ਗ, ਮੇ ਗ, ਮੇ ਗ, ਰੁ ਸਾ", pakad: "ਸਾ ਮ, ਪ, ਗੁ ਮ ਨੀ ਧੁ, ਮੇ ਪ, ਮੇ ਗ, ਮੇ ਗ, ਸਾ ਮ ਪ"
  },
  {
    parent: "basant", variantNum: 24, name: "Paraj Bahar", gurmukhi: "ਰਾਗ ਪਰਜ ਬਹਾਰ",
    thaat: "Purvi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha) [komal Re; both Ga, Ma, Dha, Ni]", jaati: "Sankiran Mishra Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਧੁ, ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੁ ਗਾਂ ਰੁ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ, ਮੇ ਗ, ਰੁ ਸਾ", pakad: "ਗ ਮ, ਪ ਧੁ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ, ਰੁ ਗਾਂ ਰੁ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ, ਮੇ ਗ, ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 25, name: "Bahar", gurmukhi: "ਰਾਗ ਬਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha), Dha (avaroh) [komal Ga; both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਗੁ ਮ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਗੁ ਮ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "basant", variantNum: 26, name: "Sindhu Bahar", gurmukhi: "ਰਾਗ ਸਿੰਧੁ ਬਹਾਰ",
    thaat: "Kafi", vadi: "Tar Sa", samvadi: "Pa", varjit: "Re, Ni (aroha) [komal Ga; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਮ ਪ, ਮ ਗੁ ਮ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਰੁਂ ਨੀ ਸਾਂ, ਨੀ ਧ, ਪ, ਮ ਪ ਨੀ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ ਸਾਂ, ਨੀ ਧ ਮ, ਨੀ ਨੀ ਧ ਮ, ਪ ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 27, name: "Bago Sri Bahar", gurmukhi: "ਰਾਗ ਬਾਗੋ ਸ੍ਰੀ ਬਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Ga; both Ni]", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ, ਮ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਪ ਮ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਮ, ਪ ਮ ਗੁ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 28, name: "Kanra Bahar", gurmukhi: "ਰਾਗ ਕਾਨੜਾ ਬਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha) [both Ga, Dha, Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ, ਮ ਪ, ਗੁ ਮ ਨੀ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਰੁਂ ਨੀ ਸਾਂ, ਧ ਨੀ, ਪ ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ, ਰੁਂ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਨੀ ਧੁ, ਧ ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ ਮ"
  },
  {
    parent: "basant", variantNum: 29, name: "Malkaus Bahar", gurmukhi: "ਰਾਗ ਮਾਲਕੌਸ ਬਹਾਰ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha & avaroh) [komal Ga, Dha, Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਨੀ, ਧ, ਮ ਪ ਗੁ ਮ, ਸਾ ਗੁ ਸਾ", pakad: "ਮ ਪ ਨੀ ਮ ਪ, ਗੁ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਨੀ ਪ"
  },
  {
    parent: "basant", variantNum: 30, name: "Rago Sri Bahar", gurmukhi: "ਰਾਗ ਰਾਗੋ ਸ੍ਰੀ ਬਹਾਰ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [both Ga, Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਗ, ਮ ਧ, ਮ ਪ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਪ ਨੀ ਪ, ਮ ਪ ਗੁ ਮ, ਗ ਮ ਧ, ਗ ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ, ਮ ਧ ਮ, ਮ ਧ ਨੀ ਸਾਂ, ਨੀ ਪ, ਮ ਪ ਗੁ ਮ"
  },
  {
    parent: "basant", variantNum: 31, name: "Kedar Bahar", gurmukhi: "ਰਾਗ ਕੇਦਾਰ ਬਹਾਰ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Sa", varjit: "Ga (avaroh) [komal Ga; both Ma, Ni]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਰੇ ਸਾ, ਗੁ ਮ, ਮ ਪ, ਮ, ਗੁ ਮ, ਪ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ, ਗੁ ਮ ਨੀ ਧ, ਨੀ ਪ, ਮੇ ਪ, ਮੇ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਮ, ਮ ਪ, ਧ ਪ ਮ, ਮ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "basant", variantNum: 32, name: "Bhairav Bahar", gurmukhi: "ਰਾਗ ਭੈਰਉ ਬਹਾਰ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "None [both Re, Ga, Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੁ ਗ ਮ ਪ ਮ, ਮ ਧ ਨੀ ਸਾ, ਨੀ ਰੁਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗਾਂ ਰੇ, ਗੁ ਰੁ ਸਾ, ਨੀ ਰੇ ਸਾ, ਨੀ ਪ ਸਾ", pakad: "ਧ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ, ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 33, name: "Prachin Basant", gurmukhi: "ਰਾਗ ਪ੍ਰਾਚੀਨ ਬਸੰਤ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Re, Dha [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਮ, ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਪ, ਗੁ ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ, ਪ ਮ, ਪ ਨੀ, ਸਾਂ ਨੀ ਸਾ, ਨੀ ਸਾਂ, ਨੀ ਪ, ਮ ਗੁ ਪ, ਗੁ ਗੁ ਸਾ"
  },
  {
    parent: "basant", variantNum: 34, name: "Hindol Pancham", gurmukhi: "ਰਾਗ ਹਿੰਡੋਲ ਪੰਚਮ",
    thaat: "Kalyan", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha), Re (avaroh) [tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧ, ਨੀ ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਗ ਸਾ", pakad: "ਨੀ ਧ ਪ, ਮੇ ਧ, ਮੇ ਗ, ਮੇ ਗ, ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ"
  },
  {
    parent: "sarang", variantNum: 2, name: "Sarang Gaul", gurmukhi: "ਰਾਗ ਸਾਰੰਗ ਗੌਲ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Dha [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮੇ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮੇ ਰੇ ਸਾ", pakad: "ਨੀ ਪ, ਮੇ ਪ, ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 3, name: "Brindavani Sarang", gurmukhi: "ਰਾਗ ਬ੍ਰਿੰਦਾਵਨੀ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਮ ਪ, ਨੀ ਸਾਂ ਨੀ ਪ, ਮ ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 4, name: "Mian Ki Sarang", gurmukhi: "ਰਾਗ ਮੀਆਂ ਕੀ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga [both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ, ਰੇ, ਮ ਰੇ ਪ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਨੀ ਪ, ਮ ਰੇ ਸਾ, ਨੀ ਪ ਸਾ", pakad: "ਰੇ ਪ, ਰੇ ਮ ਰੇ ਸਾ, ਨੀ ਪ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 5, name: "Gaur Sarang", gurmukhi: "ਰਾਗ ਗੌੜ ਸਾਰੰਗ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "None [both Ma]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ, ਗ ਰੇ, ਮ ਗ, ਪ, ਮੇ ਧ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਨੀ ਪ, ਧ ਮੇ ਪ ਗ, ਮ ਰੇ ਪ, ਰੇ ਸਾ", pakad: "ਸਾ, ਗ ਰੇ, ਮ ਗ, ਪ ਰੇ, ਸਾ"
  },
  {
    parent: "sarang", variantNum: 6, name: "Saranga Sarang", gurmukhi: "ਰਾਗ ਸਾਰੰਗਾ ਸਾਰੰਗ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Dha", varjit: "Ni (avaroh) [tivra Ma]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਰੇ ਸਾ, ਮੇ ਗ, ਸਾਂ ਪ, ਪ, ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 7, name: "Purva Sarang", gurmukhi: "ਰਾਗ ਪੂਰਵਾ ਸਾਰੰਗ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Re & Dha; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਗ ਮੇ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਪ, ਮੇ ਗ ਰੁ, ਗ ਸਾ", pakad: "ਮੇ ਪ, ਧੁ ਪ, ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ ਪ ਮੇ ਗ ਰੁਂ, ਗ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 8, name: "Sarvan Sarang", gurmukhi: "ਰਾਗ ਸਰਵਨ ਸਾਰੰਗ",
    thaat: "Asavari", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Dha (aroha) [komal Ga & Dha; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਧੁ ਪ, ਮ ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਧੁ ਪ, ਰੇ ਮ ਪ ਨੀ, ਪ ਮ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 9, name: "Lanka Dahan Sarang", gurmukhi: "ਰਾਗ ਲੰਕਾ ਦਹਨ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha) [komal Ga; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ ਧ ਨੀ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 10, name: "Surat Sarang", gurmukhi: "ਰਾਗ ਸੁਰਟਿ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਗ ਮ, ਪ ਨੀ ਸਾਂ, ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 11, name: "Sur Sarang", gurmukhi: "ਰਾਗ ਸੂਰ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Dha (aroha), Dha (avaroh) [komal Ga; both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਨੀ ਸਾ, ਰੇ ਮ ਰੇ, ਨੀ ਪ ਮ ਰੇ, ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 12, name: "Gurdev Sarang", gurmukhi: "ਰਾਗ ਗੁਰਦੇਵ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Dha (aroha), Ga (avaroh) [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਗੁ ਮ ਪ, ਧ ਮ ਪ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ ਮ ਰੇ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 13, name: "Vadhans Sarang", gurmukhi: "ਰਾਗ ਵਡਹੰਸ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮ, ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਪ ਮ, ਰੇ ਰੇ, ਨੀ ਸਾ", pakad: "ਸਾ ਰੇ ਮ, ਨੀ ਪ, ਮ ਰੇ ਸਾ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 14, name: "Madhmad Sarang", gurmukhi: "ਰਾਗ ਮਧਮਾਦ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha [komal Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਨੀ, ਸਾ ਰੇ ਮ ਪ, ਸਾਂ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਮ ਰੇ, ਮ ਰੇ, ਸਾ ਨੀ ਸਾ", pakad: "ਨੀ, ਸਾ ਰੇ ਮ, ਰੇ, ਰੇ ਮ ਪ, ਮ ਰੇ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 15, name: "Samant Sarang", gurmukhi: "ਰਾਗ ਸਾਮੰਤ ਸਾਰੰਗ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha), Ga (avaroh) [both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ, ਮੇ ਰੇ, ਨੀ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਧ ਪ, ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "sarang", variantNum: 16, name: "Khat Priya", gurmukhi: "ਰਾਗ ਖਟ ਪ੍ਰਿਆ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha) [komal Ga & Ni; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ, ਮੇ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 17, name: "Kafi", gurmukhi: "ਰਾਗ ਕਾਫੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਮ ਪ, ਗੁ ਰੇ ਨੀ ਧ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 18, name: "Patdeep", gurmukhi: "ਰਾਗ ਪਟਦੀਪ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha (aroha) [komal Ga]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਗੁ, ਰੇ ਸਾ, ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 19, name: "Bhim Palasi", gurmukhi: "ਰਾਗ ਭੀਮ ਪਲਾਸੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Dha (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਮ, ਮ ਗੁ ਮ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 20, name: "Malgunji", gurmukhi: "ਰਾਗ ਮਾਲਗੁੰਜੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Re (aroha) [both Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ, ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਸਾ, ਰੇ, ਗ, ਰੇ ਗ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 21, name: "Shahana", gurmukhi: "ਰਾਗ ਸ਼ਾਹਾਨਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ ਪ, ਨੀ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਨੀ, ਪ ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 22, name: "Barwa", gurmukhi: "ਰਾਗ ਬਰਵਾ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga (aroha) [komal Ga; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ, ਗੁ ਰੇ ਗੁ ਸਾ", pakad: "ਰੇ, ਗੁ ਰੇ ਸਾ, ਨੀ ਧ ਮ ਪ, ਨੀ ਸਾ, ਰੇ ਮ ਗੁ, ਰੇ ਮ ਪ, ਨੀ ਧ ਮ ਧ, ਪ ਗੁ ਰੇ, ਨੀ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 23, name: "Ahiri", gurmukhi: "ਰਾਗ ਅਹੀਰੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ga & Ni]", jaati: "Sankiran Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ, ਗੁ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ, ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਰੇ, ਗੁ ਮ ਪ, ਧ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ, ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 24, name: "Sindhvi", gurmukhi: "ਰਾਗ ਸਿੰਧਵੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਰੇ ਗੁ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਮ, ਗੁ ਰੇ, ਸਾ ਨੀ, ਧ ਨੀ, ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ, ਮ ਪ ਨੀ ਸਾਂ"
  },
  {
    parent: "sarang", variantNum: 25, name: "Jog Chandu", gurmukhi: "ਰਾਗ ਜੋਗ ਚੰਦੂ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ ਮ, ਸਾ ਗੁ ਸਾ", pakad: "ਪ ਨੀ ਸਾ, ਗ, ਮ, ਸਾ ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 26, name: "Gandhar Kaushik", gurmukhi: "ਰਾਗ ਗੰਧਾਰ ਕੌਸ਼ਿਕ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Dha", varjit: "Re, Pa [komal Dha & Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਮ ਗੁ ਸਾ", pakad: "ਗ ਮ ਗੁ ਸਾ, ਨੀ ਧੁ, ਨੀ ਸਾ, ਗ ਮ"
  },
  {
    parent: "sarang", variantNum: 27, name: "Prachin Bhairav", gurmukhi: "ਰਾਗ ਪ੍ਰਾਚੀਨ ਭੈਰਉ",
    thaat: "Bilawal", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਗ ਮ, ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ, ਗ ਸਾ", pakad: "ਗ ਮ ਧ, ਨੀ ਸਾਂ, ਸਾਂ ਨੀ ਧ, ਮ, ਗ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 28, name: "Vidhvans (Dakhini)", gurmukhi: "ਰਾਗ ਵਿਧਵੰਸ (ਦਖਿਣੀ)",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [komal Ga]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਪ, ਗੁ ਗੁ, ਰੇ ਰੇ, ਸਾ", pakad: "ਰੇ ਗੁ ਮ ਧ ਨੀ, ਧ ਪ ਗੁ, ਰੇ ਰੇ, ਸਾ, ਨੀ ਨੀ, ਰੇ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 29, name: "Abhogi", gurmukhi: "ਰਾਗ ਅਭੋਗੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Pa, Ni [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਧ ਸਾ, ਰੇ ਮ ਗੁ ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 30, name: "Pradeep Ki", gurmukhi: "ਰਾਗ ਪ੍ਰਦੀਪ-ਕੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Re, Pa (aroha) [komal Ni; both Ga]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਮ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਨੀ, ਸਾ ਮ, ਮ ਗੁ, ਮ ਪ, ਮ ਪ ਨੀ ਨੀ, ਪ, ਧ ਮ ਧ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 31, name: "Trivranjani", gurmukhi: "ਰਾਗ ਤ੍ਰਿਵਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਪ ਗੁ, ਰੇ, ਧ ਰੇ ਸਾ, ਰੇ ਗੁ ਰੇ, ਪ ਧ ਪ, ਸਾਂ ਧ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 32, name: "Sughrai", gurmukhi: "ਰਾਗ ਸੁਘਰਾਈ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Dha (aroha) [komal Ga; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ, ਨੀ ਨੀ, ਪ ਮ ਰੇ ਸਾ, ਰੇ ਮ ਗੁ"
  },
  {
    parent: "sarang", variantNum: 33, name: "Dhani", gurmukhi: "ਰਾਗ ਧਾਨੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "Re, Dha [komal Ga & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਗੁ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮ ਗੁ, ਸਾ", pakad: "ਗੁ ਮ, ਨੀ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 34, name: "Kauhal", gurmukhi: "ਰਾਗ ਕੌਹਲ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ma, Dha [komal Ga; both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ, ਪ ਨੀ ਸਾਂ, ਨੀ ਪ, ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 35, name: "Kaulhas", gurmukhi: "ਰਾਗ ਕੌਲਹਾਸ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ma [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ ਧ ਨੀ, ਪ, ਪ ਗੁ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 36, name: "Kambhoji", gurmukhi: "ਰਾਗ ਕਾਮਭੋਜੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "Ni (aroha) [komal Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾਂ", pakad: "ਗੁ, ਮ ਪ ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 37, name: "Chandu Nandan", gurmukhi: "ਰਾਗ ਚੰਦੂ ਨੰਦਨ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Dha; both Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ, ਮ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇ ਨੀ ਧੁ ਪ, ਮ, ਗ, ਮ ਗੁ ਸਾ", pakad: "ਮ, ਧੁ ਨੀ ਧੁ ਪ ਮ, ਮ ਗ, ਮ ਪ ਗੁ, ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 38, name: "Jayant", gurmukhi: "ਰਾਗ ਜਯੰਤ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Dha", varjit: "Re, Ni (aroha), Re (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਧ ਪ ਗੁ, ਪ ਗੁ, ਰੇ ਸਾ, ਸਾ ਪ ਧ ਪ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 39, name: "Pushap", gurmukhi: "ਰਾਗ ਪੁਸ਼ਪ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ni [komal Ga]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਗੁ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗੁ ਮ ਗੁ, ਰੇ ਸਾ", pakad: "ਗੁ ਪ ਧ ਸਾਂ, ਪ ਗੁ, ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 40, name: "Bhim", gurmukhi: "ਰਾਗ ਭੀਮ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [komal Ni; both Ga]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ, ਮ, ਪ, ਸਾਂ ਨੀ ਸਾਂ", avaroha: "ਗੁ ਰੁਂ ਸਾਂ ਨੀ, ਧ ਪ, ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ, ਗੁ ਰੁਂ ਸਾਂ, ਨੀ ਧ ਪ ਮ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 41, name: "Madhu Ranjani", gurmukhi: "ਰਾਗ ਮਧੁ ਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਨੀ, ਸਾ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਪ, ਗੁ ਮ, ਗੁ ਮ ਗੁ, ਸਾ ਨੀ ਸਾ", pakad: "ਮ ਪ ਨੀ, ਸਾਂ, ਨੀ, ਪ, ਗੁ ਮ ਪ, ਮ ਗੁ, ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 42, name: "Manvi (1)", gurmukhi: "ਰਾਗ ਮਾਨਵੀ (1)",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ma [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਪ ਗੁ, ਧ ਪ, ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 43, name: "Ujjan Chandrika", gurmukhi: "ਰਾਗ ਉੱਜਨ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha), Re (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਧ, ਪ ਮ, ਗੁ ਸਾ, ਪ", pakad: "ਪ ਧ ਪ ਮ ਗੁ ਸਾ, ਪ"
  },
  {
    parent: "sarang", variantNum: 44, name: "Kapi", gurmukhi: "ਰਾਗ ਕਪੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ni (avaroh) [komal Ga & Ni]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਰੇ ਗੁ ਮ ਰੇ, ਸਾ", pakad: "ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਧ ਪ ਮ, ਰੇ ਗੁ ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "sarang", variantNum: 45, name: "Jhilla", gurmukhi: "ਰਾਗ ਝਿਲਾ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Dha", varjit: "None [both Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਗ, ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ, ਪ ਮ, ਗ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ, ਨੀ ਧ, ਗ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 46, name: "Naiki", gurmukhi: "ਰਾਗ ਨਾਇਕੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga (aroha) [komal Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਨੀ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਪ, ਮ ਪ ਸਾਂ, ਨੀ ਪ, ਮ ਪ, ਗੁ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 47, name: "Hanjani", gurmukhi: "ਰਾਗ ਹੰਜਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [both Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਰੁਂ ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਮ ਗੁ ਰੇ, ਨੀ ਸਾ", pakad: "ਗ ਮ ਪ, ਨੀ ਧ ਸਾਂ, ਰੁਂ ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਮ ਗੁ ਰੇ, ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 48, name: "Vijan", gurmukhi: "ਰਾਗ ਵਿਜਨ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ni [komal Ga; tivra Ma; both Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮੇ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਗੁ, ਮੇ ਪ ਧ, ਸਾਂ, ਸਾਂ ਧੁ ਪ, ਮੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 49, name: "Saraswati Ranjani", gurmukhi: "ਰਾਗ ਸਰਸਵਤੀ ਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Ga; tivra Ma; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਗੁ ਮੇ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮੇ, ਪ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 50, name: "Savan", gurmukhi: "ਰਾਗ ਸਾਵਨ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ga & Ni]", jaati: "Sankiran Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12, samayNote: "Rainy season",
    aroha: "ਸਾ ਗੁ, ਪ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ, ਮ, ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ, ਨੀ ਧ, ਮ ਪ, ਨੀ ਧ ਪ, ਮ ਧ ਮ, ਰੇ ਮ ਰੇ, ਮ ਪ ਧ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ"
  },
  {
    parent: "sarang", variantNum: 51, name: "Naad Ranjani", gurmukhi: "ਰਾਗ ਨਾਦ ਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga (aroha) [komal Ga; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਧ ਮ ਗੁ ਰੇ, ਗੁ ਸਾ", pakad: "ਮ ਪ, ਧ ਪ, ਨੀ ਸਾਂ, ਧ ਨੀ ਪ, ਧ ਮ, ਗੁ ਰੇ, ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 52, name: "Rav Vasini", gurmukhi: "ਰਾਗ ਰਾਵ ਵਾਸਿਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 53, name: "Savani", gurmukhi: "ਰਾਗ ਸਾਵਨੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Ga; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ, ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਸਾਂ, ਪ, ਪ ਧ ਮ, ਮ ਪ, ਗੁ, ਮ ਪ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 54, name: "Shudh Bhairvi", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਭੈਰਵੀ",
    thaat: "Kafi", vadi: "Dha", samvadi: "Re", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ, ਰੇ ਮ, ਪ ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਧ ਪ, ਮ ਰੇ, ਗੁ ਮ ਰੇ, ਸਾ ਗੁ, ਰੇ ਮ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "sarang", variantNum: 55, name: "Gandh Vikshep", gurmukhi: "ਰਾਗ ਗੰਧ ਵਿਕਸ਼ੇਪ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ma, Ni (avaroh) [komal Ga & Ni]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਧ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 56, name: "Kirvani", gurmukhi: "ਰਾਗ ਕੀਰਵਾਣੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga & Dha]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਰੇ ਗੁ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਮ ਧੁ ਪ ਮ, ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 57, name: "Chandu Maul", gurmukhi: "ਰਾਗ ਚੰਦੂ ਮੌਲ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ga & Dha; both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ ਧੁ, ਮ, ਗੁ ਮ, ਗੁ ਸਾ", pakad: "ਗੁ ਮ ਧੁ ਨੀ, ਸਾਂ, ਧੁ ਨੀ ਧੁ ਮ, ਗੁ ਮ ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 58, name: "Patmauk", gurmukhi: "ਰਾਗ ਪਟਮੌਕ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Ga & Dha]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ, ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ ਗੁ, ਮ, ਪ ਨੀ, ਧੁ ਪ"
  },
  {
    parent: "sarang", variantNum: 59, name: "Sindh Ranjani", gurmukhi: "ਰਾਗ ਸਿੰਧ ਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Re, Pa [komal Dha & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗ ਸਾ", pakad: "ਮ ਗ ਸਾ ਗ, ਸਾ, ਧੁ ਨੀ, ਸਾ ਗ"
  },
  {
    parent: "sarang", variantNum: 60, name: "Manohari", gurmukhi: "ਰਾਗ ਮਨੋਹਰੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ni [komal Ga]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗੁ ਰੇ ਗੁ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ, ਰੇ ਗੁ, ਸਾ ਰੇ ਧ ਸਾ, ਸਾਂ, ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 61, name: "Sindhura / Saindhavi", gurmukhi: "ਰਾਗ ਸਿੰਧੁਰਾ ਜਾਂ ਸੈਂਧਵੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ga, Ni (aroha) [both Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਰੇ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਨੀ ਧ ਸਾਂ, ਰੁਂ ਗਾਂ ਰੁਂ ਸਾਂ, ਸਾਂ ਨੀ ਪ, ਮ ਧ ਗੁ ਰੇ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 62, name: "Johar", gurmukhi: "ਰਾਗ ਜੋਹਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ni; both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਮ, ਸਾ ਗੁ ਸਾ", pakad: "ਨੀ ਪ ਮ, ਗ ਮ, ਸਾ ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 63, name: "Pilu", gurmukhi: "ਰਾਗ ਪੀਲੂ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Ga; both Dha & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ, ਰੇ ਗੁ, ਮ ਪ ਧੁ ਪ, ਨੀ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ, ਪ ਮ ਗੁ, ਨੀ ਸਾ", pakad: "ਗੁ ਪ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 64, name: "Daulti", gurmukhi: "ਰਾਗ ਦੌਲਤੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Re", varjit: "Ma, Dha (aroha), Dha (avaroh) [komal Ga; both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਪ, ਗੁ ਨੀ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਪ, ਗੁ, ਨੀ ਪ, ਨੀ ਸਾਂ, ਨੀ ਪ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 65, name: "Dev Mukhari", gurmukhi: "ਰਾਗ ਦੇਵ ਮੁਖਾਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਪ, ਮ ਰੇ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਮ ਰੇ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 66, name: "Revti", gurmukhi: "ਰਾਗ ਰੇਵਤੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧ ਮ ਪ, ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਮ ਪ ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਪ ਗੁ, ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 67, name: "Surgam Pani", gurmukhi: "ਰਾਗ ਸੁਰਗਮ ਪਾਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ga & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ, ਗੁ ਮ ਪ, ਗੁ ਮ, ਗੁ ਮ ਗੁ ਸਾ, ਪ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 68, name: "Vidha", gurmukhi: "ਰਾਗ ਵਿਢਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha), Re (avaroh) [komal Ni; both Ga]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਸਾ, ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਸਾਂ ਪ, ਨੀ ਧ ਪ, ਗ ਗੁ ਸਾ, ਨੀ ਸਾ", pakad: "ਨੀ ਧ, ਸਾਂ ਪ, ਮ ਗ ਗੁ ਨੀ, ਸਾ ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 69, name: "Patmanjari", gurmukhi: "ਰਾਗ ਪਟਮੰਜਰੀ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਪ ਧ, ਗੁ ਰੇ ਗੁ ਮ, ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ, ਮ ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 70, name: "Rajeshwari", gurmukhi: "ਰਾਗ ਰਾਜੇਸ਼ਵਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa, Re [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਮ ਗੁ ਮ, ਧ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਗੁ, ਮ ਗੁ, ਸਾ", pakad: "ਸਾ, ਨੀ ਸਾ, ਮ ਗੁ ਮ, ਧ ਨੀ ਧ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 71, name: "Hans Manjari", gurmukhi: "ਰਾਗ ਹੰਸ ਮੰਜਰੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Re", varjit: "Ga [komal Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਮ ਪ ਧ ਪ ਮ, ਰੇ ਨੀ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ, ਨੀ ਸਾਂ, ਧ ਪ, ਮ ਪ ਧ ਪ ਮ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 72, name: "Gauri Manohari", gurmukhi: "ਰਾਗ ਗੌਰੀ ਮਨੋਹਰੀ",
    thaat: "Kafi", vadi: "Re", samvadi: "Dha", varjit: "None [komal Ga]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 73, name: "Pal Manjari", gurmukhi: "ਰਾਗ ਪਲ ਮੰਜਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa, Ni (aroha) [komal Ni; both Ga]", jaati: "Chadhsvari Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਗੁ ਮ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਧ, ਨੀ ਧ ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 74, name: "Manjari", gurmukhi: "ਰਾਗ ਮੰਜਰੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "None [both Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਗ, ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ, ਧ ਪ, ਮ ਗ ਗੁ, ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਗ, ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ, ਨੀ ਨੀ ਧ ਪ, ਮ ਗ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 75, name: "Neelambari", gurmukhi: "ਰਾਗ ਨੀਲਾਮਬਰੀ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Ni (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ, ਗੁ ਰੇ, ਰੇ ਗੁ, ਮ ਗੁ, ਰੇ ਗੁ, ਮ ਗੁ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 76, name: "Bageshwari", gurmukhi: "ਰਾਗ ਬਾਗੇਸ਼ਵਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਪ ਧ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਸਾ ਮ, ਗੁ ਰੇ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 77, name: "Bal Shabari", gurmukhi: "ਰਾਗ ਬਾਲ ਸ਼ਬਰੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [komal Re & Ga; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਗੁ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੁ ਸਾ", pakad: "ਰੁ ਗੁ, ਮ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 78, name: "Sri Ranjani", gurmukhi: "ਰਾਗ ਸ੍ਰੀ ਰੰਜਨੀ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Ni (aroha), Ni (avaroh) [komal Ga]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਪ, ਪ ਗੁ, ਧ ਗੁ, ਪ ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 79, name: "Bhinn Jog", gurmukhi: "ਰਾਗ ਭਿੰਨ ਜੋਗ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [both Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ ਗੁ, ਸਾ ਗ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮ ਗ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ, ਸਾ ਗ ਮ, ਨੀ ਧ, ਮ, ਗ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 80, name: "Mahindar Chandar", gurmukhi: "ਰਾਗ ਮਹਿੰਦਰ ਚੰਦਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re [both Ga, Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਨੀ ਸਾ ਗੁ ਸਾ, ਨੀ ਸਾ ਗ ਮ, ਪ ਮ, ਧੁ ਮ, ਪ, ਮ ਧ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧੁ ਪ, ਧ ਮ, ਧ ਨੀ ਧ ਮ, ਮ ਗੁ, ਧੁ ਨੀ ਧੁ ਮ, ਗ ਮ, ਸਾ ਗੁ ਸਾ", pakad: "ਮ ਪ ਧ ਨੀ ਧ ਮ, ਮ ਗੁ ਮ ਗੁ ਪ, ਧੁ ਨੀ ਧੁ ਮ, ਗੁ ਮ, ਸਾ ਗੁ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 81, name: "Manvi (2)", gurmukhi: "ਰਾਗ ਮਾਨਵੀ (2)",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ma [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਪ ਗੁ, ਧ ਪ, ਨੀ ਧ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 82, name: "Prasabh", gurmukhi: "ਰਾਗ ਪ੍ਰਸਭ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Pa [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ, ਮ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਮ ਗੁ ਮ, ਧ ਨੀ ਧ, ਮ, ਮ ਗੁ ਮ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 83, name: "Palasi", gurmukhi: "ਰਾਗ ਪਲਾਸੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Dha [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਗੁ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਪ ਗੁ ਮ, ਪ ਮ, ਗੁ ਮ ਪ ਨੀ ਸਾਂ, ਪ ਮ ਗੁ ਮ ਪ, ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 84, name: "Sanjivani", gurmukhi: "ਰਾਗ ਸੰਜੀਵਨੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "None [komal Dha; both Re & Ga]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ, ਗ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮ, ਗ ਰੁ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 85, name: "Saras Vahini", gurmukhi: "ਰਾਗ ਸਰਸ ਵਹਿਨੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Ga", varjit: "Ni (avaroh) [komal Dha; both Ga]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ, ਮ ਪ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧੁ, ਨੀ ਸਾਂ, ਸਾਂ, ਧੁ ਪ ਮ, ਗੁ ਰੇ, ਸਾ ਰੇ ਗ ਰੇ, ਮ, ਗੁ ਰੇ"
  },
  {
    parent: "sarang", variantNum: 86, name: "Madhvi", gurmukhi: "ਰਾਗ ਮਾਧਵੀ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Ni", varjit: "Dha, Ma (avaroh) [komal Ga & Dha]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧੁ ਨੀ ਧੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਧੁ ਨੀ ਧੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 87, name: "Nepal", gurmukhi: "ਰਾਗ ਨੈਪਾਲ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Dha (aroha), Ga (avaroh) [komal Ga & Dha]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ, ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ, ਗੁ ਮ, ਪ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "sarang", variantNum: 88, name: "Kirna Vali", gurmukhi: "ਰਾਗ ਕਿਰਨਾ ਵਲੀ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Re", varjit: "Ga (aroha) [komal Ga & Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 2, name: "Arun Malar", gurmukhi: "ਰਾਗ ਅਰੁਣ ਮਲ੍ਹਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਰੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ, ਧ, ਗ ਮ, ਪ ਮ ਗ ਮ, ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਰੇ ਪ, ਧ ਗ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 3, name: "Samehi Malar", gurmukhi: "ਰਾਗ ਸਾਮੇਹੀ ਮਲ੍ਹਾਰ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Pa (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 8, name: "Jaldhar Malar", gurmukhi: "ਰਾਗ ਜਲਧਰ ਮਲ੍ਹਾਰ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Ga [both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਰੇ ਸਾ, ਮ, ਮ ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੀ ਪ, ਧ ਪ ਮ, ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ ਮ, ਰੇ ਸਾ ਨੀ, ਧ ਨੀ ਸਾ, ਮ ਰੇ ਪ, ਧ ਪ ਮ"
  },
  {
    parent: "malar", variantNum: 9, name: "Barsati Malar", gurmukhi: "ਰਾਗ ਬਰਸਾਤੀ ਮਲ੍ਹਾਰ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "Ga [komal Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਸਾ, ਪ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "malar", variantNum: 10, name: "Mian Malar", gurmukhi: "ਰਾਗ ਮੀਆਂ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Dha (avaroh) [komal Ga; both Ni]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ, ਰੇ ਮ ਰੇ ਸਾ, ਮ ਰੇ ਮ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਪ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਰੇ ਪ, ਮ ਗੁ, ਮ ਗੁ, ਰੇ, ਸਾ ਰੇ ਨੀ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 11, name: "Sarvan Malar", gurmukhi: "ਰਾਗ ਸਰਵਣ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Ma", varjit: "Pa, Ga (aroha), Pa (avaroh) [both Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗ ਰੇ, ਮ, ਨੀ, ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਗ ਰੇ, ਮ, ਧ ਨੀ ਧ ਮ, ਮ ਗੁ ਮ ਰੇ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 12, name: "Miran Malar", gurmukhi: "ਰਾਗ ਮੀਰਾਂ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ga (aroha) [komal Ga; both Ni & Dha]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ, ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੁਂ ਨੀ ਧੁ, ਨੀ ਧ ਪ, ਮ ਪ, ਮ ਗੁ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਧ, ਨੀ ਸਾਂ, ਰੁਂ ਨੀ ਧੁ, ਨੀ ਧ ਪ"
  },
  {
    parent: "malar", variantNum: 13, name: "Ramdasi Malar", gurmukhi: "ਰਾਗ ਰਾਮਦਾਸੀ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਗ ਮ, ਪ, ਗੁ ਮ, ਨੀ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਪ ਗੁ, ਮ ਰੇ ਸਾ, ਨੀ ਪ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 14, name: "Madhu Malar", gurmukhi: "ਰਾਗ ਮਧੁ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [komal Ga; tivra Ma; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ, ਮੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਨੀ ਪ, ਪ ਮੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ ਮੇ ਪ, ਮੇ ਗੁ, ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 15, name: "Chhaya Malar", gurmukhi: "ਰਾਗ ਛਾਇਆ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਨੀ ਧ ਪ ਨੀ ਸਾ, ਰੇ ਗ, ਮ ਗ, ਮ ਰੇ ਪ, ਮ ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਧ ਪ, ਮ ਗ ਮ ਰੇ, ਪ, ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਨੀ ਧ ਪ ਨੀ, ਸਾ, ਰੇ ਗ ਮ ਪ, ਮ ਗ ਮ ਰੇ, ਪ, ਗੁ, ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 16, name: "Roopmanjari Malar", gurmukhi: "ਰਾਗ ਰੂਪਮੰਜਰੀ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha) [komal Ni; both Ga]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ, ਪ, ਨੀ ਧ, ਨੀ ਪ, ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਨੀ ਧ, ਨੀ ਪ, ਮ ਗ ਮ ਰੇ ਸਾ, ਰੇ ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਮ ਰੇ ਪ, ਸਾਂ ਨੀ ਧ ਨੀ ਪ, ਮ ਗ ਮ ਰੇ ਸਾ, ਰੇ ਨੀ ਸਾ, ਰੇ ਗੁ ਸਾ"
  },
  {
    parent: "malar", variantNum: 17, name: "Pudhia / Pulia Malar", gurmukhi: "ਰਾਗ ਪੁਢੀਆ ਜਾਂ ਪੁਲੀਆ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha) [komal Ga; both Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਰੇ, ਮ ਗੁ, ਮ ਗੁ, ਮ ਧ ਪ, ਮ ਮ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਪ ਨੀ ਧ ਪ, ਮ ਰੇ, ਮ ਗੁ ਮ ਗੁ, ਮ ਧ ਪ, ਮ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 18, name: "Chanchal Ki Malar", gurmukhi: "ਰਾਗ ਚੰਚਲ ਕੀ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਰੇ ਗੁ, ਮ ਰੇ, ਪ ਰੇ, ਮ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਧ ਪ, ਪ ਮ, ਗੁ ਮ ਗੁ, ਮ ਰੇ ਗੁ, ਸਾ", pakad: "ਸਾ, ਰੇ ਸਾ, ਗੁ ਰੇ ਗੁ ਸਾ, ਪ ਨੀ ਪ, ਮ ਗੁ ਮ ਰੇ ਗੁ ਸਾ"
  },
  {
    parent: "malar", variantNum: 19, name: "Chanchals Malar", gurmukhi: "ਰਾਗ ਚੰਚਲਸ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Dha [komal Ga; both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ, ਰੇ ਪ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਰੁਂ ਸਾਂ ਨੀ ਪ, ਗੁ ਮ ਰੇ ਸਾ, ਨੀ ਮੇ ਸਾ", pakad: "ਸਾ ਮ, ਮ ਰੇ, ਰੇ ਪ, ਮ ਗੁ, ਗੁ ਮ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 20, name: "Sur Malar", gurmukhi: "ਰਾਗ ਸੁਰ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Dha (aroha), Ga (avaroh) [both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਪ, ਨੀ ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 21, name: "Jog Malar", gurmukhi: "ਰਾਗ ਜੋਗ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re (aroha), Dha (avaroh) [both Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗ, ਮ ਪ, ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮ ਪ, ਨੀ ਪ, ਮ ਗ, ਸਾ ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਗ ਮ ਪ, ਨੀ ਪ, ਮ ਗ ਮ, ਸਾ ਗੁ ਸਾ"
  },
  {
    parent: "malar", variantNum: 22, name: "Jayant Malar (1)", gurmukhi: "ਰਾਗ ਜਯੰਤ ਮਲ੍ਹਾਰ (1)",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "None [both Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ ਪ, ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਸਾਂ ਧ, ਨੀ ਮ ਪ, ਧ ਪ ਮ, ਗ ਰੇ, ਗੁ ਰੇ, ਸਾ ਨੀ ਸਾ", pakad: "ਸਾ, ਪ ਨੀ ਰੇ, ਪ ਰੇ, ਪ ਗੁ ਮ ਰੇ, ਪ, ਗੁ ਮ ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 23, name: "Gurdev Malar", gurmukhi: "ਰਾਗ ਗੁਰਦੇਵ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [both Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ ਪ, ਮ ਪ ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਨੀ ਮ, ਪ ਗ, ਮ ਪ ਧ, ਗ, ਮ ਪ ਮ, ਗੁ ਮ, ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਗ ਸਾ, ਪ ਨੀ ਧ ਗ ਸਾ, ਰੇ ਸਾ, ਰੇ ਸਾ ਨੀ, ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 24, name: "Des Malar", gurmukhi: "ਰਾਗ ਦੇਸ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga (aroha) [komal Ga; both Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਧ ਮ ਪ, ਰੇ ਗੁ, ਸਾ ਰੇ ਨੀ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਧ ਨੀ ਪ, ਰੇ ਗੁ, ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 25, name: "Ajgana Malar", gurmukhi: "ਰਾਗ ਅਜਗਨਾ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Ga (aroha), Pa (avaroh) [komal Ga; both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ, ਰੇ ਮ ਰੇ ਸਾ, ਮ ਰੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਪ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਰੇ ਸਾ, ਨੀ ਧ ਮ ਪ ਧ ਨੀ ਸਾ ਪ ਗੁ ਮ ਰੇ ਸਾ ਮ ਪ ਨੀ, ਸਾਂ ਰੁਂ ਸਾਂ"
  },
  {
    parent: "malar", variantNum: 26, name: "Jayant Malar (2)", gurmukhi: "ਰਾਗ ਜਯੰਤ ਮਲ੍ਹਾਰ (2)",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [both Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਪ ਨੀ ਰੇ, ਗ ਮ ਰੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ, ਨੀ ਪ, ਮ ਗ, ਰੇ ਗ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਰੇ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 27, name: "Jayant", gurmukhi: "ਰਾਗ ਜਯੰਤ",
    thaat: "Kafi", vadi: "Ga", samvadi: "Pa", varjit: "Re, Ni (aroha), Re (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਗੁ, ਮ, ਪ, ਗੁ ਮ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਧ ਪ, ਮ ਗੁ ਸਾ"
  },
  {
    parent: "malar", variantNum: 28, name: "Kedar Malar", gurmukhi: "ਰਾਗ ਕੇਦਾਰ ਮਲ੍ਹਾਰ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Sa", varjit: "Ga [both Ma & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਸਾ, ਮ, ਮ ਪ, ਪ ਨੀ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਨੀ ਮ ਪ, ਧ ਪ, ਮ ਰੇ ਮ ਸਾ, ਰੇ ਨੀ ਸਾ", pakad: "ਸਾਂ ਰੁਂ ਸਾਂ, ਨੀ ਸਾਂ, ਧ ਨੀ ਮ ਪ, ਪ ਸਾ, ਸਾ ਮ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "malar", variantNum: 29, name: "Kanra Malar", gurmukhi: "ਰਾਗ ਕਾਨੜਾ ਮਲ੍ਹਾਰ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga (aroha) [komal Ga; both Dha & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ, ਮ ਗੁ ਮ, ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 30, name: "Gopnash Peeraj", gurmukhi: "ਰਾਗ ਗੋਪਨਾਸ਼ ਪੀਰਾਜ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ga, Dha (aroha), Dha (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਗੁ, ਮ ਰੇ ਸਾ, ਨੀ ਪ, ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 31, name: "Roop Mani", gurmukhi: "ਰਾਗ ਰੂਪ ਮਨੀ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ ਗੁ, ਸਾ, ਨੀ ਧ ਨੀ ਸਾ"
  },
  {
    parent: "malar", variantNum: 32, name: "Patann", gurmukhi: "ਰਾਗ ਪਟੱਣ",
    thaat: "Kafi", vadi: "Re", samvadi: "Dha", varjit: "Pa [komal Ga]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਧ ਨੀ ਸਾ ਰੇ, ਰੇ ਗੁ ਮ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 2, name: "Adana Kanra", gurmukhi: "ਰਾਗ ਅਡਾਨਾ ਕਾਨੜਾ",
    thaat: "Asavari", vadi: "Sa", samvadi: "Pa", varjit: "Ga (aroha), Pa (avaroh) [komal Ga & Dha; both Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ ਪ, ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ, ਧੁ ਨੀ ਸਾਂ, ਧੁ, ਨੀ ਧ ਮ ਪ, ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 3, name: "Kausi Kanra (Malkauns ang)", gurmukhi: "ਰਾਗ ਕੌਸੀ ਕਾਨੜਾ (ਮਾਲਕੌਸ ਅੰਗ)",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [komal Ga, Dha & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਪ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਮ ਗੁ ਮ, ਪ ਗੁ, ਮ ਗੁ, ਰੇ ਸਾ, ਮ, ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਮ ਧੁ, ਪ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 4, name: "Gunji Kanra", gurmukhi: "ਰਾਗ ਗੁੰਜੀ ਕਾਨੜਾ",
    thaat: "Asavari", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [both Ga, Dha & Ni]", jaati: "Vakra Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਧ, ਨੀ ਪ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਨੀ, ਸਾ ਰੇ ਗ ਗ ਮ, ਧੁ ਨੀ ਸਾਂ"
  },
  {
    parent: "kanra", variantNum: 5, name: "Bahli (2) Audav", gurmukhi: "ਰਾਗ ਬਹਲੀ (2) ਔੜਵ",
    thaat: "Purvi", vadi: "Ma", samvadi: "Sa", varjit: "Ga, Ni [komal Re & Dha]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੁ ਮ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਮ ਪ, ਰੁ ਸਾ", pakad: "ਸਾ, ਮ, ਪ ਧੁ ਸਾਂ, ਧੁ ਪ ਮ, ਰੁ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 6, name: "Shyam Kanra", gurmukhi: "ਰਾਗ ਸ਼ਿਆਮ ਕਾਨੜਾ",
    thaat: "Asavari", vadi: "Re", samvadi: "Pa", varjit: "Pa (avaroh) [komal Dha & Ni]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਰੇ ਗ ਰੇ ਸਾ, ਮ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ ਸਾ, ਧੁ ਨੀ ਸਾ, ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 7, name: "Sarvan Kanra", gurmukhi: "ਰਾਗ ਸਰਵਣ ਕਾਨੜਾ",
    thaat: "Asavari", vadi: "Ga", samvadi: "Pa", varjit: "Ma [komal Ga, Dha & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਨੀ ਪ, ਧੁ ਗੁ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ ਧੁ ਗੁ, ਪ, ਨੀ ਧੁ, ਪ, ਧੁ ਨੀ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 8, name: "Kafi Kanra", gurmukhi: "ਰਾਗ ਕਾਫੀ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਮ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੁਂ ਨੀ ਧ ਪ, ਮ ਪ, ਮ ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਸਾ, ਰੇ ਸਾ, ਰੇ, ਮ ਗੁ, ਮ ਪ, ਨੀ ਧ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 9, name: "Kausi Kanra (Bageshri ang)", gurmukhi: "ਰਾਗ ਕੌਸੀ ਕਾਨੜਾ (ਬਾਗੇਸ਼੍ਰੀ ਅੰਗ)",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਰੇ ਸਾ, ਮ ਗੁ ਮ ਗੁ, ਮ ਪ, ਧ ਮ, ਨੀ ਪ, ਮ ਗੁ ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 10, name: "Revti Kanra", gurmukhi: "ਰਾਗ ਰੇਵਤੀ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni (aroha) [komal Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਰੇ ਮ, ਪ ਧ, ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਮ ਪ, ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਪ ਗੁ, ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "kanra", variantNum: 11, name: "Naiki Kanra", gurmukhi: "ਰਾਗ ਨਾਇਕੀ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Dha [komal Ga & Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਮ ਰੇ ਸਾ", pakad: "ਮ ਗੁ ਮ, ਨੀ ਪ, ਨੀ ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 12, name: "Suha Kanra", gurmukhi: "ਰਾਗ ਸੁਹਾ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Re, Pa (aroha), Pa (avaroh) [komal Ga & Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ, ਮ ਗੁ ਮ, ਪ ਨੀ, ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਮ ਗੁ, ਮ ਗੁ, ਮ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 13, name: "Sughrai Kanra", gurmukhi: "ਰਾਗ ਸੁਘਰਾਈ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Dha (aroha) [komal Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਪ, ਨੀ ਨੀ ਪ, ਮ ਰੇ ਸਾ, ਰੇ ਮ ਗੁ"
  },
  {
    parent: "kanra", variantNum: 14, name: "Mundraka Kanra", gurmukhi: "ਰਾਗ ਮੁੰਦਰਕਾ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha) [komal Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਰੇ, ਮ ਰੇ, ਸਾ, ਸਾ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ, ਪ ਧ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਮ ਰੇ ਸਾ, ਨੀ ਸਾ ਮ, ਪ ਮ ਪ ਧ, ਮ ਗੁ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 15, name: "Bageshri Kanra", gurmukhi: "ਰਾਗ ਬਾਗੇਸ਼੍ਰੀ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਮ ਗੁ, ਮ ਪ ਮ ਗੁ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ, ਮ ਰੇ ਸਾ", pakad: "ਪ ਮ, ਪ ਧ, ਮ ਗੁ, ਮ ਰੇ ਸਾ, ਰੇ ਮ ਗੁ"
  },
  {
    parent: "kanra", variantNum: 20, name: "Shahana Kanra", gurmukhi: "ਰਾਗ ਸ਼ਹਾਨਾ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Pa (aroha) [komal Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਰੇ ਨੀ ਸਾ, ਮ ਗੁ, ਮ ਪ, ਨੀ ਧ, ਨੀ ਪ, ਮ ਪ ਨੀ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ", pakad: "ਨੀ ਧ, ਨੀ ਪ, ਮ ਪ, ਮ ਗੁ ਮ, ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 21, name: "Gacha Kanra", gurmukhi: "ਰਾਗ ਗਾਚਾ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [both Ga & Ni]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ ਮ ਗ ਮ ਰੇ ਸਾ, ਗੁ ਰੇ, ਸਾ ਨੀ, ਧ ਨੀ ਸਾ", pakad: "ਧ ਪ, ਮ ਗ ਰੇ, ਮ ਗੁ ਪ, ਸਾ ਰੇ ਨੀ ਸਾ, ਨੀ ਧ"
  },
  {
    parent: "kanra", variantNum: 22, name: "Jayant Kanra", gurmukhi: "ਰਾਗ ਜਯੰਤ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "None [both Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ, ਗ ਮ ਪ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਧ ਪ, ਗਾਂ ਮ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ, ਮ ਪ, ਗ ਮ ਰੇ ਸਾ, ਧ ਨੀ, ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 23, name: "Malgunji Kanra", gurmukhi: "ਰਾਗ ਮਾਲਗੁੰਜੀ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "Pa (aroha) [both Ga & Ni]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਪ ਨੀ ਸਾ, ਰੇ ਗ, ਮ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਮ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਨੀ, ਸਾ ਗ ਮ ਗੁ ਰੇ ਸਾ, ਨੀ ਸਾ ਧ ਨੀ ਸਾ, ਗ ਮ"
  },
  {
    parent: "kanra", variantNum: 24, name: "Mian Ka Kanra", gurmukhi: "ਰਾਗ ਮੀਆਂ ਕਾ ਕਾਨੜਾ",
    thaat: "Kafi", vadi: "Ma", samvadi: "Sa", varjit: "None [komal Ga & Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ, ਗੁ ਮ, ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਨੀ ਪ ਮ, ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 25, name: "Ragoshri Kanra", gurmukhi: "ਰਾਗ ਰਾਗੋਸ਼੍ਰੀ ਕਾਨੜਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Pa", varjit: "Pa, Re (aroha), Pa (avaroh) [both Ni]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਸਾ, ਨੀ ਧ ਨੀ, ਸਾ, ਗ ਮ"
  },
  {
    parent: "kanra", variantNum: 26, name: "Anandpuri Kanra", gurmukhi: "ਰਾਗ ਅਨੰਦਪੁਰੀ ਕਾਨੜਾ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ga (aroha), Re, Dha (avaroh) [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਪ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਸਾ", pakad: "ਸਾ ਮ, ਗ ਮ, ਪ ਮ, ਗ ਮ ਗ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 27, name: "Navras Kanra", gurmukhi: "ਰਾਗ ਨਵਰਸ ਕਾਨੜਾ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Re, Ni (aroha), Dha, Pa (avaroh) [both Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ, ਧ ਸਾਂ ਨੀ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kanra", variantNum: 28, name: "Madhu Kanra (Dakhini)", gurmukhi: "ਰਾਗ ਮਧੁ ਕਾਨੜਾ (ਦਖਿਣੀ)",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Pa (aroha) [komal Ga & Ni; both Ma]", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਗੁ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗੁ ਮ, ਰੁਂ, ਸਾ", pakad: "ਪ, ਨੀ, ਧ ਨੀ ਪ, ਗੁ, ਮੇ ਪ, ਮ ਗੁ, ਮ ਰੁਂ, ਸਾ"
  },
  {
    parent: "kanra", variantNum: 29, name: "Radha Dhar", gurmukhi: "ਰਾਗ ਰਾਧਾ ਧਰ",
    thaat: "Kafi", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [komal Ga]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗੁ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ, ਮ ਪ, ਗੁ, ਮ, ਗੁ ਸਾ ਨੀ"
  },
  {
    parent: "kanra", variantNum: 30, name: "Ghee Mohan", gurmukhi: "ਰਾਗ ਘੀ ਮੋਹਨ",
    thaat: "Kafi", vadi: "Re", samvadi: "Pa", varjit: "Ma, Dha [komal Ga & Ni]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ, ਪ ਗੁ, ਰੇ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 2, name: "Bhoop Kalyan", gurmukhi: "ਰਾਗ ਭੂਪ ਕਲਿਆਣ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Pa", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ, ਸਾ ਪ ਸਾ, ਰੇ ਗ, ਪ ਗ, ਧ ਪ ਗ, ਰੇ, ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 3, name: "Iman Kalyan", gurmukhi: "ਰਾਗ ਇਮਨ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "None [both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਗ, ਰੇ ਗ ਮ ਗ, ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ, ਮੇ ਪ, ਰੇ ਗ, ਮ ਗ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 4, name: "Shudh Kalyan", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "Ma, Ni (aroha) [tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਗ ਰੇ, ਗ ਪ, ਸਾਂ ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ, ਪ ਗ, ਮੇ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ ਸਾ, ਨੀ ਧ ਪ, ਸਾ, ਗ ਰੇ, ਪ ਗ, ਪ ਰੇ, ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 5, name: "Shiv Kalyan", gurmukhi: "ਰਾਗ ਸ਼ਿਵ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Dha", varjit: "Ma [komal Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ, ਪ ਗ, ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ ਗ, ਪ ਰੇ ਸਾ", pakad: "ਗ, ਪ ਗ, ਗ ਪ, ਧ ਨੀ ਧ ਪ, ਗ ਪ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 6, name: "Bhoorga Kalyan", gurmukhi: "ਰਾਗ ਭੂਰਗਾ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "None [both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ ਮ, ਗ ਰੇ, ਮ ਰੇ, ਧ ਸਾ", pakad: "ਧ ਪ ਮ, ਗ ਰੇ, ਮ, ਮ ਰੇ, ਧ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 7, name: "Anand Kalyan", gurmukhi: "ਰਾਗ ਅਨੰਦ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Re (aroha) [both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਗ, ਮੇ ਪ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ ਪ, ਮੇ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਪ, ਨੀ ਸਾਂ, ਗ, ਮ ਧ ਪ, ਨੀ ਪ, ਸਾਂ ਨੀ ਧ ਨੀ ਪ ਮੇ ਪ, ਮ ਰੇ ਸਾ, ਗ ਮ"
  },
  {
    parent: "kalyan", variantNum: 8, name: "Samant Kalyan", gurmukhi: "ਰਾਗ ਸਾਮੰਤ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "None [both Ma]", jaati: "Sankiran Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਨੀ ਰੇ ਸਾ, ਗ ਮੇ ਪ, ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ, ਮੇ ਧ, ਗ ਰੇ, ਪ ਗ, ਪ ਰੇ ਸਾ", pakad: "ਗ, ਗ, ਪ ਰੇ ਸਾ, ਧ ਪ ਧ ਸਾ, ਨੀ ਰੇ, ਗਾਂ ਮ ਗ, ਪ ਗ, ਮੇ ਪ ਧ, ਪ ਗ, ਪ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 9, name: "Raj Kalyan", gurmukhi: "ਰਾਗ ਰਾਜ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Pa [tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਰੇ ਗ ਮੇ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ, ਗ ਰੇ, ਨੀ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਧ, ਧ ਮੇ ਗ ਰੇ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 10, name: "Hamir Kalyan", gurmukhi: "ਰਾਗ ਹਮੀਰ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Dha", samvadi: "Ga", varjit: "Re, Pa (aroha) [both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ, ਮੇ ਧ, ਗ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ, ਗ ਮ ਧ ਪ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਮੇ ਪ ਧ, ਮੇ ਪ, ਗ ਮ, ਨੀ ਧ, ਨੀ ਮੇ ਧ"
  },
  {
    parent: "kalyan", variantNum: 11, name: "Madhup Kalyan", gurmukhi: "ਰਾਗ ਮਧੁਪ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "None [komal Ga; tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਰੇ ਮੇ ਗੁ, ਮੇ ਪ, ਮੇ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗੁ, ਮੇ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਪ, ਨੀ ਰੇ ਸਾ, ਮੇ ਪ, ਮੇ ਗੁ, ਰੇ, ਸਾ, ਗੁ, ਨੀ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 12, name: "Ror Kalyan", gurmukhi: "ਰਾਗ ਰੋੜ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "None [both Ma]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਰੇ ਸਾ, ਗ ਮੇ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਧ ਗ, ਪ ਗ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਪ, ਸਾ, ਧ ਪ ਸਾ, ਮ ਗ, ਪ ਗ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 13, name: "Jait Kalyan", gurmukhi: "ਰਾਗ ਜੈਤ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਪ ਗ, ਪ, ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਧ ਗ ਪ, ਗ ਪ, ਗ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਗ, ਪ ਧ ਪ ਗ, ਪ ਰੇ, ਸਾ, ਪ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 14, name: "Shyam Kalyan", gurmukhi: "ਰਾਗ ਸ਼ਿਆਮ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Pa (aroha) [both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮੇ, ਪ ਨੀ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਪ, ਮ ਰੇ, ਪ ਗ, ਮ ਰੇ, ਗ ਨੀ ਸਾ", pakad: "ਗ ਮ ਰੇ, ਗ ਨੀ ਸਾ, ਰੇ ਮੇ ਪ"
  },
  {
    parent: "kalyan", variantNum: 15, name: "Sri Kalyan", gurmukhi: "ਰਾਗ ਸ੍ਰੀ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Ga, Ni [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਪ, ਮੇ ਪ, ਰੇ ਸਾ", pakad: "ਸਾ ਪ, ਮੇ ਪ, ਧ ਮੇ ਪ, ਰੇ ਪ ਰੇ, ਧ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 20, name: "Khwaja Kalyan", gurmukhi: "ਰਾਗ ਖਵਾਜਾ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni (aroha) [komal Ni]", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਧ ਪ, ਗ ਪ ਧ ਪ, ਗ ਮ ਰੇ ਰੇ ਸਾ", pakad: "ਗ ਪ ਧ ਪ, ਸਾਂ ਧ, ਨੀ ਧ ਪ, ਗ ਮ ਰੇ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 21, name: "Basant Kalyan", gurmukhi: "ਰਾਗ ਬਸੰਤ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Sa", varjit: "None [tivra Ma; both Re]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ, ਨੀ ਰੁ, ਗ ਮੇ ਪ, ਮੇ, ਮੇ, ਧ ਰੁਂ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਧ ਨੀ ਧ ਪ, ਮੇ ਗ ਮੇ, ਗ, ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਮੇ ਧ ਰੁਂ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਗ, ਰੁ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 22, name: "Hans Kalyan", gurmukhi: "ਰਾਗ ਹੰਸ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Ni", varjit: "None [tivra Ma]", jaati: "Sankiran Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਰੇ ਗ, ਪ, ਗ ਮੇ, ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਧ ਪ, ਮੇ ਪ ਗ, ਨੀ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਨੀ ਰੇ, ਸਾ, ਪ ਧ ਪ ਮੇ, ਗ, ਪ ਗ ਨੀ, ਪ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 23, name: "Mohan Kalyan", gurmukhi: "ਰਾਗ ਮੋਹਨ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "Ma, Ni (aroha) [tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਰੇ ਗ ਪ, ਧ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 24, name: "Saras Kalyan", gurmukhi: "ਰਾਗ ਸਰਸ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "None [tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਰੇ ਸਾ", pakad: "ਮੇ ਗ, ਮੇ ਰੇ ਸਾ, ਰੇ ਗ ਮੇ, ਪ ਧ ਨੀ, ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 25, name: "Chandar Kalyan", gurmukhi: "ਰਾਗ ਚੰਦਰ ਕਲਿਆਣ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "Ga (aroha), Dha (avaroh) [komal Dha; tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧੁ, ਸਾਂ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਰੁਂ, ਨੀ, ਪ ਧੁ, ਧੁ ਪ, ਮੇ ਗ, ਮੇ ਰੇ ਨੀ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਧੁ, ਨੀ ਸਾਂ, ਨੀ ਰੁਂ ਨੀ ਪ, ਮੇ ਗ, ਮੇ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 26, name: "Kalyan Keshri", gurmukhi: "ਰਾਗ ਕਲਿਆਣ ਕੇਸਰੀ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "Ma, Ni (aroha), Ni (avaroh) [tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮੇ, ਪ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਪ, ਧ, ਸਾਂ ਧ ਮੇ, ਪ ਮੇ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 27, name: "Panch Kalyan", gurmukhi: "ਰਾਗ ਪੰਚ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Re, Dha (aroha) [both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਸਾ, ਗ ਮ, ਗ ਮ ਪ, ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਪ, ਨੀ ਧ ਪ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਧ ਪ, ਪ ਧ ਪ, ਸਾ, ਰੇ ਸਾ, ਗ ਰੇ ਸਾ, ਮ ਰੇ ਸਾ, ਨੀ ਸਾ, ਗ ਮ ਪ"
  },
  {
    parent: "kalyan", variantNum: 28, name: "Jaldhar Kalyan", gurmukhi: "ਰਾਗ ਜਲਧਰ ਕਲਿਆਣ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Sa", varjit: "Ma, Ni (aroha) [both Ma & Ni]", jaati: "Vakra Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਧ ਸਾ, ਰੇ ਗ ਪ, ਮ ਰੇ, ਮੇ, ਧ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਧ ਪ, ਮ ਰੇ, ਪ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਧ ਸਾ, ਨੀ ਧ ਨੀ ਧ, ਸਾ ਰੇ ਗ, ਪ ਮ ਰੇ, ਪ ਮੇ ਗ ਰੇ, ਨੀ ਧ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 29, name: "Gorakh Kalyan", gurmukhi: "ਰਾਗ ਗੋਰਖ ਕਲਿਆਣ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "Ga [komal Ni]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਪ ਧ, ਨੀ ਧ ਮ, ਰੇ ਮ ਰੇ ਸਾ, ਨੀ ਧ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 30, name: "Savani-Kalyan", gurmukhi: "ਰਾਗ ਸਾਵਨੀ-ਕਲਿਆਣ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "Re, Dha (aroha) [all shudh]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ ਸਾ, ਸਾ, ਗ, ਗ, ਗ ਪ, ਮ ਗ, ਗ ਰੇ ਸਾ, ਨੀ ਧ ਪ, ਸਾ ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 31, name: "Purvan Kalyani", gurmukhi: "ਰਾਗ ਪੂਰਵਾਂ ਕਲਿਆਣੀ",
    thaat: "Marwa", vadi: "Sa", samvadi: "Pa", varjit: "Ni (aroha) [komal Re; tivra Ma]", jaati: "Vakra Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਰੁ ਗ ਮੇ ਧ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੁ ਸਾ", pakad: "ਗ ਮੇ ਧ ਸਾਂ, ਸਾਂ, ਧ, ਪ ਮੇ ਗ ਰੁ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 32, name: "Deepavali", gurmukhi: "ਰਾਗ ਦੀਪਾਵਲੀ",
    thaat: "Kalyan", vadi: "Ma", samvadi: "Sa", varjit: "Pa [both Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਮੇ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ ਮ, ਗ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਧ, ਮੇ ਨੀ ਧ, ਮੇ ਧ, ਮੇ ਮ, ਗ, ਰੇ ਗ, ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਰੇ ਗ ਮ, ਮੇ ਮ"
  },
  {
    parent: "kalyan", variantNum: 33, name: "Champakli", gurmukhi: "ਰਾਗ ਚੰਪਾਕਲੀ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha) [komal Ni; tivra Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ, ਮੇ ਗ, ਮੇ ਗ, ਰੇ ਸਾ ਨੀ ਸਾ", pakad: "ਰੇ ਨੀ ਸਾ ਗ, ਮੇ ਪ, ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਗ, ਰੇ, ਨੀ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 34, name: "Kamod", gurmukhi: "ਰਾਗ ਕਾਮੋਦ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "None [both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਪ, ਮੇ ਪ, ਧ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਪ, ਮੇ ਪ ਧ ਪ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ, ਪ, ਮੇ ਪ, ਧ ਪ, ਗ ਮ ਪ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 35, name: "Chandukant", gurmukhi: "ਰਾਗ ਚੰਦੂਕਾਂਤ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Ma (aroha) [tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਗ, ਰੇ, ਸਾ, ਨੀ ਪ, ਨੀ ਧ ਪ, ਸਾ, ਗ, ਰੇ ਗ, ਧ ਮੇ ਗ, ਪ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 36, name: "Kamudki", gurmukhi: "ਰਾਗ ਕਮੁਦਕੀ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Pa, Dha [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮੇ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ, ਨੀ ਮੇ, ਗ ਮੇ, ਗ ਰੇ, ਨੀ ਗ, ਮੇ ਗ, ਰੇ ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 37, name: "Devki Puria", gurmukhi: "ਰਾਗ ਦੇਵਕੀ ਪੁਰੀਆ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Dha (aroha), Pa (avaroh) [tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ, ਗ ਮੇ ਪ, ਨੀ ਧ ਮੇ ਗ, ਮੇ ਪ ਨੀ ਧ, ਮੇ ਪ ਰੇ ਗ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 38, name: "Nand", gurmukhi: "ਰਾਗ ਨੰਦ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Re (aroha) [both Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਧ ਨੀ ਪ, ਧ ਮੇ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ ਗ ਮ, ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਪ, ਰੇ ਸਾ ਗ ਮ"
  },
  {
    parent: "kalyan", variantNum: 39, name: "Malvarani", gurmukhi: "ਰਾਗ ਮਾਲਵਰਾਨੀ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "Ga, Pa (aroha), Ma, Ni (avaroh) [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਰੇ ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਨੀ ਸਾਂ ਧ ਪ, ਰੁ ਮੇ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਗ, ਰੇ, ਪ, ਗ, ਰੇ ਸਾ, ਧ ਪ, ਮੇ ਪ, ਸਾਂ, ਰੇ ਮੇ ਗ ਰੇ"
  },
  {
    parent: "kalyan", variantNum: 40, name: "Bhupali", gurmukhi: "ਰਾਗ ਭੂਪਾਲੀ",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Dha", varjit: "Ma, Ni [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਰੇ ਸਾ, ਗ ਪ ਧ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 41, name: "Vaijayanti", gurmukhi: "ਰਾਗ ਵੈਜਯੰਤੀ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "Ga, Dha [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਨੀ ਸਾ ਰੇ, ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਪ ਮੇ, ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਰੇ, ਨੀ, ਸਾ, ਮੇ ਪ ਸਾਂ ਨੀ, ਪ, ਰੇ ਮੇ ਪ ਰੇ, ਮੇ ਨੀ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 42, name: "Hamir", gurmukhi: "ਰਾਗ ਹਮੀਰ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Ga", varjit: "None [both Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗ ਮ ਧ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ ਧ ਪ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਗ ਮ ਧ, ਗ ਮ ਧ ਪ, ਮੇ ਪ ਗ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 43, name: "Virinch Mukhi", gurmukhi: "ਰਾਗ ਵਿਰੰਚ ਮੁਖੀ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa (aroha), Pa (avaroh) [both Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ, ਗ ਪ, ਮੇ ਗ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਮ ਗ, ਪ ਗ, ਪ ਰੇ ਸਾ ਮ ਸਾ", pakad: "ਗ, ਪ, ਮੇ ਮ ਗ, ਪ ਨੀ, ਸਾਂ ਨੀ ਪ, ਮੇ ਮ ਗ ਪ ਗ ਪ ਰੇ, ਸਾ ਮ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 44, name: "Bhinaa Bharan", gurmukhi: "ਰਾਗ ਭਿੰਆ ਭਰਨ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Pa (avaroh) [tivra Ma]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ, ਮੇ ਪ, ਨੀ ਧ ਸਾਂ, ਨੀ ਧ ਮੇ, ਗ ਮੇ ਪ, ਨੀ ਧ ਮੇ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 45, name: "Tilak Shyam", gurmukhi: "ਰਾਗ ਤਿਲਕ ਸ਼ਿਆਮ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "Ga, Pa (aroha) [both Ma]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਰੇ ਮੇ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਧ ਪ, ਮ ਗ ਰੇ, ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ ਮ ਗ, ਰੇ ਗ, ਸਾ ਰੇ ਗ, ਸਾ ਨੀ"
  },
  {
    parent: "kalyan", variantNum: 46, name: "Rashiaa", gurmukhi: "ਰਾਗ ਰਸ਼ਿਆ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Dha", varjit: "Ma (aroha) [tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਪ ਗ, ਪ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਧ ਪ, ਧ ਨੀ ਸਾਂ ਨੀ, ਧ ਪ, ਮੇ ਪ ਗ, ਪ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 47, name: "Sharann", gurmukhi: "ਰਾਗ ਸ਼ਰਾਣੂੰ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "Ni (aroha), Re (avaroh) [tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਸਾ", pakad: "ਗ ਮੇ, ਪ ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮੇ ਗ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 48, name: "Hamas Nanda", gurmukhi: "ਰਾਗ ਹਮਸ ਨੰਦਾ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "Ga [tivra Ma]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 1.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਮੇ ਰੇ ਸਾ", pakad: "ਰੇ ਮੇ ਪ, ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 49, name: "Malav", gurmukhi: "ਰਾਗ ਮਾਲਵ",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Pa", varjit: "Re, Ni (aroha), Ma, Ni (avaroh) [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ, ਗ, ਪ, ਧ ਮੇ ਧ, ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਪ ਗ, ਰੇ ਸਾ", pakad: "ਸਾਂ, ਧ ਰੁਂ ਸਾਂ, ਧ ਪ ਗ, ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 50, name: "Kaushal", gurmukhi: "ਰਾਗ ਕੌਸ਼ਲ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "None [tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ, ਪ ਧ, ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 51, name: "Jog Jayanti", gurmukhi: "ਰਾਗ ਜੋਗ ਜਿਯੰਤੀ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "Ga (aroha) [tivra Ma]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ, ਮੇ ਪ, ਨੀ ਧ, ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 52, name: "Rasik Priya", gurmukhi: "ਰਾਗ ਰਸਿਕ ਪ੍ਰਿਆ",
    thaat: "Kalyan", vadi: "Re", samvadi: "Pa", varjit: "None [tivra Ma]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮੇ, ਪ ਧ, ਨੀ ਧ ਪ, ਸਾ ਰੇ ਗ ਮੇ, ਪ ਧ, ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 53, name: "Suhaga", gurmukhi: "ਰਾਗ ਸੁਹਾਗਾ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "None [tivra Ma; both Ni]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਸਾ ਗ ਮੇ, ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਪ ਨੀ ਧ, ਪ ਮੇ, ਗ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਧ ਸਾਂ, ਨੀ ਪ ਨੀ ਧ ਪ, ਮੇ ਗ, ਮੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 54, name: "Airawat", gurmukhi: "ਰਾਗ ਐਰਾਵਤ",
    thaat: "Kalyan", vadi: "Sa", samvadi: "Pa", varjit: "Re, Pa (aroha), Dha (avaroh) [tivra Ma]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮੇ ਪ, ਗ ਮੇ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮੇ ਪ ਨੀ ਪ, ਮੇ ਪ, ਗ ਮੇ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 55, name: "Amrit Varshani (Dakhini)", gurmukhi: "ਰਾਗ ਅੰਮ੍ਰਿਤ ਵਰਸ਼ਣੀ (ਦਖਿਣੀ)",
    thaat: "Kalyan", vadi: "Ga", samvadi: "Ni", varjit: "Re, Pa [tivra Ma]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮੇ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮੇ, ਗ ਸਾ", pakad: "ਸਾ ਨੀ ਸਾ, ਗ ਮੇ ਪ ਮੇ, ਪ ਮੇ ਗ, ਗ ਮੇ ਗ ਸਾ"
  },
  {
    parent: "kalyan", variantNum: 56, name: "Pushm Manjari", gurmukhi: "ਰਾਗ ਪੁਸ਼ਮ ਮੰਜਰੀ",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Sa", varjit: "Re, Dha [all shudh]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗ ਸਾ", pakad: "ਸਾਂ ਨੀ ਪ, ਮ ਪ ਨੀ ਪ, ਮ ਗ ਸਾ, ਗ ਮ ਪ"
  },
  {
    parent: "jaijaiwanti", variantNum: 2, name: "Shruti", gurmukhi: "ਰਾਗ ਸ਼ਰੁਤਿ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਪ ਗ, ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਪ, ਰੇ ਮ ਪ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਪ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 3, name: "Hans Shanti", gurmukhi: "ਰਾਗ ਹੰਸ ਸ਼ਾਂਤੀ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਮ [ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਮ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ, ਗ, ਪ ਨੀ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਪ ਧ ਪ ਮ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਮ ਪ, ਧ ਮ ਗ, ਸਾ ਗ ਪ, ਨੀ ਧ ਨੀ ਸਾਂ"
  },
  {
    parent: "jaijaiwanti", variantNum: 4, name: "Saraswati", gurmukhi: "ਰਾਗ ਸਰਸਵਤੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਗ [ਨੀ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮੇ ਮੇ ਪ, ਮੇ ਰੇ ਰੇ ਸਾ", pakad: "ਰੇ, ਮੇ ਪ, ਨੀ ਧ, ਮੇ ਪ, ਰੇ ਮੇ, ਪ ਮੇ, ਰੇ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 5, name: "Kalavati", gurmukhi: "ਰਾਗ ਕਲਾਵਤੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਰੇ-ਮ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਪ ਧ, ਨੀ ਧ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਪ, ਧ ਪ, ਗ ਸਾ", pakad: "ਪ ਗ, ਪ ਧ, ਸਾਂ, ਪ ਧ ਸਾਂ ਨੀ ਧ ਪ"
  },
  {
    parent: "jaijaiwanti", variantNum: 6, name: "Leelavati", gurmukhi: "ਰਾਗ ਲੀਲਾਵਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਰੇ-ਮ [ਗ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ, ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ ਪ, ਗ, ਪ ਗ ਸਾ", pakad: "ਸਾ ਗ, ਪ, ਧ ਨੀ ਧ ਪ, ਗ ਪ ਧ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਗ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 7, name: "Miyuravati", gurmukhi: "ਰਾਗ ਮਿਯੂਰਾਵਤੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਮ-ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਸਾ ਗ ਰੇ ਗ ਪ, ਸਾਂ ਨੀ ਸਾਂ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗ ਰੇ, ਗ ਰੇ ਨੀ ਸਾ, ਨੀ ਰੇ ਸਾ", pakad: "ਨੀ ਰੇ ਗ, ਰੇ ਨੀ ਸਾ, ਗ ਰੇ ਨੀ ਸਾ, ਗ ਰੇ ਸਾ, ਗ ਪ ਰੇ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 8, name: "Yum Koshi", gurmukhi: "ਰਾਗ ਯੂਮ ਕੋਸ਼ੀ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "ਧ-ਮ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਗ ਰੇ ਸਾ", pakad: "ਪ ਨੀ ਸਾ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 9, name: "Khamaj", gurmukhi: "ਰਾਗ ਖਮਾਜ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ [ਦੋਵੇਂ ਨੀ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ, ਮ ਪ ਧ, ਨੀ ਧ ਪ ਧ, ਗ ਮ ਗ"
  },
  {
    parent: "jaijaiwanti", variantNum: 10, name: "Khambhavati", gurmukhi: "ਰਾਗ ਖੰਭਾਵਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਅਵਰੋਹ ਵਿਚ ਰੇ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਮ ਸਾ", pakad: "ਰੇ ਮ ਪ ਧ, ਸਾਂ, ਨੀ ਧ ਪ, ਧ ਮ, ਮ ਪ ਗ, ਮ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 11, name: "Jhaukar", gurmukhi: "ਰਾਗ ਝੌਕਰ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਕੋਈ ਨਹੀਂ [ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਗ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਪ ਮ ਨੀ ਧ ਪ, ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਨੀ ਪ, ਮ ਗ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਪ, ਮ, ਮ ਗ, ਗ ਰੇ, ਗੁ ਸਾ, ਰੇ ਗ ਰੇ ਮ, ਨੀ ਧ ਪ ਰੇ"
  },
  {
    parent: "jaijaiwanti", variantNum: 12, name: "Gaara", gurmukhi: "ਰਾਗ ਗਾਰਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਕੋਈ ਨਹੀਂ [ਗ-ਨੀ ਦੋਵੇਂ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਰੇ, ਗ ਮ ਪ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ ਮ ਗ ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ, ਗ, ਮ ਗ, ਸਾ ਗ, ਮ ਪ, ਮ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 13, name: "Shu-Sobhavati", gurmukhi: "ਰਾਗ ਸ਼ੁ-ਸੌਭਾਵਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਮ, ਅਵਰੋਹ ਵਿਚ ਮ [ਰੇ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਗ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ, ਨੀ ਗੁ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਧ ਨੀ ਧ ਪ, ਗ, ਨੀ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 14, name: "Malav", gurmukhi: "ਰਾਗ ਮਾਲਵ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ ਨੀ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਨੀ, ਪ, ਮ ਗ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਧ ਸਾ, ਗ ਗ ਮ, ਮ ਧ ਮ, ਧ ਨੀ ਧ ਮ, ਪ ਧ ਪ, ਨੀ ਧ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 15, name: "Khamaji Bhatiar", gurmukhi: "ਰਾਗ ਖਮਾਜੀ ਭਟਿਆਰ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ, ਨੀ ਰੇ ਸਾ", pakad: "ਰੇ ਪ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਮ ਗ, ਰੇ ਗ, ਰੇ ਸਾ ਰੇ, ਸਾ ਨੀ ਧ ਸਾ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 16, name: "Champak", gurmukhi: "ਰਾਗ ਚੰਪਕ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਧ ਮ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਗ, ਮ, ਪ ਮ ਗ, ਰੇ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 17, name: "Jhinjhoti", gurmukhi: "ਰਾਗ ਝਿੰਝੋਟੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਕੋਈ ਨਹੀਂ [ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਪ ਸਾ, ਰੇ ਮ ਗ, ਰੇ ਸਾ, ਨੀ ਸਾ ਰੇ, ਗ ਰੇ, ਸਾ ਨੀ, ਪ ਸਾ ਪ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 18, name: "Dhurga", gurmukhi: "ਰਾਗ ਧੂਰਗਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਰੇ-ਪ [ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ ਸਾ", pakad: "ਸਾ ਨੀ ਧ ਸਾ, ਮ ਗ, ਮ ਧ ਨੀ ਧ, ਮ ਗ, ਮ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ, ਮ ਗ ਧ ਮ ਗ, ਮ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 19, name: "Nat Kuranjika", gurmukhi: "ਰਾਗ ਨਾਟ ਕੁਰੰਜਿਕਾ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Ma", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ, ਪ, ਅਵਰੋਹ ਵਿਚ ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਰੇਂ ਨੀ ਸਾਂ, ਧ ਮ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਮ ਧ ਨੀ ਸਾਂ, ਰੇਂ ਨੀ ਸਾਂ ਧ, ਮ ਗ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 20, name: "Saraswati (2)", gurmukhi: "ਰਾਗ ਸਰਸਵਤੀ (2)",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Re", varjit: "ਗ [ਨੀ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮੇ ਮ, ਨੀ ਧ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਰੇਂ ਨੀ, ਧ ਪ, ਮੇ, ਰੇ ਮੇ ਪ, ਮੇ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮੇ ਪ, ਨੀ ਧ ਸਾਂ ਰੇਂ, ਸਾਂ ਨੀ ਧ ਪ, ਰੇ ਮੇ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 21, name: "Sajan", gurmukhi: "ਰਾਗ ਸਾਜਨ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਧ ਨੀ ਪ, ਮ ਗ ਮ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਸਾਂ ਧ, ਨੀ ਪ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 22, name: "Kamai", gurmukhi: "ਰਾਗ ਕਮਾਈ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 23, name: "Kambhoji", gurmukhi: "ਰਾਗ ਕਾਮਭੋਜੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ, ਗ, ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਪ, ਧ ਪ, ਸਾਂ, ਸਾਂ, ਧ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 24, name: "Nupur", gurmukhi: "ਰਾਗ ਨੂਪੁਰ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਮ, ਅਵਰੋਹ ਵਿਚ ਧ [ਦੋਵੇਂ ਨੀ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਪ, ਗ ਪ, ਨੀ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗ ਮ ਰੇ ਸਾ", pakad: "ਰੇਂ, ਪ, ਗ ਪ, ਨੀ ਨੀ ਧ ਪ ਸਾਂ, ਨੀ ਪ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 25, name: "Haumshikha", gurmukhi: "ਰਾਗ ਹੌਮਸ਼ਿਖਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਰੇ-ਮ [ਦੋਵੇਂ ਗ, ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ, ਪ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ ਪ, ਗ ਗੁ ਸਾ", pakad: "ਗ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ, ਧ ਪ, ਗ ਗੁ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 26, name: "Kalabharan", gurmukhi: "ਰਾਗ ਕਲਾਭਰਨ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਅਵਰੋਹ ਵਿਚ ਮ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਧ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 27, name: "Jai-Tama", gurmukhi: "ਰਾਗ ਜੈ-ਤਮਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਅਵਰੋਹ ਵਿਚ ਰੇ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਸਾ", pakad: "ਰੇ ਗ, ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 28, name: "Pahari-Kamodi", gurmukhi: "ਰਾਗ ਪਹਾੜੀ-ਕਾਮੋਦੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਕੋਈ ਨਹੀਂ [ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 29, name: "Pahari-Jhinjhoti", gurmukhi: "ਰਾਗ ਪਹਾੜੀ-ਝਿੰਝੋਟੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਕੋਈ ਨਹੀਂ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ, ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਪ ਧ ਨੀ ਨੀ ਸਾਂ, ਨੀ ਨੀ ਧ, ਪ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 30, name: "Bihari", gurmukhi: "ਰਾਗ ਬਿਹਾਰੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਗ [ਦੋਵੇਂ ਨੀ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ, ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ, ਪ ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ, ਨੀ ਨੀ ਸਾਂ, ਨੀ ਨੀ ਧ, ਪ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 31, name: "Manrang", gurmukhi: "ਰਾਗ ਮਨਰੰਗ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਧ, ਅਵਰੋਹ ਵਿਚ ਧ [ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਨੀ, ਸਾਂ ਨੀ ਪ ਮ, ਪ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 32, name: "Ratan Jiyauti", gurmukhi: "ਰਾਗ ਰਤਨ ਜਿਯੌਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਧ, ਅਵਰੋਹ ਵਿਚ ਪ-ਮ [ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਗ ਰੇ ਸਾ", pakad: "ਗ, ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 33, name: "Dhan-Kambodi", gurmukhi: "ਰਾਗ ਧਨ-ਕਾਮਬੋਦੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਅਵਰੋਹ ਵਿਚ ਧ [ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਮ, ਗ ਰੇ, ਸਾ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਨੀ ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ, ਗ ਰੇ, ਸਾ ਮ ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਪ, ਨੀ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 34, name: "Swavalambi", gurmukhi: "ਰਾਗ ਸਵਾਵਲੰਬੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ, ਪ ਗ, ਰੇ ਸਾ", pakad: "ਗ ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ, ਪ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 35, name: "Shiv Kambodi", gurmukhi: "ਰਾਗ ਸ਼ਿਵ ਕਾਮਬੋਦੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਪ-ਧ, ਅਵਰੋਹ ਵਿਚ ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਗ, ਮ ਗ ਨੀ, ਸਾਂ ਨੀ ਸਾਂ ਪ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 36, name: "Hurish Chandrika", gurmukhi: "ਰਾਗ ਹੁਰਿਸ਼ ਚੰਦ੍ਰਿਕਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਮ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ, ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ, ਪ ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 37, name: "Amaravati", gurmukhi: "ਰਾਗ ਅਮਰਾਵਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਪ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ ਧ ਸਾਂ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 38, name: "Gauti", gurmukhi: "ਰਾਗ ਗੌਤੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਧ, ਅਵਰੋਹ ਵਿਚ ਮ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ, ਪ ਮ ਪ, ਗ ਰੇ ਨੀ ਸਾ", pakad: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਗ, ਮ ਪ ਨੀ ਸਾਂ, ਰੇਂ ਸਾਂ, ਧ ਪ ਮ ਪ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 39, name: "Udan-Kanta", gurmukhi: "ਰਾਗ ਉਡਨ-ਕਾਂਤਾ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ [ਨੀ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਧ, ਮ ਗ, ਰੇ ਸਾ", pakad: "ਮ ਪ, ਧ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਧ, ਮ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 40, name: "Jogi-Bhairavi", gurmukhi: "ਰਾਗ ਜੋਗੀ-ਭੈਰਵੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ, ਰੇ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ, ਨੀ ਧ, ਮ ਗ ਰੇ, ਮ ਗ ਸਾ", pakad: "ਰੇ ਮ, ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਨੀ ਧ, ਮ ਗ ਰੇ, ਮ ਗ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 41, name: "Ravi-Chandrika", gurmukhi: "ਰਾਗ ਰਵੀ-ਚੰਦ੍ਰਿਕਾ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਅਵਰੋਹ ਵਿਚ ਪ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਮ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 42, name: "Sarv-Puria", gurmukhi: "ਰਾਗ ਸਰਵ-ਪੁਰੀਆ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਮ-ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 43, name: "Sarangi", gurmukhi: "ਰਾਗ ਸਾਰੰਗੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ, ਅਵਰੋਹ ਵਿਚ ਧ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Shadav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਧ, ਨੀ ਰੇਂ, ਸਾਂ ਪ, ਗ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 44, name: "Kuntal", gurmukhi: "ਰਾਗ ਕੁੰਤਲ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਰੇ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਸਾ", pakad: "ਗ ਮ ਪ, ਧ ਸਾਂ, ਮ, ਮ ਗ ਮ, ਪ ਧ, ਪ, ਧ ਮ ਗ, ਮ ਗ ਸਾ, ਪ ਸਾ ਮ"
  },
  {
    parent: "jaijaiwanti", variantNum: 45, name: "Sameshwari", gurmukhi: "ਰਾਗ ਸਾਮੇਸ਼ਵਰੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਮ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 18.5,
    aroha: "ਸਾ ਗ, ਪ ਧ, ਨੀ ਧ, ਧ ਨੀ ਧ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ, ਮ ਰੇ ਨੀ ਸਾ", pakad: "ਮ ਪ ਧ ਨੀ, ਪ, ਧ ਨੀ ਧ ਪ, ਗ ਪ ਸਾਂ ਨੀ ਧ ਨੀ ਧ ਪ, ਸਾਂ ਨੀ ਧ ਪ ਗ, ਮ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 46, name: "Jalukul Kambhoji", gurmukhi: "ਰਾਗ ਜਲੁਕੁਲ ਕਾਮਭੋਜੀ (ਦਖਿਣੀ)",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਗ ਸਾ, ਮ ਗ ਮ ਪ, ਪ ਧ ਸਾਂ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 47, name: "Khamas", gurmukhi: "ਰਾਗ ਖਮਾਸ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ [ਨੀ ਕੋਮਲ]", jaati: "Vakra Shadav–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਮ ਗ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਮ ਗ ਮ, ਮ ਨੀ ਧ ਨੀ, ਪ ਧ ਮ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 48, name: "Gavati", gurmukhi: "ਰਾਗ ਗਾਵਤੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ, ਅਵਰੋਹ ਵਿਚ ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ, ਸਾ, ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਪ ਮ, ਗ ਰੇ, ਨੀ ਸਾ", pakad: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਗ, ਮ ਪ, ਨੀ ਸਾਂ, ਰੇਂ ਸਾਂ, ਧ ਪ ਮ ਗ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 49, name: "Kedar Gaulam", gurmukhi: "ਰਾਗ ਕੇਦਾਰ ਗੌਲਮ (ਦਖਿਣੀ)",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਮ ਪ, ਨੀ ਧ ਪ, ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 50, name: "Jansamohani", gurmukhi: "ਰਾਗ ਜਨਸਮੋਹਨੀ",
    thaat: "Khamaj", vadi: "Dha", samvadi: "Ga", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਮ, ਅਵਰੋਹ ਵਿਚ ਮ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਗ ਰੇ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 51, name: "Simrati", gurmukhi: "ਰਾਗ ਸਿਮਰਤੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਰੇ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗ, ਨੀ ਸਾ", pakad: "ਨੀ ਸਾ, ਪ ਨੀ ਸਾ, ਨੀ ਗ ਸਾ, ਗ ਸਾ, ਨੀ ਸਾ, ਮ ਗ ਨੀ ਸਾ, ਗ ਪ ਪ, ਪ ਮ ਗ, ਨੀ ਸਾ, ਨੀ ਪ ਮ ਗ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 52, name: "Balhans", gurmukhi: "ਰਾਗ ਬਲਹੰਸ (ਦਖਿਣੀ)",
    thaat: "Khamaj", vadi: "Re", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Vakra Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ, ਮ ਗ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ, ਨੀ ਧ ਪ, ਗ ਰੇ, ਮ ਗ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 53, name: "Ratnavali", gurmukhi: "ਰਾਗ ਰਤਨਾਵਲੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਕੋਈ ਨਹੀਂ [ਦੋਵੇਂ ਨੀ, ਦੋਵੇਂ ਮ]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਨੀ ਸਾ, ਗ ਮ ਰੇ ਪ, ਧ ਪ, ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਨੀ ਪ, ਮ ਗ ਰੇ, ਨੀ ਸਾ", pakad: "ਗ ਮ ਰੇ, ਸਾ, ਧ ਨੀ ਪ, ਧ ਪ ਮ ਪ, ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 54, name: "Chhaya Tilak", gurmukhi: "ਰਾਗ ਛਾਇਆ ਤਿਲਕ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Re", varjit: "ਆਰੋਹ ਵਿਚ ਧ [ਦੋਵੇਂ ਨੀ]", jaati: "Vakra Shadav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਪ ਨੀ, ਸਾ ਰੇ ਗ, ਸਾ, ਰੇ, ਗ ਮ ਪ, ਮ ਗ ਮ ਰੇ, ਮ ਪ ਧ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਪ ਧ, ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧ ਪ ਮ, ਪ ਧ, ਮ ਗ ਮ ਰੇ, ਗ ਸਾ", pakad: "ਪ ਰੇ, ਗ ਮ ਪ, ਨੀ ਧ ਪ ਮ, ਮ ਗ ਮ ਰੇ, ਗ ਮ ਪ, ਮ ਗ ਮ ਰੇ ਗ ਮ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 55, name: "Virhani", gurmukhi: "ਰਾਗ ਵਿਰਹਣੀ",
    thaat: "Bhairavi", vadi: "Ni", samvadi: "Ga", varjit: "ਮ-ਧ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5, samayNote: "After 10pm",
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਸਾਂ ਨੀ, ਪ ਨੀ ਸਾ ਗ ਰੇ, ਨੀ ਰੇ ਗ ਪ, ਪ ਗ ਪ ਰੇ ਸਾ, ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 56, name: "Chagoshwari", gurmukhi: "ਰਾਗ ਚਾਗੋਸ਼ਵਰੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਆਰੋਹ ਵਿਚ ਪ-ਰੇ, ਅਵਰੋਹ ਵਿਚ ਪ [ਦੋਵੇਂ ਨੀ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ, ਮ ਧ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਸਾ, ਨੀ ਧ ਨੀ, ਸਾ ਗ ਮ"
  },
  {
    parent: "jaijaiwanti", variantNum: 57, name: "Mandar Bagoshwari", gurmukhi: "ਰਾਗ ਮੰਦਰ ਬਾਗੋਸ਼ਵਰੀ",
    thaat: "Khamaj", vadi: "Pa", samvadi: "Sa", varjit: "ਰੇ [ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਪ ਨੀ ਸਾ, ਨੀ ਸਾ, ਗ ਮ ਪ, ਪ ਨੀ ਧ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਪ, ਮ ਪ ਧ ਪ, ਮ ਗ ਮ, ਗ ਸਾ", pakad: "ਨੀ ਧ ਪ, ਨੀ ਸਾ, ਗ ਮ ਪ, ਨੀ ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 58, name: "Madhuri", gurmukhi: "ਰਾਗ ਮਾਧੁਰੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ ਮ ਧ, ਅਵਰੋਹ ਵਿਚ ਰੇ ਧ [ਨੀ ਕੋਮਲ]", jaati: "Chaturas Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗ, ਪ, ਮ, ਨੀ ਸਾ", pakad: "ਨੀ ਪ, ਗ, ਪ, ਮ ਨੀ, ਸਾ ਗ, ਪ ਮ, ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 59, name: "Suravali", gurmukhi: "ਰਾਗ ਸੁਰਾਵਲੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Ni", varjit: "ਕੋਈ ਨਹੀਂ [ਦੋਵੇਂ ਨੀ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ, ਧ ਨੀ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ ਮ, ਪ, ਧ ਨੀ ਨੀ ਸਾਂ, ਨੀ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 60, name: "Naga-Swaravali", gurmukhi: "ਰਾਗ ਨਾਗਾ-ਸਵਰਾਵਲੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "ਰੇ ਨੀ [ਸਾਰੇ ਸ਼ੁੱਧ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਪ ਗ, ਮ ਗ ਸਾ", pakad: "ਮ ਪ, ਧ ਸਾਂ, ਧ ਪ ਮ, ਮ ਗ, ਮ, ਗ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 61, name: "Pulindaka", gurmukhi: "ਰਾਗ ਪੁਲਿੰਦਕਾ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਰੇਂ ਨੀ, ਸਾ ਰੇ ਸਾ", pakad: "ਮ, ਰੇ ਮ, ਰੇ ਸਾ, ਨੀ ਧ ਨੀ ਸਾ, ਰੇ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 62, name: "Madhu Surja", gurmukhi: "ਰਾਗ ਮਧੁ ਸੂਰਜਾ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ [ਨੀ ਕੋਮਲ, ਰੇ-ਮ ਦੋਵੇਂ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12, samayNote: "12–2pm",
    aroha: "ਸਾ, ਰੇ ਮ ਪ ਨੀ, ਪ ਨੀ, ਸਾਂ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਮ ਮ, ਪ ਮ, ਸਾ ਰੇ, ਸਾ, ਨੀ ਸਾ ਰੇ ਸਾ", pakad: "ਮ ਪ ਨੀ ਸਾਂ, ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ, ਨੀ ਮ ਮ, ਮ ਪ ਮ, ਪ ਨੀ, ਮ ਮ ਮ, ਸਾ ਰੇ, ਸਾ ਨੀ, ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 63, name: "Utri", gurmukhi: "ਰਾਗ ਉਤਰੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ, ਅਵਰੋਹ ਵਿਚ ਪ-ਰੇ [ਨੀ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Shadav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ ਮੇ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਗ ਸਾ", pakad: "ਗ, ਮੇ ਪ, ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ, ਮੇ ਗ, ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 64, name: "Gaudhamani", gurmukhi: "ਰਾਗ ਗੌਧਮਨੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Dha", varjit: "ਗ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ, ਮ ਰੇ ਸਾ", pakad: "ਧ ਨੀ ਰੇ, ਮ ਰੇ, ਨੀ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 65, name: "Mayadhi", gurmukhi: "ਰਾਗ ਮਾਯਾਧੀ",
    thaat: "Khamaj", vadi: "Ga", samvadi: "Dha", varjit: "ਮ [ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ, ਗ ਰੇ ਸਾ, ਨੀ ਧ ਸਾ, ਨੀ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 66, name: "Guniprnga-Bhukmohani", gurmukhi: "ਰਾਗ ਗੁਨੀਪ੍ਰਿੰਗਾ-ਭੁਕਮੋਹਨੀ",
    thaat: "Khamaj", vadi: "Re", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਪ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਮ ਗ ਰੇ ਸਾ, ਗ, ਰੇ ਸਾ, ਨੀ ਧ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 67, name: "Radhapati-Bhukmohani", gurmukhi: "ਰਾਗ ਰਾਧਾਪਤੀ ਭੁਕਮੋਹਨੀ",
    thaat: "Khamaj", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਗ, ਮ ਪ, ਗ ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 68, name: "Rainmani", gurmukhi: "ਰਾਗ ਰੈਨਮਨੀ",
    thaat: "Bilawal", vadi: "Ma", samvadi: "Sa", varjit: "ਰੇ-ਨੀ [ਸਾਰੇ ਸ਼ੁੱਧ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ, ਪ ਮ, ਗ ਸਾ", pakad: "ਧ ਪ ਮ, ਗ ਸਾ, ਗ ਪ ਮ"
  },
  {
    parent: "jaijaiwanti", variantNum: 69, name: "Mohanam", gurmukhi: "ਰਾਗ ਮੋਹਨਮ (ਦਖਿਣੀ)",
    thaat: "Bilawal", vadi: "Ga", samvadi: "Dha", varjit: "ਮ-ਨੀ [ਸਾਰੇ ਸ਼ੁੱਧ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dusk · Night 1st pahir", pahir: "N1", centerHour: 19.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਰੇ ਸਾ, ਗ ਪ ਧ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "jaijaiwanti", variantNum: 70, name: "Karnat", gurmukhi: "ਰਾਗ ਕਰਨਾਟ",
    thaat: "Khamaj", vadi: "Ni", samvadi: "Ga", varjit: "ਰੇ-ਪ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 12,
    aroha: "ਸਾ ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਸਾ", pakad: "ਸਾ ਗ ਮ, ਨੀ, ਪ ਸਾਂ ਨੀ, ਪ ਗ ਮ, ਗ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 2, name: "Prabhat Dakhini", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤ ਦਖਿਣੀ",
    thaat: "Todi", vadi: "Sa", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਗ [ਰੇ ਗ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਨੀ, ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮੇ, ਪ ਮੇ, ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮੇ ਪ, ਧ ਮੇ, ਪ ਮੇ, ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 3, name: "Prabhati (2) Prachin", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤੀ (2) (ਪ੍ਰਾਚੀਨ)",
    thaat: "Bilawal", vadi: "Pa", samvadi: "Ga", varjit: "ਮ [ਸਾਰੇ ਸ਼ੁੱਧ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਧ ਪ, ਧ, ਗ, ਪ ਧ ਪ, ਨੀ ਧ"
  },
  {
    parent: "prabhati", variantNum: 4, name: "Prabhavati", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਵਤੀ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Sa", varjit: "ਮ [ਰੇ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾਂ, ਪ, ਧ ਨੀ ਧ ਪ, ਗ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 5, name: "Prabhat Vibhas", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤ ਵਿਭਾਸ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ, ਦੋਵੇਂ ਮ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਮੇ ਮ, ਗ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ, ਧੁ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਮੇ ਮ ਗ ਮ, ਗ ਪ ਧੁ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 6, name: "Vibhas", gurmukhi: "ਰਾਗ ਵਿਭਾਸ",
    thaat: "Bhairav", vadi: "Pa", samvadi: "Re", varjit: "ਮ-ਨੀ [ਰੇ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਧੁ ਧੁ, ਪ, ਪ ਗ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 7, name: "Prabhat Kiran", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤ ਕਿਰਣ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ ਧ, ਗੁ ਮ ਧ ਨੀ ਰੇਂ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਧ ਮ, ਪ ਗੁ, ਮ ਰੇ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਧ ਨੀ, ਧ ਪ, ਧ ਮ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 8, name: "Prabhat (2)", gurmukhi: "ਰਾਗ ਪ੍ਰਭਾਤ (2)",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ, ਦੋਵੇਂ ਮ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਰੇ ਗ, ਮ, ਮ ਮੇ ਮ, ਪ ਧੁ, ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 9, name: "Vibhas (2)", gurmukhi: "ਰਾਗ ਵਿਭਾਸ (2)",
    thaat: "Marwa", vadi: "Dha", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਰੇ ਗ, ਮੇ ਗ, ਪ ਧ ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਮੇ ਧ, ਮੇ ਗ ਰੇ ਸਾ", pakad: "ਨੀ, ਰੇ ਗ, ਮੇ ਗ, ਰੇ ਸਾ, ਗ ਪ, ਗ ਪ ਧ, ਮੇ ਗ, ਪ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 10, name: "Pantuvarali", gurmukhi: "ਰਾਗ ਪੰਤੁਵਰਾਲੀ",
    thaat: "Purvi", vadi: "Pa", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਧ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮੇ ਧੁ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮੇ ਪ, ਧੁ ਪ ਧੁ ਮੇ, ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ, ਰੇਂ ਨੀ ਪ ਮੇ, ਗ ਮੇ ਰੇ ਧੁ, ਸਾਂ ਨੀ ਧੁ ਪ ਮੇ"
  },
  {
    parent: "prabhati", variantNum: 11, name: "Padi", gurmukhi: "ਰਾਗ ਪਾੜੀ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Pa", varjit: "ਗ [ਰੇ ਧ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ, ਰੇ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ, ਰੇ ਮ ਪ, ਧ ਪ, ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 12, name: "Mugdha", gurmukhi: "ਰਾਗ ਮੁਗਧਾ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22, samayNote: "10pm–5am",
    aroha: "ਸਾ ਰੇ ਗ ਮ ਪ ਧੁ ਨੀ ਸਾ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਗ ਮ, ਰੇ ਗ, ਸਾ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 13, name: "Bangal", gurmukhi: "ਰਾਗ ਬੰਗਾਲ",
    thaat: "Bhairav", vadi: "Sa", samvadi: "Pa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ, ਨੀ ਸਾ, ਪ, ਧੁ ਪ, ਮ ਗ, ਰੇ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 14, name: "Karnat-Bangal", gurmukhi: "ਰਾਗ ਕਰਨਾਟ-ਬੰਗਾਲ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Ni", varjit: "ਰੇ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧੁ ਪ, ਮ ਗ, ਸਾ", pakad: "ਗ, ਮ ਪ, ਧੁ ਨੀ, ਧੁ ਪ ਮ ਗ, ਸਾ ਨੀ ਸਾ"
  },
  {
    parent: "prabhati", variantNum: 15, name: "Hund Lrikha", gurmukhi: "ਰਾਗ ਹੂੰਡ ਲ੍ਰਿਖਾ",
    thaat: "Bilawal", vadi: "Sa", samvadi: "Pa", varjit: "ਰੇ-ਪ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ, ਗ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਪ, ਮ ਗ ਸਾ", pakad: "ਸਾ, ਗ ਮ ਪ, ਨੀ ਪ, ਸਾਂ, ਨੀ ਪ, ਮ ਗ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 2, name: "Raudrav", gurmukhi: "ਰਾਗ ਰੌਦਰਵ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਧ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਨੀ ਸਾ, ਗੁ ਰੇ ਗੁ ਮ, ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ ਰੇ, ਗੁ ਮ ਪ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 3, name: "Malini", gurmukhi: "ਰਾਗ ਮਾਲਿਨੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਧ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਸਾਂ, ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ ਮ"
  },
  {
    parent: "bhairavi", variantNum: 4, name: "Ratrangi", gurmukhi: "ਰਾਗ ਰਤਰੰਗੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਗ ਧ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਰੇ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 5, name: "Bhupmukhi", gurmukhi: "ਰਾਗ ਭੁੱਧਮੁਖੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "ਅਵਰੋਹ ਵਿਚ ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗੁ ਰੇ ਗੁ, ਮ ਪ ਨੀ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਨੀ ਧੁ ਸਾਂ, ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ, ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 6, name: "Hem Vardhani", gurmukhi: "ਰਾਗ ਹੇਮ ਵਰਧਨੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Re", varjit: "ਆਰੋਹ ਵਿਚ ਗ ਧ [ਗ ਧ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਰੇ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਪ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 7, name: "Devagini", gurmukhi: "ਰਾਗ ਦੇਵਾਗਿਨੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ-ਨੀ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਮ, ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 8, name: "Virhani", gurmukhi: "ਰਾਗ ਵਿਰਹਣੀ",
    thaat: "Bhairavi", vadi: "Ni", samvadi: "Ga", varjit: "ਮ-ਪ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਨੀ, ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਸਾ ਨੀ, ਪ ਨੀ ਸਾ, ਰੇ ਨੀ ਰੇ, ਗੁ ਪ, ਪ ਗੁ ਪ, ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 9, name: "Bhopal", gurmukhi: "ਰਾਗ ਭੋਪਾਲ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਮ-ਨੀ [ਰੇ ਗ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਧੁ ਸਾਂ, ਧੁ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 10, name: "Shudh-Sanvat", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ-ਸਾਂਵਟ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਨੀ [ਰੇ ਗ ਧ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧੁ, ਪ, ਧੁ ਪ, ਮ, ਧੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 11, name: "Kamal", gurmukhi: "ਰਾਗ ਕਮਲ",
    thaat: "Bhairavi", vadi: "Re", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਮ-ਨੀ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਧੁ, ਪ ਮ ਗੁ ਰੇ, ਮ ਗੁ ਰੇ ਸਾ, ਸਾ ਰੇ ਗੁ, ਮ, ਗੁ ਪ ਧੁ, ਰੇ ਗੁ ਰੇ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 12, name: "Utri Gunkali", gurmukhi: "ਰਾਗ ਉਤਰੀ ਗੁਣਕਲੀ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Ma", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਮ, ਪ ਧੁ ਮ ਪ, ਮ ਗੁ, ਗੁ ਮ ਰੇ, ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 13, name: "Bhukal Manjari", gurmukhi: "ਰਾਗ ਭੁਕਲ ਮੰਜਰੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਆਰੋਹ ਵਿਚ ਮ, ਅਵਰੋਹ ਵਿਚ ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ, ਰੇ ਗੁ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 14, name: "Kankambheri", gurmukhi: "ਰਾਗ ਕਾਂਕਮਭੇਰੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਆਰੋਹ ਵਿਚ ਨੀ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ ਧੁ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ, ਗੁ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 15, name: "Rasavali", gurmukhi: "ਰਾਗ ਰਸਾਵਲੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Re", varjit: "ਆਰੋਹ ਵਿਚ ਪ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਗੁ ਰੇ, ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 16, name: "Shailja", gurmukhi: "ਰਾਗ ਸ਼ੈਲਜਾ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Pa", varjit: "ਰੇ-ਮ [ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਗੁ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਗੁ ਸਾ", pakad: "ਗੁ ਪ ਧੁ ਨੀ ਧੁ ਪ, ਗੁ ਪ ਧੁ, ਪ ਗੁ, ਸਾ ਗੁ ਸਾ ਨੀ ਧੁ, ਪ ਧੁ ਨੀ ਸਾ, ਗੁ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 17, name: "Chakk", gurmukhi: "ਰਾਗ ਚੱਕ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਧ [ਰੇ ਧ ਕੋਮਲ, ਦੋਵੇਂ ਗ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਨੀ ਧੁ ਪ ਧੁ, ਪ ਮ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਪ, ਸਾਂ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ ਧੁ, ਪ ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 18, name: "Sampuran-Malkauns", gurmukhi: "ਰਾਗ ਸੰਪੂਰਨ-ਮਾਲਕੌਂਸ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ, ਮ ਗੁ, ਸਾ ਰੇ ਸਾ, ਮ ਧੁ, ਨੀ ਧੁ, ਮ ਗੁ, ਮ ਪ, ਸਾਂ ਰੇਂ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮ ਪ ਮ ਗੁ ਸਾ, ਗੁ ਮ ਗੁ, ਸਾ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਮ ਗੁ ਸਾ, ਮ ਪ ਮ, ਗੁ ਮ ਗੁ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 19, name: "Sindhvi", gurmukhi: "ਰਾਗ ਸਿੰਧਵੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Re", varjit: "ਆਰੋਹ ਵਿਚ ਮ, ਅਵਰੋਹ ਵਿਚ ਮ-ਨੀ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਗ ਰੇ ਸਾ", pakad: "ਗ ਰੇ, ਗ ਪ, ਧੁ ਪ, ਪ ਸਾਂ ਪ, ਨੀ ਧੁ ਨੀ ਸਾਂ, ਸਾਂ, ਧੁ ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 20, name: "Todi Dakhini", gurmukhi: "ਰਾਗ ਤੋੜੀ (ਦਖਿਣੀ)",
    thaat: "Bhairavi", vadi: "Ga", samvadi: "Dha", varjit: "ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਧੁ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ, ਨੀ ਸਾਂ, ਧੁ, ਰੇਂ, ਸਾਂ ਧੁ, ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 21, name: "Jantodi Dakhini", gurmukhi: "ਰਾਗ ਜਨਤੋੜੀ (ਦਖਿਣੀ)",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Pa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਸਰਵ-ਕਾਲਿਕ", timeEnglish: "All hours", pahir: "ANY", centerHour: 12,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਗੁ, ਮ ਪ ਧੁ ਨੀ, ਸਾਂ ਨੀ ਧੁ ਪ"
  },
  {
    parent: "bhairavi", variantNum: 22, name: "Parmesari", gurmukhi: "ਰਾਗ ਪਰਮੇਸਰੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਰੇ ਸਾ, ਮ, ਗੁ ਮ ਧ ਨੀ ਸਾਂ, ਧ ਨੀ ਮ, ਰੇ ਗੁ ਰੇ, ਧ ਨੀ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 23, name: "Maloshwari", gurmukhi: "ਰਾਗ ਮਾਲੋਸ਼ਵਰੀ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Ma", varjit: "ਰੇ-ਪ [ਗ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਧ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਨੀ ਸਾ, ਮ ਗੁ, ਮ ਧ, ਸਾਂ, ਨੀ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਸਾਂ, ਨੀ ਧ ਮ, ਗੁ ਮ ਗੁ ਸਾ", pakad: "ਮ ਗੁ, ਸਾ ਗੁ, ਮ ਧ, ਸਾ ਨੀ ਧ, ਮ ਗੁ, ਮ ਗੁ, ਮ"
  },
  {
    parent: "bhairavi", variantNum: 24, name: "Sainavati", gurmukhi: "ਰਾਗ ਸੈਨਾਵਤੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ, ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 25, name: "Vaispati", gurmukhi: "ਰਾਗ ਵੈਸਪਤੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ, ਮ ਪ, ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ, ਮ ਪ, ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 26, name: "Bhanmati", gurmukhi: "ਰਾਗ ਭਾਨਮਤੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਧ ਨੀ, ਅਵਰੋਹ ਵਿਚ ਨੀ [ਗ ਕੋਮਲ, ਦੋਵੇਂ ਰੇ]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਰੇ, ਮ ਪ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ, ਪ ਸਾਂ, ਧ ਪ ਮ, ਰੇ ਗੁ ਰੇ, ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 27, name: "Manvati", gurmukhi: "ਰਾਗ ਮਾਨਵਤੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਅਵਰੋਹ ਵਿਚ ਗ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ, ਮ ਪ, ਧ, ਸਾਂ ਨੀ ਧ, ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 28, name: "Rupvati", gurmukhi: "ਰਾਗ ਰੂਪਵਤੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ, ਪ, ਧ ਨੀ ਸਾਂ, ਨੀ ਧ ਪ, ਮ, ਗੁ ਰੇ ਗ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 29, name: "Ahiri", gurmukhi: "ਰਾਗ ਅਹੀਰੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22,
    aroha: "ਸਾ ਰੇ ਸਾ, ਗ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾਂ, ਰੇਂ ਸਾਂ ਰੇਂ, ਸਾਂ, ਨੀ ਨੀ, ਸਾਂ ਨੀ ਨੀ, ਧੁ ਧੁ ਨੀ ਧੁ ਪ, ਪ ਮ ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 30, name: "Dhvanika", gurmukhi: "ਰਾਗ ਧਵਨਿਕਾ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ, ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ ਮ"
  },
  {
    parent: "bhairavi", variantNum: 31, name: "Rain Tarika", gurmukhi: "ਰਾਗ ਰੈਨ ਤਾਰਿਕਾ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ, ਰੇ ਗੁ ਧੁ, ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਰੇ ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ ਮ, ਪ ਮ, ਧੁ ਪ ਮ, ਗੁ ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 32, name: "Rasika", gurmukhi: "ਰਾਗ ਰਸਿਕਾ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਰੇ [ਗ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਸਾ ਗੁ ਮ ਪ, ਮ ਗੁ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 33, name: "Gaupikant", gurmukhi: "ਰਾਗ ਗੌਪੀਕਾਂਤ",
    thaat: "Bhairavi", vadi: "Tar Sa", samvadi: "Ma", varjit: "ਗ-ਪ [ਰੇ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਰੇ ਸਾ", pakad: "ਧੁ ਨੀ ਸਾਂ ਰੇਂ ਸਾਂ, ਨੀ ਧੁ ਮ"
  },
  {
    parent: "bhairavi", variantNum: 34, name: "Palki", gurmukhi: "ਰਾਗ ਪਾਲਕੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗੁ ਮ ਧ, ਮ ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 35, name: "Kalankanti", gurmukhi: "ਰਾਗ ਕਲਾਂਕਾਂਤੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Re", varjit: "ਅਵਰੋਹ ਵਿਚ ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਗ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮ ਗ, ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ, ਮ ਪ, ਧੁ ਪ ਧੁ ਸਾਂ, ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 36, name: "Vardhani", gurmukhi: "ਰਾਗ ਵਰਧਨੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Re", varjit: "ਕੋਈ ਨਹੀਂ [ਧ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਰੇ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ, ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 37, name: "Punitangi", gurmukhi: "ਰਾਗ ਪੁਨੀਤਾਂਗੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ-ਨੀ [ਰੇ ਗ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਧੁ ਮ ਧੁ ਸਾ, ਰੇ ਸਾ, ਰੇ ਗੁ ਮ ਧੁ ਮ, ਗੁ ਮ ਗੁ ਰੇ ਸਾ, ਧੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 38, name: "Gopinath", gurmukhi: "ਰਾਗ ਗੋਪੀਨਾਥ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ [ਰੇ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਸਾ, ਰੇ ਨੀ ਸਾ, ਰੇ ਮ ਰੇ ਸਾ, ਨੀ ਧੁ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 39, name: "Pavan", gurmukhi: "ਰਾਗ ਪਵਨ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Ma", varjit: "ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਧੁ ਮ, ਮ ਧੁ ਨੀ ਸਾਂ, ਸਾਂ ਨੀ ਧੁ ਮ, ਗੁ ਰੇ ਗੁ ਮ"
  },
  {
    parent: "bhairavi", variantNum: 40, name: "Sohini", gurmukhi: "ਰਾਗ ਸੋਹਿਨੀ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Pa", varjit: "ਮ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਪ, ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ ਪ, ਧੁ ਪ, ਗੁ ਪ ਧੁ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 41, name: "Madhavesh", gurmukhi: "ਰਾਗ ਮਾਧਵੇਸ਼",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Pa", varjit: "ਮ-ਧ [ਰੇ ਗ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ, ਪ ਨੀ ਪ ਸਾ, ਸਾ ਰੇ ਗੁ ਪ, ਗੁ ਪ, ਸਾ ਰੇ ਗੁ ਰੇ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 42, name: "Renu Kosh", gurmukhi: "ਰਾਗ ਰੇਨੁ ਕੋਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਰੇ-ਨੀ [ਗ ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗੁ ਮ ਪ, ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਧੁ ਪ, ਮ ਗੁ ਸਾ", pakad: "ਸਾ ਧੁ ਧੁ ਸਾ, ਗੁ ਸਾ, ਗੁ ਮ ਪ ਮ, ਗੁ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 43, name: "Shudh Mangla", gurmukhi: "ਰਾਗ ਸ਼ੁੱਧ ਮੰਗਲਾ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ [ਗ ਨੀ ਕੋਮਲ, ਦੋਵੇਂ ਰੇ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ, ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 44, name: "Ratan-Mani", gurmukhi: "ਰਾਗ ਰਤਨ-ਮਣੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "ਅਵਰੋਹ ਵਿਚ ਮ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ, ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ, ਧ ਪ, ਗੁ ਰੇ ਸਾ", pakad: "ਧ ਪ, ਗੁ ਰੇ ਸਾ, ਰੇ ਗੁ, ਮ ਪ, ਧ, ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 45, name: "Tan Rupi", gurmukhi: "ਰਾਗ ਤਾਨ ਰੂਪੀ",
    thaat: "Bhairavi", vadi: "Pa", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ, ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 46, name: "Kokilaru", gurmukhi: "ਰਾਗ ਕੋਕਿਲਾਰੁ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਨੀ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਗੁ ਮ, ਪ ਧ ਸਾਂ, ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 47, name: "Kokil Puria", gurmukhi: "ਰਾਗ ਕੋਕਿਲ ਪੁਰਿਆ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ, ਪ ਧ ਨੀ, ਸਾਂ ਨੀ ਧ ਪ, ਮ ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 48, name: "Manmohani", gurmukhi: "ਰਾਗ ਮਨਮੋਹਨੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਧ ਨੀ ਕੋਮਲ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ ਮ, ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਗ ਮ, ਗ ਰੇ ਸਾ ਨੀ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 49, name: "Rajan Ganesh", gurmukhi: "ਰਾਗ ਰਜਨ ਗਾਨੇਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ, ਅਵਰੋਹ ਵਿਚ ਗ [ਰੇ ਨੀ ਧ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਪ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗ ਮ, ਪ ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 50, name: "Rup Tej Manmohani", gurmukhi: "ਰਾਗ ਰੂਪ ਤੇਜ ਮਨਮੋਹਨੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਰੇ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਗ ਮ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ ਗ ਮ, ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 51, name: "Dhanesh", gurmukhi: "ਰਾਗ ਧਨੇਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ [ਰੇ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ, ਗ ਰੇ ਸਾ", pakad: "ਪ ਨੀ, ਪ ਮ ਗ, ਰੇ ਸਾ, ਨੀ ਸਾ, ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 52, name: "Pankaj", gurmukhi: "ਰਾਗ ਪੰਕਜ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਗੁ ਮ ਧ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 53, name: "Gan Mani", gurmukhi: "ਰਾਗ ਗਾਨ ਮਣੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਨੀ [ਰੇ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਧ ਸਾਂ", avaroha: "ਸਾਂ ਧ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ, ਪ ਮ ਰੇ, ਸਾ ਧ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 54, name: "Gadh Pushp", gurmukhi: "ਰਾਗ ਗਾਧ ਪੁਸ਼ਪ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਗ-ਪ [ਰੇ ਨੀ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late morning · Day 2nd pahir", pahir: "D2", centerHour: 10.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ, ਰੇ ਨੀ, ਸਾ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 55, name: "Sinharav", gurmukhi: "ਰਾਗ ਸਿੰਹਰਵ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਗ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਗ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧੁ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਰੇ ਮ ਪ ਧੁ ਪ, ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 56, name: "Malav", gurmukhi: "ਰਾਗ ਮਾਲਵ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਰੇ [ਨੀ ਕੋਮਲ, ਗ-ਧ ਦੋਵੇਂ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Afternoon · Day 3rd pahir", pahir: "D3", centerHour: 13.5,
    aroha: "ਸਾ ਗ ਮ ਧੁ, ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਪ ਪ ਧ, ਨੀ ਧ ਪ ਮ, ਮ ਗ ਮ, ਗੁ ਸਾ", pakad: "ਸਾ ਗ ਮ, ਧ ਨੀ ਧ ਪ, ਮ ਗ ਮ, ਗ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 57, name: "Sautki", gurmukhi: "ਰਾਗ ਸੌਟਕੀ",
    thaat: "Bhairavi", vadi: "Sa", samvadi: "Ma", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਗ, ਅਵਰੋਹ ਵਿਚ ਮ [ਗ ਕੋਮਲ, ਰੇ ਧ ਨੀ ਦੋਵੇਂ]", jaati: "Audav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਮ ਪ, ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਗੁ ਰੇ ਗੁ ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ ਰੇ ਪ, ਮ ਪ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 58, name: "Abhavati", gurmukhi: "ਰਾਗ ਅਭਾਵਤੀ",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਰੇ ਗ ਧ ਨੀ ਕੋਮਲ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਨੀ ਸਾ, ਗੁ ਮ, ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਪ ਗੁ, ਰੇ ਸਾ", pakad: "ਨੀ ਸਾ, ਗੁ ਮ, ਧੁ ਨੀ ਧੁ ਪ, ਪ, ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 59, name: "Chirumati", gurmukhi: "ਰਾਗ ਚਿੜੂਮਟੀ",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Re", varjit: "ਆਰੋਹ ਵਿਚ ਗ [ਰੇ ਗ ਕੋਮਲ]", jaati: "Shadav–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਮ, ਗੁ ਰੇ ਸਾ", pakad: "ਮ ਪ ਧ, ਨੀ ਸਾਂ, ਨੀ ਧ, ਪ ਮ, ਗੁ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 60, name: "Shankarpriya", gurmukhi: "ਰਾਗ ਸ਼ੰਕਰਪ੍ਰਿਆ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਨੀ ਕੋਮਲ, ਮ ਤੀਬਰ]", jaati: "Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਸਾ ਰੇ ਗ ਮੇ, ਮੇ ਪ, ਧ ਨੀ ਪ, ਨੀ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਸਾਂ, ਧ ਨੀ ਧ ਪ ਮੇ ਗ, ਰੇ ਗ ਰੇ, ਰੇ ਗ ਸਾ", pakad: "ਸਾ ਰੇ ਨੀ, ਸਾ ਰੇ ਗ, ਮੇ ਪ ਗ, ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 61, name: "Navvish Lit", gurmukhi: "ਰਾਗ ਨਵਵਿਸ਼ ਲਿਤ",
    thaat: "Kafi", vadi: "Re", samvadi: "Dha", varjit: "ਪ [ਗ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗੁ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ, ਧ ਮ ਮ ਗੁ ਰੇ ਸਾ", pakad: "ਰੇ ਰੇ, ਗੁ ਮ ਮ, ਗੁ ਨੀ ਧ ਪ, ਗੁ ਰੇ"
  },
  {
    parent: "bhairavi", variantNum: 62, name: "Vaijayanti", gurmukhi: "ਰਾਗ ਵੈਜਯੰਤੀ",
    thaat: "Kalyan", vadi: "Pa", samvadi: "Re", varjit: "ਗ-ਧ [ਮ ਤੀਬਰ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Late afternoon · Day 4th pahir", pahir: "D4", centerHour: 16.5,
    aroha: "ਨੀ ਸਾ ਰੇ ਮੇ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਮੇ ਪ ਰੇ ਸਾ", pakad: "ਸਾਂ ਨੀ ਪ ਮੇ ਰੇ, ਮੇ ਰੇ ਸਾ, ਨੀ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 63, name: "Gyan Kali", gurmukhi: "ਰਾਗ ਗਿਆਨ ਕਲੀ",
    thaat: "Asavari", vadi: "Dha", samvadi: "Re", varjit: "ਗ [ਧ ਨੀ ਕੋਮਲ]", jaati: "Shadav–Shadav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 7.5,
    aroha: "ਸਾ ਰੇ ਮ ਪ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਰੇ ਸਾ", pakad: "ਸਾ ਰੇ ਮ ਰੇ ਸਾ ਨੀ ਸਾ, ਪ ਧੁ ਨੀ ਸਾਂ"
  },
  {
    parent: "bhairavi", variantNum: 64, name: "Surakh Kosh", gurmukhi: "ਰਾਗ ਸੁਰਖ ਕੋਸ਼",
    thaat: "Bhairavi", vadi: "Ma", samvadi: "Sa", varjit: "ਪ-ਰੇ [ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਰਾਤ ਦਾ ਤੀਸਰਾ ਪਹਿਰ", timeEnglish: "Midnight · Night 3rd pahir", pahir: "N3", centerHour: 0,
    aroha: "ਸਾ ਗ ਮ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਮ ਗ ਸਾ", pakad: "ਗ ਮ ਧੁ, ਮ ਧੁ ਨੀ ਸਾਂ ਗ"
  },
  {
    parent: "bhairavi", variantNum: 65, name: "Chandar Prakash", gurmukhi: "ਰਾਗ ਚੰਦਰ ਪ੍ਰਕਾਸ਼",
    thaat: "Bhairav", vadi: "Dha", samvadi: "Re", varjit: "ਗ-ਪ [ਧ ਕੋਮਲ]", jaati: "Audav–Audav",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਰੇ ਮ ਧੁ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ, ਮ ਰੇ ਸਾ", pakad: "ਧੁ ਮ ਰੇ ਨੀ ਸਾ, ਰੇ ਮ ਧੁ"
  },
  {
    parent: "bhairavi", variantNum: 66, name: "Mahesh Rajani", gurmukhi: "ਰਾਗ ਮਹੇਸ਼ ਰਜਨੀ",
    thaat: "Khamaj", vadi: "Dha", samvadi: "Ga", varjit: "ਆਰੋਹ ਵਿਚ ਮ-ਨੀ, ਅਵਰੋਹ ਵਿਚ ਮ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਰੇ ਗ ਪ ਧ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧ ਪ ਗ ਰੇ ਸਾ", pakad: "ਗ ਪ ਧ, ਸਾਂ ਨੀ ਧ, ਪ, ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 67, name: "Gavati", gurmukhi: "ਰਾਗ ਗਾਵਤੀ",
    thaat: "Khamaj", vadi: "Sa", samvadi: "Pa", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ, ਅਵਰੋਹ ਵਿਚ ਧ [ਨੀ ਕੋਮਲ]", jaati: "Audav–Shadav",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਪ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਪ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਪ ਨੀ ਸਾਂ, ਮ ਰੇ ਨੀ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 68, name: "Rago Shri Bhairav", gurmukhi: "ਰਾਗ ਰਾਗੋ ਸ਼੍ਰੀ ਭੈਰਵ",
    thaat: "Bhairav", vadi: "Ga", samvadi: "Dha", varjit: "ਆਰੋਹ ਵਿਚ ਰੇ-ਪ [ਰੇ ਧ ਨੀ ਦੋਵੇਂ]", jaati: "Audav–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਦੂਸਰਾ ਪਹਿਰ", timeEnglish: "Late evening · Night 2nd pahir", pahir: "N2", centerHour: 22.5,
    aroha: "ਸਾ ਗ ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਨੀ ਧੁ ਪ, ਮ ਗ ਰੇ ਸਾ, ਰੇ ਗ, ਮ ਗ ਰੇ ਸਾ", pakad: "ਮ ਧ, ਨੀ ਧ, ਗ ਮ ਧੁ ਪ, ਮ, ਗ ਰੇ, ਗ ਮ ਗ ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 69, name: "Ahauri Bhatiar", gurmukhi: "ਰਾਗ ਅਹੌਰੀ ਭਟਿਆਰ",
    thaat: "Bhairav", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਨੀ ਕੋਮਲ]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਪ ਨੀ ਰੇ, ਸਾ ਪ, ਧ ਮ ਪ, ਧ ਗ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਨੀ ਸਾਂ, ਧ, ਧ ਮ, ਪ ਗ, ਰੇ ਰੇ ਸਾ", pakad: "ਸਾ ਧ ਧ, ਪ ਮ ਪ, ਗ ਰੇ ਸਾ, ਪ ਨੀ ਰੇ"
  },
  {
    parent: "bhairavi", variantNum: 70, name: "Hari Kosh", gurmukhi: "ਰਾਗ ਹਰੀ ਕੋਸ਼",
    thaat: "Bhairavi", vadi: "Dha", samvadi: "Ga", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਗ ਧ ਕੋਮਲ, ਮ-ਨੀ ਦੋਵੇਂ]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਦਿਨ ਦਾ ਪਹਿਲਾ ਪਹਿਰ", timeEnglish: "Dawn · Day 1st pahir", pahir: "D1", centerHour: 6,
    aroha: "ਸਾ ਨੀ ਸਾ, ਧੁ, ਸਾ ਰੇ ਗੁ, ਰੇ ਗੁ ਮ ਗੁ ਪ, ਮੇ ਪ ਧੁ, ਨੀ ਧੁ ਪ, ਮ ਧ ਨੀ ਸਾਂ", avaroha: "ਸਾਂ ਰੇਂ ਸਾਂ, ਨੀ ਧੁ, ਪ, ਮ ਨੀ ਧੁ ਧੁ, ਮੇ ਪ ਧੁ ਮ ਗੁ, ਰੇ ਗੁ ਰੇ, ਧੁ ਸਾ", pakad: "ਮੇ ਪ, ਧੁ ਨੀ, ਧੁ ਪ, ਧੁ ਧੁ ਮ ਗੁ, ਰੇ ਗੁ, ਰੇ ਸਾ"
  },
  {
    parent: "bhairavi", variantNum: 71, name: "Bhatiar", gurmukhi: "ਰਾਗ ਭਟਿਆਰ",
    thaat: "Marwa", vadi: "Ma", samvadi: "Sa", varjit: "ਕੋਈ ਨਹੀਂ [ਰੇ ਕੋਮਲ, ਦੋਵੇਂ ਮ]", jaati: "Vakra Sampuran–Sampuran",
    timePunjabi: "ਰਾਤ ਦਾ ਚੌਥਾ ਪਹਿਰ", timeEnglish: "Before dawn · Night 4th pahir", pahir: "N4", centerHour: 4.5,
    aroha: "ਸਾ ਰੇ ਗ, ਮ, ਪ ਮ, ਧ, ਮੇ ਧ ਸਾਂ", avaroha: "ਸਾਂ, ਨੀ ਧ ਪ, ਮ, ਪ ਗ, ਮੇ ਧ, ਮੇ ਗ ਪ ਗ, ਰੇ", pakad: "ਸਾ ਧ, ਪ, ਧ ਮ, ਪ ਗ, ਮੇ ਧ, ਸਾਂ, ਰੇਂ ਨੀ ਧ ਪ, ਮ, ਪ ਗ ਰੇ ਸਾ"
  }
];

if (typeof module !== "undefined") { module.exports = { VARIANTS }; }
