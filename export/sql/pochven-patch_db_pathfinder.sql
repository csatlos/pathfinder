START TRANSACTION;

# Add Trig space to system types
INSERT INTO `system_type` VALUES 
(4, '2021-02-21 17:30:00', '2021-02-21 17:30:00', 1, 't-space');

COMMIT;
