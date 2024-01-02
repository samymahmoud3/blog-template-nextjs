import { allBlogs } from 'contentlayer/generated';
import HomeCover from '../components/Home/HomeCover';
import FeaturedPosts from '../components/Home/FeaturedPosts';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover blogs={ allBlogs } />
      <FeaturedPosts blogs={ allBlogs } />
    </main>
  )
};
