import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// I've replaced all the old project data with your projects from your resume.
const PROJECT_CONTENT = [
  {
    title: 'AI-Native Conversational Portfolio',
    description:
      'Reimagines the traditional portfolio as an AI-powered conversational experience. Instead of scrolling through a static page, visitors can converse with an AI persona of Monit. The chatbot uses a custom system prompt and can dynamically invoke rich React components (such as project carousels, skills badges, and contact forms) inline.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Mistral AI',
      'Vercel AI SDK',
      'Tailwind CSS',
      'Framer Motion',
    ],
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/monit-jangir/portfolio.git'
      },
    ],
    images: [
      {
        src: '/avatar-landing.png',
        alt: 'AI-Native Conversational Portfolio interface',
      },
    ],
  },
  {
    title: 'Resume Optimizer Agent',
    description:
      'A smart, AI-powered resume optimizer built with Streamlit and the Mistral LLM API. It allows users to upload a resume and paste a job description to get instant feedback, a tailored resume, interview prep questions, and more.',
    techStack: [
      'Python',
      'Streamlit',
      'Mistral API',
      'ReportLab',
      'PyMuPDF',
      'Git',
    ],
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/monit-jangir/resume-optimizer.git'
      },
    ],
    images: [
      {
        src: '/resume-optimizer-agent.png', // You'll need to add a screenshot of this project to your /public folder
        alt: 'Resume Optimizer Agent project screenshot',
      },
    ],
  },
  {
    title: 'Maximizing UAV Fog Deployment Efficiency',
    description:
      'An ongoing research project aimed at enhancing the efficiency of disaster response by ensuring low-latency, high-availability data exchange between aerial UAV nodes and rescue teams on the ground using fog computing principles.',
    techStack: [
      'Python',
      'Fog Computing',
      'UAV Simulation',
      'Network Optimization',
    ],
    date: 'Ongoing',
    links: [], // You can add links here when they are available
    images: [
      {
        src: '/uav.jpg', // You'll need to add a relevant image to your /public folder
        alt: 'Maximizing UAV Fog Deployment project image',
      },
    ],
  },
  {
    title: 'Security Assistance System for Manual Wheelchair',
    description:
      'An IoT-enabled system developed for real-time monitoring and alerting to significantly enhance wheelchair safety. It integrates various sensors and communication modules for remote operation and secure data logging.',
    techStack: ['IoT', 'Sensors', 'Real-Time Data', 'Embedded Systems'],
    links: [], // Add a GitHub link here if you have one
    images: [
      {
        src: '/project-iot-wheelchair.png', // You'll need to add a screenshot of this project to your /public folder
        alt: 'IoT-Based Security Assistance System project image',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            {projectData.date && <span>{projectData.date}</span>}
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// This is the data that feeds the carousel cards. I've updated it to include all three of your projects.
export const data = [
  {
    category: 'AI Project',
    title: 'AI-Native Conversational Portfolio',
    src: '/avatar-landing.png',
    content: <ProjectContent project={{ title: 'AI-Native Conversational Portfolio' }} />,
  },
  {
    category: 'AI Agent',
    title: 'Resume Optimizer Agent',
    src: '/resume-optimizer-agent.png', // Make sure this image exists in /public
    content: <ProjectContent project={{ title: 'Resume Optimizer Agent' }} />,
  },
  {
    category: 'Research',
    title: 'Maximizing UAV Fog Deployment Efficiency',
    src: '/uav.jpg', // Make sure this image exists in /public
    content: (
      <ProjectContent project={{ title: 'Maximizing UAV Fog Deployment Efficiency' }} />
    ),
  },
  {
    category: 'IoT',
    title: 'Security Assistance System for Manual Wheelchair',
    src: '/project-iot-wheelchair.png', // Make sure this image exists in /public
    content: (
      <ProjectContent project={{ title: 'Security Assistance System for Manual Wheelchair' }} />
    ),
  },
];