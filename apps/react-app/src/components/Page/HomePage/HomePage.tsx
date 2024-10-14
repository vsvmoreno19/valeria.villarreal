import PostList from '../../PostList';
import CategoryButtonGroup from '../../CategoryButtonGroup';
import CreatePostButton from '../../CreatePostButton';
import { Category } from '../../catTypes';

const categories: Category[] = [
  { id: "123", name: "Travel" },
  { id: "1234", name: "Food" },
];
const selectedCategory: Category = { id: "123", name: "Travel" };
const posts = [
  {
    id: "345",
    title: "The average path a grandparent took to get to school",
    image:
      "https://th.bing.com/th/id/R.385e7dbec0e6c313cfd6dc3b6fff1c95?rik=Ps5ZHpTWtX4y3A&pid=ImgRaw&r=0",
    description:
      "Description",
    category: null,
    comments: ["13242"],
  },
];

function HomePage() {
  return (
    <>
      <CreatePostButton />
      <CategoryButtonGroup
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <PostList />
    </>
  );
}

export default HomePage;