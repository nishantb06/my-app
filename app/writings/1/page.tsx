import { blogPosts } from '../../data/blogPosts'

export default function BlogPost({ params }: { params: { id: string } }) {
  console.log('Params:', params);
  console.log('Params ID:', params.id);
  console.log('Params ID type:', typeof params.id);
  console.log('All blog posts:', blogPosts);
  
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  console.log('Found post:', post);

  if (!post) {
    return <div>Post not found. ID: {params.id}</div>
  }

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p>{post.excerpt}</p>
      {/* Add the full content of your blog post here */}
    </div>
  )
}