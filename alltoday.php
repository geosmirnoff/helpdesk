<?php
/* ОБЩЕЕ КОЛИЧЕСТВО ЗАДАЧ СЕГОДНЯ */
	require('connect.php');
	$query = "SELECT COUNT(id) AS todayALL
				FROM dbo.issues
					WHERE project_id = 1
						AND start_date = CAST(GETDATE() AS DATE)";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['todayALL'];
	}