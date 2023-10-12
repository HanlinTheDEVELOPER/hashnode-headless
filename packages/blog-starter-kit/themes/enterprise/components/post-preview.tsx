import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import { resizeImage } from "@starter-kit/utils/image";
import { getBaseUrl } from '@starter-kit/utils/consts';

type Author = {
  name: string;
  username: string;
  profilePicture: string;
};

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  url: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  const postURL = `${getBaseUrl()}/${slug}`;
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="col-span-1">
        <CoverImage
          slug={slug}
          title={title}
          src={
            resizeImage(coverImage, { w: 1600, h: 840, c: "thumb" }) ||
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format"
          }
        />
      </div>
      <div className="flex flex-col col-span-1 gap-2">
        <h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
          <Link
            as={postURL}
            href={postURL}
            className="hover:underline hover:text-primary-600 dark:hover:text-primary-500"
          >
            {title}
          </Link>
        </h1>
        <Link as={postURL} href={postURL}>
          <p className="leading-snug text-md text-slate-500 dark:text-neutral-400">
            {excerpt.length > 140 ? excerpt.substring(0, 140) + "…" : excerpt}
          </p>
        </Link>
        <div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
          <Link as={postURL} href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
