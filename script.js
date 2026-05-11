// ==================== PËRKTHIMET ====================
const translations = {
    sq: {
        nav_home: "Kryesor",
        nav_services: "Shërbimet",
        nav_about: "Rreth nesh",
        nav_contact: "Kontakt",
        hero_badge: "✨ Studio premium për brendet moderne",
        hero_title1: "Ndërto prezencën tënde online me një",
        hero_title2: "website profesional",
        hero_desc: "Në BlackNova Studio krijojmë website profesionale, UI/UX të pastër, wireframe strategjik dhe visual design premium për brendet që duan të dallohen online.",
        btn_start: "Fillo projektin →",
        btn_discover: "Zbuloni shërbimet",
        services_title: "Shërbimet tona",
        service1_title: "Website Development",
        service1_desc: "Faqe web të shpejta, responsive dhe të optimizuara për SEO që konvertojnë vizitorë në klientë.",
        service2_title: "UI / UX Design",
        service2_desc: "Dizajn intuitiv dhe eksperiencë përdoruesi që i mban vizitorët të angazhuar.",
        service3_title: "Wireframing",
        service3_desc: "Wireframe strategjik për të planifikuar strukturën para se të fillojë zhvillimi.",
        service4_title: "Visual Design",
        service4_desc: "Dizajn premium vizual që e bën brandin tuaj të dallohet në treg.",
        about_title: "Përse BlackNova Studio?",
        about_desc1: "Ne nuk ndërtojmë vetëm website — ndërtojmë prezencë dixhitale që punon për ty 24/7. Me mbi 2 vjet eksperiencë në dizajn dhe zhvillim, sjellim saktësi dhe kreativitet në çdo projekt.",
        about_desc2: "Çdo website që krijojmë është i pastër në kod, i shpejtë në performancë dhe i dizajnuar për të konvertuar.",
        modal_title: "Na kontaktoni",
        modal_desc: "Jemi të hapur për bashkëpunime të reja. Na shkruani ose na telefononi.",
        modal_close: "Mbylle",
        footer_copyright: "© 2026 BlackNova Studio. Të gjitha të drejtat e rezervuara.",
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        hero_badge: "✨ Premium studio for modern brands",
        hero_title1: "Build your online presence with a",
        hero_title2: "professional website",
        hero_desc: "At BlackNova Studio we create professional websites, clean UI/UX, strategic wireframes and premium visual design for brands that want to stand out online.",
        btn_start: "Start project →",
        btn_discover: "Discover services",
        services_title: "Our Services",
        service1_title: "Website Development",
        service1_desc: "Fast, responsive and SEO-optimized websites that convert visitors into customers.",
        service2_title: "UI / UX Design",
        service2_desc: "Intuitive design and user experience that keeps visitors engaged.",
        service3_title: "Wireframing",
        service3_desc: "Strategic wireframing to plan structure before development begins.",
        service4_title: "Visual Design",
        service4_desc: "Premium visual design that makes your brand stand out in the market.",
        about_title: "Why BlackNova Studio?",
        about_desc1: "We don't just build websites — we build digital presence that works for you 24/7. With over 2 years of experience in design and development, we bring precision and creativity to every project.",
        about_desc2: "Every website we create is clean in code, fast in performance and designed to convert.",
        modal_title: "Contact us",
        modal_desc: "We are open for new collaborations. Email or call us.",
        modal_close: "Close",
        footer_copyright: "© 2026 BlackNova Studio. All rights reserved.",
    }
};

let currentLang = 'sq';

// Funksioni për të përkthyer faqen
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    const langBtn = document.getElementById('langToggle');
    if (lang === 'sq') {
        langBtn.innerHTML = '🇬🇧 English';
    } else {
        langBtn.innerHTML = '🇦🇱 Shqip';
    }
    
    localStorage.setItem('blacknova_lang', lang);
}

// ==================== MODAL KONTAKT ====================
const modal = document.getElementById('contactModal');
const contactNavBtn = document.getElementById('contactNavBtn');
const heroContactBtn = document.getElementById('heroContactBtn');
const closeModalSpan = document.querySelector('.close-modal');
const closeModalBtn = document.querySelector('.close-modal-btn');

function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

if (contactNavBtn) contactNavBtn.addEventListener('click', openModal);
if (heroContactBtn) heroContactBtn.addEventListener('click', openModal);
if (closeModalSpan) closeModalSpan.addEventListener('click', closeModal);
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ==================== BUTONI PËR SHËRBIMET ====================
const servicesBtn = document.getElementById('servicesBtn');
if (servicesBtn) {
    servicesBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(12, 16, 20, 0.95)';
        navbar.style.backdropFilter = 'blur(16px)';
    } else {
        navbar.style.background = 'rgba(12, 16, 20, 0.85)';
        navbar.style.backdropFilter = 'blur(12px)';
    }
});

// ==================== PËRKTIMI ME BUTON ====================
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        if (currentLang === 'sq') {
            currentLang = 'en';
        } else {
            currentLang = 'sq';
        }
        translatePage(currentLang);
    });
}

// ==================== NGARKIMI FILLESTAR ====================
const savedLang = localStorage.getItem('blacknova_lang');
if (savedLang && (savedLang === 'sq' || savedLang === 'en')) {
    currentLang = savedLang;
}
translatePage(currentLang);

// Smooth scroll për linket e navigimit
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('BlackNova Studio - Faqe e ngarkuar! Gjuha fillestare: ' + currentLang);