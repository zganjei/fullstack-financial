import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {

  return (
    <main className="flex h-full flex-col items-center justify-center">
        <FaceFrownIcon className="h-20 w-20 text-gray-400" />
        <h2 className="text-center text-2xl font-bold text-gray-900">
            Invoice not found   
        </h2>
        <p className="text-center text-gray-500">
            The invoice you are looking for does not exist.
        </p>
        <Link  
            href="/dashboard/invoices"
            className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"   
        >
            Back to Invoices    
        </Link>
    </main>
);    
}