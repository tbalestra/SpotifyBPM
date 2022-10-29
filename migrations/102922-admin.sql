-- Create syntax for TABLE 'admin_privileges'
CREATE TABLE `admin_privileges` (
  `user_id` bigint unsigned NOT NULL,
  `business_id` bigint unsigned NOT NULL,
  `privilege` int NOT NULL,
  `granted_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `unique_user_business_privilege` (`user_id`,`business_id`,`privilege`),
  KEY `Fk_admin_privileges_business` (`business_id`),
  KEY `Idx_user_business` (`user_id`,`business_id`),
  CONSTRAINT `Fk_admin_privileges_business` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE,
  CONSTRAINT `Fk_admin_privileges_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create syntax for TABLE 'dwjg_admin'
CREATE TABLE `dwjg_admin` (
  `user_id` bigint unsigned NOT NULL,
  KEY `Fk_dwjg_admin_user` (`user_id`),
  CONSTRAINT `Fk_dwjg_admin_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;