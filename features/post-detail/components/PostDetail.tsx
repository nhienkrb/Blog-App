import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { TableOfContents } from "./TableOfContents";

export default function PostDetail() {
  const postData = {
    title: "Tìm hiểu TypeScript trong 5 phút",
    authorName: "Duong Tien Dat",
    authorAvatar: "https://placehold.co/40x40",
    views: "7.5K",
    date: "2 ngày trước"
  };

  return (
    <main className="container mx-auto px-6 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-12">
        
        <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
          <PostHeader {...postData} />
          <PostContent />
        </div>

        <TableOfContents />
        
      </div>
    </main>
  );
}