/* =====================================================================
   SELAH — Personality Type test (16 types)
   Inspired by Carl Jung’s ideas of psychological type. This is Selah’s
   own reflection tool, not the official MBTI® assessment.
   Each question: [dimension 0–3, +1 if agreeing points to the FIRST letter
   (E, S, T, J) or -1 if it points to the second (I, N, F, P), text].
   ===================================================================== */
const PQ=[
[0,1,'I feel energized after spending time with a group of people.'],
[1,1,'I focus more on facts and details than on big ideas.'],
[2,1,'I make most decisions using logic and clear reasons.'],
[3,1,'I like to have a plan and stick to it.'],
[0,-1,'I need quiet time alone to recharge after social events.'],
[1,-1,'I often think about future possibilities and what could be.'],
[2,-1,'I think carefully about how a decision will affect people’s feelings.'],
[3,-1,'I like to keep my options open instead of deciding early.'],
[0,1,'I usually speak up quickly in group conversations.'],
[1,1,'I trust what I can see and experience more than hunches.'],
[2,1,'Being fair and consistent matters more to me than being tactful.'],
[3,1,'I feel more relaxed once a decision has been made.'],
[0,-1,'I prefer a deep one-on-one conversation to a big party.'],
[1,-1,'I enjoy exploring ideas, theories and hidden meanings.'],
[2,-1,'Keeping peace and harmony in my relationships is very important to me.'],
[3,-1,'I enjoy being spontaneous.'],
[0,1,'I enjoy meeting new people.'],
[1,1,'I prefer clear, step-by-step instructions.'],
[2,1,'I can give honest criticism even if it might hurt.'],
[3,1,'I usually finish tasks well before the deadline.'],
[0,-1,'I like to think things through before I speak.'],
[1,-1,'I notice patterns and connections that others miss.'],
[2,-1,'I am easily moved by other people’s stories.'],
[3,-1,'I often get things done in a burst close to the deadline.'],
[0,1,'I tend to think out loud.'],
[1,1,'I enjoy practical, hands-on tasks.'],
[2,1,'I solve problems by weighing up pros and cons.'],
[3,1,'I like my space and schedule to be organized.'],
[0,-1,'Too much social activity leaves me drained.'],
[1,-1,'I get bored with routine and doing the same thing repeatedly.'],
[2,-1,'I decide based on what feels right and fits my values.'],
[3,-1,'I am comfortable changing plans at the last minute.']];
const PLIK=['Strongly disagree','Disagree','Neutral','Agree','Strongly agree'];

const DIMS=[
{a:'E',b:'I',an:'Extraversion',bn:'Introversion',t:'Energy: where you get your energy'},
{a:'S',b:'N',an:'Sensing',bn:'Intuition',t:'Information: how you take in the world'},
{a:'T',b:'F',an:'Thinking',bn:'Feeling',t:'Decisions: how you make choices'},
{a:'J',b:'P',an:'Judging',bn:'Perceiving',t:'Structure: how you approach plans'}];
const LTR={
E:'You get energy from people and activity. You often think out loud and enjoy being around others.',
I:'You get energy from quiet and time alone. You often think before you speak and prefer deep conversations with a few people.',
S:'You focus on facts, details and what is real right now. You trust experience and like practical steps.',
N:'You focus on patterns, ideas and future possibilities. You trust hunches and like the big picture.',
T:'You make decisions mainly with logic and fairness. You value truth and consistency.',
F:'You make decisions mainly with your values and care for people. You value harmony and compassion.',
J:'You like plans, structure and closure. You feel better when things are decided.',
P:'You like flexibility and keeping your options open. You enjoy being spontaneous.'};
const JESUS=[
'Jesus spent time with large crowds, and He also often withdrew to quiet places to pray (Luke 5:16).',
'Jesus noticed small details, like a poor widow’s two coins (Mark 12:41–44), and He spoke in parables about the big picture of God’s kingdom.',
'Jesus spoke hard truths plainly, and He wept with His grieving friends (John 11:35).',
'Jesus set out for Jerusalem with clear purpose (Luke 9:51), and He still stopped for unplanned interruptions to help people (Mark 5:30).'];

const PT={
ISTJ:{n:'The Faithful Steward',s:'Responsible, careful and loyal. You value duty, honesty and doing things the right way, and people can count on you to keep your word.',str:['Dependable and hardworking','Organized and thorough','Honest and loyal'],gr:['Can be rigid when things change','May come across as cold or blunt','Can carry too much responsibility alone'],rel:'You show love by being faithful and practical: keeping promises and taking care of needs. Remember to say your love out loud too.',work:'You thrive with clear expectations and roles where accuracy matters, such as finance, administration, law, engineering or operations.',v:'Luke 16:10',vt:'Whoever can be trusted with very little can also be trusted with much. Your faithfulness in small things reflects a faithful God. Let it flow from grace, not from pressure.'},
ISFJ:{n:'The Caring Protector',s:'Warm, humble and devoted. You quietly notice what others need and work hard to take care of them.',str:['Kind and attentive','Loyal and patient','A practical helper'],gr:['Finding it hard to say no','Avoiding conflict','Neglecting your own needs'],rel:'You love through acts of service and remembering the little things. Let others care for you too.',work:'You thrive in caring, steady roles such as nursing, teaching, social work, office support or hospitality.',v:'Galatians 6:2 · Matthew 11:28',vt:'Carry each other’s burdens, and so fulfill the law of Christ. And remember that Jesus also invites you to bring your own burdens to Him and rest.'},
INFJ:{n:'The Insightful Counselor',s:'Thoughtful, deep and caring. You understand people well and long to help them grow and to make the world better.',str:['Insight into people','Compassion with conviction','Long-term vision'],gr:['Perfectionism','Burning out from carrying others','Pulling away when hurt'],rel:'You want deep, meaningful connection. Share your own needs instead of only listening to others.',work:'You thrive in meaningful work such as counseling, writing, ministry, teaching or nonprofits.',v:'Proverbs 20:5',vt:'The purposes of a person’s heart are deep waters, but one who has insight draws them out. Use your insight to point people to Christ, the true Wonderful Counselor.'},
INTJ:{n:'The Strategic Planner',s:'Independent, logical and visionary. You see how things could work better and make long-range plans to get there.',str:['Strategic thinking','Independence','High standards'],gr:['Impatience with others','Coming across as arrogant','Relying too much on your own understanding'],rel:'You show love by solving problems and being loyal. Make room for feelings, not just fixes.',work:'You thrive in complex work such as science, strategy, engineering, research or planning.',v:'Proverbs 3:5–6',vt:'Trust in the LORD with all your heart and lean not on your own understanding. Your sharp mind is a gift; humility keeps it in God’s hands.'},
ISTP:{n:'The Practical Problem-Solver',s:'Calm, hands-on and observant. You like to understand how things work and fix problems in the moment.',str:['Calm in a crisis','Practical skill','Flexible and resourceful'],gr:['Keeping feelings hidden','Coming across as detached','Avoiding long commitments'],rel:'You show care through practical help and shared activities. Try to put your feelings into words now and then.',work:'You thrive in hands-on work such as skilled trades, engineering, technology, emergency services or mechanics.',v:'Colossians 3:23',vt:'Whatever you do, work at it with all your heart, as working for the Lord. Skilled hands can be an act of worship.'},
ISFP:{n:'The Gentle Creator',s:'Gentle, artistic and sincere. You live by your values, enjoy beauty and express yourself more through actions than words.',str:['Kind and accepting','Creative','Present in the moment'],gr:['Avoiding conflict','Being very sensitive to criticism','Struggling with long-term planning'],rel:'You love in quiet, thoughtful ways. Speak up about what you need.',work:'You thrive in creative or caring work such as art, design, music, healthcare, or working with animals or nature.',v:'Exodus 31:3',vt:'God filled Bezalel with His Spirit, with wisdom, understanding and skill in all kinds of crafts. Your creativity reflects your Creator.'},
INFP:{n:'The Idealistic Healer',s:'Caring, imaginative and guided by deep values. You long for authenticity and want to help the people and causes you believe in.',str:['Empathy','Creativity','Strong values'],gr:['Self-criticism','Being hard on yourself when ideals aren’t met','Withdrawing when overwhelmed'],rel:'You love deeply and loyally. Remember that people, including you, don’t have to be perfect to be loved.',work:'You thrive in meaningful, creative work such as writing, counseling, the arts, advocacy or ministry.',v:'Romans 8:1',vt:'There is now no condemnation for those who are in Christ Jesus. Your ideals are beautiful, and grace covers the gap between who you are and who you long to be.'},
INTP:{n:'The Curious Thinker',s:'Analytical, curious and original. You love to understand ideas deeply and find the logic behind everything.',str:['Clear logic','Creativity with ideas','Open-mindedness'],gr:['Overthinking','Neglecting practical details','Coming across as distant'],rel:'You show love by sharing ideas and time. Remember that feelings need attention, not analysis.',work:'You thrive in work full of ideas, such as research, programming, science, philosophy or design.',v:'Colossians 2:2–3',vt:'In Christ are hidden all the treasures of wisdom and knowledge. The deepest truth is not only an idea but a Person.'},
ESTP:{n:'The Bold Doer',s:'Energetic, practical and action-oriented. You love a challenge and think best on your feet.',str:['Bold and confident','Quick problem-solving','Fun and persuasive'],gr:['Impatience','Taking risks without thinking','Getting bored with routine'],rel:'You bring adventure and fun. Slow down for deeper conversations too.',work:'You thrive in fast-moving work such as sales, starting businesses, sports, emergency response or marketing.',v:'Proverbs 19:2',vt:'Desire without knowledge is not good; how much more will hasty feet miss the way! Your boldness is a gift when it is guided by prayer and wisdom.'},
ESFP:{n:'The Joyful Encourager',s:'Lively, warm and fun. You enjoy people and the present moment, and you help others enjoy life.',str:['Joy and enthusiasm','Generosity and kindness','Practical help'],gr:['Avoiding hard conversations','Acting on impulse','Struggling with long-term planning'],rel:'You make people feel loved and included. Give time to deeper, harder conversations too.',work:'You thrive with people, such as in hospitality, performing, teaching children, events or healthcare.',v:'Nehemiah 8:10 · Romans 12:15',vt:'The joy of the LORD is your strength. Rejoice with those who rejoice; mourn with those who mourn. Your joy is a gift that can carry others.'},
ENFP:{n:'The Inspiring Visionary',s:'Enthusiastic, creative and people-loving. You see possibilities everywhere and inspire others to dream.',str:['Inspiring others','Creativity','Warmth and encouragement'],gr:['Starting more than you finish','Getting easily distracted','Overcommitting'],rel:'You bring warmth and excitement. Faithfulness over time will deepen your relationships.',work:'You thrive in creative, people-focused work such as communications, teaching, ministry, counseling or the arts.',v:'Galatians 6:9',vt:'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. God can turn your bursts of vision into lasting fruit.'},
ENTP:{n:'The Inventive Debater',s:'Quick, clever and curious. You love new ideas, lively debate and finding creative solutions.',str:['Inventiveness','Quick thinking','Confident communication'],gr:['Arguing to win','Neglecting follow-through','Missing how others feel'],rel:'You keep life interesting. Make sure people feel heard, not only challenged.',work:'You thrive in work that rewards new ideas, such as starting businesses, law, consulting, innovation or media.',v:'Colossians 4:6',vt:'Let your conversation be always full of grace, seasoned with salt. A sharp mind wins most when it is paired with gentleness.'},
ESTJ:{n:'The Steady Organizer',s:'Practical, decisive and organized. You like order and getting things done, and you naturally take charge.',str:['Leadership','Reliability','Clear direction'],gr:['Inflexibility','Coming across as bossy','Impatience with feelings'],rel:'You show love by providing and protecting. Listen before you fix.',work:'You thrive in structured leadership such as management, administration, public service, business or the military.',v:'Mark 10:43–45',vt:'Whoever wants to become great among you must be your servant. Jesus came not to be served but to serve. Lead the way He led.'},
ESFJ:{n:'The Warm Host',s:'Caring, sociable and loyal. You love bringing people together and making sure everyone is looked after.',str:['Hospitality','Loyalty','Practical care'],gr:['Needing approval','Taking criticism personally','Overextending yourself'],rel:'You make people feel welcomed and remembered. Your worth isn’t based on how well you please others.',work:'You thrive in caring, people-centered work such as teaching, healthcare, events, human resources or church ministry.',v:'1 Peter 4:9–10 · Galatians 1:10',vt:'Offer hospitality without grumbling, and use your gifts to serve others. Serve to please God first, not people.'},
ENFJ:{n:'The Uplifting Leader',s:'Warm, persuasive and people-focused. You see potential in others and love helping them grow.',str:['Encouraging others','Natural leadership','Strong communication'],gr:['Neglecting your own needs','Getting over-involved in others’ lives','Sensitivity to criticism'],rel:'You pour into people. Let others pour into you as well.',work:'You thrive helping people grow, such as in teaching, ministry, coaching, counseling or leadership.',v:'1 Thessalonians 5:11',vt:'Encourage one another and build each other up. Remember that people grow by God’s power, not only by your effort.'},
ENTJ:{n:'The Decisive Commander',s:'Confident, strategic and driven. You set goals, organize people and push to get big things done.',str:['Strong leadership','Strategic vision','Decisiveness'],gr:['Impatience','Coming across as harsh','Valuing results over people'],rel:'You show love by building a strong future. Gentleness and patience help others feel safe with you.',work:'You thrive in big-picture leadership such as executive roles, law, starting businesses, consulting or management.',v:'Micah 6:8',vt:'Act justly, love mercy and walk humbly with your God. Great leadership in God’s kingdom always walks hand in hand with humility.'}};

function scoreP(a){const sum=[0,0,0,0];PQ.forEach(([d,k],i)=>sum[d]+=(a[i]-3)*k);
const pct=sum.map(s=>Math.round((s+16)/32*100));/* % toward first letter */
return {code:DIMS.map((d,i)=>pct[i]>50?d.a:d.b).join(''),pct}}

function pResult(r){const t=PT[r.code];
return `<p class="gold eyebrow">◐ Personality Type · your result</p><h1>${r.code}</h1><h2 style="margin-top:-.2em">${t.n}</h2>
<div class="card"><p style="font-size:1.1rem">${t.s}</p></div>
<h3>Your four preferences</h3><p class="mut">Everyone uses both sides of each pair. These bars show which side you lean toward and how strongly. Close to 50% means you are fairly balanced.</p>
${DIMS.map((d,i)=>{const p=r.pct[i],first=p>50,lean=first?p:100-p,L=first?d.a:d.b;return `<div class="card"><b>${d.t}</b>
<div class="pair"><span${first?' class="gold"':''}>${d.a} · ${d.an}</span><span${first?'':' class="gold"'}>${d.bn} · ${d.b}</span></div>
<div class="bar two-way"><i style="width:${p}%"></i></div>
<p>You lean <b>${first?d.an:d.bn} (${L})</b> by ${lean}%${lean<=55?', which is nearly balanced, so you may relate to both sides':''}. ${LTR[L]}</p></div>`}).join('')}
<div class="grid"><div class="card"><h3>Strengths</h3><ul>${li(t.str)}</ul></div><div class="card"><h3>Growth areas</h3><ul>${li(t.gr)}</ul></div></div>
<div class="card"><h3>In relationships</h3><p>${t.rel}</p></div>
<div class="card"><h3>At work</h3><p>${t.work}</p></div>
<div class="card">${anchor(t.v,t.vt)}</div>
<div class="card"><h3>Christ, the perfect pattern</h3><p>Your type describes where you naturally lean. Jesus shows us both sides of every pair, perfectly balanced:</p><ul>${li(JESUS)}</ul><p>Wherever you lean, He is the pattern for growing in the other side too.</p>
<p><b>Reflect:</b> Which of my strengths can I use to serve someone this week? Which growth area do I want to bring to God in prayer?</p>
${anchor('2 Corinthians 3:18','We are being transformed into His image with ever-increasing glory. Your type is a starting point, not a box. Our identity is found in Christ.')}</div>
<p class="mut small">This test is inspired by Carl Jung’s ideas of psychological type. It is Selah’s own reflection tool, not the official MBTI® assessment, and results can change over time.</p>
<div class="noprint"><a class="btn o" href="results.html">✓ Saved to My Results</a> <button class="btn o" type="button" onclick="pStart()">Retake the test</button> <button class="btn o" type="button" onclick="print()">Print / PDF</button></div>`}

function pStart(){const m=$('#m');m.innerHTML=`<p class="gold eyebrow">◐ Personality Type</p><h1>Personality Type</h1>
<p class="mut lead">32 short statements, about 8 minutes. For each one, choose how much you agree. Answer as you really are, not as you wish you were. There are no right or wrong answers.</p><div id="qz"></div>${FAITH}`;
quiz($('#qz'),PQ.map(q=>q[2]),PLIK,'See my personality type',a=>{const r=scoreP(a);store.set('selah-personality',{...r,name:PT[r.code].n,saved:Date.now()});m.innerHTML=pResult(r)});scrollTo(0,0)}

if(PAGE=='personality'){const s=store.get('selah-personality');if(s&&PT[s.code])$('#m').innerHTML=pResult(s);else pStart()}
