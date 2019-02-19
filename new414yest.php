<?php
/* НОВЫЕ 414 ВЧЕРА */
	require('connect.php');
	$query = "IF DATENAME(weekday, GETDATE()) IN (N'Monday')
				SELECT COUNT(id) AS new414yest 
					FROM dbo.issues 
						WHERE project_id=1 
							AND closed_on IS NULL 
							AND start_date = CAST(GETDATE()-3 AS DATE) 
							AND assigned_to_id IN 
								(SELECT user_id
									FROM dbo.groups_users
										WHERE group_id=171);
			ELSE
				SELECT COUNT(id) AS new414yest 
					FROM dbo.issues 
						WHERE project_id=1 
							AND closed_on IS NULL 
							AND start_date = CAST(GETDATE()-1 AS DATE) 
							AND assigned_to_id IN 
								(SELECT user_id
									FROM dbo.groups_users
										WHERE group_id=171);";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['new414yest'];
	}