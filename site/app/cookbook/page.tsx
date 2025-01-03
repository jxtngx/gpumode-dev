import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Cookbook',
  description: 'Gen AI with NVIDIA NeMo',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Cookbook</h1>
      <BlogPosts />
    </section>
  )
}
