document.addEventListener("DOMContentLoaded", () => {
    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    var siteTitle = "Tuqa's Blog";
    let indexClicks = 0;
    const hasCategory = true;

    const posts = [
        { title: "My first painting", category: "Art", isPublished: true, views: 20 },
        { title: "Why willow trees are my favorite", category: "Nature", isPublished: true, views: 40 },
        { title: "My 2nd blog", category: "Coding", isPublished: false, views: 50 },
        { title: "Best soundtracks to listen to while playing", category: "Music", isPublished: true, views:10 }
    ];

    function toggleMobileMenu() {
        const menu = document.getElementById("mobile-dropdown");
        if (menu) {
            menu.classList.toggle("hidden");
        }
    }

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    }

    const uppercaseTitle = (text) => {
        return text.toUpperCase();
    };

    const publishedPosts = posts.filter(post => {
        return post.isPublished === true;
    });

    const postStrings = publishedPosts.map(post => {
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