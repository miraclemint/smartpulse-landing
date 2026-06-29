'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '14px 18px',
  fontSize: 15,
  fontFamily: 'inherit',
  color: '#0B1F3A',
  background: focused ? '#fff' : '#F8FAFC',
  border: `1.5px solid ${focused ? '#00C4D4' : 'rgba(0,0,0,0.1)'}`,
  borderRadius: 12,
  outline: 'none',
  transition: 'all 0.2s',
  boxShadow: focused ? '0 0 0 4px rgba(0,196,212,0.1)' : 'none',
});

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: '#374151',
  marginBottom: 6,
  display: 'block',
};

type FocusState = Record<string, boolean>;

export const ContactSection = () => {
  const [focused, setFocused] = useState<FocusState>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onFocus = (f: string) => setFocused(s => ({ ...s, [f]: true }));
  const onBlur  = (f: string) => setFocused(s => ({ ...s, [f]: false }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mgojzrlz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitting(false);
        alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      }
    } catch {
      setSubmitting(false);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <section id="contact" suppressHydrationWarning style={{ background: '#0B1F3A', padding: '112px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG decoration */}
      <div style={{ position: 'absolute', left: -150, top: '50%', transform: 'translateY(-50%)',
        width: 500, height: 500, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,196,212,0.08) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', right: -100, bottom: -100,
        width: 400, height: 400, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(0,80,160,0.12) 0%, transparent 70%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-2" style={{ gap: 80 }}>

          {/* LEFT — pitch */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#00C4D4', background: 'rgba(0,196,212,0.12)', padding: '6px 16px',
              borderRadius: 100, display: 'inline-block', marginBottom: 28,
              border: '1px solid rgba(0,196,212,0.25)' }}>ติดต่อเรา</span>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#fff',
              letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
              สนใจ SmartPulse?<br />
              <span style={{ color: '#00C4D4' }}>เราพร้อมตอบทุกคำถาม</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 40 }}>
              กรอกข้อมูลด้านขวา ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
              ไม่ว่าจะเป็นการสั่งซื้อ ขอ Demo หรือสอบถามข้อมูลเพิ่มเติม
            </p>

            {/* Highlights */}
            {[
              { icon: '⚡', t: 'ตอบกลับภายใน 24 ชั่วโมง' },
              { icon: '🛡️', t: 'รับประกันสินค้า 1 ปี' },
              { icon: '📦', t: 'จัดส่งทั่วประเทศไทย' },
              { icon: '🏢', t: 'รองรับการสั่งซื้อแบบองค์กร' },
            ].map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(0,196,212,0.12)', border: '1px solid rgba(0,196,212,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{h.icon}</div>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{h.t}</span>
              </motion.div>
            ))}

          </motion.div>

          {/* RIGHT — form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ background: '#fff', borderRadius: 28, padding: '44px 40px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                    <h3 style={{ fontSize: 22, fontWeight: 900, color: '#0B1F3A', marginBottom: 12 }}>
                      ส่งข้อมูลสำเร็จแล้ว!
                    </h3>
                    <p style={{ fontSize: 15, color: '#64748B', lineHeight: 1.6 }}>
                      ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง<br />
                      ขอบคุณที่สนใจ SmartPulse
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form"
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    <div style={{ marginBottom: 4 }}>
                      <h3 style={{ fontSize: 20, fontWeight: 900, color: '#0B1F3A', marginBottom: 4 }}>
                        กรอกข้อมูลเพื่อรับข้อมูลเพิ่มเติม
                      </h3>
                      <p style={{ fontSize: 13, color: '#94A3B8' }}>ฟรี ไม่มีค่าใช้จ่ายในการสอบถาม</p>
                    </div>

                    {/* Name + Phone */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={labelStyle}>ชื่อ-นามสกุล <span style={{ color: '#FF6B6B' }}>*</span></label>
                        <input required name="name" type="text" placeholder="กรอกชื่อ-นามสกุล"
                          onFocus={() => onFocus('name')} onBlur={() => onBlur('name')}
                          style={inputStyle(!!focused.name)} />
                      </div>
                      <div>
                        <label style={labelStyle}>เบอร์โทรศัพท์ <span style={{ color: '#FF6B6B' }}>*</span></label>
                        <input required name="phone" type="tel" placeholder="089-XXX-XXXX"
                          onFocus={() => onFocus('phone')} onBlur={() => onBlur('phone')}
                          style={inputStyle(!!focused.phone)} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>อีเมล</label>
                      <input name="email" type="email" placeholder="email@example.com"
                        onFocus={() => onFocus('email')} onBlur={() => onBlur('email')}
                        style={inputStyle(!!focused.email)} />
                    </div>

                    {/* Type */}
                    <div>
                      <label style={labelStyle}>ประเภทการติดต่อ <span style={{ color: '#FF6B6B' }}>*</span></label>
                      <select required name="type"
                        onFocus={() => onFocus('type')} onBlur={() => onBlur('type')}
                        style={{ ...inputStyle(!!focused.type), appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2364748B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
                        <option value="">เลือกหัวข้อ...</option>
                        <option value="สั่งซื้อสินค้า">🛒 สั่งซื้อสินค้า</option>
                        <option value="ขอ Demo">📱 ขอทดลองใช้ / Demo</option>
                        <option value="สอบถามราคา">💰 สอบถามราคา</option>
                        <option value="สั่งซื้อแบบองค์กร">🏢 สั่งซื้อแบบองค์กร / จำนวนมาก</option>
                        <option value="อื่นๆ">💬 อื่นๆ</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>ข้อความเพิ่มเติม</label>
                      <textarea name="message" rows={4}
                        placeholder="ระบุความต้องการ จำนวน หรือคำถามที่ต้องการทราบ..."
                        onFocus={() => onFocus('msg')} onBlur={() => onBlur('msg')}
                        style={{ ...inputStyle(!!focused.msg), resize: 'vertical', minHeight: 100 }} />
                    </div>

                    {/* Submit */}
                    <motion.button type="submit" disabled={submitting}
                      whileHover={!submitting ? { scale: 1.02, boxShadow: '0 16px 40px rgba(0,196,212,0.4)' } : {}}
                      whileTap={!submitting ? { scale: 0.98 } : {}}
                      style={{ background: submitting ? '#94A3B8' : 'linear-gradient(135deg, #00C4D4, #00A3B4)',
                        color: '#fff', fontWeight: 800, fontSize: 16, padding: '16px',
                        borderRadius: 14, border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
                        letterSpacing: '-0.2px', transition: 'background 0.2s' }}>
                      {submitting ? 'กำลังส่ง...' : 'ส่งข้อมูล — ฟรี ไม่มีข้อผูกมัด'}
                    </motion.button>

                    <p style={{ fontSize: 12, color: '#CBD5E1', textAlign: 'center' }}>
                      ข้อมูลของคุณจะถูกเก็บเป็นความลับ ไม่ถูกนำไปใช้เพื่อวัตถุประสงค์อื่น
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
