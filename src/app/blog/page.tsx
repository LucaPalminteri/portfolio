import BlogContainer from "@/src/components/BlogContainer/BlogContainer";
import { blogs } from "@/src/utils/blogs";

export default async function BlogPage() {
  return (
    <div className="max-w-2xl mt-10">
      <h2 className="font-semibold text-2xl">Blogs</h2>
      <BlogContainer blogs={blogs} />
    </div>
  )
}