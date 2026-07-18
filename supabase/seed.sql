-- Seed data for PT. Hitech Aksara Digital

-- Testimonials
insert into public.testimonials (name, role, company, quote, avatar_url) values
('Andreas Wijaya', 'CTO', 'Global Logistics Corp', 'PT. Hitech Aksara Digital tidak hanya menyampaikan produk; mereka memberikan peta jalan untuk masa depan kami. Presisi sistematis dan pemahaman mendalam mereka terhadap kompleksitas industri adalah kunci kesuksesan digital kami.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLrFQw0y9Em4yp7E63oUK0BynMJu6W0HpnwkiF9ZsulB6FCA_WD-u1RBsmDPe0aybdiYEG4x_ReE4wjVsmZoI15t3g0oJfye_6XMmRqneugf6aaKa4gnHQvcqS0Lpezxd-oDf79eUvrazLHR6_6sadPT6WzXBCpWBSt90vpXPe6L3AWrm_NQ2bpcvOMbxMzcL1QmQ7eqKCJHFfL4kbRpxMRb9sFE7lhjLgj-WlEubO-b6H6TB8_pE4eA');

-- Metrics
insert into public.metrics (value, label, sub, sort_order) values
('250+', 'Proyek Selesai', 'Di 12 industri', 1),
('15+', 'Penghargaan Global', 'Untuk UI/UX dan Inovasi', 2),
('99.9%', 'Keandalan Uptime', 'Build bertaraf institusional', 3),
('24/7', 'Dukungan Strategis', 'Kemitraan 24/7', 4);

-- Projects
insert into public.projects (title, category, description, image_url, stat) values
('Sistem Manajemen Armada Berbasis AI', 'Logistik & Rantai Pasokan', 'Bagaimana kami membantu perusahaan logistik nasional mengurangi biaya operasional sebesar 22% melalui perutean prediktif real-time dan pemantauan otonom.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuACEshfJpiufqmiooLBAQTco3176cLHgAUVL73rSEbqxmcDQfyM5_mHOyNHubS20hAvuvjwM-b8SNP6w226aPn6a20bdDRrMjU6DOjFMEQhBavTQQHXUyjxvNZPlEK8_zCG-KfrbV1ZKUvs5UrW8qR4qeGmxWPaHsWaqnqU-VV2P-RnDUdmd2m8tIZKMVg4glzNFw1wAfrmReEoZ-l398H9gIFuyPW6IZLRgV4ajYaiT6pfUmqDegJIow', null),
('Portal Perbankan Aman Multichannel', 'Perbankan & Keuangan', 'Keamanan bertaraf perusahaan bertemu desain berpusat pada pengguna untuk jutaan pengguna aktif harian.', null, '+150% Pertumbuhan Pengguna'),
('Integrasi IoT Pabrik Cerdas', 'Manufaktur', 'Menghubungkan mesin legacy ke ekosistem cloud modern untuk visibilitas data 100%.', null, 'Migrasi Tanpa Downtime'),
('Portal E-Governance 2.0', 'Teknologi Pemerintah', 'Memodernisasi layanan publik untuk lebih dari 10 juta warga terdaftar.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3E2OgOV8pR2OcUgKtLQJLS6qDxwqzoHRUl22lxgYp0Vg00Jb4gkFLz7ka_cUXgZTDhSCZlju43Lcq8llHno18GkAD9hsF5ByxjTSttSyb-bPatRfgL-CcyCjgMCblQ32ksWz_dVyJk_yxr1Bu5gSISAr5FwCd6HMzyHvuIAfCBit-A24nlcKv0wi5WXl4mMlPIdV5K8S9203LGeNsp9GGAnUubjNiOkVAR9_iNtvX9DupNfnVgBo36Q', null),
('Mesin Data Uji Klinis', 'Farmasi & Kesehatan', 'Mempercepat pengembangan obat melalui pemodelan data lanjutan dan otomatisasi kepatuhan.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-KXx3GKWb-woLCYDJ8pJ93msyBQnriD04TE7XQogMu6UT4eTmwFvu3qBPFhzthE340BG1_1GsbTeKlPPw9sWFQT79CD9jV77UcZJeyEsT54VM-gOBwtZzlRGC8C9ydsFrkmeYZObBTXo5TGVejAs6HYseLtxPimtEKfZupFwOXDo7pEcB6whgG6brAKtuvaAqTzo3tNWk0PtAYnYXBCBKrGfk-Iob-BTv1MWNWWy3sjsufUIEOZgUQ', null);

-- Services
insert into public.services (title, description, icon, sort_order) values
('Pengembangan Perangkat Lunak Perusahaan', 'ERP, CRM, dan alat manajemen internal kustom yang dibangun dengan tumpukan modern (React, Go, Python) untuk performa dan keamanan maksimal.', 'developer_mode_tv', 1),
('Data & Analitik', 'Mengubah data mentah menjadi intelijen bisnis yang dapat ditindakkan menggunakan AI dan pemodelan ML.', 'analytics', 2),
('Keamanan Siber', 'Implementasi arsitektur zero-trust dan pemantauan 24/7 untuk melindungi kedaulatan digital Anda.', 'shield_lock', 3),
('Infrastruktur Cloud', 'Migrasi dan manajemen yang mulus untuk lingkungan AWS, Azure, dan Google Cloud dengan fokus optimasi biaya.', 'cloud_sync', 4);
