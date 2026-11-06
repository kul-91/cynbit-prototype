import { NextResponse } from 'next/server';

const tracks: Record<string, { title: string; stack: string; steps: string[]; questions: string[] }> = {
  software: { title: 'Custom software', stack: 'Product discovery · UX architecture · full-stack engineering', steps: ['Map the users, workflow, and success metric', 'Prioritize an MVP and define the system boundaries', 'Build, validate, and prepare the first release'], questions: ['Who will use the product first?', 'What should the first release make easier?'] },
  automation: { title: 'AI & workflow automation', stack: 'Process audit · AI agents · integrations and guardrails', steps: ['Choose a repetitive workflow and its baseline', 'Identify data sources, approval points, and safe fallbacks', 'Prototype the automation and measure time saved'], questions: ['Which task consumes the most team time?', 'Where should a person review or approve the result?'] },
  cloud: { title: 'Cloud & infrastructure', stack: 'Architecture review · cloud foundations · reliability', steps: ['Review the current platform and operational risks', 'Define security, availability, and scaling needs', 'Sequence the migration or platform improvements'], questions: ['What is your current hosting setup?', 'Which reliability or cost issue matters most?'] },
  growth: { title: 'Digital growth', stack: 'Technical SEO · conversion experience · measurement', steps: ['Review the key landing journey and analytics', 'Find the highest-friction conversion point', 'Ship focused improvements and track their impact'], questions: ['What action should more visitors take?', 'Which channel currently brings your best leads?'] },
};
const timelines: Record<string, string> = { exploring: 'Discovery first', soon: 'Plan a focused first release', later: 'Build a considered roadmap' };

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, challenge, outcome, service, timing } = body;
    if (typeof name !== 'string' || name.trim().length < 2 || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || typeof challenge !== 'string' || challenge.trim().length < 12 || !tracks[service] || !['exploring', 'soon', 'later'].includes(timing)) {
      return NextResponse.json({ error: 'Add your name, a valid email, a project description (at least 12 characters), and select a valid path and timing.' }, { status: 400 });
    }
    const track = tracks[service as string];
    const safe = (value: unknown) => typeof value === 'string' ? value.trim().slice(0, 1200) : '';
    return NextResponse.json({
      blueprint: {
        greeting: `A useful first step for ${safe(company) || 'your team'}`,
        focus: track.title,
        approach: track.stack,
        timing: timelines[timing as string],
        challenge: safe(challenge),
        outcome: safe(outcome),
        steps: track.steps,
        questions: track.questions,
        contact: { name: safe(name), email: safe(email), company: safe(company) },
        note: 'This is an initial discussion brief, not a quote or delivery commitment. Cynbit can validate the scope with you.'
      }
    });
  } catch {
    return NextResponse.json({ error: 'We could not prepare that brief. Please check your answers and try again.' }, { status: 400 });
  }
}
