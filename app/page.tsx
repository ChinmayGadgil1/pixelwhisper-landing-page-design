'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lock, Zap, Eye, Download, Github, Check } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`text-2xl font-bold transition-all duration-1000 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <span className="gradient-text">PixelWhisper</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-white/70 hover:text-white transition-colors hidden sm:block">
              Features
            </a>
            <a href="#download" className="text-white/70 hover:text-white transition-colors hidden sm:block">
              Download
            </a>
            <a href="https://github.com" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-6xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <span className="gradient-text">
              Hide Your Secrets in Plain Sight
            </span>
          </h1>
          
          <p className={`text-xl text-white/60 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            Military-grade steganography. Encrypt and embed your messages within images. Undetectable. Secure. Beautiful.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <Link href="#download" className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg glow-primary">
              Download for Windows
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="#features" className="group inline-flex items-center justify-center px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>

        {/* Floating cards preview */}
        <div className="relative mt-20 max-w-5xl mx-auto h-96">
          <div className={`absolute left-0 top-0 w-80 h-64 glass-strong rounded-2xl p-8 transition-all duration-1000 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl mb-4 shimmer" />
            <p className="text-sm text-white/70">Your encrypted message</p>
          </div>

          <div className={`absolute right-0 top-12 w-80 h-64 glass-strong rounded-2xl p-8 transition-all duration-1000 ${isLoaded ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="w-full h-32 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl mb-4 shimmer" />
            <p className="text-sm text-white/70">Hidden in plain sight</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Powerful Features</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Military-Grade Encryption',
                description: 'AES-256 encryption ensures your hidden messages are completely secure.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized Python implementation processes images in milliseconds.'
              },
              {
                icon: Eye,
                title: 'Invisible to Detection',
                description: 'Steganographic analysis can\'t detect hidden data without the key.'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className={`glass-strong rounded-2xl p-8 transition-all duration-700 hover:glow-primary group cursor-pointer transform hover:scale-105 ${isLoaded ? 'fade-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <feature.icon className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors" size={32} />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">How It Works</span>
          </h2>

          <div className="space-y-8">
            {[
              { step: 1, title: 'Select Image', description: 'Choose any image file (PNG, JPG, BMP)' },
              { step: 2, title: 'Add Message', description: 'Enter your secret message and encryption key' },
              { step: 3, title: 'Generate', description: 'PixelWhisper embeds your message invisibly' },
              { step: 4, title: 'Share', description: 'Send the image anywhere - your secret is safe' }
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-8 items-start transition-all duration-700 ${isLoaded ? 'fade-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${700 + i * 100}ms` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  {i < 3 && (
                    <div className="absolute left-1/2 top-16 w-1 h-8 -translate-x-1/2 bg-gradient-to-b from-purple-600 to-transparent" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Start?</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12">
              Download PixelWhisper for Windows and start protecting your secrets.
            </p>

            <div className="space-y-6">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/download?file=SteganographyApp_Installer.zip';
                  link.download = 'pixelwhisper-1.0.0-windows.zip';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 glow-primary group"
              >
                <Download className="mr-3" size={20} />
                Download Windows Installer
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <p className="text-sm text-white/50">Windows 10 and later. Python 3.8+ required.</p>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">What&apos;s Included:</h3>
                <div className="space-y-2 text-white/70 text-sm text-left max-w-sm mx-auto">
                  {[
                    'Full GUI application',
                    'Batch processing support',
                    'Advanced encryption options',
                    'Automatic updates'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={16} className="text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Or install via pip:</h3>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400 overflow-x-auto">
                  pip install pixelwhisper
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/50 text-sm gap-4">
          <p>&copy; 2024 PixelWhisper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
