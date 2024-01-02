import Image from 'next/image';
import Tag from '../Elements/Tag';
import Link from 'next/link';
import { format } from 'date-fns';

const BlogLayoutTow = ({ blog }) => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-dark ">
      <Link href={ blog.url } className="col-span-4 rounded-xl overflow-hidden">
        <Image src={ blog.image.filePath.replace("../public", "") }
          placeholder="blur"
          blurDataURL={ blog.image.blurhashDataUrl }
          className="aspect-square w-full h-full object-cover object-center "
          alt={ blog.title }
          width={ blog.image.width }
          height={ blog.image.height }
        />
      </Link>

      <div className="col-span-8 w-full"> 
        <span className="uppercase font-semibold text-accent text-sm">{ blog.tags[0] }</span>
        <Link href={ blog.url } className="my-1 inline-block">
          <h2 className="text-lg font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_4px]
              hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500">
              { blog.title }
            </span>
          </h2>
        </Link>
        <span className="capitalize text-dark/50 font-semibold text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
};

export default BlogLayoutTow;