'use client';
import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
});

const AppMockup = () => (
  <div style={{ padding: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: 200, background: '#0B1F3A', borderRadius: 28, padding: '20px 16px',
      border: '8px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
      position: 'relative' }}>
      {/* Notch */}
      <div style={{ width: 60, height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3,
        margin: '0 auto 16px' }} />
      {/* Chart */}
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Heart Rate Variability</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
          {[60, 80, 55, 90, 70, 95, 65, 88, 72].map((h, i) => (
            <motion.div key={i}
              initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              style={{ flex: 1, borderRadius: 3, background: i === 5 ? '#00C4D4' : 'rgba(0,196,212,0.3)' }} />
          ))}
        </div>
      </div>
      {/* Stats rows */}
      {[
        { label: 'Stress Score', val: '42', color: '#4ADE80', status: 'Normal' },
        { label: 'Arterial Score', val: '78', color: '#00C4D4', status: 'Good' },
        { label: 'ANS Balance', val: '0.86', color: '#FFD60A', status: 'Optimal' },
      ].map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '6px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{r.label}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: r.color }}>{r.val}</div>
          </div>
          <div style={{ fontSize: 9, padding: '2px 8px', borderRadius: 100,
            background: `${r.color}22`, color: r.color, fontWeight: 700 }}>{r.status}</div>
        </div>
      ))}
    </div>
  </div>
);

export const FeaturesSection = () => {
  const stressItems = ['ความเครียดทางกาย', 'ความเครียดทางจิตใจ', 'ระดับความเครียดโดยรวม', 'สมดุลระบบประสาทอัตโนมัติ', 'ความทนทานต่อความเครียด'];
  const arterialItems = ['อัตราการเต้นของหัวใจ', 'Type สภาวะหลอดเลือด (7 ประเภท)', 'ความยืดหยุ่นหลอดเลือดแดง', 'ความยืดหยุ่นส่วนปลาย', 'ระดับสุขภาพหลอดเลือด'];

  return (
    <section id="features" suppressHydrationWarning style={{ background: '#fff', padding: '112px 0' }}>
      <div className="container">
        <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: 72 }}>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#00C4D4', background: 'rgba(0,196,212,0.08)', padding: '6px 16px',
            borderRadius: 100, display: 'inline-block', marginBottom: 20 }}>ฟีเจอร์หลัก</span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#0B1F3A',
            letterSpacing: '-1px', marginBottom: 16, lineHeight: 1.1 }}>4 โหมดการตรวจวัด</h2>
          <p style={{ fontSize: 17, color: '#64748B', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            ครอบคลุมสุขภาพหัวใจ หลอดเลือด และสุขภาพจิตครบจบในอุปกรณ์เดียว
          </p>
        </motion.div>

        {/* 2 cards */}
        <div className="grid-2" style={{ gap: 24, marginBottom: 80 }}>
          {[
            { icon: '❤️', title: 'Stress Test', sub: 'ประเมินระดับความเครียด', items: stressItems,
              note: 'วิเคราะห์ด้วย Heart Rate Variability (HRV)', color: '#FF6B6B', bg: '#fff5f5', border: 'rgba(255,107,107,0.15)' },
            { icon: '🩸', title: 'Arterial Health Test', sub: 'ประเมินสุขภาพหลอดเลือด', items: arterialItems,
              note: 'วิเคราะห์ด้วย APG (Accelerated Plethysmography)', color: '#00C4D4', bg: '#f0fdff', border: 'rgba(0,196,212,0.15)' },
          ].map((f, fi) => (
            <motion.div key={fi} {...fadeUp(fi * 0.12)}
              style={{ borderRadius: 24, border: `1px solid ${f.border}`, boxShadow: '0 4px 40px rgba(0,0,0,0.05)',
                background: f.bg, padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: `${f.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#0B1F3A', letterSpacing: '-0.3px' }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: f.color, fontWeight: 600 }}>{f.sub}</div>
                </div>
              </div>
              {f.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 + fi * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0',
                    borderBottom: i < f.items.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${f.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, color: f.color, fontWeight: 800, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{item}</span>
                </motion.div>
              ))}
              <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 20, fontStyle: 'italic' }}>{f.note}</p>
            </motion.div>
          ))}
        </div>

        {/* Breathing + Meditation */}
        <div className="grid-2" style={{ gap: 24, marginBottom: 80 }}>
          {[
            { icon: '🌬️', title: 'Breathing Training', sub: 'ฝึกหายใจลดความเครียด',
              color: '#4ADE80', bg: '#f0fdf4', border: 'rgba(74,222,128,0.15)',
              items: ['ฝึกหายใจตามจังหวะที่แนะนำ', 'เลือกระดับความยากได้', 'เสียงธรรมชาติประกอบการฝึก', 'แสดงกราฟการหายใจ real-time', 'คะแนนการฝึกหลังจบ session'],
              note: 'ช่วยปรับสมดุลระบบประสาทอัตโนมัติ (ANS)' },
            { icon: '🧘', title: 'Meditation', sub: 'กำทำสมาธิ รักษาสมดุลอารมณ์',
              color: '#A78BFA', bg: '#faf5ff', border: 'rgba(167,139,250,0.15)',
              items: ['โหมดสมาธิพร้อม biofeedback', 'เลือกเสียงธรรมชาติที่ต้องการ', 'ติดตามระดับความผ่อนคลาย', 'รักษาสมดุลทางอารมณ์', 'รายงานผลหลังการทำสมาธิ'],
              note: 'ลดความเครียดสะสม ปรับปรุงคุณภาพการนอน' },
          ].map((f, fi) => (
            <motion.div key={fi} {...fadeUp(fi * 0.12)}
              style={{ borderRadius: 24, border: `1px solid ${f.border}`, boxShadow: '0 4px 40px rgba(0,0,0,0.05)',
                background: f.bg, padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: `${f.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#0B1F3A', letterSpacing: '-0.3px' }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: f.color, fontWeight: 600 }}>{f.sub}</div>
                </div>
              </div>
              {f.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 + fi * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0',
                    borderBottom: i < f.items.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${f.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, color: f.color, fontWeight: 800, flexShrink: 0 }}>✓</div>
                  <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{item}</span>
                </motion.div>
              ))}
              <p style={{ fontSize: 12, color: '#9CA3AF', marginTop: 20, fontStyle: 'italic' }}>{f.note}</p>
            </motion.div>
          ))}
        </div>

        {/* App showcase — no image */}
        <motion.div {...fadeUp(0.1)}
          className="grid-2" style={{ borderRadius: 28, overflow: 'hidden', background: '#0B1F3A',
            boxShadow: '0 24px 80px rgba(11,31,58,0.2)' }}>
          <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#00C4D4', marginBottom: 20 }}>Smart App</div>
            <h3 style={{ fontSize: 32, fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', marginBottom: 16, lineHeight: 1.15 }}>
              รายงานสุขภาพ<br />บนสมาร์ทโฟน
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
              แสดงผล real-time ผ่าน Bluetooth · iOS & Android · cloud sync อัตโนมัติ
            </p>
            {['ไม่ต้องเจาะเลือด · ไม่ต้องงดอาหาร', 'ผลทันทีภายใน 60 วินาที', 'รายงานพร้อมคำแนะนำสุขภาพ'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#00C4D4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 9, color: '#fff', fontWeight: 800, flexShrink: 0, marginTop: 2 }}>✓</div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{t}</span>
              </div>
            ))}
          </div>
          {/* App mockup instead of photo */}
          <div style={{ background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AppMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
