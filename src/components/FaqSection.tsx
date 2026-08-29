import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';
import { useLanguage } from '../i18n/LanguageContext';

export default function FaqSection() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 bg-luxury-dark/95 border-t border-gold-900/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* FAQ Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
            {language === 'id' ? 'Pertanyaan Umum' : 'Common Inquiries'}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gold-100 font-medium tracking-wide">
            {language === 'id' ? 'Panduan Tur & Pertanyaan Sering Diajukan' : 'Expedition Directives & FAQs'}
          </h2>
          <p className="font-sans text-sm text-gold-100/50 leading-relaxed font-light">
            {language === 'id'
              ? 'Segala hal yang perlu Anda ketahui untuk merencanakan liburan privat impian Anda di Bali.'
              : 'Everything you need to plan your pristine private vacation with peace of mind.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left" id="faq-accordion-container">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-luxury-gray/40 border border-gold-900/10 hover:border-gold-400/15 rounded-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <div className="flex items-start space-x-4 pr-4">
                    <HelpCircle size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                    <span className="font-serif text-base text-gold-100 font-medium tracking-wide">
                      {language === 'id' ? (
                        faq.question === 'Are all tours completely private?' ? 'Apakah semua tur bersifat sepenuhnya privat?' :
                        faq.question === 'What is the cancellation policy for weather conditions?' ? 'Bagaimana kebijakan pembatalan jika terjadi cuaca buruk?' :
                        faq.question === 'Can dietary restrictions be accommodated?' ? 'Apakah bisa melayani pantangan diet khusus?' :
                        faq.question === 'How far in advance should we secure our dates?' ? 'Berapa hari sebelumnya kami harus memesan jadwal?' :
                        'Apa saja yang perlu kami persiapkan dan bawa?'
                      ) : faq.question}
                    </span>
                  </div>
                  <div className="text-gold-400 flex-shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Accordion content */}
                {isOpen && (
                  <div className="px-6 pb-6 pl-[38px] border-t border-gold-900/5 animate-fade-in">
                    <p className="font-sans text-xs md:text-sm text-gold-100/60 leading-relaxed font-light">
                      {language === 'id' ? (
                        faq.question === 'Are all tours completely private?' ? 'Ya. Setiap pemesanan di balinikitour 100% privat. Seluruh mobil, helikopter, yacht, supir pribadi, dan pemandu lokal didedikasikan khusus untuk rombongan Anda saja. Kami berkomitmen untuk menjamin kenyamanan Anda dengan tidak mencampur rombongan.' :
                        faq.question === 'What is the cancellation policy for weather conditions?' ? 'Keselamatan Anda adalah prioritas absolut kami. Jika tur terpaksa dibatalkan karena cuaca buruk, angin kencang di laut, atau kondisi darurat gunung berapi, kami menawarkan reschedule tanggal gratis atau pengembalian dana penuh 100% tanpa potongan.' :
                        faq.question === 'Can dietary restrictions be accommodated?' ? 'Tentu saja. Baik Anda seorang vegetarian/vegan, menjalani diet bebas gluten, keto, halal, ataupun memiliki alergi makanan tertentu, koki pribadi kami dan restoran mitra bintang 5 akan menyusun menu khusus yang sehat. Mohon cantumkan detail alergi Anda di formulir pemesanan.' :
                        faq.question === 'How far in advance should we secure our dates?' ? 'Karena kami melayani dengan standar sangat eksklusif dan armada terbatas, jadwal kami seringkali terisi penuh. Kami sangat menyarankan Anda melakukan pemesanan minimal 2 hingga 4 minggu sebelumnya, terutama saat musim liburan.' :
                        'Untuk Volcano Jeep Adventure: siapkan jaket tebal (suhu pagi hari di gunung berapi berkisar 12°C). Untuk Private Yacht: bawa pakaian renang, tabir surya SPF tinggi, dan kacamata hitam. Untuk Ubud Retreat: siapkan sandal berjalan santai dan pakaian ganti untuk upacara Melukat.'
                      ) : faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
