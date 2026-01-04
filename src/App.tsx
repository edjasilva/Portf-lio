import { motion } from 'framer-motion'
import { Backdrop } from './components/Backdrop'
import { Cursor } from './components/Cursor'
import { MagneticButton } from './components/MagneticButton'
import { Marquee } from './components/Marquee'
import { Reveal } from './components/Reveal'
import { BRAND, CASES, NAV, PROCESS, SERVICES } from './content'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Backdrop />
      <Cursor />
      <div className="grain" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#262624]/70 ring-1 ring-[#DFB969]/20">
              <span className="h-2 w-2 rounded-full bg-[#DFB969] shadow-[0_0_0_6px_rgba(223,185,105,.12)]" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              {BRAND.name}
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="group relative text-sm font-medium text-white/70 transition hover:text-white"
              >
                {i.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#DFB969]/70 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <MagneticButton
            href="#contato"
            className="inline-flex items-center justify-center rounded-full bg-[#DFB969] px-4 py-2 text-sm font-semibold text-black shadow-[0_24px_90px_rgba(223,185,105,.20)] ring-1 ring-[#F9E29E]/35 transition hover:bg-[#F9E29E]"
          >
            Vamos conversar
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="relative pb-16 pt-14 md:pb-24 md:pt-24">
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#DFB969]/10 blur-3xl" />
            <div className="absolute right-[-80px] top-44 h-[420px] w-[420px] rounded-full bg-[#F9E29E]/10 blur-3xl" />
          </div>

          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFB969]/20 bg-[#262624]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F9E29E]/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DFB969]" />
                  {BRAND.location}
                </p>
                <h1 className="text-balance text-[2.75rem] font-semibold leading-[0.98] tracking-tight md:text-7xl">
                  Tecnologia que vira
                  <span className="block text-white"> produto.</span>
                  <span className="block text-white/60">Do plano à execução.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
                  {BRAND.tagline} Entregamos design + engenharia com foco em impacto, clareza e uma experiência premium.
                </p>
              </Reveal>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticButton
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full bg-[#DFB969] px-5 py-3 text-sm font-semibold text-black ring-1 ring-[#F9E29E]/35 transition hover:bg-[#F9E29E]"
                >
                  Ver serviços
                </MagneticButton>
                <MagneticButton
                  href="#cases"
                  className="inline-flex items-center justify-center rounded-full bg-[#262624]/60 px-5 py-3 text-sm font-semibold text-white ring-1 ring-[#DFB969]/25 transition hover:bg-[#262624]/80"
                >
                  Ver cases
                </MagneticButton>
              </div>
            </div>

            <div className="md:col-span-4">
              <Reveal delay={0.12}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">O que fazemos</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      'Estratégia técnica e arquitetura',
                      'Front-end moderno (React)',
                      'Performance e observabilidade',
                      'Automação e integrações',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          <motion.div
            className="mt-12 grid gap-3 rounded-3xl border border-white/10 bg-black/25 p-4 backdrop-blur md:grid-cols-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { k: 'Entrega', v: 'rápida e mensurável' },
              { k: 'Qualidade', v: 'testes, padrões e DX' },
              { k: 'Parceria', v: 'comunicação direta' },
            ].map((i) => (
              <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">{i.k}</p>
                <p className="mt-2 text-sm font-medium text-white/85">{i.v}</p>
              </div>
            ))}
          </motion.div>

          <Marquee
            className="mt-10"
            items={['Estratégia', 'Produto', 'Engenharia', 'Performance', 'Dados', 'Automação']}
            speedSeconds={16}
          />
        </section>

        <section id="servicos" className="scroll-mt-24 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Serviços</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Um pacote completo para evoluir produto, plataforma e time — sem complicação.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 0.06}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-white/75">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#DFB969]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="cases" className="scroll-mt-24 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Cases</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Exemplos de impacto (troque pelos seus cases reais quando quiser).
            </p>
          </Reveal>

          <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2">
            <div className="flex min-w-full gap-4">
              {CASES.map((c, idx) => (
                <Reveal key={c.title} delay={idx * 0.06} className="min-w-[320px] flex-1 md:min-w-[420px]">
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#DFB969]/10 blur-3xl transition group-hover:bg-[#F9E29E]/10" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">{c.sector}</p>
                      <h3 className="mt-3 text-xl font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-4 text-sm text-white/70">{c.impact}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[#262624]/70 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-[#DFB969]/15"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="scroll-mt-24 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Processo</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Um método simples para reduzir risco e aumentar previsibilidade.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PROCESS.map((p, idx) => (
              <Reveal key={p.step} delay={idx * 0.06}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold tracking-widest text-white/60">{p.step}</p>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="sobre" className="scroll-mt-24 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Sobre</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <p className="text-white/70">
                  Somos uma consultoria focada em entregar valor rápido, com qualidade e bom gosto. Trabalhamos lado a lado
                  com o seu time para evoluir produto e plataforma, sem “tecnês” desnecessário.
                </p>
                <p className="mt-4 text-white/70">
                  Se você quiser, eu personalizo tudo: nome, cores, textos, cases e contato (WhatsApp, email, formulário).
                </p>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#DFB969]/10 to-white/5 p-7">
                <p className="text-xs uppercase tracking-widest text-white/50">Diferenciais</p>
                <ul className="mt-4 space-y-3">
                  {[
                    'Foco em impacto e métricas',
                    'Experiência premium (UX + performance)',
                    'Entrega com documentação e handoff',
                    'Transparência total no progresso',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F9E29E]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 py-16 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contato</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Conte rapidamente o que você quer construir/melhorar e eu retorno com próximos passos.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <form
                  className="grid gap-3"
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert('Formulário demo. Posso integrar com email/Sheets/CRM.')
                  }}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Seu nome"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/25"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Seu email"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/25"
                    />
                  </div>
                  <textarea
                    required
                    rows={5}
                    placeholder="Descreva o projeto (prazo, objetivo, stack atual...)"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/25"
                  />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/50">
                      Resposta em até 1 dia útil. {BRAND.location}
                    </p>
                    <MagneticButton className="inline-flex items-center justify-center rounded-full bg-[#DFB969] px-5 py-3 text-sm font-semibold text-black ring-1 ring-[#F9E29E]/35 transition hover:bg-[#F9E29E]">
                      Enviar
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-widest text-white/50">Direto</p>
                <p className="mt-3 text-sm text-white/70">Email</p>
                <a className="mt-1 block text-sm font-semibold text-white hover:underline" href={`mailto:${BRAND.email}`}>
                  {BRAND.email}
                </a>
                <p className="mt-6 text-sm text-white/70">Próximos passos</p>
                <ul className="mt-2 space-y-2">
                  {['Entender contexto', 'Definir escopo', 'Proposta com milestones'].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-white/75">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="border-t border-white/10 py-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-5">
              {NAV.map((i) => (
                <a key={i.href} href={i.href} className="text-sm text-white/60 hover:text-white">
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
