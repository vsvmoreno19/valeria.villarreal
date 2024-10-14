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
    category: Category
    comments: Comment[];
  };
  
  export type Comment = {
    id: string;
    author: string;
    content: string;
  };
  
  
export interface Category {
  id: string;
  name: string;
}