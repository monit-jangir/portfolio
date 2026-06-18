'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { Code, Cpu, Database, Users, PenTool } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages & Web',
      icon: <Code className="h-5 w-5" />,
      skills: ['Python', 'HTML', 'CSS'],
    },
    {
      category: 'AI & ML',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'OpenAI API',
        'Embeddings',
        'Gen AI',
        'Agentic AI',
        'Vector Search',
        'Claude',
        'RAG Pipelines',
        'Prompt Engineering',
      ],
    },
    {
      category: 'Automation',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'N8N',
        'Google Ads API',
        'Microsoft Ads API',
        'Agentic Workflows',
        'PHP Templating',
        'Data Pipelines',
      ],
    },
    {
      category: 'Tools, Frameworks & Databases',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'Streamlit',
        'GitHub',
        'Microsoft Power Platform (PL-900)',
        'Copilot Studio',
        'Power Apps',
        'Power Automate',
        'MySQL',
        'MongoDB',
      ],
    },
    {
      category: 'Data Analysis & Visualization',
      icon: <PenTool className="h-5 w-5" />,
      skills: ['Power BI', 'Excel'],
    },
    {
      category: 'Soft Skills & Certifications',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Data-driven decision making',
        'Problem-solving',
        'Analytical thinking',
        'PL-900 Certified',
        'Microsoft Gen AI & Agents Certified',
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'tween', ease: [0.19, 1, 0.22, 1] },
  },
};

  const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: 'tween', ease: 'easeOut' },
  },
};

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none bg-transparent px-0 pb-12 text-black shadow-none dark:text-white">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;