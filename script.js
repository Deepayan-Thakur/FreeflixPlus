const library = [
    {
        category: "Cinematic Narratives",
        items: [
            { 
                name: "YTS.mx", 
                type: "Downloading",
                url: "https://www.yts-official.to/", 
                img: "https://upload.wikimedia.org/wikipedia/commons/1/18/YTS_logo.png",
                desc: "YTS-official.to is a popular torrent website that specializes in providing high-definition movie downloads with significantly small file sizes. It serves as an unofficial clone of the original YIFY group, offering a searchable library of films in 720p, 1080p, and 4K resolutions."
            },
            { 
                name: "BollyFlix", 
                type: "Downloading",
                url: "https://bollyflix.do/", 
                img: "https://i2.wp.com/sjrestates.com/wp-content/uploads/2024/03/bollyflix.png",
                desc: "Bollyflix.do is a specialized streaming hub for Bollywood and South Indian cinema, offering high-definition movies and Hindi-dubbed content without subscription fees. While its massive, easily searchable library appeals to Indian cinema fans, the site is a pirate platform hosting unlicensed material. Users face significant risks from malware-heavy ads and tracking scripts, making the use of a robust VPN and ad-blockers mandatory for safety. Always prioritize legal alternatives to avoid copyright issues and security threats."
            },
            { 
                name: "SSR Movies",  
                type: "Downloading",
                url: "https://ssrmovies.you/", 
                img: "https://www.tradeflockasia.com/wp-content/uploads/2025/05/SSR-Movies-Stream-New-Releases-Fast.webp",
                desc: "SSRMovies.you is a specialized digital platform for downloading Bollywood, Hollywood, and Hindi-dubbed content, particularly popular for its '300MB' highly compressed HD files. While it offers a fast, vast library of movies and web series for free, it is a piracy-based site operating through various mirror domains to bypass legal restrictions. Users should be aware of significant security risks from aggressive 'malvertising' and pop-ups; therefore, using a dedicated ad-blocker and a VPN is crucial to protect your personal data and maintain privacy while browsing."
            },
        ]
    },
    {
        category: "Animated Masterpieces",
        items: [
            { 
                name: "9Anime", 
                type: "Streaming",
                url: "https://9anime.org.lv/", 
                img: "https://m.media-amazon.com/images/I/21-chrUuRXL.jpg",
                desc: "9anime.org.lv is a high-traffic streaming site offering a massive, free library of subbed and dubbed anime in HD quality. While it provides a sleek interface and regular updates, it is an unofficial pirate platform that lacks licensing rights, posing significant legal and security risks. To stay safe from intrusive ads, redirects, and potential malware, users must use a VPN and a reliable ad-blocker. Always verify the domain, as frequent mirror changes are common to avoid shutdowns."
            },
            { 
                name: "Anime World India", 
                type: "Streaming",
                url: "https://watchanimeworld.in/", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_ZFMklPRJ3oR94vyT3imWGspHi_8BPgoBg&s",
                desc: "Watchanimeworld.in is a specialized streaming platform catering to Indian anime fans, offering a vast library of series and movies dubbed or subtitled in Hindi, Tamil, and Telugu. While it serves as a popular cultural bridge with high-quality HD streams and regular updates, it is an unofficial site hosting unlicensed content. To ensure safety from potential security risks like data tracking or malicious redirects, users should always browse with a VPN and an active ad-blocker."
            },
            { 
                name: "LACartoons", 
                type: "Streaming",
                url: "https://lacartoons.com/", 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64K-m3_TZmjCM4FQqgbfLCIO3_DwwTs_tsw&s",
                desc: "Lacartoons.com is a popular streaming platform tailored for Spanish-speaking audiences, specializing in retro animated series and 'nostalgic' childhood cartoons. While it offers a vast, organized library of classic content for free, it is an unofficial site hosting unlicensed media. Users should be extremely cautious of aggressive pop-up ads and potential redirects to scam websites, making a robust ad-blocker and VPN essential for a safe viewing experience."
            },
        ]
    }
];

const mainContent = document.getElementById('main-content');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

function openDrawer(name, desc, url, type) {
    document.getElementById('drawer-title').innerText = name;
    document.getElementById('drawer-desc').innerText = desc;
    document.getElementById('drawer-link').href = url;
    document.getElementById('drawer-type').innerText = type; // Set the type
    
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function init() {
    library.forEach((section) => {
        const sectionContainer = document.createElement('div');
        const sectionHtml = `
            <h2 class="section-header" data-aos>${section.category}</h2>
            <div class="grid">
                ${section.items.map((item) => `
                    <div class="card" data-aos>
                        <div class="img-box"><img src="${item.img}" alt="${item.name}"></div>
                        <div class="card-body">
                            <h3>${item.name}</h3>
                            <div class="btn-group">
                                <a href="${item.url}" target="_blank" class="btn watch-now">Watch</a>
                                <button class="btn know-more" onclick="openDrawer('${item.name}', '${item.desc.replace(/'/g, "\\'")}', '${item.url}', '${item.type}')">Info</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        sectionContainer.innerHTML = sectionHtml;
        mainContent.appendChild(sectionContainer);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

document.getElementById('close-drawer').onclick = closeDrawer;
overlay.onclick = closeDrawer;

window.onload = init;

