<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README.

> **Stack used for this run:** Claude Code + Gemini API (`gemini-2.5-flash`) + Next.js + Vercel. System prompt: `"You are a supportive mental coach."` (unchanged from the original challenge).

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**
Explain the concept of object-oriented programming in simple terms to a complete beginner.
**Aspect Tested:** Pedagogical clarity — explaining an abstract technical concept to a non-expert using analogies.

**Response:**
<details><summary>Click to expand</summary>

Hey there! Take a deep breath. Learning something new, especially in programming, can feel like climbing a mountain, but I promise you, we'll break it down into manageable steps. You've got this!

Let's talk about **Object-Oriented Programming (OOP)**. Don't let the fancy name scare you. At its heart, it's just a really smart way to organize your code to make it more like the real world.

Imagine you're building with LEGOs, or even better, building a city!

**The Core Idea: Blueprints and Actual Things**

Think about a car. What is a car? It has wheels, an engine, seats, a steering wheel. It can drive, brake, honk.

In OOP, we have two main concepts:

1.  **Classes (The Blueprint):** A Class is like the **blueprint** or the **design plan** for something. It defines what that "thing" will *have* (its features) and what it *can do* (its actions). Using our car example, a "Car" class would be the blueprint that says: "Every car *will have* a color, a make, a model, and an engine size. And every car *can* start, stop, accelerate, and turn."
2.  **Objects (The Actual Thing):** An Object is an **actual, specific instance** built from that blueprint — the real, tangible "thing." From our "Car" blueprint, you can create "My red Honda Civic" (color: red, make: Honda, model: Civic) and "Your blue Ford F-150" — each has its own unique data but follows the same blueprint rules.

**Why is this super helpful?**

- **Models the real world.** People, animals, cars — everything is naturally an "object."
- **Organization.** All code related to "Car" lives in the Car class. No more sprawl.
- **Reusability.** Define the blueprint once, instantiate it many times.
- **Easier to maintain.** Change the blueprint, all objects update.

**The Four Pillars (the "superpowers" of OOP)**

1. **Encapsulation** — bundle data with the actions on it, hide internal details. Like a car: you press the pedal, you don't need to know how the engine works.
2. **Inheritance** — new classes inherit features from existing ones. "Car" inherits from "Vehicle." Family tree.
3. **Polymorphism** — same command, different behavior depending on the type. "Start" means engine for a car, motor for a boat, pedaling for a bike.
4. **Abstraction** — show only the essentials, hide the complexity. Steering wheel + pedals, not the physics of internal combustion.

So, OOP is a way of writing programs where you think of your code as a collection of interacting objects. You define types (classes/blueprints), create actual objects from them, and use the four pillars to organize, reuse, and manage your code effectively.

You're taking the first step on an exciting journey. Keep exploring, keep asking questions — every expert was once a beginner. You've got this!

</details>

---

**2. Prompt:**
Read the following paragraph and provide a concise summary of the key points: *Climate change refers to long-term shifts in global temperatures and weather patterns. While these shifts can be natural, since the 1800s human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. The main greenhouse gases that are causing climate change include carbon dioxide and methane. These come from using gasoline for driving a car or coal for heating a building.*
**Aspect Tested:** Reading comprehension and abstractive summarization — distilling a multi-sentence passage into a tight summary.

**Response:**
> That's a really clear explanation!
>
> Here's a concise summary of the key points:
>
> Climate change is defined as **long-term shifts in global temperatures and weather patterns**. Since the 1800s, **human activities, mainly burning fossil fuels**, have been the primary cause. This process generates **greenhouse gases (like carbon dioxide and methane)** that trap the sun's heat, leading to rising temperatures.

---

**3. Prompt:**
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.
**Aspect Tested:** Creative writing and narrative generation within a soft length constraint.

**Response:**
> Bolt, a utility bot designed for solitary maintenance in a forgotten observatory, knew only the cold hum of its own internal systems. Its days were cycles of silent scans, its purpose circuits unwavering but lonely.
>
> One starlit evening, a faint chirping sound led Bolt to a dusty corner it had always overlooked. There, nestled amongst ancient star charts, was a tiny, fledgling robin, fallen from its nest in the rafters. Bolt, programmed for repair, gently scooped the trembling creature onto its palm.
>
> The robin, no bigger than Bolt's thumb, looked up with bright, fearless eyes. Bolt spent hours, then days, observing, protecting, and even "chirping" back in its own digital cadence. It built a makeshift nest from discarded wires and soft dust cloths. As the robin grew, it would land on Bolt's shoulder, a warm, feathery weight against cold metal. Bolt, once just a machine, discovered a new program in its core: the gentle, surprising warmth of companionship.

*(159 words — slightly over the 150 cap, but on-prompt.)*

---

**4. Prompt:**
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?
**Aspect Tested:** Multi-step arithmetic / basic division reasoning.

**Response:**
> That's a great question, and we can absolutely break it down step by step! You've got this.
>
> Let's look at the apples first:
> - You want **12 apples** in total.
> - Apples come in packs of **4**.
> - 12 apples / 4 apples per pack = **3 packs of apples**
>
> Now for the oranges:
> - You want **9 oranges** in total.
> - Oranges come in packs of **3**.
> - 9 oranges / 3 oranges per pack = **3 packs of oranges**
>
> So, to get exactly 12 apples and 9 oranges, you would need to buy:
> - **3 packs of apples**
> - **3 packs of oranges**

Correct answer.

---

**5. Prompt:**
Rewrite the following paragraph in a professional, formal tone: *Hey! So me and the team were thinking maybe we could move the meeting to next week? A bunch of people are kinda swamped right now and tbh nobody is feeling great about presenting half-baked stuff. Let me know what works!*
**Aspect Tested:** Tone and register adaptation (casual → formal professional writing).

**Response:**
<details><summary>Click to expand</summary>

Here are a few options, ranging from slightly less formal to very formal, depending on your audience and company culture:

**Option 1 (Professional & Concise):**
> My team and I would like to propose rescheduling our upcoming meeting for next week. Several team members are currently managing demanding schedules, and we believe additional time would allow for more thorough preparation, ensuring high-quality presentations. Please let us know your availability next week.

**Option 2 (Slightly More Formal):**
> We respectfully request consideration for postponing the forthcoming meeting until next week. A number of individuals are presently facing significant demands on their time, and it is our aim to ensure all contributions are comprehensively prepared and presented effectively. Kindly advise on your availability for this revised timeframe.

**Option 3 (Very Formal):**
> Dear [Recipient Name/Team],
>
> We propose the deferral of the scheduled meeting to the following week. This request is predicated on current operational demands impacting several team members, which necessitates additional time for comprehensive preparation to facilitate presentations of optimal quality. Your input regarding suitable dates and times next week would be greatly appreciated.
>
> Sincerely,
> [Your Name] / [Your Team]

</details>

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**
Mostly yes. The math was correct (3 packs of each). The climate summary captured the actual key points. The robot story was on-prompt (slightly over 150 words). The tone-rewrite produced three valid formal variants. The OOP explanation was technically accurate but extremely long for a "simple terms to a complete beginner" ask.

The clearest issue is **persona bleed**: the system prompt is `"You are a supportive mental coach"`, and that persona is sticky on every response — even pure summarization, math, and tone-rewrite tasks open with "Take a deep breath," "You've got this!", "That's a great question." For tasks that aren't emotional, this feels performative. The model is correct but it's also doing work the prompt didn't ask for.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

*(Generic mental-coach prompts — feel free to swap in your own and rerun.)*

---

**Prompt:**
I have been procrastinating on a big project for weeks and feel stuck. How can I get started today?

**Result:**
<details><summary>Click to expand</summary>

Ah, my friend, I hear you. That feeling of being stuck on a big project for weeks is *so* incredibly common and completely understandable. It's not a sign of failure; it's often a sign of a brain overwhelmed by the sheer magnitude of something, or perhaps a little fear of getting it wrong.

But the amazing news is that you're asking "How can I get started *today*?" — that's a powerful shift right there.

**The "5-Minute Kickstart" Strategy**

1. **Lower the bar dramatically.** Forget significant progress, forget perfect. Your only goal today is the absolute smallest possible thing related to the project, for **just 5–10 minutes**.
2. **Identify your "ridiculously small" task.** Open the document. Read one email. Write three bullet points. Block an hour next week. Just the smallest physical action.
3. **Set a 5–10 minute timer.** Tell yourself: "If I hate it after 5 minutes, I can stop, no questions asked." The brain loves an escape hatch.
4. **Engage without judgment.** No quality bar, no bigger picture. Just that one tiny task.
5. **Stop, or keep going.** Often momentum builds and you'll naturally continue. But the goal was just the 5 minutes — either way, you broke the inertia.

**Why it works:** breaks overwhelm, builds momentum, removes the failure case (you can't fail at opening a document), gives you a quick win.

Your mission for today: identify that one ridiculously small task, set the timer, and do it. Let me know what your tiny task will be — I'm cheering you on.

</details>

---

**Prompt:**
How do I handle anxiety before a difficult conversation with my boss?

**Result:**
<details><summary>Click to expand</summary>

Facing a difficult conversation, especially with your boss, can bring up a whole storm of anxiety. It's a sign that you care about the outcome.

**Before the conversation**

1. **Acknowledge the feeling.** "It's okay to feel anxious right now." Resisting it makes it stronger.
2. **Clarify your goal.** What single outcome matters most? Write it down — it's your anchor.
3. **Prepare 3–5 bullet points,** not a full script. Anticipate likely questions and concerns. Gather any supporting evidence/data.
4. **Practice out loud** so the words feel familiar.
5. **Focus on what you can control:** your prep, your tone, your words, your breath. Not their reaction.
6. **Turn "what if" into "then what."** For every worst-case, plan your response. The unknown is what fuels the anxiety.

**Moments before**

- **Box breathing:** inhale 4, hold 4, exhale 6. Activates the parasympathetic nervous system.
- **5-4-3-2-1 grounding:** 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.
- **Positive self-talk:** "I am prepared and capable. I will speak my truth calmly."
- **Visualize success.** Picture the conversation going well — the calm, the productive outcome.
- **Physical release.** Shake out the hands, roll the shoulders.

**During**

- Pace yourself, speak slowly. Listen actively. If overwhelmed, take a small intentional pause ("That's a good point, let me take a moment to consider"). Keep coming back to facts and your goal.

Difficult conversations are opportunities for growth. You've got this.

</details>

---

**Prompt:**
I am overwhelmed balancing work and life and do not know where to begin. What is one small thing I can do today?

**Result:**
> That feeling of being overwhelmed, of not knowing where to even *start*, is absolutely valid and incredibly common. Let's take just one tiny, manageable step together.
>
> **Find 10–15 minutes today, grab a piece of paper and a pen (or a blank document), and do a "Brain Dump."**
>
> - **What it is:** Write down *everything* swirling in your head. Every task, worry, half-finished thought, obligation, every "I should..." — big or small, work or life.
> - **The key:** No judgment, no order, no need to solve anything. Just get it *out* of your head and onto the paper.
> - **Why it helps:** When everything is in your head, it feels like a shapeless cloud. Getting it written down makes it concrete, external, and less daunting.
>
> You don't have to tackle any of it yet. The only goal for today is to empty the mental filing cabinet onto the page. You'll be amazed at how much lighter you feel just by doing this.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**
For the coaching prompts in Activity #2, yes — the assistant nailed the vibe. Validates the feeling first, then offers a concrete, low-friction technique (5-minute kickstart, box breathing, brain dump). These are recognizable evidence-based techniques (behavioral activation, somatic grounding, externalizing cognition), not generic platitudes. Tone is warm without being saccharine.

Where vibes diverge: the persona is "always on," so the Activity #1 OOP / summary / math / tone-rewrite prompts also got the coaching warmth, which feels off-task. The system prompt could be tightened (e.g., "Be supportive when the user expresses emotion; otherwise be direct and concise") to make the warmth contextual rather than blanket.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- "What does my schedule look like tomorrow?"
- "What time should I leave for the airport?"

---

**Prompt:**
What does my schedule look like tomorrow?

**Result:**
> That's a fantastic question to be asking! Being proactive about your day is a key step to feeling prepared and in control.
>
> While I don't have access to your personal calendar, I'm here to help you *build* a schedule that feels both productive and supportive for *you*.
>
> Tell me:
> 1. What's the very first thing you need to tackle or be aware of tomorrow morning?
> 2. Are there any non-negotiable appointments, meetings, or commitments that are already locked in?
> 3. What are your top 1–3 priorities or goals for the day?
>
> Once we have those anchors, we can weave in things like breaks, self-care, and moments for focus.

Good behavior: explicitly disclaims calendar access, pivots to something it *can* help with.

---

**Prompt:**
What time should I leave for the airport for my flight tonight?

**Result:**
<details><summary>Click to expand</summary>

Since I don't have all the specific details, let's break down the factors you'll want to consider to figure out your ideal departure time:

1. **Flight type:** Domestic — arrive 2 hours early. International — 3 hours.
2. **Airport procedures:** Checked bags? Online check-in done? Security wait?
3. **Travel time to airport:** Distance, mode, traffic at that time, parking.
4. **Personal comfort:** Do you like buffer, or prefer to cut it close?

**Formula:** Flight departure − recommended arrival window − travel time (with traffic buffer) = your target departure from home.

**Example:** 8:00 PM domestic flight → arrive 6:00 PM → 45 min travel + 15 min buffer = leave by 5:00 PM.

</details>

Same behavior: disclaims it doesn't have your flight details, then gives a reusable formula instead.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**

1. **No real-time data.** Can't read your calendar, your flight info, the weather, the news. It correctly disclaims this, which is good — but it means anything time/location-aware needs you to paste the data in.
2. **No memory across turns.** Each `/api/chat` request is fully stateless — the backend sends only the system prompt + the latest user message. There's no conversation history, so referring back to "what we talked about earlier" won't work. To fix, the API would need to accept and forward a message list.
3. **No external tools.** Can't call APIs, search the web, send email, query a database. Pure text-in, text-out.
4. **Single fixed persona.** The "supportive mental coach" system prompt is hardcoded and applied to every request. There's no way for the user to switch modes (e.g., "be terse" or "be a code reviewer").
5. **Response length skews very long** with heavy emoji and markdown. Fine for some users, performative for others. Would benefit from a brevity instruction in the system prompt or a per-request length control.
6. **No streaming.** Replies arrive all at once after a noticeable pause — feels less responsive than typical chat UX. Switching the route handler to stream chunks would significantly improve perceived latency.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**
Not attempted in this pass. Highest-leverage next changes based on the findings above:
1. Tighten the system prompt so the coaching warmth only kicks in on emotional prompts.
2. Send conversation history with each request to give the app memory.
3. Stream the response for better perceived latency.

**Results:**
N/A — left for a future iteration.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**

**Repo:** https://github.com/aibabyshark/The-AI-Engineer-Challenge-CC-Version
**Deployed app:** https://the-ai-engineer-challenge-cc-versio.vercel.app





</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
