import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, DollarSign, Clock, Users, FileText, Plus, X } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useAuth } from '../context/AuthContext';

export const PostJobPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: [''],
    responsibilities: [''],
    employment_type: 'full-time',
    experience_level: 'entry',
    location: '',
    remote_allowed: false,
    salary_min: '',
    salary_max: '',
    skills_required: [''],
    benefits: [''],
    application_deadline: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Redirect if not a startup
  if (!user || user.role !== 'startup') {
    navigate('/');
    return null;
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].filter((_: any, i: number) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.description.trim()) newErrors.description = 'Job description is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.salary_min) newErrors.salary_min = 'Minimum salary is required';
    if (!formData.salary_max) newErrors.salary_max = 'Maximum salary is required';
    if (parseInt(formData.salary_min) >= parseInt(formData.salary_max)) {
      newErrors.salary_max = 'Maximum salary must be greater than minimum';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would make an API call to create the job
      console.log('Job posted:', formData);
      
      navigate('/dashboard');
    } catch (error) {
      setErrors({ general: 'Failed to post job. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const ArrayInput = ({ 
    field, 
    label, 
    placeholder 
  }: { 
    field: string; 
    label: string; 
    placeholder: string; 
  }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {formData[field as keyof typeof formData].map((item: string, index: number) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={item}
              onChange={(e) => handleArrayChange(field, index, e.target.value)}
              placeholder={placeholder}
              className="flex-1"
            />
            {formData[field as keyof typeof formData].length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeArrayItem(field, index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => addArrayItem(field)}
          className="flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add {label.slice(0, -1)}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Post a New Job
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Find the perfect candidate for your startup
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {errors.general && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <p className="text-red-600 dark:text-red-400 text-sm">{errors.general}</p>
          </div>
        )}

        {/* Basic Information */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Input
                label="Job Title"
                placeholder="e.g. Senior React Developer"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                error={errors.title}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Employment Type
              </label>
              <select
                value={formData.employment_type}
                onChange={(e) => handleInputChange('employment_type', e.target.value)}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Experience Level
              </label>
              <select
                value={formData.experience_level}
                onChange={(e) => handleInputChange('experience_level', e.target.value)}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="entry">Entry Level</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <Input
              label="Location"
              placeholder="e.g. Mumbai, India"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              error={errors.location}
              icon={<MapPin className="h-5 w-5" />}
              required
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remote_allowed"
                checked={formData.remote_allowed}
                onChange={(e) => handleInputChange('remote_allowed', e.target.checked)}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="remote_allowed" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Remote work allowed
              </label>
            </div>

            <Input
              label="Application Deadline"
              type="date"
              value={formData.application_deadline}
              onChange={(e) => handleInputChange('application_deadline', e.target.value)}
              icon={<Clock className="h-5 w-5" />}
            />
          </div>
        </Card>

        {/* Salary Information */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Salary Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Minimum Salary (₹ per year)"
              type="number"
              placeholder="e.g. 600000"
              value={formData.salary_min}
              onChange={(e) => handleInputChange('salary_min', e.target.value)}
              error={errors.salary_min}
              icon={<DollarSign className="h-5 w-5" />}
              required
            />
            <Input
              label="Maximum Salary (₹ per year)"
              type="number"
              placeholder="e.g. 1000000"
              value={formData.salary_max}
              onChange={(e) => handleInputChange('salary_max', e.target.value)}
              error={errors.salary_max}
              icon={<DollarSign className="h-5 w-5" />}
              required
            />
          </div>
        </Card>

        {/* Job Description */}
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Job Description
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the role, company culture, and what makes this opportunity exciting..."
                rows={6}
                className="block w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                required
              />
              {errors.description && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.description}</p>
              )}
            </div>

            <ArrayInput
              field="responsibilities"
              label="Responsibilities"
              placeholder="e.g. Develop and maintain web applications"
            />

            <ArrayInput
              field="requirements"
              label="Requirements"
              placeholder="e.g. 3+ years of React experience"
            />

            <ArrayInput
              field="skills_required"
              label="Required Skills"
              placeholder="e.g. React, TypeScript, Node.js"
            />

            <ArrayInput
              field="benefits"
              label="Benefits"
              placeholder="e.g. Health insurance, Stock options"
            />
          </div>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="lg"
            isLoading={isLoading}
          >
            Post Job
          </Button>
        </div>
      </form>
    </div>
  );
};