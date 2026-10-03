import { FileText } from "lucide-react";

import type { MockDocument } from "@/data/mock/documents";

type DocumentCardProps = {
  document: MockDocument;
};

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:translate-y-1 hover:border-gray-300 hover:shadow-md">
      <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-gray-100">
        <FileText size={48} strokeWidth={1.5} className="text-gray-400" />
      </div>
      <div className="mb-3">
        <span className="text-sm font-medium text-blue-600">
          {document.subject}
        </span>
      </div>
      <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
        {document.title}
      </h3>
      <p className="mt-2 text-sm text-gray-500">{document.university}</p>
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">
        <span>{document.type}</span>
        <span>{document.pages}</span>
      </div>
    </article>
  );
}
