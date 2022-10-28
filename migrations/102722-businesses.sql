-- Create syntax for TABLE 'business'
CREATE TABLE `business` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create syntax for TABLE 'business_hours'
CREATE TABLE `business_hours` (
  `business_id` bigint unsigned NOT NULL,
  `day_of_week` int NOT NULL,
  `open` time DEFAULT NULL,
  `close` time DEFAULT NULL,
  KEY `Fk_business_hours_business` (`business_id`),
  CONSTRAINT `Fk_business_hours_business` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create syntax for TABLE 'business_hours_override'
CREATE TABLE `business_hours_override` (
  `business_id` bigint unsigned NOT NULL,
  `start_range` date NOT NULL,
  `end_range` date DEFAULT NULL,
  `day_of_week` int NOT NULL,
  `open` int DEFAULT NULL,
  `close` int DEFAULT NULL,
  KEY `Fk_business_hours_override_business` (`business_id`),
  CONSTRAINT `Fk_business_hours_override_business` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `business_wait_time` (
  `business_id` bigint unsigned NOT NULL,
  `wait_time` time NOT NULL,
  `set_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;