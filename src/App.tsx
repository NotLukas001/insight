import React from 'react';
import { Users, Bot, Video, ArrowRight, Star, Palette} from 'lucide-react';
import { SiRoblox } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";


function Stat({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-xl border border-zinc-800">
      <Icon className="w-8 h-8 text-[#78c48c] mb-2" />
      <h3 className="text-3xl font-bold text-white">{value}</h3>
      <p className="text-zinc-400">{label}</p>
    </div>
  );
}

function CourseCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-[#78c48c]/50 transition-colors">
      <Icon className="w-10 h-10 text-[#78c48c] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <button className="flex items-center text-[#78c48c] font-medium hover:text-[#78c48c]/80">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="/" className="flex items-center group">
              <img 
                src="https://media.discordapp.net/attachments/1303471432512307321/1303901355085266954/U1rEUAAAQQQQAABBBBAAIHoBQjC0Q8BABBAAAEEEEAAAQQQQACBuATf6IR7Mm089AAAAAElFTkSuQmCC.png?ex=672d7044&is=672c1ec4&hm=c19254d6f1903923442fa4aff11622df92068d67779d3d4ff5348c51b911071a&=&format=webp&quality=lossless&width=680&height=680" 
                alt="" 
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <span className="text-2xl font-bold text-white group-hover:text-[#78c48c] transition-colors">Insight</span>
                <span className="text-2xl font-bold text-[#78c48c]"> Courses</span>
              </div>
            </a>
            <div className="flex space-x-4">
              <a href="https://discord.gg/t8Wd9sJZCz" className="inline-flex items-center px-4 py-2 bg-[#78c48c] text-black rounded-lg hover:bg-[#78c48c]/90 transition-colors">
                <FaDiscord className="w-4 h-4 mr-2" />
                Join Now
              </a>
              <a href="https://www.roblox.com/groups/35172422" className="inline-flex items-center px-4 py-2 border border-[#78c48c] text-[#78c48c] rounded-lg hover:bg-[#78c48c]/10 transition-colors">
              <SiRoblox className="w-4 h-4 mr-2" />
                Our Group
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Insight Courses
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-zinc-400 sm:text-2xl md:mt-5 md:max-w-3xl">
              Professional courses in OBS streaming, Discord bot development, and brand building
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stat icon={Users} value="0+" label="Customers" />
          <Stat icon={Video} value="3+" label="Courses" />
          <Stat icon={Star} value="5 Stars " label="Average Rating" />
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard
            icon={Video}
            title="Professional OBS"
            description="Learn how to create a visually appealing and engaging stream using OBS"
          />
          <CourseCard
            icon={Bot}
            title="Discord Bot Development"
            description="Learn how to build powerful Discord bots from scratch using modern Python and Discord.py."
          />
          <CourseCard
            icon={Palette}
            title="Graphics and Brand Building"
            description="Learn how to create professional graphics and brand identity."
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 text-zinc-400">
              <a href="/about" className="hover:text-[#78c48c]">About</a>
              <a href="/privacy" className="hover:text-[#78c48c]">Privacy</a>
              <a href="/terms" className="hover:text-[#78c48c]">Terms</a>
              <a href="https://discord.gg/t8Wd9sJZCz" className="hover:text-[#78c48c]">Contact</a>
            </div>
            <div className="mt-4 md:mt-0 text-zinc-500">
              © 2024 Insight Courses. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;