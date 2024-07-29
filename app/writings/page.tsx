import Link from 'next/link'
import { blogPosts } from '../data/blogPosts'

// Rest of the code remains the same
// Sample blog post data
// const blogPosts = [
//   {
//     id: 1,
//     title: "Introduction to Machine Learning",
//     excerpt: "An overview of fundamental machine learning concepts and techniques.",
//     date: "2024-07-15",
//   },
//   {
//     id: 2,
//     title: "Advanced RecSys Techniques",
//     excerpt: "Exploring cutting-edge recommendation system algorithms and their applications.",
//     date: "2024-07-10",
//   },
//   {
//     id: 3,
//     title: "The Future of LLMs",
//     excerpt: "Predictions and insights into the evolving landscape of large language models.",
//     date: "2024-07-05",
//   },
//   // Add more blog posts as needed
// ]

export default function Writings() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold">Your Name</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/writings" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Writings
                </Link>
                <Link href="/about" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About me
                </Link>
                <Link href="/projects" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-robotto mb-6">Writings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/writings/${post.id}`} className="text-blue-600 hover:text-blue-800">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}