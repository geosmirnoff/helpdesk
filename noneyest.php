<?php
/* НЕ РАСПРЕДЕЛЕНО ВЧЕРА */
	require('connect.php');
	$query = "IF DATENAME(weekday, GETDATE()) IN (N'Monday')
				SELECT COUNT(id) AS yestNONE
					FROM dbo.issues 
						WHERE project_id = 1 
							AND start_date = CAST(GETDATE()-3 AS DATE) 
							AND assigned_to_id IS NULL;
			ELSE
				SELECT COUNT(id) AS yestNONE
					FROM dbo.issues 
						WHERE project_id = 1 
							AND start_date = CAST(GETDATE()-1 AS DATE) 
							AND assigned_to_id IS NULL;";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['yestNONE'];
	}