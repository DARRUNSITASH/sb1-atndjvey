export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructor_avatar?: string;
  duration_hours: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  thumbnail_url: string;
  price: number;
  rating: number;
  students_count: number;
  lessons: Lesson[];
  skills_learned: string[];
  prerequisites: string[];
  certificate_available: boolean;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration_minutes: number;
  video_url?: string;
  content?: string;
  order: number;
}

export interface CourseEnrollment {
  id: string;
  course_id: string;
  fresher_id: string;
  progress: number; // 0-100
  completed_lessons: string[];
  enrolled_at: string;
  completed_at?: string;
  certificate_earned: boolean;
}

export interface CourseFilters {
  search: string;
  category: string[];
  difficulty: string[];
  price_range: {
    min: number;
    max: number;
  };
  duration_range: {
    min: number;
    max: number;
  };
}