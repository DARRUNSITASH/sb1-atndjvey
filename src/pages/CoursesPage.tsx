import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ListFilter as Filter, Star, Clock, Users, Play, BookOpen } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Course, CourseFilters } from '../types/courses';

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'React Development Mastery',
    description: 'Master React from basics to advanced concepts including hooks, context, and performance optimization.',
    instructor: 'Sarah Johnson',
    instructor_avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    duration_hours: 12,
    difficulty: 'intermediate',
    category: 'Programming',
    thumbnail_url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    price: 0,
    rating: 4.8,
    students_count: 1250,
    lessons: [],
    skills_learned: ['React', 'JavaScript', 'State Management', 'Component Design'],
    prerequisites: ['Basic JavaScript', 'HTML/CSS'],
    certificate_available: true,
    status: 'published',
    created_at: '2025-01-10T00:00:00Z'
  },
  {
    id: '2',
    title: 'Startup Fundamentals',
    description: 'Learn the essential skills needed to launch and grow a successful startup from idea to scale.',
    instructor: 'Mike Chen',
    instructor_avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    duration_hours: 8,
    difficulty: 'beginner',
    category: 'Business',
    thumbnail_url: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    price: 3999,
    rating: 4.9,
    students_count: 890,
    lessons: [],
    skills_learned: ['Business Planning', 'Market Research', 'Fundraising', 'Team Building'],
    prerequisites: [],
    certificate_available: true,
    status: 'published',
    created_at: '2025-01-09T00:00:00Z'
  },
  {
    id: '3',
    title: 'Digital Marketing Essentials',
    description: 'Comprehensive guide to digital marketing including SEO, social media, content marketing, and analytics.',
    instructor: 'Emma Davis',
    instructor_avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    duration_hours: 15,
    difficulty: 'beginner',
    category: 'Marketing',
    thumbnail_url: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    price: 5999,
    rating: 4.7,
    students_count: 1580,
    lessons: [],
    skills_learned: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics'],
    prerequisites: [],
    certificate_available: true,
    status: 'published',
    created_at: '2025-01-08T00:00:00Z'
  }
];

const categories = ['All', 'Programming', 'Design', 'Business', 'Marketing', 'Data Science'];
const difficulties = ['beginner', 'intermediate', 'advanced'];

export const CoursesPage: React.FC = () => {
  const [courses] = useState<Course[]>(mockCourses);
  const [filters, setFilters] = useState<CourseFilters>({
    search: '',
    category: [],
    difficulty: [],
    price_range: { min: 0, max: 1000 },
    duration_range: { min: 0, max: 50 }
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter(course => {
    if (filters.search && !course.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !course.instructor.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (selectedCategory !== 'All' && course.category !== selectedCategory) {
      return false;
    }
    if (filters.difficulty.length > 0 && !filters.difficulty.includes(course.difficulty)) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Skill Up Your Career
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Learn from industry experts and earn certificates that boost your career
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              placeholder="Search courses or instructors..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              icon={<Search className="h-5 w-5" />}
            />
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Difficulty Level
                  </label>
                  <div className="space-y-2">
                    {difficulties.map(difficulty => (
                      <label key={difficulty} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.difficulty.includes(difficulty)}
                          onChange={(e) => {
                            const newDifficulties = e.target.checked
                              ? [...filters.difficulty, difficulty]
                              : filters.difficulty.filter(d => d !== difficulty);
                            setFilters(prev => ({ ...prev, difficulty: newDifficulties }));
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {difficulty}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {filteredCourses.length} courses
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card padding="none" className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={course.price === 0 ? 'success' : 'info'}>
                    {course.price === 0 ? 'Free' : `$${course.price}`}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="warning">{course.difficulty}</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src={course.instructor_avatar}
                    alt={course.instructor}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.instructor}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students_count.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration_hours}h</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-1" />
                    Enroll Now
                  </Button>
                  <Button variant="ghost" size="sm">
                    Preview
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No courses found</h3>
            <p>Try adjusting your search criteria to find more courses</p>
          </div>
        </Card>
      )}
    </div>
  );
};