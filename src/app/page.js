import { allBlogs } from 'contentlayer/generated';
import HomeCover from '../components/Home/HomeCover';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover blogs={allBlogs} />
    </main>
  )
};
