import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, X, Send, Zap, User, Bot, Sparkles, ArrowRight, Search, BookOpen, Calendar, Globe, TrendingUp } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }>;
}

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  path: string;
  category: 'news' | 'technical' | 'policy' | 'about' | 'video';
}

export default function IntelligentNavigationBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const botRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Enhanced navigation items database
  const navigationItems: NavigationItem[] = [
    {
      id: 'timeline',
      title: 'Energy News Timeline',
      description: 'Latest energy developments and breaking news',
      keywords: ['news', 'latest', 'timeline', 'developments', 'breaking', 'current', 'recent', 'updates'],
      path: '/',
      category: 'news'
    },
    {
      id: 'home',
      title: 'Homepage Overview',
      description: 'Traditional homepage with featured content and weekly digest',
      keywords: ['home', 'homepage', 'overview', 'main', 'start', 'beginning', 'featured'],
      path: '/home',
      category: 'news'
    },
    {
      id: 'production-methods',
      title: 'Energy Production Methods',
      description: 'Technical guide to clean energy production',
      keywords: ['production', 'methods', 'technical', 'how', 'process', 'manufacturing', 'create', 'generate', 'electrolysis', 'solar'],
      path: '/category/technical/production',
      category: 'technical'
    },
    {
      id: 'storage-solutions',
      title: 'Energy Storage Solutions',
      description: 'Comprehensive guide to energy storage technologies',
      keywords: ['storage', 'solutions', 'technical', 'guide', 'technologies', 'batteries', 'storing', 'hydrogen'],
      path: '/category/technical/storage',
      category: 'technical'
    },
    {
      id: 'transportation',
      title: 'Energy Transportation',
      description: 'Methods for transporting clean energy carriers',
      keywords: ['transportation', 'transport', 'distribution', 'logistics', 'infrastructure', 'delivery', 'pipeline'],
      path: '/category/technical/transport',
      category: 'technical'
    },
    {
      id: 'safety-standards',
      title: 'Safety Standards',
      description: 'Safety protocols and industry standards',
      keywords: ['safety', 'standards', 'protocols', 'regulations', 'compliance', 'security'],
      path: '/category/technical/safety',
      category: 'technical'
    },
    {
      id: 'applications',
      title: 'Industrial Applications',
      description: 'Real-world applications of clean energy',
      keywords: ['applications', 'industrial', 'use cases', 'implementation', 'practical', 'industry'],
      path: '/category/technical/applications',
      category: 'technical'
    },
    {
      id: 'policy-us',
      title: 'US Energy Policy',
      description: 'United States energy legislation and regulations',
      keywords: ['us', 'usa', 'america', 'american', 'policy', 'legislation', 'regulations', 'government'],
      path: '/category/legislation/us',
      category: 'policy'
    },
    {
      id: 'policy-eu',
      title: 'EU Energy Policy',
      description: 'European Union energy legislation',
      keywords: ['eu', 'europe', 'european', 'union', 'policy', 'legislation', 'brussels'],
      path: '/category/legislation/eu',
      category: 'policy'
    },
    {
      id: 'policy-germany',
      title: 'German Energy Policy',
      description: 'Germany energy legislation and regulations',
      keywords: ['germany', 'german', 'deutschland', 'policy', 'legislation', 'regulations'],
      path: '/category/legislation/de',
      category: 'policy'
    },
    {
      id: 'policy-japan',
      title: 'Japanese Energy Policy',
      description: 'Japan energy legislation and regulations',
      keywords: ['japan', 'japanese', 'policy', 'legislation', 'regulations', 'asia'],
      path: '/category/legislation/jp',
      category: 'policy'
    },
    {
      id: 'newsletter',
      title: 'Newsletter Subscription',
      description: 'Subscribe to our free monthly energy digest',
      keywords: ['newsletter', 'subscribe', 'subscription', 'email', 'weekly', 'digest', 'signup'],
      path: '/pricing',
      category: 'about'
    },
    {
      id: 'about',
      title: 'About TheCurrentSource',
      description: 'Learn about our mission and approach',
      keywords: ['about', 'mission', 'company', 'team', 'information', 'who', 'what', 'why'],
      path: '/about',
      category: 'about'
    }
  ];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Proactive greeting for first-time visitors
  useEffect(() => {
    if (!hasShownWelcome) {
      const timer = setTimeout(() => {
        if (!isOpen && botRef.current) {
          botRef.current.classList.add('chatbot-bounce');
          setTimeout(() => {
            if (botRef.current) {
              botRef.current.classList.remove('chatbot-bounce');
            }
          }, 2000);
        }
        setHasShownWelcome(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasShownWelcome, isOpen]);

  const addMessage = useCallback((content: string, type: 'user' | 'bot', suggestions?: Array<{label: string; action: () => void; icon?: React.ReactNode}>) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const navigateToSection = useCallback((path: string, title: string) => {
    try {
      navigate(path);
      addMessage(`✅ Navigating to: "${title}"`, 'bot');
      setIsMinimized(true);
    } catch (error) {
      console.error('Navigation error:', error);
      addMessage(`❌ Sorry, I couldn't navigate to "${title}". Please try again.`, 'bot');
    }
  }, [navigate, addMessage]);

  const findBestMatches = useCallback((query: string): NavigationItem[] => {
    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(' ').filter(word => word.length > 2);
    
    const scored = navigationItems.map(item => {
      let score = 0;
      
      // Exact title match gets highest score
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 100;
      }
      
      // Keyword matches
      words.forEach(word => {
        item.keywords.forEach(keyword => {
          if (keyword.includes(word)) {
            score += 50;
          }
          if (keyword === word) {
            score += 100;
          }
        });
      });
      
      // Description match
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 30;
      }
      
      // Category-specific boosts
      if (lowerQuery.includes('news') && item.category === 'news') score += 25;
      if (lowerQuery.includes('technical') && item.category === 'technical') score += 25;
      if (lowerQuery.includes('policy') && item.category === 'policy') score += 25;
      
      return { item, score };
    });
    
    return scored
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map(({ item }) => item);
  }, []);

  const getPopularSections = useCallback(() => {
    return [
      {
        label: 'Latest Energy News',
        action: () => navigateToSection('/', 'Energy News Timeline'),
        icon: <TrendingUp className="h-4 w-4" />
      },
      {
        label: 'Technical Guides',
        action: () => navigateToSection('/category/technical/production', 'Energy Production Methods'),
        icon: <BookOpen className="h-4 w-4" />
      },
      {
        label: 'Newsletter Subscription',
        action: () => navigateToSection('/pricing', 'Newsletter Subscription'),
        icon: <Calendar className="h-4 w-4" />
      },
    ];
  }, [navigateToSection]);

  const getContextualHelp = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('help') || lowerQuery.includes('what can you do')) {
      return "I can help you navigate TheCurrentSource! I can find specific articles, explain technical concepts, show you policy information, or guide you to any section of our site. Try asking me about energy topics like 'solar power', 'EU policy', or 'storage technology'.";
    }
    
    if (lowerQuery.includes('newsletter') || lowerQuery.includes('subscribe')) {
      return "Our newsletter is completely free and delivers weekly energy news directly to your inbox. It covers all energy sectors and is organized for easy reading.";
    }
    
    if (lowerQuery.includes('technical') || lowerQuery.includes('how does')) {
      return "I can explain technical energy concepts! We have detailed guides on energy production, storage, transportation, safety standards, and industrial applications. What specific topic interests you?";
    }
    
    if (lowerQuery.includes('policy') || lowerQuery.includes('regulation')) {
      return "We cover energy policy from major regions including the US, EU, Germany, Japan, and more. Each section includes current legislation, regulatory frameworks, and policy analysis.";
    }
    
    return null;
  }, []);

  const processUserQuery = useCallback((query: string) => {
    const contextualHelp = getContextualHelp(query);
    
    if (contextualHelp) {
      const suggestions = getPopularSections();
      addMessage(contextualHelp, 'bot', suggestions);
      return;
    }
    
    const matches = findBestMatches(query);
    
    if (matches.length === 0) {
      const suggestions = getPopularSections();
      addMessage(
        "I couldn't find exactly what you're looking for, but here are some popular sections that might interest you:",
        'bot',
        suggestions
      );
      return;
    }

    if (matches.length === 1) {
      const match = matches[0];
      setTimeout(() => {
        navigateToSection(match.path, match.title);
      }, 500);
      addMessage(`Perfect! Taking you to "${match.title}" - ${match.description}`, 'bot');
      return;
    }

    // Multiple matches - offer choices
    const suggestions = matches.map(match => ({
      label: match.title,
      action: () => navigateToSection(match.path, match.title),
      icon: match.category === 'news' ? <TrendingUp className="h-4 w-4" /> :
            match.category === 'technical' ? <BookOpen className="h-4 w-4" /> :
            match.category === 'policy' ? <Globe className="h-4 w-4" /> :
            <Calendar className="h-4 w-4" />
    }));

    addMessage(
      `I found several relevant sections for "${query}". Which one interests you most?`,
      'bot',
      suggestions
    );
  }, [findBestMatches, getPopularSections, addMessage, navigateToSection, getContextualHelp]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userQuery = inputValue.trim();
    setInputValue('');
    
    addMessage(userQuery, 'user');
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      processUserQuery(userQuery);
    }, 800 + Math.random() * 400);
  }, [inputValue, isTyping, addMessage, processUserQuery]);

  const initializeConversation = useCallback(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        const suggestions = getPopularSections();
        addMessage(
          "Hello! 👋 Welcome to TheCurrentSource. I'm your intelligent navigation assistant. I can help you find energy news, technical guides, policy information, or any content on our site. What energy topics interest you today?",
          'bot',
          suggestions
        );
      }, 300);
    }
  }, [messages.length, getPopularSections, addMessage]);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
    initializeConversation();
  }, [initializeConversation]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setIsMinimized(false);
  }, []);

  const handleMinimize = useCallback(() => {
    setIsMinimized(true);
  }, []);

  const handleMaximize = useCallback(() => {
    setIsMinimized(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Floating button when closed
  if (!isOpen) {
    return (
      <div
        ref={botRef}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={handleOpen}
          className="bg-electric text-white p-4 rounded-full shadow-lg hover:bg-electric-600 transition-all duration-300 hover:scale-110 group relative"
          aria-label="Open navigation assistant"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
          
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Help hint */}
          {!hasShownWelcome && (
            <div className="absolute -top-12 -left-20 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Need help finding something?
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>
    );
  }

  // Minimized state
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleMaximize}
          className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 max-w-xs"
        >
          <div className="w-8 h-8 bg-electric rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="h-4 w-4 text-white" />
          </div>
          <div className="text-left min-w-0">
            <p className="font-medium text-gray-800 text-sm">Navigation Assistant</p>
            <p className="text-xs text-gray-600 truncate">Click to continue...</p>
          </div>
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse"></div>
        </button>
      </div>
    );
  }

  // Full chat interface
  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border border-gray-200 w-96 h-[600px] z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-electric-50 via-white to-teal-50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-electric rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white">
              <Sparkles className="h-2 w-2 text-white m-0.5" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              Navigation Assistant
              <span className="text-xs bg-electric text-white px-2 py-0.5 rounded-full">AI</span>
            </h3>
            <p className="text-xs text-gray-600">Here to help you explore</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleMinimize}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Minimize assistant"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close assistant"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chatbot-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'user' 
                  ? 'bg-electric text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              
              {/* Message bubble */}
              <div
                className={`rounded-lg p-3 ${
                  message.type === 'user'
                    ? 'bg-electric text-white'
                    : 'bg-gray-50 text-gray-800 border border-gray-100'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                
                {/* Suggestions */}
                {message.suggestions && (
                  <div className="mt-3 space-y-2">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={suggestion.action}
                        className="flex items-center gap-2 w-full text-left px-3 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm border border-gray-200 group"
                      >
                        {suggestion.icon}
                        <span className="flex-1">{suggestion.label}</span>
                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-gray-600" />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric text-sm bg-white"
              disabled={isTyping}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="bg-electric text-white px-4 py-3 rounded-lg hover:bg-electric-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        
        {/* Quick suggestions for new users */}
        {messages.length <= 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setInputValue('latest news')}
              className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Latest news
            </button>
            <button
              type="button"
              onClick={() => setInputValue('technology')}
              className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Technology
            </button>
            <button
              type="button"
              onClick={() => setInputValue('policy')}
              className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Policy
            </button>
            <button
              type="button"
              onClick={() => setInputValue('newsletter')}
              className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Newsletter
            </button>
          </div>
        )}
      </form>
    </div>
  );
}