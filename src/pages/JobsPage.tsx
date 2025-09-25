import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Clock, DollarSign, Building2, Briefcase } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Job, JobFilters } from '../types/jobs';

const mockJobs: Job[] = [
  {
    id: '1',
    startup_id: '1',
    title: 'Frontend Developer',
    description: 'Join our dynamic team to build cutting-edge web applications using React and modern technologies.',
    requirements: ['React', 'TypeScript', 'Tailwind CSS', '2+ years experience'],
    responsibilities: ['Develop user interfaces', 'Collaborate with design team', 'Optimize performance'],
    employment_type: 'full-time',
    experience_level: 'junior',
    location: 'San Francisco, CA',
    remote_allowed: true,
    salary_range: { min: 600000, max: 1000000, currency: 'INR' },
    skills_required: ['React', 'TypeScript', 'CSS'],
    benefits: ['Health Insurance', 'Stock Options', 'Flexible Hours'],
    application_deadline: '2025-02-28',
    status: 'published',
    created_at: '2025-01-15T00:00:00Z',
    updated_at: '2025-01-15T00:00:00Z',
    startup: {
      company_name: 'TechFlow',
      logo_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Technology'
    }
  },
  {
    id: '2',
    startup_id: '2',
    title: 'Product Designer',
    description: 'Design intuitive and beautiful user experiences for our growing SaaS platform.',
    requirements: ['Figma', 'Adobe Creative Suite', 'UX Research', '1+ years experience'],
    responsibilities: ['Create wireframes and prototypes', 'Conduct user research', 'Design system maintenance'],
    employment_type: 'full-time',
    experience_level: 'entry',
    location: 'New York, NY',
    remote_allowed: false,
    salary_range: { min: 500000, max: 800000, currency: 'INR' },
    skills_required: ['Figma', 'Adobe XD', 'User Research'],
    benefits: ['Health Insurance', 'Learning Budget', 'Gym Membership'],
    application_deadline: '2025-03-15',
    status: 'published',
    created_at: '2025-01-14T00:00:00Z',
    updated_at: '2025-01-14T00:00:00Z',
    startup: {
      company_name: 'DesignLab',
      logo_url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Design'
    }
  },
  {
    id: '3',
    startup_id: '3',
    title: 'Marketing Intern',
    description: 'Help drive growth through innovative marketing campaigns and data-driven strategies.',
    requirements: ['Marketing fundamentals', 'Social media knowledge', 'Analytics tools'],
    responsibilities: ['Content creation', 'Campaign management', 'Performance analysis'],
    employment_type: 'internship',
    experience_level: 'entry',
    location: 'Austin, TX',
    remote_allowed: true,
    salary_range: { min: 15000, max: 15000, currency: 'INR' },
    skills_required: ['Digital Marketing', 'Content Creation', 'Analytics'],
    benefits: ['Mentorship', 'Flexible Schedule', 'Learning Opportunities'],
    application_deadline: '2025-02-20',
    status: 'published',
    created_at: '2025-01-13T00:00:00Z',
    updated_at: '2025-01-13T00:00:00Z',
    startup: {
      company_name: 'GrowthCo',
      logo_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Marketing'
    }
  }
];

export const JobsPage: React.FC = () => {
  const [jobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    employment_type: [],
    experience_level: [],
    skills: [],
    remote_only: false
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobs.filter(job => {
    if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !job.startup.company_name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.employment_type.length > 0 && !filters.employment_type.includes(job.employment_type)) {
      return false;
    }
    if (filters.experience_level.length > 0 && !filters.experience_level.includes(job.experience_level)) {
      return false;
    }
    if (filters.remote_only && !job.remote_allowed) {
      return false;
    }
    return true;
  });

  const handleFilterChange = (key: keyof JobFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Find Your Dream Job
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Discover opportunities at innovative startups ready to change the world
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Input
              placeholder="Search jobs or companies..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              icon={<Search className="h-5 w-5" />}
            />
            <Input
              placeholder="Location"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              icon={<MapPin className="h-5 w-5" />}
            />
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Employment Type
                  </label>
                  <div className="space-y-2">
                    {['full-time', 'part-time', 'contract', 'internship'].map(type => (
                      <label key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.employment_type.includes(type)}
                          onChange={(e) => {
                            const newTypes = e.target.checked
                              ? [...filters.employment_type, type]
                              : filters.employment_type.filter(t => t !== type);
                            handleFilterChange('employment_type', newTypes);
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {type.replace('-', ' ')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Experience Level
                  </label>
                  <div className="space-y-2">
                    {['entry', 'junior', 'mid', 'senior'].map(level => (
                      <label key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.experience_level.includes(level)}
                          onChange={(e) => {
                            const newLevels = e.target.checked
                              ? [...filters.experience_level, level]
                              : filters.experience_level.filter(l => l !== level);
                            handleFilterChange('experience_level', newLevels);
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.remote_only}
                      onChange={(e) => handleFilterChange('remote_only', e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Remote only
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredJobs.length} jobs
        </p>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <img
                    src={job.startup.logo_url}
                    alt={job.startup.company_name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {job.startup.company_name} • {job.startup.industry}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="info">
                        <Building2 className="h-3 w-3 mr-1" />
                        {job.employment_type.replace('-', ' ')}
                      </Badge>
                      <Badge variant="default">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </Badge>
                      {job.remote_allowed && (
                        <Badge variant="success">Remote OK</Badge>
                      )}
                      <Badge variant="warning">
                        {job.experience_level}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        ₹{job.salary_range.min.toLocaleString()} - ₹{job.salary_range.max.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(job.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 lg:flex-shrink-0">
                  <Button size="md">
                    Apply Now
                  </Button>
                  <Button variant="ghost" size="md">
                    Save Job
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            <Briefcase className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p>Try adjusting your search criteria to find more opportunities</p>
          </div>
        </Card>
      )}
    </div>
  );
};