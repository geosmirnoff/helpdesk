<?php
/* НОВЫЕ 415 СЕГОДНЯ */
	require('connect.php');
	$query = "SELECT COUNT(id) AS new415today 
				FROM dbo.issues 
					WHERE project_id=1 
						AND closed_on IS NULL 
						AND start_date = CAST(GETDATE() AS DATE) 
						AND assigned_to_id IN 
							(SELECT user_id
								FROM dbo.groups_users
									WHERE group_id=11)";
	$res = sqlsrv_query($conn, $query);
	while ($row = sqlsrv_fetch_array($res))
	{
		echo $row['new415today'];
	}