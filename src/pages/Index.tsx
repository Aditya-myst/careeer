import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { CategoryNav } from '@/components/CategoryNav';
import { ResourceCard } from '@/components/ResourceCard';

const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'programming', name: 'Programming' },
  { id: 'dsa', name: 'DSA' },
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'open-source', name: 'Open Source' },
  { id: 'web-dev', name: 'Web Development' },
  { id: 'data-science', name: 'Data Science' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'job', name: 'Job & Interview' },
  { id: 'second-brain', name: 'Second Brain' },
  { id: 'frontend', name: 'Frontend Dev' },
  { id: 'web3', name: 'Web3' },
  { id: 'books', name: 'Books' },
  {id:'job',name:'Job & Interview'}
];

const resources = [
  {
    id: 1,
    title: "DSA ",
    description: "Comprehensive collection of Data Structures and Algorithms resources including YouTube channels, cheat sheets, and roadmaps.",
    category: "dsa",
    difficulty: "All Levels",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/DSA-1-16a0593c20f580c09663e18b9300197f"
  },
  {
    id: 2,
    title: "UI/UX ",
    description: "Complete resource for UI/UX designers including inspiration sources, roadmaps, plugins, and system design guidelines.",
    category: "ui-ux",
    difficulty: "All Levels",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/UI-UX-1-16a0593c20f58064b762f70576a8e2a9?pvs=4"
  },
  {
    id: 3,
    title: "Open Source ",
    description: "Comprehensive list of open source programs and opportunities to boost your career in tech, featuring contributions,  and community .",
    category: "open-source",
    difficulty: "All Levels",
    timeCommitment: "Varies",
    link: "https://slow-ridge-74d.notion.site/Open-Source-1-16a0593c20f5800c85b8d2136614721f?pvs=4"
  },
  {
    id: 4,
    title: " Python",
    description: "Master Python programming from basics to advanced concepts with hands-on projects, exercises, and real-world applications.",
    category: "programming",
    difficulty: "Beginner",
    timeCommitment: "40 hours",
    link: "https://slow-ridge-74d.notion.site/Python-16a0593c20f58014948df3963174fd27?pvs=4"
  },
  {
    id: 5,
    title: "Modern Web Development",
    description: "Learn to build modern web applications using React, Next.js, and other  technologies.",
    category: "web-dev",
    difficulty: "Intermediate",
    timeCommitment: "60 hours",
    link: "https://slow-ridge-74d.notion.site/Modern-Web-Development-16a0593c20f580f2ba71f519d3a217e4?pvs=4"
  },
  {
    id: 6,
    title: "Data Science ",
    description: "Get started with data science using Python, pandas, and scikit-learn through practical hands-on examples and projects.",
    category: "data-science",
    difficulty: "Intermediate",
    timeCommitment: "50 hours",
    link: "https://slow-ridge-74d.notion.site/Data-Science-16a0593c20f580c7ac8ef7f9c0ad8417?pvs=4"
  },
  {
    id: 7,
    title: "AWS Cloud",
    description: "Comprehensive guide to cloud computing with AWS, perfect for beginners in cloud , covering key services, best practices.",
    category: "cloud",
    difficulty: "Beginner",
    timeCommitment: "30 hours",
    link: "https://slow-ridge-74d.notion.site/AWS-16a0593c20f58043aa57cff9f91e6ad8?pvs=4"
  },
  {
    id: 8,
    title: "Interview Guide",
    description: "Comprehensive resources for technical interviews, including coding challenges, system design, and behavioral questions.",
    category: "job",
    difficulty: "Intermediate",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/Interview-Preparation-Websites-for-Maang-16a0593c20f58086a2a5d46592f0f88f?pvs=4"
  },
  {
    id: 9,
    title: "Building a Digital Second Brain",
    description: "Learn how to create and maintain a personal knowledge management system to enhance productivity and learning.",
    category: "second-brain",
    difficulty: "Beginner",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/How-to-Build-a-Second-Brain-16a0593c20f580dfb533d4119de6ca8d?pvs=7458086a2a5d46592f0f88f?pvs=4"
  },
  {
    id: 10,
    title: "Frontend Development",
    description: "Complete collection of frontend resources including interview preparation, system design, UI libraries, and JavaScript fundamentals.",
    category: "frontend",
    difficulty: "All Levels",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/Frontend-Development-1-16a0593c20f5807b9204f8ddd138f707"
  },
  {
    id: 11,
    title: "Web3 Development Guide",
    description: "welcome here ,Curated collection of Web3 resources covering blockchain development, smart contracts, and foundational concepts.",
    category: "web3",
    difficulty: "Advanced",
    timeCommitment: "Self-paced",
    link: "https://slow-ridge-74d.notion.site/Web3-1-16a0593c20f5803b9480ea0ccc148e05?pvs=4"
  },
  {
    id: 12,
    title: "Life-Changing Book Recommendations",
    description: "Carefully curated book list to expand your horizons and discover new possibilities in life and career growth. ",
    category: "books",
    difficulty: "All Levels",
    timeCommitment: "Varies",
    link: "https://slow-ridge-74d.notion.site/Books-For-You-16a0593c20f580edba77db7786585c04"
  },
  {
    id: 13,
    title: "Job and Intership",
    description: "Explore a variety of job and internship opportunities to kickstart your career in tech. Gain hands-on experience, expand your network, and take the next step toward your professional growth.",
    category: "job",
    difficulty: "All Levels",
    timeCommitment: "Varies",
    link: "https://slow-ridge-74d.notion.site/Job-and-Internship-Portal-16a0593c20f580a890e5f30fede9dad6?pvs=4"
  }
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <CategoryNav 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="resource-grid">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              category={resource.category}
              difficulty={resource.difficulty}
              timeCommitment={resource.timeCommitment}
              link={resource.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
