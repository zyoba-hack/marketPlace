DROP TABLE IF EXISTS `transaction` ;
CREATE TABLE `transaction` (
  `id` int(12) NOT NULL,
  `seller_id` int(12) NOT NULL,
  `buyer_id` int(12) NOT NULL,
  `product_id` int(12) NOT NULL,
  `is_deleted` enum('1','0') NOT NULL DEFAULT '0',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `seller_id` (`seller_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
