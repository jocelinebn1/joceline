/**
 * Joceline Christabelle Chen - Portfolio Core Script
 */

// ============================================
// BIBLE VERSES DATA
// ============================================
const bibleVerses = [
    {
        verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
        reference: "Jeremiah 29:11"
    },
    {
        verse: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
        reference: "Proverbs 3:5"
    },
    {
        verse: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        verse: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
        reference: "John 3:16"
    },
    {
        verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you.",
        reference: "Deuteronomy 31:6"
    },
    {
        verse: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
        reference: "Matthew 6:34"
    },
    {
        verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28"
    },
    {
        verse: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33"
    },
    {
        verse: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace.",
        reference: "Colossians 3:15"
    },
    {
        verse: "Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'",
        reference: "John 14:6"
    }
];

// ============================================
// BIBLE VERSE FUNCTION (EASTER EGG)
// ============================================
function showBibleVerse() {
    // Toggle functionality: Remove existing card if click occurs when visible
    const existingCard = document.querySelector('.bible-verse-card');
    if (existingCard) {
        existingCard.style.animation = 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
        setTimeout(() => {
            existingCard.remove();
        }, 300);
        return;
    }

    // Select a random scripture from the data array
    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    
    // Create card container
    const card = document.createElement('div');
    card.className = 'bible-verse-card';
    card.id = 'bible-verse-container';
    card.innerHTML = `
        <button class="close-verse" aria-label="Close Daily Verse" onclick="closeBibleVerse(this.parentElement)">✕</button>
        <h3>Daily Bread</h3>
        <p>"${randomVerse.verse}"</p>
        <div class="verse-reference">- ${randomVerse.reference}</div>
        <button class="another" onclick="anotherVerse(this)"><i class="fas fa-rotate"></i> Another verse</button>
    `;
    
    document.body.appendChild(card);
}

/**
 * Handles closing of the Bible Verse card with a smooth exit transition
 * @param {HTMLElement} cardElement 
 */
function closeBibleVerse(cardElement) {
    if (!cardElement) return;
    cardElement.style.animation = 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
    cardElement.style.opacity = '0';
    setTimeout(() => {
        cardElement.remove();
    }, 300);
}

// ============================================
// INTERACTIVE FUNCTIONS & SMOOTH SCROLLING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling behavior for contact anchor links
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Setup active state highlighting depending on pathname
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        } else if (currentPath === '' && linkPath === 'index.html') {
            // Default highlight home page on root domain
            link.classList.add('active');
        }
    });
});

// ============================================
// ENHANCEMENTS (added): shared nav/footer, data, animations
// ============================================
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,FINE=matchMedia('(pointer:fine)').matches;
/* ===== DATA (edit here to update content; add real links where marked) ===== */
const PROJECTS=[
{t:'COSKA Beauty Commerce',c:'uiux',r:'UI + Business Analyst',tags:['Figma','GEMASTIK'],d:'All-in-one beauty platform with research-based comparisons, real-time recommendations and integrated transactions that help local beauty brands compete. Built for the GEMASTIK IT-Business competition, where I represented BINUS and shaped the visual identity, layout and design.',l:[['Design Philosophy','https://www.figma.com/deck/wegm8c6iYFuyB9sKKsY72g'],['Figma UI','https://www.figma.com/design/DMi5NpLqLcigHwm7amVTM2/COSKA---App?node-id=24-1245&t=4VbQyCSTohLx16fT-1']],img:'assets/images/coska.png'},
{t:'Temani: Caregiving',c:'uiux',r:'UI + Business Analyst',tags:['Figma'],d:'A platform that connects families with professional caregivers for children and the elderly. I led the visual direction to feel warm, approachable and trustworthy.',l:[['Figma UI','https://www.figma.com/design/fKRTKoZv6mgn4tRZYWsfiL/Temani?node-id=0-1&t=I8ulZEcbjiJFza5R-1']],img:'assets/images/temani.png'},
{t:'ShoeMax POS System',c:'software',r:'Full Stack',tags:['HTML','JavaScript','SQL'],d:'A custom point-of-sale system built for Shoemax Shoe Laundry.',l:[['View on GitHub','https://github.com/jocelinebn1']],img:'assets/images/shoemax%20POS%20system.png'},
{t:'RvPhone',c:'uiux',r:'UI + Business Analyst',tags:['Figma'],d:'A secondhand phone commerce platform.',l:[['Figma UI','https://www.figma.com/design/OQeW1AkV10PDusADTsH7BE/RvPhone?node-id=0-1&t=cAuNYqL6NgoAIRkw-1']],img:'https://placehold.co/600x300/ead6bd/654321?text=RvPhone'},
{t:'BearDen',c:'software',r:'Full Stack',tags:['Web app'],d:'A wellbeing and glow-up helper app.',l:[['View on GitHub','https://github.com/jocelinebn1']],img:'https://placehold.co/600x300/d6e8f0/2c5f7a?text=BearDen'},
{t:'Fear Genius Study Partner',c:'uiux',r:'UI/UX',tags:['BNCC','Figma'],d:'A mobile learning platform that helps university students plan and learn effectively, designed with teammate Melisa Lea Andrea for my BNCC UI/UX certification.',l:[['UX Analysis','https://canva.link/hpkiab6jzkc7wpx'],['Figma UI','https://www.figma.com/design/8HXzWYe8u6gOEJ5HofAECe/Fear-Genius?node-id=0-1&t=mbFrVYykPdAidg5D-1']],img:'assets/images/fear%20genius.png'},
{t:'GDGoC TechTalk 2.0 Designs',c:'graphic',r:'Design & Documentation PIC',tags:['Figma'],d:'Event posters and speaker announcements for TechTalk 2.0 (29 April 2026). I led about 10 designers and made four of the designs myself.',l:[['View Designs','https://drive.google.com/file/d/1ICKzmW5MtgMZstIYdZx6ieqCvETZ062d/view?usp=sharing']],img:'https://placehold.co/600x300/f0e6d6/8b4513?text=TechTalk+2.0'},
{t:'Beyond The Reverie Posts',c:'graphic',r:'Designer',tags:['Instagram','EN + 中文'],d:'Instagram posts and carousels in English and Mandarin for a Christian mission organization.',l:[['View Designs','https://drive.google.com/file/d/1ICKzmW5MtgMZstIYdZx6ieqCvETZ062d/view?usp=sharing']],img:'https://placehold.co/600x300/f0e6d6/8b4513?text=Beyond+The+Reverie'},
{t:'Commercial Branding',c:'graphic',r:'Graphic Designer',tags:['Branding','Print'],d:'Pocket and trifold brochures, business cards, the Selaras Berjaya logo and brand guide, and company uniforms.',l:[['View Designs','https://drive.google.com/file/d/1ICKzmW5MtgMZstIYdZx6ieqCvETZ062d/view?usp=sharing']],img:'https://placehold.co/600x300/f0e6d6/8b4513?text=Commercial+Branding'},
{t:'School Posters',c:'graphic',r:'Graphic Design Representative',tags:['Poster'],d:'Two posters for SMA BPK Penabur Holis, used at the open house and science research conference.',l:[['View Designs','https://drive.google.com/file/d/1ICKzmW5MtgMZstIYdZx6ieqCvETZ062d/view?usp=sharing']],img:'https://placehold.co/600x300/f0e6d6/8b4513?text=School+Posters'}];
const EXP=[['Software Developer','Self-employed · Oct 2025 - Present','Building custom POS systems for Shoemax Shoe Laundry and CV Selaras Berjaya Furniture.'],
['Graphic Designer','CV Selaras Berjaya (part-time, remote) · Aug 2023 - Present','Brand profile and image, order forms, product catalogue, packaging and employee uniforms.'],
['Events Division Core Team','Google Developer Group on Campus BINUS @Bandung · Nov 2025 - Sep 2026','End-to-end event execution, from registration logistics to Master of Ceremonies. Design & Documentation PIC for TechTalk 2.0.'],
['Media & Communication Activist','Persekutuan Oikoumene BINUS Bandung · 2026 - Present',''],
['Private Tutor','Freelance · Oct 2025 - Oct 2026','Math and physics for junior high students.'],
['Freshmen Leader & Partner','BINUS University · Jul - Dec 2025','Mentored about 34 freshmen through the First Year Program, then supported them for a full semester.'],
['Math Teaching Assistant & Tutor','SMPK BPK Penabur Holis, SMPK 3 Bina Bakti · Jul - Aug 2025','']];
const EDU=[['BINUS University','Double degree, Business and Information Systems (Digital Business Innovation) · Expected 2028/2029',''],['SMAK BPK Penabur Holis','Science stream · 2021 - 2024','Class Secretary, Debate Team, Economics and Accounting Club, Event Management, Photography and Graphic Design Representative.']];
const SKILLS={'Software and Data':'HTML,JavaScript,Python,SQL,PHP,Visual Basic,ERD,Relational Databases,Oracle Database,MySQL,VS Code,Blockchain,Intelligent Automation,Automation','Business and IT':'ERP,ERP Implementation,IT Infrastructure Management,IT Infrastructure Design','UI/UX and Design':'UX Design,UI Design,Figma,Graphic Design,Adobe Photoshop,Adobe Premiere Pro,SketchUp','Photography':'Digital,Event,Commercial','Events, Teaching, Soft Skills':'Event Planning,Event Management,Team Management,Teaching,Content Strategy,Content Marketing,Microsoft Office','Languages':'English,Beginner Mandarin'};
const LANGS=[['fab fa-python','Python','I mainly use Python for data analysis, machine learning algorithms, and building quick exploratory tools and mini-games to experiment with programming logic.'],['fas fa-database','SQL','Using SQL for relational database management, table optimization, and querying datasets to derive actionable business metrics for school and side projects.'],['fab fa-js','JavaScript','Building interactive web interfaces and frontend experiences, styling components, and adding smooth animation controls to custom web layouts.'],['fab fa-html5','HTML & CSS','Designing structures and styling components to build semantic, responsive, and modern websites with clean layout configurations.'],['fab fa-php','PHP','Developing server-side scripts, database connections, and dynamic backend rendering systems for academic software engineering labs.']];
/* ===== SHARED CHROME ===== */
const pg=document.body.dataset.page,N=[['index','Home'],['about','About'],['works','Works'],['fun','Fun']];
const mlinks=N.map(([h,t],i)=>`<a href="${h}.html"${h==pg?' class="active"':''} style="transition-delay:${.08+i*.06}s">${t}<span>.</span></a>`).join('')+`<a href="#contact" style="transition-delay:.42s">Contact<span>.</span></a>`;
document.body.insertAdjacentHTML('afterbegin',`<div id="bar"></div><nav><a href="index.html" class="logo" id="nav-logo">Joceline Chen<span>.</span></a><ul id="nav-links">${N.map(([h,t])=>`<li><a href="${h}.html">${t}</a></li>`).join('')}<li><a href="#contact">Contact</a></li></ul><button class="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i></button></nav><div id="menu">${mlinks}</div>`);
const ic=(u,i,t)=>`<a href="${u}" target="_blank" rel="noopener" title="${t}" aria-label="${t}"><i class="${i}"></i></a>`;
document.body.insertAdjacentHTML('beforeend',`<section class="connect-section" id="contact"><div class="container"><div class="connect-grid"><div class="connect-left rv"><p class="eyebrow">Contact</p><h2>Let's Connect<span class="contact-exclaim">!</span></h2><p>I am always open to discussing new projects, creative ideas, or opportunities in business, software engineering, and data science.</p><div class="contact-info-block"><h3>Find me on</h3><div class="social-links">${ic('https://www.linkedin.com/in/joceline-chen-577066222/','fab fa-linkedin-in','LinkedIn')}${ic('https://www.instagram.com/jocelinechristabelle/','fab fa-instagram','Instagram')}${ic('https://www.youtube.com/@jocelinechen6804','fab fa-youtube','YouTube')}${ic('https://www.kaggle.com/jocelinechn1','fab fa-kaggle','Kaggle')}${ic('https://github.com/jocelinebn1','fab fa-github','GitHub')}</div></div></div><div class="connect-right rv"><div class="contact-info-block"><h3>Email Me</h3><a href="mailto:joceline.chen@binus.ac.id" id="contact-email">joceline.chen@binus.ac.id</a><button class="cpy" id="cp" aria-label="Copy email"><i class="far fa-copy"></i></button></div><div class="contact-info-block"><h3>Location</h3><p id="contact-location"><i class="fas fa-location-dot"></i> Bandung, Indonesia</p></div><div class="contact-info-block"><h3>Phone</h3><p><i class="fas fa-phone"></i> +62 858-7220-3715</p></div></div></div></div></section><footer class="ft"><div class="container"><span>© 2026 Joceline Christabelle Chen</span><span>Made in Bandung with taro latte &amp; capybara energy.</span></div></footer><button class="totop" id="totop-btn" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button><button class="easter-egg" id="easter-egg-trigger" onclick="showBibleVerse()" title="Daily Bible Verse" aria-label="Daily Bible Verse"><i class="fas fa-book"></i></button><div id="toast"></div>`);
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),1800)};
$('#cp').onclick=()=>{navigator.clipboard?.writeText('joceline.chen@binus.ac.id');toast('Email copied')};
document.getElementById('totop-btn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
$$('a[href$=".html"]').forEach(a=>a.onclick=e=>{if(RM)return;e.preventDefault();document.body.classList.add('out');setTimeout(()=>location.href=a.href,250)});
/* ===== RENDERERS ===== */
const tl=a=>a.map(([t,s,d])=>`<div class="ti rv"><h4>${t}</h4><small>${s}</small>${d?`<p>${d}</p>`:''}</div>`).join('');
/* Featured (home): show image. Works page: no image */
const pcFeatured=p=>`<article class="card pc lift rv" data-c="${p.c}" tabindex="0" data-cursor="View">${p.img?`<img class="pth" src="${p.img}" alt="">`:''}<span class="arr"><i class="fas fa-arrow-right"></i></span><small>${p.r}</small><h3>${p.t}</h3><p>${p.d.split('. ')[0].replace(/\.$/,'')}.</p><div>${p.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
const pcWorks=p=>`<article class="card pc lift rv" data-c="${p.c}" tabindex="0" data-cursor="View"><span class="arr"><i class="fas fa-arrow-right"></i></span><small>${p.r}</small><h3>${p.t}</h3><p>${p.d.split('. ')[0].replace(/\.$/,'')}.</p><div>${p.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div></article>`;
if($('#featured'))$('#featured').innerHTML=PROJECTS.slice(0,3).map(pcFeatured).join('');
if($('#projects'))$('#projects').innerHTML=PROJECTS.map(pcWorks).join('');
if($('#exp'))$('#exp').innerHTML=tl(EXP);if($('#edu'))$('#edu').innerHTML=tl(EDU);
if($('#skills'))$('#skills').innerHTML=Object.entries(SKILLS).map(([k,v])=>`<div class="skill-group rv"><h4>${k}</h4><div class="chips">${v.split(',').map(s=>`<a href="https://www.google.com/search?q=${encodeURIComponent(s.trim())}" target="_blank" rel="noopener" class="chip-link"><span>${s}</span></a>`).join('')}</div></div>`).join('');
if($('#mq')){const a=Object.values(SKILLS).join(',').split(',').map(s=>`<span>${s}</span>`).join('');$('#mq').innerHTML=`<div>${a}${a}</div>`}
if($('#langs'))$('#langs').innerHTML=LANGS.map(([i,t,d])=>`<div class="language-card rv"><div class="language-card-content"><h4><i class="${i}"></i> ${t}</h4><p>${d}</p></div><a class="projects-link" href="https://github.com/jocelinebn1" target="_blank" rel="noopener">Explore Projects <i class="fas fa-arrow-right"></i></a></div>`).join('');
/* ===== INTERACTIONS ===== */
document.addEventListener('click',e=>{
  const c=e.target.closest('.pc');
  if(c){
    const p=PROJECTS.find(x=>x.t==$('h3',c).textContent);
    /* Works page: if only one link, open it directly; otherwise show modal */
    if(pg==='works'&&p.l.length===1){window.open(p.l[0][1],'_blank');return;}
    const m=document.createElement('div');m.className='modal';
    m.innerHTML=`<div class="card"><button class="x" aria-label="Close">×</button><small class="highlight">${p.r}</small><h3 style="margin:6px 0 12px">${p.t}</h3><p>${p.d}</p><div style="margin-top:14px">${p.tags.map(x=>`<span class="tag">${x}</span>`).join('')}</div>${p.l.map(([n,u])=>`<a class="btn btn-primary" style="margin-top:16px;margin-right:8px" href="${u}" target="_blank">${n}</a>`).join('')}</div>`;
    m.onclick=ev=>{if(ev.target==m||ev.target.className=='x')m.remove()};document.body.append(m);
  }
  if(e.target.closest('.totop')){window.scrollTo({top:0,behavior:'smooth'});document.documentElement.scrollTo({top:0,behavior:'smooth'});}
  const f=e.target.closest('[data-f]');if(f){$$('[data-f]').forEach(b=>b.classList.toggle('on',b==f));$$('.pc',$('#projects')).forEach(c=>c.classList.toggle('hid',f.dataset.f!='all'&&c.dataset.c!=f.dataset.f))}
  if(e.target.closest('.mascot,#flipbtn'))flipCard();
  const bg=e.target.closest('.burger');if(bg||e.target.closest('#menu a'))toggleMenu(!!bg&&!document.body.classList.contains('mo'));
});
addEventListener('keydown',e=>{if(e.key=='Escape')$('.modal')?.remove();if(e.key=='Enter'&&e.target.classList?.contains('pc'))e.target.click()});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
const watch=()=>$$('.rv:not(.in)').forEach(el=>io.observe(el));watch();
$$('[data-count]').forEach(el=>{new IntersectionObserver(([e],o)=>{if(!e.isIntersecting)return;o.disconnect();const to=+el.dataset.count;let s=null;const st=t=>{s??=t;const p=Math.min((t-s)/1200,1);el.textContent=Math.round(to*p)+(el.dataset.suf||'');p<1&&requestAnimationFrame(st)};requestAnimationFrame(st)}).observe(el)});
$$('.intro-strap h2').forEach(h=>{h.innerHTML=h.textContent.trim().split(/\s+/).map((w,i,a)=>`<span class="word${i>=a.length-3?' ac':''}">${w}</span>`).join(' ')});
const R=$('[data-rotate]');if(R){const W=R.dataset.rotate.split('|');let i=0,j=0,d=0;(function t(){const w=W[i];R.textContent=w.slice(0,j);if(RM){R.textContent=W[0];return}if(!d&&++j>w.length){d=1;return setTimeout(t,1400)}if(d&&--j<0){d=0;j=0;i=(i+1)%W.length}setTimeout(t,d?40:90)})()}
$$('.hero h1 .w').forEach((w,i)=>w.style.animationDelay=i*.12+'s');
let lastY=0;const sc=()=>{const y=scrollY,h=document.documentElement;$('#bar').style.width=y/(h.scrollHeight-innerHeight)*100+'%';$('nav').classList.toggle('hide',y>lastY&&y>140&&!document.body.classList.contains('mo'));lastY=y;
$$('.intro-strap .word').forEach(w=>w.classList.toggle('on',w.getBoundingClientRect().top<innerHeight*.75));
$$('.tl').forEach(t=>{const r=t.getBoundingClientRect();t.style.setProperty('--p',Math.min(1,Math.max(0,(innerHeight*.8-r.top)/r.height)))})};addEventListener('scroll',sc,{passive:true});sc();
function flipCard(){const f=$('.flip');if(!f)return;const on=f.classList.toggle('flipped');$('#flipbtn span').textContent=on?'Back to Capy':'Flip to meet the real me';$('.badge em').textContent=on?'👋':'✌️';$('.bubble').classList.remove('on')}
function toggleMenu(o){document.body.classList.toggle('mo',o);$('#menu').classList.toggle('open',o);$('.burger').setAttribute('aria-expanded',o)}
function anotherVerse(b){const c=b.parentElement,v=bibleVerses[Math.floor(Math.random()*bibleVerses.length)];c.querySelector('p').textContent='"'+v.verse+'"';c.querySelector('.verse-reference').textContent='- '+v.reference}
addEventListener('scroll',()=>$('.totop')?.classList.toggle('on',scrollY>250),{passive:true});
if(FINE&&!RM){document.documentElement.classList.add('has-cur');
const d=document.createElement('div'),r=document.createElement('div');d.className='cur-dot';r.className='cur-ring';document.body.append(r,d);
let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px)`});
(function l(){rx+=(x-rx)*.16;ry+=(y-ry)*.16;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(l)})();
document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-cursor]');r.dataset.l=t?t.dataset.cursor:'';r.classList.toggle('lbl',!!t);r.classList.toggle('big',!t&&!!e.target.closest('a,button,.seek-btn'));d.classList.toggle('off',!!t)});
$$('.btn').forEach(b=>{b.onmousemove=e=>{const q=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-q.left-q.width/2)*.25}px,${(e.clientY-q.top-q.height/2)*.35}px)`};b.onmouseleave=()=>b.style.transform=''})}
const M=$('.mascot'),MW=$('.mw');
if(M&&FINE&&!RM){
M.addEventListener('mouseenter',()=>{MW.classList.add('hv');if(!$('.flip').classList.contains('flipped'))$('.bubble').classList.add('on')});
M.addEventListener('mousemove',e=>{const b=M.getBoundingClientRect(),px=(e.clientX-b.left)/b.width-.5,py=(e.clientY-b.top)/b.height-.5;M.style.transform=`rotateX(${-py*18}deg) rotateY(${px*18}deg) translateZ(-45px) scale(.97)`});
M.addEventListener('mouseleave',()=>{M.style.transform='';MW.classList.remove('hv');$('.bubble').classList.remove('on')})}