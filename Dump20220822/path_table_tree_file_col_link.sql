CREATE DATABASE  IF NOT EXISTS `path_table_tree` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `path_table_tree`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: path_table_tree
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `file_col_link`
--

DROP TABLE IF EXISTS `file_col_link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file_col_link` (
  `id` int NOT NULL AUTO_INCREMENT,
  `col_id` int NOT NULL,
  `file_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`,`col_id`,`file_id`),
  KEY `fk_link_col_id_idx` (`col_id`),
  KEY `fk_link_file_id_idx` (`file_id`),
  CONSTRAINT `fk_link_col_id` FOREIGN KEY (`col_id`) REFERENCES `col_list` (`id`),
  CONSTRAINT `fk_link_file_id` FOREIGN KEY (`file_id`) REFERENCES `file_list` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_col_link`
--

LOCK TABLES `file_col_link` WRITE;
/*!40000 ALTER TABLE `file_col_link` DISABLE KEYS */;
INSERT INTO `file_col_link` VALUES (35,715,15,'2022-08-08 13:05:22','2022-08-17 17:30:50',0),(36,716,15,'2022-08-08 13:05:22','2022-08-16 17:29:02',1),(37,715,16,'2022-08-08 13:05:22','2022-08-16 17:28:27',1),(38,715,18,'2022-08-08 13:05:22','2022-08-16 17:28:32',1),(39,715,20,'2022-08-08 13:05:22','2022-08-16 17:28:36',1),(40,715,21,'2022-08-08 13:05:22','2022-08-16 17:28:44',1),(41,716,20,'2022-08-08 13:05:22','2022-08-16 17:28:58',1);
/*!40000 ALTER TABLE `file_col_link` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-22 15:20:08
