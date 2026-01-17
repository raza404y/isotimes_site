import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function NotFound() {
    return (
        <div className="bg-white min-h-[60vh] flex items-center">
            <Container>
                <div className="text-center">
                    <h1 className="font-serif text-6xl md:text-8xl font-bold text-gray-200 mb-4">
                        404
                    </h1>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                        Try searching or go back to the homepage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="btn btn-primary"
                        >
                            Go Home
                        </Link>
                        <Link
                            href="/search"
                            className="btn btn-outline"
                        >
                            Search Articles
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
