/**
 * Joceline Christabelle Chen — Portfolio Core Script
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
        <div class="verse-reference">— ${randomVerse.reference}</div>
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