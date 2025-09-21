export interface User {
  id: string;
  email: string;
  role: 'fresher' | 'startup' | 'admin';
  profile: FresherProfile | StartupProfile | AdminProfile;
  created_at: string;
}

export interface FresherProfile {
  id: string;
  user_id: string;
  name: string;
  avatar_url?: string;
  skills: string[];
  experience_level: 'entry' | 'junior' | 'mid' | 'senior';
  resume_url?: string;
  certificates: Certificate[];
  bio?: string;
  location?: string;
  phone?: string;
}

export interface StartupProfile {
  id: string;
  user_id: string;
  company_name: string;
  logo_url?: string;
  description: string;
  industry: string;
  stage: 'idea' | 'mvp' | 'growth' | 'scale';
  team_size: string;
  location: string;
  website?: string;
  founded_year: number;
}

export interface AdminProfile {
  id: string;
  user_id: string;
  name: string;
  permissions: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issued_by: string;
  issued_date: string;
  certificate_url: string;
}