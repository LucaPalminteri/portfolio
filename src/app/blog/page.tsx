import BlogContainer from "@/src/components/BlogContainer/BlogContainer";
import { blogs } from "@/src/utils/blogs";

export default async function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 md:p-8 lg:p-12">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Blogs</h2>
      <BlogContainer blogs={blogs} />
    </div>
  )
}