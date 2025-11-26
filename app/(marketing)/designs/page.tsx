import React from "react";

export default function Design() {
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-1/4">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <img
                  src="https://placehold.co/32x32"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">John Doe</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <i className="fas fa-user-friends text-xl text-gray-600 dark:text-gray-400"></i>
                <span>Bạn bè</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <i className="fas fa-store text-xl text-gray-600 dark:text-gray-400"></i>
                <span>Marketplace</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <i className="fas fa-calendar text-xl text-gray-600 dark:text-gray-400"></i>
                <span>Sự kiện</span>
              </a>
            </nav>
          </aside>

          <div className="flex-1 max-w-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <div className="flex space-x-3">
                <img
                  src="https://placehold.co/40x40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Bạn đang nghĩ gì?"
                  className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 focus:outline-none"
                />
              </div>
              <hr className="my-3 border-gray-200 dark:border-gray-700" />
              <div className="flex justify-around">
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i className="fas fa-video text-red-500"></i>
                  <span>Video trực tiếp</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i className="fas fa-image text-green-500"></i>
                  <span>Ảnh/video</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i className="fas fa-smile text-yellow-500"></i>
                  <span>Cảm xúc/hoạt động</span>
                </button>
              </div>
            </div>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-xs text-gray-500">
                      2 giờ trước <i className="fas fa-globe-asia"></i>
                    </p>
                  </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p className="mb-3">
                Đây là một bài đăng mẫu. Một ngày đẹp trời để đi chơi và tận
                hưởng cuộc sống! #happy #weekend
              </p>
              <img
                src="https://placehold.co/500x300"
                alt="Post image"
                className="w-full rounded-lg mb-3"
              />
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>
                  <i className="fas fa-thumbs-up"></i> 150 người khác
                </span>
                <span>23 bình luận · 5 chia sẻ</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <div className="flex justify-around mt-2">
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-thumbs-up text-blue-500"></i>
                  <span>Thích</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-comment text-gray-500"></i>
                  <span>Bình luận</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-share text-gray-500"></i>
                  <span>Chia sẻ</span>
                </button>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">Tech Blog</h4>
                    <p className="text-xs text-gray-500">
                      5 giờ trước <i className="fas fa-globe-asia"></i>
                    </p>
                  </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p className="mb-3">
                Kiến trúc Microservices đã thay đổi cách chúng ta xây dựng các
                ứng dụng phức tạp. Đọc bài viết của chúng tôi để tìm hiểu sâu
                hơn!
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 flex space-x-3">
                <img
                  src="https://placehold.co/120x120"
                  alt="Link preview"
                  className="w-24 h-24 rounded object-cover"
                />
                <div>
                  <h5 className="font-semibold">
                    Microservices vs. Monolith: A 5-Year Retrospective
                  </h5>
                  <p className="text-sm text-gray-500">techblog.io</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    A look back at our journey...
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2 mt-3">
                <span>
                  <i className="fas fa-thumbs-up"></i> 89 người khác
                </span>
                <span>12 bình luận · 2 chia sẻ</span>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <div className="flex justify-around mt-2">
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-thumbs-up text-blue-500"></i>
                  <span>Thích</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-comment text-gray-500"></i>
                  <span>Bình luận</span>
                </button>
                <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                  <i className="fas fa-share text-gray-500"></i>
                  <span>Chia sẻ</span>
                </button>
              </div>
            </article>
          </div>

          <aside className="hidden xl:block w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
              <h3 className="font-semibold mb-3">Trang của bạn</h3>
              <a
                href="#"
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i className="fas fa-store text-blue-500"></i>
                <span>Tech Blog Official</span>
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
              <h3 className="font-semibold mb-3">Sinh nhật</h3>
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🎂</div>
                <p>
                  <strong>Alice Chen</strong> và <strong>2 người khác</strong>{" "}
                  có sinh nhật hôm nay.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3">Gợi ý kết bạn</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://placehold.co/40x40"
                      alt="Suggestion"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4>Bob Johnson</h4>
                      <p className="text-xs text-gray-500">5 bạn chung</p>
                    </div>
                  </div>
                  <button className="text-blue-500 text-sm font-semibold hover:underline">
                    Thêm bạn bè
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://placehold.co/40x40"
                      alt="Suggestion"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4>Emily White</h4>
                      <p className="text-xs text-gray-500">2 bạn chung</p>
                    </div>
                  </div>
                  <button className="text-blue-500 text-sm font-semibold hover:underline">
                    Thêm bạn bè
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}