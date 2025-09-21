export interface Job {
  id: string;
  startup_id: string;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  employment_type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience_level: 'entry' | 'junior' | 'mid' | 'senior';
  location: string;
  remote_allowed: boolean;
  salary_range: {
    min: number;
    max: number;
    currency: 'INR' | 'USD';
  };
  skills_required: string[];
  benefits: string[];
  application_deadline: string;
  status: 'draft' | 'published' | 'closed';
  created_at: string;
  updated_at: string;
  startup: {
    company_name: string;
    logo_url?: string;
    industry: string;
  };
}

export interface JobApplication {
  id: string;
  job_id: string;
  fresher_id: string;
  status: 'pending' | 'reviewing' | 'shortlisted' | 'rejected' | 'hired';
  cover_letter?: string;
  applied_at: string;
  fresher: {
    name: string;
    avatar_url?: string;
    skills: string[];
    experience_level: string;
  };
}

export interface JobFilters {
  search: string;
  location: string;
  employment_type: string[];
  experience_level: string[];
  skills: string[];
  remote_only: boolean;
}