
INSERT INTO 
domainPage (imagePath, domainType) 
VALUES 
('assets/mainPage/pageinfo-bg.png', 'mainPageBanner'),
('assets/mainPage/fling_intro1.png', 'mainPageIntroduction'),
('assets/mainPage/fling_intro2.png' 'mainPageIntroduction'),
('assets/mainPage/fling_intro3.png', 'mainPageIntroduction'),
('assets/mainPage/fling_intro4.png', 'mainPageIntroduction'),
('assets/about/fling_team1.png', 'mainPageFlingTeam'),
('assets/about/fling_team2.png', 'mainPageFlingTeam'),
('assets/about/fling_team3.png', 'mainPageFlingTeam'),
('assets/about/fling_team4.png', 'mainPageFlingTeam'),
('assets/about/fling_team5.png', 'mainPageFlingTeam'),
('assets/about/fling_team6.png', 'mainPageFlingTeam'),
('assets/about/fling_team7.png', 'mainPageFlingTeam'),
('assets/about/fling_team8.png', 'mainPageFlingTeam'),
('assets/mainPage/fling_space.png', 'mainPageFlingSpace'),
('assets/mainPage/client_and_partners1.png', "mainPageClientAndPartners"),
('assets/productPage/banner.png', 'productPageBanner');


INSERT INTO 
mainBanner (imageIdx, imageOrder) 
VALUES 
(1, 1);

INSERT INTO 
flingIntroduction (imageIdx, title, imageOrder) 
VALUES 
(2, '소개 제목', 1), 
(3, '소개 제목', 2), 
(4, '소개 제목', 3), 
(5, '소개 제목', 4);


INSERT INTO 
flingSpace (imageIdx, spaceName, spatialLink, spaceDescription) 
VALUES 
(6, '공간 이름', 'https://spatial.io/space_name', '공간에 대한설명 글입니다.'); 


INSERT INTO 
team (imageIdx, name, skills, imageOrder) 
VALUES 
(8, 'Summer', 'UI Developer', 1), 
(9, 'Mei', 'UI Developer', 2), 
(10, 'Luna', 'Backend Developer', 3), 
(11, 'Jack', 'Backend Developer', 4), 
(12, 'Black', 'Team Leader', 5), 
(13, 'Solana', 'Metaverse Developer', 6), 
(14, 'Stephanie', 'Metaverse Developer', 7), 
(15, 'Eden', 'Metaverse Developer', 8); 

INSERT INTO 
domainText (domainType, domainContent) 
VALUES 
('mainPageBanner', '메인 페이지 배너에 들어갈 텍스트입니다.'),
('mainPageIntroduction', '소개 페이지 제목'),
('brandPageDescription', 'brand Page 소개 텍스트입니다.'),
('portfolioPageDescription', 'Portfolio Page 소개 텍스트입니다.'),
('productPageDescription', 'Product Page 소개 텍스트입니다.'),
('usecasePageDescription', 'Use Case Page 소개 텍스트입니다.'),
('eventPageDescription', 'Event Page 소개 텍스트입니다.'),
('noticePageDescription', 'Notice Page 소개 텍스트입니다.'),
('prodcutPageDescription', 'Product Page 소개 텍스트입니다.');




INSERT INTO
product (productName, spatialLink, spaceDescription, skills)
VALUES
('Harris, Waelchi and Welch', 'https://spatial.io/Harris,_Waelchi_and_Welch', 'Numquam amet laudantium accusamus quas.', 'Officiis optio ducimus inventore dolorum quos commodi aut reprehenderit dolor.'),
('Adams Inc', 'https://spatial.io/Adams_Inc', 'Nostrum unde incidunt nam.
Numquam itaque nemo dolorum cupiditate tenetur eaque soluta soluta voluptatibus.', 'Non officia tempora accusantium blanditiis consequatur possimus.'),
('Prosacco - Halvorson', 'https://spatial.io/Prosacco_Halvorson', 'Atque iure vitae distinctio.
Libero modi odit nam dolores adipisci aliquid voluptates facilis.
Accusamus vero officiis nisi at ut assumenda quia eaque natus.', 'Quo dolore consectetur distinctio nulla vero sunt iste.'),
('Turcotte - Boyle', 'https://spatial.io/Turcotte_Boyle', 'Odit aspernatur laborum similique veniam perferendis ea.
Voluptatum repellat at officia corrupti provident iusto facere natus.', 'Nobis ipsa id excepturi enim laudantium provident rerum consectetur voluptatibus.'),
('Dickinson, Prosacco and Jones', 'https://spatial.io/Dickinson,_Prosacco_and_Jones', 'Earum consectetur fuga aperiam eligendi omnis sequi dolorum quae.
Nesciunt delectus recusandae magnam.
Sunt incidunt voluptatibus optio adipisci nesciunt.
Sequi eius unde a.', 'Dolore nulla molestiae optio modi tempora aut odit accusamus.'),
('Schiller Inc', 'https://spatial.io/Schiller_Inc', 'Quia veritatis accusamus ex officiis dolor at eveniet rem placeat.
Sint repellendus rerum occaecati officiis minus officiis.
Quia rerum suscipit nobis saepe aperiam porro.
Incidunt voluptatibus eveniet.
Nesciunt optio tempora at cum in reprehenderit repellat.', 'Ab architecto nihil adipisci.'),
('Wyman and Sons', 'https://spatial.io/Wyman_and_Sons', 'Praesentium nulla quibusdam voluptas.
Beatae natus corporis unde a quas ipsa voluptatem.
Nisi in sed nemo doloremque totam commodi natus at id.', 'Porro amet totam officiis.'),
('Bechtelar - Hagenes', 'https://spatial.io/Bechtelar_Hagenes', 'Recusandae quis expedita sapiente voluptatum consequatur omnis cum error voluptatum.', 'Veritatis excepturi cum cupiditate illo facilis nihil et.'),
('Kilback, Willms and Hills', 'https://spatial.io/Kilback,_Willms_and_Hills', 'Incidunt vitae officia doloribus rerum quod deserunt hic aliquam.
Iure aspernatur inventore.
Id illum aliquam veniam.
Neque eius beatae.', 'Iusto provident suscipit eos quisquam.'),
('Altenwerth - Kutch', 'https://spatial.io/Altenwerth_Kutch', 'Maxime et odio repellat laborum facere commodi porro.
Dolore temporibus optio ea impedit magnam corrupti voluptates.
Magni eum at quam doloribus maxime at.', 'Est hic sunt tempora vitae.'),
('Hermann, Veum and Marvin', 'https://spatial.io/Hermann,_Veum_and_Marvin', 'Non hic aut harum debitis at molestiae consectetur atque ab.
Quaerat doloribus reprehenderit distinctio rem iure quasi fugiat dignissimos.', 'Quasi molestias quasi.'),
('Dicki Group', 'https://spatial.io/Dicki_Group', 'Quidem illum repellat voluptatibus repudiandae nisi modi in beatae quas.
Eveniet accusamus sunt deserunt mollitia.
Quibusdam ratione modi nam.
Natus iure itaque sapiente labore.', 'Temporibus debitis aspernatur.'),
('OReilly - Reichert', 'https://spatial.io/OReilly_Reichert', 'Vel nostrum occaecati inventore ea quibusdam atque.
Ut ipsum sunt.
Necessitatibus pariatur soluta blanditiis dolorem hic quod error.
Impedit sequi ex numquam est amet voluptates consectetur eligendi maxime.
Provident ab commodi sunt temporibus eaque repellat explicabo tempora.', 'Laudantium numquam illo quis temporibus illo molestiae.'),
('Towne, Larkin and Wilderman', 'https://spatial.io/Towne,_Larkin_and_Wilderman', 'Officiis quam nobis voluptates.
Ab laudantium eveniet molestiae dolore velit doloribus odit omnis.', 'Ea impedit alias enim possimus debitis ut voluptatibus unde cumque.'),
('Goyette - Borer', 'https://spatial.io/Goyette_Borer', 'Doloremque aliquid odio nulla rem laudantium voluptatibus adipisci exercitationem.
Ut assumenda architecto laborum aliquam accusamus voluptas quas blanditiis praesentium.
Dicta quibusdam optio blanditiis reiciendis quam tempora perferendis libero ducimus.
Delectus ad quae distinctio.
Dolore facilis architecto eligendi praesentium praesentium.', 'Dolor voluptate sed dolores quidem recusandae nesciunt esse.'),
('Grady - Marvin', 'https://spatial.io/Grady_Marvin', 'Amet minus corrupti nihil debitis molestias quibusdam natus.
Unde recusandae nam optio unde.
Quidem id iste dicta fugiat pariatur.
Blanditiis perspiciatis quisquam odio corrupti voluptatibus amet non esse.
Nobis facere quia dolorem perferendis ipsa id distinctio rerum.', 'Illo nemo repudiandae amet porro nam voluptates saepe aliquid.'),
('Leffler LLC', 'https://spatial.io/Leffler_LLC', 'Ut sequi iusto fugit totam in perspiciatis.
Fuga earum quibusdam libero ut ratione sapiente.
Cumque officiis recusandae ab aut rerum commodi rem.
Impedit autem magni consectetur similique dolorem placeat repellat.
Assumenda illum commodi quasi adipisci aspernatur doloremque numquam dolores.', 'Delectus iure quaerat sapiente libero.'),
('Lebsack, Beatty and Krajcik', 'https://spatial.io/Lebsack,_Beatty_and_Krajcik', 'Explicabo voluptatum ut numquam.
Reprehenderit quae facilis maxime laudantium ipsum quis accusantium sint excepturi.
Libero sint neque earum non doloremque voluptatum impedit.', 'Doloremque dolorum saepe minus itaque cum quos nobis doloremque.'),
('Cassin, Zemlak and Fisher', 'https://spatial.io/Cassin,_Zemlak_and_Fisher', 'Ducimus eius illo accusantium dolores repudiandae.
Minima exercitationem nisi molestiae inventore illo quisquam.
Eius fugit ullam.', 'Quasi autem qui autem veniam velit.'),
('Marvin Inc', 'https://spatial.io/Marvin_Inc', 'Magni harum magnam libero cumque placeat nam facere odio.
Velit sapiente suscipit quas.
Rem aspernatur reiciendis quisquam eveniet.
Ipsa id et sit inventore illum sint delectus earum.', 'Nesciunt ex qui illum adipisci harum.');


INSERT INTO productBanner
(spaceIdx, imagePath)
VALUES
(1, 'assets/product/product1/banner/banner1.png'),
(1, 'assets/product/product1/banner/banner2.png'),
(1, 'assets/product/product1/banner/banner3.png'),
(1, 'assets/product/product1/banner/banner4.png');

INSERT INTO productComponent
(productIdx, imagePath)
VALUES
(1, 'assets/product/product1/component/component1.png'),
(1, 'assets/product/product1/component/component2.png'),
(1, 'assets/product/product1/component/component3.png'),
(1, 'assets/product/product1/component/component4.png');



INSERT INTO 
portfolio (portfolioName, spatialLink, skills, spaceDescription) 
VALUES
('Olson,CronaandPadberg', 'https://spatial.io', 'Soluta quia labore.','Facilis provident omnis ab.
Iusto labore quibusdam facere eum et.'),

('BlandaFranecki', 'https://spatial.io', 'Minus dolores incidunt dicta.','Voluptatibus iure nam.
Ullam assumenda natus quas iure vitae odit explicabo quibusdam.'),

('HoppeKlocko', 'https://spatial.io', 'Accusantium amet necessitatibus molestias voluptatum repellat quaerat facere tenetur corporis.','Dolores sed qui odit expedita quasi eaque recusandae sequi voluptatibus.
Ducimus id ad.'),

('BlandaKessler', 'https://spatial.io', 'Officia autem excepturi tenetur repellat recusandae quisquam animi optio vero.','Temporibus reiciendis rerum numquam impedit modi accusamus placeat qui.
Et provident debitis explicabo velit adipisci.'),

('Halvorson,WatersandPurdy', 'https://spatial.io', 'Ullam labore ducimus.','Minima eligendi omnis sunt.
Doloribus voluptate mollitia nihil architecto quis.'),

('OberbrunnerLLC', 'https://spatial.io', 'Ipsum illum maxime ullam.','Voluptas nesciunt inventore perferendis ea.
Ex veniam neque.'),

('BruenLLC', 'https://spatial.io', 'Nulla voluptas totam at vero doloremque.','Nihil perspiciatis commodi minus error.
Commodi ipsam est nostrum corporis enim quia tempore architecto nulla.'),

('Labadie,TremblayandHackett', 'https://spatial.io', 'Est aliquid inventore mollitia at placeat voluptas ea.','Dolor rerum aliquam sint praesentium repudiandae.        
Ea eos necessitatibus placeat repellendus quam a sed amet unde.'),

('BaumbachInc', 'https://spatial.io', 'Neque asperiores corporis omnis atque.','Reiciendis amet error perspiciatis.
Harum harum illum est pariatur tempore.'),

('Monahan,RaynorandWolff', 'https://spatial.io', 'Cupiditate porro praesentium fugiat beatae numquam.','Perferendis assumenda saepe explicabo impedit rem.
Eos cum odio.'),


INSERT INTO portfolioBanner
(spaceIdx, imagePath)
VALUES 
(1, 'assets/portfolio/portfolio1/banner/banner1.png'),
(1, 'assets/portfolio/portfolio1/banner/banner2.png'),
(1, 'assets/portfolio/portfolio1/banner/banner3.png'),
(1, 'assets/portfolio/portfolio1/banner/banner4.png'),
(1, 'assets/portfolio/portfolio1/banner/banner5.png');