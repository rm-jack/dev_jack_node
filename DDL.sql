create table domainPage (
	imageIdx INT auto_increment PRIMARY KEY COMMENT '이미지 idx',
	imagePath VARCHAR(50) COMMENT '이미지 경로',
	domainType VARCHAR(35) COMMENT '이미지가 들어가는 영역 구분'
);

create table flingIntroduction (
	imageIdx INT COMMENT '이미지 IDX FOREIGN KEY',
	title VARCHAR(15) COMMENT '소개 소제목',
	imageOrder TINYINT(1) UNSIGNED COMMENT '이미지 배치 순서',
	CONSTRAINT fk_domainPage_intro FOREIGN KEY (imageIdx) 
	REFERENCES domainPage(imageIdx) 
	ON DELETE CASCADE 
	ON UPDATE CASCADE
);

create table clientAndPartners (
	imageIdx INT COMMENT '이미지 IDX FOREIGN KEY', 
	imageOrder TINYINT(1) UNSIGNED COMMENT '이미지 배치 순서',
	CONSTRAINT fk_domainPage_cap FOREIGN KEY (imageIdx)
	REFERENCES domainPage(imageIdx)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

create table team(
	imageIdx INT COMMENT '이미지 IDX FOREIGN KEY',
	name VARCHAR(20) COMMENT '멤버 영어 이름',
	skills VARCHAR(50) COMMENT '담당 업무',
	imageOrder TINYINT(1) UNSIGNED COMMENT '이미지 배치 순서',
	CONSTRAINT fk_domainPage_team FOREIGN KEY (imageIdx)
	REFERENCES domainPage(imageIdx)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

create table mainBanner(
	imageIdx INT COMMENT '이미지 IDX FOREIGN KEY',
	imageOrder TINYINT(1) UNSIGNED COMMENT '이미지 배치 순서',
	CONSTRAINT fk_domainPage_banner FOREIGN KEY (imageIdx)
	REFERENCES domainPage(imageIdx)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);
create table flingSpace(
	imageIdx INT COMMENT 'imageIdx foreign key',
	spaceName VARCHAR(50) COMMENT '공간 이름',
	spatialLink VARCHAR(150) COMMENT '스페이셜 링크',
	spaceDescription TEXT(300) COMMENT '공간 설명 텍스트'
	CONSTRAINT fk_domainPage_flinSpace FOREIGN KEY (imageIdx)
	REFERENCES domainPage(imageIdx)
	ON DELETE CASCADE
	ON UPDATE CASCADE	
);


create table domainText(
	textIdx int auto_increment PRIMARY KEY COMMENT 'IDX',
	domainType VARCHAR(35) COMMENT '텍스트가 들어갈 페이지 영역',
	domainContent VARCHAR(100) COMMENT '입력 텍스트'
);

create table flingUser (
	userIdx int auto_increment PRIMARY KEY COMMENT 'IDX',
	email VARCHAR(50) COMMENT '이메일',
	password text(300) COMMENT '해쉬 비밀번호',
	user_role VARCHAR(30) COMMENT '유저 역할 : member, admin'
)

create table notice (
	noticeIdx INT AUTO_INCREMENT PRIMARY KEY COMMENT 'IDX',
	userIdx INT COMMENT '유저 IDX FOREIGN KEY',
	title VARCHAR(50) COMMENT '공지사항 제목',
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '작성일',
	views INT COMMENT '조회수',
	isPinned CHAR(1) COMMENT '중요 공지사항 체크 : {0: 일반, 1: 중요}',
	content TEXT(500) COMMENT '공지사항 내용',
	CONSTRAINT fk_user_idx FOREIGN KEY (userIdx)
	REFERENCES flingUser(userIdx)
)

CREATE TABLE event (
	eventIdx INT COMMENT 'IDX',
	title VARCHAR(50) COMMENT '이벤트 제목',
	mainImagePath VARCHAR(50) COMMENT '이벤트 썸네일 이미지',
	startingDate DATETIME COMMENT '이벤트 시작일', 
	endDate DATETIME COMMENT '이벤트 종료일',
	eventJoin VARCHAR(150) COMMENT '이벤트 참가 방법',
	eventInquiry VARCHAR(150) COMMENT '이벤트 문의',
	eventDescription TEXT(400) COMMENT '이벤트 내용'
);



CREATE TABLE product (
	productIdx INT PRIMARY KEY AUTO_INCREMENT COMMENT 'product idx',
	productName VARCHAR(50) NOT NULL COMMENT '공간 이름',
	spatialLink VARCHAR(150) NOT NULL COMMENT 'SPATIAL 공간 연결 URI',
	spaceDescription TEXT(300) NOT NULL COMMENT 'product 상세 설명',
	skills VARCHAR(250) NOT NULL COMMENT '주요 기술',
	imagePath VARCHAR(150) NOT NULL COMMENT '썸네일 이미지'
);
create table productBanner (
	spaceIdx int not null COMMNET 'IDX',
	imagePath VARCHAR(150) COMMNET '배너 이미지 경로',
	CONSTRAINT product_fk FOREIGN KEY (spaceIdx) REFERENCES product(productIdx)
);
CREATE TABLE productComponent (
	productIdx INT COMMENT 'product idx foreign key',
	imagePath VARCHAR(50) COMMENT '공간 구성도 이미지 저장 경로',
	CONSTRAINT fk_spatial_space_product_component FOREIGN KEY (productIdx) 
	REFERENCES product(productIdx)
	ON DELETE CASCADE
);

CREATE TABLE portfolio (
	portfolioIdx INT PRIMARY KEY AUTO_INCREMENT COMMENT '포트폴리오 idx',
	portfolioName VARCHAR(50) NOT NULL COMMENT '포트폴리오 제목',
	spatialLink VARCHAR(150) NOT NULL COMMENT 'SPATIAL 공간 연결 URI',
	skills VARCHAR(250) NOT NULL COMMENT '주요 기술',
	imagePath VARCHAR(150) NOT NULL COMMENT '썸네일 이미지'
); 

create table portfolioBanner (
	spaceIdx int not null COMMENT 'IDX',
	imagePath VARCHAR(150) COMMENT '배너 이미지 경로',
	CONSTRAINT portfolio_fk FOREIGN KEY (spaceIdx) REFERENCES portfolio(portfolioIdx)
); 


CREATE TABLE useCase (
	useCaseIdx INT PRIMARY KEY AUTO_INCREMENT COMMENT '고객 사용 공간 idx',
	useCaseName VARCHAR(50) NOT NULL COMMENT '공간 이름',
	spaceImagePath VARCHAR(50) NOT NULL COMMENT 'USECASE 썸네일 이미지',
	spatialLink VARCHAR(150) NOT NULL COMMENT 'SPATIAL 공간 연결 URI',
	startDate DATETIME NOT NULL COMMENT '임대 시작일',
	endDate DATETIME NOT NULL COMMENT '임대 종료일',
	serviceGubun VARCHAR(20) NOT NULL COMMENT '서비스 종류 STANDARD, DELUXE, PREMIUM',
	status VARCHAR(20) COMMENT '서비스 임대 중, 연장 신청중, 연장 심사 중, 임대 종료, -' 
);