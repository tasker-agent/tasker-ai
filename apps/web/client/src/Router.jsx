// Router configuration
// Client-side routing with Wouter

import { Route } from 'wouter';
import HomePage from './pages/Home';
import AgentsPage from './pages/Agents';
import JobsPage from './pages/Jobs';
import SettingsPage from './pages/Settings';
import NotFound from './pages/NotFound';

export default function Router() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/agents" component={AgentsPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path={null} component={NotFound} />
    </>
  );
}
