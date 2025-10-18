import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CorporateGifting() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/coming-soon');
  }, [router]);

  return null;
}
