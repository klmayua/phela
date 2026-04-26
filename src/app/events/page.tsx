"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Bell, User, ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, 
  Heart, Filter, SlidersHorizontal, Flame, X, Wallet, Droplets, Home, Share2
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  venue: string;
  date: string;
  time: string;
  price: string;
  image: string;
  category: string;
  attendees: number;
  featured?: boolean;
  trending?: boolean;
}

const allEvents: Event[] = [
  { id: 1, title: "Midnight Sessions Vol. 42", venue: "Club Cubic", date: "Apr 26", time: "10PM - 4AM", price: "KES 2,500", image: "🎵", category: "Afrobeat", attendees: 847, featured: true, trending: true },
  { id: 2, title: "Afrobeat Sunday", venue: "The Garage", date: "Apr 27", time: "4PM - 11PM", price: "KES 1,500", image: "🔥", category: "Afrobeat", attendees: 234 },
  { id: 3, title: "Rooftop Vibes", venue: "360° Terrace", date: "Apr 28", time: "6PM - 2AM", price: "KES 3,000", image: "🌙", category: "Hip Hop", attendees: 156 },
  { id: 4, title: "Jazz Night Live", venue: "The Vault", date: "Apr 29", time: "7PM - 12AM", price: "KES 2,000", image: "🎷", category: "Jazz", attendees: 89 },
  { id: 5, title: "Amapiano Takeover", venue: "Sky Lounge", date: "Apr 30", time: "9PM - 3AM", price: "KES 2,800", image: "🔥", category: "Amapiano", attendees: 412, trending: true },
  { id: 6, title: "Electronic Dreams", venue: "Flux Club", date: "May 1", time: "10PM - 4AM", price: "KES 2,200", image: "⚡", category: "Electronic", attendees: 298 },
  { id: 7, title: "RNB Slow Jams", venue: "Blue Note", date: "May 2", time: "8PM - 2AM", price: "KES 1,800", image: "💜", category: "RNB", attendees: 167 },
  { id: 8, title: "Hip Hop Cypher", venue: "Urban Edge", date: "May 3", time: "9PM - 3AM", price: "KES 1,200", image: "🎤", category: "Hip Hop", attendees: 445, trending: true },
  { id: 9, title: "Sauti Sol Live", venue: "Kasarani", date: "May 4", time: "7PM - 11PM", price: "KES 5,000", image: "🎶", category: "Afrobeat", attendees: 1200, featured: true },
  { id: 10, title: "Reggae Bashment", venue: "Island", date: "May 5", time: "6PM - 2AM", price: "KES 1,500", image: "🏝️", category: "Reggae", attendees: 234 },
  { id: 11, title: "Acoustic Sessions", venue: "The Garden", date: "May 6", time: "5PM - 10PM", price: "KES 800", image: "🎸", category: "Live Music", attendees: 78 },
  { id: 12, title: "Tech House", venue: "Submarine", date: "May 7", time: "11PM - 4AM", price: "KES 2,500", image: "🎛️", category: "Electronic", attendees: 312 },
];

const categories = ["All", "Afrobeat", "Hip Hop", "RNB", "Amapiano", "Jazz", "Electronic", "Live Music", "Reggae"];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [savedEvents, setSavedEvents] = useState<number[]>([]);

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleSave = (id: number) => {
    setSavedEvents(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-midnight pb-24 md:pb-0">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-phela-purple/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-vivid-cyan/8 rounded-full blur-[100px]" />
      </div>

{/* Floating Navbar - Sticky Always */}
      <nav className="fixed top-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 z-50 md:w-[94%] md:max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 md:h-[72px] px-4 md:px-6 rounded-2xl md:rounded-full bg-slate/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-14 md:h-14 relative rounded-full overflow-hidden shadow-[0_0_20px_rgba(111,70,255,0.3)]">
              <Image src="/assets/phela_logo.png" alt="PHELA" fill className="object-contain bg-black" />
            </div>
            <span className="font-display text-base md:text-xl font-light tracking-[0.12em] md:tracking-[0.18em] text-white/60 md:text-white/70">PHELA</span>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                <Search size={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all relative">
                <Bell size={16} />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-danger rounded-full" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
                <Wallet size={16} />
              </button>
              <button className="w-9 h-9 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo flex items-center justify-center text-white shadow-[0_4px_20px_rgba(111,70,255,0.4)]">
                <User size={16} />
              </button>
            </div>
            {/* Mobile */}
            <div className="md:hidden flex items-center gap-1">
              <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
                <Calendar size={18} className="text-phela-purple" strokeWidth={1.5} />
              </Link>
              <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
                <Search size={18} className="text-white/60" strokeWidth={1.5} />
              </Link>
              <button className="w-8 h-8 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo flex items-center justify-center text-white shadow-[0_2px_12px_rgba(111,70,255,0.4)]">
                <User size={14} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search & Filters */}
      <section className="relative z-10 pt-32 pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search events, venues, artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate/50 border border-white/5 text-white placeholder:text-text-muted focus:outline-none focus:border-phela-purple focus:shadow-glow-purple transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                showFilters ? "bg-phela-purple border-phela-purple text-white" : "bg-slate/50 border-white/5 text-text-secondary hover:border-phela-purple"
              }`}
            >
              <SlidersHorizontal size={16} />
              <span className="text-sm font-medium">Filters</span>
            </motion.button>

            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat 
                    ? "bg-phela-purple border-phela-purple text-white" 
                    : "bg-slate/50 border-white/5 text-text-secondary hover:border-phela-purple hover:text-white"
                }`}
              >
                <span className="text-sm font-medium whitespace-nowrap">{cat}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="relative z-10 px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-text-secondary">
            <span className="text-white font-semibold">{filteredEvents.length}</span> events
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative z-10 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Link href={`/events/${event.id}`}>
                  <div className="group relative rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 hover:shadow-glow-purple transition-all cursor-pointer overflow-hidden h-full">
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                      {event.featured && (
                        <span className="px-2 py-1 rounded-full bg-phela-purple/20 text-phela-purple text-xs font-semibold">
                          FEATURED
                        </span>
                      )}
                      {event.trending && (
                        <span className="px-2 py-1 rounded-full bg-danger/20 text-danger text-xs font-semibold flex items-center gap-1">
                          <Flame size={10} /> HOT
                        </span>
                      )}
                    </div>
                    
                    <div className="relative z-10 p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{event.image}</div>
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => { e.preventDefault(); toggleSave(event.id); }}
                            className={`w-8 h-8 rounded-full bg-midnight/50 flex items-center justify-center transition-colors ${
                              savedEvents.includes(event.id) ? "text-danger" : "text-text-muted hover:text-danger"
                            }`}
                          >
                            <Heart size={14} fill={savedEvents.includes(event.id) ? "currentColor" : "none"} />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-midnight/50 flex items-center justify-center text-text-muted hover:text-white transition-colors">
                            <Share2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="font-display font-semibold text-white mb-1 group-hover:text-phela-purple transition-colors line-clamp-1">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-1">{event.venue}</p>
                      
                      <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                        <Calendar size={12} />
                        {event.date}
                        <span className="text-text-muted">•</span>
                        <Clock size={12} />
                        {event.time}
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-phela-purple font-display font-bold">{event.price}</span>
                        <span className="text-text-muted text-sm flex items-center gap-1">
                          <Users size={12} /> {event.attendees}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">No events found</h3>
              <p className="text-text-secondary mb-6">Try adjusting your search or filters</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="px-6 py-3 rounded-xl phela-gradient text-white font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Bottom Nav - Consistent with Home */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between h-14 px-2 py-2 rounded-2xl bg-slate/70 backdrop-blur-xl border border-white/10">
          <Link href="/" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Home size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Home</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Calendar size={20} className="text-phela-purple" strokeWidth={2.5} />
            <span className="text-[9px] font-medium text-phela-purple">Events</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Search size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Discover</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Heart size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Saved</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <User size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Profile</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}