<?php
/* НЕ РАСПРЕДЕЛЕНО СЕГОДНЯ */
	require('connect.php');
	$query = "SELECT COUNT(id) AS todayNONE 
				FROM dbo.issues 
					WHERE project_id = 1 
						AND start_date = CAST(GETDATE() AS DATE) 
						AND assigned_to_id IS NULL";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['todayNONE'];
	}