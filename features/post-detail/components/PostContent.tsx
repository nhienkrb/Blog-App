export function PostContent() {
  return (
    <article className="prose prose-lg max-w-none text-gray-700">
      <div className="text-center mb-8 not-prose">
        <h2 className="text-6xl font-bold text-blue-600 tracking-tighter">TypeScript</h2>
      </div>

      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Giới thiệu</h3>
      <p className="leading-relaxed mb-6">
        TypeScript là một siêu tập hợp của JavaScript, điều này có nghĩa là bất kỳ chương trình JavaScript hợp lệ nào cũng là một chương trình TypeScript hợp lệ. TypeScript thêm kiểu tĩnh và các đối tượng khác vào JavaScript. Nó được phát triển và bảo trì bởi Microsoft. TypeScript có thể được sử dụng để phát triển các ứng dụng chạy ở phía máy chủ và phía khách hàng (ví dụ: với Node.js hoặc Deno và các trình duyệt web).
      </p>
    </article>
  );
}