// Shared data for all pages
const articlesData = [
    {
        id: 1,
        title: "The Future of AI in Software Development: A Comprehensive Analysis",
        excerpt: "Exploring how artificial intelligence is revolutionizing the software development landscape, from code generation to automated testing and deployment strategies.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-08-15",
        readTime: "8 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Artificial Intelligence has fundamentally transformed the software development industry, creating unprecedented opportunities for efficiency and innovation. This comprehensive analysis explores the current state and future implications of AI integration in development workflows.</p>
                
                <h3>AI-Powered Code Generation</h3>
                <p>Modern AI tools like GitHub Copilot, OpenAI Codex, and Amazon CodeWhisperer are revolutionizing how developers write code. These tools can generate entire functions, suggest optimizations, and even create complex algorithms based on natural language descriptions.</p>
                
                <h3>Automated Testing and Quality Assurance</h3>
                <p>AI-driven testing frameworks are becoming increasingly sophisticated, capable of generating test cases, identifying edge cases, and predicting potential failures before they occur in production environments.</p>
                
                <h3>Intelligent Code Review and Optimization</h3>
                <p>Machine learning algorithms can now analyze codebases to suggest performance improvements, identify security vulnerabilities, and ensure adherence to coding standards across large development teams.</p>
                
                <h3>The Impact on Developer Productivity</h3>
                <p>Studies show that AI-assisted development can increase productivity by 30-50%, allowing developers to focus on higher-level architectural decisions rather than repetitive coding tasks.</p>
                
                <h3>Future Outlook</h3>
                <p>As AI continues to evolve, we can expect even more sophisticated tools that understand context, maintain consistency across projects, and potentially handle entire development workflows autonomously.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Sustainable Living in 2025: Small Changes, Big Impact",
        excerpt: "Practical strategies for reducing your environmental footprint through everyday choices, from eco-friendly home improvements to sustainable consumption habits.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-07-22",
        readTime: "7 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Sustainable living has evolved from a niche lifestyle choice to a mainstream necessity. In 2025, more people are recognizing that small, consistent changes can create significant environmental impact while often saving money and improving quality of life.</p>
                
                <h3>Energy-Efficient Home Solutions</h3>
                <p>Smart thermostats, LED lighting, and energy-efficient appliances can reduce household energy consumption by 30-40%. Solar panels and battery storage systems are becoming more affordable, with many homeowners achieving energy independence.</p>
                
                <h3>Sustainable Transportation Choices</h3>
                <p>Electric vehicles, public transportation, cycling, and walking are reducing personal carbon footprints. Car-sharing services and remote work arrangements further minimize transportation-related emissions.</p>
                
                <h3>Conscious Consumption</h3>
                <p>Buying less, choosing quality over quantity, and supporting sustainable brands creates lasting impact. The rise of circular economy principles encourages reuse, repair, and recycling over disposal.</p>
                
                <h3>Food and Diet Considerations</h3>
                <p>Plant-based diets, local sourcing, and reducing food waste significantly impact environmental sustainability. Home gardening and composting create closed-loop systems that benefit both households and ecosystems.</p>
                
                <h3>Water Conservation</h3>
                <p>Simple changes like low-flow fixtures, rainwater collection, and drought-resistant landscaping can reduce water usage by 20-30% while maintaining comfortable living standards.</p>
                
                <h3>Building Sustainable Habits</h3>
                <p>Start with one area of focus, track progress, and gradually expand sustainable practices. Community involvement and family participation make sustainable living more enjoyable and effective.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "The Remote Work Revolution: Building Effective Distributed Teams",
        excerpt: "Best practices for managing remote teams, maintaining company culture, and leveraging technology to create productive distributed work environments in 2025.",
        category: "business",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-06-18",
        readTime: "10 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Remote work has fundamentally changed how businesses operate, with distributed teams becoming the norm rather than the exception. Successful companies are those that have mastered the art of building effective remote cultures and processes.</p>
                
                <h3>Technology Infrastructure</h3>
                <p>Robust communication tools, cloud-based collaboration platforms, and secure VPN connections form the foundation of successful remote work. Investment in proper technology pays dividends in productivity and employee satisfaction.</p>
                
                <h3>Communication Strategies</h3>
                <p>Clear communication protocols, regular check-ins, and asynchronous communication methods help distributed teams stay aligned. Over-communication is often better than under-communication in remote environments.</p>
                
                <h3>Maintaining Company Culture</h3>
                <p>Virtual team building activities, digital coffee breaks, and online social events help preserve company culture. Intentional culture-building becomes more important when teams are distributed.</p>
                
                <h3>Performance Management</h3>
                <p>Results-oriented performance metrics, clear goal setting, and regular feedback cycles ensure remote employees remain productive and engaged. Trust and accountability become key management principles.</p>
                
                <h3>Work-Life Balance</h3>
                <p>Helping employees set boundaries, providing flexible schedules, and respecting time zones promotes sustainable remote work practices. Mental health support becomes increasingly important.</p>
                
                <h3>Collaboration Best Practices</h3>
                <p>Structured meeting agendas, collaborative document editing, and project management tools enable effective teamwork across distances. Clear processes compensate for reduced face-to-face interaction.</p>
                
                <h3>Future of Distributed Work</h3>
                <p>Hybrid models, virtual reality meetings, and AI-assisted collaboration tools will continue evolving the remote work landscape, creating new opportunities for global talent access.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Mental Health in the Digital Age: Managing Technology's Impact",
        excerpt: "Understanding how digital technology affects mental well-being and developing healthy strategies for managing screen time, social media, and digital overwhelm.",
        category: "health",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-05-12",
        readTime: "9 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>The digital revolution has transformed how we work, communicate, and entertain ourselves, but it has also created new challenges for mental health. Understanding these impacts and developing healthy digital habits is crucial for overall well-being.</p>
                
                <h3>Digital Overwhelm and Information Fatigue</h3>
                <p>Constant notifications, endless scrolling, and information overload can lead to increased stress and decreased focus. Recognizing these patterns is the first step toward developing healthier digital relationships.</p>
                
                <h3>Social Media and Self-Esteem</h3>
                <p>Social comparison, curated content, and validation-seeking behaviors on social platforms can impact self-worth and mental health. Mindful consumption and critical evaluation of social media content helps maintain perspective.</p>
                
                <h3>Screen Time and Sleep Quality</h3>
                <p>Blue light exposure, late-night device usage, and sleep disruption create cycles of poor rest and decreased mental resilience. Establishing digital boundaries around sleep improves both physical and mental health.</p>
                
                <h3>Digital Detox Strategies</h3>
                <p>Regular breaks from technology, device-free zones, and mindful usage patterns help restore balance. Small, consistent changes in digital habits create lasting positive impacts on mental well-being.</p>
                
                <h3>Building Healthy Digital Habits</h3>
                <p>Using technology intentionally, setting app limits, and creating physical spaces for non-digital activities promotes healthier relationships with devices and platforms.</p>
                
                <h3>Connection vs. Isolation</h3>
                <p>While technology can facilitate meaningful connections, it can also contribute to feelings of isolation. Balancing digital and in-person interactions is key to maintaining social well-being.</p>
                
                <h3>Professional Mental Health Support</h3>
                <p>Teletherapy, mental health apps, and digital wellness tools provide new avenues for support, but they should complement rather than replace traditional mental health resources when needed.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Sustainable Travel: Exploring the World Responsibly in 2025",
        excerpt: "How to travel sustainably without sacrificing adventure, including eco-friendly accommodations, transportation options, and responsible tourism practices.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-04-08",
        readTime: "11 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Sustainable travel has evolved from a luxury concern to an essential consideration for responsible global citizens. In 2025, travelers are finding innovative ways to explore the world while minimizing their environmental impact and supporting local communities.</p>
                
                <h3>Transportation Choices</h3>
                <p>Electric vehicles for road trips, train travel for medium distances, and carbon offset programs for necessary flights help reduce transportation emissions. Direct flights and longer stays minimize per-trip environmental impact.</p>
                
                <h3>Eco-Friendly Accommodations</h3>
                <p>Green-certified hotels, eco-lodges, and sustainable vacation rentals offer comfortable stays with reduced environmental footprints. Many properties now feature renewable energy, water conservation, and waste reduction programs.</p>
                
                <h3>Supporting Local Communities</h3>
                <p>Choosing local guides, eating at family-owned restaurants, and buying from local artisans ensures tourism revenue benefits host communities directly. Cultural sensitivity and respect enhance both visitor and local experiences.</p>
                
                <h3>Minimizing Waste While Traveling</h3>
                <p>Reusable water bottles, eco-friendly toiletries, and minimal packaging help reduce travel-related waste. Planning ahead and packing thoughtfully prevents unnecessary consumption during trips.</p>
                
                <h3>Wildlife and Nature Conservation</h3>
                <p>Responsible wildlife viewing, supporting conservation projects, and following Leave No Trace principles protect natural environments for future generations. Ethical animal experiences prioritize animal welfare over entertainment.</p>
                
                <h3>Technology for Sustainable Travel</h3>
                <p>Apps for carbon tracking, sustainable accommodation booking, and local experience discovery make it easier to make responsible travel choices. Digital tools help travelers monitor and reduce their environmental impact.</p>
                
                <h3>Planning Sustainable Itineraries</h3>
                <p>Slower travel, off-peak timing, and lesser-known destinations reduce overtourism pressure while providing authentic experiences. Quality over quantity creates more meaningful and sustainable travel experiences.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "The Future of Education: Technology-Enhanced Learning in 2025",
        excerpt: "How artificial intelligence, virtual reality, and personalized learning platforms are transforming education and creating new opportunities for students worldwide.",
        category: "education",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-03-25",
        readTime: "12 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Education is undergoing a dramatic transformation as technology creates new possibilities for personalized, accessible, and engaging learning experiences. The traditional one-size-fits-all model is giving way to adaptive, student-centered approaches.</p>
                
                <h3>Artificial Intelligence in Education</h3>
                <p>AI-powered tutoring systems, automated grading, and personalized learning paths adapt to individual student needs and learning styles. Intelligent systems can identify knowledge gaps and provide targeted interventions.</p>
                
                <h3>Virtual and Augmented Reality Learning</h3>
                <p>Immersive technologies enable students to explore historical events, conduct virtual science experiments, and practice skills in safe, controlled environments. VR and AR make abstract concepts tangible and engaging.</p>
                
                <h3>Personalized Learning Platforms</h3>
                <p>Adaptive learning systems adjust difficulty levels, pacing, and content presentation based on individual progress and preferences. Students can learn at their own pace while ensuring mastery of essential concepts.</p>
                
                <h3>Global Classroom Connectivity</h3>
                <p>Online collaboration tools connect students worldwide, enabling cross-cultural learning experiences and global perspective development. Language barriers are reduced through real-time translation technologies.</p>
                
                <h3>Microlearning and Bite-sized Content</h3>
                <p>Short, focused learning modules accommodate busy schedules and attention spans while improving knowledge retention. Mobile-friendly content enables learning anywhere, anytime.</p>
                
                <h3>Skills-Based Learning</h3>
                <p>Focus on practical skills, critical thinking, and problem-solving prepares students for rapidly changing job markets. Project-based learning and real-world applications make education more relevant and engaging.</p>
                
                <h3>Teacher Empowerment Through Technology</h3>
                <p>Digital tools help teachers track student progress, customize instruction, and focus on mentoring rather than administrative tasks. Technology augments rather than replaces human instruction and connection.</p>
                
                <h3>Accessibility and Inclusion</h3>
                <p>Technology breaks down barriers for students with disabilities, geographic limitations, or economic constraints. Universal design principles ensure educational opportunities are available to all learners.</p>
            </div>
        `
    },
    {
        id: 7,
        title: "Cryptocurrency and Digital Finance: Navigating the 2025 Landscape",
        excerpt: "Understanding the evolving world of digital currencies, DeFi protocols, and blockchain technology's impact on traditional financial systems.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-02-14",
        readTime: "14 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>The cryptocurrency and digital finance landscape continues to mature, with increased institutional adoption, regulatory clarity, and technological innovation shaping the future of money and financial services.</p>
                
                <h3>Institutional Cryptocurrency Adoption</h3>
                <p>Major corporations, investment funds, and even governments are integrating cryptocurrencies into their financial strategies. Bitcoin ETFs, corporate treasury holdings, and central bank digital currencies (CBDCs) represent growing institutional acceptance.</p>
                
                <h3>Decentralized Finance (DeFi) Evolution</h3>
                <p>DeFi protocols continue to innovate with yield farming, liquidity mining, and decentralized exchanges offering alternatives to traditional banking services. However, security risks and regulatory uncertainty remain challenges.</p>
                
                <h3>Regulatory Developments</h3>
                <p>Governments worldwide are developing clearer regulatory frameworks for cryptocurrencies, providing more certainty for businesses and investors while addressing concerns about fraud, money laundering, and consumer protection.</p>
                
                <h3>Environmental Sustainability</h3>
                <p>The shift from energy-intensive Proof-of-Work to more efficient Proof-of-Stake consensus mechanisms addresses environmental concerns. Green mining initiatives and renewable energy adoption in cryptocurrency operations continue growing.</p>
                
                <h3>Mainstream Payment Integration</h3>
                <p>Major payment processors, retailers, and financial institutions are integrating cryptocurrency payment options, making digital currencies more accessible for everyday transactions and commerce.</p>
                
                <h3>NFTs and Digital Ownership</h3>
                <p>Non-fungible tokens have evolved beyond digital art to represent ownership of various digital and physical assets, creating new markets and business models for creators and collectors.</p>
                
                <h3>Investment Strategies and Risk Management</h3>
                <p>Diversified cryptocurrency portfolios, dollar-cost averaging, and proper risk management techniques help investors navigate the volatile digital asset market while building long-term wealth.</p>
            </div>
        `
    },
    {
        id: 8,
        title: "Mindful Parenting: Raising Children in a Connected World",
        excerpt: "Strategies for balancing technology use, fostering creativity, and building strong family relationships while navigating the challenges of modern parenting.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-01-30",
        readTime: "8 min read",
        author: "Infosphere Editorial",
        content: `
            <div class="article-full-content">
                <p>Parenting in the digital age requires new strategies and approaches. Mindful parenting emphasizes intentional choices, present-moment awareness, and balanced technology integration while fostering healthy child development.</p>
                
                <h3>Digital Boundaries and Screen Time</h3>
                <p>Creating age-appropriate screen time limits, establishing device-free zones, and modeling healthy technology use helps children develop balanced relationships with digital tools. Quality of content matters as much as quantity of time.</p>
                
                <h3>Fostering Creativity and Imagination</h3>
                <p>Unstructured play time, creative activities, and hands-on experiences support cognitive development and problem-solving skills. Balancing digital entertainment with physical activities and creative pursuits promotes well-rounded development.</p>
                
                <h3>Building Emotional Intelligence</h3>
                <p>Teaching children to recognize, understand, and manage emotions creates foundation skills for social relationships and mental health. Mindful parenting includes modeling emotional regulation and empathy.</p>
                
                <h3>Communication and Connection</h3>
                <p>Regular family conversations, active listening, and quality time together strengthen parent-child relationships. Creating space for open dialogue builds trust and understanding across generational differences.</p>
                
                <h3>Teaching Critical Thinking</h3>
                <p>Helping children evaluate information, think independently, and make good decisions prepares them for complex world challenges. Encouraging questions and exploration develops intellectual curiosity and wisdom.</p>
                
                <h3>Stress Management for Parents</h3>
                <p>Parental self-care, stress reduction techniques, and support networks enable more patient, present, and effective parenting. Taking care of yourself enables better care for others.</p>
                
                <h3>Preparing Children for the Future</h3>
                <p>Teaching adaptability, resilience, and lifelong learning skills prepares children for rapidly changing world conditions. Focus on character development alongside academic achievement creates well-rounded individuals.</p>
            </div>
        `
    },
    {
        id: 21,
        title: "China gives musical talent show a virtual makeover",
        excerpt: "Producers of China's biggest talent franchise are rebuilding live finals inside immersive LED domes and VR lounges.",
        category: "politics",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-28",
        readTime: "6 min read",
        author: "John Marko",
        content: `
            <div class="article-full-content">
                <p>China's flagship musical talent show is embracing virtual production to safeguard touring schedules and wow global audiences. LED tunnels and volumetric capture surround performers, while remote fans appear as holographic silhouettes.</p>
                <h3>Immersive staging</h3>
                <p>Contestants perform inside domes whose backdrops react to vocals in real time and sync with drone lighting. Judges say the mixed-reality staging keeps the show's energy high even without a packed studio audience.</p>
                <h3>Why it matters</h3>
                <p>The hybrid format lets the franchise export the show without shipping massive sets, opening new revenue streams for licensing partners and VR platforms hungry for premium content.</p>
            </div>
        `
    },
    {
        id: 22,
        title: "Chadwick Boseman shines in his final performance",
        excerpt: "A posthumous short film spotlights Boseman's subtle power and galvanizes fans across global film festivals.",
        category: "arts",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-27",
        readTime: "5 min read",
        author: "Smith Clark",
        content: `
            <div class="article-full-content">
                <p>The late Chadwick Boseman's previously unreleased performance debuted in Lagos and immediately trended worldwide. The short film blends spoken-word narration with intimate closeups that remind viewers of his range.</p>
                <h3>Festival circuit buzz</h3>
                <p>Programmers report that screenings turned into communal memorials, with filmmakers discussing how Boseman pushed for authentic African storytelling inside blockbuster studios.</p>
                <h3>Legacy projects</h3>
                <p>Studios confirm that proceeds from the film will fund scholarships and a writers’ lab focused on underrepresented voices, extending the actor's influence to a new generation.</p>
            </div>
        `
    },
    {
        id: 23,
        title: "Obituary: Jan Morris, a poet of time, place and self",
        excerpt: "Travel writer Jan Morris leaves behind a body of work that blended reportage, memoir, and imagination.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-26",
        readTime: "7 min read",
        author: "Red Walson",
        content: `
            <div class="article-full-content">
                <p>Jan Morris chronicled cities the way composers write symphonies, mixing meticulous observation with lyrical flair. Her final essays revisit the idea that travel is as much internal as geographic.</p>
                <h3>Literary impact</h3>
                <p>Critics credit Morris with redefining travel journalism for the modern era, inspiring generations of reporters to center human stories over postcard clichés.</p>
                <h3>A personal compass</h3>
                <p>Friends describe her notebooks as maps of identity, documenting transition, curiosity, and radical empathy. The collection will be archived and digitized for public access next spring.</p>
            </div>
        `
    },
    {
        id: 24,
        title: "Lockdown ‘sci-fisolaton’ movie goes viral across APAC",
        excerpt: "A micro-budget sci-fi filmed in one apartment becomes the comfort watch of the season.",
        category: "latest",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-25",
        readTime: "6 min read",
        author: "Jerzzy Lamot",
        content: `
            <div class="article-full-content">
                <p>The film “Sci-fisolaton” stars siblings who build a make-believe spaceship during quarantine. Viewers embraced its handmade props and cathartic humor, pushing it to the top of regional streaming charts.</p>
                <h3>Community marketing</h3>
                <p>The director mailed DIY kits so fans could recreate scenes at home, turning social feeds into a wave of pastel-colored spacecrafts and heartfelt testimonials.</p>
                <h3>Studios take notice</h3>
                <p>Major distributors are now negotiating a theatrical rerelease with live orchestra accompaniment, proving that micro-stories can command macro audiences.</p>
            </div>
        `
    },
    {
        id: 25,
        title: "Claude Wickermann to replace Graham Norton on BBC Radio 2",
        excerpt: "BBC taps Claude Wickermann to refresh its Saturday line-up with storytelling-heavy radio.",
        category: "business",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-25",
        readTime: "4 min read",
        author: "Alicia Vega",
        content: `
            <div class="article-full-content">
                <p>Claude Wickermann is inheriting one of the UK's most listened-to shows and promises to bring intimate interviews and creative live sessions to the weekend slot.</p>
                <h3>Format shake-up</h3>
                <p>Producers will experiment with serialized audio documentaries and listener-submitted field recordings, blending nostalgic radio with modern podcast pacing.</p>
                <h3>Strategic bet</h3>
                <p>The BBC hopes Wickermann's digital-first audience will carry over to traditional radio, keeping advertising partners engaged through 2026.</p>
            </div>
        `
    },
    {
        id: 26,
        title: "John Boyega’s subtle luxury watch is finally back in stock",
        excerpt: "A minimalist watch Boyega wore during a press tour is driving waitlists from Lagos to London.",
        category: "business",
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-24",
        readTime: "4 min read",
        author: "Wayne Christie",
        content: `
            <div class="article-full-content">
                <p>The watchmaker reopened orders after a surprise cameo in Boyega's Tokyo interviews reignited demand. Retailers say customers crave timeless silhouettes paired with sustainable sourcing.</p>
                <h3>Drop culture crossover</h3>
                <p>Instead of mass restocks, the brand is releasing numbered batches tied to cities on the actor's tour, turning each colorway into a collectible postcard.</p>
                <h3>Future collaborations</h3>
                <p>Industry insiders hint at a charity edition supporting creative scholarships, further cementing the accessory as both status symbol and statement.</p>
            </div>
        `
    },
    {
        id: 27,
        title: "Indian ballet prodigy dazzles audiences in Mumbai",
        excerpt: "A 16-year-old dancer blends Bharatanatyam with classical ballet to packed theaters.",
        category: "travel",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-23",
        readTime: "5 min read",
        author: "Moira Kent",
        content: `
            <div class="article-full-content">
                <p>Riya Deshpande's cross-cultural choreography stunned Mumbai's NCPA this week, with critics praising her storytelling and athleticism.</p>
                <h3>Training fusion</h3>
                <p>Deshpande splits time between Chennai and Paris coaches, creating a vocabulary that nods to temple rituals and modern pointe technique.</p>
                <h3>Global tour</h3>
                <p>Her troupe announced a Southeast Asia tour that will include free community workshops, underscoring her mission to keep classical dance accessible.</p>
            </div>
        `
    },
    {
        id: 28,
        title: "Wright beats Christie & win the travel fashion awards",
        excerpt: "Stylist Amaya Wright outpaced veteran host Christie with a capsule inspired by sleeper trains.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-22",
        readTime: "4 min read",
        author: "Derek Snow",
        content: `
            <div class="article-full-content">
                <p>The Travel Fashion Awards crowned Wright after she unveiled modular garments lined with recycled silk maps, perfect for red-eye journeys.</p>
                <h3>Design philosophy</h3>
                <p>Each piece converts between lounge wear and formal attire, mirroring the flexibility frequent flyers crave.</p>
                <h3>Industry response</h3>
                <p>Retailers are already negotiating limited drops, while Christie congratulated Wright on stage—signaling a generational handoff in travel couture.</p>
            </div>
        `
    },
    {
        id: 29,
        title: "Indiana is the best surprise of the college football season",
        excerpt: "An underdog defense and creative play-calling have turned Indiana into a must-watch spoiler.",
        category: "sports",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-20",
        readTime: "5 min read",
        author: "Owen Reid",
        content: `
            <div class="article-full-content">
                <p>Indiana embraced chaos this season—rotating quarterbacks, scripting gadget plays, and unleashing a swarming defense that delights neutrals.</p>
                <h3>Film-room surprises</h3>
                <p>Coaches thrive on unscouted looks. One week it’s tempo air-raid, the next it’s pistol triple-option. Analysts say this unpredictability has overwhelmed more talented programs.</p>
                <h3>What’s next</h3>
                <p>With bowl bids looming, boosters are already discussing facility upgrades and NIL packages to keep the momentum rolling into 2026.</p>
            </div>
        `
    },
    {
        id: 30,
        title: "You could save thousands in heating with a cash-out refi now",
        excerpt: "Homeowners are tapping equity for insulation upgrades and hybrid heat pumps before winter prices spike.",
        category: "business",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-19",
        readTime: "4 min read",
        author: "Amanda Shore",
        content: `
            <div class="article-full-content">
                <p>Energy auditors say a cash-out refinance can fund smart thermostats, insulation, and solar tie-ins that slash monthly bills for the next decade.</p>
                <h3>Why refi now</h3>
                <p>Banks are bundling green rebates with low closing costs, and contractors are booking out through March, so locking in cash early is key.</p>
            </div>
        `
    },
    {
        id: 31,
        title: "Stocks under $49 could be worth $2.7T—don’t wait to bid",
        excerpt: "Small-cap infrastructure firms riding AI build-outs are attracting unusual options activity.",
        category: "business",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-18",
        readTime: "3 min read",
        author: "Aimee Polk",
        content: `
            <div class="article-full-content">
                <p>Analysts highlight fiber installers, thermal battery startups, and logistics REITs whose valuations lag adoption curves.</p>
                <h3>Investment lens</h3>
                <p>Traders recommend dollar-cost averaging rather than chasing spikes, since many of these companies are still thinly traded.</p>
            </div>
        `
    },
    {
        id: 32,
        title: "Elephant that fell down well fed after 12-hour rescue mission",
        excerpt: "Forest rangers, villagers, and an improvised crane saved a calf stranded in Kerala.",
        category: "latest",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-11-17",
        readTime: "4 min read",
        author: "Bruce Phan",
        content: `
            <div class="article-full-content">
                <p>The young elephant slipped into an irrigation well at dawn. Volunteers pumped water out, looped straps under the calf, and hoisted it to cheers.</p>
                <h3>Community effort</h3>
                <p>Rescuers then fed the calf sugarcane while tracking its herd with drones to ensure a safe reunion.</p>
            </div>
        `
    }
];

const productsData = [
    {
        id: 1,
        title: "MacBook Pro 14-inch M3 Pro",
        description: "Apple's latest professional laptop featuring the powerful M3 Pro chip, exceptional build quality, and industry-leading performance for creative professionals.",
        category: "Laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.8,
        price: "$2,399",
        badge: "Editor's Choice",
        features: ["M3 Pro Chip", "16GB Unified Memory", "512GB SSD", "14-inch Liquid Retina XDR", "20-hour Battery Life"],
        pros: ["Exceptional performance", "Outstanding display quality", "Excellent build quality", "Long battery life", "Silent operation"],
        cons: ["Premium pricing", "Limited port selection", "Not upgradeable after purchase"],
        verdict: "The MacBook Pro 14-inch with M3 Pro delivers unmatched performance for creative professionals, though the premium price may not suit all budgets.",
        specs: {
            "Processor": "Apple M3 Pro 11-core CPU",
            "Memory": "16GB Unified Memory",
            "Storage": "512GB SSD",
            "Display": "14.2-inch Liquid Retina XDR",
            "Graphics": "14-core GPU",
            "Battery": "Up to 20 hours",
            "Weight": "3.5 pounds",
            "Ports": "3x Thunderbolt 4, HDMI, SD card, MagSafe 3"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>Design and Build Quality</h3>
                <p>The MacBook Pro 14-inch maintains Apple's commitment to premium materials and exceptional craftsmanship. The aluminum unibody construction feels solid and durable, while the Space Gray finish resists fingerprints and scratches.</p>
                
                <h3>Performance Analysis</h3>
                <p>The M3 Pro chip delivers remarkable performance across all tasks. Video editing in Final Cut Pro, 3D rendering, and software development all benefit from the chip's efficiency and power. Benchmark scores consistently outperform Intel and AMD competitors.</p>
                
                <h3>Display Excellence</h3>
                <p>The 14-inch Liquid Retina XDR display is simply stunning. With 1000 nits sustained brightness, P3 color gamut support, and ProMotion technology, it's ideal for color-critical work and multimedia consumption.</p>
                
                <h3>Battery Life and Thermal Management</h3>
                <p>Apple's silicon efficiency shines with 18-20 hours of typical usage. The laptop remains cool and quiet even under heavy loads, thanks to intelligent thermal management and the M3 Pro's efficiency.</p>
                
                <h3>Connectivity and Ports</h3>
                <p>Three Thunderbolt 4 ports, HDMI 2.1, SD card slot, and MagSafe 3 provide good connectivity options, though some users may miss additional USB-A ports.</p>
                
                <h3>Final Recommendation</h3>
                <p>The MacBook Pro 14-inch M3 Pro is an excellent choice for professionals who prioritize performance, display quality, and build excellence. The premium price is justified by the exceptional user experience and long-term reliability.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Sony WH-1000XM5 Wireless Headphones",
        description: "Industry-leading noise cancellation meets exceptional audio quality in Sony's flagship wireless headphones, perfect for travel and daily listening.",
        category: "Audio",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.6,
        price: "$399",
        badge: "Best ANC",
        features: ["30-hour Battery", "Industry-leading ANC", "Multipoint Connection", "Quick Charge", "Touch Controls"],
        pros: ["Exceptional noise cancellation", "Comfortable for long wear", "Excellent battery life", "Superior call quality", "Adaptive audio features"],
        cons: ["Not foldable", "Touch controls can be sensitive", "Premium pricing"],
        verdict: "Sony's WH-1000XM5 sets the standard for noise-canceling headphones with unmatched ANC performance and exceptional audio quality.",
        specs: {
            "Driver Size": "30mm",
            "Frequency Response": "4Hz-40kHz",
            "Battery Life": "30 hours (ANC on)",
            "Charging": "USB-C, 3min = 3hrs",
            "Connectivity": "Bluetooth 5.2, NFC",
            "Weight": "250g",
            "Codecs": "SBC, AAC, LDAC",
            "Microphones": "8 microphones for calls/ANC"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>Design and Comfort</h3>
                <p>Sony has redesigned the WH-1000XM5 with a sleeker profile that's more comfortable for extended wear. The lighter weight and improved headband distribution make these ideal for long flights or work sessions.</p>
                
                <h3>Noise Cancellation Performance</h3>
                <p>The active noise cancellation is simply the best in the industry. It effectively eliminates low-frequency noise like airplane engines while maintaining natural sound quality for ambient awareness when needed.</p>
                
                <h3>Audio Quality</h3>
                <p>The 30mm drivers deliver rich, detailed sound across all frequencies. The LDAC codec support ensures high-quality wireless audio, while the EQ customization allows for personalized sound profiles.</p>
                
                <h3>Smart Features</h3>
                <p>Speak-to-Chat automatically pauses music when you start talking, while Adaptive Sound Control adjusts noise cancellation based on your activity and location. These features work reliably in daily use.</p>
                
                <h3>Battery Life and Charging</h3>
                <p>The 30-hour battery life with ANC enabled is impressive, and the quick charge feature provides 3 hours of playback with just 3 minutes of charging via USB-C.</p>
                
                <h3>Call Quality</h3>
                <p>The improved microphone array provides crystal-clear call quality even in noisy environments, making these excellent for remote work and video conferencing.</p>
                
                <h3>Final Verdict</h3>
                <p>The Sony WH-1000XM5 represents the pinnacle of noise-canceling headphones, offering unmatched ANC performance, excellent audio quality, and smart features that enhance the user experience.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "iPhone 15 Pro Max",
        description: "Apple's flagship smartphone featuring the powerful A17 Pro chip, titanium construction, and advanced camera system for professional photography and videography.",
        category: "Smartphones",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.7,
        price: "$1,199",
        badge: "Flagship",
        features: ["A17 Pro Chip", "48MP Camera System", "Titanium Design", "USB-C", "120Hz ProMotion Display"],
        pros: ["Exceptional camera quality", "Premium titanium build", "Outstanding performance", "Long software support", "Excellent display quality"],
        cons: ["Very expensive", "Heavy weight", "Limited customization", "No USB-A adapter included"],
        verdict: "The iPhone 15 Pro Max delivers cutting-edge technology and premium materials, justifying its flagship status for users who demand the best.",
        specs: {
            "Display": "6.7-inch Super Retina XDR OLED",
            "Processor": "A17 Pro 3nm chip",
            "Storage": "256GB, 512GB, 1TB",
            "Camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
            "Battery": "Up to 29 hours video playback",
            "Materials": "Titanium frame, Ceramic Shield front",
            "Connectivity": "5G, Wi-Fi 6E, USB-C",
            "Water Resistance": "IP68"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>Design and Materials</h3>
                <p>The iPhone 15 Pro Max introduces a titanium frame that's both lighter and more durable than stainless steel. The natural titanium finish looks premium while being more resistant to scratches and fingerprints.</p>
                
                <h3>A17 Pro Performance</h3>
                <p>The A17 Pro chip built on 3nm process technology delivers unprecedented mobile performance. Gaming, video editing, and AI processing all benefit from the increased power efficiency and computational capabilities.</p>
                
                <h3>Camera System Excellence</h3>
                <p>The 48MP main camera with 2x telephoto crop, 12MP ultrawide, and 12MP 5x telephoto create a versatile shooting system. ProRAW and ProRes video recording provide professional-grade capture capabilities.</p>
                
                <h3>Display Technology</h3>
                <p>The 6.7-inch Super Retina XDR display with ProMotion technology offers excellent color accuracy, brightness, and smooth scrolling. The Dynamic Island integration feels natural and useful.</p>
                
                <h3>USB-C Transition</h3>
                <p>The switch to USB-C provides better compatibility with existing cables and accessories, though the transition may require new accessories for some users.</p>
                
                <h3>Battery Life</h3>
                <p>All-day battery life is easily achievable with typical usage, and the efficient A17 Pro chip contributes to excellent power management across various tasks.</p>
                
                <h3>iOS Integration</h3>
                <p>Deep integration with iOS 17 and Apple's ecosystem provides seamless functionality across devices, making it ideal for users already invested in Apple products.</p>
                
                <h3>Final Assessment</h3>
                <p>The iPhone 15 Pro Max represents the pinnacle of smartphone technology, offering premium materials, exceptional performance, and industry-leading camera capabilities for users who want the absolute best.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Steam Deck OLED",
        description: "Valve's upgraded portable gaming PC featuring a stunning OLED display, improved battery life, and the ability to play your entire Steam library on the go.",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.5,
        price: "$549",
        badge: "Gaming Beast",
        features: ["OLED Display", "Custom APU", "1TB SSD", "Trackpads", "Linux-based SteamOS"],
        pros: ["Beautiful OLED screen", "Plays AAA games", "Excellent controls", "Great value", "Active development"],
        cons: ["Short battery life", "Learning curve", "Some games incompatible", "Fan noise under load"],
        verdict: "The Steam Deck OLED transforms portable PC gaming with its gorgeous display and impressive game compatibility, despite some limitations.",
        specs: {
            "Display": "7.4-inch OLED HDR, 90Hz",
            "Processor": "Custom AMD APU",
            "RAM": "16GB LPDDR5",
            "Storage": "1TB NVMe SSD",
            "Graphics": "8 RDNA 2 CUs",
            "Battery": "50Wh, 3-12 hours",
            "Weight": "1.4 pounds",
            "OS": "SteamOS 3.0 (Arch Linux)"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>OLED Display Upgrade</h3>
                <p>The 7.4-inch OLED display is a game-changer, offering vibrant colors, deep blacks, and improved color accuracy. The 90Hz refresh rate makes games feel smoother, and HDR support enhances compatible titles.</p>
                
                <h3>Performance Capabilities</h3>
                <p>The custom AMD APU handles most modern games at 720p/800p resolution. While some games require settings adjustments, the performance is impressive for a handheld device at this price point.</p>
                
                <h3>Game Compatibility</h3>
                <p>Valve's Proton compatibility layer allows most Windows games to run on Linux-based SteamOS. The verification system clearly indicates which games work well, though some anti-cheat games remain incompatible.</p>
                
                <h3>Controls and Ergonomics</h3>
                <p>The Steam Deck offers comprehensive controls including dual trackpads, gyroscope, and back buttons. The ergonomics work well for extended gaming sessions, though the device is quite heavy.</p>
                
                <h3>Battery Life Considerations</h3>
                <p>Battery life varies significantly based on the game, ranging from 2-8 hours. Less demanding indie games provide longer play sessions, while AAA titles drain the battery quickly.</p>
                
                <h3>Software and Customization</h3>
                <p>SteamOS provides a console-like experience, but power users can install Windows or other Linux distributions. The desktop mode offers full PC functionality when needed.</p>
                
                <h3>Value Proposition</h3>
                <p>At $549, the Steam Deck OLED offers exceptional value for PC gaming on the go. The ability to play your existing Steam library without rebuying games is a significant advantage over other handheld consoles.</p>
                
                <h3>Recommendation</h3>
                <p>The Steam Deck OLED is perfect for PC gamers who want portable access to their library, indie game enthusiasts, and anyone interested in handheld PC gaming despite the learning curve.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "NVIDIA GeForce RTX 4090",
        description: "The ultimate graphics card for 4K gaming and content creation, featuring Ada Lovelace architecture and 24GB of GDDR6X memory for uncompromising performance.",
        category: "PC Components",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.4,
        price: "$1,599",
        badge: "Performance King",
        features: ["Ada Lovelace Architecture", "24GB GDDR6X", "DLSS 3", "4K Gaming", "Ray Tracing"],
        pros: ["Unmatched 4K performance", "Excellent ray tracing", "DLSS 3 technology", "Content creation powerhouse", "Future-proof"],
        cons: ["Extremely expensive", "High power consumption", "Massive physical size", "Overkill for 1080p/1440p"],
        verdict: "The RTX 4090 is the undisputed performance champion for 4K gaming and professional content creation, but the premium price limits its appeal.",
        specs: {
            "Architecture": "Ada Lovelace",
            "CUDA Cores": "16,384",
            "Memory": "24GB GDDR6X",
            "Memory Bus": "384-bit",
            "Base Clock": "2230 MHz",
            "Boost Clock": "2520 MHz",
            "TGP": "450W",
            "Dimensions": "12.0 x 5.4 inches (3-slot)"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>Architecture and Performance</h3>
                <p>The Ada Lovelace architecture delivers unprecedented gaming performance. At 4K resolution with max settings, the RTX 4090 maintains 60+ fps in virtually all modern games, often exceeding 100 fps.</p>
                
                <h3>Ray Tracing Excellence</h3>
                <p>Third-generation RT cores provide significant ray tracing performance improvements. Games with RT enabled remain highly playable at 4K resolution, a feat impossible with previous generations.</p>
                
                <h3>DLSS 3 and Frame Generation</h3>
                <p>DLSS 3 with Frame Generation can nearly double frame rates in supported games. The AI-generated frames look convincing and provide a substantial performance boost without noticeable quality degradation.</p>
                
                <h3>Content Creation Performance</h3>
                <p>The 24GB of GDDR6X memory makes this ideal for 3D rendering, video editing, and AI workloads. Creators working with 8K video or complex 3D scenes will appreciate the massive memory buffer.</p>
                
                <h3>Power and Thermal Considerations</h3>
                <p>The 450W TGP requires a robust PSU (850W+ recommended) and excellent case ventilation. The card runs hot and loud under load, necessitating good airflow management.</p>
                
                <h3>Physical Requirements</h3>
                <p>The massive three-slot design requires a large case and may block adjacent PCIe slots. Check clearance carefully as this card is significantly larger than previous generations.</p>
                
                <h3>Value Analysis</h3>
                <p>At $1,599, the RTX 4090 is expensive but offers 20-30% better performance than the RTX 4080. For users who need maximum performance, the price premium may be justified.</p>
                
                <h3>Recommendation</h3>
                <p>The RTX 4090 is ideal for 4K gaming enthusiasts, professional content creators, and users who want to future-proof their system for upcoming games with maximum visual fidelity.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "LG C3 OLED 65-inch Smart TV",
        description: "Premium OLED television combining perfect blacks, vibrant colors, and smart TV features for the ultimate home entertainment experience.",
        category: "TVs & Displays",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop&crop=entropy&auto=format",
        rating: 4.6,
        price: "$2,499",
        badge: "Best OLED",
        features: ["OLED Technology", "4K 120Hz", "Dolby Vision", "webOS Smart TV", "HDMI 2.1"],
        pros: ["Perfect black levels", "Excellent gaming features", "Beautiful design", "Comprehensive smart features", "Great for movies"],
        cons: ["Risk of burn-in", "Reflective screen", "Expensive", "Peak brightness limitations"],
        verdict: "The LG C3 OLED delivers reference-quality picture performance and excellent gaming features, making it ideal for discerning viewers despite OLED limitations.",
        specs: {
            "Screen Size": "65 inches",
            "Resolution": "4K (3840 x 2160)",
            "Panel Type": "OLED Evo",
            "Refresh Rate": "120Hz",
            "HDR": "Dolby Vision, HDR10, HLG",
            "Smart OS": "webOS 23",
            "HDMI Ports": "4x HDMI 2.1",
            "Audio": "40W 2.2 channel"
        },
        fullReview: `
            <div class="product-full-review">
                <h3>OLED Picture Quality</h3>
                <p>The self-emissive OLED technology delivers perfect blacks and infinite contrast ratio. Colors are vibrant and accurate, while the viewing angles remain consistent from any position in the room.</p>
                
                <h3>Gaming Performance</h3>
                <p>Four HDMI 2.1 ports support 4K 120Hz gaming with Variable Refresh Rate (VRR) and Auto Low Latency Mode (ALLM). Input lag is minimal, making this excellent for PS5, Xbox Series X, and PC gaming.</p>
                
                <h3>HDR and Color Accuracy</h3>
                <p>Support for Dolby Vision, HDR10, and HLG provides excellent HDR performance. While peak brightness can't match QLED TVs, the perfect blacks create impressive perceived contrast in dark rooms.</p>
                
                <h3>Smart TV Platform</h3>
                <p>webOS provides an intuitive interface with comprehensive app support. The Magic Remote with point-and-click functionality makes navigation effortless, and voice control works reliably.</p>
                
                <h3>Design and Build Quality</h3>
                <p>The ultra-thin profile and minimal bezels create an elegant appearance. The Gallery Design allows wall mounting with minimal gap, creating a premium aesthetic in any room.</p>
                
                <h3>Audio Quality</h3>
                <p>The built-in speakers provide clear dialogue and decent bass for a TV, though a soundbar or surround system will significantly enhance the audio experience for movies and gaming.</p>
                
                <h3>Burn-in Considerations</h3>
                <p>Modern OLED panels have improved burn-in resistance, and LG includes protective features like pixel shifting. However, users should still vary content and avoid static elements for extended periods.</p>
                
                <h3>Final Recommendation</h3>
                <p>The LG C3 OLED is perfect for movie enthusiasts, gamers, and anyone who prioritizes picture quality. The premium price is justified by the exceptional performance and features offered.</p>
            </div>
        `
    }
];

// Category mappings
const categoryMap = {
    'technology': 'Technology',
    'lifestyle': 'Lifestyle',
    'business': 'Business',
    'health': 'Health',
    'travel': 'Travel',
    'education': 'Education',
    'politics': 'Politics',
    'arts': 'Arts',
    'latest': 'Latest',
    'sports': 'Sports'
};

const productCategoryMap = {
    'Laptops': 'Laptops',
    'Audio': 'Audio',
    'Smartphones': 'Smartphones',
    'Gaming': 'Gaming',
    'PC Components': 'PC Components',
    'TVs & Displays': 'TVs & Displays'
};

// Utility functions
function getCategoryDisplayName(category) {
    return categoryMap[category] || category;
}

function getProductCategoryDisplayName(category) {
    return productCategoryMap[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function getArticleSlug(title) {
    if (!title) return '';
    return encodeURIComponent(
        title
            .toLowerCase()
            .trim()
            .replace(/[\s\/]+/g, '-')        // spaces & slashes to dash
            .replace(/[^a-z0-9\-]+/g, '')    // remove other non-url chars
            .replace(/-+/g, '-')             // collapse multiple dashes
    );
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star star"></i>';
    }
    
    return starsHTML;
}

// Make data available globally
if (typeof window !== 'undefined') {
    window.articlesData = articlesData;
    window.productsData = productsData;
    window.getCategoryDisplayName = getCategoryDisplayName;
    window.getProductCategoryDisplayName = getProductCategoryDisplayName;
    window.formatDate = formatDate;
    window.generateStars = generateStars;
    window.getArticleSlug = getArticleSlug;
}