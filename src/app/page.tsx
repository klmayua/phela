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
  Crown
} from "lucide-react";

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

const featuredEvent = {
  id: 1,
  title: "Midnight Sessions Vol. 42",
  venue: "Club Cubic, Nairobi",
  date: "Saturday, April 26",
  time: "10PM - 4AM",
  price: "KES 2,500",
  attendees: 847,
  heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1000&fit=crop",
};

export default function CinematicHomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const smoothY = useSpring(y1, { stiffness: 100, damping: 30 });

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

      {/* Floating Navbar */}
      <motion.nav style={{ opacity }} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
        <div className="flex items-center justify-between h-[74px] px-6 rounded-full bg-slate/45 backdrop-blur-xl border border-white/8 shadow-2xl glow-purple-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 relative rounded-full overflow-hidden shadow-glow-purple">
              <Image src="/assets/phela_logo.png" alt="PHELA" fill className="object-contain bg-black" />
            </div>
            <span className="font-display text-[28px] font-extrabold tracking-wider text-white bg-gradient-to-r from-white to-cfceff bg-clip-text text-transparent hidden md:block">
              PHELA
            </span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="font-sans text-base font-medium text-white/82 hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/82 hover:text-white transition-colors">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/82 hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/82 hover:text-white transition-colors">
              <Wallet size={18} />
            </button>
            <button className="w-10 h-10 rounded-full phela-gradient flex items-center justify-center text-white shadow-glow-purple">
              <User size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-0 left-0 right-0 z-40 pt-24 px-6 md:hidden">
            <div className="bg-slate/95 backdrop-blur-xl rounded-3xl border border-white/8 p-6">
              {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="block py-3 text-lg font-medium text-white border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </Link>
              ))}
              <button className="w-full mt-4 py-3 rounded-xl phela-gradient text-white font-semibold">Get Access</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[88vh] flex items-center py-24 md:py-32 px-[4%]">
        <div className="w-full max-w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-center">
          
          {/* Left Column */}
          <motion.div className="max-w-[650px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-vivid-cyan/12 border border-vivid-cyan/35 mb-8">
              <span className="w-2 h-2 rounded-full bg-vivid-cyan animate-pulse" />
              <Sparkles size={14} className="text-vivid-cyan" />
              <span className="text-vivid-cyan text-sm font-bold tracking-widest">LIVE FROM NAIROBI</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-[72px] md:text-[8vw] lg:text-[118px] font-extrabold leading-[0.88] tracking-[-0.04em] text-white mb-6">
              NAIROBI'S
              <br />
              NIGHTLIFE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-phela-purple to-vivid-cyan">PULSE</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-sans text-2xl text-white/78 leading-[1.6] max-w-[620px] mb-10">
              Discover concerts, rooftop sessions, exclusive lounges, premium tables, and unforgettable nights across Nairobi.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="font-sans font-semibold text-lg h-[60px] px-[34px] rounded-full phela-gradient text-white hover:shadow-glow-purple flex items-center justify-center gap-2">
                <Ticket size={20} />
                Explore Events
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="font-sans font-medium text-lg h-[60px] px-[34px] rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Reel
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Featured Event */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="hidden lg:block">
            <Link href={`/events/${featuredEvent.id}`}>
              <div className="relative h-[640px] rounded-[28px] overflow-hidden group cursor-pointer">
                <Image src={featuredEvent.heroImage} alt={featuredEvent.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/15 to-black/15" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-vivid-cyan/20 backdrop-blur-sm border border-vivid-cyan/30 text-vivid-cyan text-xs font-bold">FEATURED</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-[42px] font-extrabold text-white mb-2 leading-tight">{featuredEvent.title}</h3>
                  <p className="text-white/75 text-lg mb-4">{featuredEvent.venue}</p>
                  <div className="flex items-center gap-6 text-white/62 text-sm mb-6">
                    <span className="flex items-center gap-2"><MapPin size={16} /> {featuredEvent.date}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> {featuredEvent.time}</span>
                    <span className="flex items-center gap-2"><Users size={16} /> {featuredEvent.attendees} going</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/52 text-sm">From</p>
                      <p className="font-display text-[34px] font-extrabold text-white">{featuredEvent.price}</p>
                    </div>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-sans font-semibold px-8 py-4 rounded-full phela-gradient text-white hover:shadow-glow-purple">
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mobile Featured Card */}
      <section className="relative z-10 lg:hidden px-6 pb-8">
        <Link href={`/events/${featuredEvent.id}`}>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image src={featuredEvent.heroImage} alt={featuredEvent.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 rounded-full bg-vivid-cyan/20 text-vivid-cyan text-xs font-bold">FEATURED</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-display text-2xl font-bold text-white mb-1">{featuredEvent.title}</h3>
              <p className="text-white/75 text-sm mb-3">{featuredEvent.date}</p>
              <div className="flex items-center justify-between">
                <span className="text-phela-purple font-bold">{featuredEvent.price}</span>
                <span className="px-4 py-2 rounded-full bg-phela-purple text-white text-sm font-semibold">Book Now</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Trending Now */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-display text-2xl font-bold text-white">Trending Now</h2>
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            <Flame className="text-danger" size={20} />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            {trendingEvents.map((event, index) => (
              <motion.div key={event.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 * index }} className="flex-shrink-0 w-72">
                <Link href={`/events/${event.id}`}>
                  <div className="group relative rounded-2xl bg-slate/50 border border-white/5 hover:border-phela-purple/50 transition-all overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-phela-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{event.image}</div>
                        {event.trending && <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-danger/20 text-danger text-xs font-semibold"><Flame size={10} /> HOT</span>}
                      </div>
                      <h3 className="font-display font-semibold text-white mb-1 group-hover:text-phela-purple">{event.title}</h3>
                      <p className="text-text-secondary text-sm mb-1">{event.venue}</p>
                      <p className="text-text-muted text-sm mb-3">{event.date}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-phela-purple font-semibold">{event.price}</span>
                        <span className="text-text-muted text-sm flex items-center gap-1"><Users size={12} /> {event.attendees}</span>
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

      {/* Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass md:hidden">
        <div className="flex items-center justify-around py-3">
          {[
            { icon: Sparkles, label: "Home", href: "/", active: true },
            { icon: Calendar, label: "Events", href: "/events", active: false },
            { icon: Search, label: "Discover", href: "/discover", active: false },
            { icon: Heart, label: "Saved", href: "/saved", active: false },
            { icon: User, label: "Profile", href: "/profile", active: false },
          ].map((item) => (
            <Link key={item.label} href={item.href} className={`flex flex-col items-center gap-1 p-2 ${item.active ? "text-phela-purple" : "text-text-muted"}`}>
              <item.icon size={20} />
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}