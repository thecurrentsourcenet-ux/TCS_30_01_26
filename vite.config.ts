import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const hmrHost = process.env.VITE_HMR_HOST;

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: hmrHost
      ? { protocol: 'wss', host: hmrHost, clientPort: 443 }
      : undefined,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react']
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 1000,
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            if (id.includes('@stripe')) {
              return 'stripe';
            }
            if (id.includes('date-fns')) {
              return 'date-utils';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    }
  },
  ssr: {
    noExternal: ['@supabase/supabase-js', 'date-fns']
  }
});