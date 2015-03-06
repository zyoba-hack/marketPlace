
DROP TABLE IF EXISTS `sellers`;

CREATE TABLE IF NOT EXISTS `sellers` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `user_id` int(12) NOT NULL,
  `contact_no` int(12) NOT NULL,
  `address_line1` varchar(255) DEFAULT NULL,
  `address_line2` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;


ALTER TABLE `sellers`
  ADD CONSTRAINT `sellers_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

