  // Data Consolidation
        const certData = {
            'sc-300': { title: 'Microsoft Certified: Identity and Access Administrator Associate', issuer: 'Microsoft', credentials: 'https://learn.microsoft.com/en-us/users/rabi-0963/credentials/dd96e7922998576c', skills: ['Microsoft Entra ID Identity & Access Management', 'Authentication, MFA & Conditional Access', 'Application & Workload Identity Management', 'Identity Governance & Privileged Access'], imgSrc: './assets/badges/microsoft.png' },
            'sc-401': { title: 'Microsoft Certified: Information Security Administrator Associate', issuer: 'Microsoft', credentials: 'https://learn.microsoft.com/en-us/users/rabi-0963/credentials/bc49dab54f778bce', skills: ['Microsoft Purview Information Protection & Data Classification', 'Data Loss Prevention & Information Lifecycle Management', 'Insider Risk Management, Compliance Monitoring & AI Data Protection'], imgSrc: './assets/badges/microsoft.png' },
            'sec+': { title: 'CompTIA Security+', issuer: 'CompTIA', credentials: 'https://www.credly.com/badges/2a76c6b0-145e-42f2-b522-72fb3753ec63/public_url', skills: ['Threat & Vulnerability Management','Security Architecture & Operations','Identity & Access Management','Risk, Governance & Incident Response','Cryptography & Data Protection'], imgSrc: './assets/badges/comptia.png' },
            'sc-200': { title: 'Microsoft Certified: Security Operations Analyst Associate', issuer: 'Microsoft', credentials: 'https://learn.microsoft.com/en-us/users/rabi-0963/credentials/fd4955da51affc20', skills: ['Microsoft Defender XDR and Microsoft Sentinel Security Operations', 'Security Incident Response and Threat Investigation', 'Threat Hunting and Detection Engineering'], imgSrc: './assets/badges/microsoft.png' },
            'isc2cc': { title: 'ISC2 Certified in Cybersecurity', issuer: 'ISC2', credentials: 'https://www.credly.com/badges/27f98a2d-27df-4d27-abd9-2fa13fd7ab90/public_url', skills: ['Security Principles & Risk Management','Identity & Access Management', 'Network & Cloud Security','Security Operations & Incident Response'], imgSrc: './assets/badges/isc2.png' }
        };

        const articlesData = [
            { id: 1, type: 'project', title: 'Zero Trust Architecture Rollout', tags: ['Identity', 'Entra ID'], date: '2023-11-01', summary: 'Led the transition from a traditional perimeter-based security model to a Zero Trust architecture for a 500-user enterprise.', icon: 'fa-fingerprint', color: 'from-slate-700 to-slate-900', link: '#' },
            { id: 2, type: 'project', title: 'Automated Phishing Response', tags: ['SecOps', 'Python', 'Splunk'], date: '2024-02-15', summary: 'Developed a custom SOAR playbook using Python and Splunk APIs to automatically ingest user-reported emails, parse IOCs, and isolate endpoints.', icon: 'fa-robot', color: 'from-brand-700 to-brand-900', link: '#' },
            { id: 3, type: 'writeup', title: 'Analyzing Log4j Exploit Vectors', tags: ['Vulnerabilities', 'SecOps'], date: '2023-05-20', summary: 'Detailed walkthrough and technical breakdown of Log4j exploit execution flows and mitigation strategies.', icon: 'fa-file-code', color: 'from-teal-700 to-teal-900', link: '#' },
            { id: 4, type: 'project', title: 'EDR Deployment & Tuning', tags: ['SecOps', 'CrowdStrike'], date: '2024-05-10', summary: 'Rolled out CrowdStrike Falcon across 2,000+ endpoints. Fine-tuned prevention policies to reduce false positives by 40%.', icon: 'fa-shield-virus', color: 'from-indigo-700 to-indigo-900', link: '#' },
            { id: 5, type: 'writeup', title: 'OAuth Token Hijacking Defenses', tags: ['Identity', 'Cloud Security'], date: '2022-11-20', summary: 'Deep dive into securing enterprise applications against token replay and malicious OAuth grant grants.', icon: 'fa-key', color: 'from-fuchsia-700 to-fuchsia-900', link: '#' },
            { id: 6, type: 'project', title: 'Automated Compliance Reporting', tags: ['Data Protection', 'Compliance', 'PowerShell'], date: '2023-08-15', summary: 'Scripted an automated monthly reporting tool utilizing PowerShell to extract Microsoft 365 compliance scores.', icon: 'fa-clipboard-check', color: 'from-emerald-700 to-emerald-900', link: '#' },
            { id: 7, type: 'writeup', title: 'Securing Kubernetes Clusters', tags: ['Cloud Security', 'DevSecOps'], date: '2024-06-01', summary: 'Best practices for hardening Kubernetes environments, managing RBAC, and implementing network policies.', icon: 'fa-dharmachakra', color: 'from-cyan-700 to-cyan-900', link: '#' },
            { id: 8, type: 'project', title: 'SIEM Log Normalization Engine', tags: ['SecOps', 'Splunk'], date: '2024-07-12', summary: 'Built custom parsing logic for diverse multi-vendor firewall and cloud audit logs to unify alert triage workflows.', icon: 'fa-database', color: 'from-blue-700 to-blue-900', link: '#' },
            { id: 9, type: 'writeup', title: 'Deconstructing Ransomware Tactics', tags: ['Threat Intelligence', 'SecOps'], date: '2024-08-19', summary: 'Behavioral analysis of recent ransomware variants focusing on initial access, lateral movement, and exfiltration.', icon: 'fa-skull-crossbones', color: 'from-rose-700 to-rose-900', link: '#' },
            { id: 10, type: 'project', title: 'Cloud DLP Policy Harmonization', tags: ['Data Protection', 'Cloud Security'], date: '2024-09-05', summary: 'Unified disparate data loss prevention policies across AWS S3 buckets and Microsoft Purview environments.', icon: 'fa-shield-halved', color: 'from-violet-700 to-violet-900', link: '#' },
            { id: 11, type: 'writeup', title: 'Mitigating Supply Chain Attacks', tags: ['Threat Intelligence', 'SecOps'], date: '2024-10-10', summary: 'Exploration of recent supply chain attack vectors and recommended mitigation strategies for enterprise environments.', icon: 'fa-network-wired', color: 'from-yellow-700 to-yellow-900', link: '#' },
            { id: 12, type: 'project', title: 'Automated Threat Feed Integration', tags: ['Threat Intelligence', 'Python'], date: '2024-11-15', summary: 'Developed a Python script to automatically pull and normalize threat intelligence feeds into the SIEM for real-time alerting.', icon: 'fa-rss', color: 'from-orange-700 to-orange-900', link: '#' },
            { id: 13, type: 'writeup', title: 'Implementing MFA Across Legacy Systems', tags: ['Identity', 'SecOps'], date: '2024-12-01', summary: 'Challenges and solutions for enforcing multi-factor authentication on legacy applications without native support.', icon: 'fa-lock', color: 'from-gray-700 to-gray-900', link: '#' }
        ];

        const ctiData = [
            { id: 1, title: 'CISA Cyber Activity & Advisories', tags: ['Advisory','Government'], summary: 'Official alerts and advisories concerning current cyber threats, vulnerabilities, and defensive mitigations.', link: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
            { id: 2, title: 'Krebs on Security', tags: ['News'], summary: 'In-depth investigative journalism focused on cybercrime, data breaches, and corporate security investigations.', link: 'https://krebsonsecurity.com/' },
            { id: 3, title: 'The Hacker News', tags: ['Insights','News'], summary: 'Leading trusted source for latest cybersecurity news, vulnerability disclosures, and exploit analysis.', link: 'https://thehackernews.com/' },
            { id: 4, title: 'Dark Reading', tags: ['Insights','News'], summary: 'Comprehensive security news and technical insights focusing on threat intelligence, analytics, and risk management.', link: 'https://www.darkreading.com/' },
            { id: 5, title: 'BleepingComputer', tags: ['Insights','News'], summary: 'Reliable technical news covering malware analysis, ransomware trends, and software security patches.', link: 'https://www.bleepingcomputer.com/' },
            { id: 6, title: 'SecurityWeek',  tags: ['Insights','News'], summary: 'Industry intelligence, enterprise risk assessments, and cyber defense strategy breakdowns.', link: 'https://www.securityweek.com/' },
            { id: 7, title: 'SANS Internet Storm Center', tags: ['Advisory','Insights','Podcasts'], summary: 'Daily analysis of malicious Internet traffic, vulnerabilities, and emerging threat vectors.', link: 'https://isc.sans.edu/' },
            { id: 8, title: 'The Record', tags: ['Insights','News','Podcasts'], summary: 'Award-winning cybersecurity journalism uncovering major global cyber incidents and geopolitical threats.', link: 'https://therecord.media/' },
            { id: 9, title: 'CSO', tags: ['Insights','News'], summary: 'Cybersecurity news, expert insights, and analysis to help security leaders navigate evolving threats.', link: 'https://www.csoonline.com/' },
            { id: 10, title: 'Ultimate IT Security',  tags: ['Advisory'], summary: 'Get informed about updates on Windows CVEs', link: 'https://www.ultimatewindowssecurity.com/' },
            { id: 11, title: 'RansomwareLive', tags: ['Ransomware'], summary: 'Real-time ransomware intelligence tracking groups, victims, and emerging threats worldwide.', link: 'https://www.ransomware.live/' },
            { id: 12, title: 'Paloalto Unit 42', tags: ['Insights'], summary: 'Expert cybersecurity research, threat intelligence, and incident response reports', link: 'https://unit42.paloaltonetworks.com/category/threat-research/' },
            { id: 13, title: 'CISO Series', tags: ['Insights','News', 'Podcasts'], summary: 'Featured podcasts, live events, and expert conversations for security professionals.', link: 'https://cisoseries.com/' }
        ];

        const communityData = [
            { id: 1, title: 'OWASP Foundation', label: 'Open Source', tags: ['AppSec', 'Framework'], type: 'Project', description: 'Open Worldwide Application Security Project driving secure software standards.', link: 'https://owasp.org/' },
            { id: 2, title: 'DEF CON Groups', label: 'Local Chapters', tags: ['Conferences','Networking'], type: 'Meetup', description: 'Community-driven local chapters meeting globally for hacking discussions and CTFs.', link: 'https://defcon.org/' },
            { id: 3, title: 'Blue Team Village', label: 'Blue Team', tags: ['CTFs'], type: 'Mentorship', description: 'Community dedicated to education, defense strategies, and blue team professional growth.', link: 'https://blueteamvillage.org/' },
            { id: 4, title: 'Nullcon Community', label: 'Global', tags: ['CTFs'], type: 'Research', description: 'Security community dedicated to exchanging cutting-edge security research and hacking techniques.', link: 'https://nullcon.net/' },
            { id: 5, title: 'BSides Chapters', label: 'Local Chapters', tags: ['Conferences', 'Networking'], type: 'Meetup', description: 'Community-driven framework for building security conferences around the globe.', link: 'http://www.securitybsides.org/' },
            { id: 6, title: 'Women in Cybersecurity (WiCyS)', label: 'Global', tags: ['Networking'], type: 'Mentorship', description: 'Alliance dedicated to recruiting, retaining and advancing women in cybersecurity fields.', link: 'https://www.wicys.org/' },
            { id: 7, title: 'Simply Cyber', label: 'Blue Team', tags: ['Networking','Podcasts','Webcasts'], type: 'Mentorship', description: 'Actionable cybersecurity intelligence, expert mentorship, and career-building resources', link: 'https://www.simplycyber.io/' },
            { id: 8, title: 'Black Hills Information Security', label: 'Professional', tags: ['Conferences','Networking','Webcasts'], type: 'Mentorship', description: 'Hands-on cybersecurity training, threat intelligence, and expert insights', link: 'https://www.blackhillsinfosec.com/' },
            { id: 9, title: 'MYDFIR', label: 'Blue Team', tags: ['CTFs','Networking'], type: 'Mentorship', description: 'Hands-on SOC training with real alerts, investigations, expert feedback', link: 'https://www.mydfir.com/' }
        ];

        const learningData = [
            { id: 1, title: 'TryHackMe', type: 'Beginner', tags: ['AppSec','CTFs','OffSec','SecOps'], kind: 'Interactive', description: 'Hands-on rooms covering Blue Team and Red Team concepts.', link: 'https://tryhackme.com/' },
            { id: 2, title: 'Microsoft Learn', type: 'Intermediate', tags: ['Documentation','Engineering'], kind: 'Documentation', description: 'Official guides to get faimiliar with Microsoft toolsets.', link: 'https://learn.microsoft.com/en-us/' },
            { id: 3, title: 'SANS Cyber Aces', type: 'Beginner', tags: ['Fundamentals'], kind: 'Video/Text', description: 'Free online courses teaching the core concepts of cybersecurity and networking.', link: 'https://www.sans.org/cyberaces' },
            { id: 4, title: 'HackTheBox', type: 'Intermediate', tags: ['AppSec','CTFs','OffSec', 'SecOps'], kind: 'Interactive', description: 'Deep dive into penetration testing and advanced exploitation techniques.', link: 'https://www.hackthebox.com/' },
            { id: 5, title: 'NIST Cybersecurity Framework', type: 'Intermediate', tags: ['GRC'], kind: 'Standards', description: 'Standards, guidelines, and best practices to manage cybersecurity risk.', link: 'https://www.nist.gov/cyberframework' },
            { id: 6, title: 'PortSwigger Web Security Academy', type: 'Advanced', tags: ['AppSec'], kind: 'Interactive', description: 'Free online web security training by the creators of Burp Suite.', link: 'https://portswigger.net/web-security/learning-paths' },
            { id: 7, title: 'Cisco Networking Academy', type: 'Beginner', tags: ['Fundamentals', 'SecOps'], kind: 'Video/Text', description: 'Introductory courses on networking essentials, packet analysis, and security principles.', link: 'https://www.netacad.com/catalogs/learn/cybersecurity' },
            { id: 8, title: 'GRC Playground', type: 'Beginner', tags: ['GRC'], kind: 'Interactive', description: 'Real governance skills through mission-based learning in system analysis, policy writing, evidence review, and authorization decisions', link: 'https://www.grcplayground.com/' },
            { id: 9, title: 'Forage', type: 'Beginner', tags: ['Internship'], kind: 'Simulation', description: 'Gain real-world experience through hundreds of free job simulations from top employers.', link: 'https://www.theforage.com/' },
            { id: 9, title: 'Hack Smarter', type: 'Intermediate', tags: ['OffSec'], kind: 'Interactive', description: 'Curated learning paths featuring realistic hacking labs and hands-on courses.', link: 'https://www.hacksmarter.org/paths' },
            { id: 10, title: 'KC7 Cyber', type: 'Intermediate', tags: ['SecOps'], kind: 'Interactive', description: 'Explore cybersecurity through real-world threat-hunting games', link: 'https://kc7cyber.com/' },
            { id: 11, title: 'PwnCollege', type: 'Beginner', tags: ['Fundamentals','OffSec','SecOps'], kind: 'Interactive', description: 'Master cybersecurity through hands-on challenges in different security domains.', link: 'https://pwn.college/' },
            { id: 12, title: 'RedTeamLeaders', type: 'Beginner', tags: ['OffSec','SecOps'], kind: 'Video/Text', description: 'Curated courses to understand the security domain.', link: 'https://courses.redteamleaders.com/' },
            { id: 13, title: 'Antisyphon Training', type: 'Beginner', tags: ['OffSec','SecOps'], kind: 'Instructor-Led', description: 'Practical cybersecurity training through hands-on courses, real-world scenarios, and expert-led instruction.', link: 'https://www.antisyphontraining.com/' },
            { id: 14, title: 'CyLab Security Academy', type: 'Beginner', tags: ['CTFs','SecOps'], kind: 'Interactive', description: 'Free cybersecurity education program featuring hands-on Capture the Flag challenges.', link: 'https://cylabacademy.org/' },
            { id: 15, title: 'SkillBit', type: 'Intermediate', tags: ['CTFs', 'SecOps'], kind: 'Interactive', description: 'Hands-on cybersecurity learning with CTF challenges, interactive labs and guided modules.', link: 'https://skillbit.com/' }
        ];

        // Cached DOM Elements
        const modal = document.getElementById('cert-modal');
        const modalPanel = document.getElementById('modal-panel');
        const certTrack = document.getElementById('cert-track');
        const modalTitle = document.getElementById('modal-title');
        const modalIssuer = document.getElementById('modal-issuer');
        const modalCredential = document.getElementById('modal-credentials');
        const modalIcon = document.getElementById('modal-icon');
        const modalList = document.getElementById('modal-list');

        function openModal(certId) {
            const data = certData[certId];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalIssuer.textContent = data.issuer;
            modalCredential.href = data.credentials;
            modalIcon.src = `${data.imgSrc}`;
            
            const fragment = document.createDocumentFragment();
            data.skills.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                fragment.appendChild(li);
            });
            modalList.innerHTML = '';
            modalList.appendChild(fragment);
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalPanel.classList.remove('translate-y-4', 'opacity-0');
                modalPanel.classList.add('translate-y-0', 'opacity-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalPanel.classList.remove('translate-y-0', 'opacity-100');
            modalPanel.classList.add('translate-y-4', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }


    // Theme Toggle Optimization
        const themeToggleBtn = document.getElementById('theme-toggle');
        const darkIcon = document.getElementById('theme-toggle-dark-icon');
        const lightIcon = document.getElementById('theme-toggle-light-icon');

        if (themeToggleBtn && darkIcon && lightIcon) {
            const isDark = localStorage.getItem('color-theme') === 'dark' || 
                         (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
            
            document.documentElement.classList.toggle('dark', isDark);
            lightIcon.classList.toggle('hidden', !isDark);
            darkIcon.classList.toggle('hidden', isDark);

            themeToggleBtn.addEventListener('click', () => {
                darkIcon.classList.toggle('hidden');
                lightIcon.classList.toggle('hidden');
                const willBeDark = document.documentElement.classList.toggle('dark');
                localStorage.setItem('color-theme', willBeDark ? 'dark' : 'light');
            });
        }

         // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if(mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }

        // Optimized Scroll Observer
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        document.getElementById('year').textContent = new Date().getFullYear();

        // Certification Tracking
        function evaluateCertStatuses() {
            const currentDate = new Date();
            document.querySelectorAll('.cert-status').forEach(el => {
                const expiryDate = new Date(el.getAttribute('data-expiry'));
                if (expiryDate > currentDate) {
                    el.innerHTML = '<span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-800/50 shadow-sm">Active</span>';
                } else {
                    el.innerHTML = '<span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 dark:bg-slate-700 dark:text-gray-400 rounded-full border border-gray-200 dark:border-slate-600 shadow-sm">Inactive</span>';
                }
            });
        }
        evaluateCertStatuses();

        let currentCertIndex = 0;
        function slideCert(direction) {
            if (!certTrack) return;
            const visibleItems = window.innerWidth >= 640 ? 3 : 1;
            const maxIndex = certTrack.children.length - visibleItems;
            
            currentCertIndex += direction;
            if (currentCertIndex < 0) currentCertIndex = maxIndex;
            if (currentCertIndex > maxIndex) currentCertIndex = 0;
            
            const offset = window.innerWidth >= 640 ? currentCertIndex * (101 / visibleItems): currentCertIndex * (105.5 / visibleItems);
            certTrack.style.transform =`translateX(-${offset}%)`;
        }

        // Optimized List Manager Component
        class ListManager {
            constructor(config) {
                this.data = config.data;
                this.container = document.getElementById(config.containerId);
                this.paginationContainer = document.getElementById(config.paginationId);
                this.renderItem = config.renderItem;
                this.itemsPerPage = config.itemsPerPage || 6;
                this.currentPage = 1;
                this.currentTypeFilter = 'all';
                this.currentTagFilter = 'all';
                this.currentSort = config.defaultSort || 'newest';
                this.init();
            }

            init() {
                if (this.container) this.update();
            }

            setFilters(type, tag, sort) {
                if(type !== undefined) this.currentTypeFilter = type;
                if(tag !== undefined) this.currentTagFilter = tag;
                if(sort !== undefined) this.currentSort = sort;
                this.currentPage = 1;
                this.update();
            }

            setPage(page) {
                this.currentPage = page;
                this.update();
                if (this.container?.parentElement) {
                    this.container.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            update() {
                if (!this.container) return;
                
                let filtered = this.data.filter(item => 
                    (this.currentTypeFilter === 'all' || item.type === this.currentTypeFilter) &&
                    (this.currentTagFilter === 'all' || item.tags.includes(this.currentTagFilter))
                );

                filtered.sort((a, b) => {
                    if (this.currentSort === 'newest') return new Date(b.date || 0) - new Date(a.date || 0);
                    if (this.currentSort === 'oldest') return new Date(a.date || 0) - new Date(b.date || 0);
                    if (this.currentSort === 'az') return a.title.localeCompare(b.title);
                    if (this.currentSort === 'za') return b.title.localeCompare(a.title);
                    return 0;
                });

                const totalPages = Math.ceil(filtered.length / this.itemsPerPage);
                if (this.currentPage > totalPages && totalPages > 0) this.currentPage = totalPages;
                
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const paginated = filtered.slice(start, start + this.itemsPerPage);

                this.container.innerHTML = '';
                
                if (paginated.length === 0) {
                    this.container.innerHTML = '<div class="col-span-full text-center text-gray-500 dark:text-gray-400 py-12 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">No items found matching the selected criteria.</div>';
                } else {
                    const fragment = document.createDocumentFragment();
                    const temp = document.createElement('div');
                    
                    paginated.forEach((item, index) => {
                        temp.innerHTML = this.renderItem(item).trim();
                        const node = temp.firstChild;
                        if (node) {
                            node.classList.add('reveal', 'active');
                            node.style.animationDelay = `${index * 50}ms`;
                            fragment.appendChild(node);
                        }
                    });
                    this.container.appendChild(fragment);
                }

                if (this.paginationContainer) this.renderPagination(totalPages);
            }

            renderPagination(totalPages) {
                this.paginationContainer.innerHTML = '';
                if (totalPages <= 1) {
                    this.paginationContainer.style.display = 'none';
                    return;
                }
                this.paginationContainer.style.display = 'flex';

                const fragment = document.createDocumentFragment();
                const createBtn = (html, isDisabled, onClick, activeClass) => {
                    const btn = document.createElement('button');
                    btn.innerHTML = html;
                    if (activeClass) {
                        btn.className = 'w-10 h-10 flex items-center justify-center rounded-md bg-brand-500 text-white font-medium shadow-sm transition-transform hover:scale-105';
                    } else {
                        btn.className = `w-10 h-10 flex items-center justify-center rounded-md border ${isDisabled ? 'border-gray-200 text-gray-400 cursor-not-allowed dark:border-slate-700 dark:text-slate-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700 hover:border-brand-500 dark:hover:border-brand-500'} font-medium transition-all`;
                        if(!isDisabled) btn.onclick = onClick;
                    }
                    btn.disabled = isDisabled;
                    return btn;
                };

                fragment.appendChild(createBtn('<i class="fa-solid fa-chevron-left"></i>', this.currentPage === 1, () => this.setPage(this.currentPage - 1)));
                for (let i = 1; i <= totalPages; i++) {
                    fragment.appendChild(createBtn(i, false, () => this.setPage(i), i === this.currentPage));
                }
                fragment.appendChild(createBtn('<i class="fa-solid fa-chevron-right"></i>', this.currentPage === totalPages, () => this.setPage(this.currentPage + 1)));
                this.paginationContainer.appendChild(fragment);
            }
        }

        // Rendering Functions
        const renderArticle = (item) => `
            <a href="${item.link}" class="block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-brand-500 dark:hover:border-brand-500 transition-all group h-full flex flex-col relative">
                <div class="absolute top-3 right-3 z-10">
                    <span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded-full shadow-sm">${item.type}</span>
                </div>
                <div class="h-40 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden flex-shrink-0">
                    <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 20px 20px;"></div>
                    <i class="fa-solid ${item.icon} text-5xl text-white opacity-90 group-hover:scale-110 transition-transform duration-500"></i>
                </div>
                <div class="p-6 flex flex-col flex-1">
                    <div class="flex flex-wrap gap-2 mb-3">
                        ${item.tags.map(tag => `<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-gray-300 rounded">${tag}</span>`).join('')}
                    </div>
                    <h3 class="text-xl font-bold mb-2 dark:text-white group-hover:text-brand-500 transition-colors">${item.title}</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">${item.summary}</p>
                    <div class="flex justify-between items-center mt-auto border-t border-gray-100 dark:border-slate-700 pt-4">
                        <span class="text-xs text-gray-500 dark:text-gray-400 font-medium"><i class="fa-regular fa-calendar mr-1"></i> ${item.date}</span>
                        <div class="text-brand-500 font-medium text-sm flex items-center">
                            Read <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                        </div>
                    </div>
                </div>
            </a>
        `;

        const renderCTI = (item) => `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="block bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 hover:shadow-lg dark:hover:shadow-brand-500/10 hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div class="absolute top-0 left-0 w-1 h-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="flex justify-between items-start mb-4">
                    <div class="flex items-center gap-3">
                        <span class="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                            <i class="fa-solid fa-external-link-alt text-sm"></i>
                        </span>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors flex items-center gap-2">
                                ${item.title} <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </h4>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">${item.summary}</p>
                <div class="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-slate-700/50">
                    ${item.tags.map(tag => `<span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-50 text-gray-600 dark:bg-slate-900 dark:text-gray-400 rounded">${tag}</span>`).join('')}
                </div>
            </a>
        `;

        const renderCommunity = (item) => `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="flex flex-col bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500/50 hover:shadow-md transition-all h-full group">
                <div class="flex justify-between items-start mb-4">
                    <span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border-brand-200 dark:border-brand-800">${item.label}</span>
                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center bg-gray-50 dark:bg-slate-900 px-2 py-1 rounded"><i class="fa-solid fa-users mr-1 text-brand-500"></i> ${item.type}</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors flex items-center gap-2">
                    ${item.title} <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">${item.description}</p>
                <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                    ${item.tags.map(tag => `<span class="px-2 py-1 text-[10px] font-bold bg-gray-50 text-gray-600 dark:bg-slate-900 dark:text-gray-400 rounded">${tag}</span>`).join('')}
                </div>
            </a>
        `;

        const renderLearning = (item) => {
            const levelColors = {
                'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
                'Intermediate': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800',
                'Advanced': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800',
            };
            const levelClass = levelColors[item.type];

            return `
            <a href="${item.link}" class="flex flex-col bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500/50 hover:shadow-md transition-all h-full group">
                <div class="flex justify-between items-start mb-4">
                    <span class="px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${levelClass}">${item.type}</span>
                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center bg-gray-50 dark:bg-slate-900 px-2 py-1 rounded"><i class="fa-solid fa-tag mr-1 text-brand-500"></i> ${item.kind}</span>
                </div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">${item.title}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">${item.description}</p>
                <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-slate-700/50">
                    ${item.tags.map(tag => `<span class="px-2 py-1 text-[10px] font-bold bg-gray-50 text-gray-600 dark:bg-slate-900 dark:text-gray-400 rounded">${tag}</span>`).join('')}
                </div>
            </a>
            `;
        };

        // Initialize Managers & Filters
        function populateData(dataArray, selectElementId) {
            const select = document.getElementById(selectElementId);
            if (!select) return;
            const tags = new Set();
            if(selectElementId.includes('tag'))
            dataArray.forEach(item => {
                item.tags.forEach(t => tags.add(t));
            });
            else if(selectElementId.includes('type'))
            dataArray.forEach(item => {
                tags.add(item.type);
            });
            
            const fragment = document.createDocumentFragment();
            Array.from(tags).sort().forEach(tag => {
                const option = document.createElement('option');
                option.value = tag;
                option.textContent = tag;
                fragment.appendChild(option);
            });
            select.appendChild(fragment);
        }

        function updateOptions(dataArray, selectElementId,filterValue){
            const tagSelect = document.getElementById(selectElementId);
            Array.from(tagSelect.options).forEach(option => option.disabled = false);
            console.log(filterValue);
            if(filterValue==='all') return;

            let tags=new Set();
            tags.add('all');
            if(selectElementId.includes('tag')){
                dataArray.forEach(item => {
                    if(item.type===filterValue){
                        item.tags.forEach(t => tags.add(t));
                    }
                });
            }
            if(selectElementId.includes('type')){
                dataArray.forEach(item => {
                    if(item.tags.includes(filterValue)){
                        tags.add(item.type);
                    }
                });
            }
            Array.from(tagSelect.options).forEach(option => {
                option.disabled = !tags.has(option.value);
            });
        }

        populateData(articlesData, 'article-tag-select');
        populateData(ctiData, 'cti-tag-select');
        populateData(communityData, 'community-tag-select');
        populateData(communityData,'community-type-select');
        populateData(learningData, 'learning-tag-select');
        populateData(learningData, 'learning-type-select');


        const articlesManager = new ListManager({ data: articlesData, containerId: 'articles-grid', paginationId: 'articles-pagination', renderItem: renderArticle, itemsPerPage: 12 });
        const ctiManager = new ListManager({ data: ctiData, containerId: 'cti-grid', paginationId: 'cti-pagination', renderItem: renderCTI, itemsPerPage: 6, defaultSort: 'az' });
        const communityManager = new ListManager({ data: communityData, containerId: 'community-grid', paginationId: 'community-pagination', renderItem: renderCommunity, itemsPerPage: 6, defaultSort: 'az' });
        const learningManager = new ListManager({ data: learningData, containerId: 'learning-grid', paginationId: 'learning-pagination', renderItem: renderLearning, itemsPerPage: 6, defaultSort: 'az' });

        const homeProjectsGrid = document.getElementById('home-projects-grid');
        if (homeProjectsGrid) {
            homeProjectsGrid.innerHTML = articlesData.slice(0, 4).map((item, index) => {
                const temp = document.createElement('div');
                temp.innerHTML = renderArticle(item).trim();
                const node = temp.firstChild;
                if (node) {
                    node.classList.add('reveal', 'active');
                    node.style.animationDelay = `${index * 50}ms`;
                    return node.outerHTML;
                }
                return '';
            }).join('');
        }

        // Event Listeners for Filters
        document.querySelectorAll('#article-type-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('#article-type-filters .filter-btn').forEach(b => {
                    b.classList.remove('bg-brand-500', 'text-white');
                    b.classList.add('bg-gray-100', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
                });
                e.target.classList.remove('bg-gray-100', 'dark:bg-slate-700', 'text-gray-700', 'dark:text-gray-300');
                e.target.classList.add('bg-brand-500', 'text-white');
                articlesManager.setFilters(e.target.dataset.filter, undefined, undefined);
            });
        });
        
        ['article-tag-select', 'article-sort'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('change', (e) => articlesManager.setFilters(undefined, id.includes('tag') ? e.target.value : undefined, id.includes('sort') ? e.target.value : undefined));
        });

        ['cti-tag-select', 'cti-sort'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('change', (e) => ctiManager.setFilters(undefined, id.includes('tag') ? e.target.value : undefined, id.includes('sort') ? e.target.value : undefined));
        });

        ['community-tag-select','community-type-select', 'community-sort'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('change', (e) => {
                communityManager.setFilters(id.includes('type') ? e.target.value : undefined, id.includes('tag') ? e.target.value : undefined, id.includes('sort') ? e.target.value : undefined);
                if (id.includes('type')) updateOptions(communityData,'community-tag-select',e.target.value)
                if (id.includes('tag')) updateOptions(communityData,'community-type-select',e.target.value)
            });
        });

        ['learning-tag-select','learning-type-select', 'learning-sort'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.addEventListener('change', (e) => {
                learningManager.setFilters(id.includes('type') ? e.target.value : undefined, id.includes('tag') ? e.target.value : undefined, id.includes('sort') ? e.target.value : undefined);
                if (id.includes('type')) updateOptions(learningData,'learning-tag-select',e.target.value)
                if (id.includes('tag')) updateOptions(learningData,'learning-type-select',e.target.value)
        });
        });