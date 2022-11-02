CREATE TABLE `signin_options` (
  `user_id` bigint unsigned NOT NULL,
  `platform` varchar(255) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL,
  KEY `fk_signin_options_user` (`user_id`),
  CONSTRAINT `fk_signin_options_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;