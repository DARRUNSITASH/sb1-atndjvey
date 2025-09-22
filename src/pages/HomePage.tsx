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
    price: '₹4,999',
    thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '4',
    title: 'Python for Data Science',
    instructor: 'Dr. Alex Kumar',
    rating: 4.9,
    students: 2100,
    duration: '20 hours',
    price: '₹6,999',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '5',
    title: 'UI/UX Design Bootcamp',
    instructor: 'Jessica Wong',
    rating: 4.8,
    students: 1750,
    duration: '18 hours',
    price: '₹5,999',
    thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
  },
  {
    id: '6',
    title: 'Node.js Backend Development',
    instructor: 'Carlos Rodriguez',
    rating: 4.7,
    students: 1320,
    duration: '16 hours',
    price: '₹4,499',
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
    price: '₹4,999',
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
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-mesh"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-8xl font-black leading-tight text-shadow"
            >
              Connect. Learn. <span className="text-accent-400 animate-glow">Grow.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-3xl max-w-4xl mx-auto text-white/90 font-medium"
            >
              The ultimate platform where talented freshers meet innovative startups. 
              Build your career, scale your startup, shape the future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link to="/jobs">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700 shadow-2xl">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Find Jobs
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/signup?role=startup">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-primary-600 backdrop-blur-sm">
                  <Users className="h-5 w-5 mr-2" />
                  Post Jobs
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-200/50"
          >
            <div className="text-5xl font-black gradient-text mb-3">50,000+</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Active Job Seekers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-200/50"
          >
            <div className="text-5xl font-black gradient-text mb-3">2,500+</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Startup Partners</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-neutral-200/50"
          >
            <div className="text-5xl font-black gradient-text mb-3">95%</div>
            <p className="text-neutral-600 dark:text-neutral-400 font-semibold">Success Rate</p>
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
            className="text-4xl lg:text-6xl font-black gradient-text mb-6"
          >
            Trending Jobs
          </motion.h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xl max-w-3xl mx-auto font-medium">
            Discover the hottest opportunities at innovative startups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {trendingJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="card-hover group">
                <div className="flex items-start space-x-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-14 h-14 rounded-xl object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg">
                      {job.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 font-medium">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="info">{job.type}</Badge>
                      <Badge variant="default">{job.location}</Badge>
                    </div>
                    <p className="text-green-600 dark:text-green-400 font-bold text-base">
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
            <Button size="lg" variant="primary">
              View All Jobs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black gradient-text mb-6"
            >
              Popular Courses
            </motion.h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl max-w-3xl mx-auto font-medium">
              Upskill with industry-relevant courses designed by experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {popularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card padding="none" className="overflow-hidden card-hover group">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-7">
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-3 text-lg">
                      {course.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 font-medium">
                      by {course.instructor}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold">{course.rating}</span>
                        <span className="text-sm text-neutral-500">({course.students})</span>
                      </div>
                      <Badge variant="info">{course.duration}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-green-600 dark:text-green-400">
                        {course.price}
                      </span>
                      <Button size="sm" variant="primary">Enroll Now</Button>
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
            className="text-4xl lg:text-6xl font-black gradient-text mb-6"
          >
            Why Choose GrowHive?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <TrendingUp className="h-10 w-10 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Career Growth
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium">
              Access exclusive job opportunities at fast-growing startups and accelerate your career growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="h-10 w-10 text-secondary-600 dark:text-secondary-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Skill Development
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium">
              Learn from industry experts with hands-on courses and earn certificates that matter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center group"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="h-10 w-10 text-accent-600 dark:text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Startup Network
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium">
              Connect with innovative startups and be part of building the next big thing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black gradient-text mb-6"
            >
              Success Stories
            </motion.h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl max-w-3xl mx-auto font-medium">
              Hear from our community members who found success through GrowHive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-hover">
                  <div className="text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-white"
                    />
                    <blockquote className="text-neutral-600 dark:text-neutral-400 mb-6 italic text-lg font-medium">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <p className="font-bold text-neutral-900 dark:text-white text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
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
        <Card className="gradient-bg text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 relative z-10"
          >
            <h2 className="text-4xl lg:text-6xl font-black text-shadow">
              Ready to Transform Your Career?
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto font-medium">
              Join thousands of professionals who have found their perfect match on GrowHive
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700 shadow-2xl">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-primary-600 backdrop-blur-sm">
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