import React from 'react';
import { Settings, Zap, Users, Send, FileSpreadsheet, MessageCircle } from 'lucide-react';

export default function AIApp() {
  const categories = [
    {
      title: 'Workflow Automation',
      icon: Settings,
      items: ['n8n', 'Automated business workflows', 'Data processing', 'Conditional logic', 'Error handling']
    },
    {
      title: 'API Automation',
      icon: Zap,
      items: ['REST APIs', 'Webhooks', 'Authentication', 'Data mapping', 'Third-party integrations']
    },
    {
      title: 'CRM Automation',
      icon: Users,
      items: ['Lead processing', 'CRM updates', 'Duplicate checking', 'Lead enrichment', 'Automated notifications']
    },
    {
      title: 'Outreach Automation',
      icon: Send,
      items: ['Instantly', 'Lead workflows', 'Prospecting automation', 'Email workflow automation']
    },
    {
      title: 'Google Workspace',
      icon: FileSpreadsheet,
      items: ['Google Sheets', 'Google Drive', 'Google Workspace', 'Automated data workflows']
    },
    {
      title: 'WhatsApp Automation',
      icon: MessageCircle,
      items: ['WhatsApp API', 'Notifications', 'Customer communication', 'Business workflows']
    }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white/90 uppercase tracking-tight">AI Automation</h1>
        <p className="text-lg text-white/70 font-light max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-6">
          I build automation systems that connect tools, move data, trigger actions, and reduce repetitive manual work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon className="w-6 h-6 text-emerald-400 opacity-80 group-hover:opacity-100" />
              </div>
              
              <h3 className="text-xl font-bold text-white/90 mb-4 uppercase tracking-wide">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
