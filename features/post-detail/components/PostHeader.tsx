interface PostHeaderProps {
  title: string;
  authorName: string;
  authorAvatar: string;
  views: string;
  date: string;
}

export function PostHeader({ title, authorName, authorAvatar, views, date }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
        {title}
      </h1>
      
      <div className="flex items-center text-sm text-gray-600 space-x-4">
        <img src={authorAvatar} alt={authorName} className="w-10 h-10 rounded-full mr-3" />
        <span className="font-medium text-gray-900">By {authorName}</span>
        <span>•</span>
        <span>{views} lượt xem</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </header>
  );
}