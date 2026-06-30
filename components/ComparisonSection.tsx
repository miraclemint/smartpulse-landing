'use client';
import React from 'react';
import { motion } from 'framer-motion';

const rows = [
  {
    topic: 'เทคโนโลยี PPG',
    sp: 'ระดับเครื่องมือแพทย์ วัดจากปลายนิ้ว ความแม่นยำสูง',
    sw: 'วัดสัญญาณจากข้อมือ ความแม่นยำต่ำกว่า ไม่ใช่เครื่องมือแพทย์',
  },
  {
    topic: 'วิเคราะห์ HRV',
    sp: 'เชิงลึก ทั้ง Time Domain + Frequency Domain ประเมินความเครียดกาย/ใจ ความทนทาน และคะแนนความเครียด',
    sw: 'พื้นฐาน แสดงระดับความเครียดเท่านั้น',
  },
  {
    topic: 'ความน่าเชื่อถือ',
    sp: 'อ้างอิงงานวิจัยทางการแพทย์ แยกตามเชื้อชาติ / เพศ / ช่วงอายุ',
    sw: 'ไม่มีการแยกตามกลุ่มประชากร',
  },
  {
    topic: 'การใช้งาน',
    sp: 'ตรวจประเมินความเสี่ยงสุขภาพจิตสำหรับบุคคลทั่วไป',
    sw: 'ใช้งานเฉพาะบุคคลที่สวมใส่',
  },
  {
    topic: 'ตรวจหลอดเลือด',
    sp: 'มี — ตรวจพร้อมกับความเครียดได้ในครั้งเดียว',
    sw: 'ไม่มีฟังก์ชั่นตรวจสุขภาพหลอดเลือด',
  },
  {
    topic: 'รายงานผล',
    sp: 'แชร์ออนไลน์ได้ + พิมพ์รายงาน A4',
    sw: 'ดูจากจอนาฬิกา หรือแอปมือถือเท่านั้น',
  },
];

export const ComparisonSection = () => (
  <section suppressHydrationWarning style={{ background: '#0B1F3A', padding: '112px 0', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', left: -150, top: '50%', transform: 'translateY(-50%)',
      width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
      background: 'radial-gradient(circle, rgba(0,196,212,0.07) 0%, transparent 70%)' }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 64 }}>
        <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#00C4D4', background: 'rgba(0,196,212,0.12)', padding: '6px 16px',
          borderRadius: 100, display: 'inline-block', marginBottom: 20,
          border: '1px solid rgba(0,196,212,0.25)' }}>เปรียบเทียบ</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#fff',
          letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 16 }}>
          SmartPulse <span style={{ color: '#00C4D4' }}>vs</span> Smart Watch
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
          ทำไมเครื่องมือแพทย์ถึงให้ข้อมูลที่ลึกกว่า
        </p>
      </motion.div>

      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginBottom: 8 }}>
        <div />
        <div style={{ textAlign: 'center', padding: '14px 20px',
          background: 'linear-gradient(135deg, rgba(0,196,212,0.2), rgba(0,196,212,0.08))',
          borderRadius: '14px 14px 0 0', border: '1px solid rgba(0,196,212,0.3)', borderBottom: 'none' }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#00C4D4' }}>💓 Smart Pulse</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>เครื่องมือแพทย์จากเกาหลี</div>
        </div>
        <div style={{ textAlign: 'center', padding: '14px 20px',
          background: 'rgba(255,255,255,0.04)', borderRadius: '14px 14px 0 0',
          border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none' }}>
          <div style={{ fontSize: 16, fontWeight: 900, color: 'rgba(255,255,255,0.5)' }}>⌚ Smart Watch</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>นาฬิกาออกกำลังกายทั่วไป</div>
        </div>
      </div>

      {/* Comparison rows */}
      {rows.map((r, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.07 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0,
            borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          {/* Topic */}
          <div style={{ padding: '20px 16px',
            background: 'rgba(255,255,255,0.02)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
            borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>{r.topic}</span>
          </div>
          {/* SmartPulse */}
          <div style={{ padding: '20px 20px',
            background: 'rgba(0,196,212,0.05)',
            borderLeft: '1px solid rgba(0,196,212,0.2)',
            borderRight: '1px solid rgba(0,196,212,0.2)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: '#4ADE80', fontSize: 14, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.55 }}>{r.sp}</span>
            </div>
          </div>
          {/* Smart Watch */}
          <div style={{ padding: '20px 20px',
            background: 'rgba(255,255,255,0.02)',
            borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: '#FF6B6B', fontSize: 14, flexShrink: 0, marginTop: 1 }}>✕</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.55 }}>{r.sw}</span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom border */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
        <div style={{ height: 14, background: 'rgba(255,255,255,0.02)',
          borderLeft: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: '0 0 0 14px' }} />
        <div style={{ height: 14, background: 'rgba(0,196,212,0.05)',
          borderLeft: '1px solid rgba(0,196,212,0.2)', borderRight: '1px solid rgba(0,196,212,0.2)',
          borderBottom: '1px solid rgba(0,196,212,0.2)', borderRadius: '0 0 14px 14px' }} />
        <div style={{ height: 14, background: 'rgba(255,255,255,0.02)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)', borderRadius: '0 0 14px 0' }} />
      </div>
    </div>
  </section>
);
