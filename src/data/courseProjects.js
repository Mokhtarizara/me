export const courseProjects = [
  {
    code: 'CS 61A – 47A',
    name: 'Structure and Interpretation of Computer Programs',
  },
  {
    code: 'CS 61B',
    name: 'Data Structures',
  },
  {
    code: 'CS 61C',
    name: 'Great Ideas in Computer Architecture (Machine Structures)',
  },
  {
    code: 'CS 70',
    name: 'Discrete Mathematics and Probability Theory',
    tech: [],
    semester: '',
    summary:
      'Mathematical foundations of computer science: proofs, graph theory, modular arithmetic and RSA, error-correcting codes, counting, and probability.',
    tags: ['Proofs', 'Graph Theory', 'Cryptography Math', 'Probability'],
    projects: [],
  },
  {
    code: 'CS 160',
    name: 'User Interface Design and Development',
    tech: ['React', 'Vite', 'JavaScript', 'OpenAI Whisper', 'Google Maps'],
    semester: 'Summer 2025',
    summary:
      'Designed and built GoGreen, an AI-powered recycling assistant, with a team of 3 through a full user-centered design process.',
    tags: ['Multimodal AI', 'React', 'UX Research', 'Prototyping'],
    projects: [
      {
        title: 'GoGreen – AI-Powered Recycling Assistant (team of 3)',
        tech: 'React, Vite, Reagent AI APIs (VLM/LLM), OpenAI Whisper, Google Maps',
        bullets: [
          'Built a multimodal recycling assistant in React and Vite that understands photos, voice, and text.',
          'Used a vision-language model to identify recyclable items from photos and give context-aware disposal advice, with an LLM chat for follow-up questions.',
          'Added voice input with the browser MediaRecorder API and OpenAI Whisper speech-to-text.',
          'Guided users to nearby recycling facilities with the Geolocation API, OpenStreetMap Nominatim, and Google Maps.',
          "Followed the course's design cycle: contextual inquiry, low-fidelity prototypes, heuristic evaluation, high-fidelity prototype, and final demo.",
        ],
      },
    ],
  },
  {
    code: 'CS 161',
    name: 'Computer Security',
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
    name: 'Introduction to the Internet',
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
    name: 'Intro to Computer Vision and Computational Photography',
  },
  {
    code: 'CS 186',
    name: 'Introduction to Database Systems',
  },
  {
    code: 'CS 188',
    name: 'Introduction to Artificial Intelligence',
    tech: ['Python', 'PyTorch', 'NumPy'],
    semester: 'Spring 2026',
    summary:
      'Built search, game-playing, reinforcement learning, probabilistic inference, and neural network agents for Pac-Man.',
    tags: ['Search', 'Reinforcement Learning', 'Bayes Nets', 'Neural Networks'],
    projects: [
      {
        title: 'Search',
        tech: 'Python',
        bullets: [
          'Implemented depth-first, breadth-first, uniform-cost, and A* graph search to guide Pac-Man through mazes.',
          'Designed consistent heuristics for the corners and food-collection problems that reduce the number of states searched.',
        ],
      },
      {
        title: 'Multi-Agent Search',
        tech: 'Python',
        bullets: [
          'Built minimax, alpha-beta pruning, and expectimax agents that plan against multiple ghost opponents.',
          'Wrote an evaluation function that scores game states so Pac-Man wins reliably and quickly.',
        ],
      },
      {
        title: 'Reinforcement Learning',
        tech: 'Python',
        bullets: [
          'Implemented value iteration for decision-making under uncertainty and tuned discount, noise, and reward settings to produce target behaviors.',
          'Built Q-learning with epsilon-greedy exploration and approximate Q-learning with feature weights that scales to larger layouts.',
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
          'Built a perceptron, a neural network that approximates sin(x), and a multi-layer network for MNIST digit classification.',
          "Built an RNN that identifies a word's language one character at a time, a CNN on a from-scratch convolution, and a causal self-attention block.",
        ],
      },
    ],
  },
  {
    code: 'CS 189',
    name: 'Introduction to Machine Learning',
  },
]
