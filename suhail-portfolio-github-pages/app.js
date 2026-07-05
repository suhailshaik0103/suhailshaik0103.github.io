const caseData = {
  hubspot: {
    title: "AI-Powered CRM Workflow and Customer Support Automation Platform",
    subtitle: "Product Manager case study focused on Smart CRM, Service Hub, AI workflows, support automation, analytics, and launch adoption.",
    metrics: [
      ["3", "major product releases"],
      ["40+", "discovery users and teams"],
      ["120+", "backlog items prioritized"],
      ["24%", "post-launch adoption increase"]
    ],
    sections: [
      ["Problem", [
        "Support teams were manually reading tickets, checking customer history, assigning owners, deciding priority, writing repeated responses, and tracking follow-ups.",
        "Manual workflows created delays, missed escalations, duplicate tickets, inconsistent customer experience, and low visibility into SLA performance.",
        "Agents needed CRM context, Knowledge Base content, and AI suggestions inside the support workflow instead of switching between tools."
      ]],
      ["Product Work", [
        "Converted customer pain points into roadmap themes across routing, priority classification, duplicate handling, SLA escalation, automated follow-ups, and AI response suggestions.",
        "Prioritized 120+ epics, stories, enhancements, bugs, analytics events, AI requests, GTM asks, and technical dependencies using RICE scoring.",
        "Defined user stories, acceptance criteria, workflow behavior, edge cases, fallback handling, reporting events, and success metrics for engineering and design."
      ]],
      ["Launch and Analytics", [
        "Tracked activation, workflow enrollment, adoption, retention, ticket deflection, CSAT, first-response time, resolution efficiency, and SLA performance.",
        "Improved setup guidance, workflow templates, release notes, FAQs, and onboarding after analytics showed users visiting the feature but not completing setup.",
        "Supported GTM with release notes, enablement documentation, customer-friendly messaging, A/B testing inputs, and stakeholder updates."
      ]]
    ]
  },
  freshworks: {
    title: "Customer Support Ticketing and SLA Workflow Automation",
    subtitle: "Engineering case study showing technical depth behind support platforms, automation logic, APIs, dashboards, and quality.",
    metrics: [
      ["50K+", "monthly tickets supported"],
      ["30%", "manual assignment reduction"],
      ["25%", "dashboard performance improvement"],
      ["21%", "regression defect reduction"]
    ],
    sections: [
      ["Problem", [
        "Support teams needed reliable ticket creation, updates, agent assignment, comments, ticket history, SLA tracking, and routing logic across email, chat, and web channels.",
        "Queue filtering and search performance affected agent productivity, while SLA visibility depended on accurate scheduler jobs and escalation triggers."
      ]],
      ["Engineering Work", [
        "Developed REST APIs using Java, Spring Boot, and MySQL for ticket creation, status updates, assignment, comments, and history.",
        "Implemented automated ticket routing and escalation using rule-based assignment, agent availability, ticket priority, and customer segment data.",
        "Built SLA tracking modules with scheduler jobs to monitor response time, resolution time, breach alerts, and escalation triggers."
      ]],
      ["Impact", [
        "Optimized React dashboards for queues, filters, priority views, SLA status, and workload summaries.",
        "Tuned SQL queries, indexes, joins, and stored procedures, reducing ticket search time from 4.2 seconds to 2.9 seconds.",
        "Added JUnit tests for routing, SLA tracking, and escalation workflows to reduce regression defects."
      ]]
    ]
  },
  backlog: {
    title: "Backlog GPT - AI Product Requirements and Prioritization Agent",
    subtitle: "AI product prototype that turns unstructured PM evidence into source-attributed requirements and prioritized backlog items.",
    metrics: [
      ["RAG", "source attribution"],
      ["4", "evaluation dimensions"],
      ["40+", "structured outputs created"],
      ["1st", "pitch competition result"]
    ],
    sections: [
      ["Problem", [
        "PMs need to turn meeting notes, stakeholder requests, support tickets, and customer feedback into clear PRDs, user stories, acceptance criteria, and backlog items.",
        "AI-generated requirements are hard to trust unless each claim links back to source evidence."
      ]],
      ["Architecture Decision", [
        "Chose RAG over fine-tuning to preserve source attribution on every generated requirement.",
        "Built chunking and schema pre-processing for problem, decision, action, and stakeholder extraction before generation.",
        "Designed an output rubric across requirement specificity, acceptance criteria completeness, stakeholder traceability, and prioritization coherence."
      ]],
      ["Product Value", [
        "Reduces manual documentation effort and improves backlog grooming efficiency.",
        "Creates reviewable output with citations, priority, effort, confidence, rationale, and acceptance criteria.",
        "Runs directly inside this portfolio as a working product demo."
      ]]
    ]
  },
  discovery: {
    title: "Discovery System",
    subtitle: "How I move from raw customer signal to validated product problems.",
    metrics: [["40+", "discovery touchpoints"], ["CRM", "records reviewed"], ["VoC", "feedback themes"], ["JTBD", "workflow gaps"]],
    sections: [["Activities", [
      "Run interviews and feedback sessions with support users, sales users, CRM admins, customer success, and internal stakeholders.",
      "Look for repeated workflow friction: manual steps, context switching, missed follow-ups, unclear ownership, and poor reporting visibility.",
      "Convert discovery into problem statements, personas, workflow gaps, and opportunity themes."
    ]]]
  },
  prioritization: {
    title: "Prioritization System",
    subtitle: "How I decide what should ship first when every stakeholder wants something different.",
    metrics: [["RICE", "scoring"], ["120+", "items"], ["Impact", "customer value"], ["Effort", "technical tradeoff"]],
    sections: [["Activities", [
      "Use reach, impact, confidence, and effort to balance customer value, adoption opportunity, revenue value, dependencies, and engineering effort.",
      "Phase work so practical automation and workflow fixes can ship before advanced AI capabilities when that better serves users.",
      "Make tradeoffs explainable through data, customer evidence, and release goals."
    ]]]
  },
  delivery: {
    title: "Delivery System",
    subtitle: "How product ideas become reviewable engineering work.",
    metrics: [["PRD", "requirements"], ["AC", "acceptance criteria"], ["Jira", "delivery"], ["QA", "edge cases"]],
    sections: [["Activities", [
      "Write PRDs, user stories, acceptance criteria, analytics events, edge cases, fallback behavior, and release scope.",
      "Partner with engineering, design, data, QA, customer success, sales, and product marketing across Agile delivery.",
      "Clarify AI safety boundaries such as agent-assisted workflows, human review, and source-backed suggestions."
    ]]]
  },
  analytics: {
    title: "Analytics System",
    subtitle: "How I measure whether launched features are actually working.",
    metrics: [["CSAT", "quality"], ["FRT", "response"], ["Enroll", "workflow use"], ["Deflect", "ticket load"]],
    sections: [["Activities", [
      "Track activation, adoption, retention, workflow enrollment, ticket deflection, CSAT, first-response time, resolution efficiency, and SLA performance.",
      "Use analytics to identify adoption gaps, then improve onboarding, templates, setup guidance, release notes, and enablement.",
      "Report what shipped, what customers used, what friction remained, and what should be prioritized next."
    ]]]
  }
};

const activityPanels = {
  pm: {
    title: "Product Manager - AI CRM Workflow and Customer Support Automation",
    items: [
      "Led roadmap planning for AI-powered CRM workflow and customer support automation features across Smart CRM and Service Hub.",
      "Conducted discovery with 40+ support teams, sales users, CRM admins, customer success stakeholders, and internal teams.",
      "Partnered with engineering, design, data, QA, sales, customer success, and GTM teams to deliver AI agent workflows.",
      "Defined requirements for ticket triage, routing, response suggestions, duplicate handling, SLA escalation, follow-ups, and reporting.",
      "Measured launch success through adoption, workflow enrollment, CSAT, ticket deflection, first-response time, and resolution efficiency."
    ]
  },
  eng: {
    title: "Software Engineer - Support Ticketing and SLA Automation",
    items: [
      "Built Java Spring Boot REST APIs for ticket creation, assignment, status updates, comments, and ticket history.",
      "Implemented rule-based routing and escalation workflows using priority, availability, customer segment, and SLA conditions.",
      "Improved React dashboards for ticket queues, filters, priority views, SLA status, and workload summaries.",
      "Optimized MySQL queries, indexes, joins, and stored procedures for ticket search and reporting workflows.",
      "Added automated tests for routing, SLA tracking, and escalation logic to improve release quality."
    ]
  },
  lead: {
    title: "Leadership, Certifications, and Product Growth",
    items: [
      "Awarded 1st place out of 24 teams at a university pitch competition for Backlog GPT.",
      "Served as President of a STEM tutoring initiative, leading a 100+ participant program across outreach, tutoring, operations, and engagement.",
      "Certified Scrum Master, AWS Cloud Practitioner, and HubSpot Reporting certified.",
      "Education background includes a Master of Science in Computer Engineering and Bachelor of Technology in Computer Science and Engineering."
    ]
  }
};

const tips = [
  "This tip is your sword: start every product answer with the user segment before jumping to features.",
  "This tip is your sword: define success and guardrail metrics before you design the solution.",
  "This tip is your sword: say the tradeoff out loud. Interviewers trust PMs who can choose.",
  "This tip is your sword: for estimation, write assumptions first, math second, sanity check third.",
  "This tip is your sword: when stuck, ask what behavior you are trying to change.",
  "This tip is your sword: a great MVP is the smallest test of the riskiest assumption."
];

const games = {
  Google: {
    prompt: "Google Maps retention dipped for commuters. Prioritize the next release.",
    correct: ["Commute disruption alerts", "Offline route recovery", "AI restaurant summaries", "Profile badge redesign"],
    why: "Commuters have urgent repeat-use pain. Reliability and disruption alerts beat cosmetic or discovery features."
  },
  Amazon: {
    prompt: "Checkout conversion is down on mobile during high-traffic events.",
    correct: ["Payment failure recovery", "Delivery date clarity", "Personalized deals carousel", "New wishlist animation"],
    why: "Fixing payment recovery protects conversion first. Delivery clarity reduces hesitation. Merchandising comes after funnel repair."
  },
  Uber: {
    prompt: "Driver cancellations increased in dense downtown zones.",
    correct: ["Pickup location precision", "Driver incentive transparency", "Rider profile themes", "Post-trip music recap"],
    why: "Pickup accuracy tackles the operational root cause. Incentive transparency helps supply behavior. Fun surface features ship later."
  },
  Netflix: {
    prompt: "New users watch one title and churn before week two.",
    correct: ["First-week recommendation onboarding", "Continue-watching recovery", "Shareable quote cards", "Animated avatar packs"],
    why: "Activation and second-session behavior matter most. Social and cosmetic features are weaker churn levers."
  },
  Spotify: {
    prompt: "Podcast discovery is growing, but completion rate is weak.",
    correct: ["Better episode preview clips", "Personalized queue explanations", "Creator profile skins", "Playlist confetti"],
    why: "Preview clips reduce discovery risk. Explanation improves trust. Creator skins and delight can wait."
  },
  Airbnb: {
    prompt: "Guest trust is low for first-time international bookings.",
    correct: ["Transparent cancellation and fee view", "Host verification signals", "Neighborhood vibe stickers", "Animated trip countdown"],
    why: "Trust, fees, and verification directly reduce booking anxiety. Decorative trip features do not solve the core risk."
  },
  HubSpot: {
    prompt: "Service teams adopt AI workflows, but setup completion is low.",
    correct: ["Workflow setup templates", "Source-backed AI suggestions", "Advanced theme customization", "Confetti after automation publish"],
    why: "Templates attack activation. Source-backed suggestions increase trust. Visual polish is lower leverage."
  },
  Freshworks: {
    prompt: "Support agents report queue overload and SLA uncertainty.",
    correct: ["Priority queue and SLA risk view", "Automated routing rules", "Agent profile badges", "Ticket close sound effects"],
    why: "Queue risk visibility and routing reduce operational pain. Badges and sounds are motivation polish, not workflow fixes."
  }
};

let currentCompany = "Google";
let currentRanking = [];
let counterIntervals = new WeakMap();

const stopwords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "have",
  "in", "into", "is", "it", "its", "of", "on", "or", "that", "the", "their",
  "to", "was", "we", "with", "will", "would", "this", "they", "our", "can",
  "not", "but", "need", "needs"
]);

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.querySelectorAll?.("[data-count]").forEach((item) => animateCounter(item));
      entry.target.querySelectorAll?.(".chart-column").forEach((item) => item.classList.add("active"));
    } else {
      entry.target.classList.remove("visible");
      entry.target.querySelectorAll?.("[data-count]").forEach((item) => resetCounter(item));
      entry.target.querySelectorAll?.(".chart-column").forEach((item) => item.classList.remove("active"));
    }
  }
}, { threshold: 0.12 });
reveals.forEach((item) => observer.observe(item));

document.querySelector("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme === "dark";
  root.dataset.theme = isDark ? "light" : "dark";
  document.querySelector("#themeToggle").textContent = isDark ? "Dark" : "Light";
});

function animateCounter(element) {
  if (counterIntervals.has(element)) clearInterval(counterIntervals.get(element));
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || "";
  const compact = element.dataset.format === "compact";
  let step = 0;
  const frames = 34;
  const interval = setInterval(() => {
    step += 1;
    const chaos = Math.floor(Math.random() * Math.max(target, 9));
    const eased = Math.round(target * (1 - Math.pow(1 - step / frames, 3)));
    const value = step < frames ? chaos : eased;
    element.textContent = compact ? `${Math.round(value / 1000)}K+` : `${value}${suffix}`;
    if (step >= frames) {
      clearInterval(interval);
      counterIntervals.delete(element);
      element.textContent = compact ? `${Math.round(target / 1000)}K+` : `${target}${suffix}`;
    }
  }, 34);
  counterIntervals.set(element, interval);
}

function resetCounter(element) {
  if (counterIntervals.has(element)) {
    clearInterval(counterIntervals.get(element));
    counterIntervals.delete(element);
  }
  element.textContent = "0";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function tokenize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopwords.has(token));
}

function schemaFor(text) {
  const sentences = String(text)
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const buckets = { problems: [], decisions: [], actions: [], stakeholders: [] };
  for (const sentence of sentences) {
    const lower = sentence.toLowerCase();
    if (/(problem|pain|issue|delay|slow|manual|missed|risk|complex|inconsistent|friction|duplicate)/.test(lower)) buckets.problems.push(sentence);
    if (/(agreed|decided|decision|require|priority|should|must|launch|human review)/.test(lower)) buckets.decisions.push(sentence);
    if (/(track|measure|launch|follow|enablement|report|alert|configure|review)/.test(lower)) buckets.actions.push(sentence);
    if (/(customer|support|sales|agent|manager|leadership|admin|success|product|crm)/.test(lower)) buckets.stakeholders.push(sentence);
  }
  return buckets;
}

function chunkSource(text, maxWords = 55, overlap = 12) {
  const words = String(text).replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
  const chunks = [];
  for (let start = 0, index = 0; start < words.length; start += maxWords - overlap, index += 1) {
    const content = words.slice(start, start + maxWords).join(" ");
    if (!content) break;
    chunks.push({
      id: `chk_${index + 1}`,
      sourceTitle: "Portfolio Demo Evidence",
      content,
      schema: schemaFor(content),
      tokens: tokenize(content)
    });
    if (start + maxWords >= words.length) break;
  }
  return chunks;
}

function retrieve(text, query) {
  const chunks = chunkSource(text);
  const docFreq = new Map();
  for (const chunk of chunks) {
    for (const token of new Set(chunk.tokens)) docFreq.set(token, (docFreq.get(token) || 0) + 1);
  }
  const queryTokens = new Set(tokenize(query));
  return chunks
    .map((chunk) => {
      const counts = new Map();
      for (const token of chunk.tokens) counts.set(token, (counts.get(token) || 0) + 1);
      let score = 0;
      for (const token of queryTokens) {
        const tf = counts.get(token) || 0;
        if (!tf) continue;
        const idf = Math.log((chunks.length + 1) / ((docFreq.get(token) || 0) + 1)) + 1;
        score += (1 + Math.log(tf)) * idf;
      }
      return { ...chunk, score };
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}

function stakeholdersFor(text) {
  const known = ["Support", "Sales", "Customer Success", "CRM Admin", "Agent", "Manager", "Product Leadership", "Engineering"];
  const lower = text.toLowerCase();
  return known.filter((name) => lower.includes(name.toLowerCase())).slice(0, 4);
}

function priorityFor(text, rank) {
  const lower = text.toLowerCase();
  if (/(missed|risk|sla|leadership|must|sensitive|escalation)/.test(lower)) return "P0";
  if (/(manual|slow|adoption|complex|duplicate|routing)/.test(lower)) return "P1";
  return rank < 2 ? "P1" : "P2";
}

function sourceSnippet(text, limit = 210) {
  return text.length <= limit ? text : `${text.slice(0, limit).trim()}...`;
}

function generateStaticBacklog(productGoal, sourceText) {
  const chunks = retrieve(sourceText, `${productGoal} support automation workflow AI ticket routing adoption metrics`);
  const requirements = chunks.map((chunk, rank) => {
    const evidence = chunk.schema.problems[0] || chunk.schema.decisions[0] || sourceSnippet(chunk.content, 150);
    const title = evidence.split(/,| and | because /)[0].slice(0, 88).trim() || `Improve ${productGoal}`;
    const stakeholders = stakeholdersFor(chunk.content);
    const priority = priorityFor(chunk.content, rank);
    return {
      id: `REQ-${String(rank + 1).padStart(3, "0")}`,
      title,
      userStory: `As a ${(stakeholders[0] || "PM").toLowerCase()}, I want ${title.toLowerCase()} so that I can complete the workflow with less manual coordination.`,
      acceptanceCriteria: [
        "Given source evidence exists, when a PM reviews the requirement, then the system shows the cited source excerpt.",
        "Given a workflow risk is detected, when the item is prioritized, then priority reflects severity, adoption impact, and effort.",
        "Given AI assistance is used, when the output includes a recommendation, then human review and fallback behavior are visible."
      ],
      stakeholders: stakeholders.length ? stakeholders : ["PM", "Support"],
      priority,
      effort: /workflow|dashboard|routing|sla/i.test(chunk.content) ? "M" : "S",
      confidence: Math.min(94, Math.max(68, Math.round(82 + chunk.score - rank * 3))),
      citations: [{
        sourceTitle: chunk.sourceTitle,
        snippet: sourceSnippet(chunk.content)
      }]
    };
  });
  return {
    mode: "static-browser-rag",
    summary: `Generated ${requirements.length} source-attributed requirements in the browser.`,
    requirements
  };
}

function renderDialog(key) {
  const item = caseData[key];
  if (!item) return;
  const metrics = item.metrics.map(([value, label]) => `<article><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></article>`).join("");
  const sections = item.sections.map(([title, bullets]) => `
    <section>
      <h3>${escapeHtml(title)}</h3>
      <ul>${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
    </section>
  `).join("");
  document.querySelector("#dialogContent").innerHTML = `
    <div class="dialog-body">
      <p class="eyebrow">Detail Panel</p>
      <h2>${escapeHtml(item.title)}</h2>
      <p>${escapeHtml(item.subtitle)}</p>
      <div class="dialog-metrics">${metrics}</div>
      ${sections}
    </div>
  `;
  document.querySelector("#caseDialog").showModal();
}

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => renderDialog(button.dataset.case));
});

document.querySelector(".dialog-close").addEventListener("click", () => {
  document.querySelector("#caseDialog").close();
});

function renderActivity(key) {
  const panel = activityPanels[key];
  document.querySelector("#activityContent").innerHTML = `
    <h3>${escapeHtml(panel.title)}</h3>
    <ul>${panel.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  `;
  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.panel === key);
  });
}

document.querySelectorAll(".timeline-item").forEach((button) => {
  button.addEventListener("click", () => renderActivity(button.dataset.panel));
});
renderActivity("pm");

function loadGame(company) {
  currentCompany = company;
  currentRanking = [...games[company].correct].sort(() => Math.random() - 0.5);
  if (currentRanking.join("|") === games[company].correct.join("|")) currentRanking.reverse();
  document.querySelector("#gamePrompt").textContent = games[company].prompt;
  document.querySelector("#senseScore").textContent = "0";
  document.querySelector("#rankingFeedback").textContent = "";
  renderRanking();
}

function renderRanking() {
  const list = document.querySelector("#featureRankList");
  list.innerHTML = currentRanking.map((feature, index) => `
    <li>
      <span><b>${index + 1}</b>${escapeHtml(feature)}</span>
      <div>
        <button type="button" data-move="${index}:up" ${index === 0 ? "disabled" : ""}>Up</button>
        <button type="button" data-move="${index}:down" ${index === currentRanking.length - 1 ? "disabled" : ""}>Down</button>
      </div>
    </li>
  `).join("");
  list.querySelectorAll("[data-move]").forEach((button) => {
    button.addEventListener("click", () => {
      const [rawIndex, direction] = button.dataset.move.split(":");
      const index = Number(rawIndex);
      const target = direction === "up" ? index - 1 : index + 1;
      [currentRanking[index], currentRanking[target]] = [currentRanking[target], currentRanking[index]];
      renderRanking();
    });
  });
}

function scoreRanking() {
  const correct = games[currentCompany].correct;
  let score = 0;
  currentRanking.forEach((feature, index) => {
    const correctIndex = correct.indexOf(feature);
    score += Math.max(0, 25 - Math.abs(correctIndex - index) * 9);
  });
  score = Math.min(100, score);
  document.querySelector("#senseScore").textContent = String(score);
  document.querySelector("#rankingFeedback").innerHTML = `
    <strong>${score}/100</strong>
    <p>${escapeHtml(games[currentCompany].why)}</p>
    <p><b>Recommended order:</b> ${correct.map(escapeHtml).join(" → ")}</p>
  `;
}

const companySelect = document.querySelector("#companySelect");
Object.keys(games).forEach((company) => {
  const option = document.createElement("option");
  option.value = company;
  option.textContent = company;
  companySelect.append(option);
});
companySelect.addEventListener("change", () => loadGame(companySelect.value));
document.querySelector("#submitRanking").addEventListener("click", scoreRanking);
loadGame(currentCompany);

document.querySelector("#tipButton").addEventListener("click", () => {
  const text = tips[Math.floor(Math.random() * tips.length)];
  document.querySelector("#tipText").textContent = text;
});

function renderRequirement(req) {
  const criteria = (req.acceptanceCriteria || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const stakeholders = (req.stakeholders || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  const citation = req.citations?.[0];
  return `
    <article class="result-card">
      <div class="result-top">
        <h3>${escapeHtml(req.id)} · ${escapeHtml(req.title)}</h3>
        <div class="result-meta">
          <span>${escapeHtml(req.priority)}</span>
          <span>${escapeHtml(req.effort)} effort</span>
          <span>${escapeHtml(req.confidence)}% confidence</span>
        </div>
      </div>
      <p>${escapeHtml(req.userStory)}</p>
      <ol>${criteria}</ol>
      <div class="stakeholders">${stakeholders}</div>
      <p class="citation"><strong>${escapeHtml(citation?.sourceTitle || "Source")}:</strong> ${escapeHtml(citation?.snippet || "No citation returned.")}</p>
    </article>
  `;
}

const form = document.querySelector("#backlogForm");
const status = document.querySelector("#demoStatus");
const results = document.querySelector("#backlogResults");
const empty = document.querySelector("#outputEmpty");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  const data = Object.fromEntries(new FormData(form).entries());
  status.textContent = "Generating source-attributed backlog...";
  button.disabled = true;
  results.innerHTML = "";
  empty.hidden = false;

  try {
    if (!data.sourceText || data.sourceText.trim().length < 40) throw new Error("Add at least 40 characters of source evidence.");
    const run = generateStaticBacklog(data.productGoal || "Improve AI-powered support automation workflows", data.sourceText);
    empty.hidden = true;
    status.textContent = `${run.mode} generated ${run.requirements.length} requirements.`;
    results.innerHTML = `
      <div class="run-summary">${escapeHtml(run.summary)}</div>
      ${run.requirements.map(renderRequirement).join("")}
    `;
  } catch (error) {
    status.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});
