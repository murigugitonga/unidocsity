import { X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="border-t border border-gray-200 bg-white md:hidden">
      <div className="space-y-2 px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between pb-2">
          <span className="text-sm font-semibold text-gray-900">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>
        <Link
          to="/documents"
          onClick={onClose}
          className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Browse Documents
        </Link>
        <Link
          to="/login"
          onClick={onClose}
          className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Login
        </Link>

        <div className="pt-2">
          <Button size="md" className="w-full" onClick={onClose}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
