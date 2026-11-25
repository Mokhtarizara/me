export const site = {
  name: 'Zahra Mokhtari',
  github: 'https://github.com/mokhtarizara',
  linkedin: 'https://www.linkedin.com/in/zahramokhtarii',
  email: 'zahra.mokhtari@berkeley.edu',
}

export const intro = {
  greeting: 'Hi, my name is',
  blurb: 'I build intelligent systems.',
  photo: `${import.meta.env.BASE_URL}photos/zara.png`,
}

export const about = {
  paragraphs: [
    "I'm a software engineer focused on computer vision, machine learning, and artificial intelligence, with interests spanning deep learning, image processing, 3D reconstruction, and generative models. My technical interests include computer vision algorithms, multimodal learning, intelligent sensing, and model evaluation. I enjoy turning complex AI research into reliable, practical technologies.",
    'I studied Computer Science at UC Berkeley. Go Bears forever!',
  ],
}

export const experience = {
  items: [
    {
      role: 'Software Engineer',
      place: 'Gatch AI, Inc.',
      time: 'Dec 2025 — Present',
    },
    {
      role: 'Software Intern',
      title: 'Software Engineer Intern',
      place: 'AtomBeam Technologies',
      time: 'Nov 2021 — May 2022',
    },
    {
      role: 'Database Engineer & Administrator',
      place: 'IELTS Official',
      time: 'Oct 2020 — Oct 2021',
    },
  ],
}

export const education = {
  items: [
    {
      school: 'University of California, Berkeley',
      degree: 'Bachelor Computer Science',
      time: 'Jun 2024 — Dec 2026',
      grade: '3.6',
      roles: [
        {
          title: 'Hello World Mentor',
          detail:
            'Mentored 10 Computer Science and Data Science students in weekly meetings.',
        },
        {
          title: 'Orientation Leader',
          detail: 'Led a 5-day orientation for 40 incoming students.',
        },
        { title: 'CDSS Advisory Board' },
        {
          title: 'ISAA Board Member',
          detail:
            'Coordinated with other boards and clubs to organize workshop events for the Iranian student community at Berkeley, with 60+ people attending.',
        },
        { title: 'MTC Club Member' },
      ],
    },
    {
      school: 'De Anza College',
      degree: 'Associate Mathematics',
      time: 'Sep 2021 — May 2024',
      grade: '3.98',
      roles: [
        {
          title: 'Instructional Assistant',
          detail:
            'Tutored statistics, assisted labs, graded assignments, and led 15+ review sessions.',
        },
        { title: 'Google Developer Student Clubs' },
      ],
    },
  ],
}

export const courseProjects = [
  {
    code: 'CS 61A – 47A',
    title: 'Structure and Interpretation of Computer Programs',
  },
  {
    code: 'CS 61B',
    title: 'Data Structures',
  },
  {
    code: 'CS 61C',
    title: 'Great Ideas in Computer Architecture (Machine Structures)',
  },
  {
    code: 'CS 70',
    title: 'Discrete Mathematics and Probability Theory',
    summary:
      'Mathematical foundations of computer science: proofs, graph theory, modular arithmetic and RSA, error-correcting codes, counting, and probability.',
    tags: ['Proofs', 'Graph Theory', 'Cryptography Math', 'Probability'],
  },
  {
    code: 'CS 160',
    title: 'User Interface Design and Development',
    project: {
      title: 'GoGreen',
      category: 'AI Powered Recycling Platform',
      place: 'UC Berkeley',
      time: 'Jun 2025 – Aug 2025',
      team: 'Team of 3',
      points: [
        'Developed a multimodal AI recycling assistant using React, Vite, and Reagent AI APIs, supporting image, voice, and text interactions.',
        'Integrated vision language model (VLM) capabilities to identify recyclable items from photos and give context aware disposal recommendations.',
        'Built conversational AI features using LLM endpoints for interactive recycling guidance.',
        'Integrated OpenAI Whisper speech to text with the browser MediaRecorder API to enable voice based interactions.',
        'Added location aware features using the Geolocation API, OpenStreetMap Nominatim, and Google Maps to guide users to nearby recycling facilities.',
      ],
    },
  },
  {
    code: 'CS 161',
    title: 'Computer Security',
    tech: ['Go', 'C', 'Python', 'GDB'],
    semester: 'Spring 2026',
    summary:
      'Exploited memory-safety and web vulnerabilities, and built an end-to-end encrypted file-sharing system secure against a malicious server.',
    tags: ['Applied Cryptography', 'Memory Safety', 'Web Security', 'Secure Design'],
    projects: [
      {
        title: 'Exploiting Memory-Safety Vulnerabilities',
        tech: 'C, Python, GDB',
        bullets: [
          'Exploited buffer overflows, an off-by-one bug, format string bugs, and a TOCTOU race in vulnerable C programs.',
          'Bypassed stack canaries and ASLR by analyzing program memory with GDB.',
        ],
      },
      {
        title: 'End-to-End Encrypted File Sharing',
        tech: 'Go',
        bullets: [
          'Designed and built a file-sharing client that keeps files confidential and tamper-evident on an untrusted server, with login, sharing, and cascading revocation.',
          'Used AES-CTR, HMAC-SHA-512, RSA-OAEP, RSA signatures, and Argon2/HKDF; wrote a design document and a test suite.',
        ],
      },
      {
        title: 'Web Security',
        tech: 'HTTP, SQL, JavaScript',
        bullets: [
          'Exploited SQL injection (including through a session cookie), stored and reflected XSS, and path traversal in a vulnerable web app.',
          'Found broken access control, leaked credentials in source code, and password reuse, and learned the defenses for each.',
        ],
      },
    ],
  },
  {
    code: 'CS 168',
    title: 'Introduction to the Internet: Architecture and Protocols',
    tech: ['Python'],
    semester: 'Spring 2026',
    summary:
      'Built core Internet protocols from scratch: a traceroute tool, a distance-vector router, and a reliable TCP-style transport layer.',
    tags: ['Networking', 'TCP/IP', 'Routing', 'Fault Tolerance'],
    projects: [
      {
        title: 'Traceroute',
        tech: 'Python',
        bullets: [
          'Built a traceroute tool using UDP probes and ICMP Time Exceeded replies to discover the routers along a network path.',
          'Made it robust to lost, duplicated, delayed, and malformed packets, silent routers, and routing loops.',
        ],
      },
      {
        title: 'Distance-Vector Routing',
        tech: 'Python',
        bullets: [
          'Implemented a RIP-style router that learns routes with Bellman-Ford updates and forwards packets between ports.',
          'Added split horizon, poison reverse, route expiration, triggered updates, and recovery from link failures.',
        ],
      },
      {
        title: 'Transport (TCP)',
        tech: 'Python',
        bullets: [
          'Implemented a subset of TCP: three-way handshake, out-of-order reassembly, and sliding-window flow control.',
          'Added connection teardown, retransmission, and RTT-based timeout estimation following RFC 6298.',
        ],
      },
    ],
  },
  {
    code: 'CS 180',
    title: 'Intro to Computer Vision and Computational Photography',
  },
  {
    code: 'CS 186',
    title: 'Introduction to Database Systems',
  },
  {
    code: 'CS 188',
    title: 'Introduction to Artificial Intelligence',
    tech: ['Python', 'PyTorch', 'NumPy'],
    semester: 'Spring 2026',
    summary:
      'Built search, game playing, reinforcement learning, probabilistic inference, and neural network agents for Pac Man.',
    tags: ['Search', 'Reinforcement Learning', 'Bayes Nets', 'Neural Networks'],
    projects: [
      {
        title: 'Search',
        tech: 'Python',
        bullets: [
          'Implemented depth first, breadth first, uniform cost, and A* graph search to guide Pac Man through mazes.',
          'Designed consistent heuristics for the corners and food collection problems that reduce the number of states searched.',
        ],
      },
      {
        title: 'Multi-Agent Search',
        tech: 'Python',
        bullets: [
          'Built minimax, alpha beta pruning, and expectimax agents that plan against multiple ghost opponents.',
          'Wrote an evaluation function that scores game states so Pac Man wins reliably and quickly.',
        ],
      },
      {
        title: 'Reinforcement Learning',
        tech: 'Python',
        bullets: [
          'Implemented value iteration for decision making under uncertainty and tuned discount, noise, and reward settings to produce target behaviors.',
          'Built Q-learning with epsilon greedy exploration and approximate Q-learning with feature weights that scales to larger layouts.',
        ],
      },
      {
        title: 'Ghostbusters (Bayes Nets & HMMs)',
        tech: 'Python',
        bullets: [
          'Built Bayes net inference: joining factors, eliminating variables, and answering probability queries with variable elimination.',
          'Tracked hidden ghosts from noisy distance sensors using exact inference and a particle filter with weighting and resampling.',
        ],
      },
      {
        title: 'Machine Learning',
        tech: 'Python, PyTorch',
        bullets: [
          'Built a perceptron, a neural network that approximates sin(x), and a multi layer network for MNIST digit classification.',
          "Built an RNN that identifies a word's language one character at a time, a CNN on a from-scratch convolution, and a causal self attention block.",
        ],
      },
    ],
  },
  {
    code: 'CS 189',
    title: 'Introduction to Machine Learning',
  },
  {
    code: 'CS 194-196',
    title: 'CS 194-196 – Agentic AI',
    place: 'UC Berkeley',
    semester: 'Spring 2026',
    summary:
      'Studied how to build, evaluate, deploy and secure LLM agents, with guest lectures from researchers at OpenAI, NVIDIA, Google DeepMind, Microsoft and Meta.',
    tags: ['AI Agents', 'Agent Evaluation', 'Multi-Agent Systems', 'AI Safety'],
    bullets: [
      'Learned LLM agent foundations: reasoning, planning, tool use, agent frameworks and infrastructure.',
      'Studied agent evaluation, multi agent systems, real world agent deployment, and agent safety and security.',
      'Covered agent benchmarks (SWE bench Verified, BrowseComp, τ² Bench), post training of verifiable agents, statistical error bars for LLM evaluations, and agents for code generation, web automation, robotics and scientific discovery.',
    ],
  },
]

export const softwareProjects = [
  {
    id: 'innowi',
    title: 'Innowi',
    category: 'AI/LLM Lead – Restaurant AI Agent (Claude API, Agentic AI)',
    place: 'Industry-Sponsored Student Project',
    time: 'Oct 2026 — Present',
    link: 'https://innowi.com/',
    linkLabel: 'innowi.com',
    points: [
      'Lead a 5-person AI/LLM team building a Claude-powered AI agent for non-reservation restaurants.',
      'Met with randomly selected busy and quiet restaurants across SF and Berkeley to define unbiased requirements.',
      'Build structured agent memory from an entity-relationship model, with restaurant tables in Supabase.',
      'Design the agent’s 6 Claude tool-calling functions (sales, top sellers, staff, reviews) behind an /ask API endpoint.',
      'Evaluate the agent on 10 owner questions with strict pass rules: exact numbers and zero hallucinated information.',
    ],
  },
  {
    id: 'kitchenos',
    title: 'KITCHENos',
    category: 'Robotics & Machine Learning',
    place: 'CalHacks',
    time: 'Oct 2025',
    link: 'https://devpost.com/software/kitchenos',
    linkLabel: 'Devpost',
    points: [
      'Configured and calibrated a four-arm robotic system using SO-101 robotic arms and the Hugging Face LeRobot framework, validating motor IDs, USB communication, baud rates, and hardware responsiveness.',
      'Independently collected and curated 55 teleoperated demonstration episodes, capturing synchronized joint states and visual observations for imitation learning.',
      'Designed a controlled vision environment to minimize lighting variability and improve dataset consistency for robotic policy training.',
      'Developed data preparation pipelines using Python, PyTorch, and Hugging Face tooling to support VLA model training.',
      'Collaborated on VLA policy development and training for autonomous robotic manipulation.',
    ],
  },
]
