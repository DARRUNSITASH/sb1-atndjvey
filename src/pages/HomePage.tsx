import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, BookOpen, Users, Star, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const trendingJobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechFlow',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹10,00,000',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignLab',
    location: 'San Francisco',
    type: 'Full-time',
    salary: '₹5,00,000 - ₹8,00,000',
    logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '3',
    title: 'Marketing Intern',
    company: 'GrowthCo',
    location: 'New York',
    type: 'Internship',
    salary: '₹15,000/month',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '4',
    title: 'Full Stack Engineer',
    company: 'DataVision',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '₹8,00,000 - ₹12,00,000',
    logo: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '5',
    title: 'UX Researcher',
    company: 'InnovateLab',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '₹6,00,000 - ₹9,00,000',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '6',
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹10,00,000 - ₹15,00,000',
    logo: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '7',
    title: 'Data Analyst',
    company: 'AnalyticsPro',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '₹4,50,000 - ₹7,00,000',
    logo: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '8',
    title: 'Mobile Developer',
    company: 'AppCraft',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '₹7,00,000 - ₹11,00,000',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

const popularCourses = [
  {
    id: '1',
    title: 'React Development Mastery',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 1250,
    duration: '12 hours',
    price: 'Free',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'Startup Fundamentals',
    instructor: 'Mike Chen',
    rating: 4.9,
    students: 890,
    duration: '8 hours',
    price: '₹3,999',
    thumbnail: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'Digital Marketing Essentials',
    instructor: 'Emma Davis',
    rating: 4.7,
    students: 1580,
    duration: '15 hours',
    price: '₹5,999',
    thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '4',
    title: 'Python for Data Science',
    instructor: 'Dr. Alex Kumar',
    rating: 4.9,
    students: 2100,
    duration: '20 hours',
    price: '₹7,999',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '5',
    title: 'UI/UX Design Bootcamp',
    instructor: 'Jessica Wong',
    rating: 4.8,
    students: 1750,
    duration: '18 hours',
    price: '₹6,999',
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '6',
    title: 'Node.js Backend Development',
    instructor: 'Carlos Rodriguez',
    rating: 4.7,
    students: 1320,
    duration: '16 hours',
    price: '₹4,999',
    thumbnail: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '7',
    title: 'Machine Learning Fundamentals',
    instructor: 'Dr. Priya Patel',
    rating: 4.9,
    students: 1890,
    duration: '25 hours',
    price: '₹8,999',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '8',
    title: 'Cybersecurity Essentials',
    instructor: 'Mark Thompson',
    rating: 4.6,
    students: 980,
    duration: '14 hours',
    price: '₹5,999',
    thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  }
];

const testimonials = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'Software Engineer at StartupXYZ',
    content: 'GrowHive helped me land my dream job at an amazing startup. The platform made it so easy to showcase my skills and connect with the right opportunities.',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Lisa Wang',
    role: 'Founder at InnovateTech',
    content: 'We found incredible talent through GrowHive. The quality of candidates and the ease of the hiring process exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'David Kumar',
    role: 'Product Manager',
    content: 'The courses on GrowHive helped me transition from engineering to product management. The certificate I earned opened doors to amazing opportunities.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold leading-tight"
            >
              Connect. Learn. <span className="text-yellow-400">Grow.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl max-w-3xl mx-auto text-green-100"
            >
              The ultimate platform where talented freshers meet innovative startups. 
              Build your career, scale your startup, shape the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/jobs">
                <Button size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Find Jobs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/signup?role=startup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  <Users className="h-5 w-5 mr-2" />
                  Post Jobs
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50,000+</div>
            <p className="text-gray-600 dark:text-gray-400">Active Job Seekers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">2,500+</div>
            <p className="text-gray-600 dark:text-gray-400">Startup Partners</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">95%</div>
            <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
          </motion.div>
        </div>
      </section>

      {/* Trending Jobs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Trending Jobs
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the hottest opportunities at innovative startups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trendingJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="info">{job.type}</Badge>
                      <Badge variant="default">{job.location}</Badge>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-medium text-sm">
                      {job.salary}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/jobs">
            <Button size="lg" variant="outline">
              View All Jobs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Popular Courses
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Upskill with industry-relevant courses designed by experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      by {course.instructor}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-sm text-gray-500">({course.students})</span>
                      </div>
                      <Badge variant="info">{course.duration}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        {course.price}
                      </span>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why Choose GrowHive?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Career Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access exclusive job opportunities at fast-growing startups and accelerate your career growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Skill Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn from industry experts with hands-on courses and earn certificates that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Startup Network
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with innovative startups and be part of building the next big thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Success Stories
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from our community members who found success through GrowHive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <blockquote className="text-gray-600 dark:text-gray-400 mb-4 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Join thousands of professionals who have found their perfect match on GrowHive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-green-600">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </Card>
      </section>
    </div>
  );
};