/* =====================================================================
   SELAH — shared code for every page
   Menu, saved results, quiz engine, and the Home / My Results /
   Devotionals / About pages. Load this first on every page.
   ===================================================================== */
const $=s=>document.querySelector(s);
const PAGE=document.body.dataset.page;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- Saved results (stored only in this browser) ---------- */
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},
set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}},
del(k){try{localStorage.removeItem(k)}catch(e){}}};
const when=t=>t?new Date(t).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}):'';

/* ---------- Small shared building blocks ---------- */
function tbl(h,rows){return `<div class="wrap"><table><tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('')}</table></div>`}
const bars=(a,l,max=10,fmtv=v=>v)=>a.map((v,i)=>`<div style="margin:8px 0"><div>${l[i]} <span class="mut">${fmtv(v)}</span></div><div class="bar"><i style="width:${Math.max(0,Math.min(100,v/max*100))}%"></i></div></div>`).join('');
const anchor=(v,vt,title)=>`<div class="anchor"><b class="gold">✝ ${title||'Christ at the center'}</b><p>${vt} <span class="mut">(${v})</span></p></div>`;
const li=a=>a.map(x=>`<li>${x}</li>`).join('');

/* ---------- The tests (used by the menu, Home and My Results) ---------- */
const TESTS=[
{id:'personality',href:'personality.html',ic:'◐',t:'Personality Type',time:'about 8 minutes · 32 questions',d:'Discover which of 16 personality types fits you best: how you get energy, take in information, make decisions and handle structure.'},
{id:'gifts',href:'spiritual-gifts.html',ic:'✝',t:'Spiritual Gifts',time:'about 10 minutes · 48 questions',d:'Explore how God may have equipped you to serve others and build up His church, based on the gifts described in Scripture.'},
{id:'chart',href:'birth-chart.html',ic:'✦',t:'Birth Chart',time:'about 2 minutes · birth details',d:'See where the Sun, Moon and planets were when you were born, explained in simple words as traditional symbols for reflection.'}];

/* ---------- Menu ---------- */
(function nav(){const n=$('#nav');if(!n)return;const on=p=>PAGE==p?' class="on"':'';const tOn=['personality','gifts','chart','report'].includes(PAGE);
n.innerHTML=`<a class="brand" href="index.html">SELAH</a><div class="links"><a href="index.html"${on('home')}>Home</a>
<div class="dd"><button type="button" class="ddb${tOn?' on':''}" aria-expanded="false" aria-haspopup="true">Tests ▾</button><div class="ddm" role="menu">${TESTS.map(t=>`<a role="menuitem" href="${t.href}"${on(t.id)}><span class="ic">${t.ic}</span><span><b>${t.t}</b><small>${t.time}</small></span></a>`).join('')}</div></div>
<a href="results.html"${on('results')}>My Results</a><a href="learn.html"${on('learn')}>Learn</a><a href="devotionals.html"${on('devotionals')}>Devotionals</a><a href="about.html"${on('about')}>About</a></div>`;
const b=n.querySelector('.ddb'),dd=n.querySelector('.dd');
b.onclick=e=>{e.stopPropagation();const o=dd.classList.toggle('open');b.setAttribute('aria-expanded',o)};
document.addEventListener('click',e=>{if(!dd.contains(e.target)){dd.classList.remove('open');b.setAttribute('aria-expanded',false)}});
document.addEventListener('keydown',e=>{if(e.key=='Escape'){dd.classList.remove('open');b.setAttribute('aria-expanded',false)}})})();

/* ---------- Quiz engine (used by Personality Type and Spiritual Gifts) ---------- */
function quiz(host,items,labels,btn,onDone){
host.innerHTML=`<div class="prog noprint"><div class="bar"><i id="pb" style="width:0"></i></div><span id="pc" class="mut">0 of ${items.length} answered</span></div>
${items.map((q,i)=>`<fieldset class="q" id="q${i}"><legend><span class="mut">${i+1}.</span> ${q}</legend><div class="lk">${labels.map((l,v)=>`<label><input type="radio" name="a${i}" value="${v+1}"><span>${l}</span></label>`).join('')}</div></fieldset>`).join('')}
<div class="err" id="qerr"></div><button class="btn" id="qgo" type="button">${btn}</button>`;
const val=i=>{const x=host.querySelector(`input[name=a${i}]:checked`);return x?+x.value:0};
host.addEventListener('change',()=>{const n=items.filter((_,i)=>val(i)).length;$('#pb').style.width=n/items.length*100+'%';$('#pc').textContent=`${n} of ${items.length} answered`});
$('#qgo').onclick=()=>{const a=items.map((_,i)=>val(i)),miss=a.indexOf(0);
if(miss>=0){$('#qerr').textContent=`Please answer every question. Question ${miss+1} is still empty.`;document.getElementById('q'+miss).scrollIntoView({behavior:'smooth',block:'center'});return}
onDone(a);scrollTo(0,0)}}

/* ---------- Faith note and devotionals ---------- */
const FAITH=`<div class="card disc"><h3>A Note on Faith & Self-Reflection</h3><p>Selah’s tests are tools for reflection. They can help you notice patterns, strengths and areas to grow, but no test can define who you are, decide your future or replace Scripture, prayer and the wisdom of your church community.</p><p>As Christians, our ultimate example is Jesus Christ. We are called to grow in His likeness, letting His Word and His Spirit shape our character.</p><p><b>Our identity is not found in a test, a type or the stars, but in Christ.</b></p><p class="mut">Galatians 2:20 | Romans 8:29 | 2 Corinthians 3:18</p></div>`;
const SC=[['Galatians 2:20','Paul describes a life where Christ, not self-image, is at the center.','Where am I living from an old identity instead of from Christ?'],['Romans 8:29','God’s aim is for believers to be conformed to the image of His Son.','Which Christlike quality is God shaping in me now?'],['2 Corinthians 3:18','Believers are transformed progressively as they look to the Lord.','What am I beholding that forms me most?'],['Galatians 5:22–23','The fruit of the Spirit describes character that grows, not a fixed temperament.','Which fruit do I most need to cultivate this season?'],['Philippians 2:5','Christ’s humble, serving mindset is the pattern for our attitudes.','Where could humility change how I respond?'],['John 15:5','Fruitfulness comes from abiding in Christ.','What helps me abide, and what distracts me?'],['Proverbs 3:5–6','Trust God rather than relying only on our own understanding.','Where am I leaning on my own understanding?'],['James 1:5','God gives wisdom generously to those who ask.','What decision do I need to bring to God for wisdom?']];

/* ---------- Pages that only need this file ---------- */
function homePage(){return `<section class="hero"><p class="gold eyebrow">SELAH · pause and reflect</p><h1>Know yourself.<br>Grow in Christ.</h1>
<p class="mut lead">Selah is a quiet place for self-reflection. Take a test, read your results in simple words, and let each one point you back to the God who made you.</p>
<a class="btn" href="#tests">Choose a test</a> <a class="btn o" href="results.html">My Results</a></section>
<h2 id="tests">Choose a test</h2><div class="tests">${TESTS.map(t=>{const done=t.id=='chart'?store.get('selah-chart'):store.get('selah-'+t.id);
return `<a class="card test" href="${t.href}"><span class="ic big">${t.ic}</span><h3>${t.t}</h3><p>${t.d}</p><p class="mut small">${t.time}</p>${done?`<p class="small gold">✓ Taken ${when(done.saved)}: view or retake</p>`:'<p class="small gold">Start →</p>'}</a>`}).join('')}</div>
<h2>How Selah works</h2><div class="grid"><div class="card"><b class="gold">1 · Pause</b><p>Pick a test and answer honestly. There are no right or wrong answers.</p></div><div class="card"><b class="gold">2 · Reflect</b><p>Read your results in plain words, with strengths, growth areas and questions to think about.</p></div><div class="card"><b class="gold">3 · Grow</b><p>Every result ends with Scripture and a Christ-centered reflection, because growth happens in Him.</p></div></div>
${FAITH}`}

function resultsPage(){const p=store.get('selah-personality'),g=store.get('selah-gifts'),c=store.get('selah-chart'),cf=store.get('selah');
const none=t=>`<p class="mut">Not taken yet.</p><a class="btn o" href="${t}">Take this test</a>`;
let h=`<h2>My Results</h2><p class="mut">Your results are saved only in this browser on this device. Nobody else can see them.</p><div class="tests">
<div class="card"><span class="ic big">◐</span><h3>Personality Type</h3>${p?`<p><b class="gold" style="font-size:1.4rem">${p.code}</b> · ${p.name}</p><p class="mut small">Taken ${when(p.saved)}</p><a class="btn o" href="personality.html">View full result</a>`:none('personality.html')}</div>
<div class="card"><span class="ic big">✝</span><h3>Spiritual Gifts</h3>${g?`<p>Top gifts: <b>${g.top.join(', ')}</b></p><p class="mut small">Taken ${when(g.saved)}</p><a class="btn o" href="spiritual-gifts.html">View full result</a>`:none('spiritual-gifts.html')}</div>
<div class="card"><span class="ic big">✦</span><h3>Birth Chart</h3>${c&&cf?`<p>Sun in <b>${c.sun}</b> · Moon in <b>${c.moon}</b>${c.rise?` · Rising <b>${c.rise}</b>`:''}</p><p class="mut small">${esc(c.place)} · saved ${when(c.saved)}</p><a class="btn o" href="report.html#f=${encodeURIComponent(JSON.stringify(cf))}">Open full report</a>`:none('birth-chart.html')}</div></div>`;
const n=[p,g,c].filter(Boolean).length;
if(n>=2)h+=`<div class="card"><h3>Bringing it together</h3><p>You have looked at yourself from ${n} angles${p?`: your personality (<b>${p.code}</b>, ${p.name})`:''}${g?`${p?',':':'} the ways God may have equipped you to serve (<b>${g.top.join(', ')}</b>)`:''}${c?`${p||g?' and':':'} the traditional symbols of your birth chart (Sun in <b>${c.sun}</b>)`:''}.</p>
<p><b>Reflect:</b> Where do these results agree with each other? Where do they surprise you? Which one quality would you most like God to grow in you this month?</p>
<p><b>Next step:</b> share what you learned with a trusted friend, mentor or pastor and ask: “Does this sound like me? Where have you seen God use me?”</p>${anchor('Ephesians 2:10','You are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for you to do. Every part of how you are made is meant to be offered back to Him.')}</div>`;
if(n)h+=`<p><button class="btn o" type="button" onclick="if(confirm('Delete all your saved results from this device?')){['selah','selah-chart','selah-personality','selah-gifts'].forEach(store.del);location.reload()}">Delete my saved results</button></p>`;
return h}

if(PAGE=='home')$('#m').innerHTML=homePage();
if(PAGE=='results')$('#m').innerHTML=resultsPage();
if(PAGE=='devotionals')$('#m').innerHTML=`<h2>Devotionals</h2><p class="mut">Short passages to pause on. Read one slowly, then sit with the question.</p>${SC.map(s=>`<div class="card"><b class="gold">${s[0]}</b><p>${s[1]}</p><p class="mut"><i>${s[2]}</i></p></div>`).join('')}`;
if(PAGE=='about')$('#m').insertAdjacentHTML('beforeend',FAITH);
