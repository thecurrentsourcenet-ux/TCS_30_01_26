import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Scale, Zap, Database, Truck, Shield, Factory } from 'lucide-react';

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Technical Knowledge */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-electric" />
          <h2 className="text-lg font-semibold text-gray-800">Technical Knowledge</h2>
        </div>
        <div className="space-y-3">
          <Link 
            to="/category/technical/production"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors group"
          >
            <Zap className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span>Clean Energy Production</span>
          </Link>
          <Link 
            to="/category/technical/storage"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors group"
          >
            <Database className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span>Energy Storage Solutions</span>
          </Link>
          <Link 
            to="/category/technical/transport"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors group"
          >
            <Truck className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span>Transportation & Distribution</span>
          </Link>
          <Link 
            to="/category/technical/safety"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors group"
          >
            <Shield className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span>Safety Standards</span>
          </Link>
          <Link 
            to="/category/technical/applications"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors group"
          >
            <Factory className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <span>Industrial Applications</span>
          </Link>
        </div>
      </div>

      {/* Legislation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="h-6 w-6 text-electric" />
          <h2 className="text-lg font-semibold text-gray-800">Energy Policy & Regulation</h2>
        </div>
        <div className="space-y-3">
          <Link 
            to="/category/legislation/eu"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors"
          >
            European Union
          </Link>
          <Link 
            to="/category/legislation/us"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors"
          >
            United States
          </Link>
          <Link 
            to="/category/legislation/jp"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors"
          >
            Japan
          </Link>
          <Link 
            to="/category/legislation/de"
            className="flex items-center space-x-2 text-gray-600 hover:text-electric transition-colors"
          >
            Germany
          </Link>
        </div>
      </div>
    </div>
  );
}