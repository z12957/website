const navItems = [
  { label: '服務內容', href: '#services' },
  { label: '合作流程', href: '#workflow' },
  { label: '透明管理', href: '#transparency' },
  { label: '收益查詢', href: 'https://portal.feihuang.com.tw/login', external: true },
  { label: '聯絡洽談', href: 'https://forms.gle/9PvyWfecLaPCqNqC8', external: true }
]

const services = [
  {
    title: '設備託管',
    description: '提供 GPU 設備進場、上架與託管安排，建立穩定可管理的運作基礎。'
  },
  {
    title: '代管營運',
    description: '由團隊執行日常監控、維運處理與異常追蹤，降低設備管理負擔。'
  },
  {
    title: '收益查詢',
    description: '合作後可透過統一入口查詢資料，流程一致、資訊集中。'
  },
  {
    title: '資產可核對',
    description: '設備資訊與管理關係可核對，合作邊界清楚，紀錄可追蹤。'
  }
]

const valuePoints = [
  {
    title: '降低自行建置門檻',
    description: '不必從零建立機房與維運流程，快速進入可管理狀態。'
  },
  {
    title: '減少維護人力壓力',
    description: '交由專業團隊執行日常管理，內部團隊可聚焦核心業務。'
  },
  {
    title: '資料查詢集中透明',
    description: '透過統一入口掌握營運資訊，溝通與對帳更有效率。'
  },
  {
    title: '權屬與責任明確',
    description: '設備所有權歸屬清楚，管理責任與合作範圍定義明確。'
  }
]

const workflow = [
  {
    title: '需求確認',
    description: '確認設備條件、託管需求與合作範圍，完成前置資訊對齊。'
  },
  {
    title: '設備進場',
    description: '安排設備進場與部署，建立可持續管理的運作環境。'
  },
  {
    title: '代管營運',
    description: '啟動日常監控與維運流程，持續維持設備穩定運作。'
  },
  {
    title: '持續查詢',
    description: '合作後由統一入口查詢資料，定期掌握狀態與紀錄。'
  }
]

const focusList = [
  '設備權屬清楚，管理關係明確',
  '查詢流程統一，資料可持續追蹤',
  '代管流程標準化，溝通成本更低',
  'AI 基礎設施服務導向，非金融商品'
]

const faqs = [
  {
    q: '飛皇提供的是什麼服務？',
    a: '飛皇提供 GPU 設備託管、代管營運、部署監控與資料查詢服務。'
  },
  {
    q: '這是不是投資方案？',
    a: '不是。飛皇提供的是設備託管與代管營運服務，不屬於投資商品。'
  },
  {
    q: '設備所有權屬於誰？',
    a: '設備所有權屬於設備所有人，飛皇負責託管管理與維運處理。'
  },
  {
    q: '可以在哪裡看資料？',
    a: '合作後可透過收益查詢入口登入，查閱合作相關資料。'
  }
]

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_62%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-sm font-semibold tracking-wide text-white md:text-base">
            飛皇智算資產管理企業社
            <span className="ml-2 hidden text-xs font-normal text-slate-400 lg:inline">Feihuang Compute Asset Management</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) =>
              item.external ? (
                <ExternalLink key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </ExternalLink>
              ) : (
                <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <ExternalLink
            href="https://forms.gle/9PvyWfecLaPCqNqC8"
            className="rounded-lg border border-cyan-300/70 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-400/20"
          >
            立即洽談
          </ExternalLink>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-20 lg:grid-cols-2 lg:px-10 lg:pt-24">
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs tracking-wider text-cyan-100">
              GPU Hosting & Managed Operations
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              飛皇智算 GPU 設備託管方案
              <br className="hidden md:block" />
              專注透明管理與穩定代管
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              我們提供設備託管、代管營運、部署監控與資料查詢服務。
              流程一致、權屬清楚、資訊可核對，協助合作方更有效率地管理 GPU 設備。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ExternalLink
                href="https://portal.feihuang.com.tw/login"
                className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                收益查詢
              </ExternalLink>
              <ExternalLink
                href="https://forms.gle/9PvyWfecLaPCqNqC8"
                className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                聯絡洽談
              </ExternalLink>
              <ExternalLink
                href="https://www.facebook.com/share/18aNhUtjVG/?mibextid=wwXIfr"
                className="rounded-lg border border-white/15 px-5 py-2.5 text-sm text-slate-300 transition hover:border-white/40 hover:text-white"
              >
                官方粉絲專頁
              </ExternalLink>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium text-cyan-200">Operation Console</h2>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs text-emerald-300">Online</span>
            </div>
            <div className="space-y-3">
              {['設備託管', '代管營運', '收益查詢', '資產可核對'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="text-sm text-slate-200">{item}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-relaxed text-slate-300">
              後台資料入口統一，合作資訊可持續查詢與核對。
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {focusList.map((item, index) => (
              <article key={item} className="rounded-2xl border border-amber-300/25 bg-slate-900/60 p-5">
                <p className="text-xs text-amber-200">0{index + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 space-y-3">
            <p className="text-xs tracking-wider text-cyan-200">SERVICES</p>
            <h2 className="text-3xl font-semibold text-white">服務內容</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
                <h3 className="mb-3 text-xl font-medium text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8">
            <p className="text-xs tracking-wider text-cyan-200">WHY FEIHUANG</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">低理解成本，清楚可執行</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {valuePoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="text-sm font-medium text-white">{point.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <p className="text-xs tracking-wider text-cyan-200">WORKFLOW</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">合作流程</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-5">
                <p className="mb-3 text-xs text-cyan-200">STEP {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mb-2 text-lg font-medium text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="transparency" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-950/20 p-8">
            <p className="text-xs tracking-wider text-cyan-200">TRUST & TRANSPARENCY</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">透明管理與合作邊界</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-200">
              <li>設備所有權屬於設備所有人。</li>
              <li>本服務屬設備託管與代管營運，不屬投資商品。</li>
              <li>合作後可透過統一入口查詢相關資料。</li>
              <li>管理流程、設備資訊、合作關係清楚透明。</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-8 text-center">
            <p className="text-xs tracking-wider text-cyan-200">PORTAL</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">收益查詢入口</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
              查詢系統提供正式登入與資料檢視流程，協助合作方持續掌握設備管理資訊。
            </p>
            <ExternalLink
              href="https://portal.feihuang.com.tw/login"
              className="mt-7 inline-flex rounded-lg bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              前往收益查詢
            </ExternalLink>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs tracking-wider text-cyan-200">CONTACT</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">聯絡 / 洽談</h2>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>・想做 GPU 設備託管</li>
                <li>・想了解代管流程</li>
                <li>・已有設備，想降低管理負擔</li>
              </ul>
            </div>
            <ExternalLink
              href="https://forms.gle/9PvyWfecLaPCqNqC8"
              className="mt-7 inline-flex rounded-lg border border-cyan-300/60 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20 lg:mt-0"
            >
              立即聯絡洽談
            </ExternalLink>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
          <p className="text-xs tracking-wider text-cyan-200">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">常見問題</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-xl border border-white/10 bg-slate-900/55 p-5">
                <h3 className="text-base font-medium text-white">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
          <p className="text-sm font-medium text-white">飛皇智算資產管理企業社</p>
          <p className="mt-1 text-sm text-slate-400">統編：61227216</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <ExternalLink href="https://portal.feihuang.com.tw/login" className="text-slate-300 hover:text-white">
              收益查詢
            </ExternalLink>
            <ExternalLink href="https://forms.gle/9PvyWfecLaPCqNqC8" className="text-slate-300 hover:text-white">
              聯絡洽談
            </ExternalLink>
            <ExternalLink href="https://www.facebook.com/share/18aNhUtjVG/?mibextid=wwXIfr" className="text-slate-300 hover:text-white">
              官方粉絲專頁
            </ExternalLink>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            本網站內容以設備託管、代管營運與資料查詢說明為主，不構成投資招攬或收益保證。
          </p>
        </div>
      </footer>
    </div>
  )
}
