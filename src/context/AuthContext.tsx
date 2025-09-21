import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: 'fresher' | 'startup') => Promise<void>;
  logout: () => void;
  updateProfile: (profileData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem('growhive_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        role: email.includes('startup') ? 'startup' : 'fresher',
        profile: email.includes('startup') ? {
          id: '1',
          user_id: '1',
          company_name: 'TechStartup Inc',
          description: 'Revolutionary tech startup',
          industry: 'Technology',
          stage: 'growth',
          team_size: '10-50',
          location: 'San Francisco, CA',
          founded_year: 2022
        } : {
          id: '1',
          user_id: '1',
          name: 'John Doe',
          skills: ['React', 'JavaScript', 'Node.js'],
          experience_level: 'junior',
          certificates: [],
          location: 'New York, NY'
        },
        created_at: new Date().toISOString()
      };

      setUser(mockUser);
      localStorage.setItem('growhive_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, role: 'fresher' | 'startup') => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        role,
        profile: role === 'startup' ? {
          id: '1',
          user_id: '1',
          company_name: '',
          description: '',
          industry: '',
          stage: 'idea',
          team_size: '1-10',
          location: '',
          founded_year: new Date().getFullYear()
        } : {
          id: '1',
          user_id: '1',
          name: '',
          skills: [],
          experience_level: 'entry',
          certificates: []
        },
        created_at: new Date().toISOString()
      };

      setUser(mockUser);
      localStorage.setItem('growhive_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Signup failed');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('growhive_user');
  };

  const updateProfile = async (profileData: any) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      profile: { ...user.profile, ...profileData }
    };
    
    setUser(updatedUser);
    localStorage.setItem('growhive_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      signup,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};