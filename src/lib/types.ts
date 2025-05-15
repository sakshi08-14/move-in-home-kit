
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  category?: string;
  assignedTo?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  city?: string;
  profession?: string;
  bio?: string;
  preferences?: UserPreferences;
  verificationStatus?: "unverified" | "pending" | "verified";
  trustScore?: number;
}

export interface UserPreferences {
  lifestyle?: string[];
  cleanliness?: "very clean" | "clean" | "moderate" | "relaxed";
  smoking?: boolean;
  pets?: boolean;
  guestPreference?: "anytime" | "occasionally" | "rarely";
  budget?: number;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
  paidBy: string;
  splitBetween: string[];
  status: "pending" | "settled";
}

export interface Service {
  id: string;
  name: string;
  category: "internet" | "gas" | "maid" | "tiffin" | "laundry" | "repair" | "other";
  phone: string;
  rating: number;
  isVerified: boolean;
  reviews?: ServiceReview[];
}

export interface ServiceReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  date: Date;
  likes: number;
  comments: PostComment[];
  tags?: string[];
}

export interface PostComment {
  id: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  date: Date;
  likes: number;
}
