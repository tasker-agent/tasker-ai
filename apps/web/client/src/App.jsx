// App root component
// Main React component for Tasker AI dashboard

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import Router from './Router';
import '../styles/globals.css';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
