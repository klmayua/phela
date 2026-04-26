"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  Bell, 
  User, 
  Calendar, 
  MapPin, 
  Ticket, 
  Heart,
  Share2,
  ChevronRight,
  Play,
  Clock,
  Users,
  Sparkles
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
  trending?: boolean;
}

const featuredEvent: Event = {
  id: 1,
  title: "Midnight Sessions Vol. 42",
  venue: "Club Cubic, Nairobi",
  date: "Saturday, April 26",
  time: "10PM - 4AM",
  price: "KES 2,500",
  image: "🎵",
  category: "Afrobeat",
  attendees: 847,
  trending: true,
};

const events: Event[] = [
  { id: 2, title: "Afrobeat Sunday", venue: "The Garage", date: "April 27", time: "4PM - 11PM", price: "KES 1,500", image: "🔥", category: "Afrobeat", attendees: 234 },
  { id: 3, title: "Rooftop Vibes", venue: "360° Terrace", date: "April 28", time: "6PM - 2AM", price: "KES 3,000", image: "🌙", category: "Hip Hop", attendees: 156 },
  { id: 4, title: "Jazz Night Live", venue: "The Vault", date: "April 29", time: "7PM - 12AM", price: "KES 2,000", image: "🎷", category: "Jazz", attendees: 89 },
  { id: 5, title: "Amapiano takeover", venue: "Sky Lounge", date: "April 30", time: "9PM - 3AM", price: "KES 2,800", image: "🔥", category: "Amapiano", attendees: 412 },
  { id: 6, title: "Electronic Dreams", venue: "Flux club", date: "May 1", time: "10PM - 4AM", price: "KES 2,200", image: "⚡", category: "Electronic", attendees: 298 },
  { id: 7, title: "RNB Slow Jams", venue: "Blue Note", date: "May 2", time: "8PM - 2AM", price: "KES 1,800", image: "💜", category: "RNB", attendees: 167 },
  { id: 8, title: "Hip Hop Cypher", venue: "Urban Edge", date: "May 3", time: "9PM - 3AM", price: "KES 1,200", image: "🎤", category: "Hip Hop", attendees: 445 },
];

const categories = [
  { id: 1, name: "Afrobeat", icon: "🎶", count: 234 },
  { id: 2, name: "Hip Hop", icon: "🎤", count: 189 },
  { id: 3, name: "RNB", icon: "💜", count: 156 },
  { id: 4, name: "Amapiano", icon: "🔥", count: 312 },
  { id: 5, name: "Jazz", icon: "🎷", count: 98 },
  { id: 6, name: "Electronic", icon: "⚡", count: 145 },
];

const artists = [
  { id: 1, name: "Sauti Sol", image: "👤", followers: "1.2M" },
  { id: 2, name: "Diamond", image: "👤", followers: "890K" },
  { id: 3, name: "Nadia", image: "👤", followers: "567K" },
  { id: 4, name: "Fathermoh", image: "👤", followers: "423K" },
  { id: 5, name: "Zuchu", image: "👤", followers: "2.1M" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-midnight pb-20 md:pb-0">
      {/* Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-phela-purple/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-40 right-0 w-[400px] h-[400px] bg-vivid-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-indigo/5 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 sticky top-0 glass">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-display text-2xl font-bold text-white">
              PHELA
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/events" className="text-text-secondary hover:text-white transition-colors">Events</Link>
              <Link href="/artists" className="text-text-secondary hover:text-white transition-colors">Artists</Link>
              <Link href="/venues" className="text-text-secondary hover:text-white transition-colors">Venues</Link>
              <Link href="/discover" className="text-text-secondary hover:text-white transition-colors">Discover</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-slate flex items-center justify-center text-text-secondary hover:text-white transition-colors">
                <Search size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate flex items-center justify-center text-text-secondary hover:text-white transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
              </button>
              <button className="w-10 h-10 rounded-full bg-phela-purple flex items-center justify-center text-white hover:shadow-glow-purple transition-shadow">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-8 pb-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate/80 border border-ash text-vivid-cyan text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <Sparkles size={14} />
              <span className="font-medium">LIVE IN NAIROBI</span>
            </motion.div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              ENTER THE PULSE
              <br />
              <span className="text-transparent bg-clip-text phela-gradient">OF AFRICA</span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Premium events, exclusive access, and the hottest nightlife experiences 
              across the continent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="phela-gradient text-white font-display font-semibold h-14 px-8 rounded-2xl hover:shadow-glow-purple transition-shadow flex items-center justify-center gap-2"
              >
                <Ticket size={18} />
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border border-ash text-white font-display font-semibold h-14 px-8 rounded-2xl hover:border-vivid-cyan hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
              >
                <Play size={18} />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Featured Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href={`/events/${featuredEvent.id}`}>
              <div className="group relative overflow-hidden rounded-3xl bg-slate border border-ash hover:border-phela-purple hover:shadow-glow-purple transition-all cursor-pointer">
                {/* Background gradient */}
                <div className="absolute inset-0 dark-luxe opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-phela-purple/30 rounded-full blur-[80px] group-hover:bg-phela-purple/50 transition-all" />
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="label-caps text-vivid-cyan">FEATURED EVENT</span>
                        <span className="text-text-muted">•</span>
                        <span className="text-text-secondary text-sm">{featuredEvent.date}</span>
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-phela-purple transition-colors">
                        {featuredEvent.title}
                      </h2>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-text-secondary">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-phela-purple" />
                          {featuredEvent.venue}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-phela-purple" />
                          {featuredEvent.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-phela-purple" />
                          {featuredEvent.attendees} attending
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-text-muted text-sm mb-1">From</p>
                        <p className="font-display text-2xl font-bold text-white">{featuredEvent.price}</p>
                      </div>
                      <div className="phela-gradient w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <ChevronRight size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative z-10 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Browse by Vibe</h2>
            <Link href="/events" className="text-phela-purple text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link href={`/events?category=${cat.name}`}>
                  <div className="group relative p-6 rounded-2xl bg-slate border border-ash hover:border-phela-purple hover:shadow-glow-purple transition-all cursor-pointer text-center">
                    <span className="text-4xl block mb-3">{cat.icon}</span>
                    <h3 className="font-display font-semibold text-white mb-1">{cat.name}</h3>
                    <p className="text-text-muted text-sm">{cat.count} events</p>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-phela-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Events */}
      <section className="relative z-10 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-white">Trending Now</h2>
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            </div>
            <Link href="/events?sort=trending" className="text-phela-purple text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.slice(0, 4).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Link href={`/events/${event.id}`}>
                  <div className="group relative rounded-2xl bg-slate border border-ash hover:border-phela-purple hover:shadow-glow-purple transition-all cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 dark-luxe" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                    
                    <div className="relative z-10 p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{event.image}</div>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 rounded-full bg-midnight/50 flex items-center justify-center text-text-muted hover:text-danger transition-colors">
                            <Heart size={14} />
                          </button>
                          <button className="w-8 h-8 rounded-full bg-midnight/50 flex items-center justify-center text-text-muted hover:text-white transition-colors">
                            <Share2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {event.trending && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-danger/20 text-danger text-xs font-medium mb-3">
                          <Sparkles size={10} /> TRENDING
                        </span>
                      )}
                      
                      <h3 className="font-display font-semibold text-white mb-1 group-hover:text-phela-purple transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary text-sm mb-1">{event.venue}</p>
                      
                      <div className="flex items-center gap-2 text-text-muted text-sm mb-3">
                        <Calendar size={12} />
                        {event.date}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-phela-purple font-semibold">{event.price}</span>
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
        </div>
      </section>

      {/* More Events */}
      <section className="relative z-10 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">More Events</h2>
            <Link href="/events" className="text-phela-purple text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.slice(4).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              >
                <Link href={`/events/${event.id}`}>
                  <div className="group rounded-2xl bg-slate border border-ash hover:border-phela-purple hover:shadow-glow-purple transition-all cursor-pointer p-5">
                    <div className="text-3xl mb-4">{event.image}</div>
                    <h3 className="font-display font-semibold text-white mb-1 group-hover:text-phela-purple transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-1">{event.venue}</p>
                    <p className="text-text-muted text-sm mb-3">{event.date}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-phela-purple font-semibold">{event.price}</span>
                      <span className="text-text-muted text-sm flex items-center gap-1">
                        <Users size={12} /> {event.attendees}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Artists */}
      <section className="relative z-10 py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Top Artists</h2>
            <Link href="/artists" className="text-phela-purple text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-5">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <Link href={`/artists/${artist.id}`}>
                  <div className="group text-center cursor-pointer">
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate border-2 border-ash group-hover:border-phela-purple group-hover:shadow-glow-purple transition-all flex items-center justify-center text-3xl mb-3">
                      {artist.image}
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm mb-1">{artist.name}</h3>
                    <p className="text-text-muted text-xs">{artist.followers} followers</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 glass md:hidden z-50">
        <div className="flex items-center justify-around py-3">
          {[
            { icon: Calendar, label: "Home", href: "/", active: true },
            { icon: Ticket, label: "Events", href: "/events", active: false },
            { icon: Search, label: "Explore", href: "/discover", active: false },
            { icon: Heart, label: "Saved", href: "/saved", active: false },
            { icon: User, label: "Profile", href: "/profile", active: false },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                item.active ? "text-phela-purple" : "text-text-muted"
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}