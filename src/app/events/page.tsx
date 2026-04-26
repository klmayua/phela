"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Bell, 
  User, 
  Calendar, 
  MapPin, 
  Ticket, 
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  Filter,
  SlidersHorizontal,
  X,
  Flame
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
const priceRanges = ["All", "Under KES 1,500", "KES 1,500 - 3,000", "KES 3,000 - 5,000", "Over KES 5,000"];
const sortOptions = ["Recommended", "Trending", "Soonest", "Price: Low to High", "Price: High to Low", "Most Popular"];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Recommended");
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
    <main className="min-h-screen bg-midnight pb-20 md:pb-0">
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-phela-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-[300px] h-[300px] bg-vivid-cyan/8 rounded-full blur-[80px]" />
      </div>

      {/* Header */}
      <header className="relative z-50 sticky top-0 glass">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="w-10 h-10 rounded-full bg-slate flex items-center justify-center text-white hover:text-phela-purple transition-colors">
                <ChevronLeft size={20} />
              </Link>
              <h1 className="font-display text-xl font-bold text-white hidden md:block">Events</h1>
            </div>
            
            <Link href="/" className="font-display text-2xl font-bold text-white">
              PHELA
            </Link>
            
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-slate flex items-center justify-center text-text-secondary hover:text-white transition-colors">
                <Bell size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-phela-purple flex items-center justify-center text-white">
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search & Filters */}
      <section className="relative z-10 py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search events, venues, artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate border border-ash text-white placeholder:text-text-muted focus:outline-none focus:border-phela-purple focus:shadow-glow-purple transition-all"
            />
          </div>

          {/* Filter Tabs - Horizontal Scroll */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                showFilters ? "bg-phela-purple border-phela-purple text-white" : "bg-slate border-ash text-text-secondary hover:border-phela-purple"
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
                    : "bg-slate border-ash text-text-secondary hover:border-phela-purple hover:text-white"
                }`}
              >
                <span className="text-sm font-medium whitespace-nowrap">{cat}</span>
              </motion.button>
            ))}
          </div>

          {/* Expanded Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 mt-4 border-t border-ash">
                  {/* Price Range */}
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Price Range</label>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setSelectedPrice(range)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            selectedPrice === range
                              ? "bg-phela-purple text-white"
                              : "bg-slate text-text-secondary hover:text-white"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Sort By</label>
                    <div className="flex flex-wrap gap-2">
                      {sortOptions.map((sort) => (
                        <button
                          key={sort}
                          onClick={() => setSelectedSort(sort)}
                          className={`px-3 py-2 rounded-lg text-sm transition-all ${
                            selectedSort === sort
                              ? "bg-phela-purple text-white"
                              : "bg-slate text-text-secondary hover:text-white"
                          }`}
                        >
                          {sort}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-text-secondary text-sm mb-2">Date</label>
                    <div className="flex gap-2">
                      {["Today", "Tomorrow", "This Week", "This Month"].map((date) => (
                        <button
                          key={date}
                          className="px-3 py-2 rounded-lg text-sm bg-slate text-text-secondary hover:text-white transition-all"
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results Count */}
      <section className="relative z-10 px-4 md:px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-text-secondary">
            <span className="text-white font-semibold">{filteredEvents.length}</span> events found
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative z-10 py-4 px-4 md:px-6">
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
                  <div className="group relative rounded-2xl bg-slate border border-ash hover:border-phela-purple hover:shadow-glow-purple transition-all cursor-pointer overflow-hidden h-full">
                    {/* Featured/Trending Badge */}
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
                    
                    <div className="absolute inset-0 dark-luxe" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                    
                    <div className="relative z-10 p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{event.image}</div>
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

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-xl font-bold text-white mb-2">No events found</h3>
              <p className="text-text-secondary mb-6">Try adjusting your filters or search query</p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedPrice("All"); }}
                className="px-6 py-3 rounded-xl bg-phela-purple text-white font-semibold hover:shadow-glow-purple transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass md:hidden z-50">
        <div className="flex items-center justify-around py-3">
          {[
            { icon: Calendar, label: "Home", href: "/", active: false },
            { icon: Ticket, label: "Events", href: "/events", active: true },
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