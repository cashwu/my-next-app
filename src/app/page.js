import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-[#9B9B9B]">
      {/* Hero 元件 */}
      <div className="relative w-full h-screen">
        <Image
          src="/og.jpg"
          alt="Hero 圖片"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Me</h1>
        </div>
      </div>

      {/* About 部分 - 背景色 #FFF */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-[#111]">ABOUT ME</h2>
          <div className="flex flex-col md:flex-row items-center">
            <p className="md:w-2/3 mb-8 md:mb-0 md:mr-8">
              我們的團隊擁有豐富的經驗和獨特的視角,能夠為您的品牌注入新的活力。
            </p>
            <Image
              src="/logo-example.jpg"
              alt="Logo 示例"
              width={300}
              height={200}
              className="md:w-1/3"
            />
          </div>
        </div>
      </section>

      {/* Service 部分 - 背景色 #F7F7F7 */}
      <section className="w-full bg-[#F7F7F7] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-[#111]">SERVICE 服務好周到</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['LOGO設計', '名片設計', '包裝設計', '海報文宣', '商標設計', '品牌設計', '平面設計', '網頁設計'].map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">圖</span>
                </div>
                <p className="text-center">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps 部分 - 背景色 #FFF */}
      <section className="w-full bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-[#111]">Steps 專案執行流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['需求訪談', '提案簡報', '修改調整', '驗收完成'].map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step}</h3>
                <p className="text-center text-sm">步驟說明文字</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full">聯絡我們</button>
          </div>
        </div>
      </section>
    </main>
  );
}