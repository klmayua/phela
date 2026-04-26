"use client";

import { useState, useRef } from "react";
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
  ChevronLeft,
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
  Star,
  Crown,
  Home
} from "lucide-react";

const trendingEvents = [
  { id: "midnight-sessions-vol-42", title: "Midnight Sessions Vol. 42", venue: "Club Cubic", date: "Tonight", price: "KES 2,500", image: "🎵", attendees: 847, trending: true },
  { id: "afrobeat-sunday", title: "Afrobeat Sunday", venue: "The Garage", date: "Tomorrow", price: "KES 1,500", image: "🔥", attendees: 234 },
  { id: "rooftop-vibes", title: "Rooftop Vibes", venue: "360° Terrace", date: "Sat", price: "KES 3,000", image: "🌙", attendees: 156 },
  { id: "amapiano-takeover", title: "Amapiano Takeover", venue: "Sky Lounge", date: "Sat", price: "KES 2,800", image: "🔥", attendees: 412 },
  { id: "jazz-night-live", title: "Jazz Night Live", venue: "The Vault", date: "Sun", price: "KES 2,000", image: "🎷", attendees: 89 },
  { id: "electronic-dreams", title: "Electronic Dreams", venue: "Flux Club", date: "Sun", price: "KES 2,200", image: "⚡", attendees: 298 },
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

const featuredEvent = {
  id: "midnight-sessions-vol-42",
  title: "Midnight Sessions Vol. 42",
  venue: "Club Cubic, Nairobi",
  date: "Saturday, April 26",
  time: "10PM - 4AM",
  price: "KES 2,500",
  attendees: 847,
  heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1000&fit=crop",
};

export default function CinematicHomePage() {
  const [trendingIndex, setTrendingIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const smoothY = useSpring(y1, { stiffness: 100, damping: 30 });

  const scrollLeft = () => setTrendingIndex(prev => Math.max(0, prev - 1));
  const scrollRight = () => setTrendingIndex(prev => Math.min(trendingEvents.length - 1, prev + 1));

  return (
    <main ref={containerRef} className="min-h-screen bg-midnight overflow-x-hidden font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-phela-purple/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-vivid-cyan/15 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div key={i} className="absolute w-[2px] h-[2px] rounded-full bg-phela-purple/40"
            initial={{ x: `${(i * 7) % 100}%`, y: 0 }}
            animate={{ y: -1200, opacity: [0, 0.8, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 0.8 }}
          />
        ))}
      </div>

{/* Floating Navbar - Sticky Premium Glassmorphism */}
      <motion.nav style={{ opacity }} className="fixed top-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 z-50 md:w-[94%] md:max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 md:h-[72px] px-4 md:px-6 rounded-2xl md:rounded-full bg-slate/25 backdrop-blur-2xl md:bg-slate/30 border border-white/[0.03] md:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-14 md:h-14 relative rounded-full overflow-hidden shadow-[0_0_20px_rgba(111,70, 255, 0.3)]">
              <Image src="/assets/phela_logo.png" alt="PHELA" fill className="object-contain bg-black" />
            </div>
            <span className="font-display text-base md:text-xl font-light tracking-[0.12em] md:tracking-[0.18em] text-white/60 md:text-white/70 group-hover:text-white/90 transition-all">
              PHELA
            </span>
          </Link>

          {/* Nav Items - Desktop Only */}
          <div className="hidden md:flex items-center gap-8">
            {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="relative font-sans text-[14px] font-medium text-white/55 hover:text-white transition-all duration-300 group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-phela-purple to-vivid-cyan group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Right Actions - Desktop Icons + Mobile Menu */}
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
            {/* Mobile - consistent with bottom nav */}
            <div className="md:hidden flex items-center gap-1">
              <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
                <Calendar size={18} className="text-white/60" strokeWidth={1.5} />
              </Link>
              <Link href="/discover" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
                <Search size={18} className="text-white/60" strokeWidth={1.5} />
              </Link>
              <button className="w-8 h-8 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo flex items-center justify-center text-white shadow-[0_2px_12px_rgba(111,70,255,0.4)]">
                <User size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

{/* Hero Section - Featured Event First */}
      <section className="relative z-10 min-h-[55vh] md:min-h-[80vh] flex items-center pt-20 pb-4 md:py-20 px-3 md:px-6">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[48%_52%] gap-6 md:gap-10 items-center">
          
          {/* Left Column - Featured Event */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="">
            <Link href={`/events/${featuredEvent.id}`}>
              <div className="relative h-[320px] md:h-[500px] lg:h-[640px] rounded-2xl md:rounded-[28px] overflow-hidden group cursor-pointer">
                <Image src={featuredEvent.heroImage} alt={featuredEvent.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(111,70,255,0.15),transparent_50%)]" />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="absolute top-4 md:top-6 left-4 md:left-6 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-phela-purple/40 text-phela-purple text-xs font-bold shadow-[0_0_20px_rgba(111,70,255,0.3)]">FEATURED</span>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <h3 className="font-display text-[28px] md:text-[42px] font-extrabold text-white mb-2 md:mb-3 leading-tight drop-shadow-lg">{featuredEvent.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium flex items-center gap-2">
                      <MapPin size={14} className="text-vivid-cyan" /> {featuredEvent.venue}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white/80 text-xs md:text-sm mb-4 md:mb-6">
                    <span className="flex items-center gap-2 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm"><MapPin size={14} className="text-vivid-cyan" /> {featuredEvent.date}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> {featuredEvent.time}</span>
                    <span className="flex items-center gap-2"><Users size={14} /> {featuredEvent.attendees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs md:text-sm">From</p>
                      <p className="font-display text-[24px] md:text-[34px] font-extrabold text-white drop-shadow-lg">{featuredEvent.price}</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-sans font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full phela-gradient text-white hover:shadow-glow-purple">
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Column - Tagline */}
          <motion.div className="max-w-[650px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-vivid-cyan/10 border border-vivid-cyan/25 mb-4 md:mt-2 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-vivid-cyan animate-pulse" />
              <Sparkles size={12} className="text-vivid-cyan" />
              <span className="text-vivid-cyan text-xs md:text-sm font-bold tracking-widest">LIVE FROM NAIROBI</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-[36px] md:text-[6vw] lg:text-[90px] font-bold leading-[0.9] tracking-[-0.02em] text-white mb-3 md:mb-5">
              NAIROBI'S
              <br />
              NIGHTLIFE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-phela-purple to-vivid-cyan">PULSE</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white/55 text-sm md:text-base lg:text-lg max-w-md mb-6 md:mb-8">
              Discover Nairobi's hottest events, exclusive parties, and unforgettable nights. Your gateway to the city's vibrant nightlife.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="font-sans font-semibold text-base md:text-base h-12 md:h-12 px-6 md:px-7 rounded-full phela-gradient text-white hover:shadow-glow-purple flex items-center justify-center gap-2">
                <Ticket size={18} />
                Explore Events
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="font-sans font-medium text-base md:text-base h-12 md:h-12 px-6 md:px-7 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center gap-2">
                <Play size={18} />
                Watch Reel
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Featured Card */}
      <section className="relative z-10 lg:hidden px-4 pb-24 md:pb-8">
        <Link href={`/events/${featuredEvent.id}`}>
          <div className="relative h-[280px] rounded-2xl overflow-hidden">
            <Image src={featuredEvent.heroImage} alt={featuredEvent.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 rounded-full bg-vivid-cyan/20 text-vivid-cyan text-xs font-bold">FEATURED</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <h3 className="font-display text-lg font-bold text-white mb-1">{featuredEvent.title}</h3>
              <p className="text-cyan-400 font-medium text-sm mb-2">{featuredEvent.date}</p>
              <div className="flex items-center justify-between">
                <span className="text-phela-purple font-bold">{featuredEvent.price}</span>
                <span className="px-4 py-2 rounded-full bg-phela-purple text-white text-sm font-semibold">Book Now</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Trending Now - Carousel */}
      <section className="relative z-10 py-8 md:py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">Trending Now</h2>
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            <Flame className="text-danger" size={18} />
          </div>
          
          {/* Carousel with Arrows on sides */}
          <div className="relative flex items-center gap-2 md:gap-4">
            {/* Left Arrow */}
            <button onClick={scrollLeft} disabled={trendingIndex === 0} className="hidden md:flex w-10 h-10 shrink-0 rounded-full bg-slate/80 border border-white/10 items-center justify-center text-white/72 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors md:w-12 md:h-12">
              <ChevronLeft size={20} />
            </button>
            
            {/* Card */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={trendingIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <Link href={`/events/${trendingEvents[trendingIndex].id}`}>
                    <div className="group relative rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-phela-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 p-4 md:p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-4xl md:text-5xl">{trendingEvents[trendingIndex].image}</div>
                          {trendingEvents[trendingIndex].trending && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-danger/20 text-danger text-xs font-bold">
                              <Flame size={10} /> HOT
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-phela-purple">
                          {trendingEvents[trendingIndex].title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-1">{trendingEvents[trendingIndex].venue}</p>
                        <p className="text-text-muted text-sm mb-3">{trendingEvents[trendingIndex].date}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-phela-purple font-bold">{trendingEvents[trendingIndex].price}</span>
                          <span className="text-text-muted flex items-center gap-1 text-sm">
                            <Users size={12} /> {trendingEvents[trendingIndex].attendees}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right Arrow */}
            <button onClick={scrollRight} disabled={trendingIndex >= trendingEvents.length - 1} className="hidden md:flex w-10 h-10 shrink-0 rounded-full bg-slate/80 border border-white/10 items-center justify-center text-white/72 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors md:w-12 md:h-12">
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Mobile arrows - icon buttons */}
          <div className="flex md:hidden items-center justify-between mt-4 px-2">
            <button onClick={scrollLeft} disabled={trendingIndex === 0} className="w-12 h-12 rounded-full bg-slate/60 border border-white/10 flex items-center justify-center text-white/70 disabled:opacity-30">
              <ChevronLeft size={22} />
            </button>
            <button onClick={scrollRight} disabled={trendingIndex >= trendingEvents.length - 1} className="w-12 h-12 rounded-full bg-slate/60 border border-white/10 flex items-center justify-center text-white/70 disabled:opacity-30">
              <ChevronRight size={22} />
            </button>
          </div>
          
{/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {trendingEvents.map((_, i) => (
              <button key={i} onClick={() => setTrendingIndex(i)} className={`h-2 rounded-full transition-all ${i === trendingIndex ? "w-6 bg-phela-purple" : "w-2 bg-white/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Venues */}
      <section className="relative z-10 py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Live Venues</h2>
            <Link href="/venues" className="text-phela-purple text-sm font-medium hover:text-white">See all <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {venues.map((venue, index) => (
              <motion.div key={venue.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
                <Link href={`/venues/${venue.id}`}>
                  <div className="group p-5 rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-slate flex items-center justify-center">
                        <Droplets className={venue.status === "live" ? "text-danger" : venue.status === "vip" ? "text-warning" : "text-success"} size={18} />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${venue.status === "live" ? "bg-danger/20 text-danger" : venue.status === "vip" ? "bg-warning/20 text-warning" : "bg-success/20 text-success"}`}>
                        {venue.status === "live" ? "LIVE" : venue.status === "vip" ? "VIP" : "OPEN"}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-1">{venue.name}</h3>
                    <p className="text-text-muted text-sm">{venue.type} • {venue.capacity}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-2xl font-bold text-white">Artist Spotlight</h2>
              <Star className="text-warning" size={20} />
            </div>
            <Link href="/artists" className="text-phela-purple text-sm font-medium hover:text-white">See all <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {artists.map((artist, index) => (
              <motion.div key={artist.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * index }}>
                <Link href={`/artists/${artist.id}`}>
                  <div className="group text-center p-5 rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all">
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate flex items-center justify-center text-4xl mb-3">{artist.icon}</div>
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
            <Link href="/merch" className="text-phela-purple text-sm font-medium hover:text-white">Shop all <ChevronRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {merch.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
                <div className={`p-5 rounded-2xl bg-slate/50 border border-white/5 ${item.available ? 'hover:border-phela-purple/50' : 'opacity-50'} transition-all`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display font-semibold text-white mb-1">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-phela-purple font-semibold">{item.price}</span>
                    {!item.available && <span className="text-text-muted text-xs">Sold out</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Bottom Floating Nav - Consistent with Top Nav */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between h-14 px-2 py-2 rounded-2xl bg-slate/60 backdrop-blur-xl border border-white/5">
          <Link href="/" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Home size={20} className="text-phela-purple" strokeWidth={2.5} />
            <span className="text-[9px] font-medium text-phela-purple">Home</span>
          </Link>
          <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Calendar size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Events</span>
          </Link>
          <Link href="/discover" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Search size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Discover</span>
          </Link>
          <Link href="/membership" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <Heart size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Saved</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
            <User size={20} className="text-white/50" strokeWidth={1.5} />
            <span className="text-[9px] font-medium text-white/40">Profile</span>
          </Link>
        </div>
      </nav>
    </main>
  );
}