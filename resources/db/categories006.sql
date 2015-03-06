DROP TABLE IF EXISTS `categories`;
CREATE TABLE `mp_db`.`categories` (
`id` INT( 12 ) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` VARCHAR( 255 ) NOT NULL ,
`is_deleted` ENUM( '1', '0' ) NOT NULL DEFAULT '0',
`updated_at` TIMESTAMP NOT NULL ,
`created_at` TIMESTAMP NOT NULL
) ENGINE = InnoDB;