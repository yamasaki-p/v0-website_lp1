import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Clock,
  Award,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GrowthCommitLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Growth Commit" width={180} height={60} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#service" className="text-slate-600 hover:text-blue-600 transition-colors">
              サービス
            </Link>
            <Link href="#solution" className="text-slate-600 hover:text-blue-600 transition-colors">
              ソリューション
            </Link>
            <Link href="#advantages" className="text-slate-600 hover:text-blue-600 transition-colors">
              優位性
            </Link>
            <Link href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">資料請求</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-50 border border-blue-200">
            新規事業・DXリーダー育成サービス
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            確実な成果創出を実現する
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              ビジネスリーダー育成
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            学習者ジャーニーに沿った心理・認知を考慮した最適な学習体験デザインにより、
            実務に直結したDX・新規事業のリーダー人材を育成します
          </p>

          <div className="flex justify-center mb-12">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              資料請求（無料アセスメント付き）
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <BookOpen className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-slate-800 mb-2">マイクロラーニング</h3>
              <p className="text-sm text-slate-600">10-20分の短尺動画で隙間時間に学習</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <MessageCircle className="w-8 h-8 text-slate-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-slate-800 mb-2">プロコーチング</h3>
              <p className="text-sm text-slate-600">専門資格を持つコーチが学習を伴走</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <Target className="w-8 h-8 text-blue-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-slate-800 mb-2">ケース課題中心</h3>
              <p className="text-sm text-slate-600">実務に直結した課題で実践的学習</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <TrendingUp className="w-8 h-8 text-slate-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-slate-800 mb-2">科学的手法</h3>
              <p className="text-sm text-slate-600">忘却曲線に沿った学習定着支援</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white" id="problem">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">このような課題を抱えていませんか？</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              多くの企業がDX・新規事業推進における人材育成で同様の課題に直面しています
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "40〜50代社員のリスキリングへの意欲が弱い",
              "人的資本経営の報告が必要だが、社内の人材育成が進んでいない",
              "DXや生成AI研修を実施しているが、実務で成果が表れていない",
              "業務時間内の研修時間調整が困難。1日研修は欠席や中抜けが多発",
              "リスキリング対象者のスキルギャップが大きく、何から始めれば良いか分からない",
              "研修効果の測定や可視化ができていない",
            ].map((problem, index) => (
              <Card key={index} className="border-l-4 border-l-slate-400 shadow-sm">
                <CardContent className="p-6">
                  <p className="text-slate-700">{problem}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">課題を放置すると...</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">!</span>
                </div>
                <p className="text-slate-700">中堅リーダーが育たず、DXや新規事業などの変革が進まない</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">!</span>
                </div>
                <p className="text-slate-700">生成AIによる業務効率化についていけず、競合と大きな差が開く</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-blue-50" id="solution">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Growth Commitの解決アプローチ</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              科学的根拠に基づいた学習手法とプロフェッショナルコーチングの組み合わせ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">学習体験デザイン</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">マイクロラーニング</h4>
                    <p className="text-slate-600">10〜20分程度の短尺学習で、忙しいミドル層も隙間時間で学習可能</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">リピテーションラーニング</h4>
                    <p className="text-slate-600">忘却曲線に沿った最適なタイミングでの復習・振り返り機会を提供</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">ケース課題中心学習</h4>
                    <p className="text-slate-600">受講者の業界・職種に合わせた実務直結型の課題で学習効果を最大化</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Learning Experience Design"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Professional Coaching"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">プロフェッショナルコーチング</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">学習プラン設計</h4>
                    <p className="text-slate-600">個人の状況に合わせた実行可能な学習計画をサポート</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">実務への紐づけ支援</h4>
                    <p className="text-slate-600">学習内容の実務活用プロセスを上長も含めて設計</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-800">動機付け・効力感向上</h4>
                    <p className="text-slate-600">リスキリングへの取り組みを継続的にサポート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white" id="service">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">サービス詳細</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              IPAの各役割に応じた学習コンテンツとプロコーチによるハイブリッド学習
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-2" />
                  学習アプリ
                </CardTitle>
                <CardDescription className="text-blue-100">
                  動画学習・テスト・ケース課題が統合されたプラットフォーム
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">動画学習</h4>
                    <p className="text-slate-600 text-sm mb-3">短尺10〜20分の学習動画で通勤時間などの隙間時間に学習</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">テスト機能</h4>
                    <p className="text-slate-600 text-sm mb-3">忘却曲線に則った最適なタイミングでの復習問題出題</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">ケース出題</h4>
                    <p className="text-slate-600 text-sm">受講者の業界・領域に近い実務直結型のケース課題</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-slate-600 text-white">
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  プロフェッショナルコーチ
                </CardTitle>
                <CardDescription className="text-slate-100">
                  DX・新規事業の専門性とコーチング資格を有するプロが伴走
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">学習プラン設計</h4>
                    <p className="text-slate-600 text-sm mb-3">個人の状況に合わせた実行可能な学習計画サポート</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">実務への紐づけ支援</h4>
                    <p className="text-slate-600 text-sm mb-3">学習内容の実務活用プロセスを上長も含めて設計</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">継続的サポート</h4>
                    <p className="text-slate-600 text-sm">リスキリングへの動機付けと効力感向上を実現</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">IPAの各役割に対応</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                "ビジネスアーキテクト",
                "デザイナー",
                "ソフトウェアエンジニア",
                "データアナリスト",
                "データセキュリティ",
              ].map((role, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="font-semibold text-slate-800">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-slate-50" id="advantages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">他社サービスとの比較優位性</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              科学的手法とプロフェッショナルサポートによる確実な成果創出
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-blue-700">著しく高い学習効果</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1Day研修ではなく、伴走支援で確実な学習定着を実現</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">科学的方法論に則った学習で確実な成果を支援</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-slate-500">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-slate-700">実務活用にコミット</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">実業務に近いケース課題で研修効果を着実なものに</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">プロコーチが実務での活用まで伴走</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-blue-700">リーズナブルな価格</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">アプリとプロ専門家のハイブリッドでコスパを実現</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">業界トップクラスのコストパフォーマンス</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">信頼の根拠</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              豊富な経験と専門性、科学的手法に裏打ちされたサービス品質
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">多様な経験</h3>
              <p className="text-slate-600 text-sm">DX・新規事業のコンサルタント及び事業担当者で開発</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">プロの体験設計</h3>
              <p className="text-slate-600 text-sm">サービスデザインのプロフェッショナルがサービスを開発</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">コーチング認定資格</h3>
              <p className="text-slate-600 text-sm">プロのコーチがカリキュラムやサポートを実施</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">科学的実証</h3>
              <p className="text-slate-600 text-sm">認知科学、教育心理学、学習方略に沿った学習プラン設計</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">よくあるご質問</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">お客様からよくいただくご質問にお答えします</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "どんな企業規模・業界でも導入できますか？",
                  a: "はい。主に大企業〜中堅企業を想定していますが、DX・新規事業リーダーの育成が急務であれば業界や規模を問いません。まずはお気軽にご相談ください。",
                },
                {
                  q: "プログラムの標準期間は？",
                  a: "推奨は3〜6か月です。10〜20分のマイクロラーニング動画と伴走コーチングの組み合わせで、忙しいリーダー層でも無理なく完走できます。",
                },
                {
                  q: "受講対象者のレベルに制限はありますか？",
                  a: "30〜50代の中堅社員を中心に設計していますが、DX/新規事業に関わるリーダー候補であれば若手〜シニアまで柔軟にカスタマイズ可能です。",
                },
                {
                  q: "コーチはどんな人が担当しますか？",
                  a: "DX・新規事業の実務経験に加え、コーチング資格や同等の知識・経験を有するプロフェッショナルのみをアサイン。貴社の事業ドメインや文化を踏まえてマッチングします。",
                },
                {
                  q: "成果はどう測定しますか？",
                  a: "ケース課題のアウトプット採点、行動観察、LMS上の学習ログ、上司フィードバックを組み合わせてスコアリングします。相談の上、人的資本経営の開示資料にも使えるレポートを作成。",
                },
                {
                  q: "社内で学習時間が取りづらいのですが……",
                  a: "1ユニット10〜20分の動画とフルモバイル対応で、移動時間や業務のすき間で学べます。さらにコーチが学習計画を一緒に立て、受講者と上司間で合意を形成します。",
                },
                {
                  q: "価格帯はどのくらい？",
                  a: "受講人数・カリキュラム深度により変動します。動画＋プロコーチ伴走としては業界トップクラスのコストパフォーマンスを実現しています。詳細はお見積もりいたします。",
                },
                {
                  q: "自社の実務課題をそのまま持ち込めますか？",
                  a: "可能です。受講者の業界・職種に合わせたカスタムケースを作成し、実務課題を題材にしたワークショップやコーチングを行います。",
                },
                {
                  q: "生成AI関連スキルも学べますか？",
                  a: "はい。生成AI活用モジュールを標準搭載し、最新ツールのビジネス活用ケースを実演＋実務演習で学びます。",
                },
                {
                  q: "導入までのリードタイムは？",
                  a: "最短2週間でスタート可能です。1)ヒアリング → 2)カリキュラムカスタマイズ → 3)アカウント発行 → 4)キックオフという流れです。",
                },
                {
                  q: "まずは何をすればいい？",
                  a: "「資料請求」ボタンからご連絡ください。今なら特典としてDX学習組織アセスメントシートを無料でお送りします。",
                },
              ].map((faq, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="bg-white border border-slate-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold text-slate-800 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-4">{faq.a}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">今すぐDXリーダー育成を始めませんか？</h2>
            <p className="text-xl text-blue-100 mb-8">
              資料請求いただいた方に、DX学習組織アセスメントシートを無料でプレゼント
            </p>

            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">資料請求フォーム</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="お名前*" required />
                  <Input placeholder="会社名*" required />
                </div>
                <Input type="email" placeholder="メールアドレス*" required />
                <Input placeholder="電話番号" />
                <Textarea placeholder="ご質問・ご要望がございましたらご記入ください" rows={3} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                  <Download className="w-5 h-5 mr-2" />
                  無料資料をダウンロード
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-4">
                ※入力いただいた情報は、弊社プライバシーポリシーに基づき適切に管理いたします
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Clock className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">最短2週間で開始</h4>
                <p className="text-blue-100 text-sm">スピーディーな導入支援</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Award className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">無料アセスメント</h4>
                <p className="text-blue-100 text-sm">現状診断シート付き</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">専門家による相談</h4>
                <p className="text-blue-100 text-sm">カスタマイズ提案</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Growth Commit"
                  width={120}
                  height={40}
                  className="h-6 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-slate-300 text-sm">確実な成果創出を実現するビジネスリーダー育成サービス</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    マイクロラーニング
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    プロコーチング
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ケース課題
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    学習管理システム
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    よくあるご質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    導入事例
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    技術サポート
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@growthcommit.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>03-1234-5678</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>東京都渋谷区</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Growth Commit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
