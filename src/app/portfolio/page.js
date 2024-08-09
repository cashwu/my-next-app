import Link from 'next/link';

export const metadata = {
  title: '我的作品集 | 我的個人網站',
  description: '查看我的最新項目和作品。這裡展示了我在各個領域的專業技能和創意成果。',
  openGraph: {
    title: '我的作品集 | 我的個人網站',
    description: '查看我的最新項目和作品。這裡展示了我在各個領域的專業技能和創意成果。',
    url: 'https://my-next-app-8gh.pages.dev/portfolio',
    siteName: '我的個人網站',
    images: [
      {
        url: 'https://my-next-app-8gh.pages.dev/og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
}

const portfolioItems = [
  { id: '01', title: '項目 1', description: '這是我的第一個項目描述。' },
  { id: '02', title: '項目 2', description: '這是我的第二個項目描述。' },
  { id: '03', title: '項目 3', description: '這是我的第三個項目描述。' },
];

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">我的作品集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <Link href={`/portfolio/item${item.id}`} key={item.id}>
            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}