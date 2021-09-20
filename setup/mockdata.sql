INSERT INTO boards (
   board_name
) 
VALUES 
('So`rovlar'),
('Kutish'),
('To`plam');

INSERT INTO  items (
   item_title,
   board_id
) VALUES
('Instagram', 1),
('Telegram', 1),
('Website', 1),
('Qayta bog`lanish', 2),
('Rus tili', 2),
('Matematika', 2),
('Ielts', 3);

INSERT INTO lists (
   list_name,
   list_number,
   list_comment,
   item_id
) VALUES
('Asadullo', '998943821261', 'salom', 1),
('Jasur', '998943821262', 'qalaysan', 1),
('Ahror', '998943821263', 'yaxshi', 2),
('Hamidillo', '998943851261', 'boladi', 2),
('Iskandar', '998943821236', 'tinch', 3),
('Shoxabos', '998943821287', 'qayerda', 3),
('Sardor', '998943821285', 'men', 4),
('Xayrullo', '998943821232', 'qani', 4),
('Odil', '998943821212', 'biz bilan', 5),
('Saidabror', '99894382111', 'qachon', 5),
('Bobur', '998943821200', 'tezroq bol', 6),
('Avaz', '998943821214', 'nechchi boldi', 6),
('Bobur', '998943821200', 'tezroq bol', 7),
('Avaz', '998943821214', 'nechchi boldi', 7);
