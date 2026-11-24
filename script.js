(() => {
"use strict";
const W=1200,H=800,FPS=60;
const C={bg1:"#080c1a",bg2:"#020309",ivory:"#f4eddd",champ:"#cdbd9c",gold:"#c9a356",bright:"#eccb80",amber:"#ffb252"};
const statements = [
"Ты умеешь превращать *обычные моменты* в нечто важное.",
"Твоё *присутствие* меняет атмосферу вокруг.",
"Ты замечаешь *мелочи*.",
"Рядом с тобой люди чувствуют, что их *замечают*.",
"Твоя сила не обязана быть *громкой*.",
"Некоторых помнят, даже если они *ничего не делают специально*.",
"После твоего появления в комнате становится *теплее*.",
"Ты слушаешь так, будто *каждое слово* важно.",
"Рядом с тобой *молчать комфортно*.",
"Ты приносишь спокойствие в *шумные места*.",
"Рядом с тобой люди могут *выдохнуть*.",
"Ты помнишь детали, которые, казалось, *никто не заметил*.",
"Твой смех *меняет атмосферу* в комнате.",
"Ты *нежен*, но это не делает тебя слабым.",
"Ты говоришь *«спасибо»* искренне.",
"Ты умеешь прилагать *усилия* так, что всё выглядит легко.",
"Ты задаёшь *второй вопрос* — тот самый, который действительно важен.",
"Твоя *доброта* не требует зрителей.",
"Ты превращаешь *незнакомцев* в знакомых.",
"После тебя места становятся немного *лучше*.",
"Ты *неповторим*.",
"Твоя *честность* мягкая, но ясная.",
"Ты поддерживаешь людей, не привлекая к этому *внимания*.",
"Ты умеешь *прощать* с редким достоинством.",
"Твоё *терпение* — тихая щедрость.",
"Ты знаешь, когда нужно *говорить*, а когда — просто быть рядом.",
"С тобой *трудные дни* переживаются легче.",
"Твоё *любопытство* делает мир интереснее.",
"Ты находишь *красоту* там, где другие проходят мимо.",
"Ты *приходишь на помощь* — и это меняет всё.",
"Ты остаёшься *стойким*, когда другие теряются.",
"Твоя *смелость* не нуждается в объявлениях.",
"Ты *веришь в людей*, даже когда у них ещё нет доказательств.",
"Твоё тепло *не наигранное*.",
"Ты принимаешь *человека, которым становишься*.",
"Твои *тихие минуты* говорят больше многих речей.",
"Ты превращаешь простые планы в *особенные события*.",
"Ты проявляешь *заботу* конкретными и внимательными поступками.",
"Ты замечаешь, *что чувствуют люди*, а не только то, что они говорят.",
"Твоя *постоянная поддержка* — настоящий подарок окружающим.",
"Ты умеешь *не соглашаться* с уважением.",
"Ты *радуешься* чужим успехам, не сравнивая их со своими.",
"Ты доказываешь, что *добрые люди* умеют быть сильными.",
"Ты щедро отдаёшь *заслуги другим* и честно берёшь ответственность.",
"Люди начинают тебе *доверять* быстрее, чем сами замечают.",
"Твой *голос* успокаивает.",
"С тобой *ожидание* кажется короче.",
"Твой *стиль* принадлежит только тебе.",
"Ты помогаешь так естественно, что *тебя даже не успевают поблагодарить*.",
"Ты помнишь *дни рождения, имена* и истории за ними.",
"У тебя есть *чувство момента*: ты знаешь, когда разрядить обстановку.",
"Ты превращаешь *неловкость* в лёгкость.",
"С тобой люди почти везде чувствуют себя *как дома*.",
"Твой *юмор* никого не исключает.",
"Ты *спокойно несёшь* то, что другим далось бы нелегко.",
"Ты *смел* даже тогда, когда никто не аплодирует.",
"С тобой хорошие идеи становятся *не страшно произнести вслух*.",
"Ты *поддерживаешь*, не ставя себя выше других.",
"Ты *остаёшься добрым*, даже когда это непросто.",
"Твои *принципы* высоки, а великодушие ещё выше.",
"Ты замечаешь тех, кто *стоит в одиночестве*.",
"Ты можешь *изменить настроение* одной фразой.",
"Люди *заимствуют* твою смелость, даже не говоря об этом.",
"Ты придаёшь *искренности* особую элегантность.",
"Твоё *влияние* ощущается даже после твоего ухода.",
"Ты учишь *своим примером*, а не нравоучениями.",
"Ты помогаешь воспринимать *ошибки* как часть жизни, а не как конец пути.",
"Ты *вдохновляешь* пробовать, не оказывая давления.",
"Твои *слова* остаются с людьми на годы.",
"Ты стал причиной того, что *кто-то не сдался*.",
"Ты превращаешь *обычные места* в воспоминания.",
"Ты умеешь *слышать то, что скрыто между строк*.",
"Ты проявляешь *великодушие* в мелочах — а именно в них оно и важно.",
"Ты относишься к *каждому* так, будто он важен, потому что для тебя это так.",
"Твоя *интуиция* проявляется тихо, но часто оказывается верной.",
"Ты одновременно *мягкий* и несгибаемый.",
"Ты *растёшь* так, как не всегда сам замечаешь.",
"Твоё присутствие *невозможно повторить*.",
"Тебя легко не заметить, только если *не смотреть внимательно*.",
"Рядом с тобой *время становится щедрее*.",
"Ты *оставляешь место* для других — и за своим столом, и в своей истории.",
"Ты показываешь людям, как быть *добрее к себе*.",
"В тебе есть *глубина*, которая раскрывается постепенно.",
"Твоя *преданность* тиха и неизменна.",
"Ты умеешь быть *серьёзным*, не становясь отстранённым.",
"Ты *внимателен* так, что никогда не требуешь благодарности.",
"Ты относишься к *разговору* как к чему-то ценному.",
"Ты делаешь хорошие дни *ещё лучше*, а тяжёлые — легче.",
"Твоя *улыбка* никогда не кажется обязанностью.",
"Ты *понимаешь* больше, чем говоришь.",
"Рядом с тобой люди чувствуют себя *способными*.",
"С тобой легко почувствовать, что ты *на своём месте*.",
"Ты меняешь людей вокруг себя — *мягко и к лучшему*.",
"Тебя помнят в *деталях*: фразе, жесте, интонации.",
"Ты *важен* — и это не выразить одним предложением.",
"Люди *замечают твоё отсутствие* и чувствуют радость, когда ты возвращаешься.",
"Ты именно тот человек, *на которого хочется равняться*.",
"Ты *заслуживаешь* такой же заботы, какую так свободно даришь другим.",
"Мир становится *немного лучше* благодаря тому, что ты в нём есть.",
"И это лишь *сто* из бесчисленных причин."
];
const $=s=>document.querySelector(s), canvas=$("#scene"), ctx=canvas.getContext("2d");
let dpr=1, paused=false, startAt=performance.now(), elapsed=0, last=0, revealed={}, current=-1, phase=-2.6, duration=5, count=0, sweepX=-460, dust=[], trails=[];
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const smooth=t=>(t=clamp(t),t*t*(3-2*t));
const ease=t=>1-Math.pow(1-clamp(t),3);
function resize(){dpr=Math.min(devicePixelRatio||1,2);let r=canvas.getBoundingClientRect();canvas.width=Math.round(r.width*dpr);canvas.height=Math.round(r.height*dpr);}
new ResizeObserver(resize).observe(canvas); resize();
function rnd(a,b){return a+Math.random()*(b-a)}
function initParticles(){dust=Array.from({length:44},()=>({x:rnd(0,W),y:rnd(20,H-20),vx:rnd(4,16)*(Math.random()<.25?-1:1),s:rnd(2,9),p:rnd(0,Math.PI*2),sp:rnd(.2,.7),a:rnd(.1,.34),r:Math.random()<.7?1:2}));trails=Array.from({length:8},(_,i)=>({x:rnd(-450,W),y:[139,181,244,555,600,647,705,745][i],len:rnd(180,420),v:(Math.random()<.5?-1:1)*rnd(110,330),a:rnd(.4,.85)}));}
initParticles();
function fit(){ctx.setTransform(canvas.width/W,0,0,canvas.height/H,0,0);}
function textWidth(text,size,weight="normal",family="Georgia"){ctx.font=`${weight} ${size}px ${family}`;return ctx.measureText(text).width;}
function splitMarkup(s){return [...s.matchAll(/(\*[^*]+\*|[^*]+)/g)].map(m=>({t:m[0].replaceAll("*",""),hot:m[0][0]==="*"}));}
function drawMarked(s,x,y,size,maxWidth,alpha=1,center=true){let parts=splitMarkup(s), words=[];for(let p of parts){for(let w of p.t.split(/(\s+)/).filter(Boolean)){if(!/^\s+$/.test(w))words.push({t:w,hot:p.hot,space:words.length>0});else if(words.length)words[words.length-1].nextSpace=true;}}
 let lines=[],line=[],width=0;for(let w of words){let ww=textWidth(w.t,size,w.hot?"bold italic":"normal");let sp=w.space?textWidth(" ",size):0;if(width+sp+ww>maxWidth&&line.length){lines.push({items:line,width});line=[];width=0;sp=0;}line.push({...w,w:ww,sp});width+=sp+ww;}if(line.length)lines.push({items:line,width});
 let lh=size*1.18,total=lines.length*lh,yy=y-total/2;ctx.save();ctx.globalAlpha=alpha;for(let ln of lines){let xx=center?x-ln.width/2:x;for(let w of ln.items){xx+=w.sp;ctx.font=`${w.hot?"bold italic":"normal"} ${size}px Georgia,serif`;ctx.textAlign="left";ctx.textBaseline="middle";ctx.shadowColor=w.hot?C.amber:"transparent";ctx.shadowBlur=w.hot?10:0;ctx.fillStyle=w.hot?C.bright:C.ivory;ctx.fillText(w.t,xx,yy+lh/2);xx+=w.w;}yy+=lh;}ctx.restore();}
function gradientBackground(){let g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,C.bg1);g.addColorStop(1,C.bg2);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);let rg=ctx.createRadialGradient(W/2,410,20,W/2,410,540);rg.addColorStop(0,"rgba(20,28,55,.26)");rg.addColorStop(1,"rgba(0,0,0,.48)");ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);}
function line(x1,y1,x2,y2,a=1){ctx.save();ctx.globalAlpha=a;let g=ctx.createLinearGradient(x1,y1,x2,y2);g.addColorStop(0,"rgba(201,163,86,0)");g.addColorStop(.5,"rgba(236,203,128,.8)");g.addColorStop(1,"rgba(201,163,86,0)");ctx.strokeStyle=g;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore();}
function draw(now,dt){fit();gradientBackground();
 let pulse=.78+.22*Math.sin(now*.55);let glow=ctx.createRadialGradient(600,410,20,600,410,460);glow.addColorStop(0,`rgba(255,170,70,${.11*pulse})`);glow.addColorStop(1,"rgba(255,170,70,0)");ctx.fillStyle=glow;ctx.fillRect(0,230,W,360);
 line(220,262,980,262,.65);line(220,540,980,540,.65);
 trails.forEach(t=>{t.x+=t.v*dt;if(t.v>0&&t.x>W+40)t.x=-t.len-rnd(0,700);if(t.v<0&&t.x<-t.len-40)t.x=W+rnd(0,700);let g=ctx.createLinearGradient(t.x,0,t.x+t.len,0);g.addColorStop(0,"rgba(255,178,82,0)");g.addColorStop(.5,`rgba(255,178,82,${t.a*.5})`);g.addColorStop(1,"rgba(255,178,82,0)");ctx.fillStyle=g;ctx.fillRect(t.x,t.y,t.len,2);});
 const specs=[{y:126,size:14,speed:-26,a:.6,n:15},{y:160,size:22,speed:34,a:.72,n:14},{y:206,size:30,speed:-20,a:.9,n:12},{y:582,size:16,speed:30,a:.65,n:14},{y:624,size:24,speed:-42,a:.72,n:14},{y:676,size:32,speed:22,a:.92,n:12},{y:724,size:15,speed:-34,a:.6,n:19}];
 specs.forEach((sp,ri)=>{let list=statements.filter((_,i)=>((i+ri*13)%7)<2).slice(0,sp.n);if(list.length<sp.n)list=statements.slice(ri*5,ri*5+sp.n);let gap=sp.size*3+75,offset=(now*sp.speed)%(W+gap*list.length);ctx.save();ctx.beginPath();ctx.rect(0,sp.y-28,W,56);ctx.clip();list.forEach((s,i)=>{let x=(i*(W/list.length+gap/2)+offset+W*2)%(W+gap*2)-gap;ctx.globalAlpha=sp.a*(revealed[statements.indexOf(s)]!==undefined?1:.18);ctx.font=`${ri%2?"italic ":""}${sp.size}px Georgia,serif`;ctx.fillStyle=C.champ;ctx.textBaseline="middle";ctx.fillText(s.replaceAll("*",""),x,sp.y);});ctx.restore();});
 // central featured statement
 if(current>=0){let fin=ease(phase/1.2),fout=smooth((duration-phase)/1),a=Math.min(fin,fout);if(a>.003){let s=statements[current],sz=50;while(sz>34&&textWidth(s.replaceAll("*",""),sz)>880)sz-=4;ctx.save();ctx.shadowColor=C.amber;ctx.shadowBlur=28;drawMarked(s,600,410+(1-fin)*10-(1-fout)*8,sz,880,a);ctx.restore();ctx.save();ctx.globalAlpha=a;ctx.font="bold 15px Arial";ctx.fillStyle=C.bright;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(String(current+1).padStart(3,"0"),600,292);ctx.restore();line(480,292,550,292,a);line(650,292,720,292,a);}}
 // sweep
 let sw=(now*150)%(W+1420)-460;sweepX=sw;let sg=ctx.createLinearGradient(sw-230,0,sw+230,0);sg.addColorStop(0,"rgba(255,178,82,0)");sg.addColorStop(.5,"rgba(255,178,82,.055)");sg.addColorStop(1,"rgba(255,178,82,0)");ctx.fillStyle=sg;ctx.fillRect(sw-230,0,460,H);
 dust.forEach(p=>{p.x+=p.vx*dt;if(p.x>W+10)p.x=-10;if(p.x< -10)p.x=W+10;let tw=.55+.45*Math.sin(now*1.0+p.p),y=p.y+Math.sin(now*p.sp+p.p)*p.s;ctx.globalAlpha=p.a*tw;ctx.fillStyle="#ffdead";ctx.beginPath();ctx.arc(p.x,y,p.r,0,Math.PI*2);ctx.fill();});ctx.globalAlpha=1;
 // title
 ctx.save();ctx.textAlign="center";ctx.textBaseline="middle";ctx.font="42px Georgia,serif";ctx.shadowColor=C.amber;ctx.shadowBlur=18;ctx.fillStyle=C.bright;ctx.fillText("100 ПРИЧИН, ПОЧЕМУ ТЫ ОСОБЕННЫЙ",600,56);ctx.shadowBlur=0;ctx.fillStyle=C.ivory;ctx.fillText("100 ПРИЧИН, ПОЧЕМУ ТЫ ОСОБЕННЫЙ",600,56);ctx.restore();line(320,98,880,98,.9);
 // subtle film grain
 let seed=Math.floor(now*12);ctx.globalAlpha=.035;for(let i=0;i<220;i++){let x=(i*7919+seed*37)%W,y=(i*3571+seed*61)%H;ctx.fillStyle=i%2?"#fff":"#000";ctx.fillRect(x,y,1,1);}ctx.globalAlpha=1;
}
function update(dt){phase+=dt;if(current<0&&phase>=0){startFeature(0);}else if(current>=0&&phase>=duration){phase-=duration;startFeature(current+1);}dust.forEach(p=>{});}
function startFeature(i){if(i>=100){current=99;count=100;return;}current=i;count=i+1;revealed[i]=elapsed;let len=statements[i].replaceAll("*","").length;duration=clamp(3.8+.034*len,4.6,6.4);}
function frame(ts){if(!last)last=ts;let dt=Math.min((ts-last)/1000,.05);last=ts;if(!paused){elapsed+=dt;update(dt);}draw(elapsed,dt);requestAnimationFrame(frame);}
requestAnimationFrame(frame);
})();
