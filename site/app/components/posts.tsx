import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/cookbook/utils'
import ArrowIconUp from 'app/components/arrowIconUp'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            a.metadata.position < b.metadata.position
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-2 mb-4"
            href={`/cookbook/${post.slug}`}
          >
            <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
              <ArrowIconUp/>
              <hr></hr>
              <p className="text-neutral-900 dark:text-neutral-100 w-[150px]">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 w-[300px] tabular-nums">
                {post.metadata.subtitle}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}