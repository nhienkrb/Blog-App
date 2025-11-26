interface TableRowActionProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export function TableRowAction({ onEdit, onDelete }: TableRowActionProps) {
  return (
    <div className="flex items-center justify-end">
      <button
        onClick={onEdit}
        className="cursor-pointer text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3 transition-colors p-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
        title="Sửa"
      >
        Sửa
      </button>
      <button
        onClick={onDelete}
        className="cursor-pointer text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors p-1 rounded hover:bg-red-50 dark:hover:bg-red-900/20"
        title="Xóa"
      >
        Xóa
      </button>
    </div>
  );
}