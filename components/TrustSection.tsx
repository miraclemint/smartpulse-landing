'use client';
import React from 'react';
import { motion } from 'framer-motion';

const institutions = [
  { name: 'กรมสุขภาพจิต', type: 'รัฐบาล' },
  { name: 'รพ.ศรีธัญญา', type: 'โรงพยาบาล' },
  { name: 'รพ.สวนปรุง', type: 'โรงพยาบาล' },
  { name: 'สถาบันจิตเวชศาสตร์\nสมเด็จเจ้าพระยา', type: 'สถาบัน' },
  { name: 'สถาบันกัลยาณ์\nราชนครินทร์', type: 'สถาบัน' },
  { name: 'ศูนย์สุขภาพจิตที่ 10', type: 'ศูนย์' },
  { name: 'รพ.แก่งคอย', type: 'โรงพยาบาล' },
  { name: 'รพ.ตากใบ', type: 'โรงพยาบาล' },
];

const stats = [
  { n: '20+', label: 'สถาบันสุขภาพ' },
  { n: '15+', label: 'จังหวัดทั่วไทย' },
  { n: '100+', label: 'รพ.สต. ที่ใช้งาน' },
];

export const TrustSection = () => (
  <section suppressHydrationWarning style={{ background: '#F8FAFC', padding: '72px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: 48 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#64748B', letterSpacing: '0.1em',
          textTransform: 'uppercase', marginBottom: 8 }}>เชื่อใจโดยหน่วยงานด้านสุขภาพทั่วประเทศ</p>
        <div style={{ width: 48, height: 3, background: '#00C4D4', borderRadius: 2, margin: '0 auto' }} />
      </motion.div>

      {/* Institution grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 48 }}>
        {institutions.map((inst, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            style={{ background: '#fff', borderRadius: 14, padding: '18px 16px',
              border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              textAlign: 'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,196,212,0.1)',
              border: '1px solid rgba(0,196,212,0.2)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 18, margin: '0 auto 10px' }}>🏥</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0B1F3A', lineHeight: 1.4,
              whiteSpace: 'pre-line' }}>{inst.name}</div>
            <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 4, fontWeight: 500 }}>{inst.type}</div>
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.3 }}
        style={{ display: 'flex', justifyContent: 'center', gap: 0,
          background: '#0B1F3A', borderRadius: 20, overflow: 'hidden' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center', padding: '28px 20px',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: '#00C4D4', letterSpacing: '-1px', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
