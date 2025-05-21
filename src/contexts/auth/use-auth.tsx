
import { useContext } from 'react';
import { AuthContext } from './auth-context';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // Directly return the actual context with real 2FA implementations
  return context;
};
