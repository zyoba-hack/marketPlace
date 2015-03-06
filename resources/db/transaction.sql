CREATE TABLE `mp_db`.`transaction` (
`id` INT( 12 ) NOT NULL ,
`seller_id` INT( 12 ) NOT NULL ,
`buyer_id` INT( 12 ) NOT NULL ,
`product_id` INT( 12 ) NOT NULL ,
`is_deleted` ENUM( '1', '0' ) NOT NULL DEFAULT '0',
`updated_at` TIMESTAMP NOT NULL ,
`created_at` TIMESTAMP NOT NULL
) ENGINE = InnoDB;