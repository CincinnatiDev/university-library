import { Button } from '@/components/ui/button';
import BookForm from '@/components/admin/forms/BookForm';
import Link from 'next/link';

const NewBookPage = () => {
  return (
    <>
      <Button asChild className='back-btn'>
        <Link href='/admin/books'>Go Back</Link>
      </Button>
      <section className='w-full max-w-2xl'>
        <BookForm />
      </section>
    </>
  );
};

export default NewBookPage;
