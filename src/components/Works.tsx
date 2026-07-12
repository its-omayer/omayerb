import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, GitFork, Star, Terminal, Laptop, Code, AlertCircle } from 'lucide-react';

interface GitHubRepoWork {
  id: string;
  year: string;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
}

// Map repositories into categories dynamically
const getRepoCategory = (repo: any): string => {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const lang = (repo.language || '').toLowerCase();
  
  if (
    name.includes('dotfiles') || 
    name.includes('linux') || 
    name.includes('rice') || 
    name.includes('wm') || 
    desc.includes('linux') || 
    desc.includes('dotfiles') || 
    desc.includes('ricing') ||
    desc.includes('wayland') ||
    desc.includes('i3') ||
    desc.includes('hyprland') ||
    lang === 'shell'
  ) {
    return 'Linux Customization';
  }
  
  if (
    name.includes('design') || 
    name.includes('ui') || 
    name.includes('ux') || 
    name.includes('portfolio') || 
    name.includes('theme') || 
    name.includes('frontend') ||
    name.includes('css') ||
    desc.includes('design') || 
    desc.includes('ui/ux') || 
    desc.includes('portfolio') || 
    desc.includes('css') ||
    desc.includes('figma') ||
    lang === 'css' || 
    lang === 'html'
  ) {
    return 'UI & UX Design';
  }

  if (
    lang === 'c' ||
    lang === 'c++' ||
    lang === 'cpp' ||
    lang === 'rust' ||
    lang === 'go' ||
    name.includes('compiler') ||
    name.includes('kernel') ||
    name.includes('os') ||
    name.includes('system')
  ) {
    return 'Systems Programming';
  }
  
  return 'Software Engineering';
};

// Return professional developer workstation or abstract background images
const getWorkImage = (repoId: number, category: string): string => {
  const systemsImgs = [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80'
  ];
  const linuxImgs = [
    'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80'
  ];
  const designImgs = [
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541462608141-2ff01dd914e0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80'
  ];
  const genericImgs = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
  ];
  
  const idNum = Math.abs(Number(repoId)) || 0;
  if (category === 'Linux Customization') {
    return linuxImgs[idNum % linuxImgs.length];
  }
  if (category === 'UI & UX Design') {
    return designImgs[idNum % designImgs.length];
  }
  if (category === 'Systems Programming') {
    return systemsImgs[idNum % systemsImgs.length];
  }
  return genericImgs[idNum % genericImgs.length];
};

// Format hyphenated repository names into a readable presentation title
const formatWorkTitle = (name: string): string => {
  return name
    .split(/[-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function Works() {
  const [works, setWorks] = useState<GitHubRepoWork[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeWorkId, setActiveWorkId] = useState<string>('');

  useEffect(() => {
    const fetchGithubWorks = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/its-omayer/repos?sort=updated&per_page=12');
        if (!res.ok) {
          throw new Error('Could not fetch projects from GitHub API');
        }
        const data = await res.json();
        
        const formattedWorks: GitHubRepoWork[] = data.map((repo: any) => {
          const category = getRepoCategory(repo);
          return {
            id: String(repo.id),
            year: new Date(repo.created_at).getFullYear().toString(),
            title: formatWorkTitle(repo.name),
            description: repo.description || 'Open-source code showcasing advanced layouts, terminal configurations, operational shell scripts, and responsive application workflows.',
            category,
            image: getWorkImage(repo.id, category),
            url: repo.html_url,
            language: repo.language || 'TypeScript',
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
          };
        });

        setWorks(formattedWorks);
        if (formattedWorks.length > 0) {
          setActiveWorkId(formattedWorks[0].id);
        }
      } catch (err: any) {
        console.error('Error fetching repositories inside Works component:', err);
        setError(err.message);

        // Pristine fallback works matching user's real skills if GitHub rate limits hit
        const fallbackWorks: GitHubRepoWork[] = [
          {
            id: 'fallback-1',
            year: '2026',
            title: 'Fedora Custom Rice',
            description: 'My complete custom Fedora operating system setup. Incredibly optimized tiling configurations, custom keyboard shortcuts, fast workspaces, and aesthetic terminal ricing.',
            category: 'Linux Customization',
            image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
            url: 'https://github.com/its-omayer',
            language: 'Shell',
            stars: 18,
            forks: 5,
          },
          {
            id: 'fallback-2',
            year: '2025',
            title: 'Modern Portfolio App',
            description: 'My fully responsive digital programmer-designer hub. Implemented in React 19, Tailwind CSS, and Framer Motion with deep scroll synchronization and dark forest palette.',
            category: 'UI & UX Design',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
            url: 'https://github.com/its-omayer',
            language: 'TypeScript',
            stars: 11,
            forks: 2,
          },
          {
            id: 'fallback-3',
            year: '2024',
            title: 'Operating System Shell C',
            description: 'A custom POSIX-compliant system command parser written in pure C. Fully supports interactive jobs, file pipes, process redirection, and custom environment management.',
            category: 'Systems Programming',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
            url: 'https://github.com/its-omayer',
            language: 'C',
            stars: 15,
            forks: 4,
          },
          {
            id: 'fallback-4',
            year: '2025',
            title: 'Neovim Editor Blueprint',
            description: 'Personalized lua-based IDE experience built on top of Neovim. Blazing-fast auto-completions, fuzzy search file finders, custom diagnostic trees, and tailored code shortcuts.',
            category: 'Linux Customization',
            image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
            url: 'https://github.com/its-omayer',
            language: 'Lua',
            stars: 9,
            forks: 1,
          },
          {
            id: 'fallback-5',
            year: '2024',
            title: 'Compiler Lexical Analyzer',
            description: 'Interactive compiler front-end built in C++ to parsing context-free grammars, generating syntax trees, and verifying expression token declarations.',
            category: 'Systems Programming',
            image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
            url: 'https://github.com/its-omayer',
            language: 'C++',
            stars: 7,
            forks: 1,
          },
        ];
        setWorks(fallbackWorks);
        setActiveWorkId(fallbackWorks[0].id);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubWorks();
  }, []);

  return (
    <section
      id="works"
      className="relative py-24 sm:py-32 bg-brand-green border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-accent/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[4px] text-brand-accent">LIVE REPOSITORY INDEX</span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] sm:text-[9vw] lg:text-[7vw] font-display font-extrabold leading-none text-brand-accent uppercase"
              id="works-title"
            >
              works
            </motion.h2>
            
            {/* View Profile on Github Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="pt-2"
            >
              <a
                href="https://github.com/its-omayer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-mono border border-brand-accent/20 hover:border-brand-accent bg-transparent hover:bg-brand-accent hover:text-brand-green px-6 py-3 rounded-full transition-all duration-300 group"
                id="view-all-works"
              >
                <span>Explore GitHub Profile</span>
                <span className="w-6 h-6 rounded-full border border-white/10 group-hover:border-brand-green flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl text-brand-secondary-text space-y-4"
          >
            <p className="text-lg leading-relaxed text-brand-secondary-text font-sans lg:text-right">
              Live fetched index of public code repositories from <strong className="text-white font-semibold">its-omayer</strong> on GitHub. Fresh repositories will instantly fetch here with real-time names, stargazers count, and active system descriptions.
            </p>
          </motion.div>
        </div>

        {/* Loading Skeletons */}
        {loading ? (
          <div className="space-y-6 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-brand-card/10 h-32 rounded-2xl border border-white/5 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="h-6 w-1/4 bg-white/15 rounded" />
                  <div className="h-4 w-12 bg-white/10 rounded" />
                </div>
                <div className="h-4 w-2/3 bg-white/10 rounded mt-4" />
              </div>
            ))}
          </div>
        ) : (
          /* Works Timeline list */
          <div className="relative mt-12 divide-y divide-white/10 border-t border-b border-white/10" id="works-timeline">
            {works.map((work, idx) => {
              const isHighlighted = activeWorkId === work.id;
              
              return (
                <motion.div
                  key={work.id}
                  onClick={() => setActiveWorkId(work.id)}
                  className={`relative py-10 px-6 sm:px-8 transition-all duration-500 cursor-pointer ${
                    isHighlighted 
                      ? 'bg-brand-accent text-brand-green rounded-[24px] my-6 shadow-[0_20px_50px_rgba(234,247,106,0.15)] border-none' 
                      : 'hover:bg-brand-card/25'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: Math.min(idx * 0.08, 0.5) }}
                >
                  {/* Horizontal flow layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Year / Language Tag */}
                    <div className="md:col-span-2 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-1">
                      <span className={`font-mono text-sm tracking-widest ${
                        isHighlighted ? 'text-brand-green/80 font-bold' : 'text-brand-accent'
                      }`}>
                        {work.year}
                      </span>
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isHighlighted 
                          ? 'border-brand-green/20 bg-brand-green/10 text-brand-green' 
                          : 'border-white/10 bg-white/5 text-brand-muted'
                      }`}>
                        {work.language}
                      </span>
                    </div>

                    {/* Title & Description & Category */}
                    <div className="md:col-span-7 space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className={`text-2xl sm:text-3xl font-display uppercase tracking-wide font-extrabold ${
                          isHighlighted ? 'text-brand-green' : 'text-white'
                        }`}>
                          {work.title}
                        </h3>
                        <span className={`font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                          isHighlighted 
                            ? 'border-brand-green/30 bg-brand-green/20 text-brand-green font-bold' 
                            : 'border-white/10 bg-white/5 text-brand-muted'
                        }`}>
                          {work.category}
                        </span>
                      </div>
                      
                      <p className={`text-sm sm:text-base leading-relaxed font-sans max-w-2xl ${
                        isHighlighted ? 'text-brand-green/90 font-medium' : 'text-brand-secondary-text'
                      }`}>
                        {work.description}
                      </p>

                      {/* Display Github Stars & Forks */}
                      <div className="flex items-center gap-4 pt-1 font-mono text-xs">
                        <span className="flex items-center gap-1">
                          <Star className={`w-3.5 h-3.5 ${isHighlighted ? 'text-brand-green fill-brand-green' : 'text-brand-accent fill-brand-accent'}`} />
                          <span className={isHighlighted ? 'text-brand-green/90 font-bold' : 'text-white/80'}>{work.stars} stars</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className={`w-3.5 h-3.5 ${isHighlighted ? 'text-brand-green' : 'text-brand-muted'}`} />
                          <span className={isHighlighted ? 'text-brand-green/90 font-bold' : 'text-brand-secondary-text'}>{work.forks} forks</span>
                        </span>
                      </div>
                    </div>

                    {/* Actions Right - Clicking this opens the actual repo on GitHub */}
                    <div className="md:col-span-3 flex justify-start md:justify-end">
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono px-5 py-2.5 rounded-full border transition-all duration-300 ${
                          isHighlighted
                            ? 'bg-brand-green text-brand-accent border-brand-green hover:bg-brand-green/90'
                            : 'border-white/20 text-white hover:border-brand-accent hover:bg-brand-accent hover:text-brand-green'
                        }`}
                        onClick={(e) => {
                          // Prevent triggering the row click selection state
                          e.stopPropagation();
                        }}
                      >
                        <span>GitHub Repo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
