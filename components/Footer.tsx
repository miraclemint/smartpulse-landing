'use client';
import React from 'react';
import { motion } from 'framer-motion';

const contactItems = [
  { icon: '📧', label: 'อีเมล', value: 'u.tharin@gmail.com', href: 'mailto:u.tharin@gmail.com' },
  { icon: '📞', label: 'โทรศัพท์', value: '089-444-3424', href: 'tel:+66894443424' },
];

export const Footer = () => (
  <footer suppressHydrationWarning style={{ background: '#060F1E', color: '#fff', padding: '72px 0 0' }}>
    <div className="container">
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.2fr', gap: 48,
        marginBottom: 56, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12,
              background: 'linear-gradient(135deg, #0B1F3A, #00C4D4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>💓</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: '#fff' }}>Smart Pulse</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: -1 }}>by Medicore · South Korea</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: 280 }}>
            จำหน่ายโดย <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Biofeedback Thailand Official</strong>
            <br />ตัวแทนจำหน่ายอย่างเป็นทางการในประเทศไทย
          </p>
        </div>

        {/* Products */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#00C4D4', marginBottom: 20 }}>ผลิตภัณฑ์</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['ฟีเจอร์', 'วิธีใช้งาน', 'ข้อมูลเทคนิค', 'มาตรฐานรับรอง'].map(item => (
              <a key={item} href="#"
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>{item}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#00C4D4', marginBottom: 20 }}>ติดต่อ</div>

          {/* Person */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
            padding: '12px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(0,196,212,0.3), rgba(0,196,212,0.1))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👤</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>ธาริน อุเทนรัตน์</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>Biofeedback Thailand Official</div>
            </div>
          </div>

          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {contactItems.map(c => (
              <a key={c.href} href={c.href}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
                  borderRadius: 10, background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s',
                  textDecoration: 'none' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,196,212,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,196,212,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}>
                <span style={{ fontSize: 16 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 1 }}>{c.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#00C4D4' }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        gap: 32, paddingBottom: 40, flexWrap: 'wrap' }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
          © 2024 Smart Pulse · Biofeedback Thailand Official · All rights reserved.
        </p>
        <div style={{ maxWidth: 500, background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '16px 20px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase', letterSpacing: '0.1em' }}>⚠ คำเตือน</span>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', lineHeight: 1.65, marginTop: 6 }}>
            ผลตรวจใช้เพื่อดูแลสุขภาพเบื้องต้นเท่านั้น ไม่ใช่การวินิจฉัยโรคหรือทดแทนการตรวจของแพทย์
            หากผลผิดปกติควรปรึกษาแพทย์ กรุณาอ่านคำเตือนในเอกสารกำกับเครื่องมือแพทย์ก่อนใช้
          </p>
        </div>
      </div>
    </div>
  </footer>
);
