import { Search } from "lucide-react";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            We understand that your academic journey needs a lot of resources,
            and that is exactly what we have for you
          </div>
          <h1>Find all the resources you need to study smarter</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading 8 text-gray-600">
            Discover academic notes, study materials, summaries and documents.
            Preview resources before accessing the full documents
          </p>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search for notes, subjects or documents..."
                className="h-12 w-full rounded-lg border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button size="lg">Search</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
