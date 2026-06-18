import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of my current professional status, experience, and contact details. Use this tool when the user asks about my work, current job, experience, what I'm looking for, or how to contact me for opportunities/collaborations.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s my current status and what I do 👇

- 💼 **Current Role**: Trainee – Product at **Collegedunia** (Gurugram, India)
- 🛠️ **Stack & Skills**: Python, AI Agents, Workflow Automation (N8N), RAG Pipelines, Power Platform, Power BI, SQL
- 🧑‍💻 **Focus**: AI engineering, product-led automation, Google/Microsoft Ads automation, LLM integrations
- ✅ **What I bring**: Full-lifecycle product delivery and automation experience. Slashed landing page creation time by 80% and automated campaign setup at Collegedunia. Designed robust RAG pipelines for 300K+ legal PDFs at Lawxygen AI.
- 🚀 **Open to**: Collaboration on AI products, open-source projects, and networking with other builders.

📬 **Contact me** via:
- Email: monit.j@outlook.com
- LinkedIn: [linkedin.com/in/monitkjangir](https://linkedin.com/in/monitkjangir)
- GitHub: [github.com/monit-jangir](https://github.com/monit-jangir)

Let's build something amazing together ✌️
    `;
  },
});