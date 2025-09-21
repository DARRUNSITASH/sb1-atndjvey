export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
}

export interface SearchParams {
  query: string;
  filters: Record<string, any>;
  sort: {
    field: string;
    direction: 'asc' | 'desc';
  };
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  created_at: string;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  type: 'text' | 'file';
  read: boolean;
  created_at: string;
}