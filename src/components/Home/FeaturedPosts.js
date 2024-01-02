import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTow from "../Blog/BlogLayoutTow";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full  text-4xl font-bold capitalize">Featured Posts</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2">
          <BlogLayoutOne blog={ sortedBlogs[1] } />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTow blog={ sortedBlogs[2] } />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTow blog={ sortedBlogs[3] } />
        </article>
      </div>
    </section>
  )
}

export default FeaturedPosts;