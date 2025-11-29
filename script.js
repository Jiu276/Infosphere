// Global Data Storage
const articlesData = [
    {
        id: 1,
        title: "The Future of AI in Software Development: A Comprehensive Analysis",
        excerpt: "Exploring how artificial intelligence is revolutionizing the software development landscape, from code generation to automated testing and deployment strategies.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format",
        date: "2025-08-15",
        readTime: "8 min read",
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

function getArticleSlug(title) {
    if (!title) return '';
    return encodeURIComponent(
        title
            .toLowerCase()
            .trim()
            .replace(/[\s\/]+/g, '-')
            .replace(/[^a-z0-9\-]+/g, '')
            .replace(/-+/g, '-')
    );
}

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

// Attach generic image fallback for static images using data-fallback
document.addEventListener('DOMContentLoaded', () => {
    const fallbackUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format';
    document.querySelectorAll('img[data-fallback]').forEach(img => {
        img.addEventListener('error', () => {
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = '1';
            const custom = img.getAttribute('data-fallback-src');
            img.src = custom || fallbackUrl;
        });
    });

    // Featured news horizontal scroll controls
    const featuredGrid = document.getElementById('heroFeaturedGrid');
    const prevBtn = document.getElementById('featuredPrev');
    const nextBtn = document.getElementById('featuredNext');
    if (featuredGrid && prevBtn && nextBtn) {
        const getStep = () => {
            const card = featuredGrid.querySelector('.featured-card');
            return card ? card.offsetWidth + 24 : 320;
        };
        prevBtn.addEventListener('click', () => {
            featuredGrid.scrollBy({ left: -getStep(), behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            featuredGrid.scrollBy({ left: getStep(), behavior: 'smooth' });
        });
    }

    // Featured / today cards -> article detail
    document.querySelectorAll('[data-article-title]').forEach(card => {
        const title = card.getAttribute('data-article-title');
        if (!title) return;
        const slug = getArticleSlug(title);
        card.addEventListener('click', () => {
            window.location.href = `article.html?slug=${slug}`;
        });
    });
});

const platformsData = [
    {
        id: 1,
        title: "Vercel",
        description: "The frontend cloud platform for developers, offering seamless deployment, edge functions, and optimized performance for modern web applications.",
        category: "Web Hosting",
        icon: "fas fa-rocket",
        features: ["Edge Network", "Serverless Functions", "Git Integration", "Automatic SSL", "Analytics"],
        score: 9.2,
        pros: ["Extremely fast deployments", "Excellent developer experience", "Great Next.js integration", "Global edge network", "Generous free tier"],
        cons: ["Limited backend capabilities", "Can be expensive at scale", "Vendor lock-in concerns"],
        pricing: "Free tier available, Pro from $20/month",
        fullReview: `
            <div class="platform-full-review">
                <h3>Developer Experience</h3>
                <p>Vercel excels at providing an exceptional developer experience. Git integration means deployments happen automatically on every push, with preview deployments for every pull request making collaboration seamless.</p>
                
                <h3>Performance and Speed</h3>
                <p>The global edge network ensures fast loading times worldwide. Static assets are cached at edge locations, while serverless functions execute close to users, minimizing latency.</p>
                
                <h3>Next.js Integration</h3>
                <p>As the creators of Next.js, Vercel offers unmatched integration with the framework. Features like Incremental Static Regeneration and Edge Runtime work flawlessly out of the box.</p>
                
                <h3>Serverless Functions</h3>
                <p>Edge Functions and Serverless Functions provide backend capabilities without server management. The platform handles scaling automatically, though cold starts can occasionally impact performance.</p>
                
                <h3>Analytics and Monitoring</h3>
                <p>Built-in analytics provide insights into Core Web Vitals and real user metrics. The monitoring dashboard helps identify performance issues and optimization opportunities.</p>
                
                <h3>Pricing Considerations</h3>
                <p>The free tier is generous for personal projects and small applications. However, bandwidth costs can escalate quickly for high-traffic applications, making cost monitoring important.</p>
                
                <h3>Limitations</h3>
                <p>Vercel is optimized for frontend and JAMstack applications. Complex backend logic may require external services, and there are execution time limits for serverless functions.</p>
                
                <h3>Recommendation</h3>
                <p>Vercel is ideal for frontend developers, Next.js applications, and JAMstack sites that prioritize performance and developer experience over complex backend requirements.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Notion",
        description: "All-in-one workspace combining notes, databases, wikis, and project management tools for teams and individuals seeking organized productivity.",
        category: "Productivity",
        icon: "fas fa-clipboard-list",
        features: ["Databases", "Templates", "Collaboration", "API Access", "Cross-platform"],
        score: 8.8,
        pros: ["Highly flexible", "Great templates", "Strong collaboration", "Powerful databases", "Regular updates"],
        cons: ["Can be slow", "Steep learning curve", "Overwhelming options", "Limited offline access"],
        pricing: "Free for personal use, Team from $8/user/month",
        fullReview: `
            <div class="platform-full-review">
                <h3>Flexibility and Customization</h3>
                <p>Notion's block-based approach allows creating custom workflows for any use case. From simple notes to complex project management systems, the platform adapts to your needs rather than forcing specific workflows.</p>
                
                <h3>Database Capabilities</h3>
                <p>The database functionality is surprisingly powerful, supporting relations, formulas, and multiple views (table, kanban, calendar, gallery). This makes Notion suitable for everything from task management to CRM systems.</p>
                
                <h3>Collaboration Features</h3>
                <p>Real-time collaboration works well for teams, with comments, mentions, and permission controls. The ability to share pages publicly or with specific users makes it versatile for both internal and external collaboration.</p>
                
                <h3>Template Ecosystem</h3>
                <p>Extensive template gallery provides starting points for common use cases. Community-created templates offer inspiration and proven workflows for everything from meeting notes to complex project tracking.</p>
                
                <h3>Performance Considerations</h3>
                <p>Large databases and complex pages can become slow to load. The web-based nature means performance depends on internet connectivity, and offline access is limited compared to native applications.</p>
                
                <h3>Learning Curve</h3>
                <p>While powerful, Notion can be overwhelming for new users. The flexibility that makes it powerful also means there's no single "right" way to use it, requiring time investment to develop effective workflows.</p>
                
                <h3>API and Integrations</h3>
                <p>The public API enables custom integrations and automations. While not as extensive as dedicated tools, it provides enough functionality for most common integration needs.</p>
                
                <h3>Best Use Cases</h3>
                <p>Notion excels for knowledge management, project documentation, personal organization, and teams that need a flexible, unified workspace for various types of content and data.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Discord",
        description: "Communication platform designed for communities, offering voice, video, and text chat with powerful server organization and moderation tools.",
        category: "Communication",
        icon: "fab fa-discord",
        features: ["Voice Channels", "Server Roles", "Bots Integration", "Screen Sharing", "Threads"],
        score: 8.6,
        pros: ["Excellent voice quality", "Rich feature set", "Strong community tools", "Free core features", "Extensive bot ecosystem"],
        cons: ["Can be overwhelming", "Privacy concerns", "Resource intensive", "Complex permissions"],
        pricing: "Free with limitations, Nitro from $9.99/month",
        fullReview: `
            <div class="platform-full-review">
                <h3>Community Building</h3>
                <p>Discord excels at creating organized communities with channels for different topics, voice rooms for real-time conversation, and roles that define permissions and status within the community.</p>
                
                <h3>Voice and Video Quality</h3>
                <p>The voice chat quality is exceptional, with noise suppression, echo cancellation, and low latency making it ideal for gaming, meetings, and casual conversations. Video calls support screen sharing and Go Live streaming.</p>
                
                <h3>Moderation and Management</h3>
                <p>Comprehensive moderation tools including role-based permissions, automated moderation bots, and server verification levels help maintain healthy communities at scale.</p>
                
                <h3>Bot Ecosystem</h3>
                <p>Thousands of third-party bots add functionality like music playback, game integration, moderation assistance, and custom commands. The bot API enables virtually unlimited customization.</p>
                
                <h3>User Experience</h3>
                <p>The interface can be overwhelming for newcomers, with many features and options. However, the core functionality is intuitive once users understand the server and channel structure.</p>
                
                <h3>Mobile and Cross-Platform</h3>
                <p>Consistent experience across desktop and mobile apps, with push notifications and offline message sync keeping users connected regardless of device.</p>
                
                <h3>Privacy and Safety</h3>
                <p>Discord has improved privacy controls and safety features, though users should be aware of data collection practices and use privacy settings appropriately for their needs.</p>
                
                <h3>Use Case Recommendations</h3>
                <p>Perfect for gaming communities, hobby groups, educational servers, and any community that benefits from organized, persistent communication channels with voice chat integration.</p>
            </div>
        `
    },
    {
        id: 4,
        title: "Figma",
        description: "Collaborative design platform enabling teams to create, prototype, and iterate on user interfaces with real-time collaboration and powerful design systems.",
        category: "Design Tools",
        icon: "fas fa-paint-brush",
        features: ["Real-time Collaboration", "Prototyping", "Design Systems", "Developer Handoff", "Plugins"],
        score: 9.4,
        pros: ["Excellent collaboration", "Web-based accessibility", "Powerful prototyping", "Strong component system", "Active plugin ecosystem"],
        cons: ["Requires internet connection", "Can be resource intensive", "Learning curve for advanced features", "Limited offline capabilities"],
        pricing: "Free for personal use, Professional from $12/editor/month",
        fullReview: `
            <div class="platform-full-review">
                <h3>Collaborative Design</h3>
                <p>Figma revolutionizes design collaboration by enabling multiple designers to work simultaneously on the same file. Real-time cursors, comments, and live editing make team design workflows seamless.</p>
                
                <h3>Web-Based Advantage</h3>
                <p>Running in the browser means no software installation requirements and consistent experience across operating systems. Files are always up-to-date and accessible from anywhere with an internet connection.</p>
                
                <h3>Design Systems and Components</h3>
                <p>Robust component system with variants, properties, and nested instances enables scalable design systems. Auto Layout provides responsive design capabilities that mirror CSS Flexbox behavior.</p>
                
                <h3>Prototyping Capabilities</h3>
                <p>Built-in prototyping with smart animate, overlays, and interactive components creates high-fidelity prototypes without leaving the design environment. Advanced interactions support complex user flows.</p>
                
                <h3>Developer Handoff</h3>
                <p>Inspect panel provides CSS code, measurements, and assets automatically. Developers can access designs directly, reducing the gap between design and implementation.</p>
                
                <h3>Plugin Ecosystem</h3>
                <p>Extensive plugin library adds functionality like content generation, accessibility checking, design system management, and integration with other tools in the design workflow.</p>
                
                <h3>Performance Considerations</h3>
                <p>Large files with many components can impact performance. The web-based nature means performance depends on browser and internet connection quality.</p>
                
                <h3>Learning and Adoption</h3>
                <p>Interface is intuitive for new users while providing advanced features for experienced designers. Extensive community resources and tutorials support learning and best practices.</p>
                
                <h3>Team Collaboration</h3>
                <p>Perfect for design teams, product teams, and any organization that values design collaboration, version control, and maintaining consistent design systems across products.</p>
            </div>
        `
    },
    {
        id: 5,
        title: "Stripe",
        description: "Comprehensive payment infrastructure platform providing APIs and tools for online businesses to accept payments, manage subscriptions, and handle financial operations.",
        category: "Payment Processing",
        icon: "fas fa-credit-card",
        features: ["Payment APIs", "Subscription Management", "Global Payments", "Fraud Prevention", "Analytics Dashboard"],
        score: 9.1,
        pros: ["Developer-friendly APIs", "Comprehensive documentation", "Global reach", "Strong security", "Extensive features"],
        cons: ["Higher fees for some regions", "Complex pricing structure", "Requires technical integration", "Limited phone support"],
        pricing: "2.9% + 30¢ per transaction, volume discounts available",
        fullReview: `
            <div class="platform-full-review">
                <h3>Developer Experience</h3>
                <p>Stripe's APIs are renowned for their clarity and ease of integration. Comprehensive documentation, SDKs for multiple programming languages, and excellent testing tools make implementation straightforward for developers.</p>
                
                <h3>Payment Processing</h3>
                <p>Support for 135+ currencies and various payment methods including cards, digital wallets, bank transfers, and local payment methods. Processing is fast and reliable with excellent uptime.</p>
                
                <h3>Subscription and Billing</h3>
                <p>Sophisticated subscription management with support for complex pricing models, trials, coupons, and dunning management. Automated billing and invoice generation reduce administrative overhead.</p>
                
                <h3>Security and Compliance</h3>
                <p>PCI DSS Level 1 compliance, advanced fraud detection using machine learning, and Strong Customer Authentication (SCA) compliance for European payments ensure secure transactions.</p>
                
                <h3>Analytics and Reporting</h3>
                <p>Comprehensive dashboard with real-time analytics, revenue recognition tools, and detailed reporting help businesses understand their payment performance and customer behavior.</p>
                
                <h3>Global Capabilities</h3>
                <p>Operates in 46+ countries with local payment methods and compliance. Automatic currency conversion and multi-party payments support international business operations.</p>
                
                <h3>Pricing Structure</h3>
                <p>Transparent per-transaction pricing with no monthly fees for basic usage. Additional features like Radar for fraud prevention and Billing for subscriptions have separate pricing tiers.</p>
                
                <h3>Ecosystem and Integrations</h3>
                <p>Extensive marketplace of apps and integrations with major e-commerce platforms, accounting software, and business tools. The ecosystem reduces time to market for common use cases.</p>
                
                <h3>Support and Resources</h3>
                <p>While primarily email-based, support quality is high with detailed responses. Extensive documentation, guides, and community resources provide self-service options for most issues.</p>
                
                <h3>Best For</h3>
                <p>Online businesses, SaaS companies, marketplaces, and any organization that needs reliable payment processing with modern APIs and global reach capabilities.</p>
            </div>
        `
    },
    {
        id: 6,
        title: "Supabase",
        description: "Open-source Firebase alternative providing PostgreSQL database, authentication, real-time subscriptions, and edge functions for modern application development.",
        category: "Backend as a Service",
        icon: "fas fa-database",
        features: ["PostgreSQL Database", "Authentication", "Real-time Updates", "Edge Functions", "Storage"],
        score: 8.7,
        pros: ["Open-source", "SQL database", "Strong developer tools", "Good documentation", "Growing ecosystem"],
        cons: ["Smaller ecosystem than Firebase", "Newer platform", "Limited regional availability", "Learning curve for SQL"],
        pricing: "Free tier available, Pro from $25/project/month",
        fullReview: `
            <div class="platform-full-review">
                <h3>PostgreSQL Foundation</h3>
                <p>Built on PostgreSQL, Supabase provides the power and flexibility of a relational database with ACID compliance, complex queries, and mature ecosystem of extensions and tools.</p>
                
                <h3>Authentication System</h3>
                <p>Built-in user management with social logins, email verification, and JWT tokens. Row-level security policies provide fine-grained access control directly in the database layer.</p>
                
                <h3>Real-time Capabilities</h3>
                <p>PostgreSQL's logical replication enables real-time subscriptions to database changes. This allows building reactive applications with live updates without complex infrastructure.</p>
                
                <h3>Developer Experience</h3>
                <p>Auto-generated APIs based on database schema, comprehensive client libraries, and excellent documentation make development efficient. The dashboard provides database management and API exploration.</p>
                
                <h3>Edge Functions</h3>
                <p>Deno-powered edge functions provide serverless compute capabilities with TypeScript support and global distribution for low-latency execution.</p>
                
                <h3>Storage and CDN</h3>
                <p>S3-compatible object storage with CDN integration for serving files globally. Image transformations and optimization are built-in for common use cases.</p>
                
                <h3>Open Source Advantage</h3>
                <p>Being open-source means no vendor lock-in, ability to self-host, and community contributions. The codebase is transparent and extensible for specific needs.</p>
                
                <h3>Ecosystem and Maturity</h3>
                <p>While growing rapidly, the ecosystem is smaller than established alternatives. Some advanced features and integrations may require custom development or third-party solutions.</p>
                
                <h3>Scaling and Performance</h3>
                <p>PostgreSQL's proven scalability and performance characteristics, combined with connection pooling and read replicas, support applications from prototype to production scale.</p>
                
                <h3>Ideal Use Cases</h3>
                <p>Perfect for developers who prefer SQL databases, want to avoid vendor lock-in, need complex queries and relationships, or are building applications requiring real-time features.</p>
            </div>
        `
    }
];

// Global State
let currentPage = 1;
let articlesPerPage = 6;
let currentCategory = 'all';
let searchTerm = '';
let currentArticleId = null;
let currentView = 'articles'; // 'articles' or 'article-detail'

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const productsGrid = document.getElementById('productsGrid');
const platformsGrid = document.getElementById('platformsGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const articlesPagination = document.getElementById('articlesPagination');
const articlesSection = document.getElementById('articles');
const articleDetailSection = document.getElementById('article-detail');
const articleDetailContent = document.getElementById('articleDetailContent');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderArticles();
    renderProducts();
    renderPlatforms();
    setupScrollAnimations();
    setupNavigation();
    initializeRouting();
});

function initializeApp() {
    // Add loading animations to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.article-card, .product-card, .platform-card, .hero-content, .section-header').forEach(el => {
        observer.observe(el);
    });
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filtering
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });

    // Mobile navigation
    hamburger.addEventListener('click', toggleMobileNav);
    
    // Close mobile nav when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Article detail actions
    document.addEventListener('click', function(e) {
        if (e.target.closest('.share-article')) {
            handleShareArticle();
        }
        if (e.target.closest('.bookmark-article')) {
            handleBookmarkArticle();
        }
    });

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(btn => {
        btn.addEventListener('click', handleHeroButtonClick);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    currentPage = 1;
    renderArticles();
}

function handleCategoryFilter(e) {
    // Update active category button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentCategory = e.target.dataset.category;
    currentPage = 1;
    renderArticles();
}

function toggleMobileNav() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileNav() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    e.target.querySelector('input[type="email"]').value = '';
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    e.target.reset();
}

function handleHeroButtonClick(e) {
    const buttonText = e.target.textContent;
    
    if (buttonText.includes('Explore')) {
        document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
    } else if (buttonText.includes('Reviews')) {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
}

function handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function renderArticles() {
    let filteredArticles = articlesData.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

    articlesGrid.innerHTML = paginatedArticles.map(article => `
        <article class="article-card" onclick="showArticleDetail(${article.id})">
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="article-image-placeholder" style="display: none;">
                    <i class="fas fa-newspaper" style="font-size: 3rem; color: var(--primary-color);"></i>
                </div>
            </div>
            <div class="article-content">
                <span class="article-category">${getCategoryDisplayName(article.category)}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <div class="article-date">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(article.date)}</span>
                    </div>
                    <div class="article-readtime">
                        <i class="fas fa-clock"></i>
                        <span>${article.readTime}</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    renderPagination(filteredArticles.length);
    
    // Add loading animation to new cards
    setTimeout(() => {
        document.querySelectorAll('.article-card').forEach(card => {
            card.classList.add('fade-in');
        });
    }, 100);
}

function renderProducts() {
    productsGrid.innerHTML = productsData.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-image-placeholder" style="display: none;">
                    <i class="fas fa-box" style="font-size: 3rem; color: var(--secondary-color);"></i>
                </div>
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">${product.rating}/5</span>
                </div>
                <div class="product-price">
                    <span class="price">${product.price}</span>
                    <button class="btn btn-primary btn-sm">Read Review</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPlatforms() {
    platformsGrid.innerHTML = platformsData.map(platform => `
        <div class="platform-card" onclick="openPlatformModal(${platform.id})">
            <div class="platform-header">
                <div class="platform-icon">
                    <i class="${platform.icon}"></i>
                </div>
                <div class="platform-info">
                    <h3>${platform.title}</h3>
                    <span class="platform-category">${platform.category}</span>
                </div>
            </div>
            <p class="platform-description">${platform.description}</p>
            <div class="platform-features">
                ${platform.features.map(feature => 
                    `<span class="feature-tag">${feature}</span>`
                ).join('')}
            </div>
            <div class="platform-score">
                <span class="score">${platform.score}/10</span>
                <button class="btn btn-outline btn-sm">Read Review</button>
            </div>
        </div>
    `).join('');
}

function renderPagination(totalArticles) {
    const totalPages = Math.ceil(totalArticles / articlesPerPage);
    
    if (totalPages <= 1) {
        articlesPagination.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<span class="page-btn" disabled>...</span>';
        }
    }
    
    // Next button
    paginationHTML += `
        <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    articlesPagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    renderArticles();
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
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

function getCategoryDisplayName(category) {
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
    return categoryMap[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius-lg);
                padding: 1rem 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                box-shadow: var(--shadow-lg);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                max-width: 400px;
            }
            
            .notification-success {
                border-left: 4px solid var(--success-color);
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                color: var(--text-primary);
            }
            
            .notification-content i {
                color: var(--success-color);
                font-size: 1.1rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--text-tertiary);
                cursor: pointer;
                padding: 0.25rem;
                border-radius: var(--border-radius);
                transition: var(--transition);
            }
            
            .notification-close:hover {
                color: var(--text-primary);
                background: var(--bg-tertiary);
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function setupScrollAnimations() {
    // Header background animation on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(25px)';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.06)';
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${parallax}px)`;
        }
    });
}

function setupNavigation() {
    // Update active nav link based on scroll position
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

// Article Detail Functions
function showArticleDetail(articleId) {
    const article = articlesData.find(a => a.id === articleId);
    if (!article) return;
    
    currentArticleId = articleId;
    currentView = 'article-detail';
    
    // Hide articles section and show detail section
    articlesSection.style.display = 'none';
    articleDetailSection.style.display = 'block';
    
    // Update URL without page refresh
    const url = new URL(window.location);
    url.searchParams.set('article', articleId);
    window.history.pushState({view: 'article-detail', articleId}, '', url);
    
    // Render article content
    renderArticleDetail(article);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update navigation buttons
    updateArticleNavigation();
    
    // Update bookmark button
    setTimeout(() => updateBookmarkButton(), 100);
}

function renderArticleDetail(article) {
    articleDetailContent.innerHTML = `
        <div class="article-detail-header">
            <img src="${article.image}" alt="${article.title}" class="article-detail-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="article-image-placeholder" style="display: none; height: 400px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); align-items: center; justify-content: center;">
                <i class="fas fa-newspaper" style="font-size: 4rem; color: white;"></i>
            </div>
            <div class="article-detail-overlay">
                <span class="article-detail-category">${getCategoryDisplayName(article.category)}</span>
                <h1 class="article-detail-title">${article.title}</h1>
                <div class="article-detail-meta">
                    <div class="article-detail-meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${formatDate(article.date)}</span>
                    </div>
                    <div class="article-detail-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${article.readTime}</span>
                    </div>
                    <div class="article-detail-meta-item">
                        <i class="fas fa-user"></i>
                        <span>Infosphere Editorial</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="article-detail-body">
            <div class="article-detail-excerpt">
                ${article.excerpt}
            </div>
            ${article.content}
        </div>
    `;
}

function showArticlesList() {
    currentView = 'articles';
    currentArticleId = null;
    
    // Show articles section and hide detail section
    articlesSection.style.display = 'block';
    articleDetailSection.style.display = 'none';
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.delete('article');
    window.history.pushState({view: 'articles'}, '', url);
    
    // Scroll to articles section
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
}

function updateArticleNavigation() {
    const currentIndex = articlesData.findIndex(a => a.id === currentArticleId);
    const prevButton = document.getElementById('prevArticle');
    const nextButton = document.getElementById('nextArticle');
    
    // Update previous button
    if (currentIndex > 0) {
        prevButton.disabled = false;
        prevButton.onclick = () => showArticleDetail(articlesData[currentIndex - 1].id);
        prevButton.querySelector('span') ? 
            prevButton.querySelector('span').textContent = articlesData[currentIndex - 1].title.substring(0, 30) + '...' :
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i> Previous Article';
    } else {
        prevButton.disabled = true;
    }
    
    // Update next button
    if (currentIndex < articlesData.length - 1) {
        nextButton.disabled = false;
        nextButton.onclick = () => showArticleDetail(articlesData[currentIndex + 1].id);
        nextButton.querySelector('span') ? 
            nextButton.querySelector('span').textContent = articlesData[currentIndex + 1].title.substring(0, 30) + '...' :
            nextButton.innerHTML = 'Next Article <i class="fas fa-chevron-right"></i>';
    } else {
        nextButton.disabled = true;
    }
}

function navigateToPrevArticle() {
    const currentIndex = articlesData.findIndex(a => a.id === currentArticleId);
    if (currentIndex > 0) {
        showArticleDetail(articlesData[currentIndex - 1].id);
    }
}

function navigateToNextArticle() {
    const currentIndex = articlesData.findIndex(a => a.id === currentArticleId);
    if (currentIndex < articlesData.length - 1) {
        showArticleDetail(articlesData[currentIndex + 1].id);
    }
}

function handleShareArticle() {
    const article = articlesData.find(a => a.id === currentArticleId);
    if (!article) return;
    
    if (navigator.share) {
        navigator.share({
            title: article.title,
            text: article.excerpt,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Article URL copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Unable to copy URL. Please copy manually.', 'error');
        });
    }
}

function handleBookmarkArticle() {
    const article = articlesData.find(a => a.id === currentArticleId);
    if (!article) return;
    
    // Simulate bookmarking (in a real app, this would save to a backend)
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    
    if (bookmarks.includes(currentArticleId)) {
        // Remove bookmark
        const index = bookmarks.indexOf(currentArticleId);
        bookmarks.splice(index, 1);
        showNotification('Article removed from bookmarks', 'success');
    } else {
        // Add bookmark
        bookmarks.push(currentArticleId);
        showNotification('Article bookmarked successfully!', 'success');
    }
    
    localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarks));
    updateBookmarkButton();
}

function updateBookmarkButton() {
    const bookmarkBtn = document.querySelector('.bookmark-article');
    if (!bookmarkBtn) return;
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');
    const isBookmarked = bookmarks.includes(currentArticleId);
    
    const icon = bookmarkBtn.querySelector('i');
    if (isBookmarked) {
        icon.className = 'fas fa-bookmark';
        bookmarkBtn.style.background = 'var(--warning-color)';
        bookmarkBtn.style.borderColor = 'var(--warning-color)';
        bookmarkBtn.style.color = 'white';
    } else {
        icon.className = 'far fa-bookmark';
        bookmarkBtn.style.background = '';
        bookmarkBtn.style.borderColor = '';
        bookmarkBtn.style.color = '';
    }
}

// Handle browser back/forward buttons
function handlePopState(event) {
    if (event.state) {
        if (event.state.view === 'article-detail' && event.state.articleId) {
            showArticleDetail(event.state.articleId);
        } else if (event.state.view === 'articles') {
            showArticlesList();
        }
    } else {
        // Handle initial page load
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('article');
        if (articleId) {
            showArticleDetail(parseInt(articleId));
        }
    }
}

// Initialize URL-based routing
function initializeRouting() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article');
    
    if (articleId) {
        const article = articlesData.find(a => a.id === parseInt(articleId));
        if (article) {
            showArticleDetail(parseInt(articleId));
        } else {
            // Invalid article ID, show articles list
            showArticlesList();
        }
    }
    
    // Listen for browser navigation
    window.addEventListener('popstate', handlePopState);
}

function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = createModal('product', {
        title: product.title,
        content: `
            <div class="modal-product">
                <div class="modal-product-header">
                    <img src="${product.image}" alt="${product.title}" class="modal-product-image">
                    <div class="modal-product-info">
                        <div class="modal-product-rating">
                            <div class="stars">${generateStars(product.rating)}</div>
                            <span class="rating-text">${product.rating}/5</span>
                        </div>
                        <div class="modal-product-price">${product.price}</div>
                        ${product.badge ? `<span class="modal-product-badge">${product.badge}</span>` : ''}
                    </div>
                </div>
                <div class="modal-product-description">
                    <p>${product.description}</p>
                </div>
                <div class="modal-product-features">
                    <h4>Key Features</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="modal-product-pros-cons">
                    <div class="pros">
                        <h4><i class="fas fa-check-circle" style="color: var(--success-color);"></i> Pros</h4>
                        <ul>
                            ${product.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons">
                        <h4><i class="fas fa-times-circle" style="color: var(--danger-color);"></i> Cons</h4>
                        <ul>
                            ${product.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="modal-product-verdict">
                    <h4>Verdict</h4>
                    <p>${product.verdict}</p>
                </div>
                ${product.fullReview}
            </div>
        `
    });
    
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

function openPlatformModal(platformId) {
    const platform = platformsData.find(p => p.id === platformId);
    if (!platform) return;
    
    const modal = createModal('platform', {
        title: platform.title,
        content: `
            <div class="modal-platform">
                <div class="modal-platform-header">
                    <div class="modal-platform-icon">
                        <i class="${platform.icon}"></i>
                    </div>
                    <div class="modal-platform-info">
                        <span class="modal-platform-category">${platform.category}</span>
                        <div class="modal-platform-score">
                            <span class="score-label">Overall Score:</span>
                            <span class="score">${platform.score}/10</span>
                        </div>
                    </div>
                </div>
                <div class="modal-platform-description">
                    <p>${platform.description}</p>
                </div>
                <div class="modal-platform-features">
                    <h4>Key Features</h4>
                    <div class="feature-tags">
                        ${platform.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-platform-pros-cons">
                    <div class="pros">
                        <h4><i class="fas fa-check-circle" style="color: var(--success-color);"></i> Pros</h4>
                        <ul>
                            ${platform.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cons">
                        <h4><i class="fas fa-times-circle" style="color: var(--danger-color);"></i> Cons</h4>
                        <ul>
                            ${platform.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="modal-platform-pricing">
                    <h4><i class="fas fa-dollar-sign" style="color: var(--warning-color);"></i> Pricing</h4>
                    <p>${platform.pricing}</p>
                </div>
                ${platform.fullReview}
            </div>
        `
    });
    
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add('active'));
}

function createModal(type, data) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">${data.title}</h2>
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                ${data.content}
            </div>
        </div>
    `;
    
    // Add modal styles if not already added
    if (!document.querySelector('#modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                opacity: 0;
                visibility: hidden;
                transition: var(--transition);
            }
            
            .modal.active {
                opacity: 1;
                visibility: visible;
            }
            
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(5px);
            }
            
            .modal-content {
                position: relative;
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--border-radius-xl);
                max-width: 90vw;
                max-height: 90vh;
                width: 800px;
                margin: 5vh auto;
                overflow: hidden;
                box-shadow: var(--shadow-xl);
                transform: translateY(50px);
                transition: var(--transition);
            }
            
            .modal.active .modal-content {
                transform: translateY(0);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 2rem;
                border-bottom: 1px solid var(--border-color);
                background: var(--bg-secondary);
            }
            
            .modal-title {
                margin: 0;
                color: var(--text-primary);
                font-size: 1.5rem;
            }
            
            .modal-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: var(--border-radius);
                transition: var(--transition);
            }
            
            .modal-close:hover {
                background: var(--bg-tertiary);
                color: var(--text-primary);
            }
            
            .modal-body {
                padding: 2rem;
                overflow-y: auto;
                max-height: calc(90vh - 100px);
            }
            
            .modal-article-image, .modal-product-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: var(--border-radius-lg);
                margin-bottom: 1.5rem;
            }
            
            .modal-article-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
            }
            
            .modal-article-category {
                background: var(--primary-color);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: var(--border-radius);
                font-size: 0.85rem;
                font-weight: 500;
            }
            
            .modal-article-info {
                display: flex;
                gap: 1rem;
                color: var(--text-tertiary);
                font-size: 0.9rem;
            }
            
            .modal-article-info i {
                margin-right: 0.25rem;
            }
            
            .modal-product-header {
                margin-bottom: 2rem;
            }
            
            .modal-product-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
            }
            
            .modal-product-rating {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .modal-product-price {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--success-color);
            }
            
            .modal-product-badge {
                background: var(--accent-color);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: var(--border-radius);
                font-size: 0.8rem;
                font-weight: 600;
            }
            
            .modal-product-features ul,
            .modal-product-pros-cons ul {
                list-style: none;
                padding: 0;
            }
            
            .modal-product-features li,
            .modal-product-pros-cons li {
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--border-color);
            }
            
            .modal-product-features li:before {
                content: '✓';
                color: var(--success-color);
                font-weight: bold;
                margin-right: 0.5rem;
            }
            
            .modal-product-pros-cons {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin: 2rem 0;
            }
            
            .modal-product-pros-cons h4 {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }
            
            .modal-product-verdict {
                background: var(--bg-secondary);
                padding: 1.5rem;
                border-radius: var(--border-radius-lg);
                border-left: 4px solid var(--primary-color);
                margin: 2rem 0;
            }
            
            .modal-platform-header {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .modal-platform-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                border-radius: var(--border-radius-lg);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: white;
            }
            
            .modal-platform-info {
                flex: 1;
            }
            
            .modal-platform-category {
                color: var(--text-tertiary);
                font-size: 0.9rem;
                display: block;
                margin-bottom: 0.5rem;
            }
            
            .modal-platform-score {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .modal-platform-score .score {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--success-color);
            }
            
            .feature-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin-top: 0.5rem;
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    width: 95vw;
                    margin: 2.5vh auto;
                    max-height: 95vh;
                }
                
                .modal-body {
                    padding: 1rem;
                }
                
                .modal-header {
                    padding: 1rem;
                }
                
                .modal-title {
                    font-size: 1.25rem;
                }
                
                .modal-product-pros-cons {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    return modal;
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Keyboard event for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Performance optimization: Intersection Observer for images
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}