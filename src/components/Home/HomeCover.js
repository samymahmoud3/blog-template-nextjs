import { sortBlogs } from "@/src/utils";
import Link from 'next/link';
import Image from 'next/image';
import Tag from "../Elements/Tag";

const HomeCover = ({ blogs }) => {

  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">

        <div className="absolute top-0 right-0 bottom-0 left-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark/80 rounded-3xl z-0
        " />
      
        <Image src={ blog.image.filePath.replace("../public", "") }
          placeholder="blur"
          blurDataURL={ blog.image.blurhashDataUrl }
          className="w-full h-full object-cover object-center rounded-3xl -z-10"
          alt={ blog.title }
          fill
        />

        <div className="w-3/4 flex flex-col items-start justify-center z-0 text-light p-[5rem]">
          <Tag link={ `/categories/${blog.tags[0]}` } name={ blog.tags[0] } />
          <Link href={ blog.url } className="mt-6">
            <h1 className="text-4xl font-bold capitalize">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500">
                { blog.title }
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-in">
            { blog.description }
          </p>
        </div>
      
      </article>
    </div>
  )
};
export default HomeCover;