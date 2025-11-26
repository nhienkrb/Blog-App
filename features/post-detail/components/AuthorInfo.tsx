import React from "react";

interface AuthorInfoProps {
  name: string;
  avatar: string;
  views: string;
  date: string;
}

export function AuthorInfo({ name, avatar, views, date }: AuthorInfoProps) {
  return (
    <div className="flex items-center text-sm text-gray-600 mb-8 space-x-4">
      <img 
        src={avatar} 
        alt={name} 
        className="w-10 h-10 rounded-full mr-3 object-cover" 
      />
      <span className="font-medium text-gray-900">By {name}</span>
      <span>•</span>
      <span>{views} lượt xem</span>
      <span>•</span>
      <span>{date}</span>
    </div>
  );
}