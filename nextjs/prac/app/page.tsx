import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <p className="text-sky-700 text-3xl font-medium">hello world</p>{' '}
      <Button variant={'destructive'}>hi there</Button>
    </div>
  );
}
