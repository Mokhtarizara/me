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
  },
  {
    code: 'CS 160',
    title: 'User Interface Design and Development',
    project: {
      title: 'GoGreen',
      category: 'AI-Powered Recycling Platform',
      place: 'UC Berkeley',
      time: 'Jun 2025 – Aug 2025',
      points: [
        'Developed a multimodal AI recycling assistant using React, Vite, and Reagent AI APIs, supporting image, voice, and text-based interactions.',
        'Integrated VLM capabilities for image understanding, recyclable item identification, and context aware disposal recommendations.',
        'Implemented conversational AI functionality using LLM endpoints for interactive recycling guidance.',
        'Integrated OpenAI Whisper for speech to text recognition, using the browser MediaRecorder API to enable voice based interactions.',
        'Implemented location aware features using the Geolocation API, OpenStreetMap Nominatim, and Google Maps to guide users toward recycling facilities.',
      ],
    },
  },
  {
    code: 'CS 161',
    title: 'Computer Security',
  },
  {
    code: 'CS 168',
    title: 'Introduction to the Internet: Architecture and Protocols',
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
  },
  {
    code: 'CS 189',
    title: 'Introduction to Machine Learning',
  },
]

export const softwareProjects = [
  {
    id: 'innowi',
    title: 'Innowi',
    category: 'AI/LLM Lead',
    place: 'Claude API, Agentic AI',
    time: 'Oct 2026 — Present',
    link: 'https://innowi.com/',
    linkLabel: 'innowi.com',
    points: [
      'Lead AI/LLM engineering for a restaurant intelligence platform, coordinating the memory model, restaurant data, and a Claude question-answering system.',
      'Build structured memory from a memory plan and entity-relationship model, with restaurant tables in Supabase loaded from sample data.',
      'Connect the /ask endpoint to Claude and evaluate answers against 10 restaurant-specific questions and their pass criteria.',
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
