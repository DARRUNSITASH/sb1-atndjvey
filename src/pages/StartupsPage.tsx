import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Calendar, ExternalLink, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { StartupProfile } from '../types/auth';
import { useAuth } from '../context/AuthContext';

const mockStartups: (StartupProfile & { jobs_count: number })[] = [
  {
    id: '1',
    user_id: '1',
    company_name: 'TechFlow',
    logo_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    description: 'Revolutionary fintech platform making financial services accessible to everyone through innovative technology.',
    industry: 'Fintech',
    stage: 'growth',
    team_size: '50-100',
    location: 'San Francisco, CA',
    website: 'https://techflow.com',
    founded_year: 2020,
    jobs_count: 8
  },
  {
    id: '2',
    user_id: '2',
    company_name: 'DesignLab',
    logo_url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    description: 'Creative agency and SaaS platform helping businesses create stunning visual content at scale.',
    industry: 'Design & Creative',
    stage: 'scale',
    team_size: '100-200',
    location: 'New York, NY',
    website: 'https://designlab.com',
    founded_year: 2019,
    jobs_count: 12
  },
  {
    id: '3',
    user_id: '3',
    company_name: 'GrowthCo',
    logo_url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    description: 'AI-powered marketing automation platform helping startups scale their customer acquisition.',
    industry: 'Marketing Tech',
    stage: 'mvp',
    team_size: '10-20',
    location: 'Austin, TX',
    website: 'https://growthco.com',
    founded_year: 2022,
    jobs_count: 5
  },
  {
    id: '4',
    user_id: '4',
    company_name: 'EcoTech Solutions',
    logo_url: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    description: 'Sustainable technology solutions for renewable energy and environmental monitoring.',
    industry: 'CleanTech',
    stage: 'growth',
    team_size: '30-50',
    location: 'Seattle, WA',
    website: 'https://ecotech.com',
    founded_year: 2021,
    jobs_count: 6
  }
];

const stages = [
  { key: 'idea', label: 'Idea Stage', color: 'bg-gray-100 text-gray-800' },
  { key: 'mvp', label: 'MVP', color: 'bg-blue-100 text-blue-800' },
  { key: 'growth', label: 'Growth', color: 'bg-green-100 text-green-800' },
  { key: 'scale', label: 'Scale', color: 'bg-purple-100 text-purple-800' }
];

export const StartupsPage: React.FC = () => {
  const [startups] = useState(mockStartups);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const { user } = useAuth();

  const industries = ['All', ...new Set(startups.map(s => s.industry))];
  const stageOptions = ['All', ...stages.map(s => s.key)];

  const filteredStartups = startups.filter(startup => {
    if (searchTerm && !startup.company_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !startup.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (selectedIndustry !== 'All' && startup.industry !== selectedIndustry) {
      return false;
    }
    if (selectedStage !== 'All' && startup.stage !== selectedStage) {
      return false;
    }
    return true;
  });

  const getStageInfo = (stage: string) => {
    return stages.find(s => s.key === stage) || stages[0];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Discover Startups
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Connect with innovative companies that are changing the world
          </p>
        </div>
        
        {user?.role === 'startup' && (
          <Link to="/post-job">
            <Button size="lg" className="mt-4 lg:mt-0">
              <Plus className="h-5 w-5 mr-2" />
              Post a Job
            </Button>
          </Link>
        )}
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <div className="space-y-4">
          <Input
            placeholder="Search startups..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={<Search className="h-5 w-5" />}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Stage
              </label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                {stageOptions.map(stage => (
                  <option key={stage} value={stage}>
                    {stage === 'All' ? 'All Stages' : stages.find(s => s.key === stage)?.label || stage}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredStartups.length} startups
        </p>
      </div>

      {/* Startup Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStartups.map((startup, index) => {
          const stageInfo = getStageInfo(startup.stage);
          return (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={startup.logo_url}
                    alt={startup.company_name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {startup.company_name}
                      </h3>
                      {startup.website && (
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="info">{startup.industry}</Badge>
                      <Badge className={stageInfo.color}>{stageInfo.label}</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {startup.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {startup.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {startup.team_size} employees
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Founded {startup.founded_year}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {startup.jobs_count} open positions
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">
                      View Jobs
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {filteredStartups.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No startups found</h3>
            <p>Try adjusting your search criteria to find more startups</p>
          </div>
        </Card>
      )}
    </div>
  );
};