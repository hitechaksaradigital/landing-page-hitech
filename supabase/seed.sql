-- Seed data for PT. Hitech Aksara Digital

-- Testimonials
insert into public.testimonials (name, role, company, quote, avatar_url) values
('Andreas Wijaya', 'CTO', 'Global Logistics Corp', 'PT. Hitech Aksara Digital didn''t just deliver a product; they provided a roadmap for our future. Their systematic precision and deep understanding of industrial complexity were the key to our digital success.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLrFQw0y9Em4yp7E63oUK0BynMJu6W0HpnwkiF9ZsulB6FCA_WD-u1RBsmDPe0aybdiYEG4x_ReE4wjVsmZoI15t3g0oJfye_6XMmRqneugf6aaKa4gnHQvcqS0Lpezxd-oDf79eUvrazLHR6_6sadPT6WzXBCpWBSt90vpXPe6L3AWrm_NQ2bpcvOMbxMzcL1QmQ7eqKCJHFfL4kbRpxMRb9sFE7lhjLgj-WlEubO-b6H6TB8_pE4eA');

-- Metrics
insert into public.metrics (value, label, sub, sort_order) values
('250+', 'Projects Delivered', 'Across 12 industries', 1),
('15+', 'Global Awards', 'For UI/UX and Innovation', 2),
('99.9%', 'Uptime Reliability', 'Institutional grade builds', 3),
('24/7', 'Strategic Support', 'Always-on partnership', 4);

-- Projects
insert into public.projects (title, category, description, image_url, stat) values
('AI-Driven Fleet Management System', 'Logistics & Supply Chain', 'How we helped a national logistics firm reduce operational costs by 22% through real-time predictive routing and autonomous monitoring.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuACEshfJpiufqmiooLBAQTco3176cLHgAUVL73rSEbqxmcDQfyM5_mHOyNHubS20hAvuvjwM-b8SNP6w226aPn6a20bdDRrMjU6DOjFMEQhBavTQQHXUyjxvNZPlEK8_zCG-KfrbV1ZKUvs5UrW8qR4qeGmxWPaHsWaqnqU-VV2P-RnDUdmd2m8tIZKMVg4glzNFw1wAfrmReEoZ-l398H9gIFuyPW6IZLRgV4ajYaiT6pfUmqDegJIow', null),
('Omnichannel Secure Banking Portal', 'Banking & Finance', 'Enterprise-grade security meets user-centric design for millions of daily active users.', null, '+150% User Growth'),
('Smart Factory IoT Integration', 'Manufacturing', 'Connecting legacy machinery to a modern cloud ecosystem for 100% data visibility.', null, 'Zero Downtime Migration'),
('E-Governance Portal 2.0', 'Government Tech', 'Modernizing public service delivery for over 10 million registered citizens.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3E2OgOV8pR2OcUgKtLQJLS6qDxwqzoHRUl22lxgYp0Vg00Jb4gkFLz7ka_cUXgZTDhSCZlju43Lcq8llHno18GkAD9hsF5ByxjTSttSyb-bPatRfgL-CcyCjgMCblQ32ksWz_dVyJk_yxr1Bu5gSISAr5FwCd6HMzyHvuIAfCBit-A24nlcKv0wi5WXl4mMlPIdV5K8S9203LGeNsp9GGAnUubjNiOkVAR9_iNtvX9DupNfnVgBo36Q', null),
('Clinical Trial Data Engine', 'Pharma & Health', 'Accelerating drug development through advanced data modeling and compliance automation.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-KXx3GKWb-woLCYDJ8pJ93msyBQnriD04TE7XQogMu6UT4eTmwFvu3qBPFhzthE340BG1_1GsbTeKlPPw9sWFQT79CD9jV77UcZJeyEsT54VM-gOBwtZzlRGC8C9ydsFrkmeYZObBTXo5TGVejAs6HYseLtxPimtEKfZupFwOXDo7pEcB6whgG6brAKtuvaAqTzo3tNWk0PtAYnYXBCBKrGfk-Iob-BTv1MWNWWy3sjsufUIEOZgUQ', null);

-- Services
insert into public.services (title, description, icon, sort_order) values
('Enterprise Software Development', 'Custom ERP, CRM, and internal management tools built with modern stacks (React, Go, Python) for maximum performance and security.', 'developer_mode_tv', 1),
('Data & Analytics', 'Turning raw data into actionable business intelligence using AI and ML modeling.', 'analytics', 2),
('Cybersecurity', 'Zero-trust architecture implementation and 24/7 monitoring to protect your digital sovereignty.', 'shield_lock', 3),
('Cloud Infrastructure', 'Seamless migration and management for AWS, Azure, and Google Cloud environments with cost optimization focus.', 'cloud_sync', 4);
