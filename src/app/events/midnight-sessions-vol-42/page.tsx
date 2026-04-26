"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Clock, MapPin, Users,Wine, Car, Ticket, ChevronRight, 
  Play, Star, Heart, Share2, Minus, Plus, HelpCircle, MapPinned,
  CreditCard, Smartphone, DollarSign, Instagram, Twitter, Facebook,
  ArrowLeft, Search, Bell, Wallet, User, Sparkles
} from "lucide-react";

const ticketTiers = [
  { name: "Early Bird", price: 2500, original: 4500, available: 23, tier: "bronze" },
  { name: "Standard", price: 4500, original: 4500, available: 87, tier: "silver" },
  { name: "VIP Access", price: 12000, original: 15000, available: 12, tier: "gold" },
  { name: "Platinum Lounge", price: 25000, original: 35000, available: 5, tier: "platinum" },
];

const addOns = [
  { id: "parking", name: "Valet Parking", price: 1500, icon: Car },
  { id: "bottle", name: "Premium Bottle", price: 8000, icon: Wine },
  { id: "merch", name: "Merch Bundle", price: 3500, icon: Sparkles },
  { id: "shuttle", name: "Shuttle Pass", price: 1000, icon: Car },
];

const artists = [
  { name: "DJ BlackCoffee", role: "Main Act", image: "/assets/placeholder_dj.jpg", href: "/artists/dj-blackcoffee" },
  { name: "Sax Vibration", role: "Live Sax", image: "/assets/placeholder_sax.jpg", href: "/artists/sax-vibration" },
  { name: "Mista Flava", role: "Guest", image: "/assets/placeholder_guest.jpg", href: "/artists/mista-flava" },
];

const vipPackages = [
  { name: "Bronze Table", price: 45000, seats: 4, features: ["Queue skip", "Dedicated host", "1 bottle", "Reserved seating"] },
  { name: "Silver Lounge", price: 85000, seats: 6, features: ["Private booth", "Personal server", "2 bottles", "Fast entry"] },
  { name: "Gold Suite", price: 150000, seats: 10, features: ["Luxury suite", "Butler service", "3 bottles", "VIP entrance"] },
  { name: "Black Signature", price: 350000, seats: 20, features: ["Private floor", "Security", "Full bar", "Meet & greet"] },
];

const merch = [
  { name: "Midnight Tee", price: 3500, image: "/assets/placeholder_tee.jpg" },
  { name: "Premium Cap", price: 2500, image: "/assets/placeholder_cap.jpg" },
  { name: "Collector Pass", price: 5000, image: "/assets/placeholder_pass.jpg" },
  { name: "Limited Poster", price: 2000, image: "/assets/placeholder_poster.jpg" },
];

const faqs = [
  { q: "Is there parking available?", a: "Yes, valet parking is available at KES 1,500. Street parking also available." },
  { q: "What's the refund policy?", a: "Full refund if event is cancelled. No refunds for change of plans within 48hrs." },
  { q: "What's the age restriction?", a: "21+ only. Valid ID required at entry." },
  { q: "What's the dress code?", a: "Premium Night Chic - smart casual, no sneakers or sportswear." },
  { q: "Is there security?", a: "Yes, 24/7 security on site. Bag checks at entry." },
  { q: "What items are prohibited?", a: "No outside drinks, weapons, drugs, or professional cameras." },
];

const relatedEvents = [
  { title: " Afro Vibes Sunday", date: "May 3", price: "KES 2,500", image: "/assets/placeholder_event1.jpg", href: "/events/afro-vibes-sunday" },
  { title: "Rooftop Sunset", date: "May 10", price: "KES 3,500", image: "/assets/placeholder_event2.jpg", href: "/events/rooftop-sunset" },
  { title: "Amapiano Madness", date: "May 17", price: "KES 4,000", image: "/assets/placeholder_event3.jpg", href: "/events/amapiano-madness" },
];

export default function EventDetailPage() {
  const [selectedTier, setSelectedTier] = useState(ticketTiers[1]);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const totalPrice = (selectedTier.price * quantity) + addOns.filter(a => selectedAddOns.includes(a.id)).reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="min-h-screen bg-midnight text-white">
      {/* Floating Navbar - Sticky Always */}
      <nav className="fixed top-3 left-3 right-3 md:left-1/2 md:-translate-x-1/2 z-50 md:w-[94%] md:max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 md:h-[72px] px-4 md:px-6 rounded-2xl md:rounded-full bg-slate/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-14 md:h-14 relative rounded-full overflow-hidden shadow-[0_0_20px_rgba(111,70,255,0.3)]">
              <Image src="/assets/phela_logo.png" alt="PHELA" fill className="object-contain bg-black" />
            </div>
            <span className="font-display text-base md:text-xl font-light tracking-[0.12em] md:tracking-[0.18em] text-white/70 group-hover:text-white/90 transition-all">
              PHELA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Discover", "Events", "Artists", "Venues", "Nightlife", "Merch", "Membership"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="relative font-sans text-[14px] font-medium text-white/55 hover:text-white transition-all duration-300 group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-phela-purple to-vivid-cyan group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
              <Search size={16} />
            </button>
            <button className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all relative">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-danger rounded-full" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo flex items-center justify-center text-white shadow-[0_4px_20px_rgba(111,70,255,0.4)]">
              <User size={16} />
            </button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
              <Calendar size={18} className="text-white/60" strokeWidth={1.5} />
            </Link>
            <Link href="/events" className="flex flex-col items-center gap-0.5 p-1.5 rounded-xl">
              <Search size={18} className="text-white/60" strokeWidth={1.5} />
            </Link>
            <button className="w-8 h-8 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo flex items-center justify-center text-white shadow-[0_2px_12px_rgba(111,70,255,0.4)]">
              <User size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href="/events" className="hover:text-white/70 transition-colors">Events</Link>
          <ChevronRight size={14} />
          <span className="text-phela-purple">Midnight Sessions Vol. 42</span>
        </div>
      </div>

      {/* Immersive Hero */}
      <section className="relative h-[75vh] md:h-[85vh] mt-4 mx-3 md:mx-4 rounded-3xl overflow-hidden">
        <Image src="/assets/placeholder_hero.jpg" alt="Midnight Sessions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/20" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-7xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/20 border border-cyan/30 text-cyan-400 text-sm font-semibold mb-4">
              <Sparkles size={14} />
              FEATURED EVENT
            </span>
            
            <h1 className="font-display text-4xl md:text-7xl lg:text-[82px] font-bold mb-4 leading-[0.95]">
              Midnight Sessions<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-phela-purple to-vivid-cyan">Vol. 42</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-6">
              Nairobi's most exclusive late-night music experience— live DJs, premium lounges, elevated dining, and unforgettable energy.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar size={18} className="text-phela-purple" />
                <span>Saturday, 26 April</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock size={18} className="text-phela-purple" />
                <span>10PM — 4AM</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={18} className="text-phela-purple" />
                <span>Club Cubic, Nairobi</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users size={18} className="text-phela-purple" />
                <span>847 attending</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Wine size={18} className="text-phela-purple" />
                <span>21+ only</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#purchase" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo text-white font-semibold shadow-[0_4px_24px_rgba(111,70,255,0.5)]">
                <Ticket size={18} />
                Buy Ticket
              </Link>
              <Link href="#vip" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                <Star size={18} />
                Reserve VIP Table
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all">
                <Play size={18} />
                Watch Trailer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Purchase Strip */}
      <section id="purchase" className="sticky bottom-4 md:bottom-6 z-30 px-3 md:px-4">
        <div className="max-w-7xl mx-auto bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:flex items-center gap-3 px-6 py-4 bg-white/5">
              <span className="text-white/60 text-sm">Select Ticket</span>
            </div>
            <div className="flex-1 overflow-x-auto flex gap-2 px-3 py-3 md:py-4">
              {ticketTiers.map((tier) => (
                <button key={tier.name} onClick={() => setSelectedTier(tier)} className={`flex-shrink-0 px-4 py-2.5 rounded-xl border transition-all ${selectedTier.name === tier.name ? "bg-phela-purple/20 border-phela-purple text-white" : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"}`}>
                  <span className="block text-sm font-medium">{tier.name}</span>
                  <span className="block text-xs text-white/50">KES {tier.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 px-4 py-3 md:py-4 border-t md:border-t-0 md:border-l border-white/10">
              <div className="flex items-center gap-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Plus size={14} />
                </button>
              </div>
              <Link href="/checkout/midnight-sessions-vol-42" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-phela-purple to-electric-indigo text-white font-semibold">
                <span>KES {totalPrice.toLocaleString()}</span>
                <span className="hidden md:inline">Checkout</span>
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[{ icon: Music, label: "Music Style", value: "Afrohouse / Amapiano" }, { icon: Star, label: "Dress Code", value: "Premium Night Chic" }, { icon: Car, label: "Parking", value: "Available" }, { icon: CreditCard, label: "Payment", value: "Cards / M-Pesa" }].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-surface/60 backdrop-blur-xl border border-white/5 rounded-2xl p-4 md:p-5">
                <item.icon size={20} className="text-phela-purple mb-3" />
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-medium text-sm md:text-base">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Lineup */}
      <section className="py-16 px-4 md:px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Tonight's Lineup</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {artists.map((artist, i) => (
              <Link key={i} href={artist.href} className="group">
                <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-3">
                  <Image src={artist.image} alt={artist.name} fill className="object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-phela-purple text-xs font-medium mb-1">{artist.role}</p>
                    <p className="text-white font-bold text-lg">{artist.name}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold">Venue Experience</h2>
            <Link href="#tables" className="flex items-center gap-2 text-phela-purple hover:text-white transition-colors">
              Book Best Table <ChevronRight size={18} />
            </Link>
          </div>
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-surface border border-white/10">
            <Image src="/assets/placeholder_venue.jpg" alt="Venue Map" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-surface/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8 text-center">
                <MapPinned size={32} className="text-phela-purple mx-auto mb-4" />
                <p className="text-white font-medium mb-2">Club Cubic</p>
                <p className="text-white/60 text-sm mb-4">Nairobi's Premier Nightlife Destination</p>
                <Link href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm hover:bg-white/20 transition-all">
                  <MapPin size={14} />
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Experience */}
      <section id="vip" className="py-16 px-4 md:px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Elevate The Night</h2>
          <p className="text-white/60 mb-8">Exclusive VIP packages for an unforgettable experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {vipPackages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 hover:border-phela-purple/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${["bg-amber/20 text-amber", "bg-gray-300/20 text-gray-300", "bg-yellow-500/20 text-yellow-400", "bg-black/40 text-white"][i]}`}>
                    {["Bronze", "Silver", "Gold", "Black"][i]}
                  </span>
                  <span className="text-white/50 text-xs">{pkg.seats} seats</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{pkg.name}</h3>
                <p className="text-phela-purple font-bold text-xl mb-4">KES {pkg.price.toLocaleString()}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-phela-purple" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/events/midnight-sessions-vol-42/vip/${pkg.name.toLowerCase().replace(" ", "-")}`} className="block w-full py-3 rounded-full bg-white/10 text-white text-center text-sm font-medium hover:bg-phela-purple hover:text-white transition-all">
                  Reserve Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Drop */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">Exclusive Event Drop</h2>
              <p className="text-white/60">Limited edition collection</p>
            </div>
            <Link href="/merch/midnight-sessions-drop" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-all">
              Shop Collection <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {merch.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-surface">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <p className="text-white font-medium text-sm mb-1">{item.name}</p>
                <p className="text-phela-purple font-bold">KES {item.price.toLocaleString()}</p>
              </motion.div>
            ))}
          </div>
          
          <Link href="/merch/midnight-sessions-drop" className="md:hidden mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white/10 text-white font-medium">
            Shop Collection <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 md:px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold">What People Say</h2>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="text-amber fill-amber" />
              ))}
              <span className="text-white/80 ml-2">4.9 (247 reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[{ user: "Sarah M.", avatar: "/assets/placeholder_user1.jpg", text: "Best night out in Nairobi! The vibes were immaculate.", date: "2 days ago" }, { user: "DJ Kimani", avatar: "/assets/placeholder_user2.jpg", text: "Played at Cubic last month - incredible crowd energy!", date: "1 week ago" }, { user: "Michelle K.", avatar: "/assets/placeholder_user3.jpg", text: "VIP experience was worth every shilling. Will be back!", date: "2 weeks ago" }].map((review, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-surface/60 backdrop-blur-xl border border-white/5 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10">
                    <Image src={review.avatar} alt={review.user} width={40} height={40} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{review.user}</p>
                    <p className="text-white/50 text-xs">{review.date}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">"{review.text}"</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="text-amber fill-amber" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-surface/60 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronRight size={18} className={`text-white/50 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-white/60 text-sm">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-16 px-4 md:px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Continue The Weekend</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {relatedEvents.map((event, i) => (
              <Link key={i} href={event.href} className="group">
                <motion.div whileHover={{ scale: 1.02 }} className="relative aspect-video rounded-2xl overflow-hidden mb-3">
                  <Image src={event.image} alt={event.title} fill className="object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-cyan-400 text-xs font-medium mb-1">{event.date}</p>
                    <p className="text-white font-bold text-lg">{event.title}</p>
                    <p className="text-phela-purple font-bold">{event.price}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src="/assets/phela_logo.png" alt="PHELA" fill className="object-contain bg-black" />
              </div>
              <span className="font-display text-lg tracking-[0.15em] text-white/70">PHELA</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/discover" className="hover:text-white transition-colors">Discover</Link>
              <Link href="/events" className="hover:text-white transition-colors">Events</Link>
              <Link href="/artists" className="hover:text-white transition-colors">Artists</Link>
              <Link href="/membership" className="hover:text-white transition-colors">Membership</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="https://instagram.com/phela" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="https://twitter.com/phela" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="https://facebook.com/phela" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Facebook size={18} />
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2026 PHELA. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
              <Link href="/support" className="hover:text-white/60 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Spacer for sticky purchase strip */}
      <div className="h-24 md:h-20" />
    </div>
  );
}

function Music({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}