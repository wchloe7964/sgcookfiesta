"use client";

export default function ErrorDialog({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[12000] flex items-center justify-center bg-black/50">
      <div className="bg-white w-[300px] rounded-lg shadow-xl pt-6 overflow-hidden text-center">
        <h3 className="text-lg font-bold px-4 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 px-6 mb-6">{message}</p>
        <div className="border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-3 text-[#0078d4] font-semibold hover:bg-gray-50 active:bg-gray-100">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
