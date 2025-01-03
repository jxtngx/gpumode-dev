import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        GPU Mode
      </h1>
      <p className="mb-4">
        {`Welcome to GPU Mode, your favorite GPU community!`}
      </p>
      <div className="my-8">
        <BlogPosts/>
      </div>
    </section>
  )
}
