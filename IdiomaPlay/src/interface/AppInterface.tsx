// Generated by https://quicktype.io

export interface GetAllLessonsResponse {
  items: Lesson[];
  meta:  Meta;
}

export interface Lesson {
  id:    number;
  title: string;
}

export interface Meta {
  totalItems:   number;
  itemCount:    number;
  itemsPerPage: number;
  totalPages:   number;
  currentPage:  number;
}

// Generated by https://quicktype.io

export interface GetLessonResponse {
  id:        number;
  title:     string;
  exercises: Exercise[];
}

export interface Exercise {
  id:            number;
  title:         string;
  type:          string;
  sentence:      string; 
  options:       string[];
  correctOption: string;
}
