'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'SmartPulse แตกต่างจาก Pulse Oximeter ทั่วไปอย่างไร?',
    a: 'Pulse Oximeter วัดได้แค่ SpO2 และ Heart Rate เท่านั้น SmartPulse ใช้เทคโนโลยี APG + HRV วิเคราะห์ได้ถึง 10+ ค่าสุขภาพ รวมถึงระดับความเครียด สุขภาพหลอดเลือด และสมดุลระบบประสาทอัตโนมัติ ซึ่งเป็นข้อมูลที่ลึกและมีประโยชน์กว่ามาก',
  },
  {
    q: 'ผลที่ได้แม่นยำแค่ไหน เชื่อถือได้มั้ย?',
    a: 'SmartPulse ได้รับการรับรองมาตรฐานสากล CE, FCC, CFDA และ GMP จากเกาหลีใต้ ผลิตโดย Medicore Co., Ltd. ซึ่งเป็นบริษัทเทคโนโลยีการแพทย์ที่มีประสบการณ์กว่า 20 ปี อย่างไรก็ตาม ผลที่ได้เหมาะสำหรับการดูแลสุขภาพเบื้องต้น ไม่ใช่การวินิจฉัยโรคแทนแพทย์',
  },
  {
    q: 'ใช้งานยากมั้ย? ต้องมีความรู้ทางการแพทย์ไหม?',
    a: 'ใช้งานง่ายมาก — เพียงวางปลายนิ้วบนเซนเซอร์ กด Start บนแอป รอ 60 วินาที แอปจะแสดงผลพร้อมคำอธิบายภาษาไทยและคำแนะนำดูแลสุขภาพให้ทันที ไม่ต้องมีความรู้ทางการแพทย์แต่อย่างใด',
  },
  {
    q: 'รองรับสมาร์ทโฟนรุ่นไหน? ต้องดาวน์โหลดแอปไหม?',
    a: 'รองรับทั้ง iOS (iPhone) และ Android เชื่อมต่อผ่าน Bluetooth 4.0 ดาวน์โหลดแอปฟรีจาก App Store หรือ Google Play ข้อมูลจะถูก sync ขึ้น cloud อัตโนมัติ ติดตามพัฒนาการสุขภาพระยะยาวได้',
  },
  {
    q: 'เหมาะกับใครบ้าง? ใช้กับเด็กได้ไหม?',
    a: 'เหมาะกับผู้ใหญ่ทุกวัย โดยเฉพาะผู้ที่ต้องการติดตามสุขภาพหัวใจ มีความเครียดสูง หรือดูแลผู้สูงอายุในครอบครัว สำหรับเด็กแนะนำให้ปรึกษาแพทย์ก่อนใช้ เนื่องจากค่าอ้างอิงอาจแตกต่างจากผู้ใหญ่',
  },
  {
    q: 'สั่งซื้อได้ที่ไหน? มีหลังการขายไหม?',
    a: 'ติดต่อสั่งซื้อโดยตรงกับ Biofeedback Thailand Official ซึ่งเป็นตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย ติดต่อคุณธาริน อุเทนรัตน์ ทางอีเมล u.tharin@gmail.com หรือโทร 089-444-3424 มีบริการให้คำปรึกษาและหลังการขาย',
  },
  {
    q: 'ราคาเท่าไหร่? มีประกันไหม?',
    a: 'ติดต่อสอบถามราคาและโปรโมชั่นพิเศษได้ที่ 089-444-3424 หรือ u.tharin@gmail.com เราพร้อมให้ข้อมูลและใบเสนอราคาสำหรับทั้งการใช้งานส่วนตัวและองค์กร',
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section suppressHydrationWarning style={{ background: '#F8FAFC', padding: '112px 0' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#00C4D4', background: 'rgba(0,196,212,0.08)', padding: '6px 16px',
            borderRadius: 100, display: 'inline-block', marginBottom: 20 }}>FAQ</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#0B1F3A',
            letterSpacing: '-1px', marginBottom: 16, lineHeight: 1.1 }}>คำถามที่พบบ่อย</h2>
          <p style={{ fontSize: 17, color: '#64748B', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
            ทุกคำถามเกี่ยวกับ SmartPulse — ตอบครบ ชัดเจน
          </p>
        </motion.div>

        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ delay: i * 0.05 }}>
              <div
                onClick={() => setOpen(open === i ? null : i)}
                style={{ borderRadius: 16, background: '#fff',
                  border: open === i ? '1.5px solid rgba(0,196,212,0.4)' : '1px solid rgba(0,0,0,0.07)',
                  boxShadow: open === i ? '0 8px 32px rgba(0,196,212,0.1)' : '0 2px 12px rgba(0,0,0,0.04)',
                  overflow: 'hidden', transition: 'border 0.2s, box-shadow 0.2s', cursor: 'pointer' }}>

                {/* Question row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '22px 28px', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                      background: open === i ? '#00C4D4' : 'rgba(0,196,212,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: open === i ? '#fff' : '#00C4D4',
                      transition: 'all 0.2s' }}>Q</div>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#0B1F3A', lineHeight: 1.4 }}>
                      {f.q}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                    style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(0,0,0,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 18, color: '#64748B', fontWeight: 300 }}>+</motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
                      <div style={{ padding: '0 28px 24px 76px' }}>
                        <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', marginBottom: 18 }} />
                        <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.75, margin: 0 }}>
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 64 }}>
          <p style={{ fontSize: 16, color: '#64748B', marginBottom: 20 }}>
            ยังมีคำถามอื่นอีก? ติดต่อเราได้เลย
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href="mailto:u.tharin@gmail.com"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(0,196,212,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#00C4D4', color: '#fff', fontWeight: 700, fontSize: 14,
                padding: '13px 28px', borderRadius: 12, textDecoration: 'none' }}>
              📧 u.tharin@gmail.com
            </motion.a>
            <motion.a href="tel:+66894443424"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#0B1F3A', fontWeight: 700, fontSize: 14,
                padding: '13px 28px', borderRadius: 12, textDecoration: 'none',
                border: '1.5px solid rgba(11,31,58,0.15)' }}>
              📞 089-444-3424
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
