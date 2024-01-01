import { cx } from '@/src/utils';
import Link from 'next/link';


const Tag = ({link="#", name, ...props}) => {
  return (
    <Link href={ link } className={cx("inline-block py-3 px-10 bg-dark capitalize font-semibold text-light rounded-full border-2 border-solid border-light hover:scale-105 transition-all ease duration-200", props.className )}>
      { name }
    </Link>
  )
};

export default Tag;