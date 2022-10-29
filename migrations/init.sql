CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(511),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `session` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `ip` varchar(31) DEFAULT NULL,
  `agent` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;