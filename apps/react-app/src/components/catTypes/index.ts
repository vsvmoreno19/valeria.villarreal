export type Input = {
    value: string;
    error: string;
  };
  
  export type FormInputs = {
    title: Input;
    description: Input;
    category: Input;
    image: Input;
  };
  
  export type Post = {
    id: string;
    title: string;
    image: string;
    description: string;
    category: CategoriesResponse | null;
    comments: any;
  };
  
  export type Comment = {
    id: string;
    author: string;
    content: string;
  };
  
  export interface PostResponse {
    _id: string;
    title: string;
    image: string;
    description: string;
    category: CategoriesResponse | null;
    comments: CommentResponse[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface CategoriesResponse {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  export interface CommentResponse {
    _id: string;
    author: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
export interface Category {
  id: string;
  name: string;
}