import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of Sustainable Agriculture",
      excerpt: "Exploring how technology is revolutionizing farming practices and creating a more sustainable future for agriculture.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "How Data Analytics is Transforming Crop Yields",
      excerpt: "Learn how farmers are using data-driven insights to optimize their crop production and increase yields.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "7 min read"
    },
    {
      title: "Reducing Food Waste Through Smart Logistics",
      excerpt: "Discover how intelligent supply chain management is helping reduce food waste and improve efficiency.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1184&q=80",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-krishian-dark mb-6">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in agriculture and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden card-hover shadow-lg border border-gray-100">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-krishian-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    Agriculture
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-krishian-dark mb-3 hover:text-krishian-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="text-krishian-green font-medium hover:text-krishian-dark transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
