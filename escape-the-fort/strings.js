/* Escape the Fort — every word the game shows, in English and Punjabi.
   The sakhi follows Sri Gur Pratap Suraj Granth (Bhai Santokh Singh Ji), Raas 4 Ansu 58–66 and
   Raas 5 Ansu 8, as checked for the Bandi Chhor Divas event on 7 November 2026.
   Arrays must keep the same length and order in both languages: the game reads answers by position.
   `pa` is a DRAFT until Shaheedi Bunga approves it; game.js hides the language switch until then. */
window.EF_STRINGS = {
en: {
  lang_name: "English", lang_other: "ਪੰਜਾਬੀ",
  title: "Escape the Fort",
  kicker: "Bandi Chhor Divas · a game for the whole family",
  intro: "In 1619 Sri Guru Hargobind Sahib Ji were kept in Gwalior Fort with 52 kings. Play the sakhi in twelve short levels. Every level you finish wins a letter — collect all twelve to crack the code and escape the fort together.",
  start: "Start the game", resume: "Carry on", restart: "Start again",
  how: "Read each part of the story, then play. Stuck? Every level has a hint. Nothing is ever “game over” — just try again.",
  level: "Level", of: "of", story: "The story", read_more: "Read more of the sakhi", read_less: "Show less",
  play: "Play", next: "Next level", hint: "Hint", try_again: "Not quite — try again.", well_done: "Well done!",
  you_won: "You won a letter", parent_tip: "Family tip", letters: "Your letters",
  check: "Check", reset_level: "Start this level again",
  final_title: "Crack the code", final_text: "Here are your twelve letters, in the order of the sakhi. What do they spell?",
  final_place: "Type the code", final_wrong: "Look at the letters again — three words.",
  final_right: "You escaped the fort!",
  meaning: "Data Bandi Chhor — “the generous giver who frees prisoners”. Guru Sahib Ji would not be free alone, and walked out of Gwalior Fort with all 52 kings.",
  cert_kicker: "Certificate", cert_title: "We escaped the fort!", cert_name: "Your name or family name", cert_for: "for playing the sakhi of Sri Guru Hargobind Sahib Ji, Data Bandi Chhor, who would not leave Gwalior Fort without all 52 kings.",
  print: "Print or save the certificate", again: "Play again",
  closing: "Tonight, when you light your deeve, remember the 52 kings who walked out together. Who could you help “free” this week — a friend left out, someone lonely, someone being picked on?",
  source: "The sakhi follows Sri Gur Pratap Suraj Granth by Bhai Santokh Singh Ji. No pictures of Guru Sahib Ji are used. This game keeps nothing about you: your progress stays on this device only.",

  /* 1 — Miri and Piri */
  L1_title: "Two swords",
  L1_story: "Sri Guru Hargobind Sahib Ji wore two swords — Miri for the world, and Piri for the spirit — and built the Sri Akal Takht Sahib. People called Guru Sahib Ji the Sachcha Patshah, the true king.",
  L1_more: "Guru Sahib Ji asked the Sikhs to bring horses and weapons and to learn to ride and train, so they could protect themselves and others. From the Takht, Guru Sahib Ji listened to the Sangat’s problems like a true king — and some people at the Mughal court grew worried.",
  L1_task: "People bring their problems to the Takht. Does each one need Miri, Piri — or both?",
  L1_opts: ["Miri", "Piri", "Both"],
  L1_items: [
    ["A family nearby has no food this week.", 0, "Miri is acting in the world: share food, bring them to langar."],
    ["Someone keeps forgetting their Nitnem.", 1, "Piri is the spirit: help them make time for Gurbani."],
    ["A boy is bullied every day for his patka.", 2, "Both: stand up for him (Miri) and stay calm with Ardas (Piri)."],
    ["A shopkeeper is cheating old people.", 0, "Miri: speak up and tell someone who can stop it."],
    ["I feel angry all the time.", 1, "Piri: Simran and Gurbani calm the mind."],
    ["A friend is teased and wants to cut their kes.", 2, "Both: defend them, and remind them why kes matters."]
  ],
  L1_tip: "Ask each other: when did you last need Miri — courage to act? When did you need Piri — calm and Simran?",

  /* 2 — Chandu */
  L2_title: "Chandu’s whispers",
  L2_story: "Chandu, a proud man at the Emperor’s court, hated Guru Ghar. He kept whispering lies about Guru Sahib Ji into Emperor Jahangir’s ear.",
  L2_more: "Chandu had wanted his daughter married to Guru Sahib Ji, but his words insulted Guru Ghar and the match was refused. He never forgave it, and he had a big hand in the torture of Sri Guru Arjan Dev Ji. Now he turned his hatred on the young Guru Sahib Ji.",
  L2_task: "Some of these sentences are true. Some are Chandu’s lies. Can you tell which?",
  L2_opts: ["True", "Chandu’s lie"],
  L2_items: [
    ["Guru Sahib Ji wore two swords, Miri and Piri.", 0, "True — Miri and Piri."],
    ["Guru Sahib Ji wants to take the Emperor’s throne.", 1, "That was Chandu’s lie to frighten Jahangir."],
    ["Guru Sahib Ji built the Sri Akal Takht Sahib.", 0, "True."],
    ["The Sikhs are planning to attack Delhi.", 1, "A lie — Chandu wanted the Emperor afraid."],
    ["Guru Sahib Ji listened to the Sangat’s problems.", 0, "True — like a true king."],
    ["Guru Sahib Ji should be locked away for everyone’s good.", 1, "Chandu’s lie — he only wanted Guru Sahib Ji gone."]
  ],
  L2_tip: "Chandu worked with whispers. Talk about it: what do we do when we hear a rumour about someone?",

  /* 3 — the astrologer */
  L3_title: "The astrologer’s trick",
  L3_story: "Chandu paid the Emperor’s astrologer 500 coins and promised 5,000 more to scare Jahangir: “A holy man must pray for you in Gwalior Fort for forty days.” Guru Sahib Ji knew it was a trick — and went anyway.",
  L3_more: "Jahangir was so frightened he stopped eating. Then, just as planned, Chandu’s friends said only Guru Hargobind was holy enough. Guru Sahib Ji said, “If our going to the fort brings you good, we will go.” Sikhs do not follow astrology: Waheguru’s Hukam, not the stars, runs our life.",
  L3_task: "The astrologer’s book is written in Chandu’s secret code — every word is backwards. Decode it!",
  L3_words: [
    ["ROILAWG", 0, ["GWALIOR", "GOLDEN", "GRAVEL"]],
    ["TROF", 1, ["FARM", "FORT", "FIRE"]],
    ["YTROF", 2, ["FIFTY", "FOURTEEN", "FORTY"]],
    ["SYAD", 0, ["DAYS", "DOGS", "DUST"]],
    ["UDNAHC", 1, ["HARI DAS", "CHANDU", "WAZIR KHAN"]]
  ],
  L3_who: "And who paid the astrologer? Read it backwards:",
  L3_hint: "Read the letters from the right-hand end to the left.",
  L3_tip: "Sikhs don’t follow astrology or lucky stars. Ask: what does it mean to live by Hukam?",

  /* 4 — the fort */
  L4_title: "Into Gwalior Fort",
  L4_story: "Guru Sahib Ji rode to Gwalior with only five Sikhs. The fort stood on a great hill — kings were sent there for life. Its commander, Hari Das, loved Guru Ghar and welcomed Guru Sahib Ji with folded hands.",
  L4_more: "Hari Das gave Guru Sahib Ji the best place in the fort and said, “I have longed for your darshan.” Guru Sahib Ji blessed him: whoever keeps faith in Guru Ghar finds peace in both worlds. Today Gurdwara Data Bandi Chhor Sahib stands at the fort.",
  L4_task: "Build Gwalior Fort’s wall! Tap to drop each stone so it lands on the one below. Build six rows.",
  L4_drop: "Drop the stone", L4_fell: "The stone missed — the wall fell. Build again!", L4_rows: "Rows",
  L4_tip: "The fort was strong, but Hari Das’s love was stronger. Who welcomes guests warmly in your family?",

  /* 5 — kirat */
  L5_title: "Honest work all night",
  L5_story: "Guru Sahib Ji would eat only food earned by honest work. Bhai Jetha Ji and Bhai Piraana Ji hammered pots all night for a pot-maker and earned a silver coin each.",
  L5_more: "The Emperor sent food, and Guru Sahib Ji used it to feed everyone in the fort — but did not eat it. With their two coins the Sikhs bought flour, rice, ghee, sugar and milk, and cooked for Guru Sahib Ji with their own hands, every day.",
  L5_task: "You earned 2 silver coins. Buy the five things the Sikhs bought — and spend exactly 2 coins.",
  L5_shop: [["Flour", "½", 0.5, 1], ["Rice", "½", 0.5, 1], ["Ghee", "½", 0.5, 1], ["Sugar", "¼", 0.25, 1], ["Milk", "¼", 0.25, 1], ["Fancy sweets", "1", 1, 0], ["Fine silk", "2", 2, 0]],
  L5_coins: "coins", L5_basket: "In your basket", L5_pay: "Pay",
  L5_over: "That’s more than 2 coins.", L5_wrong: "Not the five things the Sikhs bought — fancy sweets and silk weren’t on their list.",
  L5_tip: "Kirat is earning honestly. At home, what honest work can each of you do this week?",

  /* 6 — the poisoned chola */
  L6_title: "The poisoned chola",
  L6_story: "Chandu sent a robe soaked in poison, pretending it was a gift from the Emperor. Hari Das read the letter to Guru Sahib Ji and threw it in the fire.",
  L6_more: "Chandu promised Hari Das 5,000 coins, a high rank and whole villages. Hari Das told Chandu’s messenger: “Go home. Such a sin will never come from us.” The poisoned chola never touched Guru Sahib Ji.",
  L6_task: "Four cholas have arrived at the fort. Only one is safe. Use the clues to find the true chola.",
  L6_clues: ["Chandu’s gift was flashy and covered in gold — the true chola is plain.", "The true chola has two long sleeves — two kings would one day hold them.", "Chandu’s chola has a label: “Put it on at once!”"],
  L6_more_clue: "Another clue", L6_poison: "Poisoned! Drop it — that’s Chandu’s chola.",
  L6_labels: ["“A gift from the Emperor!”", "“Put it on at once!”", "", "“So fine and soft — wear it tonight!”"],
  L6_tip: "Hari Das said no to 5,000 coins to do the right thing. Have you ever said no to something tempting because it was wrong?",

  /* 7 — the 52 kings */
  L7_title: "The 52 kings",
  L7_story: "52 kings were locked in the fort for life — lice in their hair, torn clothes, heavy chains on their feet. With Guru Sahib Ji they found hope and became a Sangat.",
  L7_more: "Guru Sahib Ji fed them, sat with them and gave them courage. When they feared being left behind, Guru Sahib Ji promised: “We will take all of you with us, or we will stay here too. Remember Satnam.”",
  L7_task: "In the fort, partners free each other. Turn the cards over two at a time to find each pair of partners.",
  L7_moves: "Tries",
  L7_tip: "The kings were freed together. Who in your Sangat could do with a friend right now?",

  /* 8 — the Chaunki */
  L8_title: "Baba Buddha Ji and the Chaunki",
  L8_story: "Mata Ganga Ji sent Baba Buddha Ji all the way to Gwalior. Baba Buddha Ji started the Chaunki — and it still goes round Sri Darbar Sahib every evening.",
  L8_more: "Sangats walked to Gwalior singing Shabads and bowed to the fort walls. Today the Chaunki goes out after Rehras at Sri Akal Takht Sahib, with a Nishan Sahib and torches, singing in two halves. (The Encyclopaedia of Sikhism links it to Gwalior; Suraj Prakash tells its start a little later.)",
  L8_task: "Put the evening Chaunki at Sri Darbar Sahib in order. Tap the steps from first to last.",
  L8_steps: ["Rehras at Sri Akal Takht Sahib", "The Sangat takes a Nishan Sahib and a Sri Sahib", "Ardas", "Round the parikrama, singing in two halves", "Into Sri Harmandar Sahib for Ardas", "Back to Sri Akal Takht Sahib"],
  L8_tip: "If you can, watch the evening Chaunki together on a live stream from Sri Darbar Sahib.",

  /* 9 — the lions */
  L9_title: "Two lions and a doctor",
  L9_story: "Bhai Jetha Ji and Bhai Piraana Ji came to Jahangir at night as two lions. Then Bhai Jetha Ji came as a doctor: “Free Guru Ji, and the fear will end.”",
  L9_more: "Jahangir cried out “Guru Hargobind, save me!” — and the lions said, “Guru Ji has saved you. Never forget it.” But Guru Sahib Ji was not pleased a miracle was shown: fill a pot from a river and the river is no smaller. A Sikh holds Guru Ghar’s power inside and does not show it off.",
  L9_task: "Creep up on the sleeping Emperor as a lion. Hold the button to creep — but freeze when he wakes and looks!",
  L9_creep: "Hold to creep", L9_asleep: "Jahangir is asleep…", L9_stir: "He’s stirring!", L9_awake: "He’s looking — freeze!",
  L9_caught: "He saw you move! Back to the start.", L9_cure: "Say the cure: “Free Guru Ji!”",
  L9_tip: "Guru Sahib Ji did not want power shown off. Talk about being strong without showing off.",

  /* 10 — Wazir Khan */
  L10_title: "Wazir Khan speaks up",
  L10_story: "Wazir Khan, a noble known as Guru Ji’s Sikh, calmly told the Emperor the truth about Chandu’s lies. Jahangir agreed to free Guru Sahib Ji.",
  L10_more: "When the first noble came, Guru Sahib Ji said, “The prisoners here are happy since we came. Why would we leave?” Sai Mian Mir Ji also told Jahangir how calmly Sri Guru Arjan Dev Ji had borne torture, and Jahangir said, “It was Chandu who did this.”",
  L10_task: "Pick the four true things Wazir Khan told the Emperor. Leave the four lies.",
  L10_items: [
    ["The complaints come from Guru Ji’s enemies.", 1],
    ["Sri Guru Nanak Dev Ji blessed Babur.", 1],
    ["Sri Guru Angad Dev Ji guided Humayun.", 1],
    ["Your father Akbar went to Sri Guru Amar Das Ji.", 1],
    ["Guru Ji wants your throne.", 0],
    ["Keep Guru Ji locked up forever.", 0],
    ["The stars say Guru Ji must stay.", 0],
    ["The Sikhs are planning a war.", 0]
  ],
  L10_need: "Pick exactly four.",
  L10_tip: "Wazir Khan spoke the truth calmly. Is there something true you find hard to say? Practise saying it gently.",

  /* 11 — the chola and the kings */
  L11_title: "Not without the kings",
  L11_story: "Guru Sahib Ji would not leave without the kings. Jahangir said only those holding Guru Ji’s robe could go — so Guru Sahib Ji wore a chola with 50 tassels and 2 long sleeves, and all 52 walked free.",
  L11_more: "Fifty kings held fifty tassels, and two were left with nothing. The guards said, “Nothing left to hold!” Guru Sahib Ji called, “My chola has two long sleeves — hold one each!” Only when the prison was empty did Guru Sahib Ji walk out, and blacksmiths cut the kings’ chains.",
  L11_task: "Guide every king out of the fort to the gate. Leave no one behind!",
  L11_king: "King", L11_out: "out", L11_left: "Use the arrows (or swipe) to move.",
  L11_tip: "“Leave no one behind.” Who might feel left out at school or Gurdwara — and how could you bring them in?",

  /* 12 — homecoming */
  L12_title: "Home to Amritsar",
  L12_story: "Amritsar welcomed Guru Sahib Ji home with joy. The Sikh tradition remembers this freedom at Diwali — so we light deeve, and call Guru Sahib Ji Data Bandi Chhor.",
  L12_more: "The streets were swept and garlanded and the nagaare played. Guru Sahib Ji walked into the city on foot — first to Sri Akal Takht Sahib, then Sri Harmandar Sahib — and Mata Ganga Ji held her son and could not stop looking at him.",
  L12_task: "Light the way home: tap the stops of Guru Sahib Ji’s journey in order.",
  L12_steps: ["Meeting the Emperor in Delhi", "Goindwal Sahib", "The swept, garlanded streets of Amritsar", "Sri Akal Takht Sahib", "Sri Harmandar Sahib", "Home to Mata Ganga Ji"],
  L12_tip: "Light a deeva together tonight, and do an Ardas for everyone who is not free."
},

pa: {
 "lang_name": "ਪੰਜਾਬੀ",
 "lang_other": "English",
 "title": "ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਨਿਕਲੋ",
 "kicker": "ਬੰਦੀ ਛੋੜ ਦਿਵਸ · ਸਾਰੇ ਪਰਿਵਾਰ ਲਈ ਇੱਕ ਖੇਡ",
 "intro": "1619 ਵਿੱਚ ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੂੰ 52 ਰਾਜਿਆਂ ਸਮੇਤ ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਵਿੱਚ ਰੱਖਿਆ ਗਿਆ । ਬਾਰਾਂ ਛੋਟੇ ਪੜਾਵਾਂ ਵਿੱਚ ਇਹ ਸਾਖੀ ਖੇਡੋ । ਹਰ ਪੜਾਅ ਪੂਰਾ ਕਰਨ ਨਾਲ ਇੱਕ ਅੱਖਰ ਜਿੱਤੋ । ਬਾਰ੍ਹਾਂ ਹੀ ਇਕੱਠੇ ਕਰੋ, ਕੋਡ ਖੋਲ੍ਹੋ ਅਤੇ ਸਾਰੇ ਮਿਲ ਕੇ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਨਿਕਲੋ ।",
 "start": "ਖੇਡ ਸ਼ੁਰੂ ਕਰੋ",
 "resume": "ਅੱਗੇ ਚੱਲੋ",
 "restart": "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
 "how": "ਕਹਾਣੀ ਦਾ ਹਰ ਹਿੱਸਾ ਪੜ੍ਹੋ, ਫਿਰ ਖੇਡੋ । ਅਟਕ ਗਏ? ਹਰ ਪੜਾਅ ਵਿੱਚ ਇੱਕ ਇਸ਼ਾਰਾ ਹੈ । ਕਦੇ ਵੀ “ਖੇਡ ਖ਼ਤਮ” ਨਹੀਂ ਹੁੰਦੀ, ਬੱਸ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ।",
 "level": "ਪੜਾਅ",
 "of": "ਵਿੱਚੋਂ",
 "story": "ਕਹਾਣੀ",
 "read_more": "ਸਾਖੀ ਹੋਰ ਪੜ੍ਹੋ",
 "read_less": "ਘੱਟ ਦਿਖਾਓ",
 "play": "ਖੇਡੋ",
 "next": "ਅਗਲਾ ਪੜਾਅ",
 "hint": "ਇਸ਼ਾਰਾ",
 "try_again": "ਪੂਰਾ ਠੀਕ ਨਹੀਂ, ਫਿਰ ਕੋਸ਼ਿਸ਼ ਕਰੋ ।",
 "well_done": "ਸ਼ਾਬਾਸ਼!",
 "you_won": "ਤੁਸੀਂ ਇੱਕ ਅੱਖਰ ਜਿੱਤਿਆ",
 "parent_tip": "ਪਰਿਵਾਰ ਲਈ ਸੁਝਾਅ",
 "letters": "ਤੁਹਾਡੇ ਅੱਖਰ",
 "check": "ਜਾਂਚੋ",
 "reset_level": "ਇਹ ਪੜਾਅ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
 "final_title": "ਕੋਡ ਖੋਲ੍ਹੋ",
 "final_text": "ਇਹ ਤੁਹਾਡੇ ਬਾਰ੍ਹਾਂ ਅੱਖਰ ਹਨ, ਸਾਖੀ ਦੇ ਕ੍ਰਮ ਵਿੱਚ । ਇਹ ਕੀ ਬਣਾਉਂਦੇ ਹਨ?",
 "final_place": "ਕੋਡ ਲਿਖੋ",
 "final_wrong": "ਅੱਖਰ ਫਿਰ ਵੇਖੋ, ਇਹ ਤਿੰਨ ਸ਼ਬਦ ਹਨ ।",
 "final_right": "ਤੁਸੀਂ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਨਿਕਲ ਆਏ!",
 "meaning": "ਦਾਤਾ ਬੰਦੀ ਛੋੜ, ਯਾਨੀ “ਦਾਤਾ ਜੋ ਬੰਦੀਆਂ ਨੂੰ ਛੁਡਾਉਂਦੇ ਹਨ” । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਇਕੱਲੇ ਆਜ਼ਾਦ ਹੋਣ ਲਈ ਨਹੀਂ ਮੰਨੇ, ਅਤੇ ਸਾਰੇ 52 ਰਾਜਿਆਂ ਸਮੇਤ ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਬਾਹਰ ਆਏ ।",
 "cert_kicker": "ਸਰਟੀਫਿਕੇਟ",
 "cert_title": "ਅਸੀਂ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਨਿਕਲ ਆਏ!",
 "cert_name": "ਤੁਹਾਡਾ ਨਾਂ ਜਾਂ ਪਰਿਵਾਰ ਦਾ ਨਾਂ",
 "cert_for": "ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ, ਦਾਤਾ ਬੰਦੀ ਛੋੜ, ਦੀ ਸਾਖੀ ਖੇਡਣ ਲਈ, ਜੋ ਸਾਰੇ 52 ਰਾਜਿਆਂ ਤੋਂ ਬਿਨਾਂ ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਨਹੀਂ ਗਏ ।",
 "print": "ਸਰਟੀਫਿਕੇਟ ਛਾਪੋ ਜਾਂ ਸਾਂਭੋ",
 "again": "ਦੁਬਾਰਾ ਖੇਡੋ",
 "closing": "ਅੱਜ ਰਾਤ ਜਦੋਂ ਤੁਸੀਂ ਦੀਵਾ ਜਗਾਓ, ਤਾਂ ਉਨ੍ਹਾਂ 52 ਰਾਜਿਆਂ ਨੂੰ ਯਾਦ ਕਰੋ ਜੋ ਇਕੱਠੇ ਬਾਹਰ ਆਏ । ਇਸ ਹਫ਼ਤੇ ਤੁਸੀਂ ਕਿਸ ਨੂੰ “ਆਜ਼ਾਦ” ਕਰਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ? ਕੋਈ ਦੋਸਤ ਜੋ ਇਕੱਲਾ ਰਹਿ ਗਿਆ, ਕੋਈ ਇਕੱਲਾ ਮਹਿਸੂਸ ਕਰਦਾ ਜਾਂ ਕੋਈ ਜਿਸ ਨੂੰ ਤੰਗ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ?",
 "source": "ਇਹ ਸਾਖੀ ਭਾਈ ਸੰਤੋਖ ਸਿੰਘ ਜੀ ਦੇ ਸ੍ਰੀ ਗੁਰ ਪ੍ਰਤਾਪ ਸੂਰਜ ਗ੍ਰੰਥ ਅਨੁਸਾਰ ਹੈ । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦੀ ਕੋਈ ਤਸਵੀਰ ਨਹੀਂ ਵਰਤੀ ਗਈ । ਇਹ ਖੇਡ ਤੁਹਾਡੇ ਬਾਰੇ ਕੁਝ ਵੀ ਨਹੀਂ ਸਾਂਭਦੀ । ਤੁਹਾਡੀ ਪ੍ਰਗਤੀ ਸਿਰਫ਼ ਇਸੇ ਡਿਵਾਈਸ ਉੱਤੇ ਰਹਿੰਦੀ ਹੈ ।",
 "L1_title": "ਦੋ ਤਲਵਾਰਾਂ",
 "L1_story": "ਸ੍ਰੀ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ: ਮੀਰੀ ਸੰਸਾਰ ਲਈ ਅਤੇ ਪੀਰੀ ਆਤਮਾ ਲਈ । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਕੀਤੀ । ਲੋਕ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸੱਚਾ ਪਾਤਸ਼ਾਹ ਆਖਦੇ ਸਨ ।",
 "L1_more": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਸਿੱਖਾਂ ਨੂੰ ਘੋੜੇ ਅਤੇ ਸ਼ਸਤਰ ਲਿਆਉਣ ਅਤੇ ਸਵਾਰੀ ਤੇ ਅਭਿਆਸ ਸਿੱਖਣ ਲਈ ਆਖਿਆ, ਤਾਂ ਜੋ ਉਹ ਆਪਣੀ ਅਤੇ ਹੋਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰ ਸਕਣ । ਤਖ਼ਤ ਤੋਂ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਇੱਕ ਸੱਚੇ ਪਾਤਸ਼ਾਹ ਵਾਂਗ ਸੰਗਤ ਦੀਆਂ ਮੁਸ਼ਕਲਾਂ ਸੁਣਦੇ ਸਨ । ਇਸ ਨਾਲ ਮੁਗ਼ਲ ਦਰਬਾਰ ਦੇ ਕੁਝ ਲੋਕ ਚਿੰਤਾ ਵਿੱਚ ਪੈ ਗਏ ।",
 "L1_task": "ਲੋਕ ਆਪਣੀਆਂ ਮੁਸ਼ਕਲਾਂ ਤਖ਼ਤ ਕੋਲ ਲਿਆਉਂਦੇ ਹਨ । ਹਰ ਇੱਕ ਨੂੰ ਮੀਰੀ ਚਾਹੀਦੀ ਹੈ, ਪੀਰੀ, ਜਾਂ ਦੋਵੇਂ?",
 "L1_opts": [
  "ਮੀਰੀ",
  "ਪੀਰੀ",
  "ਦੋਵੇਂ"
 ],
 "L1_items": [
  [
   "ਨੇੜੇ ਦੇ ਇੱਕ ਪਰਿਵਾਰ ਕੋਲ ਇਸ ਹਫ਼ਤੇ ਖਾਣ ਨੂੰ ਕੁਝ ਨਹੀਂ ।",
   0,
   "ਮੀਰੀ ਦਾ ਮਤਲਬ ਸੰਸਾਰ ਵਿੱਚ ਕੰਮ ਕਰਨਾ ਹੈ: ਭੋਜਨ ਵੰਡੋ, ਉਨ੍ਹਾਂ ਨੂੰ ਲੰਗਰ ਵਿੱਚ ਲਿਆਓ ।"
  ],
  [
   "ਕੋਈ ਆਪਣਾ ਨਿੱਤਨੇਮ ਭੁੱਲਦਾ ਰਹਿੰਦਾ ਹੈ ।",
   1,
   "ਪੀਰੀ ਆਤਮਾ ਦੀ ਗੱਲ ਹੈ: ਗੁਰਬਾਣੀ ਲਈ ਸਮਾਂ ਕੱਢਣ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੀ ਮਦਦ ਕਰੋ ।"
  ],
  [
   "ਇੱਕ ਮੁੰਡੇ ਨੂੰ ਪਟਕੇ ਕਰਕੇ ਹਰ ਰੋਜ਼ ਤੰਗ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ।",
   2,
   "ਦੋਵੇਂ: ਉਸ ਦੇ ਹੱਕ ਵਿੱਚ ਖੜ੍ਹੋ (ਮੀਰੀ) ਅਤੇ ਅਰਦਾਸ ਨਾਲ ਸ਼ਾਂਤ ਰਹੋ (ਪੀਰੀ) ।"
  ],
  [
   "ਇੱਕ ਦੁਕਾਨਦਾਰ ਬਜ਼ੁਰਗਾਂ ਨਾਲ ਠੱਗੀ ਮਾਰਦਾ ਹੈ ।",
   0,
   "ਮੀਰੀ: ਬੋਲੋ, ਅਤੇ ਕਿਸੇ ਅਜਿਹੇ ਨੂੰ ਦੱਸੋ ਜੋ ਇਹ ਰੋਕ ਸਕੇ ।"
  ],
  [
   "ਮੈਨੂੰ ਹਰ ਵੇਲੇ ਗੁੱਸਾ ਆਉਂਦਾ ਰਹਿੰਦਾ ਹੈ ।",
   1,
   "ਪੀਰੀ: ਸਿਮਰਨ ਅਤੇ ਗੁਰਬਾਣੀ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਦੇ ਹਨ ।"
  ],
  [
   "ਇੱਕ ਦੋਸਤ ਦਾ ਮਜ਼ਾਕ ਉਡਾਇਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉਹ ਆਪਣੇ ਕੇਸ ਕੱਟਣਾ ਚਾਹੁੰਦਾ ਹੈ ।",
   2,
   "ਦੋਵੇਂ: ਉਸ ਦੀ ਰੱਖਿਆ ਕਰੋ, ਅਤੇ ਉਸ ਨੂੰ ਯਾਦ ਕਰਾਓ ਕਿ ਕੇਸ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹਨ ।"
  ]
 ],
 "L1_tip": "ਇੱਕ ਦੂਜੇ ਨੂੰ ਪੁੱਛੋ: ਤੁਹਾਨੂੰ ਮੀਰੀ ਦੀ ਲੋੜ ਆਖ਼ਰੀ ਵਾਰ ਕਦੋਂ ਪਈ, ਯਾਨੀ ਕੁਝ ਕਰਨ ਦੀ ਹਿੰਮਤ? ਪੀਰੀ ਦੀ ਲੋੜ ਕਦੋਂ ਪਈ, ਯਾਨੀ ਸ਼ਾਂਤੀ ਅਤੇ ਸਿਮਰਨ?",
 "L2_title": "ਚੰਦੂ ਦੀਆਂ ਚੁਗ਼ਲੀਆਂ",
 "L2_story": "ਚੰਦੂ, ਬਾਦਸ਼ਾਹ ਦੇ ਦਰਬਾਰ ਦਾ ਇੱਕ ਹੰਕਾਰੀ ਬੰਦਾ, ਗੁਰੂ ਘਰ ਨਾਲ ਵੈਰ ਰੱਖਦਾ ਸੀ । ਉਹ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੇ ਕੰਨ ਵਿੱਚ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਬਾਰੇ ਝੂਠ ਫੂਕਦਾ ਰਿਹਾ ।",
 "L2_more": "ਚੰਦੂ ਆਪਣੀ ਧੀ ਦਾ ਵਿਆਹ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨਾਲ ਕਰਨਾ ਚਾਹੁੰਦਾ ਸੀ, ਪਰ ਉਸ ਦੇ ਬੋਲਾਂ ਨੇ ਗੁਰੂ ਘਰ ਦਾ ਅਪਮਾਨ ਕੀਤਾ ਅਤੇ ਰਿਸ਼ਤਾ ਨਾਮਨਜ਼ੂਰ ਹੋ ਗਿਆ । ਉਸ ਨੇ ਇਹ ਕਦੇ ਮਾਫ਼ ਨਾ ਕੀਤਾ, ਅਤੇ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਉੱਤੇ ਤਸੀਹਿਆਂ ਵਿੱਚ ਉਸ ਦਾ ਵੱਡਾ ਹੱਥ ਸੀ । ਹੁਣ ਉਸ ਨੇ ਆਪਣਾ ਵੈਰ ਨੌਜਵਾਨ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਵੱਲ ਮੋੜ ਲਿਆ ।",
 "L2_task": "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੁਝ ਵਾਕ ਸੱਚੇ ਹਨ । ਕੁਝ ਚੰਦੂ ਦੇ ਝੂਠ ਹਨ । ਕੀ ਤੁਸੀਂ ਦੱਸ ਸਕਦੇ ਹੋ ਕਿਹੜੇ ਕਿਹੜੇ?",
 "L2_opts": [
  "ਸੱਚ",
  "ਚੰਦੂ ਦਾ ਝੂਠ"
 ],
 "L2_items": [
  [
   "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ, ਮੀਰੀ ਅਤੇ ਪੀਰੀ ।",
   0,
   "ਸੱਚ, ਮੀਰੀ ਅਤੇ ਪੀਰੀ ।"
  ],
  [
   "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਬਾਦਸ਼ਾਹ ਦਾ ਤਖ਼ਤ ਲੈਣਾ ਚਾਹੁੰਦੇ ਹਨ ।",
   1,
   "ਇਹ ਚੰਦੂ ਦਾ ਝੂਠ ਸੀ, ਜਹਾਂਗੀਰ ਨੂੰ ਡਰਾਉਣ ਲਈ ।"
  ],
  [
   "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਕੀਤੀ ।",
   0,
   "ਸੱਚ ।"
  ],
  [
   "ਸਿੱਖ ਦਿੱਲੀ ਉੱਤੇ ਹਮਲੇ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਹਨ ।",
   1,
   "ਝੂਠ । ਚੰਦੂ ਚਾਹੁੰਦਾ ਸੀ ਕਿ ਬਾਦਸ਼ਾਹ ਡਰੇ ।"
  ],
  [
   "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਸੰਗਤ ਦੀਆਂ ਮੁਸ਼ਕਲਾਂ ਸੁਣਦੇ ਸਨ ।",
   0,
   "ਸੱਚ, ਇੱਕ ਸੱਚੇ ਪਾਤਸ਼ਾਹ ਵਾਂਗ ।"
  ],
  [
   "ਸਭ ਦੀ ਭਲਾਈ ਲਈ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਕੈਦ ਕਰ ਦੇਣਾ ਚਾਹੀਦਾ ਹੈ ।",
   1,
   "ਚੰਦੂ ਦਾ ਝੂਠ । ਉਹ ਤਾਂ ਬੱਸ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਰਾਹ ਵਿੱਚੋਂ ਹਟਾਉਣਾ ਚਾਹੁੰਦਾ ਸੀ ।"
  ]
 ],
 "L2_tip": "ਚੰਦੂ ਦਾ ਕੰਮ ਚੁਗ਼ਲੀਆਂ ਨਾਲ ਚੱਲਦਾ ਸੀ । ਗੱਲ ਕਰੋ: ਜਦੋਂ ਅਸੀਂ ਕਿਸੇ ਬਾਰੇ ਅਫ਼ਵਾਹ ਸੁਣਦੇ ਹਾਂ ਤਾਂ ਅਸੀਂ ਕੀ ਕਰੀਏ?",
 "L3_title": "ਜੋਤਸ਼ੀ ਦੀ ਚਾਲ",
 "L3_story": "ਚੰਦੂ ਨੇ ਬਾਦਸ਼ਾਹ ਦੇ ਜੋਤਸ਼ੀ ਨੂੰ 500 ਸਿੱਕੇ ਦਿੱਤੇ ਅਤੇ 5,000 ਹੋਰ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕੀਤਾ, ਤਾਂ ਜੋ ਉਹ ਜਹਾਂਗੀਰ ਨੂੰ ਡਰਾਵੇ: “ਇੱਕ ਪਵਿੱਤਰ ਪੁਰਖ ਨੂੰ ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਵਿੱਚ ਚਾਲੀ ਦਿਨ ਤੁਹਾਡੇ ਲਈ ਪ੍ਰਾਰਥਨਾ ਕਰਨੀ ਪਵੇਗੀ ।” ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਜਾਣਦੇ ਸਨ ਕਿ ਇਹ ਚਾਲ ਹੈ, ਫਿਰ ਵੀ ਗਏ ।",
 "L3_more": "ਜਹਾਂਗੀਰ ਇੰਨਾ ਡਰ ਗਿਆ ਕਿ ਉਸ ਨੇ ਖਾਣਾ ਛੱਡ ਦਿੱਤਾ । ਫਿਰ, ਯੋਜਨਾ ਅਨੁਸਾਰ ਹੀ, ਚੰਦੂ ਦੇ ਸਾਥੀਆਂ ਨੇ ਕਿਹਾ ਕਿ ਸਿਰਫ਼ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ ਹੀ ਇੰਨੇ ਪਵਿੱਤਰ ਹਨ । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਫ਼ਰਮਾਇਆ, “ਜੇ ਸਾਡੇ ਕਿਲ੍ਹੇ ਵਿੱਚ ਜਾਣ ਨਾਲ ਤੁਹਾਡਾ ਭਲਾ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਅਸੀਂ ਜਾਵਾਂਗੇ ।” ਸਿੱਖ ਜੋਤਸ਼ ਨੂੰ ਨਹੀਂ ਮੰਨਦੇ । ਸਾਡੀ ਜ਼ਿੰਦਗੀ ਵਾਹਿਗੁਰੂ ਦੇ ਹੁਕਮ ਵਿੱਚ ਚੱਲਦੀ ਹੈ, ਤਾਰਿਆਂ ਦੇ ਨਹੀਂ ।",
 "L3_task": "ਜੋਤਸ਼ੀ ਦੀ ਕਿਤਾਬ ਚੰਦੂ ਦੇ ਗੁਪਤ ਕੋਡ ਵਿੱਚ ਲਿਖੀ ਹੈ । ਹਰ ਸ਼ਬਦ ਪੁੱਠਾ ਹੈ । ਇਸ ਨੂੰ ਖੋਲ੍ਹੋ!",
 "L3_words": [
  [
   "ROILAWG",
   0,
   [
    "GWALIOR",
    "GOLDEN",
    "GRAVEL"
   ]
  ],
  [
   "TROF",
   1,
   [
    "FARM",
    "FORT",
    "FIRE"
   ]
  ],
  [
   "YTROF",
   2,
   [
    "FIFTY",
    "FOURTEEN",
    "FORTY"
   ]
  ],
  [
   "SYAD",
   0,
   [
    "DAYS",
    "DOGS",
    "DUST"
   ]
  ],
  [
   "UDNAHC",
   1,
   [
    "HARI DAS",
    "CHANDU",
    "WAZIR KHAN"
   ]
  ]
 ],
 "L3_who": "ਅਤੇ ਜੋਤਸ਼ੀ ਨੂੰ ਪੈਸੇ ਕਿਸ ਨੇ ਦਿੱਤੇ? ਪੁੱਠਾ ਪੜ੍ਹੋ:",
 "L3_hint": "ਅੱਖਰ ਸੱਜੇ ਸਿਰੇ ਤੋਂ ਖੱਬੇ ਵੱਲ ਪੜ੍ਹੋ ।",
 "L3_tip": "ਸਿੱਖ ਜੋਤਸ਼ ਜਾਂ ਸ਼ੁਭ ਤਾਰਿਆਂ ਨੂੰ ਨਹੀਂ ਮੰਨਦੇ । ਪੁੱਛੋ: ਹੁਕਮ ਵਿੱਚ ਜਿਊਣ ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
 "L4_title": "ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਵਿੱਚ",
 "L4_story": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਸਿਰਫ਼ ਪੰਜ ਸਿੱਖਾਂ ਨਾਲ ਗਵਾਲੀਅਰ ਗਏ । ਕਿਲ੍ਹਾ ਇੱਕ ਵੱਡੀ ਪਹਾੜੀ ਉੱਤੇ ਸੀ, ਜਿੱਥੇ ਰਾਜਿਆਂ ਨੂੰ ਉਮਰ ਭਰ ਲਈ ਭੇਜਿਆ ਜਾਂਦਾ ਸੀ । ਇਸ ਦਾ ਕਿਲ੍ਹੇਦਾਰ ਹਰਿਦਾਸ ਗੁਰੂ ਘਰ ਨਾਲ ਪ੍ਰੇਮ ਰੱਖਦਾ ਸੀ ਅਤੇ ਉਸ ਨੇ ਹੱਥ ਜੋੜ ਕੇ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਜੀ ਆਇਆਂ ਨੂੰ ਆਖਿਆ ।",
 "L4_more": "ਹਰਿਦਾਸ ਨੇ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਕਿਲ੍ਹੇ ਵਿੱਚ ਸਭ ਤੋਂ ਵਧੀਆ ਥਾਂ ਦਿੱਤੀ ਅਤੇ ਕਿਹਾ, “ਮੈਂ ਤੁਹਾਡੇ ਦਰਸ਼ਨਾਂ ਲਈ ਤਰਸਦਾ ਸੀ ।” ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਉਸ ਨੂੰ ਆਸ਼ੀਰਵਾਦ ਦਿੱਤਾ: ਜੋ ਵੀ ਗੁਰੂ ਘਰ ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਰੱਖਦਾ ਹੈ, ਉਸ ਨੂੰ ਦੋਹਾਂ ਲੋਕਾਂ ਵਿੱਚ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਹੈ । ਅੱਜ ਕਿਲ੍ਹੇ ਵਿੱਚ ਗੁਰਦੁਆਰਾ ਦਾਤਾ ਬੰਦੀ ਛੋੜ ਸਾਹਿਬ ਸੁਸ਼ੋਭਿਤ ਹੈ ।",
 "L4_task": "ਗਵਾਲੀਅਰ ਦੇ ਕਿਲ੍ਹੇ ਦੀ ਕੰਧ ਬਣਾਓ! ਹਰ ਪੱਥਰ ਸੁੱਟਣ ਲਈ ਦਬਾਓ, ਤਾਂ ਜੋ ਉਹ ਹੇਠਲੇ ਪੱਥਰ ਉੱਤੇ ਟਿਕੇ । ਛੇ ਕਤਾਰਾਂ ਬਣਾਓ ।",
 "L4_drop": "ਪੱਥਰ ਸੁੱਟੋ",
 "L4_fell": "ਪੱਥਰ ਖੁੰਝ ਗਿਆ, ਕੰਧ ਡਿੱਗ ਪਈ । ਫਿਰ ਬਣਾਓ!",
 "L4_rows": "ਕਤਾਰਾਂ",
 "L4_tip": "ਕਿਲ੍ਹਾ ਮਜ਼ਬੂਤ ਸੀ, ਪਰ ਹਰਿਦਾਸ ਦਾ ਪ੍ਰੇਮ ਉਸ ਤੋਂ ਵੀ ਮਜ਼ਬੂਤ ਸੀ । ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਵਿੱਚ ਮਹਿਮਾਨਾਂ ਦਾ ਨਿੱਘਾ ਸੁਆਗਤ ਕੌਣ ਕਰਦਾ ਹੈ?",
 "L5_title": "ਸਾਰੀ ਰਾਤ ਦੀ ਸੱਚੀ ਕਿਰਤ",
 "L5_story": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਸਿਰਫ਼ ਸੱਚੀ ਕਿਰਤ ਦੀ ਕਮਾਈ ਦਾ ਭੋਜਨ ਛਕਦੇ ਸਨ । ਭਾਈ ਜੇਠਾ ਜੀ ਅਤੇ ਭਾਈ ਪਿਰਾਣਾ ਜੀ ਨੇ ਸਾਰੀ ਰਾਤ ਇੱਕ ਘੁਮਿਆਰ ਲਈ ਭਾਂਡੇ ਘੜੇ ਅਤੇ ਇੱਕ-ਇੱਕ ਚਾਂਦੀ ਦਾ ਸਿੱਕਾ ਕਮਾਇਆ ।",
 "L5_more": "ਬਾਦਸ਼ਾਹ ਨੇ ਭੋਜਨ ਭੇਜਿਆ, ਅਤੇ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਉਹ ਕਿਲ੍ਹੇ ਵਿੱਚ ਸਭ ਨੂੰ ਛਕਾ ਦਿੱਤਾ, ਪਰ ਆਪ ਨਹੀਂ ਛਕਿਆ । ਆਪਣੇ ਦੋ ਸਿੱਕਿਆਂ ਨਾਲ ਸਿੱਖਾਂ ਨੇ ਆਟਾ, ਚੌਲ, ਘਿਓ, ਖੰਡ ਅਤੇ ਦੁੱਧ ਖ਼ਰੀਦਿਆ, ਅਤੇ ਹਰ ਰੋਜ਼ ਆਪਣੇ ਹੱਥੀਂ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਲਈ ਪ੍ਰਸ਼ਾਦਾ ਤਿਆਰ ਕੀਤਾ ।",
 "L5_task": "ਤੁਸੀਂ 2 ਚਾਂਦੀ ਦੇ ਸਿੱਕੇ ਕਮਾਏ । ਉਹ ਪੰਜ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦੋ ਜੋ ਸਿੱਖਾਂ ਨੇ ਖ਼ਰੀਦੀਆਂ, ਅਤੇ ਠੀਕ 2 ਸਿੱਕੇ ਖ਼ਰਚੋ ।",
 "L5_shop": [
  [
   "ਆਟਾ",
   "½",
   0.5,
   1
  ],
  [
   "ਚੌਲ",
   "½",
   0.5,
   1
  ],
  [
   "ਘਿਓ",
   "½",
   0.5,
   1
  ],
  [
   "ਖੰਡ",
   "¼",
   0.25,
   1
  ],
  [
   "ਦੁੱਧ",
   "¼",
   0.25,
   1
  ],
  [
   "ਵਧੀਆ ਮਠਿਆਈ",
   "1",
   1,
   0
  ],
  [
   "ਮਹੀਨ ਰੇਸ਼ਮ",
   "2",
   2,
   0
  ]
 ],
 "L5_coins": "ਸਿੱਕੇ",
 "L5_basket": "ਤੁਹਾਡੀ ਟੋਕਰੀ ਵਿੱਚ",
 "L5_pay": "ਭੁਗਤਾਨ ਕਰੋ",
 "L5_over": "ਇਹ 2 ਸਿੱਕਿਆਂ ਤੋਂ ਵੱਧ ਹੈ ।",
 "L5_wrong": "ਇਹ ਉਹ ਪੰਜ ਚੀਜ਼ਾਂ ਨਹੀਂ ਜੋ ਸਿੱਖਾਂ ਨੇ ਖ਼ਰੀਦੀਆਂ । ਵਧੀਆ ਮਠਿਆਈ ਅਤੇ ਰੇਸ਼ਮ ਉਨ੍ਹਾਂ ਦੀ ਸੂਚੀ ਵਿੱਚ ਨਹੀਂ ਸਨ ।",
 "L5_tip": "ਕਿਰਤ ਦਾ ਮਤਲਬ ਇਮਾਨਦਾਰੀ ਨਾਲ ਕਮਾਉਣਾ ਹੈ । ਘਰ ਵਿੱਚ ਇਸ ਹਫ਼ਤੇ ਤੁਹਾਡੇ ਵਿੱਚੋਂ ਹਰ ਕੋਈ ਕਿਹੜੀ ਸੱਚੀ ਕਿਰਤ ਕਰ ਸਕਦਾ ਹੈ?",
 "L6_title": "ਜ਼ਹਿਰੀਲਾ ਚੋਲਾ",
 "L6_story": "ਚੰਦੂ ਨੇ ਜ਼ਹਿਰ ਵਿੱਚ ਭਿੱਜਿਆ ਇੱਕ ਚੋਲਾ ਭੇਜਿਆ, ਇਹ ਆਖ ਕੇ ਕਿ ਇਹ ਬਾਦਸ਼ਾਹ ਵੱਲੋਂ ਤੋਹਫ਼ਾ ਹੈ । ਹਰਿਦਾਸ ਨੇ ਚਿੱਠੀ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਪੜ੍ਹ ਕੇ ਸੁਣਾਈ ਅਤੇ ਚੋਲਾ ਅੱਗ ਵਿੱਚ ਸੁੱਟ ਦਿੱਤਾ ।",
 "L6_more": "ਚੰਦੂ ਨੇ ਹਰਿਦਾਸ ਨੂੰ 5,000 ਸਿੱਕੇ, ਉੱਚਾ ਅਹੁਦਾ ਅਤੇ ਪੂਰੇ ਪਿੰਡ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕੀਤਾ । ਹਰਿਦਾਸ ਨੇ ਚੰਦੂ ਦੇ ਦੂਤ ਨੂੰ ਕਿਹਾ, “ਘਰ ਜਾਓ । ਅਜਿਹਾ ਪਾਪ ਸਾਡੇ ਤੋਂ ਕਦੇ ਨਹੀਂ ਹੋਵੇਗਾ ।” ਜ਼ਹਿਰੀਲਾ ਚੋਲਾ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਕਦੇ ਛੂਹਿਆ ਤੱਕ ਨਹੀਂ ।",
 "L6_task": "ਕਿਲ੍ਹੇ ਵਿੱਚ ਚਾਰ ਚੋਲੇ ਆਏ ਹਨ । ਸਿਰਫ਼ ਇੱਕ ਸੁਰੱਖਿਅਤ ਹੈ । ਇਸ਼ਾਰਿਆਂ ਨਾਲ ਸੱਚਾ ਚੋਲਾ ਲੱਭੋ ।",
 "L6_clues": [
  "ਚੰਦੂ ਦਾ ਤੋਹਫ਼ਾ ਚਮਕੀਲਾ ਅਤੇ ਸੋਨੇ ਨਾਲ ਜੜਿਆ ਸੀ । ਸੱਚਾ ਚੋਲਾ ਸਾਦਾ ਹੈ ।",
  "ਸੱਚੇ ਚੋਲੇ ਦੀਆਂ ਦੋ ਲੰਮੀਆਂ ਬਾਹਾਂ ਹਨ । ਇੱਕ ਦਿਨ ਦੋ ਰਾਜੇ ਇਨ੍ਹਾਂ ਨੂੰ ਫੜਨਗੇ ।",
  "ਚੰਦੂ ਦੇ ਚੋਲੇ ਉੱਤੇ ਇੱਕ ਪਰਚੀ ਹੈ: “ਇਸ ਨੂੰ ਹੁਣੇ ਪਹਿਨੋ!”"
 ],
 "L6_more_clue": "ਇੱਕ ਹੋਰ ਇਸ਼ਾਰਾ",
 "L6_poison": "ਜ਼ਹਿਰੀਲਾ! ਇਸ ਨੂੰ ਸੁੱਟ ਦਿਓ, ਇਹ ਚੰਦੂ ਦਾ ਚੋਲਾ ਹੈ ।",
 "L6_labels": [
  "“ਬਾਦਸ਼ਾਹ ਵੱਲੋਂ ਤੋਹਫ਼ਾ!”",
  "“ਇਸ ਨੂੰ ਹੁਣੇ ਪਹਿਨੋ!”",
  "",
  "“ਕਿੰਨਾ ਮਹੀਨ ਤੇ ਨਰਮ, ਅੱਜ ਰਾਤ ਹੀ ਪਹਿਨੋ!”"
 ],
 "L6_tip": "ਹਰਿਦਾਸ ਨੇ ਸਹੀ ਕੰਮ ਕਰਨ ਲਈ 5,000 ਸਿੱਕਿਆਂ ਨੂੰ ਨਾਂਹ ਕਰ ਦਿੱਤੀ । ਕੀ ਤੁਸੀਂ ਕਦੇ ਕਿਸੇ ਲਲਚਾਉਣ ਵਾਲੀ ਚੀਜ਼ ਨੂੰ ਇਸ ਲਈ ਨਾਂਹ ਕੀਤੀ ਕਿ ਉਹ ਗ਼ਲਤ ਸੀ?",
 "L7_title": "52 ਰਾਜੇ",
 "L7_story": "52 ਰਾਜੇ ਉਮਰ ਭਰ ਲਈ ਕਿਲ੍ਹੇ ਵਿੱਚ ਬੰਦ ਸਨ । ਵਾਲਾਂ ਵਿੱਚ ਜੂੰਆਂ, ਫਟੇ ਕੱਪੜੇ, ਪੈਰਾਂ ਵਿੱਚ ਭਾਰੀ ਬੇੜੀਆਂ । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦੇ ਨਾਲ ਉਨ੍ਹਾਂ ਨੂੰ ਆਸ ਮਿਲੀ ਅਤੇ ਉਹ ਇੱਕ ਸੰਗਤ ਬਣ ਗਏ ।",
 "L7_more": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਭੋਜਨ ਛਕਾਇਆ, ਉਨ੍ਹਾਂ ਕੋਲ ਬੈਠੇ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਹੌਸਲਾ ਦਿੱਤਾ । ਜਦੋਂ ਉਨ੍ਹਾਂ ਨੂੰ ਪਿੱਛੇ ਰਹਿ ਜਾਣ ਦਾ ਡਰ ਲੱਗਿਆ, ਤਾਂ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਵਚਨ ਦਿੱਤਾ, “ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਾਰਿਆਂ ਨੂੰ ਆਪਣੇ ਨਾਲ ਲੈ ਜਾਵਾਂਗੇ, ਨਹੀਂ ਤਾਂ ਅਸੀਂ ਵੀ ਇੱਥੇ ਹੀ ਰਹਾਂਗੇ । ਸਤਿਨਾਮ ਨੂੰ ਯਾਦ ਰੱਖੋ ।”",
 "L7_task": "ਕਿਲ੍ਹੇ ਵਿੱਚ ਜੋੜੀਦਾਰ ਇੱਕ ਦੂਜੇ ਨੂੰ ਆਜ਼ਾਦ ਕਰਾਉਂਦੇ ਹਨ । ਇੱਕ ਵਾਰ ਵਿੱਚ ਦੋ ਪੱਤੇ ਪਲਟੋ ਅਤੇ ਹਰ ਜੋੜੀ ਲੱਭੋ ।",
 "L7_moves": "ਕੋਸ਼ਿਸ਼ਾਂ",
 "L7_tip": "ਰਾਜੇ ਇਕੱਠੇ ਆਜ਼ਾਦ ਹੋਏ । ਤੁਹਾਡੀ ਸੰਗਤ ਵਿੱਚ ਕਿਸ ਨੂੰ ਇਸ ਵੇਲੇ ਇੱਕ ਦੋਸਤ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ?",
 "L8_title": "ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਅਤੇ ਚੌਂਕੀ",
 "L8_story": "ਮਾਤਾ ਗੰਗਾ ਜੀ ਨੇ ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਨੂੰ ਗਵਾਲੀਅਰ ਤੱਕ ਭੇਜਿਆ । ਬਾਬਾ ਬੁੱਢਾ ਜੀ ਨੇ ਚੌਂਕੀ ਸ਼ੁਰੂ ਕੀਤੀ, ਅਤੇ ਉਹ ਅੱਜ ਵੀ ਹਰ ਸ਼ਾਮ ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਦੀ ਪਰਕਰਮਾ ਕਰਦੀ ਹੈ ।",
 "L8_more": "ਸੰਗਤਾਂ ਸ਼ਬਦ ਗਾਉਂਦੀਆਂ ਗਵਾਲੀਅਰ ਤੱਕ ਪੈਦਲ ਗਈਆਂ ਅਤੇ ਕਿਲ੍ਹੇ ਦੀਆਂ ਕੰਧਾਂ ਅੱਗੇ ਸੀਸ ਨਿਵਾਇਆ । ਅੱਜ ਚੌਂਕੀ ਰਹਿਰਾਸ ਤੋਂ ਬਾਅਦ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਤੋਂ ਨਿਕਲਦੀ ਹੈ, ਨਿਸ਼ਾਨ ਸਾਹਿਬ ਅਤੇ ਮਸ਼ਾਲਾਂ ਨਾਲ, ਦੋ ਹਿੱਸਿਆਂ ਵਿੱਚ ਗਾਉਂਦੀ ਹੋਈ । (ਇਨਸਾਈਕਲੋਪੀਡੀਆ ਆਫ਼ ਸਿੱਖਇਜ਼ਮ ਇਸ ਨੂੰ ਗਵਾਲੀਅਰ ਨਾਲ ਜੋੜਦਾ ਹੈ । ਸੂਰਜ ਪ੍ਰਕਾਸ਼ ਇਸ ਦੀ ਸ਼ੁਰੂਆਤ ਕੁਝ ਬਾਅਦ ਦੀ ਦੱਸਦਾ ਹੈ ।)",
 "L8_task": "ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਦੀ ਸ਼ਾਮ ਦੀ ਚੌਂਕੀ ਨੂੰ ਕ੍ਰਮ ਵਿੱਚ ਲਾਓ । ਕਦਮਾਂ ਨੂੰ ਪਹਿਲੇ ਤੋਂ ਆਖ਼ਰੀ ਤੱਕ ਦਬਾਓ ।",
 "L8_steps": [
  "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਵਿਖੇ ਰਹਿਰਾਸ",
  "ਸੰਗਤ ਨਿਸ਼ਾਨ ਸਾਹਿਬ ਅਤੇ ਸ੍ਰੀ ਸਾਹਿਬ ਲੈਂਦੀ ਹੈ",
  "ਅਰਦਾਸ",
  "ਪਰਕਰਮਾ ਵਿੱਚ ਦੋ ਹਿੱਸਿਆਂ ਵਿੱਚ ਗਾਉਂਦੇ ਹੋਏ",
  "ਅਰਦਾਸ ਲਈ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਅੰਦਰ",
  "ਵਾਪਸ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ"
 ],
 "L8_tip": "ਜੇ ਹੋ ਸਕੇ, ਸ੍ਰੀ ਦਰਬਾਰ ਸਾਹਿਬ ਤੋਂ ਸਿੱਧੇ ਪ੍ਰਸਾਰਨ ਉੱਤੇ ਸ਼ਾਮ ਦੀ ਚੌਂਕੀ ਇਕੱਠੇ ਵੇਖੋ ।",
 "L9_title": "ਦੋ ਸ਼ੇਰ ਅਤੇ ਇੱਕ ਹਕੀਮ",
 "L9_story": "ਭਾਈ ਜੇਠਾ ਜੀ ਅਤੇ ਭਾਈ ਪਿਰਾਣਾ ਜੀ ਰਾਤ ਨੂੰ ਦੋ ਸ਼ੇਰਾਂ ਵਜੋਂ ਜਹਾਂਗੀਰ ਕੋਲ ਆਏ । ਫਿਰ ਭਾਈ ਜੇਠਾ ਜੀ ਹਕੀਮ ਬਣ ਕੇ ਆਏ: “ਗੁਰੂ ਜੀ ਨੂੰ ਆਜ਼ਾਦ ਕਰੋ, ਤਾਂ ਡਰ ਮੁੱਕ ਜਾਵੇਗਾ ।”",
 "L9_more": "ਜਹਾਂਗੀਰ ਚੀਕ ਉੱਠਿਆ, “ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ, ਮੈਨੂੰ ਬਚਾਓ!” ਅਤੇ ਸ਼ੇਰਾਂ ਨੇ ਕਿਹਾ, “ਗੁਰੂ ਜੀ ਨੇ ਤੈਨੂੰ ਬਚਾ ਲਿਆ ਹੈ । ਇਹ ਕਦੇ ਨਾ ਭੁੱਲੀਂ ।” ਪਰ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਇਸ ਗੱਲ ਤੋਂ ਪ੍ਰਸੰਨ ਨਹੀਂ ਹੋਏ ਕਿ ਕਰਾਮਾਤ ਵਿਖਾਈ ਗਈ । ਦਰਿਆ ਵਿੱਚੋਂ ਘੜਾ ਭਰ ਲਓ ਤਾਂ ਦਰਿਆ ਘਟਦਾ ਨਹੀਂ । ਸਿੱਖ ਗੁਰੂ ਘਰ ਦੀ ਸ਼ਕਤੀ ਅੰਦਰ ਰੱਖਦਾ ਹੈ ਅਤੇ ਉਸ ਦਾ ਵਿਖਾਵਾ ਨਹੀਂ ਕਰਦਾ ।",
 "L9_task": "ਸ਼ੇਰ ਬਣ ਕੇ ਸੁੱਤੇ ਹੋਏ ਬਾਦਸ਼ਾਹ ਵੱਲ ਚੁੱਪਚਾਪ ਵਧੋ । ਵਧਣ ਲਈ ਬਟਨ ਦੱਬੀ ਰੱਖੋ, ਪਰ ਜਦੋਂ ਉਹ ਜਾਗੇ ਅਤੇ ਤੱਕੇ ਤਾਂ ਰੁਕ ਜਾਓ!",
 "L9_creep": "ਵਧਣ ਲਈ ਦੱਬੀ ਰੱਖੋ",
 "L9_asleep": "ਜਹਾਂਗੀਰ ਸੁੱਤਾ ਪਿਆ ਹੈ…",
 "L9_stir": "ਉਹ ਹਿੱਲ ਰਿਹਾ ਹੈ!",
 "L9_awake": "ਉਹ ਵੇਖ ਰਿਹਾ ਹੈ, ਰੁਕ ਜਾਓ!",
 "L9_caught": "ਉਸ ਨੇ ਤੁਹਾਨੂੰ ਹਿੱਲਦੇ ਵੇਖ ਲਿਆ! ਵਾਪਸ ਸ਼ੁਰੂ ਤੋਂ ।",
 "L9_cure": "ਇਲਾਜ ਦੱਸੋ: “ਗੁਰੂ ਜੀ ਨੂੰ ਆਜ਼ਾਦ ਕਰੋ!”",
 "L9_tip": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਸ਼ਕਤੀ ਦਾ ਵਿਖਾਵਾ ਨਹੀਂ ਚਾਹੁੰਦੇ ਸਨ । ਵਿਖਾਵੇ ਤੋਂ ਬਿਨਾਂ ਤਕੜੇ ਹੋਣ ਬਾਰੇ ਗੱਲ ਕਰੋ ।",
 "L10_title": "ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੇ ਸੱਚ ਬੋਲਿਆ",
 "L10_story": "ਵਜ਼ੀਰ ਖ਼ਾਨ, ਇੱਕ ਅਮੀਰ ਜੋ ਗੁਰੂ ਜੀ ਦਾ ਸਿੱਖ ਕਰਕੇ ਜਾਣਿਆ ਜਾਂਦਾ ਸੀ, ਨੇ ਸ਼ਾਂਤੀ ਨਾਲ ਬਾਦਸ਼ਾਹ ਨੂੰ ਚੰਦੂ ਦੇ ਝੂਠਾਂ ਦਾ ਸੱਚ ਦੱਸਿਆ । ਜਹਾਂਗੀਰ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਰਿਹਾਅ ਕਰਨ ਲਈ ਮੰਨ ਗਿਆ ।",
 "L10_more": "ਜਦੋਂ ਪਹਿਲਾ ਅਮੀਰ ਆਇਆ, ਤਾਂ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਫ਼ਰਮਾਇਆ, “ਸਾਡੇ ਆਉਣ ਤੋਂ ਬਾਅਦ ਇੱਥੇ ਕੈਦੀ ਖ਼ੁਸ਼ ਹਨ । ਅਸੀਂ ਕਿਉਂ ਜਾਈਏ?” ਸਾਈਂ ਮੀਆਂ ਮੀਰ ਜੀ ਨੇ ਵੀ ਜਹਾਂਗੀਰ ਨੂੰ ਦੱਸਿਆ ਕਿ ਸ੍ਰੀ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਤਸੀਹੇ ਕਿੰਨੀ ਸ਼ਾਂਤੀ ਨਾਲ ਸਹੇ, ਅਤੇ ਜਹਾਂਗੀਰ ਨੇ ਕਿਹਾ, “ਇਹ ਚੰਦੂ ਨੇ ਕੀਤਾ ਸੀ ।”",
 "L10_task": "ਉਹ ਚਾਰ ਸੱਚੀਆਂ ਗੱਲਾਂ ਚੁਣੋ ਜੋ ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੇ ਬਾਦਸ਼ਾਹ ਨੂੰ ਦੱਸੀਆਂ । ਚਾਰ ਝੂਠ ਛੱਡ ਦਿਓ ।",
 "L10_items": [
  [
   "ਸ਼ਿਕਾਇਤਾਂ ਗੁਰੂ ਜੀ ਦੇ ਦੁਸ਼ਮਣਾਂ ਵੱਲੋਂ ਆਈਆਂ ਹਨ ।",
   1
  ],
  [
   "ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਬਾਬਰ ਨੂੰ ਆਸ਼ੀਰਵਾਦ ਦਿੱਤਾ ।",
   1
  ],
  [
   "ਸ੍ਰੀ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਹੁਮਾਯੂੰ ਨੂੰ ਸੇਧ ਦਿੱਤੀ ।",
   1
  ],
  [
   "ਤੁਹਾਡੇ ਪਿਤਾ ਅਕਬਰ ਸ੍ਰੀ ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਕੋਲ ਗਏ ।",
   1
  ],
  [
   "ਗੁਰੂ ਜੀ ਤੁਹਾਡਾ ਤਖ਼ਤ ਚਾਹੁੰਦੇ ਹਨ ।",
   0
  ],
  [
   "ਗੁਰੂ ਜੀ ਨੂੰ ਹਮੇਸ਼ਾ ਲਈ ਕੈਦ ਰੱਖੋ ।",
   0
  ],
  [
   "ਤਾਰੇ ਕਹਿੰਦੇ ਹਨ ਕਿ ਗੁਰੂ ਜੀ ਨੂੰ ਇੱਥੇ ਹੀ ਰਹਿਣਾ ਚਾਹੀਦਾ ਹੈ ।",
   0
  ],
  [
   "ਸਿੱਖ ਜੰਗ ਦੀ ਤਿਆਰੀ ਕਰ ਰਹੇ ਹਨ ।",
   0
  ]
 ],
 "L10_need": "ਠੀਕ ਚਾਰ ਚੁਣੋ ।",
 "L10_tip": "ਵਜ਼ੀਰ ਖ਼ਾਨ ਨੇ ਸ਼ਾਂਤੀ ਨਾਲ ਸੱਚ ਬੋਲਿਆ । ਕੀ ਕੋਈ ਸੱਚੀ ਗੱਲ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਕਹਿਣੀ ਔਖੀ ਲੱਗਦੀ ਹੈ? ਉਸ ਨੂੰ ਨਰਮੀ ਨਾਲ ਕਹਿਣ ਦਾ ਅਭਿਆਸ ਕਰੋ ।",
 "L11_title": "ਰਾਜਿਆਂ ਤੋਂ ਬਿਨਾਂ ਨਹੀਂ",
 "L11_story": "ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਰਾਜਿਆਂ ਤੋਂ ਬਿਨਾਂ ਜਾਣ ਲਈ ਨਹੀਂ ਮੰਨੇ । ਜਹਾਂਗੀਰ ਨੇ ਕਿਹਾ ਕਿ ਸਿਰਫ਼ ਉਹੀ ਜਾ ਸਕਦੇ ਹਨ ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਜੀ ਦਾ ਚੋਲਾ ਫੜਿਆ ਹੋਵੇ । ਇਸ ਲਈ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ 50 ਕਲੀਆਂ ਅਤੇ 2 ਲੰਮੀਆਂ ਬਾਹਾਂ ਵਾਲਾ ਚੋਲਾ ਪਹਿਨਿਆ, ਅਤੇ ਸਾਰੇ 52 ਆਜ਼ਾਦ ਹੋ ਕੇ ਬਾਹਰ ਆਏ ।",
 "L11_more": "ਪੰਜਾਹ ਰਾਜਿਆਂ ਨੇ ਪੰਜਾਹ ਕਲੀਆਂ ਫੜ ਲਈਆਂ, ਅਤੇ ਦੋ ਕੋਲ ਕੁਝ ਨਾ ਬਚਿਆ । ਪਹਿਰੇਦਾਰਾਂ ਨੇ ਕਿਹਾ, “ਫੜਨ ਨੂੰ ਕੁਝ ਨਹੀਂ ਬਚਿਆ!” ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੇ ਆਵਾਜ਼ ਦਿੱਤੀ, “ਸਾਡੇ ਚੋਲੇ ਦੀਆਂ ਦੋ ਲੰਮੀਆਂ ਬਾਹਾਂ ਹਨ, ਇੱਕ-ਇੱਕ ਫੜ ਲਓ!” ਜਦੋਂ ਕੈਦਖ਼ਾਨਾ ਖ਼ਾਲੀ ਹੋ ਗਿਆ, ਤਦ ਹੀ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਬਾਹਰ ਗਏ, ਅਤੇ ਲੋਹਾਰਾਂ ਨੇ ਰਾਜਿਆਂ ਦੀਆਂ ਬੇੜੀਆਂ ਕੱਟੀਆਂ ।",
 "L11_task": "ਹਰ ਰਾਜੇ ਨੂੰ ਕਿਲ੍ਹੇ ਵਿੱਚੋਂ ਦਰਵਾਜ਼ੇ ਤੱਕ ਲੈ ਜਾਓ । ਕਿਸੇ ਨੂੰ ਪਿੱਛੇ ਨਾ ਛੱਡੋ!",
 "L11_king": "ਰਾਜਾ",
 "L11_out": "ਬਾਹਰ",
 "L11_left": "ਚੱਲਣ ਲਈ ਤੀਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ (ਜਾਂ ਉਂਗਲ ਫੇਰੋ) ।",
 "L11_tip": "“ਕਿਸੇ ਨੂੰ ਪਿੱਛੇ ਨਾ ਛੱਡੋ ।” ਸਕੂਲ ਜਾਂ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਕੌਣ ਇਕੱਲਾ ਮਹਿਸੂਸ ਕਰ ਸਕਦਾ ਹੈ, ਅਤੇ ਤੁਸੀਂ ਉਸ ਨੂੰ ਨਾਲ ਕਿਵੇਂ ਰਲਾ ਸਕਦੇ ਹੋ?",
 "L12_title": "ਅੰਮ੍ਰਿਤਸਰ ਘਰ ਵਾਪਸੀ",
 "L12_story": "ਅੰਮ੍ਰਿਤਸਰ ਨੇ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦਾ ਖ਼ੁਸ਼ੀ ਨਾਲ ਸੁਆਗਤ ਕੀਤਾ । ਸਿੱਖ ਪਰੰਪਰਾ ਇਸ ਆਜ਼ਾਦੀ ਨੂੰ ਦੀਵਾਲੀ ਉੱਤੇ ਯਾਦ ਕਰਦੀ ਹੈ । ਇਸੇ ਲਈ ਅਸੀਂ ਦੀਵੇ ਜਗਾਉਂਦੇ ਹਾਂ ਅਤੇ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਨੂੰ ਦਾਤਾ ਬੰਦੀ ਛੋੜ ਆਖਦੇ ਹਾਂ ।",
 "L12_more": "ਗਲੀਆਂ ਸਾਫ਼ ਕੀਤੀਆਂ ਗਈਆਂ ਅਤੇ ਹਾਰਾਂ ਨਾਲ ਸਜਾਈਆਂ ਗਈਆਂ, ਅਤੇ ਨਗਾਰੇ ਵੱਜੇ । ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਪੈਦਲ ਸ਼ਹਿਰ ਵਿੱਚ ਆਏ, ਪਹਿਲਾਂ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ, ਫਿਰ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ । ਮਾਤਾ ਗੰਗਾ ਜੀ ਨੇ ਆਪਣੇ ਪੁੱਤਰ ਨੂੰ ਗਲ ਨਾਲ ਲਾਇਆ ਅਤੇ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਨਜ਼ਰ ਨਾ ਹਟਾ ਸਕੇ ।",
 "L12_task": "ਘਰ ਦਾ ਰਾਹ ਰੌਸ਼ਨ ਕਰੋ: ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਦੇ ਸਫ਼ਰ ਦੇ ਪੜਾਵਾਂ ਨੂੰ ਕ੍ਰਮ ਨਾਲ ਦਬਾਓ ।",
 "L12_steps": [
  "ਦਿੱਲੀ ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਨੂੰ ਮਿਲਣਾ",
  "ਗੋਇੰਦਵਾਲ ਸਾਹਿਬ",
  "ਅੰਮ੍ਰਿਤਸਰ ਦੀਆਂ ਸਾਫ਼, ਹਾਰਾਂ ਨਾਲ ਸਜੀਆਂ ਗਲੀਆਂ",
  "ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ",
  "ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ",
  "ਮਾਤਾ ਗੰਗਾ ਜੀ ਕੋਲ ਘਰ"
 ],
 "L12_tip": "ਅੱਜ ਰਾਤ ਇਕੱਠੇ ਇੱਕ ਦੀਵਾ ਜਗਾਓ, ਅਤੇ ਹਰ ਉਸ ਇਨਸਾਨ ਲਈ ਅਰਦਾਸ ਕਰੋ ਜੋ ਆਜ਼ਾਦ ਨਹੀਂ ਹੈ ।"
}
};
