import Image from 'next/image';
import Tag from '../Elements/Tag';
import Link from 'next/link';

const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="inline-block overflow-hidden rounded-xl relative">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"
      />

      <Image src={ blog.image.filePath.replace("../public", "") }
        placeholder="blur"
        blurDataURL={ blog.image.blurhashDataUrl }
        className="w-full h-full object-cover object-center rounded-xl"
        alt={ blog.title }
        width={ blog.image.width }
        height={ blog.image.height }
      />

      <div className="w-full absolute bottom-0 p-10 z-20 text-light">
        <Tag link={ `/categories/${blog.tags[0]}` } name={ blog.tags[0] }
          className="px-6 py-2 text-sm !border"
        />
        <Link href={ blog.url } className="mt-6">
          <h2 className="text-2xl font-bold capitalize mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500">
              { blog.title }
            </span>
          </h2>
        </Link>
      </div>

    </div>
  )
};

export default BlogLayoutOne