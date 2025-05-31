export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          GrowthCommit
        </h1>
        <p className="text-gray-600 mb-8">
          メインサイト準備中です
        </p>
        
        <div className="space-y-4">
          <a 
            href="/dx_lp1" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            DX LP を見る
          </a>
          
          <div className="text-sm text-gray-500">
            <p>近日公開予定:</p>
            <ul className="mt-2 space-y-1">
              <li>• マーケティングLP</li>
              <li>• プロダクトLP</li>
              <li>• 企業情報ページ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
