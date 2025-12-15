// ——————————————————————————————————————————————————————
// SITE CONTENT
// Edit this!
// ——————————————————————————————————————————————————————

const homeHeroImages = [
	{
		"desktop-image": "/assets/home/sharpie-desktop.jpg",
		"mobile-image": "/assets/home/sharpie-mobile.jpeg",
		"caption": "Art Direction - Permanent Change"
	},
	{
		"desktop-image": "/assets/home/absolute-treat-desktop.jpg",
		"mobile-image": "/assets/home/absolute-treat-mobile.jpeg",
		"caption": "Web Design - Absolute Treat"
	},
	{
		"desktop-image": "/assets/home/butter-desktop.jpg",
		"mobile-image": "/assets/home/butter-mobile.jpeg",
		"caption": "Branding - The Butter Experience"
	},
	{
		"desktop-image": "/assets/home/screen-print-desktop.jpg",
		"mobile-image": "/assets/home/screen-print-mobile.jpeg",
		"caption": "Screen Print Design - <em>Various</em>"
	},
	{
		"desktop-image": "/assets/home/jack-and-jill-desktop.jpg",
		"mobile-image": "/assets/home/jack-and-jill-mobile.jpeg",
		"caption": "Design - Jack & Jill Health"
	},
	{
		"desktop-image": "/assets/home/special-assembly-desktop.jpg",
		"mobile-image": "/assets/home/special-assembly-mobile.jpeg",
		"caption": "Presentation Design - Special Assembly"
	},
	{
		"desktop-image": "/assets/home/please-keep-well-desktop.jpg",
		"mobile-image": "/assets/home/please-keep-well-mobile.jpeg",
		"caption": "Design - Please Keep Well"
	},
	{
		"desktop-image": "/assets/home/freeage-desktop.jpg",
		"mobile-image": "/assets/home/freeage-mobile.jpeg",
		"caption": "Web Design - Freeage Productions"
	},
	{
		"desktop-image": "/assets/home/matchboxes-desktop.jpg",
		"mobile-image": "/assets/home/matchboxes-mobile.jpeg",
		"caption": "Design - Valentines Matchboxes"
	},
	{
		"desktop-image": "/assets/home/bout-desktop.jpg",
		"mobile-image": "/assets/home/bout-mobile.jpeg",
		"caption": "Lighting - Bout"
	},
]

const workFilters = [
	"Branding",
	"Art Direction",
	"Design",
	"Presentation"
]

const infoHeading = `People call me when big ideas need to land with the right people.`;

const infoHeadshot = {
	"desktop": "headshot-desktop.jpg",
	"mobile": "headshot-mobile.jpg"
}

const infoContentColumn1 = `
	<h2>Ways to Work Together</h2>
	<p>
		If you’re looking to launch new products with clarity and trust, I design presentations and decks that make the complex legible.
	</p>
	<p>
		If you need to win competitive pitches, I create treatments that stand up under pressure and give directors the edge.
	</p>
	<p>
		If strategy needs to scale into creative, I build narrative frameworks that align teams and audiences.
	</p>
	<p>
		If storytelling needs to stay sharp under pressure, I design systems and templates that scale output without losing impact. 
	</p>
`;

const infoContentColumn2 = `
	<h2>Recently</h2>
	<p>
		Worked with Apple as a Senior Designer on a confidential project. Supported agencies and production companies on high-stakes presentations and treatments for global brands and directors.
	</p>

	<h2>Currently</h2>
	<p>
		Developing a nostalgia-driven NBA concept as a creative venture in sports storytelling and brand-building, while also developing new speculative projects that push my end-to-end creative practice.
	</p>

	<h2>Open To</h2>
	<p>
		Open to senior design and art direction roles that bring clarity to complex ideas, sharpen storytelling, and scale creative systems across brand, presentation, and narrative design.
	</p>
`;

const infoContentColumn3 = `
	<h2>About</h2>
	<p>
		I help teams turn complex, ambiguous ideas into clear stories and visuals that win trust and buy-in. My sweet spot is the high-stakes middle: where strategy needs to be translated into clear creative, and where creative has to deliver results without losing clarity or impact. I’ve done this for global brands, creative agencies, and independent teams alike — from shaping a keynote deck for a large tech company, to building a sales narrative for enterprise SaaS, to developing treatment systems for directors. Across every project, my focus is the same: bring clarity, collaboration, and creative impact that lasts.
	</p>
`;

const meta = `
	<meta name="author" content="Josh Balkowski">
	<meta name="keywords" content="Branding, Art Direction, Design, Treatments">
	<meta name="description" content="Josh Balkowski is a Toronto based Art Director and Designer.">
	<meta property="og:url" content="https://joshbalkowski.com/">
	<meta name="og:title" property="og:title" content="Josh Balkowski">
	<meta property="og:description" content="Josh Balkowski is a Toronto based Art Director and Designer.">
	<meta property="og:image" content="/assets/meta/opengraph.png">
	<link rel="icon" type="png" href="/assets/meta/favicon.png"></link>
`;

// ——————————————————————————————————————————————————————
// SITE GENERATOR CODE
// DO NOT EDIT!!!
// ——————————————————————————————————————————————————————

const fs = require('fs');
const projects = require('./projects.json');

const currentYear = new Date().getFullYear();

function generateHTML() {

	// Generate work and project pages
	let workIndex = "";
	let workHeroes = "";
	let projectIndex = 0;
	for (let project of projects) {

		// Add to work index
		if (project["locked-active"] == true) {
			workIndex += `
				<a class="work-projects-link" href="/work/${project['slug']}/" data-filters="${project['filters']}" data-project="${project['slug']}">
					<span class="work-projects-link-client">${project['locked-client']}</span>
					<span class="work-projects-link-desc">${project['locked-project']}</span>
					<span class="work-projects-link-tags">${project['tags']}</span>
					<span class="work-projects-link-date">${project['year']}</span>
				</a>
			`;
		} else {
			workIndex += `
				<a class="work-projects-link" href="/work/${project['slug']}/" data-filters="${project['filters']}" data-project="${project['slug']}">
					<span class="work-projects-link-client">${project['display-name']}</span>
					<span class="work-projects-link-desc">${project['project']}</span>
					<span class="work-projects-link-tags">${project['tags']}</span>
					<span class="work-projects-link-date">${project['year']}</span>
				</a>
			`;
		}

		// Project links
		let projectLinks = "";
		if (Object.keys(project['links']).length > 0) {
			for (let linkName in project['links']) {
				projectLinks += `<a href="${project['links'][linkName]}" target="_blank">${linkName}</a>`;
			}
			projectLinks = `
				<div class="project-animate project-header-client-links">
					${projectLinks}
				</div>
			`;
		}

		// Project media
		let projectMedia = '';
		for (let row of project['media']) {
			let rowHTML = '';
			for (let mediaData of row) {
				if (mediaData['embed'] != "") {
					rowHTML += mediaData['embed'];
				} else if (mediaData['video'] != "") {
					rowHTML += `
						<video autoplay muted loop playsinline disableRemotePlayback class="project-animate project-main-item-video" poster="${mediaData['image-normal']}" data-desktop="${mediaData['desktop']}" data-mobile="${mediaData['mobile']}">
							<source src="${mediaData['video']}">
						</video>
					`;
				} else if (mediaData['image-hover'] != "") {
					rowHTML += `
						<div class="project-animate project-main-item-hover" data-desktop="${mediaData['desktop']}" data-mobile="${mediaData['mobile']}">
							<img src="${mediaData['image-normal']}" class="project-main-item-hover-img1">
							<img src="${mediaData['image-hover']}" class="project-main-item-hover-img2">
						</div>
					`;	
				} else {
					rowHTML += `<img class="project-animate project-main-item-img" src="${mediaData['image-normal']}" data-desktop="${mediaData['desktop']}" data-mobile="${mediaData['mobile']}">`;
				}
			}
			projectMedia += `
				<div class="project-main-row">
					${rowHTML}
				</div>
			`;
		}

		// Hero
		let projectHeroDesktop = "";
		let projectHeroMobile = "";
		if (project['hero-desktop']['video'].length > 0) {
			projectHeroDesktop = `
				<video autoplay muted loop playsinline disableRemotePlayback class="project-header-thumbnail-desktop" poster="${project['hero-desktop']['image']}">
					<source src="${project['hero-desktop']['video']}">
				</video>
			`;
		} else {
			projectHeroDesktop = `
				<img class="project-header-thumbnail-desktop" src="${project['hero-desktop']['image']}">
			`;
		}
		if (project['hero-mobile']['video'].length > 0) {
			projectHeroMobile = `
				<video autoplay muted loop playsinline disableRemotePlayback class="project-header-thumbnail-mobile" poster="${project['hero-mobile']['image']}">
					<source src="${project['hero-mobile']['video']}">
				</video>
			`;
		} else {
			projectHeroMobile = `
				<img class="project-header-thumbnail-mobile" src="${project['hero-mobile']['image']}">
			`;
		}

		// Work and info heroes
		let workHeroDesktop = "";
		let workHeroMobile = "";
		let workHeroActive = 0;
		if (projectIndex == 0) {
			workHeroActive = 1;
		}
		if (project["locked-active"] == true) {
			if (project['locked-hero-desktop']['video'].length > 0) {
				workHeroDesktop = `
					<video autoplay muted loop playsinline disableRemotePlayback class="project-header-thumbnail-desktop" poster="/work/${project['slug']}/${project['locked-hero-desktop']['image']}">
						<source src="/work/${project['slug']}/${project['locked-hero-desktop']['video']}">
					</video>
				`;
			} else {
				workHeroDesktop = `
					<img class="project-header-thumbnail-desktop" src="/work/${project['slug']}/${project['locked-hero-desktop']['image']}">
				`;
			}
			if (project['locked-hero-mobile']['video'].length > 0) {
				workHeroMobile = `
					<video autoplay muted loop playsinline disableRemotePlayback class="project-header-thumbnail-mobile" poster="/work/${project['slug']}/${project['locked-hero-mobile']['image']}">
						<source src="/work/${project['slug']}/${project['locked-hero-mobile']['video']}">
					</video>
				`;
			} else {
				workHeroMobile = `
					<img class="project-header-thumbnail-mobile" src="/work/${project['slug']}/${project['locked-hero-mobile']['image']}">
				`;
			}
		} else {
			if (project['hero-desktop']['video'].length > 0) {
				workHeroDesktop = `
					<video autoplay muted loop playsinline disableRemotePlayback class="work-hero-media work-hero-desktop" poster="/work/${project['slug']}/${project['hero-desktop']['image']}">
						<source src="/work/${project['slug']}/${project['hero-desktop']['video']}">
					</video>
				`;
			} else {
				workHeroDesktop = `
					<img class="work-hero-media work-hero-desktop" src="/work/${project['slug']}/${project['hero-desktop']['image']}">
				`;
			}
			if (project['hero-mobile']['video'].length > 0) {
				workHeroMobile = `
					<video autoplay muted loop playsinline disableRemotePlayback class="work-hero-media work-hero-mobile" poster="/work/${project['slug']}/${project['hero-mobile']['image']}">
						<source src="/work/${project['slug']}/${project['hero-mobile']['video']}">
					</video>
				`;
			} else {
				workHeroMobile = `
					<img class="work-hero-media work-hero-mobile" src="/work/${project['slug']}/${project['hero-mobile']['image']}">
				`;
			}
		}
		workHeroes += `
			<div class="work-hero" data-project="${project['slug']}" data-active="${workHeroActive}">
				${workHeroDesktop}
				${workHeroMobile}
			</div>
		`;

		// Project description/info
		let projectInfoLeft = project['info']['left-column'];
		let projectInfoRight = project['info']['right-column'];
		let infoLeft = '';
		let infoRight = '';
		for (let section in projectInfoLeft) {
			infoLeft += `
				<div class="project-header-info-section">
					<h2 class="project-animate project-header-info-heading">${section}</h2>
					<p class="project-animate project-header-info-desc">${projectInfoLeft[section]}</p>
				</div>
			`;
		}
		for (let section in projectInfoRight) {
			infoRight += `
				<div class="project-header-info-section">
					<h2 class="project-animate project-header-info-heading">${section}</h2>
					<p class="project-animate project-header-info-desc">${projectInfoRight[section]}</p>
				</div>
			`;
		}

		// Next project
		projectIndex++;
		if (projectIndex >= projects.length) {
			projectIndex = 0;
		}
		let nextProject = projects[projectIndex]['slug'];

		// Locked screen
		let lockedScreen = '';
		let lockedClass = '';
		let lockedScript = '';
		if (project["locked-active"] == true) {
			lockedScreen += `
				<div class="password">
					<h1 class="password-heading">Locked Page</h1>
					<div class="password-field">
						<input type="password" class="password-field-input" id="field">
						<button class="password-field-button" onclick="check();">→</button>
					</div>
				</div>
			`;
			lockedClass = 'locked';
			lockedScript = `
				<script>
					let field = document.querySelector('#field');
					field.addEventListener("keydown", (e) => {
						if (e.key === "Enter") {
							check();
						}
					});
					let answer = "${project['locked-password']}";
					function check() {
						if (field.value == answer) {
							let passwordScreen = document.querySelector('.password');
							passwordScreen.remove();
							let body = document.querySelector('body');
							body.classList.remove('locked');
						}
					}
				</script>
			`;
		}

		// Put it all together
		let projectContent = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Josh Balkowski | ${project['client']}</title>
				${meta}
				<link rel="stylesheet" href="/style.css">
				<style>
					.dark {
						--primary: ${project['primary-color']};
						--secondary: ${project['secondary-color']};
					}
				</style>
				<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
			</head>
			<body class="light ${lockedClass}">
				<div class="project">
					<a class="logo" href="/">Josh Balkowski</a>
					<nav class="nav">
						<a href="/work">Work</a>
						<a href="/info">Info</a>
					</nav>
					<button class="mode-toggle mode-toggle-alt" onclick="toggleMode();"></button>
					<a class="project-next" href="/work/${nextProject}/">Next ></a>

					${lockedScreen}
			
					<header class="project-header" data-active="0">
						<div class="project-header-thumbnail">
							${projectHeroDesktop}
							${projectHeroMobile}
						</div>
						<div class="project-header-content">
							<div class="project-header-client">
								<div class="project-animate project-header-client-label">${project['display-name']}</div>
								<h1 class="project-animate project-header-client-heading">${project['heading']}</h1>
								${projectLinks}
							</div>
							<button class="project-header-toggle" onclick="toggleProjectMobile();">
								<svg viewBox="0 0 15 9">
									<path d="M7.5,9c-.28,0-.54-.12-.73-.32L.27,1.68C-.11,1.28-.09.64.32.27c.4-.38,1.04-.35,1.41.05l5.77,6.21L13.27.32c.37-.41,1.01-.43,1.41-.05.4.38.43,1.01.05,1.41l-6.5,7c-.19.2-.45.32-.73.32Z"/>
								</svg>
							</button>
							<div class="project-header-info-column">
								${infoLeft}
							</div>
							<div class="project-header-info-column">
								${infoRight}
							</div>
							<div class="project-animate project-header-date">${project['year']}</div>
						</div>
					</header>
			
					<main class="project-main">
						${projectMedia}
					</main>
				</div>
				
				<script src="/script.js"></script>
				<script src="/project.js"></script>
				${lockedScript}
			</body>
			</html>
			<!-- Site by No Replica: https://noreplica.com/ -->
		`;

		// Create project file (and folder if needed)
		let folderPath = `./work/${project['slug']}/`;
		if (!fs.existsSync(folderPath)) {
			fs.mkdirSync(folderPath, { recursive: true });
		}
		fs.writeFile(`./work/${project['slug']}/index.html`, projectContent, err => {
			if (err) {
				console.error(err);
			}
		});
	}

	// Work page
	let workFiltersHTML = ``;
	for (let filter of workFilters) {
		workFiltersHTML += `<button class="work-projects-filters-category" data-category="${filter}" onclick="setFilter('${filter}')">${filter}</button>`;
	}

	let workContent = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Josh Balkowski | Work</title>
			${meta}
			<link rel="stylesheet" href="/style.css">
		</head>
		<body class="light">
			<div class="work">
				<a class="logo" href="/">Josh Balkowski</a>
				<nav class="nav">
					<a href="/" data-active="1">Work</a>
					<a href="/info">Info</a>
				</nav>
				<button class="mode-toggle mode-toggle-alt" onclick="toggleMode();"></button>
				<a class="copyright" href="/credits/">© ${currentYear}</a>

				<main class="work-projects">
					<div class="work-projects-filters">
						<div class="work-projects-filters-categories">
							${workFiltersHTML}
							<div class="work-projects-filters-categories-fade"></div>
						</div>
						<button class="work-projects-filters-category" data-category="All" onclick="setFilter('All')" data-active="1">All</button>
					</div>

					<div class="work-projects-divider"></div>

					<div class="work-projects-links">
						${workIndex}
						<div class="work-projects-links-fade"></div>
					</div>
				</main>

				<div class="work-heroes">
					${workHeroes}
				</div>
			</div>
			
			<script src="/script.js"></script>
			<script src="/work.js"></script>
		</body>
		</html>
	`;

	// Create work file
	fs.writeFile(`./work/index.html`, workContent, err => {
		if (err) {
			console.error(err);
		}
	});

	// Generate info page
	let infoContent = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Josh Balkowski | Info</title>
			${meta}
			<link rel="stylesheet" href="/style.css">
			<!-- Site developed by No Replica! https://noreplica.com/ -->
		</head>
		<body class="light">
			<div class="info">
				<a class="logo" href="/">Josh Balkowski</a>
				<nav class="nav">
					<a href="/work">Work</a>
					<a href="/" data-active="1">Info</a>
				</nav>
				<button class="mode-toggle mode-toggle-alt" onclick="toggleMode();"></button>
				<a class="copyright" href="/credits/">© ${currentYear}</a>

				<main class="info-main" data-active="0">
					<header class="info-main-header">
						<div class="info-main-header-text">
							<h1 class="info-main-desc">
								${infoHeading}
							</h1>
							<a class="info-main-email" href="mailto:joshbalkowski@gmail.com" target="_blank">joshbalkowski@gmail.com ↗</a>
						</div>
						<div class="info-main-headshot">
							<img src="/assets/media/${infoHeadshot['desktop']}" class="info-main-headshot-desktop">
							<img src="/assets/media/${infoHeadshot['mobile']}" class="info-main-headshot-mobile">
						</div>
					</header>

					<button class="info-main-desc-toggle" onclick="toggleInfo();">
						<svg viewBox="0 0 15 9">
							<path d="M7.5,9c-.28,0-.54-.12-.73-.32L.27,1.68C-.11,1.28-.09.64.32.27c.4-.38,1.04-.35,1.41.05l5.77,6.21L13.27.32c.37-.41,1.01-.43,1.41-.05.4.38.43,1.01.05,1.41l-6.5,7c-.19.2-.45.32-.73.32Z"/>
						</svg>
					</button>

					<div class="info-main-body">
						${infoContentColumn1}
					</div>

					<div class="info-main-body">
						${infoContentColumn2}
					</div>
					
					<div class="info-main-body">
						${infoContentColumn3}
					</div>

					<div class="info-main-body">
						<h2><a href="https://nifty-lemonade-10a.notion.site/Half-baked-Ideas-2186023c5ec280dc84baf481eec6c942" target="_blank">Free Ideas ↗</a></h2>
					</div>
				</main>
			</div>
			
			<script src="/script.js"></script>
			<script src="/info.js"></script>
		</body>
		</html>
	`;

	// Create info file
	fs.writeFile(`./info/index.html`, infoContent, err => {
		if (err) {
			console.error(err);
		}
	});

	// Generate homepage
	let homeHeroes = '';
	let homeHeroIndex = 0;
	for (let heroImage of homeHeroImages) {
		let active = false;
		if (homeHeroIndex == 0) {
			active = true;
		}
		homeHeroes += `
			<div class="home-background-hero" id="${homeHeroIndex}" data-active="${active}">
				<img src="${heroImage['desktop-image']}" class="home-background-hero-image home-background-hero-image-desktop">
				<img src="${heroImage['mobile-image']}" class="home-background-hero-image home-background-hero-image-mobile">
				<p class="home-background-hero-caption">${heroImage['caption']}</p>
			</div>
		`;
		homeHeroIndex++;
	}

	// Homepage
	let homeContent = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Josh Balkowski</title>
			${meta}
			<link rel="stylesheet" href="/style.css">
			<style>
				.light .logo {
					color: var(--secondary);
				}
				.light .nav a {
					color: var(--secondary);
				}
				.light .copyright {
					color: var(--secondary);
				}
				.dark .mode-toggle {
					background-color: var(--primary);
				}
				.dark .home-background-hero-caption {
					color: var(--primary);
				}
			</style>
			<!-- Site developed by No Replica! https://noreplica.com/ -->
		</head>
		<body class="light">
			<div class="home">
				<h1 class="logo"><a class="logo" href="/">Josh Balkowski</a></h1>
				<nav class="nav">
					<a href="/work">Work</a>
					<a href="/info">Info</a>
				</nav>
				<button class="mode-toggle mode-toggle-home" onclick="toggleMode();"></button>
				<a class="copyright" href="/credits/">© ${currentYear}</a>
		
				<main class="home-background">
					${homeHeroes}
				</main>
			</div>
			
			<script src="/script.js"></script>
			<script src="/home.js"></script>
		</body>
		</html>
	`;

	// Create homepage file
	fs.writeFile(`index.html`, homeContent, err => {
		if (err) {
			console.error(err);
		}
	});

	// Credit page
	let creditsContent = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Josh Balkowski | Credits</title>
			${meta}
			<link rel="stylesheet" href="/style.css">
			<!-- Site developed by No Replica! https://noreplica.com/ -->
		</head>
		<body class="light">
			<div class="home">
				<a class="logo" href="/">Josh Balkowski</a>
				<nav class="nav">
					<a href="/work">Work</a>
					<a href="/info">Info</a>
				</nav>
				<button class="mode-toggle" onclick="toggleMode();"></button>
				<a class="copyright" data-active="1" href="/">© ${currentYear}</a>
		
				<main class="credits-main">
					<h1 class="credits-main-content">
						<span>Design & Content © ${currentYear} Josh Balkowski</span>
						<span>Website built by <a href="https://noreplica.com/" target="_blank">No Replica ↗</a></span>
					</h1>
				</main>
			</div>
			
			<script src="/script.js"></script>
			<script src="/home.js"></script>
		</body>
		</html>
	`;

	// Create homepage file
	fs.writeFile(`./credits/index.html`, creditsContent, err => {
		if (err) {
			console.error(err);
		}
	});
}
generateHTML();