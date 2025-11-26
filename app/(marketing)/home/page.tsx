
export default function Home(){
  return (
        <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-2/3">

                <article className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-xl dark:mb-12 border-l-4 border-brand transition-colors duration-300">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span className="bg-brand text-white text-xs font-semibold px-2.5 py-0.5 rounded">Featured</span>
                    </div>
                    <a href="#">
                        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 hover:text-brand transition-colors duration-200">
                            Zero-config backends on Vercel AI Cloud
                        </h1>
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                        Introducing a new paradigm for building AI-powered applications. Deploy scalable, serverless backends for your AI models with zero configuration. Focus on your product, not your infrastructure.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>By Marcos Silva & Dan Abramov</span>
                        <span className="mx-2">•</span>
                        <time dateTime="2023-10-26">October 26, 2023</time>
                    </div>
                </article>

                <section>
                    <h2 className="text-2xl font-bold mb-8 border-b py-2 my-3 border-gray-200 dark:border-gray-700">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="p-6 grow">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Engineering</span>
                                </div>
                                <a href="#">
                                    <h3 className="text-xl font-bold mb-3 hover:text-brand transition-colors duration-200">
                                        You can just ship agents
                                    </h3>
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                    Dan Fein explores the streamlined process of building and deploying autonomous agents, simplifying what was once a complex task.
                                </p>
                            </div>
                            <div className="px-6 pb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>By Dan Fein</span>
                                <span className="mx-2">•</span>
                                <time dateTime="2023-10-25">Oct 25, 2023</time>
                            </div>
                        </article>

                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Product</span>
                                </div>
                                <a href="#">
                                    <h3 className="text-xl font-bold mb-3 hover:text-brand transition-colors duration-200">
                                        Built-in durability: Introducing WDK
                                    </h3>
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                    Pranay, Aria, and the team introduce the Workflow Development Kit, a new tool for creating resilient and long-running workflows.
                                </p>
                            </div>
                            <div className="px-6 pb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>By Pranay et al.</span>
                                <span className="mx-2">•</span>
                                <time dateTime="2023-10-24">Oct 24, 2023</time>
                            </div>
                        </article>

                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Tutorials</span>
                                </div>
                                <a href="#">
                                    <h3 className="text-xl font-bold mb-3 hover:text-brand transition-colors duration-200">
                                        A Beginner's Guide to Tailwind CSS
                                    </h3>
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                    Learn how to build modern websites quickly with the world's most popular utility-first CSS framework.
                                </p>
                            </div>
                            <div className="px-6 pb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>By John Smith</span>
                                <span className="mx-2">•</span>
                                <time dateTime="2023-10-22">Oct 22, 2023</time>
                            </div>
                        </article>

                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>Design</span>
                                </div>
                                <a href="#">
                                    <h3 className="text-xl font-bold mb-3 hover:text-brand transition-colors duration-200">
                                        10 UI/UX Principles for Better Web Apps
                                    </h3>
                                </a>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                                    Discover the fundamental principles that can elevate your user interface and experience design to the next level.
                                </p>
                            </div>
                            <div className="px-6 pb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span>By Emily Carter</span>
                                <span className="mx-2">•</span>
                                <time dateTime="2023-10-18">Oct 18, 2023</time>
                            </div>
                        </article>

                    </div>
                </section>
            </div>

            <aside className="lg:w-1/3 lg:sticky lg:top-24 h-fit space-y-3">
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg dark:mb-8 transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-4">About TechBlog</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        We are a team of engineers, designers, and product managers sharing insights on building modern software. Our goal is to demystify complex topics and help you ship better products, faster.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg dark:transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        <a href="#" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200">Engineering</a>
                        <a href="#" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200">Product</a>
                        <a href="#" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200">Design</a>
                        <a href="#" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200">Tutorials</a>
                        <a href="#" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors duration-200">AI</a>
                    </div>
                </div>

            </aside>
        </div>
    </main>

  )
};

