import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, User } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Anjali & Siddharth",
    type: "Wedding Invitation",
    tag: "Live Project",
    tagColor: "text-rose-300 bg-rose-500/10 border-rose-500/20",
    url: "https://anjali-siddharth-wedding--imthiyasibnuibr.replit.app",
    device: "mobile",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    description: "Cinematic wedding invite with RSVP, event timeline & venue maps.",
    accent: "from-rose-500/30 to-rose-900/10",
    previewBg: "bg-gradient-to-br from-rose-950 via-neutral-950 to-neutral-900",
    phoneBg: "from-rose-900 via-rose-950 to-neutral-950",
    phoneAccent: "#fda4af",
    icon: "heart",
  },
  {
    id: 2,
    title: "Sagar (Jacky)",
    type: "Interactive Portfolio",
    tag: "Live Project",
    tagColor: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
    url: "https://smooth-scroll-zeta.vercel.app",
    device: "desktop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    description: "High-performance React portfolio — blazing fast, built for impact.",
    accent: "from-cyan-500/30 to-blue-900/10",
    previewBg: "bg-gradient-to-br from-cyan-950 via-neutral-950 to-neutral-900",
    icon: "user",
  },
  {
    id: 3,
    title: "Aysha & Zayan",
    type: "Wedding Invitation",
    tag: "Live Project",
    tagColor: "text-violet-300 bg-violet-500/10 border-violet-500/20",
    url: "https://aysha-zayan.netlify.app",
    device: "desktop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    description: "Elegant wedding invite with scroll animations, event details & photo gallery.",
    accent: "from-violet-500/30 to-purple-900/10",
    previewBg: "bg-gradient-to-br from-violet-950 via-neutral-950 to-neutral-900",
    icon: "heart",
  },
  {
    id: 4,
    title: "Farhaan & Fathima",
    type: "Wedding Invitation",
    tag: "Live Project",
    tagColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
    url: "https://malabar-mumbai-wedding-invitation--smoothscroll.replit.app",
    device: "mobile",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    description: "A cross-culture wedding — blending Malabar traditions with Mumbai vibes.",
    accent: "from-amber-500/30 to-orange-900/10",
    previewBg: "bg-gradient-to-br from-amber-950 via-neutral-950 to-neutral-900",
    phoneBg: "from-amber-900 via-amber-950 to-neutral-950",
    phoneAccent: "#fcd34d",
    icon: "heart",
  },
  {
    id: 5,
    title: "Imthiyas",
    type: "Interactive Portfolio",
    tag: "Live Project",
    tagColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    url: "https://imthiyas-portfolio.vercel.app/",
    device: "desktop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    description: "Personal developer portfolio — modern UI, smooth animations & live projects showcase.",
    accent: "from-emerald-500/30 to-green-900/10",
    previewBg: "bg-gradient-to-br from-emerald-950 via-neutral-950 to-neutral-900",
    icon: "user",
  },
  {
    id: 6,
    title: "Anjali & Rohan",
    type: "Wedding Invitation",
    tag: "Live Project",
    tagColor: "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20",
    url: "https://anjali-rohan.lovable.app",
    device: "desktop",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    description: "A beautiful lovable-hosted wedding card with elegant design & heartfelt story.",
    accent: "from-fuchsia-500/30 to-pink-900/10",
    previewBg: "bg-gradient-to-br from-fuchsia-950 via-neutral-950 to-neutral-900",
    icon: "heart",
  },
  {
    id: 7,
    title: "Rehan & Mira",
    type: "Wedding Invitation",
    tag: "Live Project",
    tagColor: "text-sky-300 bg-sky-500/10 border-sky-500/20",
    url: "https://my-site-hl9psrz9-imthiyasibnuibrahi.wix-vibe-site.com",
    device: "mobile",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    description: "A premium wedding invitation built on Wix Vibe — elegant, responsive & heartfelt.",
    accent: "from-sky-500/30 to-teal-900/10",
    previewBg: "bg-gradient-to-br from-sky-950 via-neutral-950 to-neutral-900",
    phoneBg: "from-sky-900 via-sky-950 to-neutral-950",
    phoneAccent: "#7dd3fc",
    icon: "heart",
  },
];

/* ── Stylised mobile phone mock preview ─────────────────────────── */
function MobilePreview({ project }) {
  const names = project.title.split('&').map(n => n.trim());
  return (
    /* Outer phone shell */
    <div className="relative w-[140px] h-[280px] rounded-[2rem] border-2 border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden flex-shrink-0">
      {/* Dynamic island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-neutral-950 rounded-b-xl z-20" />
      {/* Screen gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${project.phoneBg ?? 'from-neutral-900 to-neutral-950'}`} />
      {/* Decorative rings */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border border-white/5" />
      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-white/5" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10 px-3 text-center">
        <Heart size={18} style={{ color: project.phoneAccent ?? '#f9a8d4' }} className="mb-1 opacity-80" />
        <div className="space-y-0.5">
          {names.map((n, i) => (
            <p key={i} className="text-white font-semibold text-xs leading-tight">{n}</p>
          ))}
        </div>
        <div className="w-8 border-t border-white/20 my-1" />
        <p className="text-[10px] leading-snug" style={{ color: project.phoneAccent ?? '#f9a8d4' }}>
          Wedding Invitation
        </p>
        <div className="mt-2 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
          ))}
        </div>
      </div>
      {/* Bottom home bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20" />
    </div>
  );
}

/* ── Desktop browser mock preview ───────────────────────────────── */
function DesktopPreview({ project }) {
  return (
    <div className="relative w-full max-w-[440px] rounded-xl border border-neutral-700 bg-neutral-950 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-in-out" style={{ aspectRatio: '16/9' }}>
      {/* Browser chrome */}
      <div className="h-7 bg-neutral-900 border-b border-neutral-800 flex items-center px-3 gap-1.5 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <div className="flex-1 mx-2 bg-neutral-800 rounded-md h-4 flex items-center px-2">
          <span className="text-[9px] text-neutral-500 truncate">{project.url.replace('https://', '')}</span>
        </div>
      </div>
      {/* iframe */}
      <div className="relative overflow-hidden" style={{ height: 'calc(100% - 28px)' }}>
        <iframe
          src={project.url}
          title={project.title}
          loading="lazy"
          className="border-0 pointer-events-none absolute top-0 left-0"
          style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left' }}
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20">
        <div className="text-center px-4">
          <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
          <p className="text-xs text-neutral-300">{project.type}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-neutral-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Live Preview <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Selected Work.</h2>
        <p className="text-neutral-400 max-w-xl text-lg">
          Real projects, live URLs. From cinematic wedding scrolls to high-performance interactive portfolios.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[360px]">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`relative group overflow-hidden rounded-3xl border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-600 transition-colors cursor-pointer ${project.colSpan} ${project.rowSpan} ${project.previewBg}`}
          >
            {/* Full card clickable overlay */}
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-40" aria-label={`View ${project.title} live project`} />

            {/* Glow accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-30 pointer-events-none`} />

            {/* Top: tag + title */}
            <div className="relative z-10">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${project.tagColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                {project.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mb-0.5">{project.title}</h3>
              <p className="text-sm text-neutral-400">{project.type}</p>
              <p className="text-xs text-neutral-500 mt-1.5 max-w-xs leading-relaxed">{project.description}</p>
            </div>

            {/* Center: device preview */}
            <div className="flex items-center justify-center flex-1 py-3 relative z-10">
              {project.device === 'mobile' ? (
                <div className="group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  <MobilePreview project={project} />
                  {/* Mobile hover overlay */}
                  <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-sm z-20 rounded-3xl">
                    <div className="text-center px-4">
                      <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                      <p className="text-xs text-neutral-300">{project.type}</p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-neutral-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Preview <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ) : (
                <DesktopPreview project={project} />
              )}
            </div>

            {/* Bottom: URL */}
            <div className="relative z-10 mt-1">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-neutral-600 hover:text-neutral-400 transition-colors font-mono truncate max-w-full"
              >
                <ExternalLink size={11} />
                {project.url.replace('https://', '')}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
