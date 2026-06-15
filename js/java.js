document.addEventListener("DOMContentLoaded", () => { //addeventlistener basically responds when we call the function, which in this case is inserting icons from lucide libraries
    if (typeof lucide !== "undefined") { //dom: document object model
        lucide.createIcons();
    }

    var siteTitle = "Tuqa's Blog";
    let indexClicks = 0;
    const hasCategory = true;

    const posts = [ //array seen in blog
        { title: "My first painting", category: "Art", isPublished: true, views: 20, author: "Tuqa" },
        { title: "Why willow trees are my favorite", category: "Nature", isPublished: true, views: 40, author: "Tuqa" },
        { title: "My 2nd blog", category: "Coding", isPublished: false, views: 50, author: "Tuqa" },
        { title: "Best soundtracks to listen to while playing", category: "Music", isPublished: true, views:10, author: "Tuqa" }
    ];

    function toggleMobileMenu() { //creating a responsive design for mobile phones
        const menu = document.getElementById("mobile-dropdown");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    }

    const mobileMenuBtn = document.getElementById("mobile-menu-btn"); //responsive design | user navigation through website's buttons like moving between the homepage and my blog
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    }

    const uppercaseTitle = (text) => { //forces the welcome title to be in uppercase
        return text.toUpperCase();
    };

    const publishedPosts = posts.filter(post => { //blog cards
        return post.isPublished === true;
    });

    const postStrings = publishedPosts.map(post => { //editing My Blog's cards
        const viewText = post.views + " views";
        return `
            <div class="bg-rose-50 border border-rose-100 rounded-xl p-4 flex justify-between items-center text-left">
                <div>
                    <h4 class="text-sm font-bold text-rose-950">${uppercaseTitle(post.title)}</h4>
                    <p class="text-[10px] text-rose-500 font-mono mt-1">${post.category}</p>
                </div>
                <span class="text-xs font-semibold text-rose-700 bg-rose-100/50 px-2.5 py-1 rounded-full">${viewText}</span>
            </div>
        `;
    });

    const postersContainer = document.getElementById("dynamic-posters-container");
    if (postersContainer) {
        postersContainer.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                ${postStrings.join("")}
            </div>
        `;
    }

    const categoryCards = document.querySelectorAll("#about-me, #interests, #destress, #future-goals");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            indexClicks = indexClicks + 1;
            const updatedTitle = document.querySelector("h1");
            if (updatedTitle) {
                updatedTitle.innerText = "Welcome To My Blog! (Interacted: " + indexClicks + ")";
            }
        });
    });
});