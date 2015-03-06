DROP TABLE IF EXISTS `product`;

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL,	
  `product_id` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
   UNIQUE KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;