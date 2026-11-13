/* =====================================================================
   SELAH — Report wording and report layout
   ---------------------------------------------------------------------
   Everything a reader sees in "My Report" is written here, in plain
   language for people who are new to astrology. Edit the text freely.
   Every section ends by pointing back to Christ.
   Loaded on report.html only, before js/app.js.
   ===================================================================== */

/* ---------- The 12 signs: the "how" (the style) ---------- */
const SIGNS=[
{t:'Aries',el:'Fire',mo:'Cardinal',rul:'Mars',kw:'brave, direct and quick to start',sty:'boldly and directly',
 d:'Aries is the first sign of the zodiac. Its energy is like the first days of spring: eager, brave and ready to go. Aries prefers action to waiting and usually says what it thinks.',
 life:'In everyday life, this can look like being the first to jump in, start the project or speak up when no one else will.',
 str:['Courage','Honesty','Energy to start new things'],gr:['Impatience','Acting before thinking','A quick temper'],
 q:'Patience',v:'James 1:19',vt:'Be quick to listen, slow to speak and slow to become angry. Courage is a real gift, and it becomes Christlike when it walks together with patience.',
 rise:'People may first see you as energetic, confident and ready for action. You tend to meet new situations head-on.'},
{t:'Taurus',el:'Earth',mo:'Fixed',rul:'Venus',kw:'steady, loyal and practical',sty:'steadily and practically',
 d:'Taurus is calm, patient and grounded. It enjoys comfort, beauty, good food and things that last. Once Taurus makes up its mind, it rarely changes it quickly.',
 life:'In everyday life, this can look like preferring a stable routine, taking your time with decisions and being the dependable friend people lean on.',
 str:['Reliability','Patience','Loyalty'],gr:['Stubbornness','Resisting change','Holding too tightly to comfort or possessions'],
 q:'Contentment and generosity',v:'Matthew 6:19–21',vt:'Jesus taught us to store up treasure in heaven, because where our treasure is, our heart will be too. Stability is good, but our true security is in God, not in things or routines.',
 rise:'People may first see you as calm, steady and easy to be around.'},
{t:'Gemini',el:'Air',mo:'Mutable',rul:'Mercury',kw:'curious, quick-minded and talkative',sty:'curiously, with lots of questions and ideas',
 d:'Gemini loves ideas, conversation and learning. It is quick-minded and can see many sides of a situation. Gemini can get bored when life feels too repetitive.',
 life:'In everyday life, this can look like juggling many interests, chatting easily with all kinds of people and picking up new skills fast.',
 str:['Curiosity','Adaptability','Good communication'],gr:['Scattered focus','Restlessness','Speaking before thinking it through'],
 q:'Focus and wise words',v:'Ephesians 4:29',vt:'Let your words be the kind that build others up. A quick mind and a quick tongue become a blessing when they are used to encourage.',
 rise:'People may first see you as friendly, chatty and curious.'},
{t:'Cancer',el:'Water',mo:'Cardinal',rul:'the Moon',kw:'caring, protective and sensitive',sty:'with care and deep feeling',
 d:'Cancer is nurturing and family-focused. It feels things deeply and wants to protect the people it loves. Home and a sense of belonging matter a lot.',
 life:'In everyday life, this can look like remembering birthdays, checking on people and making others feel at home.',
 str:['Kindness','Loyalty','Emotional understanding'],gr:['Moodiness','Holding on to hurt','Hiding behind a protective shell'],
 q:'Peace and forgiveness',v:'1 Peter 5:7',vt:'Cast all your anxiety on Him, because He cares for you. Your caring heart reflects God’s own care, and He wants to carry your worries too.',
 rise:'People may first see you as warm, gentle and a little reserved until they know you.'},
{t:'Leo',el:'Fire',mo:'Fixed',rul:'the Sun',kw:'warm, confident and creative',sty:'warmly, generously and with confidence',
 d:'Leo is generous, playful and big-hearted. It enjoys creating, expressing itself and being appreciated. Leo often lights up a room.',
 life:'In everyday life, this can look like enjoying leadership, cheering others on and bringing fun and energy to a group.',
 str:['Generosity','Creativity','Leadership'],gr:['Pride','Needing approval','Taking things personally'],
 q:'Humility',v:'Matthew 5:16',vt:'Jesus said to let your light shine so that people see your good works and give glory to your Father in heaven. Your light shines brightest when it points to God, not to yourself.',
 rise:'People may first see you as confident, warm and expressive.'},
{t:'Virgo',el:'Earth',mo:'Mutable',rul:'Mercury',kw:'helpful, careful and organized',sty:'carefully, practically and with attention to detail',
 d:'Virgo notices details and likes to make things better. It is practical, hardworking and often happiest when it is being useful to others.',
 life:'In everyday life, this can look like spotting the mistake, making the plan and quietly helping behind the scenes.',
 str:['Attention to detail','Hard work','A desire to serve'],gr:['Being too critical of yourself or others','Worry','Perfectionism'],
 q:'Grace',v:'2 Corinthians 12:9',vt:'God told Paul, “My grace is sufficient for you, for my power is made perfect in weakness.” You do not have to be perfect to be fully loved by God.',
 rise:'People may first see you as neat, thoughtful and modest.'},
{t:'Libra',el:'Air',mo:'Cardinal',rul:'Venus',kw:'fair, friendly and peace-loving',sty:'fairly, kindly and with an eye for harmony',
 d:'Libra values fairness, beauty and good relationships. It likes to see both sides of a situation and wants everyone to get along.',
 life:'In everyday life, this can look like being the peacemaker in your family or friend group and caring a lot about things being fair.',
 str:['Fairness','Diplomacy','Making others feel welcome'],gr:['Indecision','People-pleasing','Avoiding conflict that needs to happen'],
 q:'Courage to speak the truth in love',v:'Matthew 5:9 · Ephesians 4:15',vt:'Blessed are the peacemakers. True peacemaking sometimes means speaking the truth in love, not just keeping everyone happy.',
 rise:'People may first see you as charming, polite and easy to talk to.'},
{t:'Scorpio',el:'Water',mo:'Fixed',rul:'Pluto (traditionally Mars)',kw:'deep, loyal and determined',sty:'deeply, intensely and with determination',
 d:'Scorpio feels things strongly and wants real, honest connection. It is private, determined and not afraid of difficult topics.',
 life:'In everyday life, this can look like preferring a few close friends over many acquaintances and being fiercely loyal once you trust someone.',
 str:['Loyalty','Determination','Insight into people'],gr:['Jealousy or control','Holding grudges','Keeping too much hidden'],
 q:'Forgiveness and trust',v:'Ephesians 4:31–32',vt:'Get rid of all bitterness. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.',
 rise:'People may first see you as intense, private and a little hard to read.'},
{t:'Sagittarius',el:'Fire',mo:'Mutable',rul:'Jupiter',kw:'adventurous, honest and hopeful',sty:'with optimism, honesty and a love of freedom',
 d:'Sagittarius loves adventure, learning and big questions about life. It is hopeful, funny and honest, sometimes very honest.',
 life:'In everyday life, this can look like loving travel, new ideas and deep conversations about meaning and faith.',
 str:['Optimism','Honesty','A love of learning'],gr:['Bluntness','Restlessness','Promising more than you can do'],
 q:'Self-control and faithfulness',v:'Proverbs 16:9',vt:'In their hearts people plan their course, but the LORD establishes their steps. Adventure is a gift when God is the one leading.',
 rise:'People may first see you as upbeat, open and adventurous.'},
{t:'Capricorn',el:'Earth',mo:'Cardinal',rul:'Saturn',kw:'responsible, ambitious and disciplined',sty:'with discipline, patience and long-term goals',
 d:'Capricorn takes its responsibilities seriously and works steadily toward big goals. It values respect, structure and doing things the right way.',
 life:'In everyday life, this can look like taking charge, making a plan and keeping going when things get hard.',
 str:['Discipline','Responsibility','Patience with long goals'],gr:['Overworking','Being hard on yourself or others','Measuring your worth by achievement'],
 q:'Rest and trust',v:'Matthew 11:28–30',vt:'Jesus invites everyone who is weary and burdened to come to Him and find rest. Your worth comes from Him, not from what you achieve.',
 rise:'People may first see you as serious, capable and mature.'},
{t:'Aquarius',el:'Air',mo:'Fixed',rul:'Uranus (traditionally Saturn)',kw:'original, independent and community-minded',sty:'in an original, independent way',
 d:'Aquarius thinks differently and cares about fairness for everyone. It values friendship, freedom and new ideas that can help people.',
 life:'In everyday life, this can look like being drawn to causes, community projects and ideas that are ahead of their time.',
 str:['Original thinking','Concern for others','Loyal friendship'],gr:['Seeming distant','Being stubborn about ideas','Caring about “people” more than the person in front of you'],
 q:'Warm, personal love',v:'John 13:34–35',vt:'Jesus said, “Love one another. As I have loved you, so you must love one another.” Big ideas matter, and so does loving the person right next to you.',
 rise:'People may first see you as friendly, unusual and independent.'},
{t:'Pisces',el:'Water',mo:'Mutable',rul:'Neptune (traditionally Jupiter)',kw:'gentle, imaginative and compassionate',sty:'gently, with imagination and compassion',
 d:'Pisces is sensitive, creative and kind. It easily feels what others feel and often has a rich inner world of dreams and imagination.',
 life:'In everyday life, this can look like being drawn to art, music and helping people, and needing quiet time alone to recharge.',
 str:['Compassion','Creativity','Spiritual sensitivity'],gr:['Escaping hard realities','Weak boundaries','Feeling overwhelmed'],
 q:'Peace grounded in truth',v:'Isaiah 26:3',vt:'You will keep in perfect peace those whose minds are steadfast, because they trust in you. Sensitivity is a gift; God’s truth gives it a firm place to stand.',
 rise:'People may first see you as gentle, dreamy and kind.'}
];

/* ---------- The 10 planets: the "what" (a part of you) ---------- */
const PLN={
Sun:{a:'basic personality and sense of self',sh:'your core self',
 d:'The Sun sits at the center of our solar system, and in astrology it stands for the center of your personality: what gives you energy, what you care about and how you naturally show up in the world.',
 q:'Who am I at my core?',v:'Galatians 2:20',vt:'Astrology calls the Sun your “core self.” As a Christian, your deepest identity is that you are loved by God and made new in Christ. Your personality is real and good, but it is not the center. Christ is.'},
Moon:{a:'emotional side and what makes you feel safe',sh:'your emotions',
 d:'The Moon changes shape every few days, and in astrology it stands for your feelings and moods. It describes your private, inner side: what comforts you, what upsets you and what you need to feel cared for.',
 q:'What do I need to feel safe and at peace?',v:'Philippians 4:6–7',vt:'Feelings are part of how God made us, but they are not meant to rule us. Bring your needs to God in prayer, and His peace, which is beyond understanding, will guard your heart and mind.'},
Mercury:{a:'way of thinking, learning and talking',sh:'your thinking and words',
 d:'Mercury is the smallest and fastest planet, closest to the Sun. In astrology it stands for your mind: how you think, learn, make decisions, speak and write.',
 q:'How do I think and communicate?',v:'Ephesians 4:29 · James 1:5',vt:'Let what you say build others up. And when you need wisdom, ask God, who gives generously. However your mind works, it can be used to bring life and truth.'},
Venus:{a:'way of loving, and what you value and enjoy',sh:'your way of loving',
 d:'Venus is the brightest planet in the night sky. In astrology it stands for love, friendship, beauty and pleasure. It shows how you show affection, what attracts you and what you value.',
 q:'How do I love, and what do I treasure?',v:'1 Corinthians 13:4–7',vt:'Love is patient and kind; it is not proud or self-seeking. God’s kind of love is about giving and faithfulness, not only about attraction or what we enjoy.'},
Mars:{a:'drive, energy and way of taking action',sh:'your drive',
 d:'Mars is the red planet. In astrology it stands for energy and drive: how you go after what you want, how you compete and how you handle anger.',
 q:'How do I take action, and how do I handle anger?',v:'Ephesians 4:26 · 2 Timothy 1:7',vt:'“In your anger do not sin.” God has given us a spirit of power, love and self-control. Energy and drive are good gifts when they are steered by love and used to serve.'},
Jupiter:{a:'hope, generosity and desire to grow',sh:'your growth and hope',
 d:'Jupiter is the largest planet. In astrology it stands for growth, hope, generosity and the search for meaning. It shows where life tends to feel open and abundant.',
 q:'Where do I grow and find meaning?',v:'James 1:17',vt:'Every good and perfect gift comes from above. Astrology often calls Jupiter “luck,” but Christians see every blessing as coming from God, and meant to be shared.'},
Saturn:{a:'sense of duty, discipline and life lessons',sh:'your discipline',
 d:'Saturn is the planet with the famous rings. In astrology it stands for rules, responsibility, hard work and life lessons. It often shows where life feels harder at first and where you build maturity over time.',
 q:'Where do I need patience and discipline?',v:'Hebrews 12:11',vt:'No discipline seems pleasant at the time, but later it produces a harvest of righteousness and peace. God uses hard seasons to grow us, never to define us.'},
Uranus:{gen:1,a:'desire for freedom and change',sh:'your desire for change',
 d:'Uranus moves very slowly, staying in one sign for about seven years. It stands for change, surprise, new ideas and independence.',
 q:'Where do I want freedom and something new?',v:'2 Corinthians 5:17',vt:'The deepest change is not breaking free from the past on our own. It is becoming a new creation in Christ: the old has gone, the new is here.'},
Neptune:{gen:1,a:'dreamy, spiritual and imaginative side',sh:'your dreams and ideals',
 d:'Neptune moves even more slowly, staying in one sign for about fourteen years. It stands for dreams, imagination, compassion and the longing for something beyond this world. It can also show where things feel foggy or confusing.',
 q:'What do I long for most deeply?',v:'Psalm 42:1–2',vt:'As the deer pants for streams of water, so my soul pants for you, O God. Our deepest longing is only fully met in God Himself.'},
Pluto:{gen:1,a:'experience of deep change and inner strength',sh:'your deep transformation',
 d:'Pluto is the slowest of all, staying in one sign for 12 to 30 years. It stands for deep change, power and letting go of the old so something new can grow.',
 q:'Where am I being deeply changed?',v:'John 12:24',vt:'Jesus said that unless a seed falls to the ground and dies, it remains a single seed; but if it dies, it produces many seeds. Real transformation comes through surrender to God.'}
};

/* ---------- The 12 houses: the "where" (an area of life) ---------- */
const HOUSES=[
{t:'Self & First Impressions',ar:'how you present yourself, your appearance and how you start new things',d:'The 1st house is about you: your body, your personality and the way you come across when people first meet you. It begins at your Rising sign.',q:'How do I come across, and does it reflect the person I want to be?',v:'1 Samuel 16:7',vt:'People look at the outward appearance, but the LORD looks at the heart.'},
{t:'Money, Possessions & Values',ar:'money, possessions, your talents and what you value most',d:'The 2nd house is about what you have and what you value: the money you earn, the things you own, your natural talents and your sense of self-worth.',q:'What do I treasure, and am I a good steward of it?',v:'Matthew 6:21',vt:'Where your treasure is, there your heart will be also.'},
{t:'Communication & Everyday Learning',ar:'conversations, writing, learning, siblings, neighbors and short trips',d:'The 3rd house is about your everyday mind and words: how you talk, write and learn, and your relationships with siblings, neighbors and the people you see often.',q:'Do my everyday words help or hurt the people around me?',v:'Colossians 4:6',vt:'Let your conversation be always full of grace.'},
{t:'Home & Family',ar:'home, family, childhood and your sense of belonging',d:'The 4th house is about your roots: your home, your family, your childhood and the place where you feel you belong.',q:'What makes a home feel safe and loving, and how can I build that?',v:'Joshua 24:15',vt:'As for me and my household, we will serve the LORD.'},
{t:'Joy, Creativity & Children',ar:'fun, hobbies, creativity, romance and children',d:'The 5th house is about joy: play, hobbies, creative projects, dating and romance, and children.',q:'What gives me real joy, and do I make room for it?',v:'Psalm 16:11',vt:'In your presence there is fullness of joy.'},
{t:'Work, Health & Daily Habits',ar:'your daily routine, your job tasks, health habits and serving others',d:'The 6th house is about ordinary days: your routines, your daily work, your health habits and the ways you help and serve others.',q:'Do my daily habits help me love God and others well?',v:'Colossians 3:23',vt:'Whatever you do, work at it with all your heart, as working for the Lord.'},
{t:'Partnerships & Marriage',ar:'marriage, close partnerships and one-on-one relationships',d:'The 7th house is about close one-on-one relationships: marriage, committed partners, business partners and best friends. It sits directly opposite the 1st house, so it is about “the other” instead of “me.”',q:'How do I love and serve the people closest to me?',v:'Ecclesiastes 4:9–10',vt:'Two are better than one; if either of them falls, one can help the other up.'},
{t:'Shared Life & Deep Change',ar:'what you share with others, trust and intimacy, loss and new beginnings',d:'The 8th house is about what you share deeply with others (money, trust, intimacy) and about endings and new beginnings, including grief and healing.',q:'Where do I need God’s comfort or a new beginning?',v:'Psalm 34:18',vt:'The LORD is close to the brokenhearted.'},
{t:'Faith, Big Ideas & Travel',ar:'faith, beliefs, higher education, travel and the search for meaning',d:'The 9th house is about the big picture: your beliefs and faith, higher learning, long journeys and your search for meaning and truth.',q:'Where am I looking for truth, and am I looking to God?',v:'Proverbs 2:6',vt:'The LORD gives wisdom; from His mouth come knowledge and understanding.'},
{t:'Career & Calling',ar:'career, reputation, public life and your calling',d:'The 10th house is about your public life: your career, your reputation, what you achieve and the mark you leave on the world. It begins at the Midheaven, the highest point of the chart.',q:'Is my work a way to serve, or only a way to be seen?',v:'Matthew 20:26',vt:'Whoever wants to become great among you must be your servant.'},
{t:'Friends & Community',ar:'friends, groups, church and community, and your hopes for the future',d:'The 11th house is about the people you do life with: friends, groups, church and community, and the hopes and dreams you share.',q:'Who am I encouraging, and who encourages me?',v:'Hebrews 10:24–25',vt:'Let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.'},
{t:'Rest, Solitude & the Inner Life',ar:'quiet time, rest, prayer and what happens behind the scenes',d:'The 12th house is about what is hidden and quiet: rest, time alone, the inner spiritual life, and things that happen behind the scenes.',q:'Do I make space to be still before God?',v:'Matthew 6:6',vt:'When you pray, go into your room, close the door and pray to your Father, who is unseen.'}
];

/* ---------- The 5 aspects: the "conversation" between planets ---------- */
const ASPX={
Conjunction:{sy:'☌',k:'Blending',d:'The two planets sit very close together (about 0° apart), so their energies blend into one. Picture two singers singing the same note.',
 j:(A,B)=>`${A} and ${B} tend to work as one. They are hard to separate and can be a strong focus in your life.`,v:'Colossians 3:17',vt:'Whatever you do, in word or deed, do it all in the name of the Lord Jesus.'},
Sextile:{sy:'⚹',k:'Opportunity',d:'The two planets are about 60° apart. This is a friendly, helpful link, like two friends who work well together when someone makes the first move.',
 j:(A,B)=>`${A} and ${B} can support each other, especially when you make an effort to use them together.`,v:'Galatians 6:9',vt:'Let us not become weary in doing good, for at the proper time we will reap a harvest.'},
Square:{sy:'□',k:'Tension',d:'The two planets are about 90° apart. This is a tense angle, like two people pulling in different directions. It can feel like friction, but it is also what pushes people to grow.',
 j:(A,B)=>`${A} and ${B} may sometimes clash, which can feel like inner pressure. Working through that tension can build real strength of character.`,v:'Romans 5:3–4',vt:'Suffering produces perseverance; perseverance, character; and character, hope.'},
Trine:{sy:'△',k:'Easy flow',d:'The two planets are about 120° apart. This is an easy, natural flow, like a river running downhill. It often points to natural talents.',
 j:(A,B)=>`${A} and ${B} tend to cooperate easily. This can be a natural gift. The challenge is not to take it for granted.`,v:'1 Peter 4:10',vt:'Each of you should use whatever gift you have received to serve others.'},
Opposition:{sy:'☍',k:'Balance',d:'The two planets are on opposite sides of the chart (about 180° apart), like two ends of a seesaw.',
 j:(A,B)=>`You may feel pulled between ${A} and ${B}. The goal is not to choose one but to find a healthy balance.`,v:'Ecclesiastes 3:1',vt:'There is a time for everything, and a season for every activity under the heavens.'}
};

/* ---------- Elements and modalities ---------- */
const ELX={
Fire:{s:'Aries, Leo, Sagittarius',d:'Fire signs are full of energy, passion and enthusiasm. They like action and often inspire others.',hi:'You may be energetic, bold and quick to act. Watch out for burnout and impatience.',lo:'Getting started or taking risks may take extra effort. People with lots of fire can encourage you.'},
Earth:{s:'Taurus, Virgo, Capricorn',d:'Earth signs are practical, steady and down-to-earth. They like real, solid results.',hi:'You may be reliable and practical. Watch out for being too cautious or set in your ways.',lo:'Practical details like budgets, schedules and routines may take more effort for you.'},
Air:{s:'Gemini, Libra, Aquarius',d:'Air signs are thinkers and talkers. They love ideas, conversation and connecting with people.',hi:'You may live in your head a lot. Watch out for overthinking or stepping back from your feelings.',lo:'You may act more from feeling or instinct than from analysis. Talking things through can help.'},
Water:{s:'Cancer, Scorpio, Pisces',d:'Water signs are feelers. They are guided by emotions, intuition and close bonds.',hi:'You may be deeply caring and intuitive. Watch out for being overwhelmed by feelings.',lo:'Naming and sharing emotions may feel harder for you. This is an area where you can grow.'}};
const MOX={
Cardinal:{s:'Aries, Cancer, Libra, Capricorn',d:'Cardinal signs are starters. They like to begin things and take the lead.',hi:'You are likely good at starting things. Finishing them may need more focus.',lo:'You may prefer to support or continue something rather than launch it yourself.'},
Fixed:{s:'Taurus, Leo, Scorpio, Aquarius',d:'Fixed signs are keepers. They are steady, loyal and good at seeing things through.',hi:'You are likely loyal and persistent. Watch out for stubbornness.',lo:'Sticking with one thing for a long time may take extra effort.'},
Mutable:{s:'Gemini, Virgo, Sagittarius, Pisces',d:'Mutable signs are adapters. They are flexible and handle change well.',hi:'You are likely flexible and open. Watch out for being scattered or changing your mind too often.',lo:'Sudden changes may feel uncomfortable; building in flexibility can help.'}};

/* ---------- Small helpers ---------- */
const ord=n=>n+(['th','st','nd','rd'][(n%100>10&&n%100<14)?0:n%10]||'th');
const li=a=>a.map(x=>`<li>${x}</li>`).join('');
const sOf=L=>SIGNS[sgn(L)];
const anchor=(v,vt,title)=>`<div class="anchor"><b class="gold">✝ ${title||'Christ at the center'}</b><p>${vt} <span class="mut">(${v})</span></p></div>`;
const RETRO='Retrograde (℞) means that, seen from Earth, the planet looked like it was moving backward in the sky when you were born. It is not really moving backward; it is an optical effect, like a slower car seeming to drift backward when you pass it. Astrologers read retrograde planets as working in a more inward, reflective way: you may think things over more before acting on them.';
const GENNOTE='This is a “generational” planet. It moves so slowly that everyone born within several years of you shares this sign, so it says more about your generation than about you personally. Its house position (if known) is the more personal part.';

/* ---------- Building blocks for the report ---------- */
function pcard(p){const s=sOf(p.L),x=PLN[p.nm],h=p.h?HOUSES[p.h-1]:null;
return `<div class="card"><h3>${p.g} ${p.nm} in ${s.t} ${SY[sgn(p.L)]}</h3>
<p class="mut">${fmt(p.L)}${p.h?' · '+ord(p.h)+' house':''}${p.r?' · Retrograde ℞':''}${x.gen?' · Generational planet':''}</p>
<p><b>What is ${p.nm=='Sun'||p.nm=='Moon'?'the ':''}${p.nm}?</b> ${x.d}</p>
<p><b>The question it asks:</b> <i>${x.q}</i></p>
<p><b>What ${s.t} adds:</b> ${s.d}</p>
<p><b>Putting it together:</b> Traditionally, your ${x.a} tends to show up ${s.sty}. ${s.life}</p>
${h?`<p><b>Where it shows up:</b> Your ${p.nm} sits in the ${ord(p.h)} house, the area of <i>${h.t.toLowerCase()}</i>. So these themes often appear in ${h.ar}.</p>`:''}
${p.r?`<p><b>Retrograde:</b> ${RETRO}</p>`:''}${x.gen?`<p class="mut">${GENNOTE}</p>`:''}
<div class="two"><div><b>Possible strengths</b><ul>${li(s.str)}</ul></div><div><b>Possible growth areas</b><ul>${li(s.gr)}</ul></div></div>
${anchor(x.v,x.vt)}</div>`}

function risingCard(c){const s=sOf(c.asc);
return `<div class="card"><h3>↑ Rising in ${s.t} ${SY[sgn(c.asc)]}</h3><p class="mut">${fmt(c.asc)} · also called the Ascendant</p>
<p><b>What is the Rising sign?</b> It is the sign that was coming up over the eastern horizon at the exact minute and place you were born. It changes about every two hours, which is why an exact birth time matters. Astrologers read it as your “front door”: the first impression you give and the way you tend to approach new situations.</p>
<p><b>Your Rising sign:</b> ${s.rise} ${s.t} is known as ${s.kw}.</p>
<p><b>Keep in mind:</b> first impressions are only the surface. People who know you well see much more.</p>
${anchor('1 Samuel 16:7','People look at the outward appearance, but the LORD looks at the heart. How others see you matters less than who you are becoming in Christ.')}</div>`}

/* ---------- Report tabs ---------- */
const TABS=['Start Here','Overview','Your Birth Chart','The Big Three','Planets in Signs','Houses','Aspects','Elements & Modalities','Life Themes','Strengths & Growth','Christ at the Center','Summary'];

function secs(c){const f=c.f,P=c.pl,known=!!c.cu,S=[];
const elMax=EL[c.el.indexOf(Math.max(...c.el))],moMax=MO[c.mo.indexOf(Math.max(...c.mo))];
const sun=sOf(P[0].L),moon=sOf(P[1].L),rise=known?sOf(c.asc):null;

/* 0 · Start Here */
S.push(`<h2>Start Here: How to Read Your Report</h2>
<div class="card"><h3>What is a birth chart?</h3><p>A birth chart (also called a natal chart) is a map of the sky at the exact moment and place you were born. It shows where the Sun, the Moon and the planets were, as seen from Earth. Astrology is an old tradition that uses this map as a set of symbols for personality and life themes.</p>
<p>This report explains those traditional meanings in simple words. Treat it as a <b>mirror for reflection</b>, not as a rulebook or a prediction.</p></div>
<div class="card"><h3>The four building blocks</h3><p>Every part of your chart is made of four simple pieces. Once you know them, the rest of the report is easy to follow.</p>
<div class="grid"><div><b class="gold">Planets = the “what”</b><p>Each planet stands for one part of you, like your feelings (Moon) or your way of loving (Venus).</p></div>
<div><b class="gold">Signs = the “how”</b><p>The sign a planet is in describes its style, like “boldly” (Aries) or “gently” (Pisces).</p></div>
<div><b class="gold">Houses = the “where”</b><p>The sky is divided into 12 slices, like a pizza. Each slice is an area of life, like home or career.</p></div>
<div><b class="gold">Aspects = the “conversation”</b><p>The angles between planets show which parts of you work together easily and which ones pull against each other.</p></div></div>
<p><b>Example:</b> “Venus in Leo in the 7th house” means: <i>your way of loving</i> (Venus) is <i>warm and expressive</i> (Leo), especially in <i>close partnerships</i> (7th house).</p></div>
<div class="card"><h3>The Big Three</h3><p>Most people start with three parts of the chart:</p><ul><li><b>Sun sign:</b> your basic personality (the sign people usually mean when they ask “What’s your sign?”).</li><li><b>Moon sign:</b> your emotional, inner side.</li><li><b>Rising sign:</b> the first impression you give. It needs an exact birth time.</li></ul></div>
<div class="card"><h3>Other words you will see</h3><ul>
<li><b>Degrees (for example 14°22′):</b> each sign is 30° wide. The number shows exactly where in the sign a planet sits.</li>
<li><b>Retrograde ℞:</b> the planet looked like it was moving backward from Earth’s view. It is read as a more inward, reflective energy.</li>
<li><b>Midheaven (MC):</b> the highest point of the chart, linked to career and calling.</li>
<li><b>North and South Node:</b> calculated points, not planets. Traditionally the South Node is read as your comfort zone and the North Node as a direction of growth.</li>
<li><b>Generational planets:</b> Uranus, Neptune and Pluto move so slowly that whole age groups share their signs.</li></ul></div>
<div class="card"><h3>Symbols key</h3>${tbl(['Planets','',''],[[`☉ Sun`,`☽ Moon`,`☿ Mercury`],[`♀ Venus`,`♂ Mars`,`♃ Jupiter`],[`♄ Saturn`,`♅ Uranus`,`♆ Neptune`],[`♇ Pluto`,`↑ Rising`,`℞ Retrograde`]])}
<div style="height:10px"></div>${tbl(['Signs','','',''],[0,4,8].map(i=>[0,1,2,3].map(k=>`${SY[i+k]} ${SG[i+k]}`)))}</div>
<div class="card disc"><h3>How to use this report well</h3><ul><li>Read one section at a time, slowly.</li><li>Notice what rings true and what does not. Not everything will fit you, and that is fine.</li><li>Use the reflection questions as prompts for prayer and honest self-examination.</li><li>Keep Christ at the center. Every section ends by pointing back to Him.</li></ul>${anchor('1 Thessalonians 5:21','Test everything; hold on to what is good. Let God’s Word be the measure, not the stars.')}</div>`);

/* 1 · Overview */
const tight=[...c.asp].sort((a,b)=>a.orb-b.orb)[0],rx=P.filter(p=>p.r);
S.push(`<h2>Overview</h2>
<div class="card"><b>${f.city}, ${f.country}</b><br>${f.d}/${f.m}/${f.y} · ${f.known?f.tstr:'Birth time unknown'}</div>
${known?'':'<div class="card"><b>Your birth time is unknown.</b> That means your Rising sign, Midheaven and houses can’t be calculated. The planets were calculated for 12:00 noon. The Moon moves about 13° a day, so if it sits near the start or end of a sign, your Moon sign could actually be the sign before or after.</div>'}
${c.notes.map(n=>`<div class="card">${n}</div>`).join('')}
<div class="card"><h3>Your chart at a glance</h3><ul>
<li><b>Sun in ${sun.t}:</b> at your core, you are traditionally described as ${sun.kw}.</li>
<li><b>Moon in ${moon.t}:</b> emotionally, you may be ${moon.kw}.</li>
${known?`<li><b>Rising in ${rise.t}:</b> ${rise.rise}</li><li><b>Midheaven in ${sOf(c.mc).t}:</b> in your career and public life, you may want to work ${sOf(c.mc).sty}.</li>`:''}
<li><b>Strongest element: ${elMax}.</b> ${ELX[elMax].d}</li>
<li><b>Strongest modality: ${moMax}.</b> ${MOX[moMax].d}</li>
${tight?`<li><b>Closest aspect:</b> ${tight.a.nm} ${tight.nm.toLowerCase()} ${tight.b.nm}. ${ASPX[tight.nm].k}: ${ASPX[tight.nm].j(PLN[tight.a.nm].sh,PLN[tight.b.nm].sh)}</li>`:''}
<li><b>Retrograde planets:</b> ${rx.length?rx.map(p=>p.nm).join(', '):'none'}.</li></ul>
<p class="mut">Use the tabs to explore each part in detail. If you are new to astrology, read “Start Here” first.</p></div>
${anchor('Psalm 139:14','You were fearfully and wonderfully made. A chart can describe tendencies, but only God knows you completely, and He loves you completely.')}
<details class="card"><summary><b>How this is calculated (technical)</b></summary><p class="mut">UTC ${new Date(f.utc).toISOString().replace('T',' ').slice(0,16)} · ${f.tz} · ${f.lat.toFixed(2)}, ${f.lon.toFixed(2)} · Tropical zodiac · ${c.hs||'No houses'}</p><p class="mut">Geocentric planetary longitudes come from the Astronomy Engine ephemeris, referenced to the true ecliptic of date (tropical). Your local birth time is converted to UTC using the IANA time zone database, including historical offsets and daylight saving. Houses use Placidus from local sidereal time and latitude. Nodes use the mean-node formula. Chiron is not supported and is not shown. Part of Fortune and angles are symbolic points derived from calculated positions.</p></details>`);

/* 2 · Birth Chart */
S.push(`<h2>Your Birth Chart</h2>${wheel(c)}
<div class="card"><h3>How to read the wheel</h3><ul>
<li><b>Outer ring:</b> the 12 zodiac signs, each taking up a 30° slice.</li>
<li><b>Symbols inside the ring:</b> where each planet was when you were born (see the symbols key in “Start Here”).</li>
${known?'<li><b>Numbered lines:</b> the 12 houses. The thick line on the left is your Rising sign (Ascendant), and the thick line at the top is your Midheaven.</li>':''}
<li><b>Lines across the middle:</b> aspects. Solid lines show tension (squares and oppositions); dashed lines show easy flow (trines and sextiles).</li></ul></div>
${tbl(['Body','Position','House','Status'],[...P.map(p=>[p.g+' '+p.nm,fmt(p.L),p.h||'—',p.r?'Retrograde ℞':'Direct']),...c.nodes.map(n=>[n.nm,fmt(n.L),known?hseOf(n.L,c.cu):'—','Calculated point']),...(known?[['↑ Ascendant (Rising)',fmt(c.asc),1,'Calculated'],['Midheaven (MC)',fmt(c.mc),10,'Calculated'],['Descendant',fmt(n360(c.asc+180)),7,'Calculated'],['Imum Coeli (IC)',fmt(n360(c.mc+180)),4,'Calculated'],['Part of Fortune',fmt(c.pof),hseOf(c.pof,c.cu),'Symbolic point']]:[['Ascendant / MC / houses','Unavailable','—','Needs birth time']])])}
<div class="card"><h3>What the extra points mean</h3><ul>
<li><b>Descendant:</b> directly opposite your Rising sign; linked to the kind of partners you are drawn to.</li>
<li><b>Imum Coeli (IC):</b> the bottom of the chart; linked to home and roots.</li>
<li><b>Part of Fortune:</b> a calculated point traditionally linked to where you find ease and well-being.</li>
<li><b>North Node in ${sOf(c.nodes[0].L).t}:</b> traditionally a direction of growth: becoming more ${sOf(c.nodes[0].L).kw}. <b>South Node in ${sOf(c.nodes[1].L).t}:</b> traditionally a comfort zone: being ${sOf(c.nodes[1].L).kw}.</li></ul>
${anchor('Psalm 19:1','The heavens declare the glory of God. The sky on the day you were born was made by Him and points to Him.')}</div>`);

/* 3 · Big Three */
S.push(`<h2>The Big Three</h2><p>Your Sun, Moon and Rising signs are the three most personal parts of your chart. Think of them like this: the <b>Sun</b> is who you are at your core, the <b>Moon</b> is how you feel on the inside, and the <b>Rising</b> sign is how you come across on the outside.</p>
<div class="grid">${[['Sun',P[0]],['Moon',P[1]],['Rising',known?{L:c.asc}:null]].map(([n,p])=>`<div class="card"><div class="mut">${n}</div><h3>${p?SY[sgn(p.L)]+' '+SG[sgn(p.L)]:'Unavailable'}</h3><div class="mut">${p?fmt(p.L):'Requires exact birth time'}</div></div>`).join('')}</div>
${pcard(P[0])}${pcard(P[1])}${known?risingCard(c):''}
<div class="card"><h3>Your Big Three together</h3><p>Put simply: at your core you are ${sun.kw} (Sun in ${sun.t}). On the inside, emotionally, you may be ${moon.kw} (Moon in ${moon.t}).${known?` And when people first meet you, they may see someone ${rise.kw} (Rising in ${rise.t}).`:''}</p>
${sun.el!==moon.el?`<p>Your Sun is a ${sun.el} sign and your Moon is a ${moon.el} sign. That can mean what you show on the outside and what you feel inside are not always the same, so people may need time to fully understand you.</p>`:`<p>Your Sun and Moon are both ${sun.el} signs, so what you show and what you feel tend to match. People may find you easy to read.</p>`}
<p><b>Reflect:</b> Which of these traits do I excuse in myself? Where do I need more patience or self-control?</p>
${anchor('Galatians 5:22–23','Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control are the fruit of the Spirit. The Spirit, not a chart, is what shapes Christlike character.')}</div>`);

/* 4 · Planets */
S.push(`<h2>Planets in Signs</h2><p>Each planet stands for a different part of you. Its sign shows the <i>style</i> of that part${known?', and its house shows the <i>area of life</i> where it shows up most':''}. The first five (Sun to Mars) are called <b>personal planets</b> and describe you most directly. Jupiter and Saturn are <b>social planets</b>. Uranus, Neptune and Pluto are <b>generational planets</b>.</p>
${P.map(pcard).join('')}
<div class="card">${anchor('Romans 12:2','Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Every part of you, however it is described here, can be renewed by God.')}</div>`);

/* 5 · Houses */
S.push(`<h2>The Twelve Houses</h2><p>The houses divide your chart into 12 areas of life, like slices of a pizza. The sign at the start of each house (its “cusp”) shows your style in that area, and any planets inside it show where much of your energy goes.</p>
${known?'':'<div class="card"><b>Your birth time is unknown, so your houses can’t be calculated.</b> Below is what each house means in general, so you can still learn the basics.</div>'}
${HOUSES.map((h,i)=>{const ps=known?P.filter(p=>p.h==i+1):[],cs=known?sOf(c.cu[i]):null;
return `<div class="card"><h3>${ord(i+1)} House · ${h.t}</h3><p>${h.d}</p>
${known?`<p><b>Your ${ord(i+1)} house starts in ${cs.t}</b> <span class="mut">(${fmt(c.cu[i])})</span>, so you tend to approach ${h.t.toLowerCase()} ${cs.sty}.</p>
${ps.length?`<p><b>Planets here:</b></p><ul>${ps.map(p=>`<li>${p.g} <b>${p.nm}</b> (${PLN[p.nm].sh}): this part of you is often expressed through ${h.ar}.</li>`).join('')}</ul>`:'<p class="mut">No planets here. That does not mean this area is unimportant; it just isn’t a main focus in astrology’s view.</p>'}`:''}
<p><b>Reflect:</b> ${h.q}</p>${anchor(h.v,h.vt)}</div>`}).join('')}`);

/* 6 · Aspects */
const asp=[...c.asp].sort((a,b)=>a.orb-b.orb);
S.push(`<h2>Aspects</h2><p>Aspects are the angles between your planets. They show which parts of you get along easily and which ones create tension. Neither is “good” or “bad”: easy aspects can become lazy habits, and tense ones often become strengths through effort.</p>
<div class="grid">${Object.entries(ASPX).map(([n,a])=>`<div class="card"><b>${a.sy} ${n}</b> <span class="mut">· ${a.k}</span><p>${a.d}</p></div>`).join('')}</div>
<h3>Your aspects</h3><p class="mut">Sorted from closest (strongest) to widest. Orbs allowed: ${ASP.map(a=>a[0]+' '+a[2]+'°').join(', ')}. Planet-to-planet only.</p>
${tbl(['Planets','Aspect','Separation','Orb'],asp.map(a=>[a.a.g+' '+a.a.nm+' – '+a.b.g+' '+a.b.nm,ASPX[a.nm].sy+' '+a.nm,a.s.toFixed(2)+'°',a.orb.toFixed(2)+'°']))}
${asp.map(a=>{const x=ASPX[a.nm];return `<div class="card"><b>${a.a.g} ${a.a.nm} ${x.sy} ${a.b.g} ${a.b.nm}: ${a.nm}</b>${a.orb<2?' <span class="gold">· very close</span>':''}<p>${x.j(PLN[a.a.nm].sh,PLN[a.b.nm].sh)}</p>${anchor(x.v,x.vt)}</div>`}).join('')}`);

/* 7 · Elements & modalities */
const elLow=EL.filter((_,i)=>c.el[i]<=1),moLow=MO.filter((_,i)=>c.mo[i]<=1);
S.push(`<h2>Elements & Modalities</h2><p>Every sign belongs to one of four <b>elements</b> (the basic temperament) and one of three <b>modalities</b> (how it handles change). Counting where your 10 planets fall shows your overall balance.</p>
<div class="grid"><div class="card"><h3>Elements</h3>${bars(c.el,EL)}</div><div class="card"><h3>Modalities</h3>${bars(c.mo,MO)}</div></div>
${EL.map((e,i)=>`<div class="card"><b>${e}</b> <span class="mut">· ${ELX[e].s} · ${c.el[i]} planet${c.el[i]==1?'':'s'}</span><p>${ELX[e].d}</p>${e==elMax?`<p><b>Your strongest element.</b> ${ELX[e].hi}</p>`:''}${elLow.includes(e)?`<p><b>Low in your chart.</b> ${ELX[e].lo}</p>`:''}</div>`).join('')}
${MO.map((e,i)=>`<div class="card"><b>${e}</b> <span class="mut">· ${MOX[e].s} · ${c.mo[i]} planet${c.mo[i]==1?'':'s'}</span><p>${MOX[e].d}</p>${e==moMax?`<p><b>Your strongest modality.</b> ${MOX[e].hi}</p>`:''}${moLow.includes(e)?`<p><b>Low in your chart.</b> ${MOX[e].lo}</p>`:''}</div>`).join('')}
<div class="card">${anchor('Romans 12:4–5','Just as a body has many parts with different functions, so in Christ we, though many, form one body. What is strong in you can serve others, and what is missing in you is often supplied through God’s people.')}</div>`);

/* 8 · Life themes */
const ven=sOf(P[3].L),mer=sOf(P[2].L),mar=sOf(P[4].L),jup=sOf(P[5].L),sat=sOf(P[6].L),h7=known?sOf(c.cu[6]):null,mc=known?sOf(c.mc):null;
const theme=(t,body,v,vt)=>`<div class="card"><h3>${t}</h3>${body}${anchor(v,vt)}</div>`;
S.push(`<h2>Life Themes</h2><p>This section pulls your placements together into everyday areas of life. These are traditional readings to reflect on, not predictions.</p>
${theme('Who you are',`<p>With your Sun in ${sun.t}, astrology describes your core as ${sun.kw}. ${sun.life}${known?` With ${rise.t} rising, ${rise.rise.charAt(0).toLowerCase()+rise.rise.slice(1)}`:''}</p>`,'Ephesians 2:10','You are God’s handiwork, created in Christ Jesus to do good works. Your personality is a tool in His hands.')}
${theme('Your emotional world',`<p>Your Moon in ${moon.t} suggests you feel things ${moon.sty}. ${moon.life.replace('In everyday life, this','Emotionally, this')}</p><p><b>When you are stressed,</b> watch for: ${moon.gr.join(', ').toLowerCase()}.</p>`,'Psalm 62:8','Trust in Him at all times; pour out your hearts to Him, for God is our refuge.')}
${theme('How you think and communicate',`<p>Your Mercury in ${mer.t} suggests you think and speak ${mer.sty}. You may be good at ${mer.str.join(', ').toLowerCase()}, and may need to watch for ${mer.gr.join(', ').toLowerCase()}.</p>`,'James 1:19','Be quick to listen, slow to speak and slow to become angry.')}
${theme('Love and relationships',`<p>Your Venus in ${ven.t} suggests you show love ${ven.sty}. ${ven.life}</p>${known?`<p>Your 7th house of partnership starts in ${h7.t}, so in close relationships you may be drawn to people who are ${h7.kw}.</p>`:''}`,'1 Corinthians 13:4–7','Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It always protects, always trusts, always hopes, always perseveres.')}
${theme('Drive, work and calling',`<p>Your Mars in ${mar.t} suggests you take action ${mar.sty}. Your Saturn in ${sat.t} suggests your biggest life lessons may involve ${sat.gr[0].toLowerCase()}, and that maturity grows through ${sat.str.join(' and ').toLowerCase()}.${known?` Your Midheaven in ${mc.t} suggests you may thrive in work where you can act ${mc.sty}.`:''}</p>`,'Colossians 3:23','Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.')}
${theme('Growth and faith',`<p>Your Jupiter in ${jup.t} suggests you grow most when life lets you be ${jup.kw}. This may be where you feel most hopeful and generous.</p>`,'John 15:5','I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.')}`);

/* 9 · Strengths & growth */
const keys=[['Sun',P[0].L],['Moon',P[1].L],...(known?[['Rising',c.asc]]:[]),['Mercury',P[2].L],['Venus',P[3].L],['Mars',P[4].L]];
const focus=[];keys.forEach(([,L])=>{const s=sOf(L);if(!focus.includes(s))focus.push(s)});
S.push(`<h2>Strengths & Growth Areas</h2><p>Every sign has gifts and blind spots. Here they are for your most personal placements. Strengths are gifts to use for others; growth areas are where God’s grace meets you.</p>
${tbl(['Placement','Possible strengths','Possible growth areas','Christlike quality to grow'],keys.map(([n,L])=>{const s=sOf(L);return [`${n} in ${s.t}`,s.str.join(', '),s.gr.join(', '),`<b>${s.q}</b>`]}))}
<h3>Your growth focus</h3>${focus.map(s=>`<div class="card"><b>${s.t}: grow in ${s.q.toLowerCase()}</b><p>Watch for: ${s.gr.join(', ').toLowerCase()}.</p>${anchor(s.v,s.vt)}</div>`).join('')}`);

/* 10 · Christ at the Center */
const allStr=[...new Set(focus.flatMap(s=>s.str))].slice(0,6),allGr=[...new Set(focus.map(s=>s.q))];
const plan=[['Day 1','Psalm 139:13–16','Thank God for how He made you. Which of your strengths are you most grateful for?'],['Day 2','Galatians 2:20','Where am I still living from an old identity instead of from Christ?'],['Day 3','Galatians 5:22–23','Which fruit of the Spirit do I most need this week? Ask God for it by name.'],['Day 4','1 Peter 4:10','How can I use one of my strengths to serve someone today?'],['Day 5','2 Corinthians 12:9','Name one weakness and bring it honestly to God. Where do I need His grace?'],['Day 6','Philippians 2:3–5','Where could humility change how I respond to someone?'],['Day 7','Proverbs 3:5–6','What decision am I facing? Bring it to God rather than leaning on my own understanding.']];
S.push(`<h2>Christ at the Center</h2>
<div class="card"><p>You have just read a lot about yourself. Astrology can be an interesting mirror, but a mirror only shows; it cannot change, heal or save. This final section brings everything back to the One who made you and the stars.</p></div>
<div class="card"><h3>Your chart, in a few sentences</h3><p>Traditionally, your chart describes someone who is ${sun.kw} at the core (Sun in ${sun.t}), ${moon.kw} on the inside (Moon in ${moon.t})${known?`, and ${rise.kw} on the outside (Rising in ${rise.t})`:''}, with a strong ${elMax.toLowerCase()} temperament.</p><p>Those are descriptions of tendencies, <b>not your identity</b>.</p></div>
<div class="card"><h3>What God says about you</h3><ul>
<li>You are <b>fearfully and wonderfully made</b> (Psalm 139:14).</li>
<li>You are <b>God’s handiwork</b>, created for good works He prepared in advance (Ephesians 2:10).</li>
<li>In Christ, you are <b>a new creation</b> (2 Corinthians 5:17).</li>
<li>You are <b>a child of God</b>, lavishly loved by the Father (1 John 3:1).</li>
<li>You are <b>being transformed</b> into Christ’s image, step by step (2 Corinthians 3:18).</li></ul></div>
<div class="card"><h3>Your strengths are gifts to give away</h3><p>Your chart points to strengths like <b>${allStr.join(', ').toLowerCase()}</b>. Every good gift comes from God (James 1:17), and gifts are given to serve others (1 Peter 4:10). Ask: who could be blessed by these this week?</p></div>
<div class="card"><h3>Your growth areas are where grace meets you</h3><p>The qualities your chart suggests you grow in are: <b>${allGr.join('; ').toLowerCase()}</b>. You don’t grow in these by trying harder alone, but by staying close to Jesus (John 15:5) and letting the Spirit produce His fruit in you (Galatians 5:22–23).</p></div>
<div class="card"><h3>A 7-day reflection plan</h3><p class="mut">Read one passage each day, then sit with the question for a few quiet minutes.</p>${tbl(['Day','Read','Reflect'],plan.map(([d,v,q])=>[`<b>${d}</b>`,v,q]))}</div>
<div class="card"><h3>More passages for reflection</h3>${SC.map(s=>`<p><b class="gold">${s[0]}</b> ${s[1]} <i class="mut">${s[2]}</i></p>`).join('')}</div>
<div class="card disc"><h3>A prayer</h3><p><i>Lord, thank You for making me. Thank You for gifts like ${allStr.slice(0,3).join(', ').toLowerCase()}; help me use them to serve others and honor You. You know where I struggle. Grow in me ${allGr.slice(0,3).join(', ').toLowerCase()}. When I look for answers in myself or in the stars, turn my eyes back to You. My identity is not in my personality or my chart, but in Christ. Amen.</i></p></div>
<div class="card"><h3>The heavens point to their Maker</h3><p>God made the stars (Genesis 1:16), and “the heavens declare the glory of God” (Psalm 19:1). At their best, the stars do not point to themselves or to us. They point to Him. Placements do not reveal God’s will, gifts, calling or plans for you; those are found in Scripture, prayer and walking with Christ.</p><p class="gold" style="font-size:1.15rem"><b>Our identity is not found in the stars, but in Christ.</b></p></div>`);

/* 11 · Summary */
S.push(`<h2>Summary</h2><div class="card"><pre style="white-space:pre-wrap;font:inherit" id="sum">${summary(c)}</pre></div><div class="noprint"><button class="btn" onclick="navigator.clipboard.writeText($('#sum').textContent)">Copy summary</button> <button class="btn o" onclick="print()">Print / Save as PDF</button></div>${DISC}`);
return S}

function summary(c){const P=c.pl,known=!!c.cu,elMax=EL[c.el.indexOf(Math.max(...c.el))];
return `Selah chart — ${c.f.city}, ${c.f.d}/${c.f.m}/${c.f.y}

THE BIG THREE
Sun: ${fmt(P[0].L)} — ${sOf(P[0].L).kw}
Moon: ${fmt(P[1].L)} — ${sOf(P[1].L).kw}
Rising: ${known?fmt(c.asc)+' — '+sOf(c.asc).kw:'Unavailable (birth time unknown)'}

PLANETS
`+P.slice(2).map(p=>`${p.nm}: ${fmt(p.L)}${p.h?' · house '+p.h:''}${p.r?' ℞':''}`).join('\n')+`

Strongest element: ${elMax}

Our identity is not found in the stars, but in Christ. (Galatians 2:20)`}
