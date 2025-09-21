import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, BookOpen, Award, TrendingUp, 
  Bell, MessageSquare, Calendar, Plus, Eye, Edit3
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const mockStats = {
  fresher: {
    applications: 12,
    interviews: 3,
    courses: 8,
    certificates: 2
  },
  startup: {
    jobs_posted: 5,
    applications: 48,
    shortlisted: 12,
    hired: 3
  }
};

const mockApplications = [
  {
    id: '1',
    job_title: 'Frontend Developer',
    company: 'TechFlow',
    status: 'reviewing',
    applied_date: '2025-01-10',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    job_title: 'Product Designer',
    company: 'DesignLab',
    status: 'shortlisted',
    applied_date: '2025-01-08',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

const mockEnrollments = [
  {
    id: '1',
    course_title: 'React Development Mastery',
    progress: 75,
    instructor: 'Sarah Johnson',
    enrolled_date: '2025-01-05'
  },
  {
    id: '2',
    course_title: 'Digital Marketing Essentials',
    progress: 40,
    instructor: 'Emma Davis',
    enrolled_date: '2025-01-03'
  }
];

const mockJobs = [
  {
    id: '1',
    title: 'Senior React Developer',
    applications: 24,
    views: 156,
    status: 'published',
    posted_date: '2025-01-12'
  },
  {
    id: '2',
    title: 'UX Designer',
    applications: 18,
    views: 89,
    status: 'published',
    posted_date: '2025-01-10'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    pending: 'default',
    reviewing: 'info',
    shortlisted: 'success',
    rejected: 'error',
    hired: 'success',
    published: 'success',
    draft: 'warning',
    closed: 'error'
  };
  return colors[status as keyof typeof colors] || 'default';
};

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">Please login to access your dashboard</p>
        </Card>
      </div>
    );
  }

  const userStats = user.role === 'fresher' ? mockStats.fresher : mockStats.startup;

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <Card>
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color} mr-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{title}</p>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {user.role === 'fresher' ? 'Your Career Dashboard' : 
           user.role === 'startup' ? 'Startup Dashboard' : 'Admin Dashboard'}
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {user.role === 'fresher' 
            ? 'Track your applications, courses, and career progress'
            : user.role === 'startup'
            ? 'Manage your job postings and connect with talent'
            : 'Monitor platform activity and manage users'
          }
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {user.role === 'fresher' ? (
          <>
            <StatCard
              title="Applications Sent"
              value={userStats.applications}
              icon={Briefcase}
              color="bg-blue-500"
            />
            <StatCard
              title="Interviews"
              value={userStats.interviews}
              icon={Calendar}
              color="bg-green-500"
            />
            <StatCard
              title="Courses Enrolled"
              value={userStats.courses}
              icon={BookOpen}
              color="bg-purple-500"
            />
            <StatCard
              title="Certificates"
              value={userStats.certificates}
              icon={Award}
              color="bg-yellow-500"
            />
          </>
        ) : (
          <>
            <StatCard
              title="Jobs Posted"
              value={userStats.jobs_posted}
              icon={Briefcase}
              color="bg-blue-500"
            />
            <StatCard
              title="Applications"
              value={userStats.applications}
              icon={Users}
              color="bg-green-500"
            />
            <StatCard
              title="Shortlisted"
              value={userStats.shortlisted}
              icon={Eye}
              color="bg-purple-500"
            />
            <StatCard
              title="Hired"
              value={userStats.hired}
              icon={TrendingUp}
              color="bg-yellow-500"
            />
          </>
        )}
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview' },
              { id: user.role === 'fresher' ? 'applications' : 'jobs', name: user.role === 'fresher' ? 'Applications' : 'My Jobs' },
              { id: user.role === 'fresher' ? 'courses' : 'candidates', name: user.role === 'fresher' ? 'Courses' : 'Candidates' },
              { id: 'messages', name: 'Messages' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {user.role === 'fresher' ? (
              <>
                {/* Recent Applications */}
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Recent Applications
                    </h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="space-y-4">
                    {mockApplications.map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <img src={app.logo} alt={app.company} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">{app.job_title}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{app.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={getStatusColor(app.status) as any}>
                            {app.status}
                          </Badge>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(app.applied_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Course Progress */}
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Course Progress
                    </h2>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  <div className="space-y-4">
                    {mockEnrollments.map((enrollment) => (
                      <div key={enrollment.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-gray-900 dark:text-white">{enrollment.course_title}</p>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{enrollment.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${enrollment.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          by {enrollment.instructor}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            ) : (
              <>
                {/* Posted Jobs */}
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Active Job Postings
                    </h2>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Post New Job
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {mockJobs.map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{job.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Posted {new Date(job.posted_date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-4 mb-1">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {job.applications} applications
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {job.views} views
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            )}
          </div>
        )}

        {activeTab === 'applications' && user.role === 'fresher' && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              All Applications
            </h2>
            <div className="space-y-4">
              {mockApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img src={app.logo} alt={app.company} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{app.job_title}</p>
                      <p className="text-gray-600 dark:text-gray-400">{app.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusColor(app.status) as any}>{app.status}</Badge>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Applied {new Date(app.applied_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'courses' && user.role === 'fresher' && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              My Courses
            </h2>
            <div className="space-y-4">
              {mockEnrollments.map((enrollment) => (
                <div key={enrollment.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-medium text-gray-900 dark:text-white">{enrollment.course_title}</p>
                    <Button size="sm">Continue</Button>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{enrollment.progress}% Complete</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">by {enrollment.instructor}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${enrollment.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'messages' && (
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Messages
            </h2>
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>No messages yet</p>
              <p className="text-sm">Your conversations will appear here</p>
            </div>
          </Card>
        )}
      </motion.div>
    </div>
  );
};