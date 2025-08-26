import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="max-w-md text-muted-foreground mb-8">
        Unfortunately, the page you requested does not exist or has been moved.
      </p>
      <Button asChild variant="default">
        <Link href="/">
          Return to Home
        </Link>
      </Button>
    </div>
  );
} 