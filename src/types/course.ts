export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  instructor: string;
  lessons: number;
  level: CourseLevel;
  durationHours: number;
  price: number;
};

// props của course

export type CourseCardProps = {
  course: Course;
  // isFavorite?: boolean;
  // onToggleFavorite?: (courseId: number) => void;
}; 

export type CourseGridProps = {
  courses: Course[];
  // favoriteIds?: number[];
  // onToggleFavorite?: (courseId: number) => void;
};

export type CourseDetailProps = {
  course: Course;
  // isFavorite: boolean;
  // onToggleFavorite: (courseId: number) => void;
};
