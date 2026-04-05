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
    description: '提供 GPU 設備進場、上架與部署安排，建立可持續管理的運作基礎。'
  },
  {
    title: '代管營運',
    description: '負責日常監控、異常追蹤、維運處理與基本營運流程，降低設備管理負擔。'
  },
  {
    title: '收益查詢',
    description: '合作後可透過統一入口查詢收入、電費、平台費、雜支、淨利與分配相關資料。'
  },
  {
    title: '資產可核對',
    description: '設備清單、序號、位置與合作關係可核對，管理邊界更清楚。'
  }
]

const valuePoints = [
  '降低自行建置與維護門檻',
  '減少設備管理與追蹤負擔',
  '查詢入口集中，資料更透明',
  '設備權屬清楚，合作邊界明確'
]

const workflow = [
  {
    title: '需求確認',
    description: '確認設備條件、合作方式與託管範圍。'
  },
  {
    title: '設備進場',
    description: '完成設備清點、建檔、部署與上架準備。'
  },
  {
    title: '代管營運',
    description: '進行日常監控、維護處理與異常追蹤。'
  },
  {
    title: '持續查詢',
    description: '合作後透過統一入口查看相關資料與紀錄。'
  }
]

const transparencyCards = [
  {
    title: '設備所有權',
    description: '設備所有權屬於設備所有人，飛皇提供託管與代管營運服務。'
  },
  {
    title: '電費與成本',
    description: '電費依實際度數與電價計算，必要維修與平台費用依實際發生列示。'
  },
  {
    title: '維修與雜支',
    description: '小額耗材按實際列示；單筆超過 2,000 元原則上事前告知。'
  },
  {
    title: '資料查詢',
    description: '合作後可查收入、電費、平台費、雜支、淨利與分配資料。'
  }
]

const consoleItems = [
  {
    title: '設備託管狀態',
    note: '進場、建檔、上架節點可追蹤'
  },
  {
    title: '營運監控與異常處理',
    note: '日常監看與異常紀錄持續更新'
  },
  {
    title: '收益資料查詢',
    note: '收入與成本資料集中檢視'
  },
  {
    title: '資產資訊與序號核對',
    note: '設備清單、序號與位置可核對'
  }
]

const faqItems = [
  {
    q: '飛皇提供的是什麼服務？',
    a: '飛皇提供 GPU 設備託管、部署、代管營運、監控與收益資料查詢服務。'
  },
  {
    q: '這是不是投資方案？',
    a: '不是。本服務屬設備託管與代管營運，不屬投資商品。'
  },
  {
    q: '設備所有權屬於誰？',
    a: '設備所有權屬於設備所有人，飛皇負責託管、監控與維運管理。'
  },
  {
    q: '可以在哪裡看資料？',
    a: '合作後可透過收益查詢入口登入，查看相關資料與紀錄。'
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_62%)]" />

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
        <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-14 pt-16 lg:grid-cols-2 lg:px-10 lg:pb-16 lg:pt-20">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs tracking-wider text-cyan-100">
              GPU Hosting & Managed Operations
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              GPU 設備託管與代管營運，
              <br className="hidden md:block" />
              讓管理與查詢更集中
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              專注 GPU 設備託管、部署、監控與代管營運，並提供統一資料查詢入口。設備所有權屬於設備所有人，合作流程與營運資料可持續查詢。
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
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wide text-cyan-200">Operation Console</h2>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs text-emerald-300">System Active</span>
            </div>
            <div className="space-y-3">
              {consoleItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-slate-100">{item.title}</p>
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <div className="mb-7 space-y-2">
            <p className="text-xs tracking-wider text-cyan-200">SERVICES</p>
            <h2 className="text-3xl font-semibold text-white">服務內容</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-6">
                <h3 className="mb-2.5 text-xl font-medium text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8">
            <p className="text-xs tracking-wider text-cyan-200">WHY FEIHUANG</p>
            <h2 className="mt-2.5 text-3xl font-semibold text-white">為什麼選擇飛皇</h2>
            <p className="mt-3 text-sm text-slate-300">從設備進場、代管營運到資料查詢，讓合作流程更清楚。</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {valuePoints.map((point, index) => (
                <div key={point} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs text-cyan-200">0{index + 1}</p>
                  <p className="mt-1.5 text-sm font-medium text-white">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-xs tracking-wider text-cyan-200">WORKFLOW</p>
          <h2 className="mt-2.5 text-3xl font-semibold text-white">合作流程</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-5">
                <p className="mb-2.5 text-xs text-cyan-200">STEP {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mb-2 text-lg font-medium text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="transparency" className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-950/15 p-8">
            <p className="text-xs tracking-wider text-cyan-200">TRUST & TRANSPARENCY</p>
            <h2 className="mt-2.5 text-3xl font-semibold text-white">透明管理</h2>
            <p className="mt-3 text-sm text-slate-300">合作資訊以可核對、可查詢為原則，管理關係與成本項目清楚列示。</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {transparencyCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
                  <h3 className="text-base font-medium text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/65 p-8 text-center">
            <p className="text-xs tracking-wider text-cyan-200">PORTAL</p>
            <h2 className="mt-2.5 text-3xl font-semibold text-white">收益查詢入口</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              透過統一入口查看合作後資料與紀錄，讓查詢與管理更集中。
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs">
              {['收入資料', '電費與成本', '分配紀錄'].map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
            <ExternalLink
              href="https://portal.feihuang.com.tw/login"
              className="mt-6 inline-flex rounded-lg bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              前往收益查詢
            </ExternalLink>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/55 p-8 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-8">
            <div>
              <p className="text-xs tracking-wider text-cyan-200">CONTACT</p>
              <h2 className="mt-2.5 text-3xl font-semibold text-white">聯絡 / 洽談</h2>
              <p className="mt-3 text-sm text-slate-300">提交表單後，我們將依設備條件與合作需求提供對應說明。</p>
              <ExternalLink
                href="https://forms.gle/9PvyWfecLaPCqNqC8"
                className="mt-6 inline-flex rounded-lg border border-cyan-300/60 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
              >
                前往聯絡 / 洽談
              </ExternalLink>
            </div>
            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.03] p-5 lg:mt-0">
              <p className="text-sm font-medium text-white">適合洽談的需求</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>・GPU 設備託管</li>
                <li>・代管流程了解</li>
                <li>・既有設備管理優化</li>
                <li>・設備部署與合作方式確認</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-xs tracking-wider text-cyan-200">FAQ</p>
          <h2 className="mt-2.5 text-3xl font-semibold text-white">常見問題</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {faqItems.map((item) => (
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
          <p className="mt-1 text-sm text-slate-400">Feihuang Compute Asset Management</p>
          <p className="mt-1 text-sm text-slate-400">統編 61227216</p>
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
