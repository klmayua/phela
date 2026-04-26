"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
  Clock,
  Users,
  Flame,
  Play,
  Wallet,
  Menu,
  X,
  Droplets,
  Sparkles,
  TrendingUp,
  Star,
  Crown
} from "lucide-react";

const heroImages = [
  { emoji: "🎵", gradient: "from-purple-600/40" },
  { emoji: "🔥", gradient: "from-orange-600/30" },
  { emoji: "🎤", gradient: "from-pink-600/30" },
  { emoji: "⚡", gradient: "from-cyan-600/30" },
];

const trendingEvents = [
  { id: 1, title: "Midnight Sessions Vol. 42", venue: "Club Cubic", date: "Tonight", price: "KES 2,500", image: "🎵", attendees: 847, trending: true },
  { id: 2, title: "Afrobeat Sunday", venue: "The Garage", date: "Tomorrow", price: "KES 1,500", image: "🔥", attendees: 234 },
  { id: 3, title: "Rooftop Vibes", venue: "360° Terrace", date: "Sat", price: "KES 3,000", image: "🌙", attendees: 156 },
  { id: 4, title: "Amapiano Takeover", venue: "Sky Lounge", date: "Sat", price: "KES 2,800", image: "🔥", attendees: 412 },
  { id: 5, title: "Jazz Night Live", venue: "The Vault", date: "Sun", price: "KES 2,000", image: "🎷", attendees: 89 },
  { id: 6, title: "Electronic Dreams", venue: "Flux Club", date: "Sun", price: "KES 2,200", image: "⚡", attendees: 298 },
];

const artists = [
  { id: 1, name: "Sauti Sol", plays: "1.2M", icon: "🎤", verified: true },
  { id: 2, name: "Diamond", plays: "890K", icon: "🔥", verified: true },
  { id: 3, name: "Nadia", plays: "567K", icon: "💜", verified: true },
  { id: 4, name: "Fathermoh", plays: "423K", icon: "🎤", verified: false },
  { id: 5, name: "Zuchu", plays: "2.1M", icon: "⚡", verified: true },
];

const venues = [
  { id: 1, name: "Club Cubic", status: "live", capacity: 500, type: "Club" },
  { id: 2, name: "The Garage", status: "open", capacity: 300, type: "Live House" },
  { id: 3, name: "Sky Lounge", status: "vip", capacity: 150, type: "Rooftop" },
  { id: 4, name: "The Vault", status: "open", capacity: 200, type: "Jazz Bar" },
];

const merch = [
  { id: 1, name: "Midnight Sessions Tee", price: "KES 3,500", icon: "👕", available: true },
  { id: 2, name: "Phela Hoodie", price: "KES 6,500", icon: "🧥", available: true },
  { id: 3, name: "Capsule Cap", price: "KES 2,000", icon: "🧢", available: false },
  { id: 4, name: "Energy Badge", price: "KES 800", icon: "🏷️", available: true },
];

export default function CinematicHomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const smoothY = useSpring(y1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-midnight overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        {heroImages.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-midnight transition-opacity duration-1500 ${
              index === heroIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-[300px]">{item.emoji}</span>
            </div>
          </div>
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5,5,7,0.4) 100%)' }} />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-phela-purple/30"
            initial={{
              x: `${(i * 5) % 100}%`,
              y: 0,
            }}
            animate={{
              y: -1000,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Floating Navbar */}
      <motion.nav
        style={{ opacity }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
      >
        <div className="flex items-center justify-between h-[74px] px-6 rounded-full bg-slate/45 backdrop-blur-xl border border-white/8 shadow-2xl glow-purple-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 relative rounded-full overflow-hidden">
              <Image 
                src="/assets/phela_logo.png" 
                alt="PHELA" 
                fill 
                className="object-contain bg-black"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-widest text-white hidden md:block">PHELA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white transition-colors">
              <Wallet size={18} />
            </button>
            <button className="w-10 h-10 rounded-full phela-gradient flex items-center justify-center text-white shadow-glow-purple">
              <User size={18} />
            </button>
            
            {/* Mobile Menu */}
            <button 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-40 pt-24 px-6 md:hidden"
          >
            <div className="bg-slate/95 backdrop-blur-xl rounded-3xl border border-white/8 p-6">
              {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block py-3 text-lg font-medium text-white border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="w-full mt-4 py-3 rounded-xl phela-gradient text-white font-semibold">
                Get Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content - Bottom Left */}
      <motion.div 
        style={{ y: smoothY }}
        className="relative z-10 flex flex-col justify-end min-h-screen pb-24 md:pb-16 px-6 md:px-[7%]"
      >
        <div className="max-w-2xl">
          {/* Glowing Pretitle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vivid-cyan/15 border border-vivid-cyan/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-vivid-cyan animate-pulse" />
            <Sparkles size={14} className="text-vivid-cyan" />
            <span className="text-vivid-cyan text-xs font-bold tracking-widest">LIVE FROM NAIROBI</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-[92px] font-black leading-[0.9] text-white mb-6"
          >
            AFRICA'S
            <br />
            <span className="text-transparent bg-clip-text phela-gradient">ENTERTAINMENT</span>
            <br />
            CAPITAL
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary max-w-lg mb-8"
          >
            Premium events. Exclusive access. Culture, nightlife and unforgettable experiences— all in one pulse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="phela-gradient text-white font-display font-semibold h-14 px-8 rounded-full hover:shadow-glow-purple flex items-center justify-center gap-2"
            >
              <Ticket size={18} />
              Explore Events
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/5 border border-white/10 text-white font-display font-semibold h-14 px-8 rounded-full hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Play size={18} />
              Watch Reel
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Event Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="hidden lg:block fixed right-8 bottom-24 z-20 w-[420px]"
      >
        <div className="bg-slate/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          {/* Event Card Header */}
          <div className="relative h-32 bg-gradient-to-br from-phela-purple/30 to-midnight">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/assets/phela_logo.png" 
                  alt="PHELA" 
                  fill 
                  className="object-contain opacity-30"
                />
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-vivid-cyan/20 text-vivid-cyan text-xs font-bold">FEATURED</span>
            </div>
          </div>
          
          {/* Card Body */}
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Midnight Sessions Vol. 42</h3>
                <p className="text-text-secondary text-sm">Club Cubic Nairobi</p>
              </div>
              <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate border-2 border-slate flex items-center justify-center text-sm">
                    👤
                  </div>
                ))}
                <span className="w-8 h-8 rounded-full bg-phela-purple flex items-center justify-center text-xs text-white">+844</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-text-muted text-sm mb-4">
              <span className="flex items-center gap-1"><Clock size={14} /> 10PM - 4AM</span>
              <span className="flex items-center gap-1"><Users size={14} /> 847 going</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-muted text-xs">From</p>
                <p className="font-display text-xl font-bold text-white">KES 2,500</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="phela-gradient px-6 py-3 rounded-full text-white font-semibold hover:shadow-glow-purple"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trending Now - Horizontal Scroll */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Trending Now</h2>
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            <Flame className="text-danger" size={20} />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {trendingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="flex-shrink-0 w-72"
              >
                <Link href={`/events/${event.id}`}>
                  <div className="group relative rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-phela-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{event.image}</div>
                        {event.trending && (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-danger/20 text-danger text-xs font-semibold">
                            <Flame size={10} /> HOT
                          </span>
                        )}
                      </div>
                      
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Venues */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Live Venues</h2>
            <Link href="/venues" className="text-phela-purple text-sm font-medium hover:text-white transition-colors">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/venues/${venue.id}`}>
                  <div className="group p-5 rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate flex items-center justify-center">
                        <Droplets className={
                          venue.status === "live" ? "text-danger" : 
                          venue.status === "vip" ? "text-warning" : "text-success"
                        } size={18} />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        venue.status === "live" ? "bg-danger/20 text-danger" :
                        venue.status === "vip" ? "bg-warning/20 text-warning" :
                        "bg-success/20 text-success"
                      }`}>
                        {venue.status === "live" ? "LIVE" : venue.status === "vip" ? "VIP" : "OPEN"}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-1 group-hover:text-phela-purple transition-colors">
                      {venue.name}
                    </h3>
                    <p className="text-text-muted text-sm">{venue.type} • {venue.capacity} capacity</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Artists */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-white">Artist Spotlight</h2>
              <Star className="text-warning" size={20} />
            </div>
            <Link href="/artists" className="text-phela-purple text-sm font-medium hover:text-white transition-colors">
              See all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={`/artists/${artist.id}`}>
                  <div className="group text-center p-5 rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all">
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate flex items-center justify-center text-4xl mb-3">
                      {artist.icon}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <h3 className="font-display font-semibold text-white">{artist.name}</h3>
                      {artist.verified && <Crown className="text-warning" size={14} />}
                    </div>
                    <p className="text-text-muted text-sm">{artist.plays} plays</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Drop */}
      <section className="relative z-10 py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-white">Merch Drop</h2>
              <span className="px-2 py-1 rounded-full bg-phela-purple/20 text-phela-purple text-xs font-bold">NEW</span>
            </div>
            <Link href="/merch" className="text-phela-purple text-sm font-medium hover:text-white transition-colors">
              Shop all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {merch.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`p-5 rounded-2xl bg-slate/50 border border-white/5 ${item.available ? 'hover:border-phela-purple/50' : 'opacity-50'} transition-all`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-semibold text-white mb-1">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-phela-purple font-semibold">{item.price}</span>
                    {!item.available && (
                      <span className="text-text-muted text-xs">Sold out</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass md:hidden">
        <div className="flex items-center justify-around py-3">
          {[
            { icon: Sparkles, label: "Home", href: "/", active: true },
            { icon: Calendar, label: "Events", href: "/events", active: false },
            { icon: Search, label: "Discover", href: "/discover", active: false },
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