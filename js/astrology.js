/* =====================================================================
   SELAH — Birth chart: astronomy calculations and chart wheel
   Needs js/common.js (and js/report-content.js on report.html).
   ===================================================================== */
const SG=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],SY='♈♉♊♋♌♍♎♏♐♑♒♓';
const EL=['Fire','Earth','Air','Water'],MO=['Cardinal','Fixed','Mutable'];
const PL=[['Sun','☉','core identity and vitality'],['Moon','☽','emotional needs and instinctive responses'],['Mercury','☿','thinking and communication'],['Venus','♀','values, affection and attraction'],['Mars','♂','drive, assertion and effort'],['Jupiter','♃','growth, optimism and meaning'],['Saturn','♄','discipline, limits and responsibility'],['Uranus','♅','change and independence'],['Neptune','♆','imagination and idealism'],['Pluto','♇','transformation and intensity']];
const SD=[['bold, direct initiative','courage and a willingness to start','impatience'],['steady, sensory persistence','reliability and patience','stubbornness'],['curious, versatile exchange','adaptability and wit','scattered attention'],['protective, feeling-led care','empathy and loyalty','moodiness or guardedness'],['warm, expressive confidence','generosity and creativity','pride'],['careful, practical refinement','diligence and discernment','over-criticism'],['harmonizing, relational balance','fairness and diplomacy','indecision'],['deep, concentrated intensity','resilience and insight','control or secrecy'],['expansive, truth-seeking vision','optimism and honesty','restlessness or bluntness'],['structured, ambitious endurance','discipline and responsibility','rigidity or harshness'],['independent, idea-driven originality','vision and fairness','detachment'],['gentle, imaginative sensitivity','compassion and intuition','escapism or over-absorbing others’ feelings']];
const HD=['identity and self-expression','resources and values','communication and learning','home and foundations','creativity and play','work and daily routines','relationships and partnerships','shared resources and transformation','philosophy and higher learning','career and public life','community and aspirations','inner reflection and solitude'];
const ASP=[['Conjunction',0,8],['Sextile',60,5],['Square',90,7],['Trine',120,7],['Opposition',180,8]];
const CITIES=`Indianapolis|United States|39.7684|-86.1581|America/Indiana/Indianapolis
New York|United States|40.7128|-74.006|America/New_York
Chicago|United States|41.8781|-87.6298|America/Chicago
Los Angeles|United States|34.0522|-118.2437|America/Los_Angeles
Houston|United States|29.7604|-95.3698|America/Chicago
Atlanta|United States|33.749|-84.388|America/New_York
Miami|United States|25.7617|-80.1918|America/New_York
Seattle|United States|47.6062|-122.3321|America/Los_Angeles
Denver|United States|39.7392|-104.9903|America/Denver
Toronto|Canada|43.6532|-79.3832|America/Toronto
Mexico City|Mexico|19.4326|-99.1332|America/Mexico_City
São Paulo|Brazil|-23.5505|-46.6333|America/Sao_Paulo
Buenos Aires|Argentina|-34.6037|-58.3816|America/Argentina/Buenos_Aires
London|United Kingdom|51.5074|-0.1278|Europe/London
Paris|France|48.8566|2.3522|Europe/Paris
Berlin|Germany|52.52|13.405|Europe/Berlin
Madrid|Spain|40.4168|-3.7038|Europe/Madrid
Rome|Italy|41.9028|12.4964|Europe/Rome
Moscow|Russia|55.7558|37.6173|Europe/Moscow
Cairo|Egypt|30.0444|31.2357|Africa/Cairo
Lagos|Nigeria|6.5244|3.3792|Africa/Lagos
Accra|Ghana|5.6037|-0.187|Africa/Accra
Douala|Cameroon|4.0511|9.7679|Africa/Douala
Yaoundé|Cameroon|3.848|11.5021|Africa/Douala
Bamenda|Cameroon|5.9597|10.1459|Africa/Douala
Nairobi|Kenya|-1.2921|36.8219|Africa/Nairobi
Johannesburg|South Africa|-26.2041|28.0473|Africa/Johannesburg
Dubai|United Arab Emirates|25.2048|55.2708|Asia/Dubai
Mumbai|India|19.076|72.8777|Asia/Kolkata
Delhi|India|28.6139|77.209|Asia/Kolkata
Beijing|China|39.9042|116.4074|Asia/Shanghai
Tokyo|Japan|35.6762|139.6503|Asia/Tokyo
Seoul|South Korea|37.5665|126.978|Asia/Seoul
Manila|Philippines|14.5995|120.9842|Asia/Manila
Sydney|Australia|-33.8688|151.2093|Australia/Sydney
Auckland|New Zealand|-36.8485|174.7633|Pacific/Auckland
Reykjavik|Iceland|64.1466|-21.9426|Atlantic/Reykjavik`.split('\n').map(l=>{const a=l.split('|');return{n:a[0],c:a[1],lat:+a[2],lon:+a[3],tz:a[4]}});
const DISC=`<div class="card disc"><h3>A Note on Faith, Identity & Self-Discovery</h3><p>This platform provides traditional astrological interpretations for informational and self-reflective purposes only. It is not intended to define your identity, determine your destiny, predict your future, or replace your personal convictions.</p><p>As Christians, we recognize that our ultimate example is Jesus Christ. We are called to progressively grow in His likeness, allowing His teachings, character and Word to guide our lives.</p><p>Astrology should never take the place of Scripture, prayer, discernment or our relationship with God. No planetary placement defines who you are or limits who you can become in Christ.</p><p><b>Our identity is not found in the stars, but in Christ.</b></p><p class="mut">Galatians 2:20 | Romans 8:29 | 2 Corinthians 3:18</p></div>`;
const n360=x=>((x%360)+360)%360,rd=x=>x*Math.PI/180,dg=x=>x*180/Math.PI;
function tzOff(tz,ms){const p=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'}).formatToParts(new Date(ms)).reduce((a,x)=>(a[x.type]=+x.value,a),{});return Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)-Math.floor(ms/1000)*1000}
function toUTC(y,m,d,h,mi,tz){const g=Date.UTC(y,m-1,d,h,mi);let u=g-tzOff(tz,g);u=g-tzOff(tz,u);return u}
function eclLon(b,t){const v=Astronomy.GeoVector(b,t,true);return Astronomy.SphereFromVector(Astronomy.RotateVector(Astronomy.Rotation_EQJ_ECT(t),v)).lon}
function lonFromRA(ra,e){return n360(dg(Math.atan2(Math.sin(rd(ra)),Math.cos(rd(ra))*Math.cos(rd(e)))))}
function plac(ramc,e,lat){const cu=(k,up)=>{let ra=up?ramc+k*90:ramc+180-k*90;for(let i=0;i<20;i++){const L=lonFromRA(ra,e),dec=Math.asin(Math.sin(rd(e))*Math.sin(rd(L))),x=-Math.tan(rd(lat))*Math.tan(dec);if(Math.abs(x)>=1)return null;const SA=dg(Math.acos(x));ra=up?ramc+k*SA:ramc+180-k*(180-SA)}return lonFromRA(ra,e)};
const c11=cu(1/3,1),c12=cu(2/3,1),c2=cu(2/3,0),c3=cu(1/3,0);return[c11,c12,c2,c3].some(x=>x===null)?null:{c11,c12,c2,c3}}
function calc(f){const t=Astronomy.MakeTime(new Date(f.utc)),T=t.tt/36525,out={notes:[]};
out.pl=PL.map(([nm,g],i)=>{const b=Astronomy.Body[nm],L=eclLon(b,t);let r=false;if(i>1){let d=eclLon(b,t.AddDays(.5))-eclLon(b,t.AddDays(-.5));d=((d+540)%360)-180;r=d<0}return{nm,g,L:n360(L),r}});
const nn=n360(125.04452-1934.136261*T);out.nodes=[{nm:'North Node (mean)',L:nn},{nm:'South Node (mean)',L:n360(nn+180)}];
out.asc=null;if(f.known){const lat=f.lat,e=Astronomy.e_tilt(t).tobl,ramc=n360(Astronomy.SiderealTime(t)*15+f.lon),mc=lonFromRA(ramc,e),asc=n360(dg(Math.atan2(Math.cos(rd(ramc)),-(Math.sin(rd(ramc))*Math.cos(rd(e))+Math.tan(rd(lat))*Math.sin(rd(e))))));
let pc=Math.abs(lat)<66?plac(ramc,e,lat):null,cu;
if(pc){cu=[asc,pc.c2,pc.c3,n360(mc+180),n360(pc.c11+180),n360(pc.c12+180),n360(asc+180),n360(pc.c2+180),n360(pc.c3+180),mc,pc.c11,pc.c12];out.hs='Placidus'}
else{const s=Math.floor(asc/30)*30;cu=[...Array(12)].map((_,i)=>n360(s+i*30));out.hs='Whole Sign';out.notes.push('Placidus cannot be computed reliably at this latitude, so Whole Sign houses were used instead.')}
out.asc=asc;out.mc=mc;out.cu=cu}
return out}
const hseOf=(L,cu)=>{for(let i=0;i<12;i++){const a=cu[i],b=cu[(i+1)%12];if(n360(L-a)<n360(b-a))return i+1}return 1};
const sgn=L=>Math.floor(L/30),fmt=L=>`${Math.floor(L%30)}°${String(Math.floor((L%1)*60)).padStart(2,'0')}′ ${SG[sgn(L)]}`;
function build(f){const c=calc(f);const P=c.pl;if(c.cu)P.forEach(p=>p.h=hseOf(p.L,c.cu));
c.asp=[];for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.abs(P[i].L-P[j].L),s=d>180?360-d:d;for(const[nm,a,o]of ASP){const orb=Math.abs(s-a);if(orb<=o){c.asp.push({a:P[i],b:P[j],nm,s,orb});break}}}
c.el=[0,0,0,0];c.mo=[0,0,0];P.forEach(p=>{c.el[sgn(p.L)%4]++;c.mo[sgn(p.L)%3]++});
if(c.cu){const sun=P[0],day=sun.h>=7;c.pof=n360(day?c.asc+P[1].L-sun.L:c.asc-P[1].L+sun.L)}
c.f=f;return c}
function wheel(c){const S=360,C=S/2,R=170,asc=c.asc||0,ang=L=>rd(180+L-asc),pt=(L,r)=>[C+r*Math.cos(ang(L)),C-r*Math.sin(ang(L))];let s=`<svg viewBox="0 0 ${S} ${S}" style="width:100%;max-width:460px;display:block;margin:auto" role="img" aria-label="Natal chart wheel"><circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="var(--gold)"/><circle cx="${C}" cy="${C}" r="${R-26}" fill="none" stroke="var(--bd)"/><circle cx="${C}" cy="${C}" r="70" fill="none" stroke="var(--bd)"/>`;
for(let i=0;i<12;i++){const[a,b]=[pt(i*30,R),pt(i*30,R-26)],g=pt(i*30+15,R-13);s+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="var(--bd)"/><text x="${g[0]}" y="${g[1]}" font-size="13" text-anchor="middle" dominant-baseline="central">${SY[i]}</text>`}
if(c.cu)c.cu.forEach((L,i)=>{const[a,b]=[pt(L,R-26),pt(L,70)],m=pt(L+4,82);s+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="var(--br)" stroke-width="${i%3==0?1.6:.5}"/><text x="${m[0]}" y="${m[1]}" font-size="8" fill="var(--tx2)" text-anchor="middle" dominant-baseline="central">${i+1}</text>`});
c.asp.forEach(a=>{const[p,q]=[pt(a.a.L,70),pt(a.b.L,70)];s+=`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="var(--gold)" stroke-width=".7" opacity="${a.nm=='Square'||a.nm=='Opposition'?.9:.5}" ${a.nm=='Sextile'||a.nm=='Trine'?'stroke-dasharray="3 2"':''}/>`});
const ps=[...c.pl].sort((a,b)=>a.L-b.L);let last=-99;ps.forEach(p=>{p.D=Math.max(p.L,last+7);last=p.D});
ps.forEach(p=>{const g=pt(p.D,R-44);s+=`<text x="${g[0]}" y="${g[1]}" font-size="14" text-anchor="middle" dominant-baseline="central" fill="var(--br)">${p.g}</text>`});return s+'</svg>'}

/* ---------- Birth chart pages (birth-chart.html and report.html) ---------- */
let R=null,tab=0,PLACE=null,PLIST=[],ptimer=null;
function setCur(f){try{sessionStorage.setItem('selah-current',JSON.stringify(f))}catch(e){}}
function getCur(){try{if(location.hash.startsWith('#f='))return JSON.parse(decodeURIComponent(location.hash.slice(3)))}catch(e){}
try{return JSON.parse(sessionStorage.getItem('selah-current'))}catch(e){return null}}
function openReport(f){setCur(f);location.href='report.html#f='+encodeURIComponent(JSON.stringify(f))}

/* Place search: any city or town in the world, via the free Open-Meteo
   geocoding service (GeoNames data). Falls back to the built-in list offline. */
const plabel=p=>[p.name,p.admin1&&p.admin1!==p.name?p.admin1:'',p.country].filter(Boolean).join(', ');
async function searchPlaces(q){const r=await fetch('https://geocoding-api.open-meteo.com/v1/search?count=8&language=en&format=json&name='+encodeURIComponent(q));
if(!r.ok)throw Error('Place search failed');const j=await r.json();
return (j.results||[]).filter(x=>x.timezone&&x.timezone!='GMT').map(x=>({name:x.name,admin1:x.admin1||'',country:x.country||'',lat:x.latitude,lon:x.longitude,tz:x.timezone}))}
function offlinePlaces(q){q=q.toLowerCase().trim();return CITIES.filter(c=>c.n.toLowerCase().startsWith(q)).slice(0,8).map(c=>({name:c.n,admin1:'',country:c.c,lat:c.lat,lon:c.lon,tz:c.tz}))}
async function findPlaces(text){const parts=text.split(',').map(s=>s.trim()).filter(Boolean),q=parts[0]||'';if(q.length<2)return[];
let r;try{r=await searchPlaces(q)}catch(e){r=offlinePlaces(q)}
const rest=parts.slice(1).join(' ').toLowerCase();if(rest){const m=r.filter(p=>rest.split(/\s+/).every(w=>(p.admin1+' '+p.country).toLowerCase().includes(w)));if(m.length)r=m}
return r}
function placeInput(){PLACE=null;$('#psel').innerHTML='';const q=$('#city').value.trim();clearTimeout(ptimer);if(q.length<2){$('#plist').innerHTML='';return}
ptimer=setTimeout(async()=>{$('#plist').innerHTML='<span class="mut small">Searching…</span>';const r=await findPlaces(q);if($('#city').value.trim()!==q)return;PLIST=r;
$('#plist').innerHTML=r.length?`<span class="mut small">Choose your place:</span>`+r.map((p,i)=>`<button type="button" class="pick" onclick="pickPlace(${i})">${esc(plabel(p))}</button>`).join(''):'<span class="mut small">No places found. Check the spelling, or try a nearby larger town.</span>'},400)}
function showPlace(p){$('#psel').innerHTML=`✓ <b>${esc(plabel(p))}</b> <span class="mut">· ${p.lat.toFixed(2)}, ${p.lon.toFixed(2)} · time zone ${esc(p.tz)}</span>`}
function pickPlace(i){PLACE=PLIST[i];$('#city').value=plabel(PLACE);$('#plist').innerHTML='';showPlace(PLACE)}

function chartForm(){const dys=[...Array(31)].map((_,i)=>`<option>${i+1}</option>`).join(''),ms=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((x,i)=>`<option value="${i+1}">${x}</option>`).join(''),saved=store.get('selah');
return `<p class="gold eyebrow">✦ Birth Chart</p><h1>Your Birth Chart</h1><p class="mut lead">A map of the sky at the moment you were born, explained in simple words. Astrology is an old tradition of symbols; here it is used only as a mirror for reflection, always pointing back to Christ.</p>
${saved?`<div class="card"><b>You have a saved chart</b> for ${esc(saved.city)}, ${esc(saved.country)} (${saved.d}/${saved.m}/${saved.y}). <a class="btn o" href="report.html#f=${encodeURIComponent(JSON.stringify(saved))}">Open it</a></div>`:''}
<div class="card" id="form"><h3>Your birth information</h3><label>Date of birth</label><div class="row"><select id="d">${dys}</select><select id="mo">${ms}</select><input id="y" type="number" inputmode="numeric" placeholder="Year" min="1900" max="2100"></div>
<label>Time of birth</label><div class="row"><input id="hh" type="number" inputmode="numeric" placeholder="Hour (1–12)" min="1" max="12"><input id="mi" type="number" inputmode="numeric" placeholder="Minute" min="0" max="59"><select id="ap"><option>AM</option><option>PM</option></select></div>
<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="unk" style="width:auto"> I don’t know my birth time</label><p class="mut small">Without a birth time, the Rising sign and houses can’t be calculated.</p>
<label for="city">Place of birth</label><input id="city" placeholder="Type your city or town, e.g. Lagos or Paris, Texas" autocomplete="off">
<div id="plist" class="plist"></div><p id="psel" class="small"></p>
<p class="mut small">Type any city or town in the world. We look up its location and time zone automatically (place data from GeoNames via Open-Meteo).</p>
<label style="display:flex;gap:8px;align-items:center"><input type="checkbox" id="ack" style="width:auto"> I understand this is for reflection only, and that my identity is in Christ.</label>
<div class="err" id="err"></div><button class="btn" id="go" type="button" onclick="gen()">Generate My Full Report</button></div>${DISC}`}

async function gen(){const g=i=>$('#'+i).value,err=t=>{$('#err').textContent=t},btn=$('#go');
const d=+g('d'),m=+g('mo'),y=+g('y'),unk=$('#unk').checked;let h=+g('hh'),mi=+g('mi');
if(!y||y<1900||y>2100)return err('Enter a year between 1900 and 2100.');
const dt=new Date(Date.UTC(y,m-1,d));if(dt.getUTCDate()!=d)return err('That date does not exist.');
if(!unk&&(!(h>=1&&h<=12)||!(mi>=0&&mi<=59)||g('hh')===''||g('mi')===''))return err('Enter an hour (1–12) and minute (0–59), or tick “I don’t know my birth time”.');
if(!g('city').trim())return err('Please type your place of birth.');
if(!$('#ack').checked)return err('Please tick the box to confirm you understand this is for reflection only.');
btn.disabled=true;err('');btn.textContent='Finding your place…';
try{let place=PLACE;if(!place){const r=await findPlaces(g('city'));if(!r.length)throw Error('We could not find that place. Check the spelling, or try a nearby larger town.');place=r[0];PLACE=place;$('#city').value=plabel(place);showPlace(place)}
btn.textContent='Calculating planetary positions…';
if(typeof Astronomy=='undefined')throw Error('The astronomy library did not load. Check your internet connection and try again.');
let H=12,M=0,tstr='';if(!unk){H=h%12+($('#ap').value=='PM'?12:0);M=mi;tstr=`${h}:${String(mi).padStart(2,'0')} ${$('#ap').value}`}
const f={d,m,y,known:!unk,tstr,city:[place.name,place.admin1&&place.admin1!==place.name?place.admin1:''].filter(Boolean).join(', '),country:place.country,lat:place.lat,lon:place.lon,tz:place.tz,utc:toUTC(y,m,d,H,M,place.tz)};
build(f);openReport(f)}catch(e){err(e.message);btn.disabled=false;btn.textContent='Generate My Full Report'}}

function saveChart(f,c){store.set('selah',f);store.set('selah-chart',{sun:SG[sgn(c.pl[0].L)],moon:SG[sgn(c.pl[1].L)],rise:c.cu?SG[sgn(c.asc)]:null,place:`${f.city}, ${f.country}`,saved:Date.now()})}
function draw(){const m=$('#m');
if(PAGE=='chart'){m.innerHTML=chartForm();$('#city').addEventListener('input',placeInput);return}
if(!R){m.innerHTML='<h2>My Report</h2><p class="mut">No report yet.</p><a class="btn" href="birth-chart.html">Create my birth chart</a>';return}
const S=secs(R);m.innerHTML=`<div class="dash"><div class="side noprint">${TABS.map((t,i)=>`<a class="${i==tab?'on':''}" onclick="tab=${i};draw();scrollTo(0,0)">${t}</a>`).join('')}</div><div>${TABS.map((_,i)=>`<div class="sec" style="display:${i==tab?'block':'none'}">${S[i]}</div>`).join('')}${DISC}<div class="noprint"><a class="btn o" href="results.html">✓ Saved to My Results</a> <button class="btn o" onclick="print()">Print / PDF</button> <a class="btn o" href="birth-chart.html">New chart</a></div></div></div>`}
if(PAGE=='report'){const f=getCur();if(f){try{R=build(f);saveChart(f,R)}catch(e){$('#m').innerHTML='<h2>My Report</h2><div class="err">Calculation could not be completed: '+esc(e.message)+'</div>';throw e}}}
draw();
