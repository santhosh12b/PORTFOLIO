import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function StartProjectApp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Automation',
    budget: 'Let\'s Discuss',
    description: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Assuming backend is running on same domain or we configure CORS correctly
      // For local development, if backend is on 3001
      const API_URL = import.meta.env.DEV ? 'http://localhost:3001/api/contact' : '/api/contact';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
        <CheckCircle className="w-16 h-16 text-emerald-400" />
        <h2 className="text-3xl font-bold text-white">Project Request Sent</h2>
        <p className="text-white/60">Thanks. I'll get back to you soon.</p>
        <button 
          onClick={() => { setStatus('idle'); setFormData({...formData, description: ''}); }}
          className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto h-full overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white/90">Start a New Project</h1>
        <p className="text-white/50 mt-1">"Tell me what you're building."</p>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">Something went wrong. Please try again or contact me directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Name *</label>
            <input 
              required
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Email *</label>
            <input 
              required
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Company / Brand</label>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Service *</label>
            <select 
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-white/30 transition-colors appearance-none"
            >
              <option>AI Automation</option>
              <option>UI/UX Design</option>
              <option>Web Development</option>
              <option>Landing Page</option>
              <option>Business Automation</option>
              <option>Custom Digital Experience</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Budget</label>
          <select 
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white/90 focus:outline-none focus:border-white/30 transition-colors appearance-none"
          >
            <option>₹25K – ₹50K</option>
            <option>₹50K – ₹1L</option>
            <option>₹1L+</option>
            <option>Let's Discuss</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-white/40">Project Description *</label>
          <textarea 
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/30 transition-colors resize-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-white text-black font-semibold rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Send Project Request</>
          )}
        </button>
      </form>
    </div>
  );
}
