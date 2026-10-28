import { MessageCircle } from "lucide-react";
import Button from "../ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-blue-600 px-6 py-12 text-center sm:px-12">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
              Need help finding something?
            </h2>
            <p>
              Got a question about the right academic material or any resources?
              Don't hesitate to reach out to us.
            </p>

            <div>
              <Button variant="secondary" size="lg" type="button">
                Contact Us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
