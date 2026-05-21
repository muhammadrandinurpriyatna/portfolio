import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const ref = useSignal<Element>();
  const name = useSignal('');
  const email = useSignal('');
  const wa = useSignal('');
  const message = useSignal('');
  const sent = useSignal(false);

  const handleSubmit = $(() => {
    if (!name.value || !message.value) return;
    const text = `Halo Randi! Perkenalkan, saya *${name.value}*${email.value ? ` (${email.value})` : ''}.\n\n${message.value}`;
    window.open(`https://wa.me/6282110474856?text=${encodeURIComponent(text)}`, '_blank');
    sent.value = true;
    setTimeout(() => { sent.value = false; }, 3000);
  });

  useVisibleTask$(({ track }) => {
    track(() => ref.value);
    if (!ref.value) return;

    let timers: number[] = [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const els = e.target.querySelectorAll<HTMLElement>(
          '.reveal, .reveal-l, .reveal-r, .reveal-scale'
        );
        if (e.isIntersecting) {
          els.forEach((el, i) => {
            timers.push(window.setTimeout(() => el.classList.add('visible'), i * 100));
          });
        } else {
          timers.forEach(clearTimeout);
          timers = [];
          els.forEach((el) => el.classList.remove('visible'));
        }
      });
    }, { threshold: 0.1 });

    observer.observe(ref.value);
    return () => { observer.disconnect(); timers.forEach(clearTimeout); };
  });

  return (
    <section id="contact" ref={ref} class="bg-bg">
      <div class="max-w-[1100px] mx-auto py-28 px-6">
        <span class="font-mono text-[11px] tracking-[3px] uppercase text-sa block mb-2.5 reveal">Get In Touch</span>
        <h2 class="text-[clamp(26px,4vw,40px)] font-extrabold text-ink mb-3.5 leading-[1.15] reveal d-100">Hubungi Saya</h2>
        <div class="w-[52px] h-[3px] bg-sa rounded-sm mb-16 reveal d-200" />

        <div class="grid grid-cols-2 gap-[60px] items-start max-[900px]:grid-cols-1">
          <div class="reveal-l d-200">
            <p class="text-[15.5px] text-ink-2 leading-[1.8] mb-8">
              Apakah Anda memiliki proyek yang ingin dikerjakan bersama, atau sekadar ingin
              berdiskusi tentang teknologi? Jangan ragu untuk menghubungi saya — saya selalu
              terbuka untuk peluang baru dan kolaborasi yang menarik.
            </p>

            <div class="flex flex-col gap-3.5">
              <a href="mailto:muhammadrandinurpriyatna@gmail.com" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Email</div>
                  <div class="text-sm text-ink font-medium mt-0.5">muhammadrandinurpriyatna@gmail.com</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/randiprytn" target="_blank" rel="noreferrer" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">LinkedIn</div>
                  <div class="text-sm text-ink font-medium mt-0.5">linkedin.com/in/randiprytn</div>
                </div>
              </a>

              <a href="tel:+6282110474856" class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl no-underline text-ink transition-all duration-300 hover:border-sa hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgb(var(--sa)/0.15)]">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Telepon</div>
                  <div class="text-sm text-ink font-medium mt-0.5">+62 821 1047 4856</div>
                </div>
              </a>

              <div class="flex items-center gap-3.5 p-4 px-5 bg-surf border border-bdr rounded-xl text-ink" style="cursor:default;">
                <div class="w-[42px] h-[42px] bg-sa/12 rounded-xl flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-sa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Lokasi</div>
                  <div class="text-sm text-ink font-medium mt-0.5">Bogor, Jawa Barat 16720</div>
                </div>
              </div>
            </div>
          </div>

          <div class="reveal-r d-300">
            <div class="text-[15px] font-bold text-ink mb-5">Kirim Pesan</div>

            <div class="flex flex-col gap-3.5">
              <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col gap-1.5">
                  <label class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Nama *</label>
                  <input
                    type="text"
                    placeholder="Nama lengkap"
                    value={name.value}
                    onInput$={(e) => { name.value = (e.target as HTMLInputElement).value; }}
                    class="bg-bg border border-bdr rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 outline-none transition-all focus:border-sa focus:ring-1 focus:ring-sa/30"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">No. WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="08xx-xxxx-xxxx"
                    value={wa.value}
                    onInput$={(e) => { wa.value = (e.target as HTMLInputElement).value; }}
                    class="bg-bg border border-bdr rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 outline-none transition-all focus:border-sa focus:ring-1 focus:ring-sa/30"
                  />
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Email</label>
                <input
                  type="email"
                  placeholder="email@contoh.com"
                  value={email.value}
                  onInput$={(e) => { email.value = (e.target as HTMLInputElement).value; }}
                  class="bg-bg border border-bdr rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 outline-none transition-all focus:border-sa focus:ring-1 focus:ring-sa/30"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] text-ink-3 uppercase tracking-[1px] font-mono">Pesan *</label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan proyek atau kebutuhan Anda..."
                  value={message.value}
                  onInput$={(e) => { message.value = (e.target as HTMLTextAreaElement).value; }}
                  class="bg-bg border border-bdr rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 outline-none transition-all focus:border-sa focus:ring-1 focus:ring-sa/30 resize-none"
                />
              </div>

              <button
                onClick$={handleSubmit}
                class="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-grad text-[#0a0a0a] transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgb(var(--sa)/0.35)] disabled:opacity-50"
              >
                {sent.value ? (
                  <>
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    Pesan Terkirim!
                  </>
                ) : (
                  <>
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Kirim via WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
