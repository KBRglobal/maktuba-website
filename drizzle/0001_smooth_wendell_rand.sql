CREATE TABLE `readings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(64) NOT NULL,
	`title` varchar(255) NOT NULL,
	`recipientName` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`passwordHash` varchar(255) NOT NULL,
	`isRead` boolean NOT NULL DEFAULT false,
	`readAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `readings_id` PRIMARY KEY(`id`),
	CONSTRAINT `readings_slug_unique` UNIQUE(`slug`)
);
