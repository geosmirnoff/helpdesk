<?php
/* ОБЩЕЕ КОЛИЧЕСТВО ЗАДАЧ ВЧЕРА */
	require('connect.php');
	$query = "IF DATENAME(weekday, GETDATE()) IN (N'Monday')
				SELECT COUNT(id) AS yestALL 
					FROM dbo.issues 
						WHERE project_id = 1 
							AND start_date = CAST(GETDATE()-3 AS DATE);
			ELSE
				SELECT COUNT(id) AS yestALL 
					FROM dbo.issues 
						WHERE project_id = 1 
							AND start_date = CAST(GETDATE()-1 AS DATE);";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['yestALL'];
	}