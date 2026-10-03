import { MockDocuments } from "@/data/mock/documents";
import DocumentCard from "../documents/DocumentCard";

export default function FeaturedDocuments() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-light">
              Featured documents
            </h2>
            <p>
              Explore our wide range of documents covering all academic areas
            </p>
          </div>
          <button
            type="button"
            className="hidden text-sm font-semibold text-blue-600 hover:text-blue-700 sm:block"
          >
            View all
          </button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MockDocuments.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  );
}
