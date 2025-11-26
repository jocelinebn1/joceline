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
// BIBLE VERSE FUNCTION
// ============================================

function showBibleVerse() {
    // Remove existing card if any
    const existingCard = document.querySelector('.bible-verse-card');
    if (existingCard) {
        existingCard.remove();
        return;
    }

    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    const card = document.createElement('div');
    card.className = 'bible-verse-card';
    card.innerHTML = `
        <button class="close-verse" onclick="this.parentElement.remove()">✕</button>
        <h3>Daily Verse</h3>
        <p>"${randomVerse.verse}"</p>
        <div class="verse-reference">— ${randomVerse.reference}</div>
    `;
    document.body.appendChild(card);
}

// ============================================
// SMOOTH SCROLL FOR CONTACT LINK
// ============================================

document.addEventListener('DOMContentLoaded', function() {
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
});