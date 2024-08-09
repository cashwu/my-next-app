import { notFound } from 'next/navigation';

const portfolioItems = [
  { id: 'item01', title: '項目 1', description: '這是我的第一個項目的詳細描述。' },
  { id: 'item02', title: '項目 2', description: '這是我的第二個項目的詳細描述。' },
  { id: 'item03', title: '項目 3', description: '這是我的第三個項目的詳細描述。' },
];

export function generateMetadata({ params }) {
  const item = portfolioItems.find(item => item.id === params.id);
  if (!item) return {};

  return {
    title: `${item.title} | 我的作品集`,
    description: item.description,
  };
}

export default function PortfolioItem({ params }) {
  const item = portfolioItems.find(item => item.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">{item.title}</h1>
      <p className="text-xl">{item.description}</p>
    </main>
  );
}
