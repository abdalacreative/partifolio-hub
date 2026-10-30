-- PartfolioHub Comprehensive Seed Data
USE `partfoliohub`;

-- 1. Insert Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `icon`, `display_order`) VALUES
(1, 'Graphic Design', 'graphic-design', 'Brand identities, logos, illustrations, posters and visual art', 'Palette', 1),
(2, 'Web Development', 'web-development', 'Modern web apps, full-stack systems, APIs and frontend interfaces', 'Code2', 2),
(3, 'Video Editing', 'video-editing', 'Showreels, motion graphics, cinematic edits and promos', 'Film', 3),
(4, 'Photography', 'photography', 'Portrait, street, landscape, event and product photography', 'Camera', 4),
(5, 'UI/UX Design', 'ui-ux-design', 'Mobile app designs, web dashboards, wireframes and user journeys', 'Layout', 5),
(6, 'Digital Marketing', 'digital-marketing', 'Social media campaigns, growth strategies and analytics', 'TrendingUp', 6),
(7, 'Content Creation', 'content-creation', 'Storytelling, podcasting, scriptwriting and streaming', 'Sparkles', 7),
(8, 'Courses', 'courses', 'Online courses, video lessons, masterclasses and tutorials', 'GraduationCap', 8);

-- 2. Insert Skills
INSERT INTO `skills` (`id`, `name`, `slug`) VALUES
(1, 'Figma', 'figma'),
(2, 'React.js', 'react-js'),
(3, 'JavaScript', 'javascript'),
(4, 'PHP', 'php'),
(5, 'MySQL', 'mysql'),
(6, 'CSS3', 'css3'),
(7, 'Adobe Photoshop', 'adobe-photoshop'),
(8, 'Adobe Illustrator', 'adobe-illustrator'),
(9, 'Premiere Pro', 'premiere-pro'),
(10, 'After Effects', 'after-effects'),
(11, 'UI/UX Design', 'ui-ux-design'),
(12, 'Branding', 'branding'),
(13, 'Photography', 'photography'),
(14, 'Lightroom', 'lightroom'),
(15, 'Node.js', 'nodejs'),
(16, 'TypeScript', 'typescript'),
(17, 'Motion Design', 'motion-design'),
(18, 'Typography', 'typography'),
(19, 'Copywriting', 'copywriting'),
(20, 'SEO', 'seo');

-- 3. Insert Users (Password: Password@123, Admin: Admin@123456)
INSERT INTO `users` (`id`, `username`, `email`, `password_hash`, `phone`, `role`, `status`, `is_profile_completed`, `created_at`) VALUES
(1, 'admin', 'admin@partfoliohub.com', '$2y$10$6k5Q9f1X5dP0BmtmZ.21kuJhEArIMooDu9rqkDulJj.tL/3SDU1ga', '+252615000001', 'admin', 'active', 1, '2026-01-01 10:00:00'),
(2, 'abdala', 'abdala@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+252615112233', 'user', 'active', 1, '2026-01-10 11:30:00'),
(3, 'yahye', 'yahye@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+252615223344', 'user', 'active', 1, '2026-01-15 14:20:00'),
(4, 'mohamed', 'mohamed@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+252615334455', 'user', 'active', 1, '2026-01-20 09:15:00'),
(5, 'ayan', 'ayan@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+252615445566', 'user', 'active', 1, '2026-02-01 16:45:00'),
(6, 'sarah', 'sarah@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+252615556677', 'user', 'active', 1, '2026-02-05 12:10:00'),
(7, 'khalid', 'khalid@partfoliohub.com', '$2y$10$l7xBzR7UfxZCUdKQclVoNeSLtQARKnDpiN0f5FaWtirh90k6AjcX.', '+254712345678', 'user', 'active', 1, '2026-02-10 08:30:00');

-- 4. Insert Profiles
INSERT INTO `profiles` (`user_id`, `full_name`, `professional_title`, `bio`, `location`, `profile_photo`, `cover_photo`, `website`, `whatsapp`, `facebook`, `instagram`, `tiktok`, `experience`, `education`, `portfolio_intro`, `is_public`) VALUES
(1, 'System Administrator', 'Platform Director', 'Overseeing PartfolioHub infrastructure, safety, and creator excellence.', 'Mogadishu, Somalia', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80', 'https://partfoliohub.com', '+252615000001', 'adminpartfolio', 'adminpartfolio', 'adminhub', '8+ Years', 'M.Sc. Software Engineering', 'Welcome to PartfolioHub admin control center.', 1),
(2, 'Abdala Creator', 'Senior Brand & Graphic Designer', 'Passionate visual identity specialist crafting unforgettable brand identities, packaging, and modern visual design experiences.', 'Mogadishu, Somalia', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80', 'https://abdalacreator.design', '+252615112233', 'https://www.facebook.com/share/19KxQX3pxa/', 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi', 'https://www.tiktok.com/@abdala.creator', '5+ Years', 'B.Sc. Multimedia & Design', 'Creating bespoke branding systems that transform startups into market leaders.', 1),
(3, 'Yahye Ahmed', 'Cinematic Video Editor & Motion Artist', 'Storyteller through moving images. Specializing in commercial showreels, music videos, and dynamic After Effects motion graphics.', 'Mogadishu, Somalia', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80', 'https://yahyevideo.com', '+252615223344', 'yahyevideo', 'yahye.edits', 'yahyecinema', '4+ Years', 'Diploma in Film & Media Arts', 'Transforming raw footage into breathtaking cinematic narratives.', 1),
(4, 'Mohamed Ali', 'Full Stack Web Developer & Architect', 'Crafting high-performance web applications using React, PHP, and scalable database architecture with clean code and intuitive UX.', 'Hargeisa, Somaliland', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80', 'https://mohamedali.dev', '+252615334455', 'mohameddev', 'mohamed.codes', 'mohamedtech', '6+ Years', 'B.Sc. Computer Science', 'Building rock-solid software solutions for healthcare, commerce, and enterprise.', 1),
(5, 'Ayan Farah', 'Editorial & Commercial Photographer', 'Capturing raw emotions, scenic cityscapes, and captivating editorial fashion. Available for freelance assignments globally.', 'Garowe, Puntland', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&auto=format&fit=crop&q=80', 'https://ayanfarahphoto.com', '+252615445566', 'ayanphoto', 'ayan.captures', 'ayanvisuals', '3+ Years', 'BA Visual Arts', 'Light, shadow, and human authenticity captured in every frame.', 1),
(6, 'Sarah Hassan', 'Lead Product & UI/UX Designer', 'Designing intuitive digital products that users fall in love with. Specializing in design systems, iOS/Android apps, and SaaS dashboards.', 'Mogadishu, Somalia', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop&q=80', 'https://sarahhassan.design', '+252615556677', 'sarahux', 'sarah.designlab', 'sarahdesigns', '4+ Years', 'B.Sc. Human-Computer Interaction', 'Bridging aesthetic beauty with user empathy in digital products.', 1),
(7, 'Khalid Omer', 'Growth Strategist & Marketing Lead', 'Helping digital creators and modern brands scale through targeted digital marketing, content syndication, and high-ROI funnels.', 'Nairobi, Kenya', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80', 'https://khalidmarketing.co', '+254712345678', 'khalidgrowth', 'khalid.marketing', 'khalidgrowth', '5+ Years', 'BBA Marketing & Data Analytics', 'Data-driven growth strategies that drive measurable business impact.', 1);

-- 5. Insert User Skills
INSERT INTO `user_skills` (`user_id`, `skill_id`, `is_primary`) VALUES
(2, 7, 1), (2, 8, 1), (2, 12, 1), (2, 18, 0), -- Abdala: Photoshop, Illustrator, Branding, Typography
(3, 9, 1), (3, 10, 1), (3, 17, 1),           -- Yahye: Premiere, After Effects, Motion
(4, 2, 1), (4, 3, 1), (4, 4, 1), (4, 5, 0),    -- Mohamed: React, JS, PHP, MySQL
(5, 13, 1), (5, 14, 1), (5, 7, 0),             -- Ayan: Photography, Lightroom, Photoshop
(6, 1, 1), (6, 11, 1), (6, 6, 0),              -- Sarah: Figma, UI/UX, CSS3
(7, 20, 1), (7, 19, 1);                        -- Khalid: SEO, Copywriting

-- 6. Insert Posts
INSERT INTO `posts` (`id`, `user_id`, `category_id`, `title`, `description`, `post_type`, `status`, `visibility`, `views_count`, `likes_count`, `comments_count`, `created_at`) VALUES
(1, 2, 1, 'Modern Brand Identity & Visual System for Nova Studio', 'A comprehensive brand overhaul design file for a modern fintech venture. Includes bespoke typography, responsive logomarks, dynamic dark mode palettes, and merchandise guidelines.', 'image', 'published', 'public', 1240, 142, 3, '2026-02-10 10:15:00'),
(2, 4, 2, 'Hospital Management SaaS System with Patient Portal', 'End-to-end full-stack hospital clinical management software featuring appointment scheduling, electronic medical records, real-time prescription tracking, and doctor analytics dashboard.', 'project', 'published', 'public', 2150, 218, 4, '2026-02-12 14:00:00'),
(3, 3, 3, 'Video Editing Showreel 2026 - Commercial & VFX', 'A fast-paced showcase reel highlighting commercial video editing, 3D motion tracking, sound design, and color grading completed over the past 12 months for global clients.', 'video', 'published', 'public', 1890, 175, 2, '2026-02-15 16:30:00'),
(4, 6, 5, 'SomPay Mobile Banking App UI/UX Redesign', 'A modern, accessible fintech mobile experience crafted in Figma with complete design system tokens, seamless biometric authorization, micro-animations, and merchant QR payments.', 'project', 'published', 'public', 3400, 312, 5, '2026-02-18 11:20:00'),
(5, 5, 4, 'Urban Architecture & Sunset Reflections in Mogadishu', 'A series of high-contrast architectural photographs exploring the vibrant coastal light, geometric shadows, and golden hour reflections along the historic shoreline.', 'image', 'published', 'public', 980, 89, 1, '2026-02-20 18:45:00'),
(6, 2, 1, 'Creative Studio Packaging & Merchandise Mockup Kit', 'High-end tactile packaging designs created for an artisan coffee roaster. Features embossed foil textures, eco-friendly kraft paper mockups, and typographic label architecture.', 'image', 'published', 'public', 1120, 95, 2, '2026-02-22 09:10:00'),
(25, 2, 8, 'Lesson 01: After Effects Interface', 'Baro casharka 1-aad ee Adobe After Effects oo si qoto dheer loogu sharxayo interface-ka barnaamijka, panels-ka shaqada, composition viewer, timeline-ka, iyo qalabka aasaasiga ah ee animation-ka.', 'video', 'published', 'public', 890, 145, 12, '2026-10-18 10:00:00'),
(26, 2, 8, 'Lesson 02: Creating Workspace', 'Baro casharka 2-aad ee Adobe After Effects: sida loo habeeyo loona kaydsado dynamic workspace kuu gaar ah oo kuu sahlaya inaad si degdeg ah oo hufan ugu samayso visual effects iyo motion graphics heer sare ah.', 'video', 'published', 'public', 780, 132, 9, '2026-10-18 11:30:00'),
(27, 2, 8, 'Lesson 03: Professional Video Editing & Motion', 'Baro casharka 3-aad: farsamooyinka casriga ah ee video editing, motion design, transitions, iyo color grading xirfadeed.', 'video', 'published', 'public', 650, 98, 6, '2026-10-18 14:00:00');

-- 7. Insert Post Media
INSERT INTO `post_media` (`post_id`, `media_url`, `media_type`, `sort_order`) VALUES
(1, 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(1, 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=80', 'image', 1),
(1, 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80', 'image', 2),
(2, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(3, '/assets/vedio/vedio editing.mp4', 'video', 0),
(4, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(5, 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(6, 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(25, '/assets/lesson_01_cover.jpg', 'image', 0),
(25, '/assets/vedio/lesson 1.mp4', 'video', 1),
(26, '/assets/lesson_02_cover.jpg', 'image', 0),
(26, '/assets/vedio/lesson 2.mp4', 'video', 1),
(27, 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80', 'image', 0),
(27, '/assets/vedio/vedio editing.mp4', 'video', 1);

-- 8. Insert Projects Data
INSERT INTO `projects` (`post_id`, `cover_image`, `project_url`, `github_url`, `technologies`) VALUES
(2, 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80', 'https://hospital-saas-demo.partfoliohub.com', 'https://github.com/mohamedali/hospital-saas', 'React.js, PHP, MySQL, Chart.js, Tailwind CSS'),
(4, 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80', 'https://figma.com/@sarahux/sompay-redesign', 'https://github.com/sarahhassan/sompay-design-tokens', 'Figma, Protopie, Design Tokens, iOS UI Kit');

-- 9. Insert Project Media Gallery
INSERT INTO `project_media` (`project_id`, `media_url`, `sort_order`) VALUES
(1, 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80', 0),
(1, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80', 1),
(2, 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80', 0);

-- 10. Insert Tags
INSERT INTO `tags` (`id`, `name`, `slug`) VALUES
(1, 'Branding', 'branding'),
(2, 'LogoDesign', 'logodesign'),
(3, 'VisualIdentity', 'visualidentity'),
(4, 'FullStack', 'fullstack'),
(5, 'SaaS', 'saas'),
(6, 'HealthTech', 'healthtech'),
(7, 'MotionGraphics', 'motiongraphics'),
(8, 'VideoEditing', 'videoediting'),
(9, 'Fintech', 'fintech'),
(10, 'MobileApp', 'mobileapp'),
(11, 'UIUX', 'uiux'),
(12, 'Photography', 'photography'),
(13, 'Urban', 'urban');

-- 11. Insert Post Tags
INSERT INTO `post_tags` (`post_id`, `tag_id`) VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5), (2, 6),
(3, 7), (3, 8),
(4, 9), (4, 10), (4, 11),
(5, 12), (5, 13),
(6, 1), (6, 3);

-- 12. Insert Likes
INSERT INTO `likes` (`user_id`, `post_id`) VALUES
(2, 2), (2, 4), (2, 3),
(3, 1), (3, 2), (3, 4),
(4, 1), (4, 3), (4, 5),
(5, 1), (5, 2), (5, 6),
(6, 1), (6, 2), (6, 3), (6, 5),
(7, 1), (7, 4);

-- 13. Insert Comments
INSERT INTO `comments` (`id`, `user_id`, `post_id`, `content`, `created_at`) VALUES
(1, 4, 1, 'Incredible visual harmony! The typography choices and color balance are truly world-class.', '2026-02-10 12:30:00'),
(2, 6, 1, 'Obsessed with this dark mode palette. Did you build custom vector glyphs for the icons?', '2026-02-10 15:45:00'),
(3, 3, 1, 'Fantastic presentation, Abdala! Would love to feature this in our upcoming creator showcase video.', '2026-02-11 09:20:00'),
(4, 2, 2, 'Great architecture, Mohamed. The analytics dashboards look very clean and responsive!', '2026-02-12 16:10:00'),
(5, 6, 2, 'Super clean UI for a clinical tool. Usually hospital systems look clunky, but this is a breath of fresh air.', '2026-02-13 10:00:00'),
(6, 2, 3, 'Top tier motion pacing! That transition at 0:15 was completely buttery smooth.', '2026-02-16 11:15:00'),
(7, 4, 4, 'Sarah, the design system structure is magnificent! Love how modular your card components are.', '2026-02-18 14:40:00');

-- 14. Insert Follows
INSERT INTO `follows` (`follower_id`, `following_id`) VALUES
(2, 3), (2, 4), (2, 6),
(3, 2), (3, 4), (3, 5),
(4, 2), (4, 3), (4, 6),
(5, 2), (5, 6),
(6, 2), (6, 4), (6, 5),
(7, 2), (7, 4);

-- 15. Insert Saved Posts
INSERT INTO `saved_posts` (`user_id`, `post_id`) VALUES
(2, 2), (2, 4),
(4, 1), (4, 4),
(6, 1), (6, 3);

-- 16. Insert Conversations & Messages
INSERT INTO `conversations` (`id`, `user_one_id`, `user_two_id`, `last_message`, `last_message_at`) VALUES
(1, 2, 4, 'Sounds great! I will review the API contract and get back to you tonight.', '2026-02-20 17:35:00'),
(2, 2, 6, 'Hi Sarah! Loved your SomPay UI kit, are you available for freelance collaboration?', '2026-02-21 11:10:00'),
(3, 3, 2, 'Hey Abdala, can you send over the SVG assets for the showreel intro?', '2026-02-22 08:45:00');

INSERT INTO `messages` (`conversation_id`, `sender_id`, `receiver_id`, `message_text`, `is_read`, `created_at`) VALUES
(1, 4, 2, 'Hey Abdala! I saw your Nova brand project, looks amazing!', 1, '2026-02-20 16:00:00'),
(1, 2, 4, 'Thanks Mohamed! Really appreciate it. How is the hospital SaaS project going?', 1, '2026-02-20 16:30:00'),
(1, 4, 2, 'Going well! We are finishing up the patient portal integration right now.', 1, '2026-02-20 17:00:00'),
(1, 2, 4, 'Sounds great! I will review the API contract and get back to you tonight.', 1, '2026-02-20 17:35:00'),
(2, 2, 6, 'Hi Sarah! Loved your SomPay UI kit, are you available for freelance collaboration?', 0, '2026-02-21 11:10:00'),
(3, 3, 2, 'Hey Abdala, can you send over the SVG assets for the showreel intro?', 0, '2026-02-22 08:45:00');

-- 17. Insert Notifications
INSERT INTO `notifications` (`user_id`, `actor_id`, `type`, `post_id`, `message`, `is_read`, `created_at`) VALUES
(2, 4, 'like', 1, 'Mohamed Ali liked your post "Modern Brand Identity & Visual System"', 0, '2026-02-22 09:30:00'),
(2, 6, 'comment', 1, 'Sarah Hassan commented on "Modern Brand Identity & Visual System"', 0, '2026-02-22 10:15:00'),
(2, 5, 'follow', NULL, 'Ayan Farah started following your portfolio', 1, '2026-02-21 15:20:00'),
(2, 3, 'message', NULL, 'Yahye Ahmed sent you a direct message', 0, '2026-02-22 08:45:00'),
(4, 2, 'like', 2, 'Abdala Creator liked your project "Hospital Management SaaS System"', 1, '2026-02-20 12:00:00');

-- 18. Insert Analytics Data for Abdala (User ID 2) over past 7 days
INSERT INTO `analytics` (`user_id`, `date`, `profile_views`, `post_views`, `likes_received`, `new_followers`) VALUES
(2, '2026-02-16', 45, 120, 18, 4),
(2, '2026-02-17', 62, 180, 24, 7),
(2, '2026-02-18', 85, 230, 31, 9),
(2, '2026-02-19', 94, 275, 29, 12),
(2, '2026-02-20', 110, 340, 38, 15),
(2, '2026-02-21', 135, 410, 46, 18),
(2, '2026-02-22', 150, 480, 52, 22);

-- 19. Insert User Settings
INSERT INTO `settings` (`user_id`, `email_notifications`, `like_notifications`, `comment_notifications`, `follow_notifications`, `message_notifications`, `profile_visibility`) VALUES
(1, 1, 1, 1, 1, 1, 'public'),
(2, 1, 1, 1, 1, 1, 'public'),
(3, 1, 1, 1, 1, 1, 'public'),
(4, 1, 1, 1, 1, 1, 'public'),
(5, 1, 1, 1, 1, 1, 'public'),
(6, 1, 1, 1, 1, 1, 'public'),
(7, 1, 1, 1, 1, 1, 'public');

-- 20. Insert Reports for Admin Moderation
INSERT INTO `reports` (`id`, `reporter_id`, `reported_user_id`, `post_id`, `comment_id`, `report_type`, `reason`, `details`, `status`, `created_at`) VALUES
(1, 3, 7, NULL, NULL, 'user', 'Spam promotional messages', 'Sent unsolicited marketing links across multiple comments.', 'pending', '2026-02-21 14:10:00'),
(2, 5, NULL, 6, NULL, 'post', 'Copyright dispute', 'Claimed mockup template without citing creator attribution.', 'pending', '2026-02-22 09:00:00'),
(3, 4, 3, NULL, NULL, 'user', 'Inappropriate language in chat', 'Minor dispute resolved politely between parties.', 'resolved', '2026-02-19 11:00:00');
